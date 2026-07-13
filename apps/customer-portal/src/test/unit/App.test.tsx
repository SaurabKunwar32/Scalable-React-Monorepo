// import { render, screen } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
// import App from "../../app/App";

// describe("App", () => {
//   it("render button", async () => {
//     window.alert = jest.fn(); //mock
//     render(<App />);
//     const button = screen.getByRole("button");
//     await userEvent.click(button);
//     expect(window.alert).toHaveBeenCalled();
//   });
// });

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../app/App";

jest.mock("@repo/ui", () => ({
  Button: ({ onClick }: { onClick: () => void }) => (
    <button onClick={onClick}>Test Button</button>
  ),
}));

describe("App", () => {
  it("should render React Monorepo Lifecycle heading", () => {
    render(<App />);

    expect(
      screen.getByText("React Monorepo Lifecycle")
    ).toBeInTheDocument();
  });

  it("should render PNPM Workspace badge", () => {
    render(<App />);

    expect(
      screen.getByText("PNPM Workspace")
    ).toBeInTheDocument();
  });

  it("should render monorepo information cards", () => {
    render(<App />);

    expect(
      screen.getByText(/Shared Packages/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/React Applications/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Automation/)
    ).toBeInTheDocument();
  });

  it("should render workflow steps", () => {
    render(<App />);

    expect(screen.getByText("Code")).toBeInTheDocument();
    expect(screen.getByText("Lint")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Build")).toBeInTheDocument();
    expect(screen.getByText("Deploy")).toBeInTheDocument();
  });

  it("should render action buttons", () => {
    render(<App />);

    expect(
      screen.getByRole("button", { name: "Test Button" })
    ).toBeInTheDocument();

    expect(
      screen.getByText("Explore Architecture")
    ).toBeInTheDocument();
  });

  it("should show formatted currency when button is clicked", async () => {
    const user = userEvent.setup();

    window.alert = jest.fn();

    render(<App />);

    const button = screen.getByRole("button", {
      name: "Test Button",
    });

    await user.click(button);

    expect(window.alert).toHaveBeenCalled();
  });

  it("should render footer text", () => {
    render(<App />);

    expect(
      screen.getByText(
        "Built with React + TypeScript + PNPM Monorepo"
      )
    ).toBeInTheDocument();
  });
});