import addToCart from '../page-objects/addToCart.js'
import loginPage from '../page-objects/login.js'

describe('Adding an item to cart', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should login with a valid user', () => {
        loginPage.login('standard_user', 'secret_sauce')
        cy.get(loginPage.inventoryList).should('be.visible')
    })
    it('should add Sauce Labs Bolt T-shirt item to cart', () => {
        addToCart.addCart()
        cy.get(addToCart.cartIcon).should('have.text', 1)
        cy.get(addToCart.removeSauceLabBoltButton).should('be.visible')
        cy.get(addToCart.cartItemName).should('have.text', 'Sauce Labs Bolt T-shirt')


    })
})
