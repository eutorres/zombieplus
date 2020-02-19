module.exports = {
    //'@disabled': true,

    'email não informado': (browser) => {
        let login = browser.page.login()
        login
            .with('','abc123')
            .waitForElementVisible('@alertInfo', 3000)
            .assert.containsText('@alertInfo', 'Opps. Cadê o email?')
    }
}