class ProductsPage {

    title = '.title'

    verifyLogin() {
        cy.xpath(this.title).should('have.text', 'Products')
    }
}

export default ProductsPage