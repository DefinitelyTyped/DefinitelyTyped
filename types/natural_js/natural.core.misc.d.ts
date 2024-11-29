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
