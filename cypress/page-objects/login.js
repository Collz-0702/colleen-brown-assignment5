

class loginPage {
    get userName() {
        return ('[type="text"]#user-name')
    }
    get passWord() {
        return ('#password')
    }
    get button() {
        return ('#login-button')
    }
    get inventoryList() {
        return ('#inventory_container')
    }
    get lockedOutUser() {
        return ('h3[data-test= error]')
    }

    login(userName, passWord) {
        cy.get(this.userName).type(userName)
        cy.get(this.passWord).type(passWord)
        cy.get(this.button).click()
    }
}
export default new loginPage()