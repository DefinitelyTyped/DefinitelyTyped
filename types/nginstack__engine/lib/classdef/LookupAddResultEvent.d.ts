export = LookupAddResultEvent;
declare function LookupAddResultEvent(type: string): void;
declare class LookupAddResultEvent {
    constructor(type: string);
    key: number;
    classKey: number;
    complement: string;
    mustAdd: boolean;
    private findResult_;
}
