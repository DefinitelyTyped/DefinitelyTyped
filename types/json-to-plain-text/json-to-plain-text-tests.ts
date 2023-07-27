// Import the module
import { jsonToPlainText, Options } from "json-to-plain-text";

const data = { name: "John", age: 30, isEmployed: true };

const options: Options = {
    color: true,
    spacing: true,
    squareBracketsForArray: false,
    doubleQuotesForKeys: false,
    doubleQuotesForValues: false,
};

const plainText = jsonToPlainText(data, options);
