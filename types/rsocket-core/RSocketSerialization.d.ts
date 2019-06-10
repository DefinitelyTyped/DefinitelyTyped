import { Encodable } from 'rsocket-types';
/**
 * A Serializer transforms data between the application encoding used in
 * Payloads and the Encodable type accepted by the transport client.
 */
export declare type Serializer<T> = {
    deserialize: (data: Encodable | null | undefined) => T | null | undefined;
    serialize: (data: T | null | undefined) => Encodable | null | undefined;
};
export declare type PayloadSerializers<D, M> = {
    data: Serializer<D>;
    metadata: Serializer<M>;
};
export declare const JsonSerializer: Serializer<any>;
export declare const JsonSerializers: {
    data: Serializer<any>;
    metadata: Serializer<any>;
};
export declare const IdentitySerializer: Serializer<Encodable>;
export declare const IdentitySerializers: {
    data: Serializer<any>;
    metadata: Serializer<any>;
};
