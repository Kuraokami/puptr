class HomePage {

    constructor(page) {
        this.page = page;
    }

    async getTitle() {
        return this.page.title();
    }

    async searchFor(word) {
        await this.page.click('div[id=search-button]');
        await this.page.type('input[class=search__input-field]', word);
        await this.page.click('button[id=submit-button]');
    }

}

module.exports = HomePage;