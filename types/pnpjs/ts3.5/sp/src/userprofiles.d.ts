import { SharePointQueryable, SharePointQueryableInstance, SharePointQueryableCollection } from "./sharepointqueryable";
import { ClientPeoplePickerQueryParameters, HashTagCollection, PeoplePickerEntity, UserProfile } from "./types";
export declare class UserProfileQuery extends SharePointQueryableInstance {
    private clientPeoplePickerQuery;
    private profileLoader;
    /**
     * Creates a new instance of the UserProfileQuery class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this user profile query
     */
    constructor(baseUrl: string | SharePointQueryable, path?: string);
    /**
     * The url of the edit profile page for the current user
     */
    readonly editProfileLink: Promise<string>;
    /**
     * A boolean value that indicates whether the current user's "People I'm Following" list is public
     */
    readonly isMyPeopleListPublic: Promise<boolean>;
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
    readonly myFollowers: SharePointQueryableCollection;
    /**
     * Gets user properties for the current user
     *
     */
    readonly myProperties: SharePointQueryableInstance;
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
    readonly trendingTags: Promise<HashTagCollection>;
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
    readonly ownerUserProfile: Promise<UserProfile>;
    /**
     * Gets the user profile for the current user
     */
    readonly userProfile: Promise<any>;
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
    clientPeoplePickerResolveUser(queryParams: ClientPeoplePickerQueryParameters): Promise<PeoplePickerEntity>;
    /**
     * Searches for users or groups using specified query parameters
     *
     * @param queryParams The query parameters used to perform search
     */
    clientPeoplePickerSearchUser(queryParams: ClientPeoplePickerQueryParameters): Promise<PeoplePickerEntity[]>;
}
