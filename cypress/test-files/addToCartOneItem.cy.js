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
    it('should add Sauce Bag item to cart', () => {
        addToCart.addCart

    })
})
