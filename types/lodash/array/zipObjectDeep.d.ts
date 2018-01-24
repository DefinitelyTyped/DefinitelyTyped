import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * This method is like _.zipObject except that it supports property paths.
         *
         * @param paths The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        zipObjectDeep(
            paths?: List<PropertyPath>,
            values?: List<any>
        ): object;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.zipObjectDeep
         */
        zipObjectDeep(
            this: LoDashImplicitWrapper<List<PropertyPath>>,
            values?: List<any>
        ): LoDashImplicitWrapper<object>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.zipObjectDeep
         */
        zipObjectDeep(
            this: LoDashExplicitWrapper<List<PropertyPath>>,
            values?: List<any>
        ): LoDashExplicitWrapper<object>;
    }
}