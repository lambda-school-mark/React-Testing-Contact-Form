import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("Input Id is Edd", () => {
  const { getByPlaceholderText } = render(<ContactForm />);
  expect(getByPlaceholderText("Edd"));
});

test("Input Id is Burke", () => {
  const { getByPlaceholderText } = render(<ContactForm />);
  expect(getByPlaceholderText("Burke"));
});

// test("Is First Name text there", () => {
//   render(<ContactForm />);
//   const labelFirstName = screen.getAllByLabelText(/First Name/i);
//   expect(labelFirstName).toBeInTheDocument();
// });

test("renders learn react link", () => {
  const { getByText } = render(<ContactForm />);
  const FirstInput = getByText(/First Name*/i);
  expect(FirstInput).toBeInTheDocument();
});
