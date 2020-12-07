import { _SharePointQueryableInstance, ISharePointQueryable } from "../sharepointqueryable";
export declare class _Social extends _SharePointQueryableInstance implements ISocial {
    get my(): IMySocial;
    getFollowedSitesUri(): Promise<string>;
    getFollowedDocumentsUri(): Promise<string>;
    follow(actorInfo: ISocialActorInfo): Promise<SocialFollowResult>;
    isFollowed(actorInfo: ISocialActorInfo): Promise<boolean>;
    stopFollowing(actorInfo: ISocialActorInfo): Promise<void>;
    private createSocialActorInfoRequestBody;
}
/**
 * Describes the public methods for the Social interface
 */
export interface ISocial {
    /**
     * Access to the curren't user's social data
     */
    readonly my: IMySocial;
    /**
     * Get a list of followed sites for the current user.
     */
    getFollowedSitesUri(): Promise<string>;
    /**
     * Get a list of followed documents for the current user.
     */
    getFollowedDocumentsUri(): Promise<string>;
    /**
     * Follow an actor for the current user.
     *
     * @param actorInfo Provide the actor to follow.
     */
    follow(actorInfo: ISocialActorInfo): Promise<SocialFollowResult>;
    /**
     * Check if the current user is following the actor.
     *
     * @param actorInfo Provide the actor to check.
     */
    isFollowed(actorInfo: ISocialActorInfo): Promise<boolean>;
    /**
     * Stop following an actor for the current user.
     *
     * @param actorInfo Provide the actor to stop following.
     */
    stopFollowing(actorInfo: ISocialActorInfo): Promise<void>;
}
/**
 * Get a new Social instance for the particular Url
 */
export declare const Social: (baseUrl: string | ISharePointQueryable) => ISocial;
/**
 * Current user's Social instance
 */
export declare class _MySocial extends _SharePointQueryableInstance implements IMySocial {
    followed(types: SocialActorTypes): Promise<ISocialActor[]>;
    followedCount(types: SocialActorTypes): Promise<number>;
    followers(): Promise<ISocialActor[]>;
    suggestions(): Promise<ISocialActor[]>;
}
/**
 * Defines the public methods exposed by the my endpoint
 */
export interface IMySocial {
    /**
     * Allow access to the v2 invokable
     */
    (this: IMySocial): Promise<IMySocialData>;
    /**
     * Gets this user's data
     */
    get(): Promise<IMySocialData>;
    /**
     * Gets users, documents, sites, and tags that the current user is following.
     *
     * @param types Bitwise set of SocialActorTypes to retrieve
     */
    followed(types: SocialActorTypes): Promise<ISocialActor[]>;
    /**
     * Gets the count of users, documents, sites, and tags that the current user is following.
     *
     * @param types Bitwise set of SocialActorTypes to retrieve
     */
    followedCount(types: SocialActorTypes): Promise<number>;
    /**
     * Gets the users who are following the current user.
     */
    followers(): Promise<ISocialActor[]>;
    /**
     * Gets users who the current user might want to follow.
     */
    suggestions(): Promise<ISocialActor[]>;
}
/**
 * Invokable factory for IMySocial instances
 */
export declare const MySocial: import("../sharepointqueryable").ISPInvokableFactory<IMySocial>;
/**
 * Social actor info
 *
 */
export interface ISocialActorInfo {
    AccountName?: string;
    ActorType: SocialActorType;
    ContentUri?: string;
    Id?: string;
    TagGuid?: string;
}
/**
 * Social actor type
 *
 */
export declare const enum SocialActorType {
    User = 0,
    Document = 1,
    Site = 2,
    Tag = 3
}
/**
 * Social actor type
 *
 */
export declare const enum SocialActorTypes {
    None = 0,
    User = 1,
    Document = 2,
    Site = 4,
    Tag = 8,
    /**
     * The set excludes documents and sites that do not have feeds.
     */
    ExcludeContentWithoutFeeds = 268435456,
    /**
     * The set includes group sites
     */
    IncludeGroupsSites = 536870912,
    /**
     * The set includes only items created within the last 24 hours
     */
    WithinLast24Hours = 1073741824
}
/**
 * Result from following
 *
 */
