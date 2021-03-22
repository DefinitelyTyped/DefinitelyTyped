export interface DatabaseOptions {
    url: string;
    connection?: {
        user: string;
        pass: string;
        useNewUrlParser?: boolean;
        keepAlive?: boolean;
        keepAliveInitialDelay?: number;
    };
    plugin?: object;
}

export interface Database {
    setup(): Promise<true>;

    Close(): Promise<true>;

    Get(encryptionKey: string | false, collection: string, query: object): Promise<object | false>;

    Insert(encryptionKey: string | false, collection: string, item: object, index: object): Promise<true>;

    Modify(encryptionKey: string | false, collection: string, query: object, modification: object): Promise<true>;

    Delete(collection: string, query: object): Promise<true>;

    encrypt(data: string, secret: string): Promise<{ iv: string; data: string }>;

    Decrypt(data: string, _iv: string, secret: string): Promise<string>;
}
