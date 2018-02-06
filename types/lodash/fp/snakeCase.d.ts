import _ = require("../index");

declare namespace Lodash {
    interface SnakeCase {
        (): SnakeCase;
        (string: string): string;
    }
}

declare const snakeCase: Lodash.SnakeCase;
export = snakeCase;
