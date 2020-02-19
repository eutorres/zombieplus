module.exports = {
    //'@disabled': true,

    'senha não informada': (browser) => {
        let login = browser.page.login()
        login
            .with('404@gmail.com.br','')
            .waitForElementVisible('@alertInfo', 3000)
            .assert.containsText('@alertInfo', 'Opps. Cadê a senha?')      
    }
}