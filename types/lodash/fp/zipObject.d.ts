import _ = require("../index");

declare namespace Lodash {
    interface ZipObject {
        (): ZipObject;
        <T>(values: _.List<T>): ZipObject1x1<T>;
        <T>(values: _.List<T>, props: _.List<_.PropertyName>): _.Dictionary<T>;
    }
    interface ZipObject1x1<T> {
        (): ZipObject1x1<T>;
        (props: _.List<_.PropertyName>): _.Dictionary<T>;
    }
}

declare const zipObject: Lodash.ZipObject;
export = zipObject;
