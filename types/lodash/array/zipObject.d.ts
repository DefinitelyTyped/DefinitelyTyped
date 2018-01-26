import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method is like _.fromPairs except that it accepts two arrays, one of property
         * identifiers and one of corresponding values.
         *
         * @param props The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        zipObject<T>(
            props: List<PropertyName>,
            values: List<T>
        ): Dictionary<T>;

        /**
         * @see _.zipObject
         */
        zipObject(
            props?: List<PropertyName>
        ): Dictionary<undefined>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.zipObject
         */
        zipObject<T>(
            this: LoDashImplicitWrapper<List<PropertyName>>,
            values: List<T>
        ): LoDashImplicitWrapper<Dictionary<T>>;

        /**
         * @see _.zipObject
         */
        zipObject(
            this: LoDashImplicitWrapper<List<PropertyName>>
        ): LoDashImplicitWrapper<Dictionary<undefined>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.zipObject
         */
        zipObject<T>(
            this: LoDashExplicitWrapper<List<PropertyName>>,
            values: List<T>
        ): LoDashExplicitWrapper<Dictionary<T>>;

        /**
         * @see _.zipObject
         */
        zipObject(
            this: LoDashExplicitWrapper<List<PropertyName>>
        ): LoDashExplicitWrapper<Dictionary<undefined>>;
    }
}