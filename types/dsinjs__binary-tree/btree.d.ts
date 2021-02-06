import { BTreeNode } from "./btreenode";
export class ExtendedWindow extends Window {
    DSinJS: {
        BTreeNode: typeof BTreeNode;
        BTree: typeof BTree;
    };
    BTreeNode: typeof BTreeNode;
    BTree: typeof BTree;
}
export class BTreeNodeStruct<T> {
    value?: T | null;
    lNode?: BTreeNodeStruct<T> | null;
    rNode?: BTreeNodeStruct<T> | null;
}
declare class BTreeRootAttrStruct<T> {
    root?: T;
}
declare class BTreeValueAttrStruct<T> {
    value?: T;
}
/**
 * BTree main class
 * @class
 * @public
 * @example
 * new BTree(10);
 * new BTree({ root: 10 });
 * new BTree({ value: 10 });
 */
export class BTree<T = any> {
    /**
     * Root node of the binary tree.
     * @type {BTreeNode}
     * @property root
     */
    root: BTreeNode<T>;
    /**
     * Depth of the binary tree.
     * @type {number}
     * @property depth
     */
    depth: number;
    /**
     * Constructor for Binary Tree.
     * @param {BTreeRootAttrStruct|BTreeValueAttrStruct|T} attr Can be of type object, string, number. In case of object root/value property is expected to be value of root node.
     * @constructor
     */
    constructor(attr: BTreeRootAttrStruct<T> | BTreeValueAttrStruct<T> | T);
    /**
     * Returns string value of given tree.
     * @method toString
     * @member
     * @public
     * @example
     * var tree = new BTree(10);
     * tree.insert(10);
     * tree.insert(20);
     * tree.insert(30);
     * tree.toString(); // "10102030"
     */
    toString(): string;
    /**
     * Returns JSON Form.
     * @method toJSON
     * @member
     * @public
     * @returns {BTreeNodeStruct} Returns json form of a given tree.
     * @example
     * var tree = new BTree(10);
     * tree.insert(20);
     * tree.toJSON(); // {value:10,lNode:{value:20,lNode:null,rNode:null},rNode:null}
     */
    toJSON(): import("./btreenode").BTreeNodeStruct<T>;
    /**
     * Returns array value.
     * @method toArray
     * @member
     * @public
     * @returns {Array<BTreeNode>} Returns array form of given tree.
     * @example
     * var tree = new BTree(10);
     * tree.insert(20);
     * tree.toArray(); // => [{value:10,...},{value:20,...}]
     */
    toArray(): Array<BTreeNode<T>>;
    /**
     * Returns array of values of the tree.
     * @method toFlatArray
     * @member
     * @public
     * @returns {Array<T>} Returns array form of given tree.
     * @example
     * var tree = new BTree(10);
     * tree.insert(20);
     * tree.toFlatArray(); // => [10,20]
     */
    toFlatArray(): T[];
    /**
     * Inserts the given value to the tree where first free left child node is found.
     * @param {any} val any type of value to be added to tree node.
     * @returns {BTreeNode} Returns newly created BTreeNode.
     * @method insert
     * @member
     * @example
     * var tree = new BTree(10);
     * tree.insert(10);
     * tree.insert(20);
     * tree.insert(30);
     * tree.toString(); // "10102030"
     */
    insert(val: T): BTreeNode<T>;
    /**
     * Inserts the given value to the tree where first free left child node is found.
     * @param {T} val any type of value to be added to tree node.
     * @method insertLeftMost
     * @member
     * @returns {BTreeNode<T>} Returns newly created BTreeNode.
     */
    insertLeftMost(val: T): BTreeNode<T>;
    /**
     * Inserts the given value to the tree where first free right child node is found.
     * @param {T} val any type of value to be added to tree node.
     * @method insertRightMost
     * @member
     * @public
     * @returns {BTreeNode<T>} Returns newly created BTreeNode.
     */
    insertRightMost(val: T): BTreeNode<T>;
    /**
     * Deletes given value from tree.
     * Travarsal = Root -> L -> R.
     * @param {T} val Value to be removed.
     * @returns {BTreeNode<T>} Returns removed BTreeNode.
     * @method delete
     * @member
     * @public
     */
    delete(val: T): BTreeNode<T>;
    /**
     * Inserts given element at given location. If location is already taken then it does not insert any value.
     * @param {T} val value to insert.
     * @param {number} index index at which to append new element to.
     * @method insertAt
     * @member
     * @public
     * @throws UnreachableError
     * @example
     * tree.insertAt(20,2);
     */
    insertAt(val: T, index: number): void;
    /**
     * Breadth first search. Executes given callback functions with parameters BTreeNode and path index for each node in BFS fashion.
     * @param {{(node: BTreeNode<T>, index: number) => any}} callback A callback function for execution of each node.
     * @method traverseBFS
     * @member
     * @public
     * @returns {void} no value.
     */
    traverseBFS(callback: (node: BTreeNode<T>, index: number) => any): void;
    /**
     * Depth first search, Executes given callback functions with parameters BTreeNode and path index for each node in DFS fashion.
     * @param {{(node: BTreeNode<T>, index: number) => any}} callback A callback function for execution of each node.
     * @method traverseDFS
     * @member
     * @public
     * @returns {void} no value.
     */
    traverseDFS(callback: (node: BTreeNode<T>, index: number) => any): void;
    /**
     * Breadth first search. Executes given callback functions with parameters BTreeNode and path index for each node in BFS fashion.
     * @param {{(node: BTreeNode<T>, index: number) => any}} callback A callback function for execution of each node.
     * @method each
     * @member
     * @public
     * @returns {void} no value.
     */
    each(callback: (node: BTreeNode<T>, index: number) => any): void;
    /**
     * Breadth first search. Executes given callback functions with parameters BTreeNode and path index for each node in BFS fashion.
     * @param {{(node: BTreeNode<T>, index: number) => any}} callback A callback function for execution of each node.
     * @method forEach
     * @member
     * @public
     * @returns {void} no value.
     */
    forEach(callback: (node: BTreeNode<T>, index: number) => any): void;
    /**
     * Returns an iterable of key, value pairs for every entry in the tree.
     * @method [Symbol.iterator]
     * @member
     * @public
     * @example
     * var tree = new BTree(10);
     * for (const node of tree) {
     *  console.log(node.value); // 10
     * }
     */
    [Symbol.iterator](): {
        /**
         * @returns { {value: BTreeNode<T>, done: boolean} }
         * @private
         */
        next(): {
            value: BTreeNode<T>;
            done: boolean;
        };
    };
    /**
     * Returns an iterable of key, value pairs for every entry in the tree.
     * @method entries
     * @member
     * @public
     * @returns {IterableIterator<[number, BTreeNode<T>]>} Iterable for iterations.
     * @example
     * var tree = new BTree(10);
     * for (const [index, node] of tree.entries()) {
     *  console.log(index, node.value); // 0, 10
     * }
     */
    entries(): IterableIterator<[number, BTreeNode<T>]>;
    /**
     * Maps current tree values to a new tree with modifying the values using given callback function.
     * Uses BFS.
     * @param {{(value: T) => T}} callback callback function for value modifier.
     * @method map
     * @member
     * @public
     * @returns {BTree<T>} A new BTree
     * @example
     * var tree = BTree.fromArray([10, 20, 30, 40]);
     * var tree2 = tree.map(n => n * 2);
     * var arr2 = tree2.toArray(); // [{value:20,...},{value:40,...},{value:60,...},{value:80,...}]
     */
    map(callback: (value: T) => T): BTree<T>;
    /**
     * Filters each item based on given filter function
     * @param {{(value: T) => boolean}} filterFnc callback function for filtering purpose.
     * @method filter
     * @member
     * @public
     * @throws FilteredRootError, Error when root node gets filtered out.
     * @returns {BTree<T>} New filtered instance of tree.
     * @example
     * var tree = BTree.fromArray([10, 20, 30, 40]);
     * var tree2 = tree.filter(n => !!(n % 4 === 0 || n === 10));
     * var arr2 = tree2.toArray(); // [{value:10,...},{value:20,...},{value:40,...}]
     */
    filter(filterFnc: (value: T) => boolean): BTree<T>;
    /**
     * Reduces each node values using reduceFunction and returns final value.
     * @param {(next: T2, value: T, index: number, tree: BTree<T>) => T2} reduceFunction callback function for reducing each node value to a final value.
     * @param {T2} initialValue Optional, Accumulator/Initial value.
     * @method reduce<T2>
     * @member
     * @public
     * @returns {T2} Returns reduceed value
     * @example
     * var tree = BTree.fromArray([10, 20, 30, 40]);
     * var sum = tree.reduce((acc, node) => acc + node); // => 100
     */
    reduce<T2 = any>(reduceFunction: (next: T2, value: T, index: number, tree: BTree<T>) => T2, initialValue?: T2): T2;
    /**
     * Reverses the current Binary Tree, Left Node becomes Right node and vise versa.
     * Does not return new instance, returns current tree instance.
     * @method reverse
     * @member
     * @public
     * @returns {BTree<T>} Returns current tree instance.
     * @example
     * var tree = BTree.fromArray([10, 20, 30, 40, 50, 60, 70, 80]);
     * tree.reverse().toArray(); // => [10, 30, 20, 70, 60, 50, 40, 80]
     */
    reverse(): BTree<T>;
    /**
     * Returns first index of a value matched, if it is not present, it returns -1.
     * @param {T} value Any value to find.
     * @method indexOf
     * @member
     * @public
     * @returns {number} Returns index of given item.
     * @example
     * var tree = BTree.fromArray([10, 20, 30, 40, 50, 60, 70, 80]);
     * tree.indexOf(30); // => 3
     * tree.indexOf(51); // => -1
     */
    indexOf(value: T): number;
    /**
     * Checks if given item exists or not, returns boolean.
     * @param {T} value Any value to check if it exists or not.
     * @method includes
     * @member
     * @public
     * @returns {boolean} Returns true if it is present, otherwise false.
     * @example
     * var tree = BTree.fromArray([10, 20, 30, 40, 50, 60, 70, 80]);
     * tree.includes(30); // true
     * tree.includes(51); // false
     */
    includes(value: T): boolean;
    /**
     * Checks if given item exists or not, returns boolean.
     * @param {T} value Any value to check if it exists or not.
     * @method exists
     * @member
     * @public
     * @returns {boolean} Returns true if it is present, otherwise false.
     * @example
     * var tree = BTree.fromArray([10, 20, 30, 40, 50, 60, 70, 80]);
     * tree.exists(30); // true
     * tree.exists(51); // false
     */
    exists(value: T): boolean;
    /**
     * Checks if given item exists or not, returns boolean.
     * @param {T} value Any value to check if it exists or not.
     * @method has
     * @member
     * @public
     * @returns {boolean} Returns true if it is present, otherwise false.
     * @example
     * var tree = BTree.fromArray([10, 20, 30, 40, 50, 60, 70, 80]);
     * tree.has(30); // true
     * tree.has(51); // false
     */
    has(value: T): boolean;
    /**
     * Sorts the tree based on compare function, Has option to sort only at children level.
     * @param {Function} compareFnc Function used to determine the order of the elements. It is expected to return
     * a negative value if first argument is less than second argument, zero if they're equal and a positive
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
     * ```ts
     * (a, b) => a - b)
     * ```
     * @param {boolean} atOnlyFirstChildLevel Optiona, Flag to specify if first child of each node should sorted. Default is `false`.
     * @method sort
     * @member
     * @public
     * @returns {void} Returns undefined.
     * @example
     * var tree = BTree.fromArray([10, 200, 100, 50, 60, 90, 5, 3]);
     * tree.sort().toFlatArray(); // => [3,5,10,50,60,90,100,200]
     */
    sort(compareFnc?: <T2>(a: T2, b: T2) => number, atOnlyFirstChildLevel?: boolean): void;
    /**
     * Prints entire tree on the console, useful for logging and checking status.
     * @method print
     * @member
     * @public
     * @returns {void} Returns undefined.
     * @example
     * var tree = BTree.fromArray([1, 2, 3]);
     * tree.print();
     * 1 (1)
     * |- 2 (2)
     * |- 3 (3)
     */
    print(): void;
    /**
     * Returns the first matched tree node. Traverses using BFS.
     * @param {T} item any value to find inside the tree.
     * @method find
     * @member
     * @public
     * @returns {BTreeNode<T> | null} Returns the first matched tree node, if not found, returns null.
     * @example
     */
    find(item: T): BTreeNode<T> | null;
    /**
     * Returns index value from given path.
     * @param {Array<'U'|'L'|'R'>} path Array for U L or R, which represents the quickest path to get to a node.
     * @returns {number} Returns index value.
     * @method getIndexFromPath
     * @public
     * @static
     * @member
     */
    static getIndexFromPath(path: Array<'U' | 'L' | 'R'>): number;
    /**
     * Returns Path equivalent to the given index.
     * @param {number} index Index number from which path to be calculated.
     * @returns {Array<'U'|'L'|'R'>} Path equivalent to the given index.
     * @method getPathFromIndex
     * @public
     * @static
     */
    static getPathFromIndex(index: number): Array<'U' | 'L' | 'R'>;
    /**
     * Converts given values into a Binary Tree.
     * @param {T2[]} arr Any array of values.
     * @returns {BTree<T2>} Newly generated tree.
     * @method fromArray
     * @static
     * @public
     * @example
     * var tree = BTree.fromArray([10,20,30,40]);
     */
    static fromArray<T2>(arr: T2[]): BTree<T2>;
}
export {};
