import loginPage from "../page-objects/login";
import Products from "../page-objects/productdetails";
import ProductsData from "../data-file/sortdata.js";
import addToCart from "../page-objects/addToCart.js";
import checkOutFlow from "../page-objects/checkOut.js";

describe('Sorting items names and prices', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should sort products from A-Z', () => {
        loginPage.login('standard_user', 'secret_sauce')
        ProductsData.products.sort()
        cy.get(addToCart.cartItemName).each(($elem, index) => {
            expect($elem.text()).equal(ProductsData.products[index].name)
        })

    })
    it('should sort products from price low to high', () => {
        loginPage.login('standard_user', 'secret_sauce')
        Products.sortProducts(ProductsData.sort['Low to High'])
        ProductsData.products.sort((a, b) => a.price - b.price)
        cy.get(checkOutFlow.itemPrice).each(($elem, index) => {
            expect($elem.text()).equal(`$${ProductsData.products[index].price}`)
        })

    })

})