// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace dojox {

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/collections.html
     *
     * Deprecated.  Should require dojox/collections modules directly rather than trying to access them through
     * this module.
     *
     */
    interface collections {
    }
    namespace collections {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/collections/_base.html
         *
         *
         */
        interface _base {
            /**
             *
             */
            Set: Object;
            /**
             * Returns a new object of type dojox.collections.ArrayList
             *
             * @param arr               Optional
             */
            ArrayList(arr: any[]): void;
            /**
             *
             * @param data
             */
            BinaryTree(data: any): void;
            /**
             * Returns an object of type dojox.collections.Dictionary
             *
             * @param dictionary               Optional
             */
            Dictionary(dictionary: dojox.collections.Dictionary): void;
            /**
             * return an object of type dojox.collections.DictionaryEntry
             *
             * @param k
             * @param v
             */
            DictionaryEntry(k: String, v: Object): void;
            /**
             * return an object of type dojox.collections.DictionaryIterator
             *
             * @param obj
             */
            DictionaryIterator(obj: Object): void;
            /**
             * return an object of type dojox.collections.Iterator
             *
             * @param a
             */
            Iterator(a: any[]): void;
            /**
             * return an object of type dojox.collections.Queue
             *
             * @param arr               Optional
             */
            Queue(arr: any[]): void;
            /**
             * creates a collection that acts like a dictionary but is also internally sorted.
             * Note that the act of adding any elements forces an internal resort, making this object potentially slow.
             *
             * @param dictionary               Optional
             */
            SortedList(dictionary: Object): void;
            /**
             * returns an object of type dojox.collections.Stack
             *
             * @param arr               Optional
             */
            Stack(arr: any[]): void;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/collections/ArrayList.html
         *
         * Returns a new object of type dojox.collections.ArrayList
         *
         * @param arr       Optional
         */
        interface ArrayList{(arr?: any[]): void}
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/collections/BinaryTree.html
         *
         *
         * @param data
         */
        interface BinaryTree{(data: any): void}
        namespace BinaryTree {
            /**
             *
             */
            var TraversalMethods: Object
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/collections/BinaryTree.TraversalMethods.html
             *
             *
             */
            interface TraversalMethods {
                /**
                 *
                 */
                Inorder: number;
                /**
                 *
                 */
                Postorder: number;
                /**
                 *
                 */
                Preorder: number;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/collections/Dictionary.html
         *
         * Returns an object of type dojox.collections.Dictionary
         *
         * @param dictionary       Optional
         */
        interface Dictionary{(dictionary?: dojox.collections.Dictionary): void}
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/collections/Queue.html
         *
         * return an object of type dojox.collections.Queue
         *
         * @param arr       Optional
         */
        interface Queue{(arr?: any[]): void}
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/collections/SortedList.html
         *
         * creates a collection that acts like a dictionary but is also internally sorted.
         * Note that the act of adding any elements forces an internal resort, making this object potentially slow.
         *
         * @param dictionary       Optional
         */
        interface SortedList{(dictionary?: Object): void}
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/collections/Stack.html
         *
         * returns an object of type dojox.collections.Stack
         *
         * @param arr       Optional
         */
        interface Stack{(arr?: any[]): void}
    }

}

declare module "dojox/collections" {
    var exp: dojox.collections
    export=exp;
}
declare module "dojox/collections/ArrayList" {
    var exp: dojox.collections.ArrayList
    export=exp;
}
declare module "dojox/collections/BinaryTree" {
    var exp: dojox.collections.BinaryTree
    export=exp;
}
declare module "dojox/collections/BinaryTree.TraversalMethods" {
    var exp: dojox.collections.BinaryTree.TraversalMethods
    export=exp;
}
declare module "dojox/collections/Dictionary" {
    var exp: dojox.collections.Dictionary
    export=exp;
}
declare module "dojox/collections/Queue" {
    var exp: dojox.collections.Queue
    export=exp;
}
declare module "dojox/collections/Stack" {
    var exp: dojox.collections.Stack
    export=exp;
}
declare module "dojox/collections/SortedList" {
    var exp: dojox.collections.SortedList
    export=exp;
}
declare module "dojox/collections/_base" {
    var exp: dojox.collections._base
    export=exp;
}
