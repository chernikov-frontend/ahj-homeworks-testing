import { validateCardNumber, getCardType } from '../validation.js';
// import puppeteer from 'puppeteer';

test('validateCardNumber должен вернуть true для корректного номера карты', () => {
    expect(validateCardNumber('4111111111111111')).toBe(true);
});

test('validateCardNumber должен вернуть false для некорректного номера карты', () => {
    expect(validateCardNumber('1234567890123456')).toBe(false);
});

test('getCardType должен вернуть Visa для номера карты, начинающегося с 4', () => {
    expect(getCardType('4024007167101863')).toBe('Visa');
});

test('getCardType должен вернуть MasterCard для номера карты, начинающегося с 5', () => {
    expect(getCardType('5442327434737823')).toBe('MasterCard');
});

test('getCardType должен вернуть American Express для номера карты, начинающегося с 34', () => {
    expect(getCardType('374061250862596')).toBe('American Express');
});

test('getCardType должен вернуть Mir для номера карты, начинающегося с 220', () => {
    expect(getCardType('2200000000000000')).toBe('Mir');
});

// Puppeteer тесты

// describe('Тестирование взаимодействия с формой в браузере', () => {
//     let browser;
//     let page;
  
//     beforeAll(async () => {
//       browser = await puppeteer.launch({ headless: true });
//       page = await browser.newPage();
//       await page.goto('http://localhost:8080'); // Убедитесь, что это правильный URL для вашего приложения
//     });
  
//     afterAll(async () => {
//       if (browser) {
//         await browser.close();
//       }
//     });
  
//     test('Ввод валидного номера карты', async () => {
//       await page.waitForSelector('#cardNumberInput');
//       await page.type('#cardNumberInput', '4111111111111111');
//       await page.click('#validateButton');
//       await page.waitForSelector('#result'); // Ждём, чтобы элемент обновился
//       const resultText = await page.$eval('#result', el => el.textContent);
//       expect(resultText).toBe('Card is valid. Type: Visa');
//     });
  
//     test('Ввод невалидного номера карты', async () => {
//       await page.waitForSelector('#cardNumberInput');
//       await page.type('#cardNumberInput', '1234567890123456');
//       await page.click('#validateButton');
//       await page.waitForSelector('#result'); // Ждём, чтобы элемент обновился
//       const resultText = await page.$eval('#result', el => el.textContent);
//       expect(resultText).toBe('Card is invalid');
//     });
//   });