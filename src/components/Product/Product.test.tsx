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
import ProductList from "./ProductList";

test("renders home component with Loading....", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductList
          filter={""}
          category={""}
          isLoading={true}
          data={[
            {
              createdAt: 1596543,
              name: "IPhone",
              avatar: "img:src",
              developerEmail: "email@email.com",
              price: "59",
              id: "1",
              category: "Electronics",
              description: "Test",
            },
          ]}
        />
      </Provider>
    </BrowserRouter>
  );

  const linkElement = screen.getByTestId("loading");
  expect(linkElement).toBeInTheDocument();
});

test("renders product list component ", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductList
          filter={""}
          category={""}
          isLoading={false}
          data={[
            {
              createdAt: 1596543,
              name: "IPhone",
              avatar: "img:src",
              developerEmail: "email@email.com",
              price: "59",
              id: "1",
              category: "Electronics",
              description: "Test",
            },
          ]}
        />
      </Provider>
    </BrowserRouter>
  );

  const linkElement = screen.getByTestId("1");
  expect(linkElement).toBeInTheDocument();
});

test("selecting different category should not display our mock list", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductList
          filter={""}
          category={"Furnitures"}
          isLoading={false}
          data={[
            {
              createdAt: 1596543,
              name: "IPhone",
              avatar: "img:src",
              developerEmail: "email@email.com",
              price: "59",
              id: "1",
              category: "Electronics",
              description: "Test",
            },
          ]}
        />
      </Provider>
    </BrowserRouter>
  );
  expect(screen.queryByText("IPhone")).toBeNull();
});
