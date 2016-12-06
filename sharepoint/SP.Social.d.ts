// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="SP.d.ts"/>

declare namespace SP {

    export namespace Social {
        /** Identifies an actor as a user, document, site, or tag. */
        export enum SocialActorType {
            user,
            document,
            site,
            tag
        }
        /** Specifies one or more actor types in a query to the server. */
        export enum SocialActorTypes {
            none,
            users,
            documents,
            sites,
            tags,
            /** The set excludes documents and sites that do not have feeds. */
            excludeContentWithoutFeeds,
            all
        }
        /** Specifies whether the action is to navigate to the attachment or to perform some action dependent on the context in which the attachment is presented to the user. */
        export enum SocialAttachmentActionKind {
            /** This value specifies that the action is to navigate to the attachment. */
            navigate,
            /** This value specifies that the action is dependent on the context that the attachment is displayed to the user. */
            adHocAction
        }

        export enum SocialAttachmentKind {
            image,
            video,
            document
        }

        /** Specifies whether the item being inserted is a user, document, site, tag, or link. */
        export enum SocialDataItemType {
            user,
            document,
            site,
            tag,
            link
        }

        /** Specifies whether the overlay is a link or one or more actors. */
        export enum SocialDataOverlayType {
            link,
            actors
        }

        /** Specifies whether the sort order is by creation time or modification time. */
        export enum SocialFeedSortOrder {
            byModifiedTime,
            byCreatedTime
        }

        /** Identifies the kind of post to be retrieved.  */
        export enum SocialFeedType {
            personal,
            news,
            timeline,
            likes,
            everyone
        }

        // For some reasons this enum doesn't exist
        //export enum SocialFollowResult {
        //    ok = 0,
        //    alreadyFollowing = 1,
        //    limitReached = 2,
        //    internalError = 3
        //}

        /** Provides information about the feed.
            This type provides information about whether the feed on the server contains additional threads that were not returned. */
        export enum SocialFeedAttributes {
            none,
            moreThreadsAvailable
        }

        /** Specifies attributes of the post, such as whether the current user can like or delete the post. */
        export enum SocialPostAttributes {
            none,
            canLike,
            canDelete,
            useAuthorImage,
            useSmallImage,
            canFollowUp
        }

        /** Defines the type of item being specified in the SocialPostDefinitionDataItem.
            This type is only available in server-to-server calls. */
        export enum SocialPostDefinitionDataItemType {
            text,
            user,
            document,
            site,
            tag,
            link
        }

        export enum SocialPostType {
            root,
            reply
        }

        /** Specifies a status or error code. */
        export enum SocialStatusCode {
            OK,
            /** This value specifies that an invalid request was encountered. */
            invalidRequest,
            /** This value specifies that access was denied to the current user. */
            accessDenied,
            itemNotFound,
            /** This value specifies that an invalid operation was attempted. */
            invalidOperation,
            /** This value specifies that the item was not changed by the operation. */
            itemNotModified,
            internalError,
            /** This value specifies that there was an error reading the cache. */
            cacheReadError,
            /** This value specifies that there was an error updating the cache. */
            cacheUpdateError,
            personalSiteNotFound,
            failedToCreatePersonalSite,
            notAuthorizedToCreatePersonalSite,
            cannotCreatePersonalSite,
            /** This value specifies that a server limit was reached. */
            limitReached,
            /** This value specifies that the operation failed because there was an error handling an attachment. */
            attachmentError,
            /** This value specifies that the operation completed with recoverable errors and that the returned data is incomplete. */
            partialData,
            /** This value specifies that the operation failed because a required server feature was disabled by administrative action. */
            featureDisabled
        }

        /** Specifies properties of the thread. */
        export enum SocialThreadAttributes {
            none,
            isDigest,
            canReply,
            canLock,
            isLocked,
            replyLimitReached
        }

        export enum SocialThreadType {
            normal,
            likeReference,
            replyReference,
            mentionReference,
            tagReference
        }

