// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="SP.d.ts"/>

declare namespace SP {

    export namespace UserProfiles {
        /** Specifies types of changes made in the user profile store. */
        export enum ChangeTypes {
            /** No change was made */
            none,
            /** An object was added */
            add,
            /** An object was modified */
            modify,
            /** An object was removed */
            remove,
            /** The metadata of an object was modified */
            metadata,
            /** Multiple operations were performed on an object */
            all
        }

        export class HashTag extends ClientValueObject {
            get_name(): string;
            get_useCount(): number;
        }

        export class HashTagCollection extends SP.ClientObjectCollection<HashTag> {
            itemAt(index: number): HashTag;
            get_item(index: number): HashTag;
        }

        /** Specifies types of user-related objects that can be changed in the user profile store. */
        export enum ObjectTypes {
            none,
            singleValueProperty,
            multiValueProperty,
            anniversary,
            dlMembership,
            siteMembership,
            quickLink,
            colleague,
            personalizationSite,
            userProfile,
            webLog,
            custom,
            organizationProfile,
            organizationMembership,
            all
        }

        /** Provides methods for operations related to people.
            Note: The SocialFollowingManager object is the recommended object for performing Following People and Following Content tasks.
            However, PeopleManager provides some methods that SocialFollowingManager doesn�t. */
        export class PeopleManager extends SP.ClientObject {
            constructor(context: SP.ClientRuntimeContext);
            static getTrendingTags(context: SP.ClientRuntimeContext): HashTagCollection;
            /** Checks whether the first user is following the second user. */
            static isFollowing(context: SP.ClientRuntimeContext, possibleFollowerAccountName: string, possibleFolloweeAccountName: string): SP.BooleanResult;
            /** Gets the URL of the edit profile page for the current user. */
            get_editProfileLink(): string;
            /** Gets a Boolean value that indicates whether the current user's People I'm Following list is public. */
            get_isMyPeopleListPublic(): boolean;
            /** Gets tags that the user is following. */
            getFollowedTags(numberOfTagsToFetch: number): string[];
            /** Gets user properties for the current user. */
            getMyProperties(): PersonProperties;
            getPropertiesFor(accountName: string): PersonProperties;
            /** Gets the specified user profile property for the specified user. */
            getUserProfilePropertyFor(accountName: string, propertyName: string): string;
            /** Gets the specified user profile properties for the specified user. */
            getUserProfilePropertiesFor(propertiesForUser: UserProfilePropertiesForUser): any[];
            /** Gets suggestions for who the current user might want to follow.
                Note: The recommended API to use for this task is SocialFollowingManager.getSuggestions.
                Returns list of PersonProperties objects */
            getMySuggestions(): SP.ClientObjectList<PersonProperties>;
            /** Removes the specified user from the user's list of suggested people to follow. */
            hideSuggestion(accountName: string): void;
            follow(accountName: string): void;
            stopFollowing(accountName: string): void;
            /** Add the specified tag to the current user's list of followed tags.
                @param tagId GUID of the tag to start following. */
            followTag(tagId: string): void;
            /** Remove the specified tag from the current user's list of followed tags.
                @param tagId GUID of the tag to stop following. */
            stopFollowingTag(tagId: string): void;
            amIFollowing(accountName: string): SP.BooleanResult;
            getPeopleFollowedByMe(): SP.ClientObjectList<PersonProperties>;
            getPeopleFollowedBy(accountName: string): SP.ClientObjectList<PersonProperties>;
            getMyFollowers(): SP.ClientObjectList<PersonProperties>;
            getFollowersFor(accountName: string): SP.ClientObjectList<PersonProperties>;
            amIFollowedBy(accountName: string): SP.BooleanResult;
            /** Uploads and sets the user profile picture.
                Pictures in bmp, jpg and png formats and up to 5,000,000 bytes are supported.
                A user can upload a picture only to the user's own profile.
                @param data Binary content of an image file */
            setMyProfilePicture(data: SP.Base64EncodedByteArray): void;
        }

        /** Specifies the capabilities of a personal site. */
        export enum PersonalSiteCapabilities {
            none,
            profile,
            social,
            storage,
            myTasksDashboard,
            education,
            guest
        }

