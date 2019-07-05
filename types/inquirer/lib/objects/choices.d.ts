import inquirer = require("../..");
import Choice = require("./choice");
import Separator = require("./separator");

/**
 * A collection of multiple `Choice`-objects.
 */
export class Choices<T extends inquirer.poll.Answers = inquirer.poll.Answers> {
    /**
     * The number of selectable choices.
     */
    public realLength: number;

    /**
     * The number of choices.
     */
    public length: number;

    /**
     * The unfiltered choices.
     */
    public choices: Array<Choice<T> | Separator>;

    /**
     * The selectable choices.
     */
    public realChoices: Array<Choice<T>>;

    /**
     * Initializes a new instance of the `Choices` class.
     *
     * @param choices
     * The choices to add to the collection.
     *
     * @param answers
     * The `answers`-object.
     */
    public constructor(choices: inquirer.poll.DistinctChoice<T>[], answers: T);

    /**
     * Gets the choice at the specified index.
     *
     * @param index
     * The index of the choice to get.
     *
     * @returns
     * The choice at the specified index.
     */
    public getChoice(index: number): Choice;

    /**
     * Gets the item at the specified index.
     *
     * @param index
     * The index of the item to get.
     *
     * @returns
     * The item at the specified index.
     */
    public get(index: number): Choice | Separator;

    /**
     * Gets all choices which apply to the where-clause.
     *
     * @param whereClause
     * The where-clause to apply.
     *
     * @returns
     * The choices which apply to the where-clause.
     */
    public where(whereClause: object): Choice<T>[];

    /**
     * Retrieves the specified `property` from all choices.
     *
     * @param property
     * The property to query.
     *
     * @returns
     * The value of the property of each choice.
     */
    public pluck<TProperty extends keyof Choice<T>>(): Choice<T>[TProperty];

    /**
     * Returns the index of the first occurrence of a value in an array.
     *
     * @param searchElement
     * The value to locate in the array.
     *
     * @param fromIndex
     * The array index at which to begin the search.
     * 
     * If fromIndex is omitted, the search starts at index 0.
     *
     * @returns
     * The index of the specified `searchElement`.
     */
    public indexOf(searchElement: Choice<T> | Separator, fromIndex?: number): number;

    /**
     * Performs the specified action for each element in an array.
     *
     * @param callbackfn
     * A function that accepts up to three arguments.
     *
     * `forEach` calls the callbackfn function one time for each element in the array.
     *
     * @param thisArg
     * An object to which the this keyword can refer in the callbackfn function.
     *
     * If thisArg is omitted, undefined is used as the this value.
     */
    public forEach(callbackfn: (value: Choice<T> | Separator, index: number, array: Array<Choice<T> | Separator>) => void, thisArg?: any): void;

    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     *
     * @param callbackfn
     * A function that accepts up to three arguments.
     *
     * The filter method calls the `callbackfn` function one time for each element in the array.
     *
     * @param thisArg
     * An object to which the `this` keyword can refer in the callbackfn function.
     *
     * If thisArg is omitted, undefined is used as the this value.
     *
     * @returns
     * The elements in the collection which meet the conditions.
     */
    public filter<S extends Choice<T> | Separator>(callbackfn: (value: Choice<T> | Separator, index: number, array: Array<Choice<T> | Separator>) => value is S, thisArg?: any): S[];

    /**
     * Returns the value of the first element in the array where predicate is true, and `undefined` otherwise.
     *
     * @param predicate
     * `find` calls `predicate` once for each element of the array, in ascending order, until it finds one where predicate returns `true`.
     *
     * If such an element is found, `find` immediately returns that element value.
     * Otherwise, find returns undefined.
     *
     * @param thisArg
     * If provided, it will be used as the `this` value for each invocation of `predicate`.
     *
     * If it is not provided, undefined is used instead.
     */
    public find(predicate: (value: Choice<T> | Separator, index: number, obj: Array<Choice<T> | Separator>) => boolean, thisArg?: any): Choice<T> | Separator;

    /**
     * Appends new elements to an array, and returns the new length of the array.
     *
     * @param items
     * New elements of the Array.
     *
     * @returns
     * The new length of the array.
     */
    public push(...items: Array<Choice<T> | Separator>): number;
}