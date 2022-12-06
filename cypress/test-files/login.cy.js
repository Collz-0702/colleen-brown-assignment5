
import loginPage from '../page-objects/login.js'

describe.skip('loginPage', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should login with a valid user', () => {
        loginPage.login('standard_user', 'secret_sauce')
        cy.get(loginPage.inventoryList).should('be.visible')


    })
    it('should not login with lockedOutUser', () => {
        loginPage.login('locked_out_user', 'secret_sauce')
        cy.get(loginPage.lockedOutUser).should('be.visible')


    })
    it('should not login with an incorrect password', () => {
        loginPage.login('locked_out_user', '$ecret$auce')
        cy.get(loginPage.lockedOutUser).should('be.visible')

    })
})