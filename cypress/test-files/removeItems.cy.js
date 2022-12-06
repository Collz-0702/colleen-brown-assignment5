
import loginPage from '../page-objects/login.js'
import addToCart from '../page-objects/addToCart.js'


describe('Removing an item', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should remove Sauce Labs Bolt T-shirt from the cart', () => {
        loginPage.login('standard_user', 'secret_sauce')
        cy.get(loginPage.inventoryList).should('be.visible')

        addToCart.addCart()
        cy.get(addToCart.cartNumber).should('have.text', 1)
        cy.get(addToCart.removeSauceLabBoltButton).should('be.visible')
        cy.get(addToCart.cartItemName).should('have.text', 'Sauce Labs Bolt T-Shirt')

        addToCart.removeItemFromCart()
        cy.get(addToCart.cartItemName).should('not.exist')


    })
    it('should remove Sauce Labs Bolt T-shirt from the product page', () => {
        loginPage.login('standard_user', 'secret_sauce')
        cy.get(loginPage.inventoryList).should('be.visible')

        addToCart.removeItemFromProductPage()
        cy.get(addToCart.addCartButton).should('be.visible')

        addToCart.navigateToCart()
        cy.get(addToCart.cartItemName).should('not.exist')

    })
})
