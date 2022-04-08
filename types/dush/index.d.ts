// Type definitions for dush 3.0
// Project: https://github.com/tunnckocore/dush#readme
// Definitions by: andrycodestuffs <https://github.com/andrycodestuffs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare var dush: dush.DushStatic;

declare namespace dush {
    type Handler = (...event: any[]) => void;
    type WildcardHandler = (type?: string, ...event: any[]) => void;

    interface DushStatic {
        (): Emitter;
    }

    interface Emitter {
        _allEvents: Array<{ [eventName: string]: Handler[] }>;
        use: (plugin: (app: Emitter, options: any) => void, options?: any) => Emitter;
        on(type: string, handler: Handler): Emitter;
        on(type: "*", handler: WildcardHandler): Emitter;
        once(type: string, handler: Handler): Emitter;
        once(type: "*", handler: WildcardHandler): Emitter;
        off(type: string, handler?: Handler): Emitter;
        off(type: "*", handler?: WildcardHandler): Emitter;
        emit(type: string, ...event: any[]): Emitter;
    }
}

export = dush;
