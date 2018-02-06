import _ = require("../index");

declare namespace Lodash {
    interface ZipObject {
        /**
         * This method is like _.fromPairs except that it accepts two arrays, one of property
         * identifiers and one of corresponding values.
         *
         * @param props The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        (): ZipObject;
        /**
         * This method is like _.fromPairs except that it accepts two arrays, one of property
         * identifiers and one of corresponding values.
         *
         * @param props The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        <T>(values: _.List<T>): ZipObject1x1<T>;
        /**
         * This method is like _.fromPairs except that it accepts two arrays, one of property
         * identifiers and one of corresponding values.
         *
         * @param props The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        <T>(values: _.List<T>, props: _.List<_.PropertyName>): _.Dictionary<T>;
    }
    interface ZipObject1x1<T> {
        /**
         * This method is like _.fromPairs except that it accepts two arrays, one of property
         * identifiers and one of corresponding values.
         *
         * @param props The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        (): ZipObject1x1<T>;
        /**
         * This method is like _.fromPairs except that it accepts two arrays, one of property
         * identifiers and one of corresponding values.
         *
         * @param props The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        (props: _.List<_.PropertyName>): _.Dictionary<T>;
    }
}

declare const zipObj: Lodash.ZipObject;
export = zipObj;
