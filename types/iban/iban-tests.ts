import IBAN = require("iban");

/**
 * @summary Test for "electronicFormat" method.
 */
function testElectronicFormat() {
    const iban = "BE68539007547034";
    const format: string = IBAN.electronicFormat(iban);
}

/**
 * @summary Test for "fromBBAN" method.
 */
function testFromBBAN() {
    const countryCode = "fr";
    const bban = "BBBBBGGGGGCCCCCCCCCCCKK";
    const iban: string = IBAN.fromBBAN(countryCode, bban);
}

/**
 * @summary Test for "isValid" method.
 */
function testIsValid() {
    const iban = "BE68539007547034";
    const valid: boolean = IBAN.isValid(iban);
}

/**
 * @summary Test for "isValidBBAN" method.
 */
function testIsValidBBAN() {
    const countryCode = "fr";
    const bban = "BBBBBGGGGGCCCCCCCCCCCKK";
    const valid: boolean = IBAN.isValidBBAN(countryCode, bban);
}

/**
 * @summary Test for "printFormat" method.
 */
function testPrintFormat() {
    const iban = "BE68539007547034";
    const separator = " ";
    const format: string = IBAN.printFormat(iban, separator);
}

/**
 * @summary Test for "toBBAN" method.
 */
function testToBBAN() {
    const iban = "BE68539007547034";
    const separator = "-";
    const bban: string = IBAN.toBBAN(iban, separator);
}

Object.keys(IBAN.countries).forEach(countryCode => {
    countryCode; // $ExpectType string
    IBAN.countries[countryCode]; // $ExpectType Specification
});
Object.keys(IBAN.countries).forEach(countryCode => {
    IBAN.isValid(IBAN.countries[countryCode].example); // $ExpectType boolean
});