        /** Specifies an exception or status code for the state of a personal site instantiation. */
        export enum PersonalSiteInstantiationState {
            uninitialized,
            enqueued,
            created,
            deleted,
            permissionsGeneralFailure,
            permissionsUPANotGranted,
            permissionsUserNotLicensed,
            permissionsSelfServiceSiteCreationDisabled,
            permissionsNoMySitesInPeopleLight,
            permissionsEmptyHostUrl,
            permissionsHostFailedToInitializePersonalSiteContext,
            errorGeneralFailure,
            errorManagedPathDoesNotExist,
            errorLanguageNotInstalled,
            errorPartialCreate,
            errorPersonalSiteAlreadyExists,
            errorRootSiteNotPresent,
            errorSelfServiceSiteCreateCallFailed
        }

        export enum SocialDataStoreExceptionCode {
            socialListNotFound,
            personalSiteNotFound,
            cannotCreatePersonalSite,
            noSocialFeatures
        }

        /** Represents user properties. */
        export class PersonProperties extends SP.ClientObject {
            /** Specifies the person's account name */
            get_accountName(): string;
            /** Specifies an array of strings containing the account names of a person's direct reports. */
            get_directReports(): string[];
            /** Specifies the person's name. */
            get_displayName(): string;
            /** Specifies the person's email address. */
            get_email(): string;
            /** Specifies an array of strings that specify the account names of a person's managers. */
            get_extendedManagers(): string[];
            /** Specifies an array of strings that specify the account names of person's extended reports. */
            get_extendedReports(): string[];
            /** Represents whether or not the current user is following this person. */
            get_isFollowed(): boolean;
            /** Specifies the person's latest microblog post. */
            get_latestPost(): string;
            /** Specifies an array of strings that specify the account names of person's peers, that is, those who have the same manager. */
            get_peers(): string[];
            /** Specifies the absolute URL of the person's personal page. */
            get_personalUrl(): string;
            /** Specifies the URL for the person's profile picture. */
            get_pictureUrl(): string;
            /** Specifies the person's title. */
            get_title(): string;
            /** Represents all user profile properties including custom.
                The privacy settings affect which properties can be retrieved. 
                Multiple values are delimited by the vertical bar "|".
                Null values are specified as empty strings. */
            get_userProfileProperties(): { [name: string]: string; };
            /** Specifies the URL for the person's profile. */
            get_userUrl(): string;
        }

        /** Provides an alternate entry point to user profiles rather than calling methods directly. */
        export class ProfileLoader extends SP.ClientObject {
            static getProfileLoader(context: SP.ClientRuntimeContext): ProfileLoader;
            getUserProfile(): UserProfile;
        }

        /** Represents a client-side user profile for a person.
            Note: The client-side UserProfile object provides methods you can use to create a personal site for the current user.
            However, it does not contain the user properties that the server-side UserProfile object contains.
            To access user properties from client-side code, use PeopleManager */
        export class UserProfile extends SP.ClientObject {
            constructor();
            /** Represents the content that the user is following. */
            get_followedContent(): FollowedContent;
            /** Retrieves SP.Site object that represents the user's personal site. */
            get_personalSite(): SP.Site;
            /** Specifies attributes of the user's personal site. */
            get_personalSiteCapabilities(): PersonalSiteCapabilities;
            /** Provides the state of the user's personal site */
            get_personalSiteInstantiationState(): PersonalSiteInstantiationState;
            /** Specifies whether the user can import pictures */
            get_pictureImportEnabled(): boolean;
            /** Specifies the URL to allow the current user to create a personal site. */
            get_urlToCreatePersonalSite(): string;
            /** Specifies whether the current user's social data is to be shared. */
            shareAllSocialData(shareAll: boolean): void;
            /** This member is reserved for internal use and is not intended to be used directly from your code.
                Use the createPersonalSiteEnque method to create a personal site. */
            createPersonalSite(lcid: number): void;
            /** Enquees creation of a personal site for the current user.
                @param isInteractive Has a true value if the request is from a web browser and a false value if the request is from a client application. */
            createPersonalSiteEnque(isInteractive: boolean): void;
        }

