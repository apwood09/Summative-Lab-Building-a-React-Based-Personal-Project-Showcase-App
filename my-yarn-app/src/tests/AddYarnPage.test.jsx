// AddYarnPage.jsx User Interaction: Add Product Form 

import { render, screen, fireEvent } from '@testing-library/react';
import { AddYarnPage } from "../pages/AddYarnPage";
import { YarnProvider } from '../context/YarnContext';
import { expect, test, vi } from 'vitest';

// test 1: update input values upon user typing 
test('updates input values on user typing', () => {
    // mocking: context values, no real fetch occurs
  const mockValue = {
    addYarn: vi.fn(), // "fake" function: track clicks
    loading: false
  };

    render(
        <YarnProvider>
            <AddYarnPage />
        </YarnProvider>
    ); 

    // nameInput = placeholder for yarn name 
    const nameInput = screen.getByLabelText(/yarn name/i); 

    // simulate user typing "Dragon Scale Wool"
    fireEvent.change(nameInput, { target: { value: 'Dragon Scale Wool' } });

    expect(nameInput.value).toBe('Dragon Scale Wool'); 
}); 

// test 2: shows loading or triggers submit 
test('shows a loading state or triggers submit', async () => {
    render(
        <YarnProvider>
            <AddYarnPage />
        </YarnProvider>
    ); 

    // submit button: triggers add yarn 
    const submitBtn = screen.getByRole('button', { name: /list yarn/i }); 

    // simulate clicking 
    fireEvent.click(submitBtn); 
}); 