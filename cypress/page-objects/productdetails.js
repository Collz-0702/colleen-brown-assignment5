
class Products {

    get sortSelectorButton() {
        return ('.product_sort_container')
    }


    sortProducts(sort) {
        cy.get(this.sortSelectorButton).select(sort)
    }

}
export default new Products()