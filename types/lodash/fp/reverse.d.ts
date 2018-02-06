import _ = require("../index");

declare namespace Lodash {
    interface Reverse {
        (): Reverse;
        <TList extends _.List<any>(array: TList,): TList;
    }
}

declare const reverse: Lodash.Reverse;
export = reverse;
