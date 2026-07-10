import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "../../app/App";

describe("App", () => {
  it("render button", async () => {
    window.alert = jest.fn(); //mock
    render(<App />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(window.alert).toHaveBeenCalled();
  });
});
