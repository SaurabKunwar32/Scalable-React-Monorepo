import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../../app/pages/Home";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

jest.mock("@repo/ui", () => ({
  Button: ({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick: () => void;
  }) => <button onClick={onClick}>{children}</button>,
}));

describe("Home", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renders the navbar", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /fe\s*lifecycle/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("React Monorepo Playground")).toBeInTheDocument();

    expect(screen.getByText("PNPM Workspace")).toBeInTheDocument();
  });

  it("renders the hero section", () => {
    render(<Home />);

    expect(
      screen.getByText("Modern Frontend Architecture"),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /build once\.\s*reuse everywhere\./i,
      }),
    ).toBeInTheDocument();
  });

  it("renders all feature cards", () => {
    render(<Home />);

    expect(screen.getByText("@repo/ui")).toBeInTheDocument();
    expect(screen.getByText("@repo/utils")).toBeInTheDocument();
    expect(screen.getByText("Scalable Workflow")).toBeInTheDocument();
  });

  it("renders all benefits", () => {
    render(<Home />);

    [
      "Shared Components",
      "Shared Utilities",
      "Single Dependency Graph",
      "Type Safety",
      "Reusable Configurations",
      "Faster Development",
    ].forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("navigates to project structure page", async () => {
    const user = userEvent.setup();

    render(<Home />);

    await user.click(
      screen.getByRole("button", {
        name: /view project structure/i,
      }),
    );

    expect(mockNavigate).toHaveBeenCalledWith("/structure");
  });

  it("navigates to size converter page", async () => {
    const user = userEvent.setup();

    render(<Home />);

    await user.click(
      screen.getByRole("button", {
        name: /try the demo/i,
      }),
    );

    expect(mockNavigate).toHaveBeenCalledWith("/size-converter");
  });

  it("renders the footer", () => {
    render(<Home />);

    expect(
      screen.getByText("React • TypeScript • Tailwind CSS • PNPM Workspace"),
    ).toBeInTheDocument();
  });
});
