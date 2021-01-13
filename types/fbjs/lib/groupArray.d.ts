/**
 * Groups all items in the array using the specified function. An object will
 * be returned where the keys are the group names, and the values are arrays of
 * all the items in that group.
 *
 * @param {array} array
 * @param {function} fn Should return a string with a group name
 * @return {object} items grouped using fn
 */
declare function groupArray(array, fn): object;

declare namespace groupArray {}

export = groupArray;
