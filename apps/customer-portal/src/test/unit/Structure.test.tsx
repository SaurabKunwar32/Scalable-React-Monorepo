import { render, screen } from "@testing-library/react";
import Structure from "../../app/pages/Structure";

jest.mock("react-router-dom", () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

describe("Structure Page", () => {
  it("renders the page title and subtitle", () => {
    render(<Structure />);

    expect(
      screen.getByRole("heading", { name: /project/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/FE Lifecycle React Monorepo/i),
    ).toBeInTheDocument();
  });

  it("renders the monorepo description", () => {
    render(<Structure />);

    expect(
      screen.getByRole("heading", {
        name: /Monorepo Folder Layout/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/This project uses a PNPM workspace/i),
    ).toBeInTheDocument();
  });

  it("renders the back home link", () => {
    render(<Structure />);

    const link = screen.getByRole("link", {
      name: /back home/i,
    });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });

  it("renders the project folder structure", () => {
    render(<Structure />);

    expect(screen.getByText(/FE-LIFECYCLE/i)).toBeInTheDocument();
    expect(screen.getByText(/deploy\.yml/i)).toBeInTheDocument();
    expect(screen.getByText(/quality-gates\.yml/i)).toBeInTheDocument();
    expect(screen.getByText(/customer-portal/i)).toBeInTheDocument();
    expect(screen.getByText(/package\.json/i)).toBeInTheDocument();
    expect(screen.getByText(/pnpm-workspace\.yaml/i)).toBeInTheDocument();
    expect(screen.getByText(/sonar-project\.properties/i)).toBeInTheDocument();
  });

  it("renders the preformatted structure block", () => {
    render(<Structure />);

    const pre = document.querySelector("pre");

    expect(pre).toBeInTheDocument();
    expect(pre).toHaveTextContent("FE-LIFECYCLE");
    expect(pre).toHaveTextContent("packages");
    expect(pre).toHaveTextContent("customer-portal");
  });
});
