import LoginPage from "../PageObjects/LoginPage"
import ProductsPage from "../PageObjects/ProductsPage"
describe('Tests With standard_ser', () => {

    const loginPage = new LoginPage()
    const productPage = new LoginPage()

    it('Testing Positive Login', () => {

        cy.visit('https://www.saucedemo.com')
        //loginPage.setUsername('standard_user')
        //loginPage.setPassword('secret_sauce')

    })

})