export declare const enum SocialFollowResult {
    Ok = 0,
    AlreadyFollowing = 1,
    LimitReached = 2,
    InternalError = 3
}
/**
 * Specifies an exception or status code.
 */
export declare const enum SocialStatusCode {
    /**
     * The operation completed successfully
     */
    OK = 0,
    /**
     * The request is invalid.
     */
    InvalidRequest = 1,
    /**
     *  The current user is not authorized to perform the operation.
     */
    AccessDenied = 2,
    /**
     * The target of the operation was not found.
     */
    ItemNotFound = 3,
    /**
     * The operation is invalid for the target's current state.
     */
    InvalidOperation = 4,
    /**
     * The operation completed without modifying the target.
     */
    ItemNotModified = 5,
    /**
     * The operation failed because an internal error occurred.
     */
    InternalError = 6,
    /**
     * The operation failed because the server could not access the distributed cache.
     */
    CacheReadError = 7,
    /**
     * The operation succeeded but the server could not update the distributed cache.
     */
    CacheUpdateError = 8,
    /**
     * No personal site exists for the current user, and no further information is available.
     */
    PersonalSiteNotFound = 9,
    /**
     * No personal site exists for the current user, and a previous attempt to create one failed.
     */
    FailedToCreatePersonalSite = 10,
    /**
     * No personal site exists for the current user, and a previous attempt to create one was not authorized.
     */
    NotAuthorizedToCreatePersonalSite = 11,
    /**
     * No personal site exists for the current user, and no attempt should be made to create one.
     */
    CannotCreatePersonalSite = 12,
    /**
     * The operation was rejected because an internal limit had been reached.
     */
    LimitReached = 13,
    /**
     * The operation failed because an error occurred during the processing of the specified attachment.
     */
    AttachmentError = 14,
    /**
     * The operation succeeded with recoverable errors; the returned data is incomplete.
     */
    PartialData = 15,
    /**
     * A required SharePoint feature is not enabled.
     */
    FeatureDisabled = 16,
    /**
     * The site's storage quota has been exceeded.
     */
    StorageQuotaExceeded = 17,
    /**
     * The operation failed because the server could not access the database.
     */
    DatabaseError = 18
}
export interface ISocialActor {
    /**
     * Gets the actor type.
     */
    ActorType: SocialActorType;
    /**
     * Gets the actor's unique identifier.
     */
    Id: string;
    /**
     * Gets the actor's canonical URI.
     */
    Uri: string;
    /**
     * Gets the actor's display name.
     */
    Name: string;
    /**
     * Returns true if the current user is following the actor, false otherwise.
     */
    IsFollowed: boolean;
    /**
     * Gets a code that indicates recoverable errors that occurred during actor retrieval
     */
    Status: SocialStatusCode;
    /**
     * Returns true if the Actor can potentially be followed, false otherwise.
     */
    CanFollow: boolean;
    /**
     * Gets the actor's image URI. Only valid when ActorType is User, Document, or Site
     */
    ImageUri: string;
    /**
     * Gets the actor's account name. Only valid when ActorType is User
     */
    AccountName: string;
    /**
     * Gets the actor's email address. Only valid when ActorType is User
     */
    EmailAddress: string;
    /**
     * Gets the actor's title. Only valid when ActorType is User
     */
    Title: string;
    /**
     * Gets the text of the actor's most recent post. Only valid when ActorType is User
     */
    StatusText: string;
    /**
     * Gets the URI of the actor's personal site. Only valid when ActorType is User
     */
    PersonalSiteUri: string;
    /**
     * Gets the URI of the actor's followed content folder. Only valid when this represents the current user
     */
    FollowedContentUri: string;
    /**
     * Gets the actor's content URI. Only valid when ActorType is Document, or Site
     */
    ContentUri: string;
    /**
     * Gets the actor's library URI. Only valid when ActorType is Document
     */
    LibraryUri: string;
    /**
     * Gets the actor's tag GUID. Only valid when ActorType is Tag
     */
    TagGuid: string;
}
/**
 * Defines the properties returned from the my endpoint
 */
export interface IMySocialData {
    SocialActor: ISocialActor;
    MyFollowedDocumentsUri: string;
    MyFollowedSitesUri: string;
}
//# sourceMappingURL=types.d.ts.map