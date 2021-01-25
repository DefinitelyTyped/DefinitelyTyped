const quoteOutput: ID = 'quoteOutput';
const colorOutput: ID = 'colorOutput';

const quoteInput: ID = 'quoteInput';
const fontFamilyInput: ID = 'fontFamilyInput';
const colorInput: ID = 'colorInput';
const fontSizeInput: ID = 'fontSizeInput';

onEvent(quoteInput, 'input', onQuoteInput);
onEvent(colorInput, 'input', onColorInput);
onEvent(fontFamilyInput, 'input', onFontFamilyInput);
onEvent(fontSizeInput, 'input', onFontSizeInput);

function onQuoteInput() {
    setText(quoteOutput, getText(quoteInput));
}

function onColorInput() {
    setProperty(colorOutput, 'background-color', getText(colorInput));
}

function onFontFamilyInput() {
    setProperty(quoteOutput, 'font-family', getText(fontFamilyInput));
}

function onFontSizeInput() {
    setProperty(quoteOutput, 'font-size', getNumber(fontSizeInput));
}
