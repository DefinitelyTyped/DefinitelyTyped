/// <reference types="node" />

export interface Options {
    extensionId: string;
    clientId: string;
    clientSecret?: string;
    refreshToken: string;
}

export interface Item {
    kind: string;
    id: string;
    publicKey: string;
    uploadState: "FAILURE" | "IN_PROGRESS" | "NOT_FOUND" | "SUCCESS";
    itemError: {
        error_code: string;
        error_detail: string;
    };
}

export type PublishStatus =
    | "OK"
    | "NOT_AUTHORIZED"
    | "INVALID_DEVELOPER"
    | "DEVELOPER_NO_OWNERSHIP"
    | "DEVELOPER_SUSPENDED"
    | "ITEM_NOT_FOUND"
    | "ITEM_PENDING_REVIEW"
    | "ITEM_TAKEN_DOWN"
    | "PUBLISHER_SUSPENDED";

export interface PublishResponse {
    kind: string;
    item_id: string;
    status: PublishStatus[];
    statusDetail: string[];
}

export interface APIClient {
    /** @async */
    uploadExisting(readStream: NodeJS.ReadableStream, token?: string): Promise<Item>;

    /** @async */
    publish(target?: string, token?: string): Promise<PublishResponse>;

    /** @async */
    get(projection?: string, token?: string): Promise<Item>;

    /** @async */
    fetchToken(): Promise<string>;
}

export default function chromeWebstoreUpload(options: Options): APIClient;
