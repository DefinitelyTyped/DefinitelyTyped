/**
 * The base Die class.
 *
 * Each Die instance represents a distinct term in a roll equation which transacts rolls of an die with some number
 * of faces. The Die instance provides controls for rerolling, exploding, counting, or modifying the set of results
 * from the Die.
 *
 * @param {Number} faces    The number of faces for this Die
 *
 * @example
 * // Define a 6-sided die
 * let die = new Die(6);
 *
 * // Roll the die 4 times
 * die.roll(4);
 *
 * // Roll another 2 times, adding the new results to the existing set
 * die.roll(2);
 *
 * // For all 6 of the initial rolls, reroll if any result was a 1
 * die.reroll([1]);
 *
 * // For set of remaining results, roll a bonus die if any result was a 6
 * die.explode([6]);
 *
 * // Count the total number of rolls which was greater than 3
 * die.countSuccess(3, ">");
 *
 * // Display the total number of successes
 * console.log(die.total);
 */
declare class Die {
    /**
     * The number of faces for this Die
     *
     * @example
     * let die = new Die(6);    // A 6-sided die has six faces
     * console.log(die.faces)   // 6
     */
    faces: number;

    /**
     * An Array representing the faces of the die
     *
     * @example
     * let die = new Die(6);    // One side for each of the possible faces
     * console.log(die.sides)   // [1,2,3,4,5,6]
     */
    sides: number[];

    /**
     * Track all dice which have ever been rolled
     *
     * @example
     * let die = new Die(4);
     * die.roll(4);             // Roll 4d4
     * console.log(die.rolls);  // [{...}, {...}, {...}, {...}]
     */
    rolls: any[];

    /**
     * Any additional options which may be required by the Die
     */
    options: any;

    constructor(faces: number, options?: object);

    /**
     * Track the set of kept results out of all rolls
     *
     * @example
     * let die = new Die(6);
     * die.roll(6);               // Roll 6d6
     * console.log(die.results);  // [6,4,1,2,3,4]
     * die.keepHighest(2);        // Keep the 2 best results
     * console.log(die.results);  // [6,4]
     */
    get results(): number[];

    /**
     * The sum of all kept results
     *
     * @example
     * let die = new Die(20);
     * die.roll(2);               // Roll 2d20
     * console.log(die.results)   // [6,17]
     * console.log(die.total)     // 23
     */
    get total(): number;

    _getFaces(f: number): number;

    /**
     * Roll this Die once
     */
    protected _roll(): number;

    /**
     * Roll the initial set of results for the Die
     * @param nd    The number of times to roll the die
     * @return        The updated die containing new rolls
     *
     * @example
     * let die = new Die(6);
     * die.roll(6);               // Roll 6d6
     * console.log(die.results);  // [5,2,4,4,1,6]
     * console.log(die.total);    // 22
     */
    roll(nd: number): Die;

    /**
     * Re-roll any results with results in the provided target set
     * Dice which have already been re-rolled will not be re-rolled again
     * @param targets    Target results which would trigger a reroll
     * @return            The updated die containing new rolls
     *
     * @example
     * let die = new Die(4);
     * die.roll(3);               // Roll 3d4
     * console.log(die.results);  // [1,3,4]
     * die.reroll([1,2]);         // Re-roll 1s or 2s
     * console.log(die.results);  // [3,4,2]
     */
    reroll(targets: number[]): Die;

    /**
     * Explode the rolls in this set by rolling additional dice for each roll which achieved a certain result
     * Dice which have been re-rolled or have already exploded cannot explode
     * @param range    The range of target results which would trigger an explode
     * @return        The updated die containing new rolls
     *
     * @example
     * let die = new Die(8);
     * die.roll(6);               // Roll 6d8
     * console.log(die.results);  // [8,3,6,4,2,7]
     * die.explode([7,8]);        // Explode on 7s and 8s, rolling additional dice
     * console.log(die.results);  // [8,3,6,4,2,7,7,2,3]
     */
    explode(range: number[]): Die;

    /**
     * Filter the result set, keeping the highest n results in order
     * @param n    The number of results to keep
     * @return    The updated die containing new rolls
     *
     * @example
     * let die = new Die(6);
     * die.roll(4);               // Roll 4d6
     * console.log(die.results);  // [6,2,1,5]
     * die.keepHighest(2);        // Keep the best 2 results
     * console.log(die.results);  // [6,5]
     */
    keepHighest(n: number): Die;

    /**
     * Filter the result set, keeping the lowest n results in order
     * @param n    The number of results to keep
     * @return    The filtered results
     *
     * @example
     * let die = new Die(6);
     * die.roll(4);               // Roll 4d6
     * console.log(die.results);  // [6,2,1,5]
     * die.keepLowest(3);         // Kepe the lowest 3 results
     * console.log(die.results);  // [2,1,5]
     */
    keepLowest(n: number): Die;

    /**
     * Map results to 0 or 1 depending on whether they match a success condition
     * @param target    The target result to test against
     * @param operator    The comparison operator against which to test. Default is '>='
     *
     * @example
     * let die = new Die(3);
     * die.roll(6);               // Roll 6d3
     * console.log(die.results);  // [1,3,1,2,2,3]
     * die.countSuccess(3);       // Count the results where a 3 was rolled
     * console.log(die.results);  // [0,1,0,0,0,1]
     * console.log(die.total);    // 2
     */
    countSuccess(target: number, operator: string): void;

    /**
     * Special Die types may optionally define a tooltip used in lieu of the numeric result
     * @param result    The rolled die result
     */
    protected _getTooltip(result: number): number;
}

/**
 * A special die used by Fate/Fudge systems
 * Mathematically behaves like 1d3-2
 */
declare class FateDie extends Die {
    constructor();
}