        /** Contains information about an actor retrieved from server. An actor is a user, document, site, or tag. */
        export class SocialActor extends SP.ClientValueObject {
            /** The AccountName property returns the user account name. 
                This property is only available for social actors of type "user". */
            get_accountName(): string;
            /** Identifies whether the actor is a user, document, site, or tag. */
            get_actorType(): SocialActorType;
            /** Specifies whether the actor can be followed by the current user. */
            get_canFollow(): boolean;
            /** Returns the URI of the document or site content.
                This property is only available for social actors of type Document or Site. */
            get_contentUri(): string;
            get_emailAddress(): string;
            /** Returns the URI of the user's followed content folder.
                This property is only available for social actors of type "user". */
            get_followedContentUri(): string;
            /** Returns the actor's unique identifier. */
            get_id(): string;
            /** Returns the URI of the image representing the actor.
                This property is only available if actor is User, Document, or Site. */
            get_imageUri(): string;
            /** Returns true if the current user is following the actor; otherwise, it returns false. */
            get_isFollowed(): boolean;
            /** Returns the URI of the library containing the document.
                This property is only available for social actors of type "document". */
            get_libraryUri(): string;
            /** The Name property returns the actor's display name. */
            get_name(): string;
            /** Returns the URI of the user's personal site.
                This property is only available for social actors of type "user". */
            get_personalSiteUri(): string;
            /** Represents the status of retrieving the actor */
            get_status(): SocialStatusCode;
            /** The StatusText property returns the most recent post of the user. 
                This property is only available for social actors of type "user". */
            get_statusText(): string;
            /** Returns the GUID of the tag.
                Only available for social actors of type "tag" */
            get_tagGuid(): string;
            /** Returns the user's title
                This property is only available for social actors of type "user". */
            get_title(): string;
            /** Returns the URI of the actor. */
            get_uri(): string;
        }

        /** Identifies an actor to the server. An actor can be a user, document, site, or tag. */
        export class SocialActorInfo extends SP.ClientValueObject {
            /** User account name. 
                This property is only available for social actors of type "user". */
            get_accountName(): string;
            /** User account name. 
                This property is only available for social actors of type "user". */
            set_accountName(value: string): string;
            /** Identifies whether the actor is a user, document, site, or tag. */
            get_actorType(): SocialActorType;
            /** Identifies whether the actor is a user, document, site, or tag. */
            set_actorType(value: SocialActorType): SocialActorType;
            /** URI of the document or site content.
                This property is only available for social actors of type Document or Site. */
            get_contentUri(): string;
            /** URI of the document or site content.
                This property is only available for social actors of type Document or Site. */
            set_contentUri(value: string): string;
            /** Actor's unique identifier. */
            get_id(): string;
            /** Actor's unique identifier. */
            set_id(value: string): string;
            /** GUID of the tag.
                Only available for social actors of type "tag" */
            get_tagGuid(): string;
            /** GUID of the tag.
                Only available for social actors of type "tag" */
            set_tagGuid(value: string): string;
        }