        /** Provides access to followed content items. */
        export class FollowedContent extends SP.ClientObject {
            constructor(context: SP.ClientRuntimeContext);
            static newObject(context: SP.ClientRuntimeContext): FollowedContent;
            /** Gets the location of the followed sites view */
            get_followedDocumentsUrl(): string;
            /** Gets the location of the followed documents view. */
            get_followedSitesUrl(): string;
            /** The Follow method adds the specified document or site to the list of followed content.
                @param url  URL that identifies the item to follow.
                            The url parameter can identify an existing document or site using the url property of the original item.
                            The url parameter can also identify a document with the following format: http://host/site?listId=<listGuid>&itemId=<itemId>
                @param data Optional parameter that holds application-defined data for the item.
                */
            follow(url: string, data?: FollowedItemData): FollowResult;
            /** The FollowItem method is reserved for server-to-server use only.
                The server sets the specified item to be followed by the current user.
                This method cannot be called from the client. */
            followItem(item: FollowedItem): FollowResult;
            /** Removes the specified document or site from list of followed content.
                @param url  URL that identifies the item to stop following.
                            The url parameter can identify an existing document or site using the url property of the original item.
                            The url parameter can also identify a document with the following format: http://host/site?listId=<listGuid>&itemId=<itemId> */
            stopFollowing(url: string): void;
            /** Determines if the specified document or site is being followed.
                @param url  URL that identifies the item that is supposed to be followed.
                            The url parameter can identify an existing document or site using the url property of the original item.
                            The url parameter can also identify a document with the following format: http://host/site?listId=<listGuid>&itemId=<itemId> */
            isFollowed(url: string): SP.BooleanResult;
            /** Retrieves the followed status of the specified document or site.
                Returns a value of type FollowedStatus, wrapped into a SP.IntResult object.
                @param url  URL that identifies the followed item.
                            The url parameter can identify an existing document or site using the url property of the original item.
                            The url parameter can also identify a document with the following format: http://host/site?listId=<listGuid>&itemId=<itemId> */
            getFollowedStatus(url: string): SP.IntResult;
            /** Returns the followed item identified by a given URL or returns null if the item does not exist.
                @param url  URL that identifies the followed item.
                            The url parameter can identify an existing document or site using the url property of the original item.
                            The url parameter can also identify a document with the following format: http://host/site?listId=<listGuid>&itemId=<itemId> */
            getItem(url: string): FollowedItem;
            /** Returns an array of zero or more followed items described by the type and subtype parameters.
                @param options Describes the type of item to return.
                @param subType Integer that identifies the sites to return by the web template. */
            getItems(options: FollowedContentQueryOptions, subtype: number): FollowedItem[];
            /** Updates the properties for followed item with specified URL.
                @param url  URL that identifies the followed item.
                            The url parameter can identify an existing document or site using the url property of the original item.
                            The url parameter can also identify a document with the following format: http://host/site?listId=<listGuid>&itemId=<itemId> 
                @param data Application-defined data stored with the followed item. */
            updateData(url: string, data: FollowedItemData): void;
            /** Returns the refreshed item that is being pointed to in the Social list.
                @param item The original item as stored in the Followed Content list. */
            refreshFollowedItem(item: FollowedItem): FollowedItem;
            /** Finds the original item that is being pointed to in the Followed Content list and updates the Title, Url, and IconUrl fields if they have been changed.
                @param url The URL of the original item as stored in the Followed Content list. */
            findAndUpdateFollowedItem(url: string): FollowedItem;
        }

