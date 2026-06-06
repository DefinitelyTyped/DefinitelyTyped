import { ddpReactiveCollection } from "./ddpReactiveCollection";

export class ddpReducer<T> {
    constructor(ddpReactiveCollectionInstance: ddpReactiveCollection<T>, reducer: () => void, initialValue: unknown);
    /**
     * Returns reactive reduce.
     */
    data(): object;
    /**
     * Forcibly reduces reactive data.
     */
    doReduce(): void;
    /**
     * Runs a function every time a change occurs.
     * @param f function which recieves a reduced value at each change.
     */
    onChange(f: () => void): void;
    /**
     * Starts reactiveness for the reduced value of the collection. This method is being called on instance creation.
     */
    start(): void;
    /**
     * Stops reactiveness.
     */
    stop(): void;
}
