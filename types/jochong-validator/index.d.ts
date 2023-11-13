declare namespace JochongValidator {
    class TypeValidator {
        constructor(data: any);

        private data: any;
        private validation: boolean;

        isString(): StringValidator;
        isNumber(): NumberValidator;
        isArray(): ArrayValidator;
    }

    class StringValidator {
        constructor(data: any, validation: boolean);

        private data: any;
        private validation: boolean;

        length(min: number, max?: number): StringValidator;
        testRegExp(regExpString: string | RegExp): StringValidator;
        isIn(inArray: string[]): StringValidator;
        isNotEmpty(): StringValidator;
        isEmail(regExpString?: string | RegExp): StringValidator;
        isPw(regExpString?: string | RegExp): StringValidator;
        isName(regExpString?: string | RegExp): StringValidator;
        isTime(regExpString?: string | RegExp): StringValidator;
        isDatetime(regExpString?: string | RegExp): StringValidator;
        isDate(regExpString?: string | RegExp): StringValidator;
        isOnlyNumber(regExpString?: string | RegExp): StringValidator;
        isOnlyAlpabet(regExpString?: string | RegExp): StringValidator;
        isId(regExpString?: string | RegExp): StringValidator;
        end(): boolean;
    }

    class NumberValidator {
        constructor(data: any, validation: boolean);

        private data: any;
        private validation: boolean;

        isIn(inArray: number[]): NumberValidator;
        range(min: number, max?: number): NumberValidator;
        end(): boolean;
    }

    class ArrayValidator {
        constructor(data: any, validation: boolean);

        private data: any;
        private validation: boolean;

        length(min: number, max?: number): ArrayValidator;
        isAllNumber(): ArrayValidator;
        isAllString(): ArrayValidator;
        testRegExpAll(regExpString: string | RegExp): ArrayValidator;
        end(): boolean;
    }
}

declare function validator(data: any): JochongValidator.TypeValidator;

export = validator;
