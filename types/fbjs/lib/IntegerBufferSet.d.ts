// Data structure that allows to store values and assign positions to them
// in a way to minimize changing positions of stored values when new ones are
// added or when some values are replaced. Stored elements are alwasy assigned
// a consecutive set of positoins startin from 0 up to count of elements less 1
// Following actions can be executed
// * get position assigned to given value (null if value is not stored)
// * create new entry for new value and get assigned position back
// * replace value that is furthest from specified value range with new value
//   and get it's position back
// All operations take amortized log(n) time where n is number of elements in
// the set.
declare class IntegerBufferSet {
    constructor();

    getSize(): number;

    getValuePosition(
        /*number*/
        value: number,
    ): number;

    getNewPositionForValue(
        /*number*/
        value: number,
    ): number;

    replaceFurthestValuePosition(
        /*number*/
        lowValue: number,
        /*number*/
        highValue: number,
        /*number*/
        newValue: number,
    ): number | null | undefined;

    _pushToHeaps(
        /*number*/
        position: number,
        /*number*/
        value: number,
    ): void;

    _cleanHeaps(): void;

    _recreateHeaps(): void;

    _cleanHeap(
        /*object*/
        heap: any,
    ): void;

    _smallerComparator(
        /*object*/
        lhs: any,
        /*object*/
        rhs: any,
    ): boolean;

    _greaterComparator(
        /*object*/
        lhs: any,
        /*object*/
        rhs: any,
    ): boolean;
}

declare namespace IntegerBufferSet {}

export = IntegerBufferSet;
