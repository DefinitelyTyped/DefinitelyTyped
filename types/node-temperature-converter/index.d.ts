// Type definitions for node-temperature-converter 1.0
// Project: https://github.com/Project-IX/ntc#readme
// Definitions by: Yoshida Tomio <https://github.com/1chiSensei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Celsius {
    /**
     * Celsius constructor
     */
    constructor(x: number);

    degrees: number;

    /**
     * Converts celsius to fahrenheit
     */
    toFahrenheit(): number;

    /**
     * Converts celsius to kelvin
     */
    toKelvin(): number;

    /**
     * String representation of celsius
     */
    toString(): string;
}

export class Fahrenheit {
    /**
     * Fahrenheit constructor
     */
    constructor(x: number);

    degrees: number;

    /**
     * Converts Fahrenheit to celsius
     */
    toCelsius(): number;

    /**
     * Converts Fahrenheit to kelvin
     */
    toKelvin(): number;

    /**
     * String representation of Fahrenheit
     */
    toString(): string;
}

export class Kelvin {
    /**
     * Kelvin constructor
     */
    constructor(x: number);

    degrees: number;

    /**
     * Converts Kelvin to celsius
     */
    toCelsius(): number;

    /**
     * Converts Kelvin to Fahrenheit
     */
    toFahrenheit(): number;

    /**
     * String representation of Kelvin
     */
    toString(): string;
}
