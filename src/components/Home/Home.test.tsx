import React from "react";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../utils/store";
import {
  useCreateProductMutation,
  useGetCategoriesQuery,
} from "../../services/products";
import Home from "./Home";

test("renders home component ", async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId("category-input");
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getByTestId("filter-input");
  expect(linkElement2).toBeInTheDocument();
});
