import generateBarcode from 'pdf417';

// Test basic usage
const barcode1: string = generateBarcode('Hello World', 2, 2);

// Test with different parameters
const barcode2: string = generateBarcode('Test123', 3, 4);

// Test with numbers as text
const barcode3: string = generateBarcode('1234567890', 1, 1);

// Test return value can be used in img src
const imgElement = document.createElement('img');
imgElement.src = generateBarcode('Sample', 2, 2);

// Verify return type
const result = generateBarcode('Test', 2, 2);
const isString: string = result; // Should compile

// $ExpectType string
generateBarcode('text', 1, 1);
