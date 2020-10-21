import { ddpBaseFilterOptions } from '../options';
import { ddpCollection } from './ddpCollection';
import { ddpReactiveDocument, ddpReactiveDocumentSettings } from './ddpReactiveDocument';
import { ddpReducer } from './ddpReducer';

export class ddpReactiveCollection {
    constructor(ddpCollection: ddpCollection, skiplimit: ddpBaseFilterOptions);
    _updateReactiveObjects(): void;
    count(): object;
    data(): unknown[];
    /**
     * Maps reactive local collection to another reactive array. Specified function form https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map.
     * @param f () => void that produces an element of the new Array.
     */
    map(f: typeof Array.prototype.map): ddpReducer;
    /**
     * Runs a function every time a change occurs.
     * @param f () => void which recieves a reduced value at each change.
     */
    onChange(f: () => void): void;
    /**
     * Returns a reactive object which fields are always the same as the first object in the collection.
     */
    one(settings: ddpReactiveDocumentSettings): ddpReactiveDocument;
    /**
     *
     * @param f () => void to execute on each element in the array.
     * @param initialValue Value to use as the first argument to the first call of the function.
     */
    reduce(f: () => void, initialValue: unknown): ddpReducer;
    /**
     * Update ddpReactiveCollection settings.
     */
    settings(skiplimit: ddpBaseFilterOptions): void;
    /**
     *
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
