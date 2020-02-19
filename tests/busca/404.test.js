module.exports = {
    '@tags': ['smoke', '404'],

    before: function (browser){
        let login = browser.page.login()

        login
            .with('zumbi@dospalmares.com.br','pwd123')
    },

    'quando eu busco um titulo não cadastrado' : function(browser){
        let movie = browser.page.movie()

        movie 
            .setValue('@searchInput', 'Não é mais um besteirou americano')
            .click('@searchIcon')
    },

    'então devo ver uma mensagem de alerta' : function(browser){
        let movie = browser.page.movie()

        movie
            .waitForElementVisible('@alertDanger', 10000)
            .assert.containsText('@alertDanger', 'Puxa! não encontramos nada aqui :(')
    }

}