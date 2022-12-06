import addToCart from '../page-objects/addToCart.js'
import loginPage from '../page-objects/login.js'
import checkOutFlow from '../page-objects/checkOut.js'


describe('Adding an item to cart', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should add Sauce Labs Bolt T-shirt item to cart', () => {
        loginPage.login('standard_user', 'secret_sauce')
        cy.get(loginPage.inventoryList).should('be.visible')

        addToCart.addCart()
        cy.get(addToCart.cartNumber).should('have.text', 1)
        cy.get(addToCart.removeSauceLabBoltButton).should('be.visible')
        cy.get(addToCart.cartItemName).should('have.text', 'Sauce Labs Bolt T-Shirt')

        checkOutFlow.checkOut('Colleen', 'Williams', '00000')
        cy.get(checkOutFlow.itemDescriptionName).should('have.text', 'Sauce Labs Bolt T-Shirt')
        cy.get(checkOutFlow.itemPrice).should('have.text', '$15.99')

        checkOutFlow.completeCheckOut()
        cy.get(checkOutFlow.completeMessage).should('have.text', 'Checkout: Complete!')
        cy.get(checkOutFlow.thankYouMessage).should('have.text', 'THANK YOU FOR YOUR ORDER')
        cy.get(checkOutFlow.backHomeButton).should('be.visible')
        cy.get(checkOutFlow.backHomeButton).click()
        cy.url().should('contain', 'inventory')

        addToCart.navigateToCart()
        cy.get(addToCart.cartItemName).should('not.exist')

    })

    it('should add more than one items to cart', () => {
        loginPage.login('standard_user', 'secret_sauce')
        cy.get(loginPage.inventoryList).should('be.visible')

        addToCart.addMultipleCartItems()
        cy.get(addToCart.cartNumber).should('have.text', 3)
        cy.get(addToCart.cartItemName).should('have.text', 'Sauce Labs Bolt T-ShirtSauce Labs BackpackSauce Labs Bike Light')

        checkOutFlow.checkOut('Colleen', 'Williams', '00000')
        cy.get(checkOutFlow.itemDescriptionName).should('have.text', 'Sauce Labs Bolt T-ShirtSauce Labs BackpackSauce Labs Bike Light')
        cy.get(checkOutFlow.itemPrice).should('have.text', '$15.99$29.99$9.99')

        checkOutFlow.completeCheckOut()
        cy.get(checkOutFlow.completeMessage).should('have.text', 'Checkout: Complete!')
        cy.get(checkOutFlow.thankYouMessage).should('have.text', 'THANK YOU FOR YOUR ORDER')
        cy.get(checkOutFlow.backHomeButton).should('be.visible')
        cy.get(checkOutFlow.backHomeButton).click()
        cy.url().should('contain', 'inventory')

        addToCart.navigateToCart()
        cy.get(addToCart.cartItemName).should('not.exist')

    })
})
