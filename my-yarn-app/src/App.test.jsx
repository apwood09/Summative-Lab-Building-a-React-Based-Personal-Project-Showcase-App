import { render, screen } from '@testing-library/react';
import App from './App';
import { expect, test } from 'vitest';

test('renders the mystical navbar links', async () => {
  render(<App />);

  const dashboardLink = screen.getByText(/dashboard/i);
  expect(dashboardLink).toBeInTheDocument();

  const inventoryLink = screen.getByText(/yarn inventory/i);
  expect(inventoryLink).toBeInTheDocument();
  
});
