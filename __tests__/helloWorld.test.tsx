import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HelloWorld from '../app/components/HelloWorld';

describe('HelloWorld Component', () => {
  test('renders hello world text', () => {
    render(<HelloWorld />);
    const linkElement = screen.getByText(/hello world/i);
    expect(linkElement).toBeInTheDocument();
  });
});
