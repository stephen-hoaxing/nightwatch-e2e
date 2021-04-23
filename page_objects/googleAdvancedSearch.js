module.exports = {
    url: 'https://www.google.com/advanced_search',
    elements: {
        mainQueryInput : '[name="as_q"]',
        languageDropdown : '#lr_button',
        lastUpdateDropdown : '#as_qdr_button',
        submitButton : '.jfk-button[type="submit"]',
        agreeButton : '#zV9nZe',
        div : '#hdtbMenus',
        params : '.KTBKoe',
    },
    commands: [{
        agree() {
            return this.click('@agreeButton')
        },
        search() {
            return this.click('@submitButton')
        }, 
        setQuery(value) {
            return this.setValue('@mainQueryInput', value)
        }, 
        selectFilter(selector, value) {
            const page = this
            page
                .click(selector)
                .click(`.goog-menuitem[value="${value}"]`)
            return this
        },
    }]
}