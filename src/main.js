const puppeteer = require('puppeteer');
const HomePage = require("./pageObjects/homePage");
const ResultsPage = require("./pageObjects/resultsPage");

(async () => {
    //open cnn

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 })
    await page.goto('https://www.cnn.com');

    //declare home
    // search at home
    const homePage = new HomePage(page);
    await homePage.searchFor("nflfake");
    // declare results
    // verify results at results
    const resultsPage = new ResultsPage(page);
    const doWeHaveError = await resultsPage.doWeHaveError(page);

    console.log ("Error found: ", doWeHaveError);
    await browser.close();
})();