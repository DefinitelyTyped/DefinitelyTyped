import { Encodable } from 'rsocket-types';
/**
 * A Serializer transforms data between the application encoding used in
 * Payloads and the Encodable type accepted by the transport client.
 */
export interface Serializer<T> {
    deserialize: (data?: Encodable) => T | undefined;
    serialize: (data?: T) => Encodable | undefined;
}
export interface PayloadSerializers<D, M> {
    data: Serializer<D>;
    metadata: Serializer<M>;
}
export const JsonSerializer: Serializer<any>;
export const JsonSerializers: {
    data: Serializer<any>;
    metadata: Serializer<any>;
};
export const IdentitySerializer: Serializer<Encodable>;
export const IdentitySerializers: {
    data: Serializer<any>;
    metadata: Serializer<any>;
};
