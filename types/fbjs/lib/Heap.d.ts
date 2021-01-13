declare class Heap {
    constructor(items, comparator);

    /*
     * @return {boolean}
     */
    empty(): boolean;

    /*
     * @return {*}
     */
    pop(): any;

    /*
     * @param {*} item
     */
    push(item: any): void;

    /*
     * @return {number}
     */
    size(): number;

    /*
     * @return {*}
     */
    peek(): any;

    _heapify(): void;

    /*
     * @parent {number} index
     */
    _bubbleUp(index: number): void;

    /*
     * @parent {number} index
     */
    _sinkDown(index: number): void;
}

declare namespace Heap {}

export = Heap;
