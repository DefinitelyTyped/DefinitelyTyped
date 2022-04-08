import { EventEmitter } from 'events';

export default interface Async extends EventEmitter, Promise<any> {
    sync(): void;
    isSync(): boolean;
    write(str?: string): this;
    w(str?: string): this;
    beginAsync(options?: any): this;
    error(e: Error): this;
    flush(): void;
    createOut(): this;
    endElement(): void;
    onLast(callback: any): this;
    c(componentDef: any, key: any, customEvents: any): void;
}
