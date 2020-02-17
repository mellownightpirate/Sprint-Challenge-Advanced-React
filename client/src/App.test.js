import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlayerList from "./components/PlayerList";
import Header from "./components/Header";
import * as rtl from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('heading displayed', () => {
  const {getByTestId} = rtl.render(<PlayerList />);
  getByTestId(/heading/i)
  })

  test("displays toggle function", () => {
    const { getByTestId } = rtl.render(<Header />);
    getByTestId("toggle");
  });

  it('renders players text', () => { 
    const wrapper = rtl.render(<PlayerList />);
    const hasPlayerName = wrapper.queryByText(/Alex Morgan/i);
});