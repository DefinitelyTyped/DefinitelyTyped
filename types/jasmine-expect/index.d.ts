// Type definitions for jasmine-expect 3.6.0
// Project: https://github.com/JamieMason/Jasmine-Matchers
// Definitions by: GeneralCss <https://github.com/GeneralCss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="jasmine" />

declare namespace jasmine {
    interface Matchers<T> {
        // toBe
        toBeArray(): boolean;
        toBeArrayOfBooleans(): boolean;
        toBeArrayOfNumbers(): boolean;
        toBeArrayOfObjects(): boolean;
        toBeArrayOfSize(size: number): boolean;
        toBeArrayOfStrings(): boolean;
        toBeEmptyArray(): boolean;
        toBeNonEmptyArray(): boolean;

        // Booleans
        toBeBoolean(): boolean;
        toBeFalse(): boolean;
        toBeTrue(): boolean;

        // Dates
        toBeAfter(date: Date): boolean
        toBeBefore(date: Date): boolean
        toBeDate(): boolean;
        toBeValidDate(): boolean;

        // Functions
        toBeFunction(): boolean;
        toThrowAnyError(): boolean;
        toThrowErrorOfType(constructorName: string): boolean

        // Numbers
        toBeCalculable(): boolean;
        toBeEvenNumber(): boolean;
        toBeGreaterThanOrEqualTo(number: number): boolean;
        toBeLessThanOrEqualTo(number: number): boolean;
        toBeNear(number: number, epsilon: number): boolean;
        toBeNumber(): boolean;
        toBeOddNumber(): boolean
        toBeWholeNumber(): boolean;
        toBeWithinRange(floor: number, ceiling: number): boolean;

        // Strings
        toBeEmptyString(): boolean;
        toBeHtmlString(): boolean;
        toBeIso8601(): boolean;
        toBeJsonString(): boolean;
        toBeLongerThan(string: string): boolean;
        toBeNonEmptyString(): boolean;
        toBeSameLengthAs(string: string): boolean;
        toBeShorterThan(string: string): boolean;
        toBeString(): boolean;
        toBeWhitespace(): boolean;
        toEndWith(string: string): boolean;
        toStartWith(string: string): boolean;

        // Objects
        toBeEmptyObject(): boolean;
        toBeNonEmptyObject(): boolean;
        toBeObject(): boolean;

        // Regular Expression
        toBeRegExp(): boolean;

        // Members, Properties, Methods
        toHaveArray(memberName: string): boolean;
        toHaveArrayOfBooleans(memberName: string): boolean;
        toHaveArrayOfNumbers(memberName: string): boolean;
        toHaveArrayOfObjects(memberName: string): boolean;
        toHaveArrayOfSize(memberName: string, size: number): boolean;
        toHaveArrayOfStrings(memberName: string): boolean;
        toHaveBoolean(memberName: string): boolean;
        toHaveCalculable(memberName: string): boolean;
        toHaveDate(memberName: string): boolean;
        toHaveDateAfter(memberName: string, date: Date): boolean;
        toHaveDateBefore(memberName: string, date: Date): boolean;
        toHaveEmptyArray(memberName: string): boolean;
        toHaveEmptyObject(memberName: string): boolean;
        toHaveEmptyString(memberName: string): boolean;
        toHaveEvenNumber(memberName: string): boolean;
        toHaveFalse(memberName: string): boolean;
        toHaveHtmlString(memberName: string): boolean;
        toHaveIso8601(memberName: string): boolean;
        toHaveJsonString(memberName: string): boolean;
        toHaveMember(memberName: string): boolean;
        toHaveMethod(memberName: string): boolean;
        toHaveNonEmptyArray(memberName: string): boolean;
        toHaveNonEmptyObject(memberName: string): boolean;
        toHaveNonEmptyString(memberName: string): boolean;
        toHaveNumber(memberName: string): boolean;
        toHaveNumberWithinRange(memberName: string, floor: number, ceiling: number): boolean;
        toHaveObject(memberName: string): boolean;
        toHaveOddNumber(memberName: string): boolean;
        toHaveString(memberName: string): boolean;
        toHaveStringLongerThan(memberName: string, string: string): boolean;
        toHaveStringSameLengthAs(memberName: string, string: string): boolean;
        toHaveStringShorterThan(memberName: string, string: string): boolean;
        toHaveTrue(memberName: string): boolean;
        toHaveUndefined(memberName: string): boolean;
        toHaveWhitespaceString(memberName: string): boolean;
        toHaveWholeNumber(memberName: string): boolean;
    }

    interface AssymetricMatchers {

      // Arrays
      arrayOfBooleans(): boolean;
      arrayOfNumbers(): boolean;
      arrayOfObjects(): boolean;
      arrayOfSize(number: number): boolean;
      arrayOfStrings(): boolean;
      emptyArray(): boolean;
      nonEmptyArray(): boolean;

      // Dates
      after(date: Date): boolean;
      before(date: Date): boolean;

      // Numbers
      calculable(): boolean;
      evenNumber(): boolean;
      greaterThanOrEqualTo(number: number): boolean;
      lessThanOrEqualTo(number: number): boolean;
      oddNumber(): boolean;
      wholeNumber(): boolean;
      withinRange(floor: number, ceiling: number): boolean;

      // Strings
      endingWith(string: string): boolean;
      iso8601(): boolean;
      jsonString(): boolean;
      longerThan(string: string): boolean;
      nonEmptyString(string: string): boolean;
      sameLengthAs(string: string): boolean;
      shorterThan(string: string): boolean;
      startingWith(string: string): boolean;
      whitespace(): boolean;

      //Objects
      emptyObject(): boolean;
      nonEmptyObject(): boolean;

      // Regular expressions
      regExp(): boolean;
    }
}

declare var any: jasmine.AssymetricMatchers;

