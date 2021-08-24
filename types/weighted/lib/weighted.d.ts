import { RandomFunc } from '../';

/**
 * Weighted returns a Function additionally available as `weighted.select`
 */
declare function weighted<T>(set: T[], weights: number[], rand?: RandomFunc): T;
declare function weighted(obj: { [index: string]: number }, rand?: RandomFunc): string;

/**
 * A dead-simple module for picking an item from a set of items while picking some more frequently than others.
 * Each item is given a numerical "weight": each item's likelihood to be selected is directly proportional to its share of the total weight.
 */
declare namespace weighted {
    interface RandomFunc {
        (): number;
    }

    const select: typeof weighted;
}
export = weighted;
