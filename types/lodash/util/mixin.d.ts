import * as _ from "../index";
declare module "../index" {
    interface MixinOptions {
        chain?: boolean;
    }

    interface LoDashStatic {
        /**
         * Adds all own enumerable function properties of a source object to the destination object. If object is a
         * function then methods are added to its prototype as well.
         *
         * Note: Use _.runInContext to create a pristine lodash function to avoid conflicts caused by modifying
         * the original.
         *
         * @param object The destination object.
         * @param source The object of functions to add.
         * @param options The options object.
         * @param options.chain Specify whether the functions added are chainable.
         * @return Returns object.
         */
        mixin<TObject>(
            object: TObject,
            source: Dictionary<(...args: any[]) => any>,
            options?: MixinOptions
        ): TObject;

        /**
         * @see _.mixin
         */
        mixin<TResult>(
            source: Dictionary<(...args: any[]) => any>,
            options?: MixinOptions
        ): LoDashStatic;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.mixin
         */
        mixin(
            source: Dictionary<(...args: any[]) => any>,
            options?: MixinOptions
        ): this;

        /**
         * @see _.mixin
         */
        mixin(
            options?: MixinOptions
        ): LoDashImplicitWrapper<LoDashStatic>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.mixin
         */
        mixin(
            source: Dictionary<(...args: any[]) => any>,
            options?: MixinOptions
        ): this;

        /**
         * @see _.mixin
         */
        mixin(
            options?: MixinOptions
        ): LoDashExplicitWrapper<LoDashStatic>;
    }
}