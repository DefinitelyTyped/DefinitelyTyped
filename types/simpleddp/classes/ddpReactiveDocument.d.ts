import { ddpBaseFilterOptions } from "../options";
import { ddpReactiveCollection } from "./ddpReactiveCollection";

export interface ddpReactiveDocumentSettings {
    /**
     * When preserve is true,reactive object won't change when corresponding object is being deleted.
     */
    preserve: boolean;
}

export class ddpReactiveDocument<T> {
    constructor(ddpReactiveCollectionInstance: ddpReactiveCollection<T>, settings?: ddpReactiveDocumentSettings);
    /**
     * Returns reactive reduce.
     */
    data(): object;
    /**
     * Change reactivity settings.
     */
    settings(settings: ddpReactiveDocumentSettings): void;
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
