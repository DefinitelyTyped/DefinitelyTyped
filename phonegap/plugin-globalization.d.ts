
interface Globalization {
    getPreferredLanguage(successCB, errorCB): void;
    getLocaleName(successCB, errorCB): void;
    dateToString(date, successCB, errorCB, options): void;
    stringToDate(dateString, successCB, errorCB, options): void;
    getDatePattern(successCB, errorCB, options): void;
    getDateNames(successCB, errorCB, options): void;
    isDayLightSavingsTime(date, successCB, errorCB): void;
    getFirstDayOfWeek(successCB, errorCB): void;
    numberToString(number, successCB, errorCB, options): void;
    stringToNumber(string, successCB, errorCB, options): void;
    getNumberPattern(successCB, errorCB, options): void;
    getCurrencyPattern(currencyCode, successCB, errorCB): void;
}

interface GlobalizationError {
    code: number;
    message: string;
}

declare var GlobalizationError: {
    UNKNOWN_ERROR: number;
    FORMATTING_ERROR: number;
    PARSING_ERROR: number;
    PATTERN_ERROR: number;
}

interface Navigator {
    globalization: Globalization;
}