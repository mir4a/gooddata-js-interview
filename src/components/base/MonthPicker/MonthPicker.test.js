import React from 'react';
import ReactDOM from 'react-dom';
import MonthPicker from '.';
import renderer from 'react-test-renderer';

it('renders correct', async () => {
  const div = document.createElement('div');
  const onChange = jest.fn();
  ReactDOM.render(<MonthPicker onChange={onChange} />, div);
});

it('match basic snapshot', () => {
  const onChange = jest.fn();
  const tree = renderer.create(<MonthPicker onChange={onChange} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('render with defaultValue', () => {
  const onChange = jest.fn();
  const tree = renderer
    .create(<MonthPicker onChange={onChange} defaultValue="2" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
