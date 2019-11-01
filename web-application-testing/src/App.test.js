import React from 'react';
import App from './App';
import { render } from "@testing-library/react"


test('renders without crashing', () => {
  render(<App />, );
});

test('balls display is found', () => {
  const { getByText } = render(<App />)

  getByText(/balls/i)
})

test('strikes display is found', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/strikes-display/i)
})
