

class addToCart {

    get cartItem() {
        return ('#item_1_title_link')
    }
    get addCartButton() {
        return ('#add-to-cart-sauce-labs-bolt-t-shirt')
    }
    get cartIcon() {
        return ('.shopping_cart_link')
    }
    get cartNumber() {
        return ('.shopping_cart_badge')
    }
    get cartItemName() {
        return ('.inventory_item_name')
    }
    get removeSauceLabBoltButton() {
        return ('#remove-sauce-labs-bolt-t-shirt')
    }


    addCart() {
        cy.get(this.cartItem).should('be.visible')
        cy.get(this.cartItem).click()
        cy.get(this.addCartButton).click()
        cy.get(this.cartIcon).click()
    }

    removeItemFromCart() {
        cy.get(this.removeSauceLabBoltButton).should('be.visible')
        cy.get(this.removeSauceLabBoltButton).click()
    }
    removeItemFromProductPage() {
        cy.get(this.addCartButton).should('be.visible')
        cy.get(this.addCartButton).click()
        cy.get(this.removeSauceLabBoltButton).should('be.visible')
        cy.get(this.removeSauceLabBoltButton).click()
    }
    navigateToCart() {
        cy.get(this.cartIcon).click()
    }
}
export default new addToCart()