        /** Represents a followed content resource. */
        export class FollowedItem extends SP.ClientValueObject {
            /** Additional metadata associated with this item */
            get_data(): { [name: string]: any; };
            /** Additional metadata associated with this item */
            set_data(value: { [name: string]: any; }): { [name: string]: any; };
            /** Specifies the type of the file if this item is a file. Otherwise, this property is the empty string. */
            get_fileType(): string;
            /** Specifies the type of the file if this item is a file. Otherwise, this property is the empty string. */
            set_fileType(value: string): string;
            /** Provides information about the application that opens a followed document. */
            get_fileTypeProgid(): string;
            /** Provides information about the application that opens a followed document. */
            set_fileTypeProgid(value: string): string;
            /** Specifies additional information about the followed item.
                The server stores the data so that it can return it to the client. */
            get_flags(): string;
            /** Specifies additional information about the followed item.
                The server stores the data so that it can return it to the client. */
            set_flags(value: string): string;
            /** Indicates whether the followed site has a feed. */
            get_hasFeed(): boolean;
            /** Indicates whether the followed site has a feed. */
            set_hasFeed(value: boolean): boolean;
            /** Specifies if the item is hidden from the user. If true this item will not generate activity in the user's feed. */
            get_hidden(): boolean;
            /** Specifies if the item is hidden from the user. If true this item will not generate activity in the user's feed. */
            set_hidden(value: boolean): boolean;
            /** Specifies the URL of an icon to represent this item. */
            get_iconUrl(): string;
            /** Specifies the URL of an icon to represent this item. */
            set_iconUrl(value: string): string;
            /** Specifies the identification for this item in the Content database. */
            get_itemId(): number;
            /** Specifies the identification for this item in the Content database. */
            set_itemId(value: number): number;
            /** Specifies the type of this item. */
            get_itemType(): FollowedItemType;
            /** Specifies the type of this item. */
            set_itemType(value: FollowedItemType): FollowedItemType;
            /** The ListId property specifies the list identification (GUID) for this item in the Content database if this item is a list or the list identification for its parent list.
                If the ItemType is Document, this property is specified, but if the ItemType is Site, then this property is not specified. */
            get_listId(): string;
            /** The ListId property specifies the list identification (GUID) for this item in the Content database if this item is a list or the list identification for its parent list.
                If the ItemType is Document, this property is specified, but if the ItemType is Site, then this property is not specified. */
            set_listId(value: string): string;
            /** Specifies the URL of this item's parent list or web. */
            get_parentUrl(): string;
            /** Specifies the URL of this item's parent list or web. */
            set_parentUrl(value: string): string;
            /** Provides information about the followed document to the application that opens it. */
            get_serverUrlProgid(): string;
            /** Provides information about the followed document to the application that opens it. */
            set_serverUrlProgid(value: string): string;
            /** Specifies the site identification (GUID) in the Content database for this item if this item is a site, or for its parent site if this item is not a site. */
            get_siteId(): string;
            /** Specifies the site identification (GUID) in the Content database for this item if this item is a site, or for its parent site if this item is not a site. */
            set_siteId(value: string): string;
            /** Specifies the subtype of this item.
                If the ItemType is Site, the Subtype specifies the web template identification. 
                If the ItemType is Document, the Subtype has a value of 1. */
            get_subtype(): number;
            /** Specifies the subtype of this item.
                If the ItemType is Site, the Subtype specifies the web template identification. 
                If the ItemType is Document, the Subtype has a value of 1. */
            set_subtype(value: number): number;
            /** Specifies the item of this item */
            get_title(): string;
            /** Specifies the item of this item */
            set_title(value: string): string;
            /** Specifies the GUID for this item in the Content database. */
            get_uniqueId(): SP.Guid;
            /** Specifies the GUID for this item in the Content database. */
            set_uniqueId(value: SP.Guid): SP.Guid;
            /** Specifies the URL of this item. */
            get_url(): string;
            /** Specifies the URL of this item. */
            set_url(value: string): string;
            /** Specifies the site identification (GUID) in the Content database for this item if it is a site, or the identification of its parent site if this item is a document. */
            get_webId(): SP.Guid;
            /** Specifies the site identification (GUID) in the Content database for this item if it is a site, or the identification of its parent site if this item is a document. */
            set_webId(value: SP.Guid): any;
        }

        export enum FollowedItemType {
            unknown,
            document,
            site,
            all
        }

        export enum FollowedContentExceptionType {
            itemAlreadyExists,
            itemDoesNotExist,
            invalidQueryString,
            invalidSubtypeValue,
            unsupportedItemType,
            followLimitReached,
            untrustedSource,
            unsupportedSite,
            internalError
        }

        export enum FollowedContentQueryOptions {
            unset,
            sites,
            documents,
            hidden,
            nonFeed,
            defaultOptions,
            all
        }

        export enum FollowedStatus {
            followed,
            notFollowed,
            notFollowable
        }


        /** Contains additional data that can be attached to a FollowedItem object */
        export class FollowedItemData extends SP.ClientObject {
            /** An unordered collection of key/value pairs for custom properties to be set on the item. */
            get_properties(): { [name: string]: any; };
        }

        /** Returns information about a request to follow an item. */
        export class FollowResult extends SP.ClientValueObject {
            /** Contains the item being followed. */
            get_item(): FollowedItem;
            /** Provides information about the attempt to follow an item. */
            get_resultType(): FollowResultType;
        }

        export enum FollowResultType {
            /** Result is unknown */
            unknown,
            /** The request succeeded and the item is being followed. */
            followed,
            /** The item was already being followed by the current user so there is no change in status. */
            refollowed,
            /** The request encountered the maximum follow limit. */
            hitFollowLimit,
            /** The request failed. */
            failed
        }

        /** Represents a set of user profile properties for a specified user. */
        export class UserProfilePropertiesForUser extends SP.ClientObject {
            /** Creates new UserProfilePropertiesForUser object
                @param context Specifies the client context to use.
                @param accountName Specifies the user by account name.
                @param propertyNames Specifies an array of strings that specify the properties to retrieve. */
            constructor(context: SP.ClientContext, accountName: string, propertyNames: string[]);

            /** Specifies the user account name */
            get_accountName(): string;
            /** Specifies the user account name */
            set_accountName(value: string): string;
            /** Gets an array of strings that specify the user profile property names. */
            getPropertyNames(): string[];
        }
    }

}