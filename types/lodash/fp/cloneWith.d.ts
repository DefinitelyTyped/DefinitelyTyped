// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface CloneWith {
    /**
     * This method is like _.clone except that it accepts customizer which is invoked to produce the cloned value.
     * If customizer returns undefined cloning is handled by the method instead.
     *
     * @param value The value to clone.
     * @param customizer The function to customize cloning.
     * @return Returns the cloned value.
     */
    (): CloneWith;
    /**
     * This method is like _.clone except that it accepts customizer which is invoked to produce the cloned value.
     * If customizer returns undefined cloning is handled by the method instead.
     *
     * @param value The value to clone.
     * @param customizer The function to customize cloning.
     * @return Returns the cloned value.
     */
    <T, TResult extends object | string | number | boolean | null>(customizer: _.CloneWithCustomizer<T, TResult>): CloneWith1x1<T, TResult>;
    /**
     * This method is like _.clone except that it accepts customizer which is invoked to produce the cloned value.
     * If customizer returns undefined cloning is handled by the method instead.
     *
     * @param value The value to clone.
     * @param customizer The function to customize cloning.
     * @return Returns the cloned value.
     */
    <T, TResult extends object | string | number | boolean | null>(customizer: _.CloneWithCustomizer<T, TResult>, value: T): TResult;
    /**
     * This method is like _.clone except that it accepts customizer which is invoked to produce the cloned value.
     * If customizer returns undefined cloning is handled by the method instead.
     *
     * @param value The value to clone.
     * @param customizer The function to customize cloning.
     * @return Returns the cloned value.
     */
    <T, TResult>(customizer: _.CloneWithCustomizer<T, TResult | undefined>): CloneWith2x1<T, TResult>;
    /**
     * This method is like _.clone except that it accepts customizer which is invoked to produce the cloned value.
     * If customizer returns undefined cloning is handled by the method instead.
     *
     * @param value The value to clone.
     * @param customizer The function to customize cloning.
     * @return Returns the cloned value.
     */
    <T, TResult>(customizer: _.CloneWithCustomizer<T, TResult | undefined>, value: T): TResult | T;
}
interface CloneWith1x1<T, TResult extends object | string | number | boolean | null> {
    /**
     * This method is like _.clone except that it accepts customizer which is invoked to produce the cloned value.
     * If customizer returns undefined cloning is handled by the method instead.
     *
     * @param value The value to clone.
     * @param customizer The function to customize cloning.
     * @return Returns the cloned value.
     */
    (): CloneWith1x1<T, TResult>;
    /**
     * This method is like _.clone except that it accepts customizer which is invoked to produce the cloned value.
     * If customizer returns undefined cloning is handled by the method instead.
     *
     * @param value The value to clone.
     * @param customizer The function to customize cloning.
     * @return Returns the cloned value.
     */
    (value: T): TResult;
}
interface CloneWith2x1<T, TResult> {
    /**
     * This method is like _.clone except that it accepts customizer which is invoked to produce the cloned value.
     * If customizer returns undefined cloning is handled by the method instead.
     *
     * @param value The value to clone.
     * @param customizer The function to customize cloning.
     * @return Returns the cloned value.
     */
    (): CloneWith2x1<T, TResult>;
    /**
     * This method is like _.clone except that it accepts customizer which is invoked to produce the cloned value.
     * If customizer returns undefined cloning is handled by the method instead.
     *
     * @param value The value to clone.
     * @param customizer The function to customize cloning.
     * @return Returns the cloned value.
     */
    (value: T): TResult | T;
}

declare const cloneWith: CloneWith;
export = cloneWith;
