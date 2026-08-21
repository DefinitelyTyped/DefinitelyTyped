export = LegacyEvent;
declare function LegacyEvent(): void;
declare class LegacyEvent {
    duplicates: string;
    private _scriptMethodsCache;
    private getMethod;
    clone(): LegacyEvent;
    assignAddingMethods(source: LegacyEvent): void;
    clear(): void;
    _methods: Array<Method | ((arg0: any) => any)>;
    clearMethods(): void;
    assign(source: LegacyEvent, preserveMethods: boolean): void;
    dispatchWithParameterArray(params: any[]): any;
    dispatch(...args: any[]): any;
    private _indexOf;
    set(method: ((arg0: any) => any) | Method): void;
    isEmpty: boolean;
}
declare namespace LegacyEvent {
    let inheritedEvent: any;
    let inheritedIndexEventsMethods: number;
    let inheritedEventsMethodsStack: any[];
    function executeEventMethod(methodIndex: any, params: any): any;
    function inherited(...args: any[]): any;
}
import Method = require('./LegacyMethod.js');
