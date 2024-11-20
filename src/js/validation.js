//алгоритм Luhn:
export function validateCardNumber(cardNumber) {
  let sum = 0;
  let shouldDouble = false;
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i));
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

//функция для определения платежной системы по номеру карты
export function getCardType(cardNumber) {
  const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const masterCardRegex = /^5[1-5][0-9]{14}$/;
  const amexRegex = /^3[47][0-9]{13}$/;
  const mirRegex = /^220[0-4][0-9]{12}$/;

  if (visaRegex.test(cardNumber)) {
    return 'Visa';
  } else if (masterCardRegex.test(cardNumber)) {
      return 'MasterCard';
  } else if (amexRegex.test(cardNumber)) {
      return 'American Express';
  } else if (mirRegex.test(cardNumber)) {
      return 'Mir';
  } else {
      return 'Unknown';
  }
}
