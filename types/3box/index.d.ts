// Type definitions for 3box 1.22
// Project: https://github.com/3box/3box-js#readme
// Definitions by: Shikanime Deva <https://github.com/shikanime>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Box;
export as namespace Box;

declare namespace Box {
    interface ThreadPost {
        author: string;
        message: any;
        postId: string;
        timestamp: number;
    }

    interface StorageLog {
        op: string;
        key: string;
        value: any;
        timeStamp: number;
    }

    interface Storage {
        all(opts?: { metadata?: boolean }): Promise<any[] | undefined>;
        get(key: string): Promise<any>;
        log(): StorageLog[];
        getMetadata(key: string): Promise<any>;
        set(key: string, value: any): Promise<boolean>;
        setMultiple(keys: string[], values: any[]): Promise<boolean>;
        remove(key: string): Promise<boolean>;
    }

    interface Thread {
        getPosts(): Promise<ThreadPost[]>;
        onUpdate(updateFn: () => void): void;

        post(message: any, to?: string): Promise<void>;
        deletePost(id: string): Promise<void>;

        addModerator(id: string): Promise<void>;
        listModerators(): Promise<string[]>;
        addMember(id: string): Promise<void>;
        listMembers(): Promise<string[]>;
        onNewCapabilities(updateFn: () => void): void;
    }

    interface Space {
        public: Storage;
        private: Storage;
        joinThread(
            name: string,
            opts?: {
                firstModerator?: string;
                members?: boolean;
                noAutoSub?: boolean;
                ghost?: boolean;
                ghostBacklogLimit?: number;
            },
        ): Promise<Thread>;
        joinThreadByAddress(address: string, name: string, opts?: { noAutoSub?: boolean }): Promise<Thread>;
        createConfidentialThread(name: string): Promise<Thread>;
        subscribeThread(
            address: string,
            config: object,
            opts?: { name?: string; firstModerator?: string; members?: string },
        ): Promise<Thread>;
        unsubscribeThread(address?: string): void;
        subscribedThreads(): void;
    }

    interface Link {
        type: string;
        proof: string;
    }

    interface Query {
        type: string;
        address: string;
    }
}

declare class Box {
    static getConfig(address: string, opts?: { profileServer?: string }): Promise<object>;
    static idUtils: {
        verifyClaim(claim: string, opts?: { audience?: string }): Promise<object>;
        isMuportDID(address: string): Promise<boolean>;
        isClaim(claim: string, opts?: { audience?: string }): Promise<boolean>;
    };

    DID: string;
    _3id: {
        signJWT(claim: string): string;
    };
    linkAddress(links: Box.Link[]): void;
    isAddressLinked(queries: Box.Query[]): void;
    listAddressLinks(): Box.Link[];
    removeAddressLink(address: string): Promise<void>;

    static openBox(
        address: string,
        ethereumProvider: any,
        opts?: {
            consentCallback?: () => void;
            pinningNode?: string;
            ipfs?: any;
            addressServer?: string;
        },
    ): Promise<Box>;
    static isLoggedIn(address: string): boolean;
    static create(ethereumProvider: any): Promise<Box>;

    openSpace(name: string, opts?: { consentCallback?: () => void; onSyncDone?: () => void }): Promise<Box.Space>;
    auth(space: string[], user: { address: string }): void;
    syncDone: Promise<Box.Space>;
    onSyncDone(syncDoneFn: () => void): void;
    logout(): void;

    static getProfile(
        address: string,
        opts?: {
            blocklist?: (address: string) => boolean;
            metadata?: string;
            addressServer?: string;
            ipfs?: any;
            useCacheService?: boolean;
            profileServer?: string;
        },
    ): Promise<any>;
    static getProfiles(address: string, opts?: { profileServer?: string }): Promise<object>;
    static profileGraphQL(query: object, opts?: { graphqlServer?: string }): Promise<object>;
    static getVerifiedAccounts(profile: object): Promise<object>;

    static getSpace(
        address: string,
        name: string,
        opts?: { blocklist?: any; metadata?: string; profileServer?: string },
    ): Promise<object>;
    static listSpaces(address: string, opts?: { profileServer?: string }): Promise<object>;

    public: Storage;
    private: Storage;

    static getThread(
        space: string,
        name: string,
        firstModerator: string,
        members: boolean,
        opts?: { profileServer?: string },
    ): Promise<Box.ThreadPost[]>;
    static getThreadByAddress(address: string, opts?: { profileServer?: string }): Promise<Box.ThreadPost[]>;
}
