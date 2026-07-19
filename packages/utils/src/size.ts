const DECIMAL_UNITS = ["B", "KB", "MB", "GB", "TB", "PB"] as const;
const BINARY_UNITS = ["B", "KiB", "MiB", "GiB", "TiB", "PiB"] as const;

export type SizeUnit =
  | "B"
  | "KB"
  | "MB"
  | "GB"
  | "TB"
  | "PB"
  | "KiB"
  | "MiB"
  | "GiB"
  | "TiB"
  | "PiB";

/**
 * Convert a size from one unit to another.
 */
export function convertSize(
  value: number,
  from: SizeUnit,
  to: SizeUnit,
): number {
  const fromBase = from.includes("i") ? 1024 : 1000;
  const toBase = to.includes("i") ? 1024 : 1000;

  const fromUnits = from.includes("i") ? BINARY_UNITS : DECIMAL_UNITS;
  const toUnits = to.includes("i") ? BINARY_UNITS : DECIMAL_UNITS;

  const fromIndex = fromUnits.indexOf(from as any);
  const toIndex = toUnits.indexOf(to as any);

  if (fromIndex === -1 || toIndex === -1) {
    throw new Error(
      "Cannot convert between decimal and binary units directly.",
    );
  }

  const bytes = value * Math.pow(fromBase, fromIndex);

  return bytes / Math.pow(toBase, toIndex);
}

/**
 * Format bytes automatically.
 */
export function formatBytes(
  bytes: number,
  binary = false,
  decimals = 2,
): string {
  if (bytes === 0) return "0 B";

  const base = binary ? 1024 : 1000;
  const units = binary ? BINARY_UNITS : DECIMAL_UNITS;

  const index = Math.floor(Math.log(bytes) / Math.log(base));

  return `${(bytes / Math.pow(base, index)).toFixed(decimals)} ${units[index]}`;
}

/**
 * Convert any unit into bytes.
 */
export function toBytes(value: number, unit: SizeUnit): number {
  const base = unit.includes("i") ? 1024 : 1000;
  const units = unit.includes("i") ? BINARY_UNITS : DECIMAL_UNITS;

  const index = units.indexOf(unit as any);

  return value * Math.pow(base, index);
}

/**
 * Convert bytes into a target unit.
 */
export function fromBytes(bytes: number, unit: SizeUnit): number {
  const base = unit.includes("i") ? 1024 : 1000;
  const units = unit.includes("i") ? BINARY_UNITS : DECIMAL_UNITS;

  const index = units.indexOf(unit as any);

  return bytes / Math.pow(base, index);
}
