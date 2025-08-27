/**
 * This type is suitable to describe path to a field of an object.
 * For details refer
 * @link https://github.com/mariocasciaro/object-path
 */
type FieldPath = string | number | Array<string | number>;

/** Whenever a given state field changes this handler will be called. */
type ChangeHandler<T> = (newValue: T, oldValue: T, pathToField: FieldPath) => void;

/** @see ChangeHandlerWrapper */
type FieldWatch = () => void;

/**
 * @returns Function, that wraps the given change handler in. It should be
 * subscribed to state changes using store.subscribe(). Afterwards, it
 * calls change handler whenever the watched state field changes.
 */
type ChangeHandlerWrapper<T> = (changeHandler: ChangeHandler<T>) => FieldWatch;

/**
 * @param getState Function, that returns the Redux store state.
 * @param pathToField Most commonly dot separated string, or array of strings
 *      and numbers that form path to a field of the state object. For details
 *      refer @link https://github.com/mariocasciaro/object-path
 * @param compare Optional field comparison function. Defaults to strict
 *      equality check (===).
 * @returns Function, that listens to changes of the given field of the Redux store
 *      state. On change it calls its parameter, which is a change handler function.
 */
declare function watch(
    getState: () => any,
    pathToField?: FieldPath,
    compare?: (a: any, b: any) => boolean,
): ChangeHandlerWrapper<any>;

export = watch;
