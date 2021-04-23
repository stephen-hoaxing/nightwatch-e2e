module.exports = {
    '@tags': ['google'],

    'Google advanced search Elon Musk': function(browser) {
        const mainQuery = "Elon Musk"

        const page = browser.page.googleAdvancedSearch()

        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropdown', 'lang_it')
            .selectFilter('@lastUpdateDropdown', 'm')
            .search()
            .agree()

        browser
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Params: Language is Italian')
            .assert.urlContains('as_qdr=m', 'Params: Query for the month')
            .saveScreenshot('tests_output/google.png')

        const resultsPageQuerySelector = `#tsf input[name="q"][value="${mainQuery}"]`
        const div = '#hdtbMenus'
        const params = '.KTBKoe'
        
        browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk in the Search bar')
        browser.assert.visible(div, 'UI: Params bar visible')
        browser.assert.visible(params, 'UI: Params are visible')
    }
}