// Navbar.jsx Navigation Links

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from "../components/Navbar";
import { expect, test } from 'vitest';

// renders navigation links 
test('renders all navigation links', () => {
    render (
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    ); 

    // navigation link components: 
    // dashboard
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument(); 
    // yarn inventory
    expect(screen.getByText(/yarn inventory/i)).toBeInTheDocument();
    // + new product
    expect(screen.getByText(/\+ new product/i)).toBeInTheDocument();
})