        /** Represents an image, document preview, or video preview attachment.  */
        export class SocialAttachment extends SP.ClientValueObject {
            /** Specifies the type of object that the attachment contains. */
            get_attachmentKind(): SocialAttachmentKind;
            /** Specifies the type of object that the attachment contains. */
            set_attachmentKind(value: SocialAttachmentKind): SocialAttachmentKind;
            /** Specifies the action to take when the user selects the attachment.
                This property is only present if the AttachmentKind is Video. */
            get_clickAction(): SocialAttachmentAction;
            /** Specifies the action to take when the user selects the attachment.
                This property is only present if the AttachmentKind is Video. */
            set_clickAction(value: SocialAttachmentAction): SocialAttachmentAction;
            /** Specifies the URI of the attachment content. */
            get_contentUri(): string;
            /** Specifies the URI of the attachment content. */
            set_contentUri(value: string): string;
            /** Provides a text description of the attachment. */
            get_description(): string;
            /** Provides a text description of the attachment. */
            set_description(value: string): string;
            /** Specifies the height of the attachment or of the attachment preview. */
            get_height(): number;
            /** Specifies the height of the attachment or of the attachment preview. */
            set_height(value: number): number;
            /** Specifies the duration of the attachment in seconds. This property is only present if the AttachmentKind is Video. */
            get_length(): number;
            /** Specifies the duration of the attachment in seconds. This property is only present if the AttachmentKind is Video. */
            set_length(value: number): number;
            /** Provides the attachment name. */
            get_name(): string;
            /** Provides the attachment name. */
            set_name(value: string): string;
            /** Specifies the URI of the attachment�s preview thumbnail.
                This property is only present if the AttachmentKind is Document or Video. */
            get_previewUri(): string;
            /** Specifies the URI of the attachment�s preview thumbnail.
                This property is only present if the AttachmentKind is Document or Video. */
            set_previewUri(value: string): string;
            /** Provides the attachment URI. */
            get_uri(): string;
            /** Provides the attachment URI. */
            set_uri(value: string): string;
            /** Specifies the width of the attachment or of the attachment preview. */
            get_width(): number;
            /** Specifies the width of the attachment or of the attachment preview. */
            set_width(value: number): number;
        }
        /** Specifies the user actions that are allowed for the attachment object. */
        export class SocialAttachmentAction extends SP.ClientValueObject {
            /** Specifies whether the action is to navigate to a URI or an action that is dependent on the context in which the object is presented to the user. */
            get_actionKind(): SocialAttachmentActionKind;
            /** Specifies whether the action is to navigate to a URI or an action that is dependent on the context in which the object is presented to the user. */
            set_actionKind(value: SocialAttachmentActionKind): SocialAttachmentActionKind;
            /** Specifies the URI associated with the action. */
            get_actionUri(): string;
            /** Specifies the URI associated with the action. */
            set_actionUri(value: string): string;
        }

        /** Defines a user, document, site, tag, or link to be inserted in a new post.
            The SocialPostCreationData class defines the content text that contains substitution strings.
            Each substitution string is replaced by a SocialDataItem value. */
        export class SocialDataItem extends SP.ClientValueObject {
            /** Identifies the user.  */
            get_accountName(): string;
            /** Identifies the user.  */
            set_accountName(value: string): string;
            /** Specifies whether the item being inserted is a user, document, site, tag, or link. */
            get_itemType(): SocialDataItemType;
            /** Specifies whether the item being inserted is a user, document, site, tag, or link. */
            set_itemType(value: SocialDataItemType): SocialDataItemType;
            /** Identifies the tag.  */
            get_tagGuid(): string;
            /** Identifies the tag.  */
            set_tagGuid(value: string): string;
            /** Specifies the plain text to be inserted in the created post. The server can use the specified text or can use text that identifies the item, for example the name specified in a user profile.  */
            get_text(): string;
            /** Specifies the plain text to be inserted in the created post. The server can use the specified text or can use text that identifies the item, for example the name specified in a user profile.  */
            set_text(value: string): string;
            /** Identifies the site, document, or link.  */
            get_uri(): string;
            /** Identifies the site, document, or link.  */
            set_uri(value: string): string;
        }

        /** Provides information about an overlay.
            An overlay is a substring in a post that represents a user, document, site, tag, or link. 
            The SocialPost class contains an array of SocialDataOverlay objects.
            Each of the SocialDataOverlay objects specifies a link or one or more actors. */
        export class SocialDataOverlay extends SP.ClientValueObject {
            /** Specifies one or more actors as an array of integers where each integer specifies an index into the SocialThreadActors array.
                This property is only available if the get_overlayType() has a value of SocialDataOverlayType.actors. */
            get_actorIndexes(): number[];
            /** The Index property specifies the starting position of the overlay in the SocialPostText string  */
            get_index(): number;
            /** The Length property specifies the number of characters in the overlay.  */
            get_length(): number;
            /** The LinkUri property specifies the URI of the link.
                This property is only available if the get_overlayType() has a value of SocialDataOverlayType.link.  */
            get_linkUri(): string;
            /** Specifies whether the overlay is a link or one or more actors. */
            get_overlayType(): SocialDataOverlayType;
        }

