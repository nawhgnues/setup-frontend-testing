import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./Button";

describe("Button component", () => {
  it("If no props are specified, a button with the default style will be displayed.", () => {
    render(<Button onClick={() => {}}>Default Button</Button>);
    const button = screen.getByRole("button", { name: /default button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "text-white rounded bg-blue-500 px-6 py-3 opacity-100 cursor-pointer"
    );
  });

  it("The onClick handler is called when the button is clicked.", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>OnClick button</Button>);
    const button = screen.getByRole("button", { name: /onclick button/i });
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
