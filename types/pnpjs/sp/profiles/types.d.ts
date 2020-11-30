import { _SharePointQueryableInstance, ISharePointQueryableCollection, ISharePointQueryable } from "../sharepointqueryable";
import { PrincipalType, PrincipalSource } from "../types";
export declare class _Profiles extends _SharePointQueryableInstance {
    private clientPeoplePickerQuery;
    private profileLoader;
    /**
     * Creates a new instance of the UserProfileQuery class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this user profile query
     */
    constructor(baseUrl: string | ISharePointQueryable, path?: string);
    /**
     * The url of the edit profile page for the current user
     */
    get editProfileLink(): Promise<string>;
    /**
     * A boolean value that indicates whether the current user's "People I'm Following" list is public
     */
    get isMyPeopleListPublic(): Promise<boolean>;
    /**
     * A boolean value that indicates whether the current user is being followed by the specified user
     *
     * @param loginName The account name of the user
     */
    amIFollowedBy(loginName: string): Promise<boolean>;
    /**
     * A boolean value that indicates whether the current user is following the specified user
     *
     * @param loginName The account name of the user
     */
    amIFollowing(loginName: string): Promise<boolean>;
    /**
     * Gets tags that the current user is following
     *
     * @param maxCount The maximum number of tags to retrieve (default is 20)
     */
    getFollowedTags(maxCount?: number): Promise<string[]>;
    /**
     * Gets the people who are following the specified user
     *
     * @param loginName The account name of the user
     */
    getFollowersFor(loginName: string): Promise<any[]>;
    /**
     * Gets the people who are following the current user
     *
     */
    get myFollowers(): ISharePointQueryableCollection;
    /**
     * Gets user properties for the current user
     *
     */
    get myProperties(): _SharePointQueryableInstance;
    /**
     * Gets the people who the specified user is following
     *
     * @param loginName The account name of the user.
     */
    getPeopleFollowedBy(loginName: string): Promise<any[]>;
    /**
     * Gets user properties for the specified user.
     *
     * @param loginName The account name of the user.
     */
    getPropertiesFor(loginName: string): Promise<any>;
    /**
     * Gets the 20 most popular hash tags over the past week, sorted so that the most popular tag appears first
     *
     */
    get trendingTags(): Promise<IHashTagCollection>;
    /**
     * Gets the specified user profile property for the specified user
     *
     * @param loginName The account name of the user
     * @param propertyName The case-sensitive name of the property to get
     */
    getUserProfilePropertyFor(loginName: string, propertyName: string): Promise<string>;
    /**
     * Removes the specified user from the user's list of suggested people to follow
     *
     * @param loginName The account name of the user
     */
    hideSuggestion(loginName: string): Promise<void>;
    /**
     * A boolean values that indicates whether the first user is following the second user
     *
     * @param follower The account name of the user who might be following the followee
     * @param followee The account name of the user who might be followed by the follower
     */
    isFollowing(follower: string, followee: string): Promise<boolean>;
    /**
     * Uploads and sets the user profile picture (Users can upload a picture to their own profile only). Not supported for batching.
     *
     * @param profilePicSource Blob data representing the user's picture in BMP, JPEG, or PNG format of up to 4.76MB
     */
    setMyProfilePic(profilePicSource: Blob): Promise<void>;
    /**
     * Sets single value User Profile property
     *
     * @param accountName The account name of the user
     * @param propertyName Property name
     * @param propertyValue Property value
     */
    setSingleValueProfileProperty(accountName: string, propertyName: string, propertyValue: string): Promise<void>;
    /**
     * Sets multi valued User Profile property
     *
     * @param accountName The account name of the user
     * @param propertyName Property name
     * @param propertyValues Property values
     */
    setMultiValuedProfileProperty(accountName: string, propertyName: string, propertyValues: string[]): Promise<void>;
    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
     *
     * @param emails The email addresses of the users to provision sites for
     */
    createPersonalSiteEnqueueBulk(...emails: string[]): Promise<void>;
    /**
     * Gets the user profile of the site owner
     *
     */
    get ownerUserProfile(): Promise<IUserProfile>;
    /**
     * Gets the user profile for the current user
     */
    get userProfile(): Promise<any>;
    /**
     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files
     *
     * @param interactiveRequest true if interactively (web) initiated request, or false (default) if non-interactively (client) initiated request
     */
    createPersonalSite(interactiveRequest?: boolean): Promise<void>;
    /**
     * Sets the privacy settings for this profile
     *
     * @param share true to make all social data public; false to make all social data private
     */
    shareAllSocialData(share: boolean): Promise<void>;
    /**
     * Resolves user or group using specified query parameters
     *
     * @param queryParams The query parameters used to perform resolve
     */
    clientPeoplePickerResolveUser(queryParams: IClientPeoplePickerQueryParameters): Promise<IPeoplePickerEntity>;
    /**
     * Searches for users or groups using specified query parameters
     *
     * @param queryParams The query parameters used to perform search
     */
    clientPeoplePickerSearchUser(queryParams: IClientPeoplePickerQueryParameters): Promise<IPeoplePickerEntity[]>;
}
export interface IProfiles extends _Profiles {
}
export declare const Profiles: import("../sharepointqueryable").ISPInvokableFactory<IProfiles>;
/**
 * Client people picker query parameters
 */
