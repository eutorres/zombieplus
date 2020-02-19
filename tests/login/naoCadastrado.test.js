module.exports = {
    //'@disabled': true,

    'não cadastrado': (browser) => {
        let login = browser.page.login()
        login
            .with('404@gmail.com.br','abc123')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}