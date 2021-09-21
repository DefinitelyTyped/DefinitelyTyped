import Choices = require('../objects/choices');

type Direction = 'up' | 'down';
interface Options {
    choices: Choices;
    loop?: boolean;
}

/**
 * Find the index of the next answer to be selected.
 *
 * @param current
 * Index of the answer currently selected.
 * @param dir
 * Whether to go up or down in the answers list.
 * @param opt
 * The option used for the question initialization.
 * @return
 * The index of the next answer to be selected.
 */
declare function incrementListIndex(current: number, dir: Direction, opt: Options): number;

export = incrementListIndex;
