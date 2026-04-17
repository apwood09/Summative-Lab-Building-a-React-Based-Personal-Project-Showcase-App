// InventoryPage.jsx does list filter by search input 

import { render, screen, fireEvent } from '@testing-library/react';
import { InventoryPage } from "../pages/InventoryPage";
import { YarnContext, YarnProvider } from '../context/YarnContext';
import { expect, test } from 'vitest';

// mock data 
const mockYarns = [
    { id: 1, name: 'Merino Magic', color: 'Purple' },
    { id: 2, name: 'Dragon Silk', color: 'Gold' },
];

// filters yarn by search input 
test('filters yarn list based on search input', async () => {
    render(
        <YarnContext.Provider value={{ yarns: mockYarns, loading: false }}>
            <InventoryPage />
        </YarnContext.Provider>
    );

    const searchInput = await screen.findByPlaceholderText(/search/i); 

    // typing yarn type 
    fireEvent.change(searchInput, { target: { value: 'Merino' } });

    // verify only Merino items visible & items not matching search are hidden 
    const items = screen.getAllByRole('heading', { level: 3 });
    
    expect(items).toHaveLength(1);
    expect(items[0].textContent).toContain('Merino Magic');
});