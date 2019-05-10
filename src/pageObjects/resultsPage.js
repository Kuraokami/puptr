class ResultsPage {

    constructor(page) {
        this.page = page;
    }

    async doWeHaveError(page) {
        await this.page.waitForSelector('div[class=cnn-search__no-results]');
        const links = await this.page.evaluate(() => {
            return Array.from(document.querySelectorAll('div[class=cnn-search__no-results]'));
        });
        return links.length > 0;
    }

    async checkIfResultsExist(page) {
        await this.page.waitForSelector('div[class=msg__wrap]');
        const text = await this.page.evaluate(() => {
            return document.querySelector('div[class=msg__wrap]').textContent;
        });
        return !text.includes('Not many results contain');
    }

}

module.exports = ResultsPage;