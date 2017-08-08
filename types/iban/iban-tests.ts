

/**
 * @summary Test for "electronicFormat" method.
 */
function testElectronicFormat() {
    var iban: string = 'BE68539007547034';
    var format: string = IBAN.electronicFormat(iban);
}

/**
 * @summary Test for "fromBBAN" method.
 */
function testFromBBAN() {
    var countryCode: string = 'fr';
    var bban: string = 'BBBBBGGGGGCCCCCCCCCCCKK';
    var iban: string = IBAN.fromBBAN(countryCode, bban);
}

/**
 * @summary Test for "isValid" method.
 */
function testIsValid() {
    var iban: string = 'BE68539007547034';
    var valid: boolean = IBAN.isValid(iban);
}

/**
 * @summary Test for "isValidBBAN" method.
 */
function testIsValidBBAN() {
    var countryCode: string = 'fr';
    var bban: string = 'BBBBBGGGGGCCCCCCCCCCCKK';
    var valid: boolean = IBAN.isValidBBAN(countryCode, bban);
}

/**
 * @summary Test for "printFormat" method.
 */
function testPrintFormat() {
    var iban: string = 'BE68539007547034';
    var separator: string[] = ['fr'];
    var format: string = IBAN.printFormat(iban, separator);
}

/**
 * @summary Test for "toBBAN" method.
 */
function testToBBAN() {
    var iban: string = 'BE68539007547034';
    var separator: string[] = ['-'];
    var bban: string = IBAN.toBBAN(iban, separator);
}