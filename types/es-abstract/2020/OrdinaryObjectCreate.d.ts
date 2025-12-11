declare function OrdinaryObjectCreate<P extends object | null>(proto: P, additionalInternalSlotsList?: string[]): P extends null ? object : P;
export = OrdinaryObjectCreate;
