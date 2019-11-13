// Type definitions for promise-events 0.1
// Project: https://github.com/yanickrochon/promise-events#readme
// Definitions by: Marcos Gutierrez <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class EventEmitter {
    emit(event: string | symbol, ...args: any[]): Promise<any>;
    on(event: string | symbol, handler: (...args: any[]) => Promise<any>): void;
}
