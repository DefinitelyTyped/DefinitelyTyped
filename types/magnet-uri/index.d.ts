export interface Instance {
    dn?: string | string[] | undefined;
    tr?: string | string[] | undefined;
    xs?: string | string[] | undefined;
    as?: string | string[] | undefined;
    ws?: string | string[] | undefined;
    kt?: string[] | undefined;
    ix?: number | number[] | undefined;
    xt?: string | string[] | undefined;
    so?: any;
    infoHash?: string | undefined;
    infoHashBuffer?: Uint8Array | undefined;
    infoHashV2?: string | undefined;
    infoHashV2Buffer?: Uint8Array | undefined;
    publicKey?: string | undefined;
    publicKeyBuffer?: Uint8Array | undefined;
    name?: string | undefined;
    keywords?: string[] | undefined;
    announce?: string[] | undefined;
    urlList?: string[] | undefined;
    peerAddresses?: string[] | undefined;
    [key: string]: any;
}

/**
 * Parse a magnet URI and return an object of keys/values
 */
export default function magnetURIDecode(uri: string): Instance;

/**
 * Encode an object of keys/values into a magnet URI string
 */
export function encode(obj: Instance): string;

/**
 * Parse a magnet URI (alias for default export)
 */
export function decode(uri: string): Instance;
