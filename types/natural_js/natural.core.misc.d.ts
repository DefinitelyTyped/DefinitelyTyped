declare namespace NC {

    type Primitive = string | number | boolean | null;
    type JSONValue = Primitive | JSONObject | JSONValue[];
    type JSONObject = {
        [key: string]: JSONValue;
    }

    type Date = {
        obj: Date;
        format: string;
    }

    type EventObject = object[]
    type EventsObject = {
        [key: string]: EventObject;
    }

    type RuleObj = {
        id: {
            ruleName: [[string, ...[]]];
        }
    }

    type InstanceCallback = {
        (this: Function, instanceName: string, instance: Function): void;
    }
    type ValsCallback = {
        (this: NJS<HTMLElement[]>, index: number, selEle: NJS<HTMLElement[]>): void;
    }

    /**
     * Enumeration representing types of web browsers.
     */
    enum BrowserType {
        OPERA = "opera",
        FIREFOX = "firefox",
        SAFARI = "safari",
        CHROME = "chrome",
        IE = "ie",
        IOS = "ios",
        ANDROID = "android"
    }

    /**
     * Represents a message resource object that stores localized strings organized
     * by language and message keys. This type is typically used for managing
     * translations or multilingual support in an application.
     *
     * The structure of the object is as follows:
     * - The first level keys represent message identifiers.
     * - The second level keys correspond to specific languages or locales.
     * - The values are the translated strings in the defined language or locale.
     *
     * Example:
     * ```
     * {
     *   "greeting": {
     *     "en_US": "Hello",
     *     "ko_KR": "안녕하세요"
     *   }
     * }
     * ```
     */
    type MessageResourceObj = {
        [key: string]: {
            [key: string]: string;
        }
    }

    enum ObjectType {
        NUMBER = "number",
        STRING = "string",
        ARRAY = "array",
        OBJECT = "object",
        FUNCTION = "function",
        DATE = "date"
    }
}
