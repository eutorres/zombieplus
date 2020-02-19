import pg from '../../lib/db'

let movieData = {}

module.exports = {

    before: function(browser){
        movieData = {
            title: 'Resident Evil',
            status: 'Disponivel',
            year: 2002,
            releaseDate: '01/05/2002',
            cast: ['Milla', 'Ali', 'Ian', 'Shawn'],
            cover: '2068.jpg',
            plot: 'A missão do esquadrão e da Alice é desligar a rainha vermelha e coletar dados sobre o incidente da Colmeia.'
        }

        pg.removeByTitle(movieData.title)

        let login = browser.page.login()

        login
            .with('zumbi@dospalmares.com.br','pwd123')
    },

    'quando eu faço o cadastro do filme': function (browser){
        let movie = browser.page.movie()

        movie
            .createForm()
            .setValue('@titleInput', movieData.title)
            .selectStatus(movieData.status)
            .setValue('@yearInput', movieData.year)
            .setValue('@dateInput', movieData.releaseDate)
            .insertCast(movieData.cast)
            .setValue('@plotInput', movieData.plot)
            .uploadCover(movieData.cover)
            .pause(5000)
            .click('@createButton')
    },

    'então devo ver o filme na lista': function(browser){
        let movie = browser.page.movie()
        movie
            .waitForElementVisible('@list', 5000)
            .assert.containsText('@list', movieData.title)
    }

}