        /** Specifies information about errors that the server has encountered. */
        export class SocialExceptionDetails extends SP.ClientValueObject {
            get_internalErrorCode(): number;
            get_internalMessage(): string;
            get_internalStackTrace(): string;
            /** Specifies a type name associated with the internal error if a type name is available. */
            get_internalTypeName(): string;
            get_status(): SocialStatusCode;
        }

        /** Specifies a feed, which contains an array of SocialThreads, each of which specifies a root SocialPost object and an array of response SocialPost objects. */
        export class SocialFeed extends SP.ClientValueObject {
            /** Specifies attributes of the returned feed.
                The attributes specify if the requested feed has additional threads that were not included in the returned thread. */
            get_attributes(): SocialFeedAttributes;
            /** Returns the date-time of the most recent post that was requested.
                The most recent post that was requested can be removed from the feed if the current user does not have access to it.
                Consequently, the feed does not always contain the post with the date specified in this property. */
            get_newestProcessed(): string;
            /** The OldestProcessed property returns the date-time of the oldest post that was requested. 
                The oldest post that was requested can be removed from the feed if the current user does not have access to it. 
                Consequently, the feed does not always contain the post with the date specified in this property */
            get_oldestProcessed(): string;
            /** Contains the social threads in the feed. */
            get_threads(): SocialThread[];
            /** Returns the number of mentions of the current user that have been added to the feed on the server since the time that the unread mention count was cleared for the current user. */
            get_unreadMentionCount(): number;
        }

        /** Provides access to social feeds.
            It provides methods to create posts, delete posts, read posts, and perform other operations on posts. */
        export class SocialFeedManager extends SP.ClientObject {
            constructor(context: SP.ClientRuntimeContext);
            /** Returns the current user */
            get_owner(): SocialActor;
            /** Specifies the URI of the personal site portal. */
            get_personalSitePortalUri(): string;
            /** Creates a post in the current user's newsfeed, in the specified user's feed, or in the specified thread. 
                This method returns a new or a modified thread.
                @param targetId Optional, specifies the target of the post.
                                If this parameter is null, the post is created as a root post in the current user's feed.
                                If this parameter is set to a site URL or a site actor identification, the post is created as a root post in the specified site feed.
                                If this parameter is set to a thread identification, the post is created as a reply post in the specified thread.
                @param creationData Specifies the format and content of the post. */
            createPost(targetId: string, creationData: SocialPostCreationData): SocialThread;
            /** Deletes the specified post.
                This method returns a digest of the modified thread.
                If the entire thread is deleted, this method returns null.
                If the post being deleted is the root post of a thread, all reply posts are also deleted.
                @param postId   Specifies the post to be deleted.
                                Corresponds the value returned from SocialPost.get_id(). */
            deletePost(postId: string): SocialThread;
            /** Returns the set of users who have liked the specified post.
                @param postId   Specifies the post being queried for information about users that like the post.
                                Corresponds the value returned from SocialPost.get_id().*/
            getAllLikers(postId: string): SocialActor[];
            /** Returns a feed for the current user.
                The feed consists of an array of message threads.
                Each thread consists of a root post and an array of reply posts. */
            getFeed(type: SocialFeedType, options: SocialFeedOptions): SocialFeed;
            /** Returns the public feed for a user or for a site.
                The feed lists activity by the user and posts created by the server for that user.
                For example, the feed can include posts indicating the user's birthday or indicating that the user liked a post.
                @param actorId  Corresponds to the value returned by SocialActor.get_id().
                                If the actorId specifies the current user, this method returns the public feed for the current user. */
            getFeedFor(actorId: string, options: SocialFeedOptions): SocialFeed;
            /** Returns the root post and all reply posts in the thread. */
            getFullThread(threadId: string): SocialThread;
            /** Returns a feed containing mention reference threads from the current user's personal feed. */
            getMentions(clearUnreadMentions: boolean, options: SocialFeedOptions): SocialFeed;
            /** Returns the server's count of unread mentions of the current user. 
                The server maintains a count of unread mentions in posts, but does not track which mentions have been read. 
                When a new mention is stored on the server, it increments the unread mention for the user specified by the mention. 
                The unread mention count is cleared by the GetMentions method. */
            getUnreadMentionCount(): SP.IntResult;
            /** Specifies that the current user likes the specified post. 
                Returns a digest thread containing the specified post. 
                A digest thread contains the root post and a selection of reply posts */
            likePost(postId: string): SocialThread;
            /** Specifies that the current user does not like the specified post. 
                Returns a digest thread containing the specified post.  */
            unlikePost(postId: string): SocialThread;
            /** Prevents any user from adding a new reply post to the specified thread. 
                Once a thread is locked, no new reply posts can be added until after the thread has been unlocked with the unlockThread method.
                This method returns a digest of the locked thread */
            lockThread(threadId: string): SocialThread;
            /** Allows users to add new reply posts to the specified thread. */
            unlockThread(threadId: string): SocialThread;
            /** Suppresses activity notifications for the current user of updates to the specified thread. */
            suppressThreadNotifications(threadId: string): void;
            /** Creates an image attachment for a future post. */
            createImageAttachment(name: string, description: string, imageData: any): SocialAttachment;
            /** Generates a preview for the content specified by the URL. */
            getPreview(itemUrl: string): SocialAttachment;
            /** Returns the preview image data for an image attachment.
                @param url Specifies the URL of the preview image relative to the personal site portal.
                @param key Specifies the URL-encoded key to decrypt the image.
                @param iv Specifies the URL-encoded initialization vector for decrypting the image. */
            getPreviewImage(url: string, key: string, iv: string): any;
        }

