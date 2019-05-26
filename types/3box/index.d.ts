// Type definitions for 3box
// Definitions by: KuhnChris <https://github.com/kuhnchris> 
export interface BoxVerified {
    Verified: () => BoxVerified;
    DID: () => string;
    github: () => any;
    addGithub: (gistUrl: string) => any;
    twitter: () => any;
    addTwitter: (claim: string) => any;
    email: () => any;
    addEmail: (claim: string) => any;
}
export interface BoxThreadOpts_getPosts {
    gt?: string;
    gte?: string;
    lt?: string;
    lte?: string;
    limit?: number;
    reverse?: boolean;
}
export interface BoxThread {
    BoxThread: () => BoxThread;
    post: (message: string) => string;
    getPosts: (opts?: BoxThreadOpts_getPosts) => any[];
    onNewPost: (newPostFn: () => undefined) => undefined;
}
export interface BoxSpaceOpts_joinThread {
    noAutoSub?: boolean;
}
export interface BoxSpace {
    public: BoxKeyValueStore;
    private: BoxKeyValueStore;
    joinThread: (name: string, opts?: BoxSpaceOpts_joinThread) => BoxThread;
    subscribeThread: (name: string) => undefined;
    unsubscribeThread: (name: string) => undefined;
    subscribedThreads: () => string[];
    BoxSpace: () => BoxSpace;
}
export interface BoxKeyValueStoreMetadata {
    // missing definition
    dummy: boolean;
}

export interface BoxKeyValueStore {
    BoxKeyValueStore: () => BoxKeyValueStore;
    log: any[];
    get: (key: any) => any;
    getMetadata: (key: any) => BoxKeyValueStoreMetadata | undefined;
    set: (key: any, value: any) => boolean;
    remove: (key: any) => boolean;
}
export interface BoxIsMuportDIDReturn {
    // missing definition
    dummy: boolean;
}
export class BoxStaticIdUtils {
    verifyClaim: () => any;
    isMuportDID: (address: any) => BoxIsMuportDIDReturn | boolean;
    isClaim: (claim: any, opts: any) => Promise<boolean>;
}
export interface BoxObjectOpts_OpenSpace {
    consentCallback?: () => any;
    onSyncDone?: () => any;
}
export interface BoxObjectOpts_GetProfile {
    addressServer?: string;
    ipfs?: any; // ipfs object
    useCacheService?: boolean;
    profileServer?: string;
}
export interface BoxObjectOpts_GetProfiles {
    profileServer?: string;
}
export interface BoxObjectOpts_GetSpace {
    profileServer?: string;
    metadata?: string;
}
export interface BoxObjectOpts_GetThread {
    profileServer?: string;
}
export interface BoxObjectOpts_ListSpaces {
    profileServer?: string;
}
export interface BoxObjectOpts_profileGraphQL {
    graphqlServer?: string;
}
export interface BoxObjectOpts_openBox {
    consentCallback?: () => any;
    pinningNode?: string;
    ipfs?: any; // ipfsobj
    addressServer?: string;
}

export class BoxInstance {
    public: BoxKeyValueStore;
    private: BoxKeyValueStore;
    verified: BoxVerified;
    spaces: any;
    openSpace: (name: string, opts?: BoxObjectOpts_OpenSpace) => any;
    onSyncDone: (cb: () => undefined) => null;
    logout: () => any;
}

export const idUtils: BoxStaticIdUtils;
export function getProfile(address: any, opts?: BoxObjectOpts_GetProfile): Promise<any>;
export function getProfiles(address: any[], opts?: BoxObjectOpts_GetProfiles): undefined;
export function getSpace(address: any, name: any, opts?: BoxObjectOpts_GetSpace): undefined;
export function getThread(space: any, name: any, opts?: BoxObjectOpts_GetThread): string[];
export function listSpaces(address: any, opts?: BoxObjectOpts_ListSpaces): undefined;
export function profileGraphQL(query: any, opts?: BoxObjectOpts_profileGraphQL): undefined;
export function getVerifiedAccounts(profile: any): undefined;
export function openBox(address: any, ethereumProvider: any, opts?: BoxObjectOpts_openBox): BoxInstance;
export function isLoggedIn(address: any): undefined;
