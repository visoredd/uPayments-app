import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../utils/store";
import AddButton from "./AddButton";

test("renders add button component ", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <AddButton />
      </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId("create-button");
  expect(linkElement).toBeInTheDocument();
});
