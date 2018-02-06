import _ = require("../index");

declare namespace Lodash {
    interface DropRight {
        (): DropRight;
        (n: number): DropRight1x1<T>;
        <T>(n: number, array: _.List<T> | null | undefined): T[];
    }
    interface DropRight1x1<T> {
        (): DropRight1x1<T>;
        (array: _.List<T> | null | undefined): T[];
    }
}

declare const dropRight: Lodash.DropRight;
export = dropRight;
