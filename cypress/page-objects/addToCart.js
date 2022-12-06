

class addToCart {

    get cartItem() {
        return ('#item_1_title_link')
    }
    get addCartButton() {
        return ('#add-to-cart-sauce-labs-bolt-t-shirt')
    }
    get cartIcon() {
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
}
export default new addToCart()