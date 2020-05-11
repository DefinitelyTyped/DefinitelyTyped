import * as VMasker from "vanilla-masker";

// Masking input element to money.
const el = document.querySelector("data-js-input") as Element;
const els = document.querySelectorAll("data-js-input");

VMasker(el).maskMoney();
VMasker(el).maskMoney({});

// Masking input element to money with options.
VMasker(el).maskMoney({
  // Decimal precision -> "90"
  precision: 2,
  // Decimal separator -> ",90"
  separator: ',',
  // Number delimiter -> "12.345.678"
  delimiter: '.',
  // Money unit -> "R$ 12.345.678,90"
  unit: 'R$',
  // Money unit -> "12.345.678,90 R$"
  suffixUnit: 'R$',
  // Force type only number instead decimal,
  // masking decimals with ",00"
  // Zero cents -> "R$ 1.234.567.890,00"
  zeroCents: true
});

// Masking an array of input elements to money.
VMasker(els).maskMoney();

// Converts number to money string
VMasker.toMoney(1234); // -> R$ 1.234,00

// Masking input element to number.
VMasker(el).maskNumber();

// Converts any string to number
VMasker.toNumber("123ac34"); // -> 12334
VMasker.toNumber("-123ac34"); // -> -12334
VMasker.toAlphaNumeric("-123ac34");

// Listen the input element masking it to format with pattern.
VMasker(el).maskPattern("(99) 9999-9999");

// Converts value to masked phone
VMasker.toPattern(1099911111, "(99) 9999-9999"); // -> (10) 9991-1111

// Pass in an optional placeholder option to represent remaining characters to be entered
VMasker.toPattern('4', {pattern: "(999) 999-9999", placeholder: "x"}); // -> (4xx) xxx-xxxx

// unmask!
VMasker(el).unMask();
