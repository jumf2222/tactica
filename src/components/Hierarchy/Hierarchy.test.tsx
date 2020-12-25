import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hierarchy from './Hierarchy';

describe('<Hierarchy />', () => {
  test('it should mount', () => {
    render(<Hierarchy />);
    
    const hierarchy = screen.getByTestId('Hierarchy');

    expect(hierarchy).toBeInTheDocument();
  });
});