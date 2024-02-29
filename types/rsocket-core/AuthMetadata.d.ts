import WellKnownAuthType from "./WellKnownAuthType";

export interface Type {
    identifier: number;
    string: string;
}

export interface AuthMetadata {
    type: Type;
    payload: Buffer;
}

export interface UsernameAndPassword {
    username: Buffer;
    password: Buffer;
}

/**
 * Encode Auth metadata with the given {@link WellKnownAuthType} and auth payload {@link Buffer}
 *
 * @param authType well known auth type
 * @param authPayloadBuffer auth payload buffer
 * @returns encoded {@link WellKnownAuthType} and payload {@link Buffer}
 */
export function encodeWellKnownAuthMetadata(authType: WellKnownAuthType, authPayloadBuffer: Buffer): Buffer;

/**
 * Encode Auth metadata with the given custom auth type {@link string} and auth payload {@link Buffer}
 *
 * @param customAuthType custom auth type
 * @param authPayloadBuffer auth payload buffer
 * @returns encoded {@link WellKnownAuthType} and payload {@link Buffer}
 */
export function encodeCustomAuthMetadata(customAuthType: string, authPayloadBuffer: Buffer): Buffer;

/**
 * Encode Simple Auth metadata with the given username and password
 *
 * @param username username
 * @param password password
 * @returns encoded {@link SIMPLE} and given username and password as auth payload {@link Buffer}
 */
export function encodeSimpleAuthMetadata(username: string | Buffer, password: string | Buffer): Buffer;

/**
 * Encode Bearer Auth metadata with the given token
 *
 * @param token token
 * @returns encoded {@link BEARER} and given token as auth payload {@link Buffer}
 */
export function encodeBearerAuthMetadata(token: string | Buffer): Buffer;

/**
 * Decode auth metadata {@link Buffer} into {@link AuthMetadata} object
 *
 * @param metadata auth metadata {@link Buffer}
 * @returns decoded {@link AuthMetadata}
 */
export function decodeAuthMetadata(metadata: Buffer): AuthMetadata;

/**
 * Read up to 129 bytes from the given metadata in order to get the custom Auth Type
 *
 * @param authPayload
 * @return sliced username and password buffers
 */
export function decodeSimpleAuthPayload(authPayload: Buffer): UsernameAndPassword;