        export class SocialFeedOptions extends SP.ClientObject {
            get_maxThreadCount(): number;
            set_maxThreadCount(value: number): number;
            get_newerThan(): string;
            set_newerThan(value: string): string;
            get_olderThan(): string;
            set_olderThan(value: string): string;
            get_sortOrder(): SocialFeedSortOrder;
            set_sortOrder(value: SocialFeedSortOrder): SocialFeedSortOrder;
        }

        /** Provides properties and methods for managing a user's list of followed actors.
            Actors can be users, documents, sites, and tags. */
        export class SocialFollowingManager extends SP.ClientObject {
            constructor(context: SP.ClientRuntimeContext);
            /** URI to a site  that lists the current user's followed documents. */
            get_followedDocumentsUri(): string;
            /** URI to a site  that lists the current user's followed sites. */
            get_followedSitesUri(): string;
            /** Adds the specified actor to the current user's list of followed items.
                Returns one of the following values, wrapped into the SP.IntResult object:
                0 = ok, 
                1 = alreadyFollowing, 
                2 = limitReached, 
                3 = internalError */
            follow(actor: SocialActorInfo): SP.IntResult;
            stopFollowing(actor: SocialActorInfo): SP.BooleanResult;
            isFollowed(actor: SocialActorInfo): SP.BooleanResult;
            getFollowed(types: SocialActorTypes): SocialActor[];
            getFollowedCount(types: SocialActorTypes): SP.IntResult;
            /** Returns the users who are followers of the current user. */
            getFollowers(): SocialActor[];
            getSuggestions(): SocialActor[];
        }

        /** Defines a link that includes a URI and text representation.
            This class is used to represent the location of a web site.  */
        export class SocialLink extends SP.ClientValueObject {
            get_text(): string;
            set_text(value: string): string;
            get_uri(): string;
            set_uri(value: string): string;
        }

