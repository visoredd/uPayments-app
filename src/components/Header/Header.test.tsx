import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../utils/store";
import Header from "./Header";

test("renders header component ", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/UPayments Store/i);
  expect(linkElement).toBeInTheDocument();
  const register = screen.getByText(/Register/i);
  expect(register).toBeInTheDocument();
});
