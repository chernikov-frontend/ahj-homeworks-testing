import puppeteer from 'puppeteer-core'

// Puppeteer тесты

describe('Тестирование взаимодействия с формой в браузере', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({ 
            headless: true,
            slowMo: 100,
            devtools: true,
        });
        page = await browser.newPage();
        await page.goto('http://localhost:8080'); 
    });



    test('Ввод валидного номера карты', async () => {
        await page.waitForSelector('#cardNumberInput');
        await page.type('#cardNumberInput', '4111111111111111');
        await page.click('#validateButton');
        await page.waitForSelector('#result'); 
        const resultText = await page.$eval('#result', (el) => el.textContent);
        expect(resultText).toBe('Card is valid. Type: Visa');
      }, 10000); // Тайм-аут 10 секунд

    test('Ввод невалидного номера карты', async () => {
        await page.waitForSelector('#cardNumberInput');
        await page.$eval('#cardNumberInput', el => el.value = '');
        await page.type('#cardNumberInput', '1234567890123456');
        await page.click('#validateButton');
        await page.waitForSelector('#result'); 
        const resultText = await page.$eval('#result', (el) => el.textContent);
        expect(resultText).toBe('Card is invalid');
      }, 10000); // Тайм-аут 10 секунд


        afterAll(async () => {
        if (browser) {
            await browser.close();
        }
    });
});