export interface IClientPeoplePickerQueryParameters {
    /**
     * Gets or sets a value that specifies whether e-mail addresses can be used to perform search.
     */
    AllowEmailAddresses?: boolean;
    /**
     * Gets or sets a value that specifies whether multiple entities are allowed.
     */
    AllowMultipleEntities?: boolean;
    /**
     * Gets or sets a value that specifies whether only e-mail addresses can be used to perform search.
     */
    AllowOnlyEmailAddresses?: boolean;
    /**
     * Gets or sets a value that specifies whether all URL zones are used to perform search.
     */
    AllUrlZones?: boolean;
    /**
     * Gets or sets a value that specifies claim providers that are used to perform search.
     */
    EnabledClaimProviders?: string;
    /**
     * Gets or sets a value that specifies whether claims are forced (if yes, multiple results for single entity can be returned).
     */
    ForceClaims?: boolean;
    /**
     * Gets or sets a value that specifies limit of results returned.
     */
    MaximumEntitySuggestions: number;
    /**
     * Gets or sets a value that specifies principal sources to perform search.
     */
    PrincipalSource?: PrincipalSource;
    /**
     * Gets or sets a value that specifies principal types to search for.
     */
    PrincipalType?: PrincipalType;
    /**
     * Gets or sets a value that specifies additional query settings.
     */
    QuerySettings?: IPeoplePickerQuerySettings;
    /**
     * Gets or sets a value that specifies the term to search for.
     */
    QueryString: string;
    /**
     * Gets or sets a value that specifies ID of the SharePoint Group that will be used to perform search.
     */
    SharePointGroupID?: number;
    /**
     * Gets or sets a value that specifies URL zones that are used to perform search.
     */
    UrlZone?: UrlZone;
    /**
     * Gets or sets a value that specifies whether search is limited to specific URL zone.
     */
    UrlZoneSpecified?: boolean;
    /**
     * Gets or sets a value that specifies GUID of the Web Application that is used to perform search.
     */
    WebApplicationID?: string;
}
export interface IHashTagCollection {
    Items: IHashTag[];
}
/**
 * People picker query settings
 */
export interface IPeoplePickerQuerySettings {
    ExcludeAllUsersOnTenantClaim?: boolean;
}
/**
 * People picker entity
 */
export interface IPeoplePickerEntity {
    Description: string;
    DisplayText: string;
    EntityData: IPeoplePickerEntityData;
    EntityType: string;
    IsResolved: boolean;
    Key: string;
    MultipleMatches: IPeoplePickerEntityData[];
    ProviderDisplayName: string;
    ProviderName: string;
}
/**
 * People picker entity data
 */
export interface IPeoplePickerEntityData {
    AccountName?: string;
    Department?: string;
    Email?: string;
    IsAltSecIdPresent?: string;
    MobilePhone?: string;
    ObjectId?: string;
    OtherMails?: string;
    PrincipalType?: string;
    SPGroupID?: string;
    SPUserID?: string;
    Title?: string;
}
/**
 * Specifies the originating zone of a request received.
 */
export declare const enum UrlZone {
    /**
     * Specifies the default zone used for requests unless another zone is specified.
     */
    DefaultZone = 0,
    /**
     * Specifies an intranet zone.
     */
    Intranet = 1,
    /**
     * Specifies an Internet zone.
     */
    Internet = 2,
    /**
     * Specifies a custom zone.
     */
    Custom = 3,
    /**
     * Specifies an extranet zone.
     */
    Extranet = 4
}
export interface IHashTag {
    /**
     * The hash tag's internal name.
     */
    Name?: string;
    /**
     * The number of times that the hash tag is used.
     */
    UseCount?: number;
}
export interface IFollowedContent {
    FollowedDocumentsUrl: string;
    FollowedSitesUrl: string;
}
export interface IUserProfile {
    /**
     * An object containing the user's FollowedDocumentsUrl and FollowedSitesUrl.
     */
    FollowedContent?: IFollowedContent;
    /**
     * The account name of the user. (SharePoint Online only)
     */
    AccountName?: string;
    /**
     * The display name of the user. (SharePoint Online only)
     */
    DisplayName?: string;
    /**
     * The FirstRun flag of the user. (SharePoint Online only)
     */
    O15FirstRunExperience?: number;
    /**
     * The personal site of the user.
     */
    PersonalSite?: string;
    /**
     * The capabilities of the user's personal site. Represents a bitwise PersonalSiteCapabilities value:
     * None = 0; Profile Value = 1; Social Value = 2; Storage Value = 4; MyTasksDashboard Value = 8; Education Value = 16; Guest Value = 32.
     */
    PersonalSiteCapabilities?: number;
    /**
     * The error thrown when the user's personal site was first created, if any. (SharePoint Online only)
     */
    PersonalSiteFirstCreationError?: string;
    /**
     * The date and time when the user's personal site was first created. (SharePoint Online only)
     */
    PersonalSiteFirstCreationTime?: Date;
    /**
     * The status for the state of the personal site instantiation
     */
    PersonalSiteInstantiationState?: number;
    /**
     * The date and time when the user's personal site was last created. (SharePoint Online only)
     */
    PersonalSiteLastCreationTime?: Date;
    /**
     * The number of attempts made to create the user's personal site. (SharePoint Online only)
     */
    PersonalSiteNumberOfRetries?: number;
    /**
     * Indicates whether the user's picture is imported from Exchange.
     */
    PictureImportEnabled?: boolean;
    /**
     * The public URL of the personal site of the current user. (SharePoint Online only)
     */
    PublicUrl?: string;
    /**
     * The URL used to create the user's personal site.
     */
    UrlToCreatePersonalSite?: string;
}
//# sourceMappingURL=types.d.ts.map