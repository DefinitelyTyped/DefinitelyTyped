import _ = require("../index");

declare namespace Lodash {
    interface Drop {
        (): Drop;
        (n: number): Drop1x1<T>;
        <T>(n: number, array: _.List<T> | null | undefined): T[];
    }
    interface Drop1x1<T> {
        (): Drop1x1<T>;
        (array: _.List<T> | null | undefined): T[];
    }
}

declare const drop: Lodash.Drop;
export = drop;
