import _ = require("../index");

declare namespace Lodash {
    interface Head {
        (): Head;
        <T>(array: _.List<T> | null | undefined): T | undefined;
    }
}

declare const head: Lodash.Head;
export = head;
