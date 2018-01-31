import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method is like _.defaults except that it recursively assigns default properties.
         * @param object The destination object.
         * @param sources The source objects.
         * @return Returns object.
         **/
        defaultsDeep(
            object: any,
            ...sources: any[]): any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.defaultsDeep
         **/
        defaultsDeep(...sources: any[]): LoDashImplicitWrapper<any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.defaultsDeep
         **/
        defaultsDeep(...sources: any[]): LoDashExplicitWrapper<any>;
    }
}