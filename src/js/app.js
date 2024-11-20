// TODO: write code here
import { validateCardNumber, getCardType } from './validation.js';

// Взаимодействие с DOM для виджета
const validateButton = document.getElementById('validateButton');
const cardNumberInput = document.getElementById('cardNumberInput');
const resultDiv = document.getElementById('result');
const cardLogos = document.querySelectorAll('.card-logos img');

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
  // Изначально все логотипы карт делаем полупрозрачными
    cardLogos.forEach((logo) => {
        logo.style.opacity = '0.5';
    });

    validateButton.addEventListener('click', () => {
        const cardNumber = cardNumberInput.value;
        const isValid = validateCardNumber(cardNumber);
        const cardType = getCardType(cardNumber);

        // Сбрасываем все логотипы карт в полупрозрачный вид
        cardLogos.forEach((logo) => {
            logo.style.opacity = '0.5';
        });

        if (isValid) {
        resultDiv.textContent = `Card is valid. Type: ${cardType}`;
        
        // Определяем и отображаем правильную карту как первую
        const validLogo = document.querySelector(`#${cardType.toLowerCase()}-logo`);
        if (validLogo) {
            validLogo.style.opacity = '1';
            validLogo.parentNode.prepend(validLogo);
        }
        } else {
        resultDiv.textContent = 'Card is invalid';
        }
    });
});
