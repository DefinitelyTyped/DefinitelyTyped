/**
 * Groups all items in the array using the specified function. An object will
 * be returned where the keys are the group names, and the values are arrays of
 * all the items in that group.
 */
declare function groupArray(array: any[], fn: any): object;

declare namespace groupArray {}

export = groupArray;
