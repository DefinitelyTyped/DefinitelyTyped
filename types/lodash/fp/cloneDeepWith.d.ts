// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface CloneDeepWith {
    /**
     * This method is like _.cloneWith except that it recursively clones value.
     *
     * @param value The value to recursively clone.
     * @param customizer The function to customize cloning.
     * @return Returns the deep cloned value.
     */
    (): CloneDeepWith;
    /**
     * This method is like _.cloneWith except that it recursively clones value.
     *
     * @param value The value to recursively clone.
     * @param customizer The function to customize cloning.
     * @return Returns the deep cloned value.
     */
    <T>(customizer: _.CloneDeepWithCustomizer<T>): CloneDeepWith1x1<T>;
    /**
     * This method is like _.cloneWith except that it recursively clones value.
     *
     * @param value The value to recursively clone.
     * @param customizer The function to customize cloning.
     * @return Returns the deep cloned value.
     */
    <T>(customizer: _.CloneDeepWithCustomizer<T>, value: T): any;
}
interface CloneDeepWith1x1<T> {
    /**
     * This method is like _.cloneWith except that it recursively clones value.
     *
     * @param value The value to recursively clone.
     * @param customizer The function to customize cloning.
     * @return Returns the deep cloned value.
     */
    (): CloneDeepWith1x1<T>;
    /**
     * This method is like _.cloneWith except that it recursively clones value.
     *
     * @param value The value to recursively clone.
     * @param customizer The function to customize cloning.
     * @return Returns the deep cloned value.
     */
    (value: T): any;
}

declare const cloneDeepWith: CloneDeepWith;
declare namespace cloneDeepWith {}
export = cloneDeepWith;
