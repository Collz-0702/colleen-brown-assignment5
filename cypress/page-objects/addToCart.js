

class addToCart {


    addCart() {
        cy.get(this.userName).type(userName)
        cy.get(this.passWord).type(passWord)
        cy.get(this.button).click()
    }
}
export default new addToCart()