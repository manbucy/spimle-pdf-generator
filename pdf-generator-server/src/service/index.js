require('dotenv').config()
const _path = require('path');
const puppeteer = require('puppeteer-core');
const browserExecutablePath = process.env.BROWSER_EXECUTABLE_PATH;
const pdfFilePath = process.env.PDF_FILE_SAVE_PATH;

(async () => {
    const browser = await puppeteer.launch({
        executablePath: browserExecutablePath
    });
    const page = await browser.newPage();
    await page.goto(' http://192.168.2.99:8899/', {
        waitUntil: 'networkidle0',
    });
    await page.waitForFunction('getFinishFlag()')
    await page.pdf({path: _path.resolve(pdfFilePath, 'test.pdf'), format: 'a4'});

    await browser.close();
})();

console.log('end print pdf')
