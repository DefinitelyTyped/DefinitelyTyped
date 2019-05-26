declare module "3box"{    
    interface BoxVerified {
        Verified: () => BoxVerified,
        DID: () => string,
        github: () => any,
        addGithub: (gistUrl: string) => any,
        twitter: () => any,
        addTwitter: (claim: string) => any,
        email: () => any,
        addEmail: (claim: string) => any
    }
    interface BoxThreadOpts_getPosts {
        gt?: string,
        gte?: string,
        lt?: string,
        lte?: string,
        limit?: number,
        reverse?: boolean
    }
    interface BoxThread {
        BoxThread: () => BoxThread,
        post: (message: string) => string,
        getPosts: (opts?: BoxThreadOpts_getPosts) => Array<any>
        onNewPost: (newPostFn: () => undefined) => undefined
    }
    interface BoxSpaceOpts_joinThread {
        noAutoSub?: boolean
    }
    interface BoxSpace {
        public: BoxKeyValueStore,
        private: BoxKeyValueStore,
        joinThread: (name: string, opts?: BoxSpaceOpts_joinThread) => BoxThread,
        subscribeThread: (name: string) => undefined,
        unsubscribeThread: (name: string) => undefined,
        subscribedThreads: () => Array<string>
        BoxSpace: () => BoxSpace
    }
    interface BoxKeyValueStoreMetadata { }

    interface BoxKeyValueStore {
        BoxKeyValueStore: () => BoxKeyValueStore,
        log: Array<any>,
        get: (key: any) => any,
        getMetadata: (key: any) => BoxKeyValueStoreMetadata | undefined, 
        set: (key: any, value: any) => boolean,
        remove: (key: any) => boolean
    }
    class BoxStaticIdUtils {
        verifyClaim: () => any;
        isMuportDID: (address: any) => any | boolean;
        isClaim: (claim: any, opts: any) => Promise<boolean>;
    }
    interface BoxObjectOpts_OpenSpace {
        consentCallback?: () => any
        onSyncDone?: () => any
    }
    interface BoxObjectOpts_GetProfile {
        addressServer?: string,
        ipfs?: any, //ipfs object
        useCacheService?: boolean,
        profileServer?: string 
    }
    interface BoxObjectOpts_GetProfiles {
        profileServer?: string 
    }
    interface BoxObjectOpts_GetSpace {
        profileServer?: string, 
        metadata?: string
    }
    interface BoxObjectOpts_GetThread {
        profileServer?: string 
    }
    interface BoxObjectOpts_ListSpaces {
        profileServer?: string 
    }
    interface BoxObjectOpts_profileGraphQL {
        graphqlServer?: string 
    }
    interface BoxObjectOpts_openBox {
        consentCallback?: () => any,
        pinningNode?: string,
        ipfs?: any, // ipfsobj
        addressServer?: string
    }
    
    class BoxInstance {
        public: BoxKeyValueStore;
        private: BoxKeyValueStore;
        verified: BoxVerified;
        spaces: any;
        openSpace: (name: string, opts?: BoxObjectOpts_OpenSpace) => any;
        onSyncDone: (cb: () => undefined) => null;
        logout: () => any;
    }

    const idUtils: BoxStaticIdUtils;
    const getProfile: (address: any, opts?: BoxObjectOpts_GetProfile) => Promise<any>;
    const getProfiles: (address: Array<any>, opts?: BoxObjectOpts_GetProfiles) => undefined;
    const getSpace: (address: any, name: any, opts?: BoxObjectOpts_GetSpace) => undefined;
    const getThread: (space: any, name: any, opts?: BoxObjectOpts_GetThread) => Array<string>;
    const listSpaces: (address: any, opts?: BoxObjectOpts_ListSpaces) => undefined;
    const profileGraphQL: (query: any, opts?: BoxObjectOpts_profileGraphQL) => undefined;
    const getVerifiedAccounts: (profile: any) => undefined;
    const openBox: (address: any, ethereumProvider: any, opts?: BoxObjectOpts_openBox) => BoxInstance;
    const isLoggedIn: (address: any) => undefined;
}

