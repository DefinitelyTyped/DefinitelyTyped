interface IRemoteReferenceType {
    HANDLE: "handle";
    SHARED_ID: "shareId";
}

const RemoteReferenceType: IRemoteReferenceType;

declare type LocalValueJSON = {
    type: string;
    value?: any;
};

declare class LocalValue<T> {
    constructor(type: string, value: T);
    type: string;
    value: T;

    static createStringValue(value: string): LocalValue<string>;

    static createNumberValue(value: number): LocalValue<number>;

    static createSpecialNumberValue(value: number): LocalValue<number>;

    static createUndefinedValue(): LocalValue<undefined>;

    static createNullValue(): LocalValue<null>;

    static createBooleanValue(value: boolean): LocalValue<boolean>;

    static createBigIntValue(value: BigInt): LocalValue<BigInt>;

    static createArrayValue(value: any[]): LocalValue<any[]>;

    static createDateValue(value: Date): LocalValue<Date>;

    static createMapValue(map: Map<any, any>): LocalValue<Map<any, any>>;

    static createObjectValue(map: Map<any, any>): LocalValue<Map<any, any>>;

    static createRegularExpressionValue(value: RegExp): LocalValue<RegExp>;

    static createSetValue(value: Set<any>): LocalValue<Set<any>>;

    toJson(): LocalValueJSON;
}

declare type RemoteValueJSON<T> = {
    type?: string;
    handle?: string;
    internalId?: string;
    value?: T;
    sharedId?: string;
};

type MappedInternalType<T> = T extends Map<any, any> ? ReferenceValue
    : T extends RegExp ? RegExpValue
    : T;

declare class RemoteValue<T> {
    constructor(remoteValue: RemoteValueJSON<T>);
    type: string | null;
    handle: string | null;
    internalId: string | null;
    value: MappedInternalType<T> | null;
    sharedId: string | null;
    deserializeValue(value: MappedInternalType<T> | null, type: string): T;
}

declare type ReferenceValueJSON = {
    handle?: string;
    shareId?: string;
};

declare class ReferenceValue {
    constructor(handle: string, shareId: string);
    handle: string | null;
    shareId?: string | null;
    asMap(): ReferenceValueJSON;
}

declare class RegExpValue {
    constructor(pattern: RegExp, flags: string | null);
    pattern: RegExp;
    flags: string | null;
}

export { LocalValue, ReferenceValue, RegExpValue, RemoteReferenceType, RemoteValue };
