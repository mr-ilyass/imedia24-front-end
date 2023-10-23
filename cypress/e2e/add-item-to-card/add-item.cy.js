describe('Adding Item to Cart from product\'s description', () => {
    it('should add an item to the cart', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="product-item"]').first().click();
        cy.get('[data-testid="add-to-cart-desc-button"]').click();
        cy.get('[data-testid="cart-badge"]').contains('1');
    });
});


describe('Adding Item to Cart from the main page', () => {
    it('should add an item to the cart', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="add-to-cart-main-button"]').first().click();
        cy.get('[data-testid="cart-badge"]').contains('1');
    });
});


