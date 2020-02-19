import { Pool } from 'pg'

let movieData = {}

module.exports = {
    before: function(browser){
        movieData = {
            title: 'Meu Namorado pe um Zumbi',
            status: 'Disponivel',
            year: 2013,
            releaseDate: '01/05/2013',
            cast: ['Milla', 'Ali', 'Ian', 'Shawn'],
            cover: '2068.jpg',
            plot: 'TESTE PARA MEU NAMORADO E UM ZUMBI'
        }

        pg.removeByTitle(movieData.title).then(function(){
            pg.insertMovie(movieData)
        })

        let login = browser.page.login()

        login
            .with('zumbi@dospalmares.com.br','pwd123')
    },
    
    'quando eu faço a busca pelo titulo': function(browser){
        let movie = browser.page.movie()

        movie 
            .setValue('@searchInput', movieData.title)
            .click('@searchIcon')
    },

    'então o titulo buscado deve ser exibido na liste': function(browser){
        let movie = browser.page.movie()

        movie
            .waitForEleentPresent('@tr', 10000)
            .expect.elements('@tr').count.to.equal(1)
            
        movie
            .assert.containsText('@tr', movieData.title)
    }

}