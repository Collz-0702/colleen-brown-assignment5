
class checkOutFlow {

    get checkOutButton() {
        return ('#checkout')
    }
    get firstName() {
        return ('#first-name')
    }
    get lastName() {
        return ('#last-name')
    }
    get zipCode() {
        return ('#postal-code')
    }
    get continueButton() {
        return ('#continue')
    }
    get itemDescriptionName() {
        return ('.inventory_item_name')
    }
    get itemPrice() {
        return ('.inventory_item_price')
    }
    get itemQuantityNumber() {
        return ('.cart_quantity')
    }
    get finishButton() {
        return ('#finish')
    }
    get completeMessage() {
        return ('.title')
    }
    get thankYouMessage() {
        return ('.complete-header')
    }
    get backHomeButton() {
        return ('#back-to-products')
    }

    checkOut(firstName, lastName, zipCode) {
        cy.get(this.checkOutButton).should('be.visible')
        cy.get(this.checkOutButton).click()
        cy.get(this.firstName).type(firstName)
        cy.get(this.lastName).type(lastName)
        cy.get(this.zipCode).type(zipCode)
        cy.get(this.continueButton).should('be.visible')
        cy.get(this.continueButton).click()

    }
    completeCheckOut() {
        cy.get(this.finishButton).should('be.visible')
        cy.get(this.finishButton).click()
    }

}
export default new checkOutFlow()