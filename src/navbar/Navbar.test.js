import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

// Mock Redux store
const mockStore = configureStore([]);
const initialState = {
    cart: {
        cartItems: [],
    },
};

// Mocking BrowserRouter and Link components
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    BrowserRouter: ({ children }) => <div>{children}</div>,
    Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

describe('Navbar', () => {
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    test('renders Navbar component', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Navbar onOpenCartClicked={jest.fn()} />
                </Router>
            </Provider>
        );

        // Check if the logo text is rendered
        expect(screen.getByText('E-commerce')).toBeInTheDocument();

        // Check if the "Produits" link is rendered
        const produitsLink = screen.getByText('Produits');
        expect(produitsLink).toBeInTheDocument();
        expect(produitsLink.getAttribute('href')).toBe('/');

        // Check if the cart button is rendered
        const cartButton = screen.getByRole('button', { name: /cart/i });
        expect(cartButton).toBeInTheDocument();
        expect(cartButton).toHaveTextContent('Cart');
        expect(cartButton).toContainHTML('<span class="badge">0</span>');
    });

    test('calls onOpenCartClicked when cart button is clicked', () => {
        const onOpenCartClicked = jest.fn();

        render(
            <Provider store={store}>
                <Router>
                    <Navbar onOpenCartClicked={onOpenCartClicked} />
                </Router>
            </Provider>
        );

        const cartButton = screen.getByRole('button', { name: /cart/i });

        fireEvent.click(cartButton);

        expect(onOpenCartClicked).toHaveBeenCalled();
    });
});