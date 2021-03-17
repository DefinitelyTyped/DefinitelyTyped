import { Disposable } from '../index';

/** Manages the deserializers used for serialized state. */
export interface DeserializerManager {
    /** Register the given class(es) as deserializers. */
    add(...deserializers: Deserializer[]): Disposable;

    /** Deserialize the state and params. */
    deserialize(state: object): object | undefined;
}

export interface Deserializer {
    name: string;
    deserialize(state: object): object;
}
