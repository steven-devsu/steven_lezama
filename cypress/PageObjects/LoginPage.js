class LoginPage {

    txtUsername = '#user-name'
    txtPassword = '#password]'
    btnLogin = '#login-button'
    labelHeader = '//h6'


    setUsername(username) {
        cy.get(this.txtUsername).type(username)
    }

    setPassword(password) {
        cy.get(this.txtPassword).type(password)
    }

    clickLogin() {
        cy.get(this.btnLogin).click()
    }




}

export default LoginPage;