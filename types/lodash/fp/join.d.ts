import _ = require("../index");

declare namespace Lodash {
    interface Join {
        (): Join;
        (separator: string): Join1x1;
        (separator: string, array: _.List<any> | null | undefined): string;
    }
    interface Join1x1 {
        (): Join1x1;
        (array: _.List<any> | null | undefined): string;
    }
}

declare const join: Lodash.Join;
export = join;