        /** Specifies a post read from the server. */
        export class SocialPost extends SP.ClientValueObject {
            /** Specifies an image, document preview, or video preview attachment */
            get_attachment(): SocialAttachment;
            /** Describes attributes about the post, such as whether the current user can delete or like the post.  */
            get_attributes(): SocialPostAttributes;
            /** Specifies the author of the post as an index to the social thread's Actors array. */
            get_authorIndex(): number;
            /** Specifies the date and time that the post was created on the server. */
            get_createdTime(): string;
            /** Specifies the unique identifier of the post. */
            get_id(): string;
            /** Specifies information about users who like the post. */
            get_likerInfo(): SocialPostActorInfo;
            /** Specifies the date and time that the post was last modified on the server. */
            get_modifiedTime(): string;
            /** An array of objects in a post, where each object represents a user, document, site, tag, or link. */
            get_overlays(): SocialDataOverlay[];
            /** Specifies whether a post is the root post or a reply post in a thread */
            get_postType(): SocialPostType;
            /** Specifies the URI of the image to be displayed with the post.  */
            get_preferredImageUri(): string;
            /** Specifies the link to a web site associated with the application that created the post. */
            get_source(): SocialLink;
            /** Specifies the text of the post. */
            get_text(): string;
        }

        /** Specifies a set of users, documents, sites, and tags by an index into the SocialThreadActors array  */
        export class SocialPostActorInfo extends SP.ClientValueObject {
            get_includesCurrentUser(): boolean;
            /** Specifies an array of indexes into the SocialThreadActors array.
                The server can choose to return a limited set of actors. For example, the server can choose to return a subset of the users that like a post. */
            get_indexes(): number[];
            get_totalCount(): number;
        }

        /** Specifies the content of a post in the SocialFeedManager.createPost method.
            The post consists of a text message, which can optionally include social tags, mentions of users, and links. */
        export class SocialPostCreationData extends SP.ClientValueObject {
            /** Specifies an image, document preview, or video preview to be used in the post. */
            get_attachment(): SocialAttachment;
            /** Specifies an image, document preview, or video preview to be used in the post. */
            set_attachment(value: SocialAttachment): SocialAttachment;
            /** Specifies an array consisting of social tags, user mentions, links to documents, links to sites, and generic links.
                Each element in the array is inserted into the ContentText string if there is a substitution reference to the array element in the string. */
            get_contentItems(): SocialDataItem;
            /** Specifies an array consisting of social tags, user mentions, links to documents, links to sites, and generic links.
                Each element in the array is inserted into the ContentText string if there is a substitution reference to the array element in the string. */
            set_contentItems(value: SocialDataItem): SocialDataItem;
            /** Contains the text body of the post. */
            get_contentText(): string;
            /** Contains the text body of the post.
                It can optionally contain one or more substitution references to elements in the zero-based ContentItems array.
                A substitution reference consists of a series of characters that consist of an open-brace character ({) followed by one of more digits in the range 0 to 9 and terminated by a close-brace character (}).
                The substitution reference is replaced by the text value of the element in the in the array at the offset specified by the value of the digits.
                For example, the text string "{0}" is replaced by the first element in the ContentItems array. */
            set_contentText(value: string): string;
            /** Specifies additional information when creating server-generated posts */
            get_definitionData(): SocialPostDefinitionData;
            /** Specifies additional information when creating server-generated posts */
            set_definitionData(value: SocialPostDefinitionData): SocialPostDefinitionData;
            /** Specifies the link to a web site associated with the application that created the post */
            get_source(): SocialLink;
            /** Specifies the link to a web site associated with the application that created the post */
            set_source(value: SocialLink): SocialLink;
            /** Specifies that access to the post SHOULD be restricted to users that have access to the objects identified by the array of URIs */
            get_securityUris(): string[];
            /** Specifies that access to the post SHOULD be restricted to users that have access to the objects identified by the array of URIs */
            set_securityUris(value: string[]): string[];
            /** Indicates whether the post is to be used as the current user's new status message. */
            get_updateStatusText(): boolean;
            /** Indicates whether the post is to be used as the current user's new status message. */
            set_updateStatusText(value: boolean): boolean;
        }

        /** Provides additional information about server-generated posts.
            This type can only be specified in a server-to-server call. */
        export class SocialPostDefinitionData extends SP.ClientValueObject {
            get_items(): SocialPostDefinitionDataItem[];
            set_items(value: SocialPostDefinitionDataItem[]): SocialPostDefinitionDataItem[];
            get_name(): string;
            set_name(value: string): string;
        }

