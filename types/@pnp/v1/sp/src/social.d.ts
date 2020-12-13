import { SharePointQueryableInstance } from "./sharepointqueryable";
export interface SocialMethods {
    my: MySocialQueryMethods;
    getFollowedSitesUri(): Promise<string>;
    getFollowedDocumentsUri(): Promise<string>;
    follow(actorInfo: SocialActorInfo): Promise<SocialFollowResult>;
    isFollowed(actorInfo: SocialActorInfo): Promise<boolean>;
    stopFollowing(actorInfo: SocialActorInfo): Promise<void>;
}
/**
 * Exposes social following methods
 */
export declare class SocialQuery extends SharePointQueryableInstance implements SocialMethods {
    readonly my: MySocialQueryMethods;
    /**
     * Gets a URI to a site that lists the current user's followed sites.
     */
    getFollowedSitesUri(): Promise<string>;
    /**
     * Gets a URI to a site that lists the current user's followed documents.
     */
    getFollowedDocumentsUri(): Promise<string>;
    /**
     * Makes the current user start following a user, document, site, or tag
     *
     * @param actorInfo The actor to start following
     */
    follow(actorInfo: SocialActorInfo): Promise<SocialFollowResult>;
    /**
     * Indicates whether the current user is following a specified user, document, site, or tag
     *
     * @param actorInfo The actor to find the following status for
     */
    isFollowed(actorInfo: SocialActorInfo): Promise<boolean>;
    /**
     * Makes the current user stop following a user, document, site, or tag
     *
     * @param actorInfo The actor to stop following
     */
    stopFollowing(actorInfo: SocialActorInfo): Promise<void>;
    /**
     * Creates SocialActorInfo request body
     *
     * @param actorInfo The actor to create request body
     */
    private createSocialActorInfoRequestBody;
}
/**
 * Defines the public methods exposed by the my endpoint
 */
export interface MySocialQueryMethods {
    /**
     * Gets this user's data
     */
    get(): Promise<MySocialData>;
    /**
     * Gets users, documents, sites, and tags that the current user is following.
     *
     * @param types Bitwise set of SocialActorTypes to retrieve
     */
    followed(types: SocialActorTypes): Promise<SocialActor[]>;
    /**
     * Gets the count of users, documents, sites, and tags that the current user is following.
     *
     * @param types Bitwise set of SocialActorTypes to retrieve
     */
    followedCount(types: SocialActorTypes): Promise<number>;
    /**
     * Gets the users who are following the current user.
     */
    followers(): Promise<SocialActor[]>;
    /**
     * Gets users who the current user might want to follow.
     */
    suggestions(): Promise<SocialActor[]>;
}
export declare class MySocialQuery extends SharePointQueryableInstance implements MySocialQueryMethods {
    /**
     * Gets users, documents, sites, and tags that the current user is following.
     *
     * @param types Bitwise set of SocialActorTypes to retrieve
     */
    followed(types: SocialActorTypes): Promise<SocialActor[]>;
    /**
     * Gets the count of users, documents, sites, and tags that the current user is following.
     *
     * @param types Bitwise set of SocialActorTypes to retrieve
     */
    followedCount(types: SocialActorTypes): Promise<number>;
    /**
     * Gets the users who are following the current user.
     */
    followers(): Promise<SocialActor[]>;
    /**
     * Gets users who the current user might want to follow.
     */
    suggestions(): Promise<SocialActor[]>;
}
/**
 * Social actor info
 *
 */
export interface SocialActorInfo {
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
export interface SocialActor {
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
 * Defines the properties retrurned from the my endpoint
 */
export interface MySocialData {
    SocialActor: SocialActor;
    MyFollowedDocumentsUri: string;
    MyFollowedSitesUri: string;
}
