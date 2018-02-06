import _ = require("../index");

declare namespace Lodash {
    interface Take {
        (): Take;
        (n: number): Take1x1<T>;
        <T>(n: number, array: _.List<T> | null | undefined): T[];
    }
    interface Take1x1<T> {
        (): Take1x1<T>;
        (array: _.List<T> | null | undefined): T[];
    }
}

declare const take: Lodash.Take;
export = take;
