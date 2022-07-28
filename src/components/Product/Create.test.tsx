import React from "react";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../utils/store";

import Create from "./Create";

type TestElement = Document | Element | Window | Node;

function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

test("renders create component ", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Create />
      </Provider>
    </BrowserRouter>
  );

  const linkElement = screen.getByTestId("create-form");
  expect(linkElement).toBeInTheDocument();
});

test("renders check input name label", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Create />
      </Provider>
    </BrowserRouter>
  );

  const input = screen.getByTestId("name-test");

  fireEvent.change(input, { target: { value: "I Phone" } });
  expect(hasInputValue(input, "I Phone")).toBe(true);
});

test("renders check input description label", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Create />
      </Provider>
    </BrowserRouter>
  );

  const input = screen.getByTestId("desc-test");

  fireEvent.change(input, { target: { value: "I Phone" } });
  expect(hasInputValue(input, "I Phone")).toBe(true);
});
