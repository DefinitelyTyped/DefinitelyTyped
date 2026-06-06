import { ddpBaseFilterOptions } from "../options";
import { ddpCollection } from "./ddpCollection";
import { ddpReactiveDocument, ddpReactiveDocumentSettings } from "./ddpReactiveDocument";
import { ddpReducer } from "./ddpReducer";

export class ddpReactiveCollection<T> {
    constructor(ddpCollection: ddpCollection<T>, skiplimit: ddpBaseFilterOptions);
    _updateReactiveObjects(): void;
    count(): object;
    data(): unknown[];
    /**
     * Maps reactive local collection to another reactive array. Specified function form https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map.
     * @param f () => void that produces an element of the new Array.
     */
    map<M>(f: (value: M, index: number, array: M[]) => any): ddpReducer<M>;
    /**
     * Runs a function every time a change occurs.
     * @param f () => void which recieves a reduced value at each change.
     */
    onChange(f: () => void): void;
    /**
     * Returns a reactive object which fields are always the same as the first object in the collection.
     */
    one(settings: ddpReactiveDocumentSettings): ddpReactiveDocument<T>;
    /**
     * @param f () => void to execute on each element in the array.
     * @param initialValue Value to use as the first argument to the first call of the function.
     */
    reduce<R, U>(
        f: (previousValue: U, currentValue: R, currentIndex: number, array: R[]) => U,
        initialValue: U,
    ): ddpReducer<U>;
    /**
     * Update ddpReactiveCollection settings.
     */
    settings(skiplimit: ddpBaseFilterOptions): void;
    /**
     * @param f A function used for sorting.
     */
    sort(f: typeof Array.prototype.sort): this;
    /**
     * Starts reactiveness for the reduced value of the collection. This method is being called on instance creation.
     */
    start(): void;
    /**
     * Stops reactiveness.
     */
    stop(): void;
}
