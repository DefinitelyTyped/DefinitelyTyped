// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Youtube_v3 {
    namespace Collection {
      export interface ActivitiesCollection {
        // Posts a bulletin for a specific channel. (The user submitting the request must be authorized to act on the channel's behalf.)
        // Note: Even though an activity resource can contain information about actions like a user rating a video or marking a video as a favorite, you need to use other API methods to generate those activity resources. For example, you would use the API's videos.rate() method to rate a video and the playlistItems.insert() method to mark a video as a favorite.
        insert(resource: Schema.Activity, part: string): Youtube_v3.Schema.Activity;
        // Returns a list of channel activity events that match the request criteria. For example, you can retrieve events associated with a particular channel, events associated with the user's subscriptions and Google+ friends, or the YouTube home page feed, which is customized for each user.
        list(part: string): Youtube_v3.Schema.ActivityListResponse;
        // Returns a list of channel activity events that match the request criteria. For example, you can retrieve events associated with a particular channel, events associated with the user's subscriptions and Google+ friends, or the YouTube home page feed, which is customized for each user.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.ActivityListResponse;
      }
      export interface CaptionsCollection {
        // Downloads a caption track. The caption track is returned in its original format unless the request specifies a value for the tfmt parameter and in its original language unless the request specifies a value for the tlang parameter.
        download(id: string): void;
        // Downloads a caption track. The caption track is returned in its original format unless the request specifies a value for the tfmt parameter and in its original language unless the request specifies a value for the tlang parameter.
        download(id: string, optionalArgs: object): void;
        // Uploads a caption track.
        insert(resource: Schema.Caption, part: string): Youtube_v3.Schema.Caption;
        // Uploads a caption track.
        insert(resource: Schema.Caption, part: string, mediaData: any): Youtube_v3.Schema.Caption;
        // Uploads a caption track.
        insert(resource: Schema.Caption, part: string, mediaData: any, optionalArgs: object): Youtube_v3.Schema.Caption;
        // Returns a list of caption tracks that are associated with a specified video. Note that the API response does not contain the actual captions and that the captions.download method provides the ability to retrieve a caption track.
        list(part: string, videoId: string): Youtube_v3.Schema.CaptionListResponse;
        // Returns a list of caption tracks that are associated with a specified video. Note that the API response does not contain the actual captions and that the captions.download method provides the ability to retrieve a caption track.
        list(part: string, videoId: string, optionalArgs: object): Youtube_v3.Schema.CaptionListResponse;
        // Deletes a specified caption track.
        remove(id: string): void;
        // Deletes a specified caption track.
        remove(id: string, optionalArgs: object): void;
        // Updates a caption track. When updating a caption track, you can change the track's draft status, upload a new caption file for the track, or both.
        update(resource: Schema.Caption, part: string): Youtube_v3.Schema.Caption;
        // Updates a caption track. When updating a caption track, you can change the track's draft status, upload a new caption file for the track, or both.
        update(resource: Schema.Caption, part: string, mediaData: any): Youtube_v3.Schema.Caption;
        // Updates a caption track. When updating a caption track, you can change the track's draft status, upload a new caption file for the track, or both.
        update(resource: Schema.Caption, part: string, mediaData: any, optionalArgs: object): Youtube_v3.Schema.Caption;
      }
      export interface ChannelBannersCollection {
        // Uploads a channel banner image to YouTube. This method represents the first two steps in a three-step process to update the banner image for a channel:
        // - Call the channelBanners.insert method to upload the binary image data to YouTube. The image must have a 16:9 aspect ratio and be at least 2120x1192 pixels.
        // - Extract the url property's value from the response that the API returns for step 1.
        // - Call the channels.update method to update the channel's branding settings. Set the brandingSettings.image.bannerExternalUrl property's value to the URL obtained in step 2.
        insert(resource: Schema.ChannelBannerResource): Youtube_v3.Schema.ChannelBannerResource;
        // Uploads a channel banner image to YouTube. This method represents the first two steps in a three-step process to update the banner image for a channel:
        // - Call the channelBanners.insert method to upload the binary image data to YouTube. The image must have a 16:9 aspect ratio and be at least 2120x1192 pixels.
        // - Extract the url property's value from the response that the API returns for step 1.
        // - Call the channels.update method to update the channel's branding settings. Set the brandingSettings.image.bannerExternalUrl property's value to the URL obtained in step 2.
        insert(resource: Schema.ChannelBannerResource, mediaData: any): Youtube_v3.Schema.ChannelBannerResource;
        // Uploads a channel banner image to YouTube. This method represents the first two steps in a three-step process to update the banner image for a channel:
        // - Call the channelBanners.insert method to upload the binary image data to YouTube. The image must have a 16:9 aspect ratio and be at least 2120x1192 pixels.
        // - Extract the url property's value from the response that the API returns for step 1.
        // - Call the channels.update method to update the channel's branding settings. Set the brandingSettings.image.bannerExternalUrl property's value to the URL obtained in step 2.
        insert(resource: Schema.ChannelBannerResource, mediaData: any, optionalArgs: object): Youtube_v3.Schema.ChannelBannerResource;
      }
      export interface ChannelSectionsCollection {
        // Adds a channelSection for the authenticated user's channel.
        insert(resource: Schema.ChannelSection, part: string): Youtube_v3.Schema.ChannelSection;
        // Adds a channelSection for the authenticated user's channel.
        insert(resource: Schema.ChannelSection, part: string, optionalArgs: object): Youtube_v3.Schema.ChannelSection;
        // Returns channelSection resources that match the API request criteria.
        list(part: string): Youtube_v3.Schema.ChannelSectionListResponse;
        // Returns channelSection resources that match the API request criteria.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.ChannelSectionListResponse;
        // Deletes a channelSection.
        remove(id: string): void;
        // Deletes a channelSection.
        remove(id: string, optionalArgs: object): void;
        // Update a channelSection.
        update(resource: Schema.ChannelSection, part: string): Youtube_v3.Schema.ChannelSection;
        // Update a channelSection.
        update(resource: Schema.ChannelSection, part: string, optionalArgs: object): Youtube_v3.Schema.ChannelSection;
      }
      export interface ChannelsCollection {
        // Returns a collection of zero or more channel resources that match the request criteria.
        list(part: string): Youtube_v3.Schema.ChannelListResponse;
        // Returns a collection of zero or more channel resources that match the request criteria.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.ChannelListResponse;
        // Updates a channel's metadata. Note that this method currently only supports updates to the channel resource's brandingSettings and invideoPromotion objects and their child properties.
        update(resource: Schema.Channel, part: string): Youtube_v3.Schema.Channel;
        // Updates a channel's metadata. Note that this method currently only supports updates to the channel resource's brandingSettings and invideoPromotion objects and their child properties.
        update(resource: Schema.Channel, part: string, optionalArgs: object): Youtube_v3.Schema.Channel;
      }
      export interface CommentThreadsCollection {
        // Creates a new top-level comment. To add a reply to an existing comment, use the comments.insert method instead.
        insert(resource: Schema.CommentThread, part: string): Youtube_v3.Schema.CommentThread;
        // Returns a list of comment threads that match the API request parameters.
        list(part: string): Youtube_v3.Schema.CommentThreadListResponse;
        // Returns a list of comment threads that match the API request parameters.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.CommentThreadListResponse;
        // Modifies the top-level comment in a comment thread.
        update(resource: Schema.CommentThread, part: string): Youtube_v3.Schema.CommentThread;
      }
      export interface CommentsCollection {
        // Creates a reply to an existing comment. Note: To create a top-level comment, use the commentThreads.insert method.
        insert(resource: Schema.Comment, part: string): Youtube_v3.Schema.Comment;
        // Returns a list of comments that match the API request parameters.
        list(part: string): Youtube_v3.Schema.CommentListResponse;
        // Returns a list of comments that match the API request parameters.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.CommentListResponse;
        // Expresses the caller's opinion that one or more comments should be flagged as spam.
        markAsSpam(id: string): void;
        // Deletes a comment.
        remove(id: string): void;
        // Sets the moderation status of one or more comments. The API request must be authorized by the owner of the channel or video associated with the comments.
        setModerationStatus(id: string, moderationStatus: string): void;
        // Sets the moderation status of one or more comments. The API request must be authorized by the owner of the channel or video associated with the comments.
        setModerationStatus(id: string, moderationStatus: string, optionalArgs: object): void;
        // Modifies a comment.
        update(resource: Schema.Comment, part: string): Youtube_v3.Schema.Comment;
      }
      export interface GuideCategoriesCollection {
        // Returns a list of categories that can be associated with YouTube channels.
        list(part: string): Youtube_v3.Schema.GuideCategoryListResponse;
        // Returns a list of categories that can be associated with YouTube channels.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.GuideCategoryListResponse;
      }
      export interface I18nLanguagesCollection {
        // Returns a list of application languages that the YouTube website supports.
        list(part: string): Youtube_v3.Schema.I18nLanguageListResponse;
        // Returns a list of application languages that the YouTube website supports.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.I18nLanguageListResponse;
      }
      export interface I18nRegionsCollection {
        // Returns a list of content regions that the YouTube website supports.
        list(part: string): Youtube_v3.Schema.I18nRegionListResponse;
        // Returns a list of content regions that the YouTube website supports.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.I18nRegionListResponse;
      }
      export interface LiveBroadcastsCollection {
        // Binds a YouTube broadcast to a stream or removes an existing binding between a broadcast and a stream. A broadcast can only be bound to one video stream, though a video stream may be bound to more than one broadcast.
        bind(id: string, part: string): Youtube_v3.Schema.LiveBroadcast;
        // Binds a YouTube broadcast to a stream or removes an existing binding between a broadcast and a stream. A broadcast can only be bound to one video stream, though a video stream may be bound to more than one broadcast.
        bind(id: string, part: string, optionalArgs: object): Youtube_v3.Schema.LiveBroadcast;
        // Controls the settings for a slate that can be displayed in the broadcast stream.
        control(id: string, part: string): Youtube_v3.Schema.LiveBroadcast;
        // Controls the settings for a slate that can be displayed in the broadcast stream.
        control(id: string, part: string, optionalArgs: object): Youtube_v3.Schema.LiveBroadcast;
        // Creates a broadcast.
        insert(resource: Schema.LiveBroadcast, part: string): Youtube_v3.Schema.LiveBroadcast;
        // Creates a broadcast.
        insert(resource: Schema.LiveBroadcast, part: string, optionalArgs: object): Youtube_v3.Schema.LiveBroadcast;
        // Returns a list of YouTube broadcasts that match the API request parameters.
        list(part: string): Youtube_v3.Schema.LiveBroadcastListResponse;
        // Returns a list of YouTube broadcasts that match the API request parameters.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.LiveBroadcastListResponse;
        // Deletes a broadcast.
        remove(id: string): void;
        // Deletes a broadcast.
        remove(id: string, optionalArgs: object): void;
        // Changes the status of a YouTube live broadcast and initiates any processes associated with the new status. For example, when you transition a broadcast's status to testing, YouTube starts to transmit video to that broadcast's monitor stream. Before calling this method, you should confirm that the value of the status.streamStatus property for the stream bound to your broadcast is active.
        transition(broadcastStatus: string, id: string, part: string): Youtube_v3.Schema.LiveBroadcast;
        // Changes the status of a YouTube live broadcast and initiates any processes associated with the new status. For example, when you transition a broadcast's status to testing, YouTube starts to transmit video to that broadcast's monitor stream. Before calling this method, you should confirm that the value of the status.streamStatus property for the stream bound to your broadcast is active.
        transition(broadcastStatus: string, id: string, part: string, optionalArgs: object): Youtube_v3.Schema.LiveBroadcast;
        // Updates a broadcast. For example, you could modify the broadcast settings defined in the liveBroadcast resource's contentDetails object.
        update(resource: Schema.LiveBroadcast, part: string): Youtube_v3.Schema.LiveBroadcast;
        // Updates a broadcast. For example, you could modify the broadcast settings defined in the liveBroadcast resource's contentDetails object.
        update(resource: Schema.LiveBroadcast, part: string, optionalArgs: object): Youtube_v3.Schema.LiveBroadcast;
      }
      export interface LiveChatBansCollection {
        // Adds a new ban to the chat.
        insert(resource: Schema.LiveChatBan, part: string): Youtube_v3.Schema.LiveChatBan;
        // Removes a chat ban.
        remove(id: string): void;
      }
      export interface LiveChatMessagesCollection {
        // Adds a message to a live chat.
        insert(resource: Schema.LiveChatMessage, part: string): Youtube_v3.Schema.LiveChatMessage;
        // Lists live chat messages for a specific chat.
        list(liveChatId: string, part: string): Youtube_v3.Schema.LiveChatMessageListResponse;
        // Lists live chat messages for a specific chat.
        list(liveChatId: string, part: string, optionalArgs: object): Youtube_v3.Schema.LiveChatMessageListResponse;
        // Deletes a chat message.
        remove(id: string): void;
      }
      export interface LiveChatModeratorsCollection {
        // Adds a new moderator for the chat.
        insert(resource: Schema.LiveChatModerator, part: string): Youtube_v3.Schema.LiveChatModerator;
        // Lists moderators for a live chat.
        list(liveChatId: string, part: string): Youtube_v3.Schema.LiveChatModeratorListResponse;
        // Lists moderators for a live chat.
        list(liveChatId: string, part: string, optionalArgs: object): Youtube_v3.Schema.LiveChatModeratorListResponse;
        // Removes a chat moderator.
        remove(id: string): void;
      }
      export interface LiveStreamsCollection {
        // Creates a video stream. The stream enables you to send your video to YouTube, which can then broadcast the video to your audience.
        insert(resource: Schema.LiveStream, part: string): Youtube_v3.Schema.LiveStream;
        // Creates a video stream. The stream enables you to send your video to YouTube, which can then broadcast the video to your audience.
        insert(resource: Schema.LiveStream, part: string, optionalArgs: object): Youtube_v3.Schema.LiveStream;
        // Returns a list of video streams that match the API request parameters.
        list(part: string): Youtube_v3.Schema.LiveStreamListResponse;
        // Returns a list of video streams that match the API request parameters.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.LiveStreamListResponse;
        // Deletes a video stream.
        remove(id: string): void;
        // Deletes a video stream.
        remove(id: string, optionalArgs: object): void;
        // Updates a video stream. If the properties that you want to change cannot be updated, then you need to create a new stream with the proper settings.
        update(resource: Schema.LiveStream, part: string): Youtube_v3.Schema.LiveStream;
        // Updates a video stream. If the properties that you want to change cannot be updated, then you need to create a new stream with the proper settings.
        update(resource: Schema.LiveStream, part: string, optionalArgs: object): Youtube_v3.Schema.LiveStream;
      }
      export interface PlaylistItemsCollection {
        // Adds a resource to a playlist.
        insert(resource: Schema.PlaylistItem, part: string): Youtube_v3.Schema.PlaylistItem;
        // Adds a resource to a playlist.
        insert(resource: Schema.PlaylistItem, part: string, optionalArgs: object): Youtube_v3.Schema.PlaylistItem;
        // Returns a collection of playlist items that match the API request parameters. You can retrieve all of the playlist items in a specified playlist or retrieve one or more playlist items by their unique IDs.
        list(part: string): Youtube_v3.Schema.PlaylistItemListResponse;
        // Returns a collection of playlist items that match the API request parameters. You can retrieve all of the playlist items in a specified playlist or retrieve one or more playlist items by their unique IDs.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.PlaylistItemListResponse;
        // Deletes a playlist item.
        remove(id: string): void;
        // Deletes a playlist item.
        remove(id: string, optionalArgs: object): void;
        // Modifies a playlist item. For example, you could update the item's position in the playlist.
        update(resource: Schema.PlaylistItem, part: string): Youtube_v3.Schema.PlaylistItem;
        // Modifies a playlist item. For example, you could update the item's position in the playlist.
        update(resource: Schema.PlaylistItem, part: string, optionalArgs: object): Youtube_v3.Schema.PlaylistItem;
      }
      export interface PlaylistsCollection {
        // Creates a playlist.
        insert(resource: Schema.Playlist, part: string): Youtube_v3.Schema.Playlist;
        // Creates a playlist.
        insert(resource: Schema.Playlist, part: string, optionalArgs: object): Youtube_v3.Schema.Playlist;
        // Returns a collection of playlists that match the API request parameters. For example, you can retrieve all playlists that the authenticated user owns, or you can retrieve one or more playlists by their unique IDs.
        list(part: string): Youtube_v3.Schema.PlaylistListResponse;
        // Returns a collection of playlists that match the API request parameters. For example, you can retrieve all playlists that the authenticated user owns, or you can retrieve one or more playlists by their unique IDs.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.PlaylistListResponse;
        // Deletes a playlist.
        remove(id: string): void;
        // Deletes a playlist.
        remove(id: string, optionalArgs: object): void;
        // Modifies a playlist. For example, you could change a playlist's title, description, or privacy status.
        update(resource: Schema.Playlist, part: string): Youtube_v3.Schema.Playlist;
        // Modifies a playlist. For example, you could change a playlist's title, description, or privacy status.
        update(resource: Schema.Playlist, part: string, optionalArgs: object): Youtube_v3.Schema.Playlist;
      }
      export interface SearchCollection {
        // Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource.
        list(part: string): Youtube_v3.Schema.SearchListResponse;
        // Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.SearchListResponse;
      }
      export interface SponsorsCollection {
        // Lists sponsors for a channel.
        list(part: string): Youtube_v3.Schema.SponsorListResponse;
        // Lists sponsors for a channel.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.SponsorListResponse;
      }
      export interface SubscriptionsCollection {
        // Adds a subscription for the authenticated user's channel.
        insert(resource: Schema.Subscription, part: string): Youtube_v3.Schema.Subscription;
        // Returns subscription resources that match the API request criteria.
        list(part: string): Youtube_v3.Schema.SubscriptionListResponse;
        // Returns subscription resources that match the API request criteria.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.SubscriptionListResponse;
        // Deletes a subscription.
        remove(id: string): void;
      }
      export interface SuperChatEventsCollection {
        // Lists Super Chat events for a channel.
        list(part: string): Youtube_v3.Schema.SuperChatEventListResponse;
        // Lists Super Chat events for a channel.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.SuperChatEventListResponse;
      }
      export interface ThumbnailsCollection {
        // Uploads a custom video thumbnail to YouTube and sets it for a video.
        set(videoId: string): Youtube_v3.Schema.ThumbnailSetResponse;
        // Uploads a custom video thumbnail to YouTube and sets it for a video.
        set(videoId: string, mediaData: any): Youtube_v3.Schema.ThumbnailSetResponse;
        // Uploads a custom video thumbnail to YouTube and sets it for a video.
        set(videoId: string, mediaData: any, optionalArgs: object): Youtube_v3.Schema.ThumbnailSetResponse;
      }
      export interface VideoAbuseReportReasonsCollection {
        // Returns a list of abuse reasons that can be used for reporting abusive videos.
        list(part: string): Youtube_v3.Schema.VideoAbuseReportReasonListResponse;
        // Returns a list of abuse reasons that can be used for reporting abusive videos.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.VideoAbuseReportReasonListResponse;
      }
      export interface VideoCategoriesCollection {
        // Returns a list of categories that can be associated with YouTube videos.
        list(part: string): Youtube_v3.Schema.VideoCategoryListResponse;
        // Returns a list of categories that can be associated with YouTube videos.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.VideoCategoryListResponse;
      }
      export interface VideosCollection {
        // Retrieves the ratings that the authorized user gave to a list of specified videos.
        getRating(id: string): Youtube_v3.Schema.VideoGetRatingResponse;
        // Retrieves the ratings that the authorized user gave to a list of specified videos.
        getRating(id: string, optionalArgs: object): Youtube_v3.Schema.VideoGetRatingResponse;
        // Uploads a video to YouTube and optionally sets the video's metadata.
        insert(resource: Schema.Video, part: string): Youtube_v3.Schema.Video;
        // Uploads a video to YouTube and optionally sets the video's metadata.
        insert(resource: Schema.Video, part: string, mediaData: any): Youtube_v3.Schema.Video;
        // Uploads a video to YouTube and optionally sets the video's metadata.
        insert(resource: Schema.Video, part: string, mediaData: any, optionalArgs: object): Youtube_v3.Schema.Video;
        // Returns a list of videos that match the API request parameters.
        list(part: string): Youtube_v3.Schema.VideoListResponse;
        // Returns a list of videos that match the API request parameters.
        list(part: string, optionalArgs: object): Youtube_v3.Schema.VideoListResponse;
        // Add a like or dislike rating to a video or remove a rating from a video.
        rate(id: string, rating: string): void;
        // Deletes a YouTube video.
        remove(id: string): void;
        // Deletes a YouTube video.
        remove(id: string, optionalArgs: object): void;
        // Report abuse for a video.
        reportAbuse(resource: Schema.VideoAbuseReport): void;
        // Report abuse for a video.
        reportAbuse(resource: Schema.VideoAbuseReport, optionalArgs: object): void;
        // Updates a video's metadata.
        update(resource: Schema.Video, part: string): Youtube_v3.Schema.Video;
        // Updates a video's metadata.
        update(resource: Schema.Video, part: string, optionalArgs: object): Youtube_v3.Schema.Video;
      }
      export interface WatermarksCollection {
        // Uploads a watermark image to YouTube and sets it for a channel.
        set(resource: Schema.InvideoBranding, channelId: string): void;
        // Uploads a watermark image to YouTube and sets it for a channel.
        set(resource: Schema.InvideoBranding, channelId: string, mediaData: any): void;
        // Uploads a watermark image to YouTube and sets it for a channel.
        set(resource: Schema.InvideoBranding, channelId: string, mediaData: any, optionalArgs: object): void;
        // Deletes a channel's watermark image.
        unset(channelId: string): void;
        // Deletes a channel's watermark image.
        unset(channelId: string, optionalArgs: object): void;
      }
    }
    namespace Schema {
      export interface AccessPolicy {
        allowed?: boolean;
        exception?: string[];
      }
      export interface Activity {
        contentDetails?: Youtube_v3.Schema.ActivityContentDetails;
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: Youtube_v3.Schema.ActivitySnippet;
      }
      export interface ActivityContentDetails {
        bulletin?: Youtube_v3.Schema.ActivityContentDetailsBulletin;
        channelItem?: Youtube_v3.Schema.ActivityContentDetailsChannelItem;
        comment?: Youtube_v3.Schema.ActivityContentDetailsComment;
        favorite?: Youtube_v3.Schema.ActivityContentDetailsFavorite;
        like?: Youtube_v3.Schema.ActivityContentDetailsLike;
        playlistItem?: Youtube_v3.Schema.ActivityContentDetailsPlaylistItem;
        promotedItem?: Youtube_v3.Schema.ActivityContentDetailsPromotedItem;
        recommendation?: Youtube_v3.Schema.ActivityContentDetailsRecommendation;
        social?: Youtube_v3.Schema.ActivityContentDetailsSocial;
        subscription?: Youtube_v3.Schema.ActivityContentDetailsSubscription;
        upload?: Youtube_v3.Schema.ActivityContentDetailsUpload;
      }
      export interface ActivityContentDetailsBulletin {
        resourceId?: Youtube_v3.Schema.ResourceId;
      }
      export interface ActivityContentDetailsChannelItem {
        resourceId?: Youtube_v3.Schema.ResourceId;
      }
      export interface ActivityContentDetailsComment {
        resourceId?: Youtube_v3.Schema.ResourceId;
      }
      export interface ActivityContentDetailsFavorite {
        resourceId?: Youtube_v3.Schema.ResourceId;
      }
      export interface ActivityContentDetailsLike {
        resourceId?: Youtube_v3.Schema.ResourceId;
      }
      export interface ActivityContentDetailsPlaylistItem {
        playlistId?: string;
        playlistItemId?: string;
        resourceId?: Youtube_v3.Schema.ResourceId;
      }
      export interface ActivityContentDetailsPromotedItem {
        adTag?: string;
        clickTrackingUrl?: string;
        creativeViewUrl?: string;
        ctaType?: string;
        customCtaButtonText?: string;
        descriptionText?: string;
        destinationUrl?: string;
        forecastingUrl?: string[];
        impressionUrl?: string[];
        videoId?: string;
      }
      export interface ActivityContentDetailsRecommendation {
        reason?: string;
        resourceId?: Youtube_v3.Schema.ResourceId;
        seedResourceId?: Youtube_v3.Schema.ResourceId;
      }
      export interface ActivityContentDetailsSocial {
        author?: string;
        imageUrl?: string;
        referenceUrl?: string;
        resourceId?: Youtube_v3.Schema.ResourceId;
        type?: string;
      }
      export interface ActivityContentDetailsSubscription {
        resourceId?: Youtube_v3.Schema.ResourceId;
      }
      export interface ActivityContentDetailsUpload {
        videoId?: string;
      }
      export interface ActivityListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.Activity[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: Youtube_v3.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      export interface ActivitySnippet {
        channelId?: string;
        channelTitle?: string;
        description?: string;
        groupId?: string;
        publishedAt?: string;
        thumbnails?: Youtube_v3.Schema.ThumbnailDetails;
        title?: string;
        type?: string;
      }
      export interface Caption {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: Youtube_v3.Schema.CaptionSnippet;
      }
      export interface CaptionListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.Caption[];
        kind?: string;
        visitorId?: string;
      }
      export interface CaptionSnippet {
        audioTrackType?: string;
        failureReason?: string;
        isAutoSynced?: boolean;
        isCC?: boolean;
        isDraft?: boolean;
        isEasyReader?: boolean;
        isLarge?: boolean;
        language?: string;
        lastUpdated?: string;
        name?: string;
        status?: string;
        trackKind?: string;
        videoId?: string;
      }
      export interface CdnSettings {
        format?: string;
        frameRate?: string;
        ingestionInfo?: Youtube_v3.Schema.IngestionInfo;
        ingestionType?: string;
        resolution?: string;
      }
      export interface Channel {
        auditDetails?: Youtube_v3.Schema.ChannelAuditDetails;
        brandingSettings?: Youtube_v3.Schema.ChannelBrandingSettings;
        contentDetails?: Youtube_v3.Schema.ChannelContentDetails;
        contentOwnerDetails?: Youtube_v3.Schema.ChannelContentOwnerDetails;
        conversionPings?: Youtube_v3.Schema.ChannelConversionPings;
        etag?: string;
        id?: string;
        invideoPromotion?: Youtube_v3.Schema.InvideoPromotion;
        kind?: string;
        localizations?: object;
        snippet?: Youtube_v3.Schema.ChannelSnippet;
        statistics?: Youtube_v3.Schema.ChannelStatistics;
        status?: Youtube_v3.Schema.ChannelStatus;
        topicDetails?: Youtube_v3.Schema.ChannelTopicDetails;
      }
      export interface ChannelAuditDetails {
        communityGuidelinesGoodStanding?: boolean;
        contentIdClaimsGoodStanding?: boolean;
        copyrightStrikesGoodStanding?: boolean;
      }
      export interface ChannelBannerResource {
        etag?: string;
        kind?: string;
        url?: string;
      }
      export interface ChannelBrandingSettings {
        channel?: Youtube_v3.Schema.ChannelSettings;
        hints?: Youtube_v3.Schema.PropertyValue[];
        image?: Youtube_v3.Schema.ImageSettings;
        watch?: Youtube_v3.Schema.WatchSettings;
      }
      export interface ChannelContentDetails {
        relatedPlaylists?: Youtube_v3.Schema.ChannelContentDetailsRelatedPlaylists;
      }
      export interface ChannelContentDetailsRelatedPlaylists {
        favorites?: string;
        likes?: string;
        uploads?: string;
        watchHistory?: string;
        watchLater?: string;
      }
      export interface ChannelContentOwnerDetails {
        contentOwner?: string;
        timeLinked?: string;
      }
      export interface ChannelConversionPing {
        context?: string;
        conversionUrl?: string;
      }
      export interface ChannelConversionPings {
        pings?: Youtube_v3.Schema.ChannelConversionPing[];
      }
      export interface ChannelListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.Channel[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: Youtube_v3.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      export interface ChannelLocalization {
        description?: string;
        title?: string;
      }
      export interface ChannelProfileDetails {
        channelId?: string;
        channelUrl?: string;
        displayName?: string;
        profileImageUrl?: string;
      }
      export interface ChannelSection {
        contentDetails?: Youtube_v3.Schema.ChannelSectionContentDetails;
        etag?: string;
        id?: string;
        kind?: string;
        localizations?: object;
        snippet?: Youtube_v3.Schema.ChannelSectionSnippet;
        targeting?: Youtube_v3.Schema.ChannelSectionTargeting;
      }
      export interface ChannelSectionContentDetails {
        channels?: string[];
        playlists?: string[];
      }
      export interface ChannelSectionListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.ChannelSection[];
        kind?: string;
        visitorId?: string;
      }
      export interface ChannelSectionLocalization {
        title?: string;
      }
      export interface ChannelSectionSnippet {
        channelId?: string;
        defaultLanguage?: string;
        localized?: Youtube_v3.Schema.ChannelSectionLocalization;
        position?: number;
        style?: string;
        title?: string;
        type?: string;
      }
      export interface ChannelSectionTargeting {
        countries?: string[];
        languages?: string[];
        regions?: string[];
      }
      export interface ChannelSettings {
        country?: string;
        defaultLanguage?: string;
        defaultTab?: string;
        description?: string;
        featuredChannelsTitle?: string;
        featuredChannelsUrls?: string[];
        keywords?: string;
        moderateComments?: boolean;
        profileColor?: string;
        showBrowseView?: boolean;
        showRelatedChannels?: boolean;
        title?: string;
        trackingAnalyticsAccountId?: string;
        unsubscribedTrailer?: string;
      }
      export interface ChannelSnippet {
        country?: string;
        customUrl?: string;
        defaultLanguage?: string;
        description?: string;
        localized?: Youtube_v3.Schema.ChannelLocalization;
        publishedAt?: string;
        thumbnails?: Youtube_v3.Schema.ThumbnailDetails;
        title?: string;
      }
      export interface ChannelStatistics {
        commentCount?: string;
        hiddenSubscriberCount?: boolean;
        subscriberCount?: string;
        videoCount?: string;
        viewCount?: string;
      }
      export interface ChannelStatus {
        isLinked?: boolean;
        longUploadsStatus?: string;
        privacyStatus?: string;
      }
      export interface ChannelTopicDetails {
        topicCategories?: string[];
        topicIds?: string[];
      }
      export interface Comment {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: Youtube_v3.Schema.CommentSnippet;
      }
      export interface CommentListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.Comment[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: Youtube_v3.Schema.PageInfo;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      export interface CommentSnippet {
        authorChannelId?: object;
        authorChannelUrl?: string;
        authorDisplayName?: string;
        authorProfileImageUrl?: string;
        canRate?: boolean;
        channelId?: string;
        likeCount?: number;
        moderationStatus?: string;
        parentId?: string;
        publishedAt?: string;
        textDisplay?: string;
        textOriginal?: string;
        updatedAt?: string;
        videoId?: string;
        viewerRating?: string;
      }
      export interface CommentThread {
        etag?: string;
        id?: string;
        kind?: string;
        replies?: Youtube_v3.Schema.CommentThreadReplies;
        snippet?: Youtube_v3.Schema.CommentThreadSnippet;
      }
      export interface CommentThreadListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.CommentThread[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: Youtube_v3.Schema.PageInfo;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      export interface CommentThreadReplies {
        comments?: Youtube_v3.Schema.Comment[];
      }
      export interface CommentThreadSnippet {
        canReply?: boolean;
        channelId?: string;
        isPublic?: boolean;
        topLevelComment?: Youtube_v3.Schema.Comment;
        totalReplyCount?: number;
        videoId?: string;
      }
      export interface ContentRating {
        acbRating?: string;
        agcomRating?: string;
        anatelRating?: string;
        bbfcRating?: string;
        bfvcRating?: string;
        bmukkRating?: string;
        catvRating?: string;
        catvfrRating?: string;
        cbfcRating?: string;
        cccRating?: string;
        cceRating?: string;
        chfilmRating?: string;
        chvrsRating?: string;
        cicfRating?: string;
        cnaRating?: string;
        cncRating?: string;
        csaRating?: string;
        cscfRating?: string;
        czfilmRating?: string;
        djctqRating?: string;
        djctqRatingReasons?: string[];
        ecbmctRating?: string;
        eefilmRating?: string;
        egfilmRating?: string;
        eirinRating?: string;
        fcbmRating?: string;
        fcoRating?: string;
        fmocRating?: string;
        fpbRating?: string;
        fpbRatingReasons?: string[];
        fskRating?: string;
        grfilmRating?: string;
        icaaRating?: string;
        ifcoRating?: string;
        ilfilmRating?: string;
        incaaRating?: string;
        kfcbRating?: string;
        kijkwijzerRating?: string;
        kmrbRating?: string;
        lsfRating?: string;
        mccaaRating?: string;
        mccypRating?: string;
        mcstRating?: string;
        mdaRating?: string;
        medietilsynetRating?: string;
        mekuRating?: string;
        menaMpaaRating?: string;
        mibacRating?: string;
        mocRating?: string;
        moctwRating?: string;
        mpaaRating?: string;
        mpaatRating?: string;
        mtrcbRating?: string;
        nbcRating?: string;
        nbcplRating?: string;
        nfrcRating?: string;
        nfvcbRating?: string;
        nkclvRating?: string;
        oflcRating?: string;
        pefilmRating?: string;
        rcnofRating?: string;
        resorteviolenciaRating?: string;
        rtcRating?: string;
        rteRating?: string;
        russiaRating?: string;
        skfilmRating?: string;
        smaisRating?: string;
        smsaRating?: string;
        tvpgRating?: string;
        ytRating?: string;
      }
      export interface GeoPoint {
        altitude?: Number;
        latitude?: Number;
        longitude?: Number;
      }
      export interface GuideCategory {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: Youtube_v3.Schema.GuideCategorySnippet;
      }
      export interface GuideCategoryListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.GuideCategory[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: Youtube_v3.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      export interface GuideCategorySnippet {
        channelId?: string;
        title?: string;
      }
      export interface I18nLanguage {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: Youtube_v3.Schema.I18nLanguageSnippet;
      }
      export interface I18nLanguageListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.I18nLanguage[];
        kind?: string;
        visitorId?: string;
      }
      export interface I18nLanguageSnippet {
        hl?: string;
        name?: string;
      }
      export interface I18nRegion {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: Youtube_v3.Schema.I18nRegionSnippet;
      }
      export interface I18nRegionListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.I18nRegion[];
        kind?: string;
        visitorId?: string;
      }
      export interface I18nRegionSnippet {
        gl?: string;
        name?: string;
      }
      export interface ImageSettings {
        backgroundImageUrl?: Youtube_v3.Schema.LocalizedProperty;
        bannerExternalUrl?: string;
        bannerImageUrl?: string;
        bannerMobileExtraHdImageUrl?: string;
        bannerMobileHdImageUrl?: string;
        bannerMobileImageUrl?: string;
        bannerMobileLowImageUrl?: string;
        bannerMobileMediumHdImageUrl?: string;
        bannerTabletExtraHdImageUrl?: string;
        bannerTabletHdImageUrl?: string;
        bannerTabletImageUrl?: string;
        bannerTabletLowImageUrl?: string;
        bannerTvHighImageUrl?: string;
        bannerTvImageUrl?: string;
        bannerTvLowImageUrl?: string;
        bannerTvMediumImageUrl?: string;
        largeBrandedBannerImageImapScript?: Youtube_v3.Schema.LocalizedProperty;
        largeBrandedBannerImageUrl?: Youtube_v3.Schema.LocalizedProperty;
        smallBrandedBannerImageImapScript?: Youtube_v3.Schema.LocalizedProperty;
        smallBrandedBannerImageUrl?: Youtube_v3.Schema.LocalizedProperty;
        trackingImageUrl?: string;
        watchIconImageUrl?: string;
      }
      export interface IngestionInfo {
        backupIngestionAddress?: string;
        ingestionAddress?: string;
        streamName?: string;
      }
      export interface InvideoBranding {
        imageBytes?: string;
        imageUrl?: string;
        position?: Youtube_v3.Schema.InvideoPosition;
        targetChannelId?: string;
        timing?: Youtube_v3.Schema.InvideoTiming;
      }
      export interface InvideoPosition {
        cornerPosition?: string;
        type?: string;
      }
      export interface InvideoPromotion {
        defaultTiming?: Youtube_v3.Schema.InvideoTiming;
        items?: Youtube_v3.Schema.PromotedItem[];
        position?: Youtube_v3.Schema.InvideoPosition;
        useSmartTiming?: boolean;
      }
      export interface InvideoTiming {
        durationMs?: string;
        offsetMs?: string;
        type?: string;
      }
      export interface LanguageTag {
        value?: string;
      }
      export interface LiveBroadcast {
        contentDetails?: Youtube_v3.Schema.LiveBroadcastContentDetails;
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: Youtube_v3.Schema.LiveBroadcastSnippet;
        statistics?: Youtube_v3.Schema.LiveBroadcastStatistics;
        status?: Youtube_v3.Schema.LiveBroadcastStatus;
      }
      export interface LiveBroadcastContentDetails {
        boundStreamId?: string;
        boundStreamLastUpdateTimeMs?: string;
        closedCaptionsType?: string;
        enableAutoStart?: boolean;
        enableClosedCaptions?: boolean;
        enableContentEncryption?: boolean;
        enableDvr?: boolean;
        enableEmbed?: boolean;
        enableLowLatency?: boolean;
        latencyPreference?: string;
        mesh?: string;
        monitorStream?: Youtube_v3.Schema.MonitorStreamInfo;
        projection?: string;
        recordFromStart?: boolean;
        startWithSlate?: boolean;
        stereoLayout?: string;
      }
      export interface LiveBroadcastListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.LiveBroadcast[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: Youtube_v3.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      export interface LiveBroadcastSnippet {
        actualEndTime?: string;
        actualStartTime?: string;
        channelId?: string;
        description?: string;
        isDefaultBroadcast?: boolean;
        liveChatId?: string;
        publishedAt?: string;
        scheduledEndTime?: string;
        scheduledStartTime?: string;
        thumbnails?: Youtube_v3.Schema.ThumbnailDetails;
        title?: string;
      }
      export interface LiveBroadcastStatistics {
        concurrentViewers?: string;
        totalChatCount?: string;
      }
      export interface LiveBroadcastStatus {
        lifeCycleStatus?: string;
        liveBroadcastPriority?: string;
        privacyStatus?: string;
        recordingStatus?: string;
      }
      export interface LiveChatBan {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: Youtube_v3.Schema.LiveChatBanSnippet;
      }
      export interface LiveChatBanSnippet {
        banDurationSeconds?: string;
        bannedUserDetails?: Youtube_v3.Schema.ChannelProfileDetails;
        liveChatId?: string;
        type?: string;
      }
      export interface LiveChatFanFundingEventDetails {
        amountDisplayString?: string;
        amountMicros?: string;
        currency?: string;
        userComment?: string;
      }
      export interface LiveChatMessage {
        authorDetails?: Youtube_v3.Schema.LiveChatMessageAuthorDetails;
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: Youtube_v3.Schema.LiveChatMessageSnippet;
      }
      export interface LiveChatMessageAuthorDetails {
        channelId?: string;
        channelUrl?: string;
        displayName?: string;
        isChatModerator?: boolean;
        isChatOwner?: boolean;
        isChatSponsor?: boolean;
        isVerified?: boolean;
        profileImageUrl?: string;
      }
      export interface LiveChatMessageDeletedDetails {
        deletedMessageId?: string;
      }
      export interface LiveChatMessageListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.LiveChatMessage[];
        kind?: string;
        nextPageToken?: string;
        offlineAt?: string;
        pageInfo?: Youtube_v3.Schema.PageInfo;
        pollingIntervalMillis?: number;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      export interface LiveChatMessageRetractedDetails {
        retractedMessageId?: string;
      }
      export interface LiveChatMessageSnippet {
        authorChannelId?: string;
        displayMessage?: string;
        fanFundingEventDetails?: Youtube_v3.Schema.LiveChatFanFundingEventDetails;
        hasDisplayContent?: boolean;
        liveChatId?: string;
        messageDeletedDetails?: Youtube_v3.Schema.LiveChatMessageDeletedDetails;
        messageRetractedDetails?: Youtube_v3.Schema.LiveChatMessageRetractedDetails;
        pollClosedDetails?: Youtube_v3.Schema.LiveChatPollClosedDetails;
        pollEditedDetails?: Youtube_v3.Schema.LiveChatPollEditedDetails;
        pollOpenedDetails?: Youtube_v3.Schema.LiveChatPollOpenedDetails;
        pollVotedDetails?: Youtube_v3.Schema.LiveChatPollVotedDetails;
        publishedAt?: string;
        superChatDetails?: Youtube_v3.Schema.LiveChatSuperChatDetails;
        superStickerDetails?: Youtube_v3.Schema.LiveChatSuperStickerDetails;
        textMessageDetails?: Youtube_v3.Schema.LiveChatTextMessageDetails;
        type?: string;
        userBannedDetails?: Youtube_v3.Schema.LiveChatUserBannedMessageDetails;
      }
      export interface LiveChatModerator {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: Youtube_v3.Schema.LiveChatModeratorSnippet;
      }
      export interface LiveChatModeratorListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.LiveChatModerator[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: Youtube_v3.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      export interface LiveChatModeratorSnippet {
        liveChatId?: string;
        moderatorDetails?: Youtube_v3.Schema.ChannelProfileDetails;
      }
      export interface LiveChatPollClosedDetails {
        pollId?: string;
      }
      export interface LiveChatPollEditedDetails {
        id?: string;
        items?: Youtube_v3.Schema.LiveChatPollItem[];
        prompt?: string;
      }
      export interface LiveChatPollItem {
        description?: string;
        itemId?: string;
      }
      export interface LiveChatPollOpenedDetails {
        id?: string;
        items?: Youtube_v3.Schema.LiveChatPollItem[];
        prompt?: string;
      }
      export interface LiveChatPollVotedDetails {
        itemId?: string;
        pollId?: string;
      }
      export interface LiveChatSuperChatDetails {
        amountDisplayString?: string;
        amountMicros?: string;
        currency?: string;
        tier?: number;
        userComment?: string;
      }
      export interface LiveChatSuperStickerDetails {
        amountDisplayString?: string;
        amountMicros?: string;
        currency?: string;
        superStickerMetadata?: Youtube_v3.Schema.SuperStickerMetadata;
        tier?: number;
      }
      export interface LiveChatTextMessageDetails {
        messageText?: string;
      }
      export interface LiveChatUserBannedMessageDetails {
        banDurationSeconds?: string;
        banType?: string;
        bannedUserDetails?: Youtube_v3.Schema.ChannelProfileDetails;
      }
      export interface LiveStream {
        cdn?: Youtube_v3.Schema.CdnSettings;
        contentDetails?: Youtube_v3.Schema.LiveStreamContentDetails;
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: Youtube_v3.Schema.LiveStreamSnippet;
        status?: Youtube_v3.Schema.LiveStreamStatus;
      }
      export interface LiveStreamConfigurationIssue {
        description?: string;
        reason?: string;
        severity?: string;
        type?: string;
      }
      export interface LiveStreamContentDetails {
        closedCaptionsIngestionUrl?: string;
        isReusable?: boolean;
      }
      export interface LiveStreamHealthStatus {
        configurationIssues?: Youtube_v3.Schema.LiveStreamConfigurationIssue[];
        lastUpdateTimeSeconds?: string;
        status?: string;
      }
      export interface LiveStreamListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.LiveStream[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: Youtube_v3.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      export interface LiveStreamSnippet {
        channelId?: string;
        description?: string;
        isDefaultStream?: boolean;
        publishedAt?: string;
        title?: string;
      }
      export interface LiveStreamStatus {
        healthStatus?: Youtube_v3.Schema.LiveStreamHealthStatus;
        streamStatus?: string;
      }
      export interface LocalizedProperty {
        default?: string;
        defaultLanguage?: Youtube_v3.Schema.LanguageTag;
        localized?: Youtube_v3.Schema.LocalizedString[];
      }
      export interface LocalizedString {
        language?: string;
        value?: string;
      }
      export interface MonitorStreamInfo {
        broadcastStreamDelayMs?: number;
        embedHtml?: string;
        enableMonitorStream?: boolean;
      }
      export interface Nonprofit {
        nonprofitId?: Youtube_v3.Schema.NonprofitId;
        nonprofitLegalName?: string;
      }
      export interface NonprofitId {
        value?: string;
      }
      export interface PageInfo {
        resultsPerPage?: number;
        totalResults?: number;
      }
      export interface Playlist {
        contentDetails?: Youtube_v3.Schema.PlaylistContentDetails;
        etag?: string;
        id?: string;
        kind?: string;
        localizations?: object;
        player?: Youtube_v3.Schema.PlaylistPlayer;
        snippet?: Youtube_v3.Schema.PlaylistSnippet;
        status?: Youtube_v3.Schema.PlaylistStatus;
      }
      export interface PlaylistContentDetails {
        itemCount?: number;
      }
      export interface PlaylistItem {
        contentDetails?: Youtube_v3.Schema.PlaylistItemContentDetails;
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: Youtube_v3.Schema.PlaylistItemSnippet;
        status?: Youtube_v3.Schema.PlaylistItemStatus;
      }
      export interface PlaylistItemContentDetails {
        endAt?: string;
        note?: string;
        startAt?: string;
        videoId?: string;
        videoPublishedAt?: string;
      }
      export interface PlaylistItemListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.PlaylistItem[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: Youtube_v3.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      export interface PlaylistItemSnippet {
        channelId?: string;
        channelTitle?: string;
        description?: string;
        playlistId?: string;
        position?: number;
        publishedAt?: string;
        resourceId?: Youtube_v3.Schema.ResourceId;
        thumbnails?: Youtube_v3.Schema.ThumbnailDetails;
        title?: string;
      }
      export interface PlaylistItemStatus {
        privacyStatus?: string;
      }
      export interface PlaylistListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.Playlist[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: Youtube_v3.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      export interface PlaylistLocalization {
        description?: string;
        title?: string;
      }
      export interface PlaylistPlayer {
        embedHtml?: string;
      }
      export interface PlaylistSnippet {
        channelId?: string;
        channelTitle?: string;
        defaultLanguage?: string;
        description?: string;
        localized?: Youtube_v3.Schema.PlaylistLocalization;
        publishedAt?: string;
        tags?: string[];
        thumbnails?: Youtube_v3.Schema.ThumbnailDetails;
        title?: string;
      }
      export interface PlaylistStatus {
        privacyStatus?: string;
      }
      export interface PromotedItem {
        customMessage?: string;
        id?: Youtube_v3.Schema.PromotedItemId;
        promotedByContentOwner?: boolean;
        timing?: Youtube_v3.Schema.InvideoTiming;
      }
      export interface PromotedItemId {
        recentlyUploadedBy?: string;
        type?: string;
        videoId?: string;
        websiteUrl?: string;
      }
      export interface PropertyValue {
        property?: string;
        value?: string;
      }
      export interface ResourceId {
        channelId?: string;
        kind?: string;
        playlistId?: string;
        videoId?: string;
      }
      export interface SearchListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.SearchResult[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: Youtube_v3.Schema.PageInfo;
        prevPageToken?: string;
        regionCode?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      export interface SearchResult {
        etag?: string;
        id?: Youtube_v3.Schema.ResourceId;
        kind?: string;
        snippet?: Youtube_v3.Schema.SearchResultSnippet;
      }
      export interface SearchResultSnippet {
        channelId?: string;
        channelTitle?: string;
        description?: string;
        liveBroadcastContent?: string;
        publishedAt?: string;
        thumbnails?: Youtube_v3.Schema.ThumbnailDetails;
        title?: string;
      }
      export interface Sponsor {
        etag?: string;
        kind?: string;
        snippet?: Youtube_v3.Schema.SponsorSnippet;
      }
      export interface SponsorListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.Sponsor[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: Youtube_v3.Schema.PageInfo;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      export interface SponsorSnippet {
        channelId?: string;
        cumulativeDurationMonths?: number;
        sponsorDetails?: Youtube_v3.Schema.ChannelProfileDetails;
        sponsorSince?: string;
      }
      export interface Subscription {
        contentDetails?: Youtube_v3.Schema.SubscriptionContentDetails;
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: Youtube_v3.Schema.SubscriptionSnippet;
        subscriberSnippet?: Youtube_v3.Schema.SubscriptionSubscriberSnippet;
      }
      export interface SubscriptionContentDetails {
        activityType?: string;
        newItemCount?: number;
        totalItemCount?: number;
      }
      export interface SubscriptionListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.Subscription[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: Youtube_v3.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      export interface SubscriptionSnippet {
        channelId?: string;
        channelTitle?: string;
        description?: string;
        publishedAt?: string;
        resourceId?: Youtube_v3.Schema.ResourceId;
        thumbnails?: Youtube_v3.Schema.ThumbnailDetails;
        title?: string;
      }
      export interface SubscriptionSubscriberSnippet {
        channelId?: string;
        description?: string;
        thumbnails?: Youtube_v3.Schema.ThumbnailDetails;
        title?: string;
      }
      export interface SuperChatEvent {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: Youtube_v3.Schema.SuperChatEventSnippet;
      }
      export interface SuperChatEventListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.SuperChatEvent[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: Youtube_v3.Schema.PageInfo;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      export interface SuperChatEventSnippet {
        amountMicros?: string;
        channelId?: string;
        commentText?: string;
        createdAt?: string;
        currency?: string;
        displayString?: string;
        isSuperChatForGood?: boolean;
        isSuperStickerEvent?: boolean;
        messageType?: number;
        nonprofit?: Youtube_v3.Schema.Nonprofit;
        superStickerMetadata?: Youtube_v3.Schema.SuperStickerMetadata;
        supporterDetails?: Youtube_v3.Schema.ChannelProfileDetails;
      }
      export interface SuperStickerMetadata {
        altText?: string;
        altTextLanguage?: string;
        stickerId?: string;
      }
      export interface Thumbnail {
        height?: number;
        url?: string;
        width?: number;
      }
      export interface ThumbnailDetails {
        default?: Youtube_v3.Schema.Thumbnail;
        high?: Youtube_v3.Schema.Thumbnail;
        maxres?: Youtube_v3.Schema.Thumbnail;
        medium?: Youtube_v3.Schema.Thumbnail;
        standard?: Youtube_v3.Schema.Thumbnail;
      }
      export interface ThumbnailSetResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.ThumbnailDetails[];
        kind?: string;
        visitorId?: string;
      }
      export interface Video {
        ageGating?: Youtube_v3.Schema.VideoAgeGating;
        contentDetails?: Youtube_v3.Schema.VideoContentDetails;
        etag?: string;
        fileDetails?: Youtube_v3.Schema.VideoFileDetails;
        id?: string;
        kind?: string;
        liveStreamingDetails?: Youtube_v3.Schema.VideoLiveStreamingDetails;
        localizations?: object;
        monetizationDetails?: Youtube_v3.Schema.VideoMonetizationDetails;
        player?: Youtube_v3.Schema.VideoPlayer;
        processingDetails?: Youtube_v3.Schema.VideoProcessingDetails;
        projectDetails?: Youtube_v3.Schema.VideoProjectDetails;
        recordingDetails?: Youtube_v3.Schema.VideoRecordingDetails;
        snippet?: Youtube_v3.Schema.VideoSnippet;
        statistics?: Youtube_v3.Schema.VideoStatistics;
        status?: Youtube_v3.Schema.VideoStatus;
        suggestions?: Youtube_v3.Schema.VideoSuggestions;
        topicDetails?: Youtube_v3.Schema.VideoTopicDetails;
      }
      export interface VideoAbuseReport {
        comments?: string;
        language?: string;
        reasonId?: string;
        secondaryReasonId?: string;
        videoId?: string;
      }
      export interface VideoAbuseReportReason {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: Youtube_v3.Schema.VideoAbuseReportReasonSnippet;
      }
      export interface VideoAbuseReportReasonListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.VideoAbuseReportReason[];
        kind?: string;
        visitorId?: string;
      }
      export interface VideoAbuseReportReasonSnippet {
        label?: string;
        secondaryReasons?: Youtube_v3.Schema.VideoAbuseReportSecondaryReason[];
      }
      export interface VideoAbuseReportSecondaryReason {
        id?: string;
        label?: string;
      }
      export interface VideoAgeGating {
        alcoholContent?: boolean;
        restricted?: boolean;
        videoGameRating?: string;
      }
      export interface VideoCategory {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: Youtube_v3.Schema.VideoCategorySnippet;
      }
      export interface VideoCategoryListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.VideoCategory[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: Youtube_v3.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      export interface VideoCategorySnippet {
        assignable?: boolean;
        channelId?: string;
        title?: string;
      }
      export interface VideoContentDetails {
        caption?: string;
        contentRating?: Youtube_v3.Schema.ContentRating;
        countryRestriction?: Youtube_v3.Schema.AccessPolicy;
        definition?: string;
        dimension?: string;
        duration?: string;
        hasCustomThumbnail?: boolean;
        licensedContent?: boolean;
        projection?: string;
        regionRestriction?: Youtube_v3.Schema.VideoContentDetailsRegionRestriction;
      }
      export interface VideoContentDetailsRegionRestriction {
        allowed?: string[];
        blocked?: string[];
      }
      export interface VideoFileDetails {
        audioStreams?: Youtube_v3.Schema.VideoFileDetailsAudioStream[];
        bitrateBps?: string;
        container?: string;
        creationTime?: string;
        durationMs?: string;
        fileName?: string;
        fileSize?: string;
        fileType?: string;
        videoStreams?: Youtube_v3.Schema.VideoFileDetailsVideoStream[];
      }
      export interface VideoFileDetailsAudioStream {
        bitrateBps?: string;
        channelCount?: number;
        codec?: string;
        vendor?: string;
      }
      export interface VideoFileDetailsVideoStream {
        aspectRatio?: Number;
        bitrateBps?: string;
        codec?: string;
        frameRateFps?: Number;
        heightPixels?: number;
        rotation?: string;
        vendor?: string;
        widthPixels?: number;
      }
      export interface VideoGetRatingResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.VideoRating[];
        kind?: string;
        visitorId?: string;
      }
      export interface VideoListResponse {
        etag?: string;
        eventId?: string;
        items?: Youtube_v3.Schema.Video[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: Youtube_v3.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      export interface VideoLiveStreamingDetails {
        activeLiveChatId?: string;
        actualEndTime?: string;
        actualStartTime?: string;
        concurrentViewers?: string;
        scheduledEndTime?: string;
        scheduledStartTime?: string;
      }
      export interface VideoLocalization {
        description?: string;
        title?: string;
      }
      export interface VideoMonetizationDetails {
        access?: Youtube_v3.Schema.AccessPolicy;
      }
      export interface VideoPlayer {
        embedHeight?: string;
        embedHtml?: string;
        embedWidth?: string;
      }
      export interface VideoProcessingDetails {
        editorSuggestionsAvailability?: string;
        fileDetailsAvailability?: string;
        processingFailureReason?: string;
        processingIssuesAvailability?: string;
        processingProgress?: Youtube_v3.Schema.VideoProcessingDetailsProcessingProgress;
        processingStatus?: string;
        tagSuggestionsAvailability?: string;
        thumbnailsAvailability?: string;
      }
      export interface VideoProcessingDetailsProcessingProgress {
        partsProcessed?: string;
        partsTotal?: string;
        timeLeftMs?: string;
      }
      export interface VideoProjectDetails {
        tags?: string[];
      }
      export interface VideoRating {
        rating?: string;
        videoId?: string;
      }
      export interface VideoRecordingDetails {
        location?: Youtube_v3.Schema.GeoPoint;
        locationDescription?: string;
        recordingDate?: string;
      }
      export interface VideoSnippet {
        categoryId?: string;
        channelId?: string;
        channelTitle?: string;
        defaultAudioLanguage?: string;
        defaultLanguage?: string;
        description?: string;
        liveBroadcastContent?: string;
        localized?: Youtube_v3.Schema.VideoLocalization;
        publishedAt?: string;
        tags?: string[];
        thumbnails?: Youtube_v3.Schema.ThumbnailDetails;
        title?: string;
      }
      export interface VideoStatistics {
        commentCount?: string;
        dislikeCount?: string;
        favoriteCount?: string;
        likeCount?: string;
        viewCount?: string;
      }
      export interface VideoStatus {
        embeddable?: boolean;
        failureReason?: string;
        license?: string;
        privacyStatus?: string;
        publicStatsViewable?: boolean;
        publishAt?: string;
        rejectionReason?: string;
        uploadStatus?: string;
      }
      export interface VideoSuggestions {
        editorSuggestions?: string[];
        processingErrors?: string[];
        processingHints?: string[];
        processingWarnings?: string[];
        tagSuggestions?: Youtube_v3.Schema.VideoSuggestionsTagSuggestion[];
      }
      export interface VideoSuggestionsTagSuggestion {
        categoryRestricts?: string[];
        tag?: string;
      }
      export interface VideoTopicDetails {
        relevantTopicIds?: string[];
        topicCategories?: string[];
        topicIds?: string[];
      }
      export interface WatchSettings {
        backgroundColor?: string;
        featuredPlaylistId?: string;
        textColor?: string;
      }
    }
  }
  export interface Youtube_v3 {
    Activities?: Youtube_v3.Collection.ActivitiesCollection;
    Captions?: Youtube_v3.Collection.CaptionsCollection;
    ChannelBanners?: Youtube_v3.Collection.ChannelBannersCollection;
    ChannelSections?: Youtube_v3.Collection.ChannelSectionsCollection;
    Channels?: Youtube_v3.Collection.ChannelsCollection;
    CommentThreads?: Youtube_v3.Collection.CommentThreadsCollection;
    Comments?: Youtube_v3.Collection.CommentsCollection;
    GuideCategories?: Youtube_v3.Collection.GuideCategoriesCollection;
    I18nLanguages?: Youtube_v3.Collection.I18nLanguagesCollection;
    I18nRegions?: Youtube_v3.Collection.I18nRegionsCollection;
    LiveBroadcasts?: Youtube_v3.Collection.LiveBroadcastsCollection;
    LiveChatBans?: Youtube_v3.Collection.LiveChatBansCollection;
    LiveChatMessages?: Youtube_v3.Collection.LiveChatMessagesCollection;
    LiveChatModerators?: Youtube_v3.Collection.LiveChatModeratorsCollection;
    LiveStreams?: Youtube_v3.Collection.LiveStreamsCollection;
    PlaylistItems?: Youtube_v3.Collection.PlaylistItemsCollection;
    Playlists?: Youtube_v3.Collection.PlaylistsCollection;
    Search?: Youtube_v3.Collection.SearchCollection;
    Sponsors?: Youtube_v3.Collection.SponsorsCollection;
    Subscriptions?: Youtube_v3.Collection.SubscriptionsCollection;
    SuperChatEvents?: Youtube_v3.Collection.SuperChatEventsCollection;
    Thumbnails?: Youtube_v3.Collection.ThumbnailsCollection;
    VideoAbuseReportReasons?: Youtube_v3.Collection.VideoAbuseReportReasonsCollection;
    VideoCategories?: Youtube_v3.Collection.VideoCategoriesCollection;
    Videos?: Youtube_v3.Collection.VideosCollection;
    Watermarks?: Youtube_v3.Collection.WatermarksCollection;
    // Create a new instance of AccessPolicy
    newAccessPolicy(): Youtube_v3.Schema.AccessPolicy;
    // Create a new instance of Activity
    newActivity(): Youtube_v3.Schema.Activity;
    // Create a new instance of ActivityContentDetails
    newActivityContentDetails(): Youtube_v3.Schema.ActivityContentDetails;
    // Create a new instance of ActivityContentDetailsBulletin
    newActivityContentDetailsBulletin(): Youtube_v3.Schema.ActivityContentDetailsBulletin;
    // Create a new instance of ActivityContentDetailsChannelItem
    newActivityContentDetailsChannelItem(): Youtube_v3.Schema.ActivityContentDetailsChannelItem;
    // Create a new instance of ActivityContentDetailsComment
    newActivityContentDetailsComment(): Youtube_v3.Schema.ActivityContentDetailsComment;
    // Create a new instance of ActivityContentDetailsFavorite
    newActivityContentDetailsFavorite(): Youtube_v3.Schema.ActivityContentDetailsFavorite;
    // Create a new instance of ActivityContentDetailsLike
    newActivityContentDetailsLike(): Youtube_v3.Schema.ActivityContentDetailsLike;
    // Create a new instance of ActivityContentDetailsPlaylistItem
    newActivityContentDetailsPlaylistItem(): Youtube_v3.Schema.ActivityContentDetailsPlaylistItem;
    // Create a new instance of ActivityContentDetailsPromotedItem
    newActivityContentDetailsPromotedItem(): Youtube_v3.Schema.ActivityContentDetailsPromotedItem;
    // Create a new instance of ActivityContentDetailsRecommendation
    newActivityContentDetailsRecommendation(): Youtube_v3.Schema.ActivityContentDetailsRecommendation;
    // Create a new instance of ActivityContentDetailsSocial
    newActivityContentDetailsSocial(): Youtube_v3.Schema.ActivityContentDetailsSocial;
    // Create a new instance of ActivityContentDetailsSubscription
    newActivityContentDetailsSubscription(): Youtube_v3.Schema.ActivityContentDetailsSubscription;
    // Create a new instance of ActivityContentDetailsUpload
    newActivityContentDetailsUpload(): Youtube_v3.Schema.ActivityContentDetailsUpload;
    // Create a new instance of ActivitySnippet
    newActivitySnippet(): Youtube_v3.Schema.ActivitySnippet;
    // Create a new instance of Caption
    newCaption(): Youtube_v3.Schema.Caption;
    // Create a new instance of CaptionSnippet
    newCaptionSnippet(): Youtube_v3.Schema.CaptionSnippet;
    // Create a new instance of CdnSettings
    newCdnSettings(): Youtube_v3.Schema.CdnSettings;
    // Create a new instance of Channel
    newChannel(): Youtube_v3.Schema.Channel;
    // Create a new instance of ChannelAuditDetails
    newChannelAuditDetails(): Youtube_v3.Schema.ChannelAuditDetails;
    // Create a new instance of ChannelBannerResource
    newChannelBannerResource(): Youtube_v3.Schema.ChannelBannerResource;
    // Create a new instance of ChannelBrandingSettings
    newChannelBrandingSettings(): Youtube_v3.Schema.ChannelBrandingSettings;
    // Create a new instance of ChannelContentDetails
    newChannelContentDetails(): Youtube_v3.Schema.ChannelContentDetails;
    // Create a new instance of ChannelContentDetailsRelatedPlaylists
    newChannelContentDetailsRelatedPlaylists(): Youtube_v3.Schema.ChannelContentDetailsRelatedPlaylists;
    // Create a new instance of ChannelContentOwnerDetails
    newChannelContentOwnerDetails(): Youtube_v3.Schema.ChannelContentOwnerDetails;
    // Create a new instance of ChannelConversionPing
    newChannelConversionPing(): Youtube_v3.Schema.ChannelConversionPing;
    // Create a new instance of ChannelConversionPings
    newChannelConversionPings(): Youtube_v3.Schema.ChannelConversionPings;
    // Create a new instance of ChannelLocalization
    newChannelLocalization(): Youtube_v3.Schema.ChannelLocalization;
    // Create a new instance of ChannelProfileDetails
    newChannelProfileDetails(): Youtube_v3.Schema.ChannelProfileDetails;
    // Create a new instance of ChannelSection
    newChannelSection(): Youtube_v3.Schema.ChannelSection;
    // Create a new instance of ChannelSectionContentDetails
    newChannelSectionContentDetails(): Youtube_v3.Schema.ChannelSectionContentDetails;
    // Create a new instance of ChannelSectionLocalization
    newChannelSectionLocalization(): Youtube_v3.Schema.ChannelSectionLocalization;
    // Create a new instance of ChannelSectionSnippet
    newChannelSectionSnippet(): Youtube_v3.Schema.ChannelSectionSnippet;
    // Create a new instance of ChannelSectionTargeting
    newChannelSectionTargeting(): Youtube_v3.Schema.ChannelSectionTargeting;
    // Create a new instance of ChannelSettings
    newChannelSettings(): Youtube_v3.Schema.ChannelSettings;
    // Create a new instance of ChannelSnippet
    newChannelSnippet(): Youtube_v3.Schema.ChannelSnippet;
    // Create a new instance of ChannelStatistics
    newChannelStatistics(): Youtube_v3.Schema.ChannelStatistics;
    // Create a new instance of ChannelStatus
    newChannelStatus(): Youtube_v3.Schema.ChannelStatus;
    // Create a new instance of ChannelTopicDetails
    newChannelTopicDetails(): Youtube_v3.Schema.ChannelTopicDetails;
    // Create a new instance of Comment
    newComment(): Youtube_v3.Schema.Comment;
    // Create a new instance of CommentSnippet
    newCommentSnippet(): Youtube_v3.Schema.CommentSnippet;
    // Create a new instance of CommentThread
    newCommentThread(): Youtube_v3.Schema.CommentThread;
    // Create a new instance of CommentThreadReplies
    newCommentThreadReplies(): Youtube_v3.Schema.CommentThreadReplies;
    // Create a new instance of CommentThreadSnippet
    newCommentThreadSnippet(): Youtube_v3.Schema.CommentThreadSnippet;
    // Create a new instance of ContentRating
    newContentRating(): Youtube_v3.Schema.ContentRating;
    // Create a new instance of GeoPoint
    newGeoPoint(): Youtube_v3.Schema.GeoPoint;
    // Create a new instance of ImageSettings
    newImageSettings(): Youtube_v3.Schema.ImageSettings;
    // Create a new instance of IngestionInfo
    newIngestionInfo(): Youtube_v3.Schema.IngestionInfo;
    // Create a new instance of InvideoBranding
    newInvideoBranding(): Youtube_v3.Schema.InvideoBranding;
    // Create a new instance of InvideoPosition
    newInvideoPosition(): Youtube_v3.Schema.InvideoPosition;
    // Create a new instance of InvideoPromotion
    newInvideoPromotion(): Youtube_v3.Schema.InvideoPromotion;
    // Create a new instance of InvideoTiming
    newInvideoTiming(): Youtube_v3.Schema.InvideoTiming;
    // Create a new instance of LanguageTag
    newLanguageTag(): Youtube_v3.Schema.LanguageTag;
    // Create a new instance of LiveBroadcast
    newLiveBroadcast(): Youtube_v3.Schema.LiveBroadcast;
    // Create a new instance of LiveBroadcastContentDetails
    newLiveBroadcastContentDetails(): Youtube_v3.Schema.LiveBroadcastContentDetails;
    // Create a new instance of LiveBroadcastSnippet
    newLiveBroadcastSnippet(): Youtube_v3.Schema.LiveBroadcastSnippet;
    // Create a new instance of LiveBroadcastStatistics
    newLiveBroadcastStatistics(): Youtube_v3.Schema.LiveBroadcastStatistics;
    // Create a new instance of LiveBroadcastStatus
    newLiveBroadcastStatus(): Youtube_v3.Schema.LiveBroadcastStatus;
    // Create a new instance of LiveChatBan
    newLiveChatBan(): Youtube_v3.Schema.LiveChatBan;
    // Create a new instance of LiveChatBanSnippet
    newLiveChatBanSnippet(): Youtube_v3.Schema.LiveChatBanSnippet;
    // Create a new instance of LiveChatFanFundingEventDetails
    newLiveChatFanFundingEventDetails(): Youtube_v3.Schema.LiveChatFanFundingEventDetails;
    // Create a new instance of LiveChatMessage
    newLiveChatMessage(): Youtube_v3.Schema.LiveChatMessage;
    // Create a new instance of LiveChatMessageAuthorDetails
    newLiveChatMessageAuthorDetails(): Youtube_v3.Schema.LiveChatMessageAuthorDetails;
    // Create a new instance of LiveChatMessageDeletedDetails
    newLiveChatMessageDeletedDetails(): Youtube_v3.Schema.LiveChatMessageDeletedDetails;
    // Create a new instance of LiveChatMessageRetractedDetails
    newLiveChatMessageRetractedDetails(): Youtube_v3.Schema.LiveChatMessageRetractedDetails;
    // Create a new instance of LiveChatMessageSnippet
    newLiveChatMessageSnippet(): Youtube_v3.Schema.LiveChatMessageSnippet;
    // Create a new instance of LiveChatModerator
    newLiveChatModerator(): Youtube_v3.Schema.LiveChatModerator;
    // Create a new instance of LiveChatModeratorSnippet
    newLiveChatModeratorSnippet(): Youtube_v3.Schema.LiveChatModeratorSnippet;
    // Create a new instance of LiveChatPollClosedDetails
    newLiveChatPollClosedDetails(): Youtube_v3.Schema.LiveChatPollClosedDetails;
    // Create a new instance of LiveChatPollEditedDetails
    newLiveChatPollEditedDetails(): Youtube_v3.Schema.LiveChatPollEditedDetails;
    // Create a new instance of LiveChatPollItem
    newLiveChatPollItem(): Youtube_v3.Schema.LiveChatPollItem;
    // Create a new instance of LiveChatPollOpenedDetails
    newLiveChatPollOpenedDetails(): Youtube_v3.Schema.LiveChatPollOpenedDetails;
    // Create a new instance of LiveChatPollVotedDetails
    newLiveChatPollVotedDetails(): Youtube_v3.Schema.LiveChatPollVotedDetails;
    // Create a new instance of LiveChatSuperChatDetails
    newLiveChatSuperChatDetails(): Youtube_v3.Schema.LiveChatSuperChatDetails;
    // Create a new instance of LiveChatSuperStickerDetails
    newLiveChatSuperStickerDetails(): Youtube_v3.Schema.LiveChatSuperStickerDetails;
    // Create a new instance of LiveChatTextMessageDetails
    newLiveChatTextMessageDetails(): Youtube_v3.Schema.LiveChatTextMessageDetails;
    // Create a new instance of LiveChatUserBannedMessageDetails
    newLiveChatUserBannedMessageDetails(): Youtube_v3.Schema.LiveChatUserBannedMessageDetails;
    // Create a new instance of LiveStream
    newLiveStream(): Youtube_v3.Schema.LiveStream;
    // Create a new instance of LiveStreamConfigurationIssue
    newLiveStreamConfigurationIssue(): Youtube_v3.Schema.LiveStreamConfigurationIssue;
    // Create a new instance of LiveStreamContentDetails
    newLiveStreamContentDetails(): Youtube_v3.Schema.LiveStreamContentDetails;
    // Create a new instance of LiveStreamHealthStatus
    newLiveStreamHealthStatus(): Youtube_v3.Schema.LiveStreamHealthStatus;
    // Create a new instance of LiveStreamSnippet
    newLiveStreamSnippet(): Youtube_v3.Schema.LiveStreamSnippet;
    // Create a new instance of LiveStreamStatus
    newLiveStreamStatus(): Youtube_v3.Schema.LiveStreamStatus;
    // Create a new instance of LocalizedProperty
    newLocalizedProperty(): Youtube_v3.Schema.LocalizedProperty;
    // Create a new instance of LocalizedString
    newLocalizedString(): Youtube_v3.Schema.LocalizedString;
    // Create a new instance of MonitorStreamInfo
    newMonitorStreamInfo(): Youtube_v3.Schema.MonitorStreamInfo;
    // Create a new instance of Playlist
    newPlaylist(): Youtube_v3.Schema.Playlist;
    // Create a new instance of PlaylistContentDetails
    newPlaylistContentDetails(): Youtube_v3.Schema.PlaylistContentDetails;
    // Create a new instance of PlaylistItem
    newPlaylistItem(): Youtube_v3.Schema.PlaylistItem;
    // Create a new instance of PlaylistItemContentDetails
    newPlaylistItemContentDetails(): Youtube_v3.Schema.PlaylistItemContentDetails;
    // Create a new instance of PlaylistItemSnippet
    newPlaylistItemSnippet(): Youtube_v3.Schema.PlaylistItemSnippet;
    // Create a new instance of PlaylistItemStatus
    newPlaylistItemStatus(): Youtube_v3.Schema.PlaylistItemStatus;
    // Create a new instance of PlaylistLocalization
    newPlaylistLocalization(): Youtube_v3.Schema.PlaylistLocalization;
    // Create a new instance of PlaylistPlayer
    newPlaylistPlayer(): Youtube_v3.Schema.PlaylistPlayer;
    // Create a new instance of PlaylistSnippet
    newPlaylistSnippet(): Youtube_v3.Schema.PlaylistSnippet;
    // Create a new instance of PlaylistStatus
    newPlaylistStatus(): Youtube_v3.Schema.PlaylistStatus;
    // Create a new instance of PromotedItem
    newPromotedItem(): Youtube_v3.Schema.PromotedItem;
    // Create a new instance of PromotedItemId
    newPromotedItemId(): Youtube_v3.Schema.PromotedItemId;
    // Create a new instance of PropertyValue
    newPropertyValue(): Youtube_v3.Schema.PropertyValue;
    // Create a new instance of ResourceId
    newResourceId(): Youtube_v3.Schema.ResourceId;
    // Create a new instance of Subscription
    newSubscription(): Youtube_v3.Schema.Subscription;
    // Create a new instance of SubscriptionContentDetails
    newSubscriptionContentDetails(): Youtube_v3.Schema.SubscriptionContentDetails;
    // Create a new instance of SubscriptionSnippet
    newSubscriptionSnippet(): Youtube_v3.Schema.SubscriptionSnippet;
    // Create a new instance of SubscriptionSubscriberSnippet
    newSubscriptionSubscriberSnippet(): Youtube_v3.Schema.SubscriptionSubscriberSnippet;
    // Create a new instance of SuperStickerMetadata
    newSuperStickerMetadata(): Youtube_v3.Schema.SuperStickerMetadata;
    // Create a new instance of Thumbnail
    newThumbnail(): Youtube_v3.Schema.Thumbnail;
    // Create a new instance of ThumbnailDetails
    newThumbnailDetails(): Youtube_v3.Schema.ThumbnailDetails;
    // Create a new instance of Video
    newVideo(): Youtube_v3.Schema.Video;
    // Create a new instance of VideoAbuseReport
    newVideoAbuseReport(): Youtube_v3.Schema.VideoAbuseReport;
    // Create a new instance of VideoAgeGating
    newVideoAgeGating(): Youtube_v3.Schema.VideoAgeGating;
    // Create a new instance of VideoContentDetails
    newVideoContentDetails(): Youtube_v3.Schema.VideoContentDetails;
    // Create a new instance of VideoContentDetailsRegionRestriction
    newVideoContentDetailsRegionRestriction(): Youtube_v3.Schema.VideoContentDetailsRegionRestriction;
    // Create a new instance of VideoFileDetails
    newVideoFileDetails(): Youtube_v3.Schema.VideoFileDetails;
    // Create a new instance of VideoFileDetailsAudioStream
    newVideoFileDetailsAudioStream(): Youtube_v3.Schema.VideoFileDetailsAudioStream;
    // Create a new instance of VideoFileDetailsVideoStream
    newVideoFileDetailsVideoStream(): Youtube_v3.Schema.VideoFileDetailsVideoStream;
    // Create a new instance of VideoLiveStreamingDetails
    newVideoLiveStreamingDetails(): Youtube_v3.Schema.VideoLiveStreamingDetails;
    // Create a new instance of VideoLocalization
    newVideoLocalization(): Youtube_v3.Schema.VideoLocalization;
    // Create a new instance of VideoMonetizationDetails
    newVideoMonetizationDetails(): Youtube_v3.Schema.VideoMonetizationDetails;
    // Create a new instance of VideoPlayer
    newVideoPlayer(): Youtube_v3.Schema.VideoPlayer;
    // Create a new instance of VideoProcessingDetails
    newVideoProcessingDetails(): Youtube_v3.Schema.VideoProcessingDetails;
    // Create a new instance of VideoProcessingDetailsProcessingProgress
    newVideoProcessingDetailsProcessingProgress(): Youtube_v3.Schema.VideoProcessingDetailsProcessingProgress;
    // Create a new instance of VideoProjectDetails
    newVideoProjectDetails(): Youtube_v3.Schema.VideoProjectDetails;
    // Create a new instance of VideoRecordingDetails
    newVideoRecordingDetails(): Youtube_v3.Schema.VideoRecordingDetails;
    // Create a new instance of VideoSnippet
    newVideoSnippet(): Youtube_v3.Schema.VideoSnippet;
    // Create a new instance of VideoStatistics
    newVideoStatistics(): Youtube_v3.Schema.VideoStatistics;
    // Create a new instance of VideoStatus
    newVideoStatus(): Youtube_v3.Schema.VideoStatus;
    // Create a new instance of VideoSuggestions
    newVideoSuggestions(): Youtube_v3.Schema.VideoSuggestions;
    // Create a new instance of VideoSuggestionsTagSuggestion
    newVideoSuggestionsTagSuggestion(): Youtube_v3.Schema.VideoSuggestionsTagSuggestion;
    // Create a new instance of VideoTopicDetails
    newVideoTopicDetails(): Youtube_v3.Schema.VideoTopicDetails;
    // Create a new instance of WatchSettings
    newWatchSettings(): Youtube_v3.Schema.WatchSettings;
  }
}

declare var Youtube_v3: GoogleAppsScript.Youtube_v3;