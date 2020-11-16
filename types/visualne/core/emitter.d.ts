import { Events } from "./events";
export declare class Emitter<EventTypes> {
    events: {
        [key: string]: () => undefined[];
    };
    silent: boolean;
    constructor(events: Events | Emitter<EventTypes>);
    on<K extends keyof EventTypes>(names: K | K[], handler: (args: EventTypes[K]) => void | unknown): this;
    trigger<K extends keyof EventTypes>(name: K, params?: EventTypes[K] | {}): boolean;
    bind(name: string): void;
    exist(name: string): boolean;
}
