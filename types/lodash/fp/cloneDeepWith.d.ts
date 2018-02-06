import _ = require("../index");

declare namespace Lodash {
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
}

declare const cloneDeepWith: Lodash.CloneDeepWith;
export = cloneDeepWith;
