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
        all(opts?: { metadata?: boolean | undefined }): Promise<any[] | undefined>;
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
                firstModerator?: string | undefined;
                members?: boolean | undefined;
                noAutoSub?: boolean | undefined;
                ghost?: boolean | undefined;
                ghostBacklogLimit?: number | undefined;
            },
        ): Promise<Thread>;
        joinThreadByAddress(address: string, name: string, opts?: { noAutoSub?: boolean | undefined }): Promise<Thread>;
        createConfidentialThread(name: string): Promise<Thread>;
        subscribeThread(
            address: string,
            config: object,
            opts?: { name?: string | undefined; firstModerator?: string | undefined; members?: string | undefined },
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
    static getConfig(address: string, opts?: { profileServer?: string | undefined }): Promise<object>;
    static idUtils: {
        verifyClaim(claim: string, opts?: { audience?: string | undefined }): Promise<object>;
        isMuportDID(address: string): Promise<boolean>;
        isClaim(claim: string, opts?: { audience?: string | undefined }): Promise<boolean>;
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
            consentCallback?: (() => void) | undefined;
            pinningNode?: string | undefined;
            ipfs?: any;
            addressServer?: string | undefined;
        },
    ): Promise<Box>;
    static isLoggedIn(address: string): boolean;
    static create(ethereumProvider: any): Promise<Box>;

    openSpace(
        name: string,
        opts?: { consentCallback?: (() => void) | undefined; onSyncDone?: (() => void) | undefined },
    ): Promise<Box.Space>;
    auth(space: string[], user: { address: string }): void;
    syncDone: Promise<Box.Space>;
    onSyncDone(syncDoneFn: () => void): void;
    logout(): void;

    static getProfile(
        address: string,
        opts?: {
            blocklist?: ((address: string) => boolean) | undefined;
            metadata?: string | undefined;
            addressServer?: string | undefined;
            ipfs?: any;
            useCacheService?: boolean | undefined;
            profileServer?: string | undefined;
        },
    ): Promise<any>;
    static getProfiles(address: string, opts?: { profileServer?: string | undefined }): Promise<object>;
    static profileGraphQL(query: object, opts?: { graphqlServer?: string | undefined }): Promise<object>;
    static getVerifiedAccounts(profile: object): Promise<object>;

    static getSpace(
        address: string,
        name: string,
        opts?: { blocklist?: any; metadata?: string | undefined; profileServer?: string | undefined },
    ): Promise<object>;
    static listSpaces(address: string, opts?: { profileServer?: string | undefined }): Promise<object>;

    public: Storage;
    private: Storage;

    static getThread(
        space: string,
        name: string,
        firstModerator: string,
        members: boolean,
        opts?: { profileServer?: string | undefined },
    ): Promise<Box.ThreadPost[]>;
    static getThreadByAddress(
        address: string,
        opts?: { profileServer?: string | undefined },
    ): Promise<Box.ThreadPost[]>;
}
