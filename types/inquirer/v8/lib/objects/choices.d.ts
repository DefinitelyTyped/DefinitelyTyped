import { AllChoiceMap, Answers, KeyUnion, UnionToIntersection } from '../..';
import Choice = require('./choice');
import Separator = require('./separator');

/**
 * Represents a valid choice for the {@link Choices `Choices<T>`} class.
 *
 * @template T
 * The type of the answers.
 */
type DistinctChoice<T extends Answers> = AllChoiceMap<T>[keyof AllChoiceMap<T>];

/**
 * Represents a valid real choice for the {@link Choices `Choices<T>`} class.
 *
 * @template T
 * The type of the answers.
 */
type RealChoice<T extends Answers> = Exclude<DistinctChoice<T>, { type: Separator['type'] }>;

/**
 * Represents a property-name of any choice-type.
 *
 * @template T
 * The type of the answers.
 */
type ChoiceProperty<T extends Answers> = KeyUnion<UnionToIntersection<RealChoice<T>>>;

/**
 * A collection of multiple `Choice`-objects.
 *
 * @template T
 * The type of the answers.
 */
declare class Choices<T extends Answers = Answers> {
    /**
     * The number of selectable choices.
     */
    realLength: number;

    /**
     * The number of choices.
     */
    length: number;

    /**
     * The unfiltered choices.
     */
    choices: Array<DistinctChoice<T>>;

    /**
     * The selectable choices.
     */
    realChoices: Array<RealChoice<T>>;

    /**
     * Initializes a new instance of the {@link Choices `Choices<T>`} class.
     *
     * @param choices
     * The choices to add to the collection.
     *
     * @param answers
     * The {@link Answers `Answers`}-object.
     */
    constructor(choices: Array<DistinctChoice<T>>, answers: T);

    /**
     * Gets the choice at the specified index.
     *
     * @param index
     * The index of the choice to get.
     *
     * @returns
     * The choice at the specified index.
     */
    getChoice(index: number): RealChoice<T>;

    /**
     * Gets the item at the specified index.
     *
     * @param index
     * The index of the item to get.
     *
     * @returns
     * The item at the specified index.
     */
    get(index: number): DistinctChoice<T>;

    /**
     * Gets all choices which apply to the where-clause.
     *
     * @param whereClause
     * The where-clause to apply.
     *
     * @returns
     * The choices which apply to the where-clause.
     */
    where(whereClause: object): Array<RealChoice<T>>;

    /**
     * Retrieves the specified {@link property `property`} from all choices.
     *
     * @template TProperty
     * The name of the property to get.
     *
     * @param property
     * The property to query.
     *
     * @returns
     * The value of the property of each choice.
     */
    pluck<TProperty extends ChoiceProperty<T>>(
        property: TProperty | ChoiceProperty<T>,
    ): Array<(RealChoice<T> & { [key: string]: undefined })[TProperty]>;

    /**
     * Returns the index of the first occurrence of a value in an array.
     *
     * @param searchElement
     * The value to locate in the array.
     *
     * @param fromIndex
     * The array index at which to begin the search.
     *
     * If {@link fromIndex `fromIndex`} is omitted, the search starts at index 0.
     *
     * @returns
     * The index of the specified {@link searchElement `searchElement`}.
     */
    indexOf(searchElement: Choice<T> | Separator, fromIndex?: number): number;

    /**
     * Performs the specified action for each element in an array.
     *
     * @param callbackfn
     * A function that accepts up to three arguments.
     *
     * {@link forEach `forEach`} calls the {@link callbackfn `callbackfn`} function one time for each element in the array.
     *
     * @param thisArg
     * An object to which the `this` keyword can refer in the {@link callbackfn `callbackfn`} function.
     *
     * If {@link thisArg `thisArg`} is omitted, `undefined` is used as the `this` value.
     */
    forEach(
        callbackfn: (value: Choice<T> | Separator, index: number, array: Array<Choice<T> | Separator>) => void,
        thisArg?: any,
    ): void;

    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     *
     * @param callbackfn
     * A function that accepts up to three arguments.
     *
     * The filter method calls the {@link callbackfn `callbackfn`} function one time for each element in the array.
     *
     * @param thisArg
     * An object to which the `this` keyword can refer in the {@link callbackfn `callbackfn`} function.
     *
     * If {@link thisArg `thisArg`} is omitted, undefined is used as the this value.
     *
     * @returns
     * The elements in the collection which meet the conditions.
     */
    filter<TElement extends Choice<T> | Separator>(
        callbackfn: (
            value: Choice<T> | Separator,
            index: number,
            array: Array<Choice<T> | Separator>,
        ) => value is TElement,
        thisArg?: any,
    ): TElement[];

    /**
     * Returns the value of the first element in the array where predicate is `true`, and `undefined` otherwise.
     *
     * @param predicate
     * {@link find `find`} calls {@link predicate `predicate`} once for each element of the array, in ascending order, until it finds one where predicate returns `true`.
     *
     * If such an element is found, {@link find `find`} immediately returns that element value.
     * Otherwise, find returns `undefined`.
     *
     * @param thisArg
     * If provided, it will be used as the `this` value for each invocation of {@link predicate `predicate`}.
     *
     * If it is not provided, `undefined` is used instead.
     */
    find(
        predicate: (value: Choice<T> | Separator, index: number, obj: Array<Choice<T> | Separator>) => boolean,
        thisArg?: any,
    ): Choice<T> | Separator;

    /**
     * Appends new elements to the array, and returns the new length of the array.
     *
     * @param items
     * The elements to add to the array.
     *
     * @returns
     * The new length of the array.
     */
    push(...items: Array<Choice<T> | Separator>): number;
}

export = Choices;
