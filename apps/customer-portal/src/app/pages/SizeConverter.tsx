import { useState } from "react";
import { convertSize, type SizeUnit } from "@repo/utils";
import { Link } from "react-router-dom";

const units: SizeUnit[] = [
  "B",
  "KB",
  "MB",
  "GB",
  "TB",
  "KiB",
  "MiB",
  "GiB",
  "TiB",
];

export default function SizeConverter() {
  const [value, setValue] = useState(1);
  const [from, setFrom] = useState<SizeUnit>("GB");
  const [to, setTo] = useState<SizeUnit>("MB");

  const result = convertSize(value, from, to);

  return (
    <div className="min-h-screen bg-slate-50 p-10 text-slate-900">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="mb-8 inline-block text-blue-600 transition hover:text-blue-700"
        >
          ← Back
        </Link>

        <h1 className="mb-2 text-5xl font-bold">Size Converter</h1>

        <p className="mb-10 text-slate-600">
          Powered by <strong>@repo/utils</strong>
        </p>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                Value
              </label>

              <input
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                From
              </label>

              <select
                value={from}
                onChange={(e) => setFrom(e.target.value as SizeUnit)}
                className="w-full rounded-lg border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                {units.map((unit) => (
                  <option key={unit}>{unit}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-600">
                To
              </label>

              <select
                value={to}
                onChange={(e) => setTo(e.target.value as SizeUnit)}
                className="w-full rounded-lg border border-slate-300 bg-white p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                {units.map((unit) => (
                  <option key={unit}>{unit}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-blue-200 bg-blue-50 p-8 text-center">
            <div className="text-sm font-medium text-slate-600">Result</div>

            <div className="mt-3 text-4xl font-bold text-blue-600">
              {result.toLocaleString()}
            </div>

            <div className="mt-2 text-slate-500">
              {value} {from} = {result.toLocaleString()} {to}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
