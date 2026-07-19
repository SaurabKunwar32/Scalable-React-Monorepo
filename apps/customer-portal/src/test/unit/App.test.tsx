import { render, screen, act } from "@testing-library/react";
import App from "../../app/App";

jest.useFakeTimers();

// Mock Spinner
jest.mock("@repo/ui", () => ({
  Spinner: () => <div>Loading...</div>,
}));

// Mock react-router-dom
jest.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  Routes: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  Route: ({ element }: { element: React.ReactElement }) => element,
}));

// Mock pages
jest.mock("../../app/pages/Home", () => () => <h1>Home Page</h1>);
jest.mock("../../app/pages/SizeConverter", () => () => (
  <h1>Size Converter Page</h1>
));
jest.mock("../../app/pages/Structure", () => () => <h1>Structure Page</h1>);

describe("App", () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  it("shows spinner initially", () => {
    render(<App />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("shows Home page after loading", () => {
    render(<App />);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });
});