        /** Specifies an item to be inserted in a post by replacing a token in the post definition.
            This type can only be specified in a server-to-server call. */
        export class SocialPostDefinitionDataItem extends SP.ClientValueObject {
            /** Specifies the name of the user.
                This property is only used if the ItemType property specifies that the item is a User. */
            get_accountName(): string;
            /** Specifies the name of the user.
                This property is only used if the ItemType property specifies that the item is a User. */
            set_accountName(value: string): string;
            /** Specifies whether the item being formatted is a text element, a user, a document, a site, a tag, or a link. */
            get_itemType(): SocialPostDefinitionDataItemType;
            /** Specifies whether the item being formatted is a text element, a user, a document, a site, a tag, or a link. */
            set_itemType(value: SocialPostDefinitionDataItemType): SocialPostDefinitionDataItemType;
            /** Specifies the post definition token to be replaced by the item */
            get_placeholderName(): string;
            /** Specifies the post definition token to be replaced by the item */
            set_placeholderName(value: string): string;
            /** Specifies the GUID that identifies the tag.
                This property is only used if the ItemType property specifies that the item is a Tag. */
            get_tagGuid(): string;
            /** Specifies the GUID that identifies the tag.
                This property is only used if the ItemType property specifies that the item is a Tag. */
            set_tagGuid(value: string): string;
            /** Specifies the text that is substituted for the placeholder */
            get_text(): string;
            /** Specifies the text that is substituted for the placeholder */
            set_text(value: string): string;
            /** Specifies the URI of the document, site, or link. 
                This property is only available if the ItemType property specifies that the item is a Document, Link, or Site. */
            get_uri(): string;
            /** Specifies the URI of the document, site, or link. 
                This property is only available if the ItemType property specifies that the item is a Document, Link, or Site. */
            set_uri(value: string): string;
        }

        /** Specifies a reference to a post in another thread.
            The referenced post can be a post with a tag, a post that is liked, a post that mentions a user, or a post that is a reply. */
        export class SocialPostReference extends SP.ClientValueObject {
            /** Provides a digest of the thread containing the referenced post */
            get_digest(): SocialThread;
            get_post(): SocialPost;
            /** Specifies the unique identifier of the thread containing the referenced post. */
            get_threadId(): string;
            /** Specifies the current owner of the thread as an index into the SocialThreadActors array. */
            get_threadOwnerIndex(): number;
        }

        /** Specifies a thread that is stored on the server.
            The thread contains a root post and zero or more reply posts. */
        export class SocialThread extends SP.ClientValueObject {
            /** Specifies the users who have created a post in the returned thread and also contains any users, documents, sites, and tags that are referenced in any of the posts in the returned thread. */
            get_actors(): SocialActor[];
            /** Specifies attributes of the thread, such as whether the current user can reply or lock the thread and whether the thread is a digest of a thread on the server, whether the number of replies has reached the maximum, and whether the thread is locked. */
            get_attributes(): SocialThreadAttributes;
            /** Specifies the unique identification of the thread. */
            get_id(): string;
            /** Specifies the thread owner as an index into the Actors array.
                Typically, the thread owner is the user who created the root post, but the thread owner can be any user included in the Actors array. */
            get_ownerIndex(): number;
            /** Specifies a URI that is a permanent reference to the thread, if such a permanent reference is available.  */
            get_permalink(): string;
            /** Specifies a reference to a post in another thread.
                The PostReference property is available only if the ThreadType has a value of ReplyReference, LikeReference, MentionReference, or TagReference.  */
            get_postReference(): SocialPostReference;
            /** Returns an array of zero or more reply posts.
                The server can return a subset of the reply posts that are stored on the server. */
            get_replies(): SocialPost[];
            get_rootPost(): SocialPost;
            /** Provides information about conditions that were encountered retrieving the thread that did not prevent the operation from completing. */
            get_status(): SocialStatusCode;
            /** Specifies if the thread is a normal thread created by one or more CreatePost calls or a reference post generated by the server when a user replies to a post, likes a post, or creates a post with a tag or mention */
            get_threadType(): SocialThreadType;
            get_totalReplyCount(): number;
        }

    }

}