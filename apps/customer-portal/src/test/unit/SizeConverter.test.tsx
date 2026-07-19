import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SizeConverter from "../../app/pages/SizeConverter";

const mockConvertSize = jest.fn();

jest.mock("@repo/utils", () => ({
  convertSize: (...args: unknown[]) => mockConvertSize(...args),
}));

jest.mock("react-router-dom", () => ({
  Link: ({
    children,
    to,
  }: {
    children: React.ReactNode;
    to: string;
  }) => <a href={to}>{children}</a>,
}));

describe("SizeConverter", () => {
  beforeEach(() => {
    mockConvertSize.mockReset();
    mockConvertSize.mockReturnValue(1024);
  });

  it("renders the page", () => {
    render(<SizeConverter />);

    expect(screen.getByText("Size Converter")).toBeInTheDocument();
    expect(screen.getByText(/Powered by/i)).toBeInTheDocument();
    expect(screen.getByText("Result")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /back/i })).toBeInTheDocument();
  });

  it("uses default values", () => {
    render(<SizeConverter />);

    expect(mockConvertSize).toHaveBeenCalledWith(1, "GB", "MB");
    expect(screen.getByText("1,024")).toBeInTheDocument();
    expect(screen.getByText(/1 GB = 1,024 MB/i)).toBeInTheDocument();
  });

  it("changes the input value", async () => {
    const user = userEvent.setup();

    render(<SizeConverter />);

    const input = screen.getByRole("spinbutton");

    await user.clear(input);
    await user.type(input, "5");

    expect(mockConvertSize).toHaveBeenLastCalledWith(5, "GB", "MB");
  });

  it("changes the units", async () => {
    const user = userEvent.setup();

    render(<SizeConverter />);

    const selects = screen.getAllByRole("combobox");

    await user.selectOptions(selects[0], "MB");
    expect(mockConvertSize).toHaveBeenLastCalledWith(1, "MB", "MB");

    await user.selectOptions(selects[1], "KB");
    expect(mockConvertSize).toHaveBeenLastCalledWith(1, "MB", "KB");
  });

  it("renders formatted result", () => {
    mockConvertSize.mockReturnValue(2048);

    render(<SizeConverter />);

    expect(screen.getByText("2,048")).toBeInTheDocument();
    expect(screen.getByText(/1 GB = 2,048 MB/i)).toBeInTheDocument();
  });
});