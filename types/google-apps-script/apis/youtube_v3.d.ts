// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace YouTube {
    namespace Collection {
      interface ActivitiesCollection {
        // Posts a bulletin for a specific channel. (The user submitting the request must be authorized to act on the channel's behalf.)
        // Note: Even though an activity resource can contain information about actions like a user rating a video or marking a video as a favorite, you need to use other API methods to generate those activity resources. For example, you would use the API's videos.rate() method to rate a video and the playlistItems.insert() method to mark a video as a favorite.
        insert(resource: Schema.Activity, part: string): YouTube.Schema.Activity;
        // Returns a list of channel activity events that match the request criteria. For example, you can retrieve events associated with a particular channel, events associated with the user's subscriptions and Google+ friends, or the YouTube home page feed, which is customized for each user.
        list(part: string): YouTube.Schema.ActivityListResponse;
        // Returns a list of channel activity events that match the request criteria. For example, you can retrieve events associated with a particular channel, events associated with the user's subscriptions and Google+ friends, or the YouTube home page feed, which is customized for each user.
        list(part: string, optionalArgs: object): YouTube.Schema.ActivityListResponse;
      }
      interface CaptionsCollection {
        // Downloads a caption track. The caption track is returned in its original format unless the request specifies a value for the tfmt parameter and in its original language unless the request specifies a value for the tlang parameter.
        download(id: string): void;
        // Downloads a caption track. The caption track is returned in its original format unless the request specifies a value for the tfmt parameter and in its original language unless the request specifies a value for the tlang parameter.
        download(id: string, optionalArgs: object): void;
        // Uploads a caption track.
        insert(resource: Schema.Caption, part: string): YouTube.Schema.Caption;
        // Uploads a caption track.
        insert(resource: Schema.Caption, part: string, mediaData: any): YouTube.Schema.Caption;
        // Uploads a caption track.
        insert(resource: Schema.Caption, part: string, mediaData: any, optionalArgs: object): YouTube.Schema.Caption;
        // Returns a list of caption tracks that are associated with a specified video. Note that the API response does not contain the actual captions and that the captions.download method provides the ability to retrieve a caption track.
        list(part: string, videoId: string): YouTube.Schema.CaptionListResponse;
        // Returns a list of caption tracks that are associated with a specified video. Note that the API response does not contain the actual captions and that the captions.download method provides the ability to retrieve a caption track.
        list(part: string, videoId: string, optionalArgs: object): YouTube.Schema.CaptionListResponse;
        // Deletes a specified caption track.
        remove(id: string): void;
        // Deletes a specified caption track.
        remove(id: string, optionalArgs: object): void;
        // Updates a caption track. When updating a caption track, you can change the track's draft status, upload a new caption file for the track, or both.
        update(resource: Schema.Caption, part: string): YouTube.Schema.Caption;
        // Updates a caption track. When updating a caption track, you can change the track's draft status, upload a new caption file for the track, or both.
        update(resource: Schema.Caption, part: string, mediaData: any): YouTube.Schema.Caption;
        // Updates a caption track. When updating a caption track, you can change the track's draft status, upload a new caption file for the track, or both.
        update(resource: Schema.Caption, part: string, mediaData: any, optionalArgs: object): YouTube.Schema.Caption;
      }
      interface ChannelBannersCollection {
        // Uploads a channel banner image to YouTube. This method represents the first two steps in a three-step process to update the banner image for a channel:
        // - Call the channelBanners.insert method to upload the binary image data to YouTube. The image must have a 16:9 aspect ratio and be at least 2120x1192 pixels.
        // - Extract the url property's value from the response that the API returns for step 1.
        // - Call the channels.update method to update the channel's branding settings. Set the brandingSettings.image.bannerExternalUrl property's value to the URL obtained in step 2.
        insert(resource: Schema.ChannelBannerResource): YouTube.Schema.ChannelBannerResource;
        // Uploads a channel banner image to YouTube. This method represents the first two steps in a three-step process to update the banner image for a channel:
        // - Call the channelBanners.insert method to upload the binary image data to YouTube. The image must have a 16:9 aspect ratio and be at least 2120x1192 pixels.
        // - Extract the url property's value from the response that the API returns for step 1.
        // - Call the channels.update method to update the channel's branding settings. Set the brandingSettings.image.bannerExternalUrl property's value to the URL obtained in step 2.
        insert(resource: Schema.ChannelBannerResource, mediaData: any): YouTube.Schema.ChannelBannerResource;
        // Uploads a channel banner image to YouTube. This method represents the first two steps in a three-step process to update the banner image for a channel:
        // - Call the channelBanners.insert method to upload the binary image data to YouTube. The image must have a 16:9 aspect ratio and be at least 2120x1192 pixels.
        // - Extract the url property's value from the response that the API returns for step 1.
        // - Call the channels.update method to update the channel's branding settings. Set the brandingSettings.image.bannerExternalUrl property's value to the URL obtained in step 2.
        insert(resource: Schema.ChannelBannerResource, mediaData: any, optionalArgs: object): YouTube.Schema.ChannelBannerResource;
      }
      interface ChannelSectionsCollection {
        // Adds a channelSection for the authenticated user's channel.
        insert(resource: Schema.ChannelSection, part: string): YouTube.Schema.ChannelSection;
        // Adds a channelSection for the authenticated user's channel.
        insert(resource: Schema.ChannelSection, part: string, optionalArgs: object): YouTube.Schema.ChannelSection;
        // Returns channelSection resources that match the API request criteria.
        list(part: string): YouTube.Schema.ChannelSectionListResponse;
        // Returns channelSection resources that match the API request criteria.
        list(part: string, optionalArgs: object): YouTube.Schema.ChannelSectionListResponse;
        // Deletes a channelSection.
        remove(id: string): void;
        // Deletes a channelSection.
        remove(id: string, optionalArgs: object): void;
        // Update a channelSection.
        update(resource: Schema.ChannelSection, part: string): YouTube.Schema.ChannelSection;
        // Update a channelSection.
        update(resource: Schema.ChannelSection, part: string, optionalArgs: object): YouTube.Schema.ChannelSection;
      }
      interface ChannelsCollection {
        // Returns a collection of zero or more channel resources that match the request criteria.
        list(part: string): YouTube.Schema.ChannelListResponse;
        // Returns a collection of zero or more channel resources that match the request criteria.
        list(part: string, optionalArgs: object): YouTube.Schema.ChannelListResponse;
        // Updates a channel's metadata. Note that this method currently only supports updates to the channel resource's brandingSettings and invideoPromotion objects and their child properties.
        update(resource: Schema.Channel, part: string): YouTube.Schema.Channel;
        // Updates a channel's metadata. Note that this method currently only supports updates to the channel resource's brandingSettings and invideoPromotion objects and their child properties.
        update(resource: Schema.Channel, part: string, optionalArgs: object): YouTube.Schema.Channel;
      }
      interface CommentThreadsCollection {
        // Creates a new top-level comment. To add a reply to an existing comment, use the comments.insert method instead.
        insert(resource: Schema.CommentThread, part: string): YouTube.Schema.CommentThread;
        // Returns a list of comment threads that match the API request parameters.
        list(part: string): YouTube.Schema.CommentThreadListResponse;
        // Returns a list of comment threads that match the API request parameters.
        list(part: string, optionalArgs: object): YouTube.Schema.CommentThreadListResponse;
        // Modifies the top-level comment in a comment thread.
        update(resource: Schema.CommentThread, part: string): YouTube.Schema.CommentThread;
      }
      interface CommentsCollection {
        // Creates a reply to an existing comment. Note: To create a top-level comment, use the commentThreads.insert method.
        insert(resource: Schema.Comment, part: string): YouTube.Schema.Comment;
        // Returns a list of comments that match the API request parameters.
        list(part: string): YouTube.Schema.CommentListResponse;
        // Returns a list of comments that match the API request parameters.
        list(part: string, optionalArgs: object): YouTube.Schema.CommentListResponse;
        // Expresses the caller's opinion that one or more comments should be flagged as spam.
        markAsSpam(id: string): void;
        // Deletes a comment.
        remove(id: string): void;
        // Sets the moderation status of one or more comments. The API request must be authorized by the owner of the channel or video associated with the comments.
        setModerationStatus(id: string, moderationStatus: string): void;
        // Sets the moderation status of one or more comments. The API request must be authorized by the owner of the channel or video associated with the comments.
        setModerationStatus(id: string, moderationStatus: string, optionalArgs: object): void;
        // Modifies a comment.
        update(resource: Schema.Comment, part: string): YouTube.Schema.Comment;
      }
      interface GuideCategoriesCollection {
        // Returns a list of categories that can be associated with YouTube channels.
        list(part: string): YouTube.Schema.GuideCategoryListResponse;
        // Returns a list of categories that can be associated with YouTube channels.
        list(part: string, optionalArgs: object): YouTube.Schema.GuideCategoryListResponse;
      }
      interface I18nLanguagesCollection {
        // Returns a list of application languages that the YouTube website supports.
        list(part: string): YouTube.Schema.I18nLanguageListResponse;
        // Returns a list of application languages that the YouTube website supports.
        list(part: string, optionalArgs: object): YouTube.Schema.I18nLanguageListResponse;
      }
      interface I18nRegionsCollection {
        // Returns a list of content regions that the YouTube website supports.
        list(part: string): YouTube.Schema.I18nRegionListResponse;
        // Returns a list of content regions that the YouTube website supports.
        list(part: string, optionalArgs: object): YouTube.Schema.I18nRegionListResponse;
      }
      interface LiveBroadcastsCollection {
        // Binds a YouTube broadcast to a stream or removes an existing binding between a broadcast and a stream. A broadcast can only be bound to one video stream, though a video stream may be bound to more than one broadcast.
        bind(id: string, part: string): YouTube.Schema.LiveBroadcast;
        // Binds a YouTube broadcast to a stream or removes an existing binding between a broadcast and a stream. A broadcast can only be bound to one video stream, though a video stream may be bound to more than one broadcast.
        bind(id: string, part: string, optionalArgs: object): YouTube.Schema.LiveBroadcast;
        // Controls the settings for a slate that can be displayed in the broadcast stream.
        control(id: string, part: string): YouTube.Schema.LiveBroadcast;
        // Controls the settings for a slate that can be displayed in the broadcast stream.
        control(id: string, part: string, optionalArgs: object): YouTube.Schema.LiveBroadcast;
        // Creates a broadcast.
        insert(resource: Schema.LiveBroadcast, part: string): YouTube.Schema.LiveBroadcast;
        // Creates a broadcast.
        insert(resource: Schema.LiveBroadcast, part: string, optionalArgs: object): YouTube.Schema.LiveBroadcast;
        // Returns a list of YouTube broadcasts that match the API request parameters.
        list(part: string): YouTube.Schema.LiveBroadcastListResponse;
        // Returns a list of YouTube broadcasts that match the API request parameters.
        list(part: string, optionalArgs: object): YouTube.Schema.LiveBroadcastListResponse;
        // Deletes a broadcast.
        remove(id: string): void;
        // Deletes a broadcast.
        remove(id: string, optionalArgs: object): void;
        // Changes the status of a YouTube live broadcast and initiates any processes associated with the new status. For example, when you transition a broadcast's status to testing, YouTube starts to transmit video to that broadcast's monitor stream. Before calling this method, you should confirm that the value of the status.streamStatus property for the stream bound to your broadcast is active.
        transition(broadcastStatus: string, id: string, part: string): YouTube.Schema.LiveBroadcast;
        // Changes the status of a YouTube live broadcast and initiates any processes associated with the new status. For example, when you transition a broadcast's status to testing, YouTube starts to transmit video to that broadcast's monitor stream. Before calling this method, you should confirm that the value of the status.streamStatus property for the stream bound to your broadcast is active.
        transition(broadcastStatus: string, id: string, part: string, optionalArgs: object): YouTube.Schema.LiveBroadcast;
        // Updates a broadcast. For example, you could modify the broadcast settings defined in the liveBroadcast resource's contentDetails object.
        update(resource: Schema.LiveBroadcast, part: string): YouTube.Schema.LiveBroadcast;
        // Updates a broadcast. For example, you could modify the broadcast settings defined in the liveBroadcast resource's contentDetails object.
        update(resource: Schema.LiveBroadcast, part: string, optionalArgs: object): YouTube.Schema.LiveBroadcast;
      }
      interface LiveChatBansCollection {
        // Adds a new ban to the chat.
        insert(resource: Schema.LiveChatBan, part: string): YouTube.Schema.LiveChatBan;
        // Removes a chat ban.
        remove(id: string): void;
      }
      interface LiveChatMessagesCollection {
        // Adds a message to a live chat.
        insert(resource: Schema.LiveChatMessage, part: string): YouTube.Schema.LiveChatMessage;
        // Lists live chat messages for a specific chat.
        list(liveChatId: string, part: string): YouTube.Schema.LiveChatMessageListResponse;
        // Lists live chat messages for a specific chat.
        list(liveChatId: string, part: string, optionalArgs: object): YouTube.Schema.LiveChatMessageListResponse;
        // Deletes a chat message.
        remove(id: string): void;
      }
      interface LiveChatModeratorsCollection {
        // Adds a new moderator for the chat.
        insert(resource: Schema.LiveChatModerator, part: string): YouTube.Schema.LiveChatModerator;
        // Lists moderators for a live chat.
        list(liveChatId: string, part: string): YouTube.Schema.LiveChatModeratorListResponse;
        // Lists moderators for a live chat.
        list(liveChatId: string, part: string, optionalArgs: object): YouTube.Schema.LiveChatModeratorListResponse;
        // Removes a chat moderator.
        remove(id: string): void;
      }
      interface LiveStreamsCollection {
        // Creates a video stream. The stream enables you to send your video to YouTube, which can then broadcast the video to your audience.
        insert(resource: Schema.LiveStream, part: string): YouTube.Schema.LiveStream;
        // Creates a video stream. The stream enables you to send your video to YouTube, which can then broadcast the video to your audience.
        insert(resource: Schema.LiveStream, part: string, optionalArgs: object): YouTube.Schema.LiveStream;
        // Returns a list of video streams that match the API request parameters.
        list(part: string): YouTube.Schema.LiveStreamListResponse;
        // Returns a list of video streams that match the API request parameters.
        list(part: string, optionalArgs: object): YouTube.Schema.LiveStreamListResponse;
        // Deletes a video stream.
        remove(id: string): void;
        // Deletes a video stream.
        remove(id: string, optionalArgs: object): void;
        // Updates a video stream. If the properties that you want to change cannot be updated, then you need to create a new stream with the proper settings.
        update(resource: Schema.LiveStream, part: string): YouTube.Schema.LiveStream;
        // Updates a video stream. If the properties that you want to change cannot be updated, then you need to create a new stream with the proper settings.
        update(resource: Schema.LiveStream, part: string, optionalArgs: object): YouTube.Schema.LiveStream;
      }
      interface PlaylistItemsCollection {
        // Adds a resource to a playlist.
        insert(resource: Schema.PlaylistItem, part: string): YouTube.Schema.PlaylistItem;
        // Adds a resource to a playlist.
        insert(resource: Schema.PlaylistItem, part: string, optionalArgs: object): YouTube.Schema.PlaylistItem;
        // Returns a collection of playlist items that match the API request parameters. You can retrieve all of the playlist items in a specified playlist or retrieve one or more playlist items by their unique IDs.
        list(part: string): YouTube.Schema.PlaylistItemListResponse;
        // Returns a collection of playlist items that match the API request parameters. You can retrieve all of the playlist items in a specified playlist or retrieve one or more playlist items by their unique IDs.
        list(part: string, optionalArgs: object): YouTube.Schema.PlaylistItemListResponse;
        // Deletes a playlist item.
        remove(id: string): void;
        // Deletes a playlist item.
        remove(id: string, optionalArgs: object): void;
        // Modifies a playlist item. For example, you could update the item's position in the playlist.
        update(resource: Schema.PlaylistItem, part: string): YouTube.Schema.PlaylistItem;
        // Modifies a playlist item. For example, you could update the item's position in the playlist.
        update(resource: Schema.PlaylistItem, part: string, optionalArgs: object): YouTube.Schema.PlaylistItem;
      }
      interface PlaylistsCollection {
        // Creates a playlist.
        insert(resource: Schema.Playlist, part: string): YouTube.Schema.Playlist;
        // Creates a playlist.
        insert(resource: Schema.Playlist, part: string, optionalArgs: object): YouTube.Schema.Playlist;
        // Returns a collection of playlists that match the API request parameters. For example, you can retrieve all playlists that the authenticated user owns, or you can retrieve one or more playlists by their unique IDs.
        list(part: string): YouTube.Schema.PlaylistListResponse;
        // Returns a collection of playlists that match the API request parameters. For example, you can retrieve all playlists that the authenticated user owns, or you can retrieve one or more playlists by their unique IDs.
        list(part: string, optionalArgs: object): YouTube.Schema.PlaylistListResponse;
        // Deletes a playlist.
        remove(id: string): void;
        // Deletes a playlist.
        remove(id: string, optionalArgs: object): void;
        // Modifies a playlist. For example, you could change a playlist's title, description, or privacy status.
        update(resource: Schema.Playlist, part: string): YouTube.Schema.Playlist;
        // Modifies a playlist. For example, you could change a playlist's title, description, or privacy status.
        update(resource: Schema.Playlist, part: string, optionalArgs: object): YouTube.Schema.Playlist;
      }
      interface SearchCollection {
        // Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource.
        list(part: string): YouTube.Schema.SearchListResponse;
        // Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource.
        list(part: string, optionalArgs: object): YouTube.Schema.SearchListResponse;
      }
      interface SponsorsCollection {
        // Lists sponsors for a channel.
        list(part: string): YouTube.Schema.SponsorListResponse;
        // Lists sponsors for a channel.
        list(part: string, optionalArgs: object): YouTube.Schema.SponsorListResponse;
      }
      interface SubscriptionsCollection {
        // Adds a subscription for the authenticated user's channel.
        insert(resource: Schema.Subscription, part: string): YouTube.Schema.Subscription;
        // Returns subscription resources that match the API request criteria.
        list(part: string): YouTube.Schema.SubscriptionListResponse;
        // Returns subscription resources that match the API request criteria.
        list(part: string, optionalArgs: object): YouTube.Schema.SubscriptionListResponse;
        // Deletes a subscription.
        remove(id: string): void;
      }
      interface SuperChatEventsCollection {
        // Lists Super Chat events for a channel.
        list(part: string): YouTube.Schema.SuperChatEventListResponse;
        // Lists Super Chat events for a channel.
        list(part: string, optionalArgs: object): YouTube.Schema.SuperChatEventListResponse;
      }
      interface ThumbnailsCollection {
        // Uploads a custom video thumbnail to YouTube and sets it for a video.
        set(videoId: string): YouTube.Schema.ThumbnailSetResponse;
        // Uploads a custom video thumbnail to YouTube and sets it for a video.
        set(videoId: string, mediaData: any): YouTube.Schema.ThumbnailSetResponse;
        // Uploads a custom video thumbnail to YouTube and sets it for a video.
        set(videoId: string, mediaData: any, optionalArgs: object): YouTube.Schema.ThumbnailSetResponse;
      }
      interface VideoAbuseReportReasonsCollection {
        // Returns a list of abuse reasons that can be used for reporting abusive videos.
        list(part: string): YouTube.Schema.VideoAbuseReportReasonListResponse;
        // Returns a list of abuse reasons that can be used for reporting abusive videos.
        list(part: string, optionalArgs: object): YouTube.Schema.VideoAbuseReportReasonListResponse;
      }
      interface VideoCategoriesCollection {
        // Returns a list of categories that can be associated with YouTube videos.
        list(part: string): YouTube.Schema.VideoCategoryListResponse;
        // Returns a list of categories that can be associated with YouTube videos.
        list(part: string, optionalArgs: object): YouTube.Schema.VideoCategoryListResponse;
      }
      interface VideosCollection {
        // Retrieves the ratings that the authorized user gave to a list of specified videos.
        getRating(id: string): YouTube.Schema.VideoGetRatingResponse;
        // Retrieves the ratings that the authorized user gave to a list of specified videos.
        getRating(id: string, optionalArgs: object): YouTube.Schema.VideoGetRatingResponse;
        // Uploads a video to YouTube and optionally sets the video's metadata.
        insert(resource: Schema.Video, part: string): YouTube.Schema.Video;
        // Uploads a video to YouTube and optionally sets the video's metadata.
        insert(resource: Schema.Video, part: string, mediaData: any): YouTube.Schema.Video;
        // Uploads a video to YouTube and optionally sets the video's metadata.
        insert(resource: Schema.Video, part: string, mediaData: any, optionalArgs: object): YouTube.Schema.Video;
        // Returns a list of videos that match the API request parameters.
        list(part: string): YouTube.Schema.VideoListResponse;
        // Returns a list of videos that match the API request parameters.
        list(part: string, optionalArgs: object): YouTube.Schema.VideoListResponse;
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
        update(resource: Schema.Video, part: string): YouTube.Schema.Video;
        // Updates a video's metadata.
        update(resource: Schema.Video, part: string, optionalArgs: object): YouTube.Schema.Video;
      }
      interface WatermarksCollection {
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
      interface AccessPolicy {
        allowed?: boolean;
        exception?: string[];
      }
      interface Activity {
        contentDetails?: YouTube.Schema.ActivityContentDetails;
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YouTube.Schema.ActivitySnippet;
      }
      interface ActivityContentDetails {
        bulletin?: YouTube.Schema.ActivityContentDetailsBulletin;
        channelItem?: YouTube.Schema.ActivityContentDetailsChannelItem;
        comment?: YouTube.Schema.ActivityContentDetailsComment;
        favorite?: YouTube.Schema.ActivityContentDetailsFavorite;
        like?: YouTube.Schema.ActivityContentDetailsLike;
        playlistItem?: YouTube.Schema.ActivityContentDetailsPlaylistItem;
        promotedItem?: YouTube.Schema.ActivityContentDetailsPromotedItem;
        recommendation?: YouTube.Schema.ActivityContentDetailsRecommendation;
        social?: YouTube.Schema.ActivityContentDetailsSocial;
        subscription?: YouTube.Schema.ActivityContentDetailsSubscription;
        upload?: YouTube.Schema.ActivityContentDetailsUpload;
      }
      interface ActivityContentDetailsBulletin {
        resourceId?: YouTube.Schema.ResourceId;
      }
      interface ActivityContentDetailsChannelItem {
        resourceId?: YouTube.Schema.ResourceId;
      }
      interface ActivityContentDetailsComment {
        resourceId?: YouTube.Schema.ResourceId;
      }
      interface ActivityContentDetailsFavorite {
        resourceId?: YouTube.Schema.ResourceId;
      }
      interface ActivityContentDetailsLike {
        resourceId?: YouTube.Schema.ResourceId;
      }
      interface ActivityContentDetailsPlaylistItem {
        playlistId?: string;
        playlistItemId?: string;
        resourceId?: YouTube.Schema.ResourceId;
      }
      interface ActivityContentDetailsPromotedItem {
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
      interface ActivityContentDetailsRecommendation {
        reason?: string;
        resourceId?: YouTube.Schema.ResourceId;
        seedResourceId?: YouTube.Schema.ResourceId;
      }
      interface ActivityContentDetailsSocial {
        author?: string;
        imageUrl?: string;
        referenceUrl?: string;
        resourceId?: YouTube.Schema.ResourceId;
        type?: string;
      }
      interface ActivityContentDetailsSubscription {
        resourceId?: YouTube.Schema.ResourceId;
      }
      interface ActivityContentDetailsUpload {
        videoId?: string;
      }
      interface ActivityListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.Activity[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YouTube.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      interface ActivitySnippet {
        channelId?: string;
        channelTitle?: string;
        description?: string;
        groupId?: string;
        publishedAt?: string;
        thumbnails?: YouTube.Schema.ThumbnailDetails;
        title?: string;
        type?: string;
      }
      interface Caption {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YouTube.Schema.CaptionSnippet;
      }
      interface CaptionListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.Caption[];
        kind?: string;
        visitorId?: string;
      }
      interface CaptionSnippet {
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
      interface CdnSettings {
        format?: string;
        frameRate?: string;
        ingestionInfo?: YouTube.Schema.IngestionInfo;
        ingestionType?: string;
        resolution?: string;
      }
      interface Channel {
        auditDetails?: YouTube.Schema.ChannelAuditDetails;
        brandingSettings?: YouTube.Schema.ChannelBrandingSettings;
        contentDetails?: YouTube.Schema.ChannelContentDetails;
        contentOwnerDetails?: YouTube.Schema.ChannelContentOwnerDetails;
        conversionPings?: YouTube.Schema.ChannelConversionPings;
        etag?: string;
        id?: string;
        invideoPromotion?: YouTube.Schema.InvideoPromotion;
        kind?: string;
        localizations?: object;
        snippet?: YouTube.Schema.ChannelSnippet;
        statistics?: YouTube.Schema.ChannelStatistics;
        status?: YouTube.Schema.ChannelStatus;
        topicDetails?: YouTube.Schema.ChannelTopicDetails;
      }
      interface ChannelAuditDetails {
        communityGuidelinesGoodStanding?: boolean;
        contentIdClaimsGoodStanding?: boolean;
        copyrightStrikesGoodStanding?: boolean;
      }
      interface ChannelBannerResource {
        etag?: string;
        kind?: string;
        url?: string;
      }
      interface ChannelBrandingSettings {
        channel?: YouTube.Schema.ChannelSettings;
        hints?: YouTube.Schema.PropertyValue[];
        image?: YouTube.Schema.ImageSettings;
        watch?: YouTube.Schema.WatchSettings;
      }
      interface ChannelContentDetails {
        relatedPlaylists?: YouTube.Schema.ChannelContentDetailsRelatedPlaylists;
      }
      interface ChannelContentDetailsRelatedPlaylists {
        favorites?: string;
        likes?: string;
        uploads?: string;
        watchHistory?: string;
        watchLater?: string;
      }
      interface ChannelContentOwnerDetails {
        contentOwner?: string;
        timeLinked?: string;
      }
      interface ChannelConversionPing {
        context?: string;
        conversionUrl?: string;
      }
      interface ChannelConversionPings {
        pings?: YouTube.Schema.ChannelConversionPing[];
      }
      interface ChannelListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.Channel[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YouTube.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      interface ChannelLocalization {
        description?: string;
        title?: string;
      }
      interface ChannelProfileDetails {
        channelId?: string;
        channelUrl?: string;
        displayName?: string;
        profileImageUrl?: string;
      }
      interface ChannelSection {
        contentDetails?: YouTube.Schema.ChannelSectionContentDetails;
        etag?: string;
        id?: string;
        kind?: string;
        localizations?: object;
        snippet?: YouTube.Schema.ChannelSectionSnippet;
        targeting?: YouTube.Schema.ChannelSectionTargeting;
      }
      interface ChannelSectionContentDetails {
        channels?: string[];
        playlists?: string[];
      }
      interface ChannelSectionListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.ChannelSection[];
        kind?: string;
        visitorId?: string;
      }
      interface ChannelSectionLocalization {
        title?: string;
      }
      interface ChannelSectionSnippet {
        channelId?: string;
        defaultLanguage?: string;
        localized?: YouTube.Schema.ChannelSectionLocalization;
        position?: number;
        style?: string;
        title?: string;
        type?: string;
      }
      interface ChannelSectionTargeting {
        countries?: string[];
        languages?: string[];
        regions?: string[];
      }
      interface ChannelSettings {
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
      interface ChannelSnippet {
        country?: string;
        customUrl?: string;
        defaultLanguage?: string;
        description?: string;
        localized?: YouTube.Schema.ChannelLocalization;
        publishedAt?: string;
        thumbnails?: YouTube.Schema.ThumbnailDetails;
        title?: string;
      }
      interface ChannelStatistics {
        commentCount?: string;
        hiddenSubscriberCount?: boolean;
        subscriberCount?: string;
        videoCount?: string;
        viewCount?: string;
      }
      interface ChannelStatus {
        isLinked?: boolean;
        longUploadsStatus?: string;
        privacyStatus?: string;
      }
      interface ChannelTopicDetails {
        topicCategories?: string[];
        topicIds?: string[];
      }
      interface Comment {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YouTube.Schema.CommentSnippet;
      }
      interface CommentListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.Comment[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YouTube.Schema.PageInfo;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      interface CommentSnippet {
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
      interface CommentThread {
        etag?: string;
        id?: string;
        kind?: string;
        replies?: YouTube.Schema.CommentThreadReplies;
        snippet?: YouTube.Schema.CommentThreadSnippet;
      }
      interface CommentThreadListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.CommentThread[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YouTube.Schema.PageInfo;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      interface CommentThreadReplies {
        comments?: YouTube.Schema.Comment[];
      }
      interface CommentThreadSnippet {
        canReply?: boolean;
        channelId?: string;
        isPublic?: boolean;
        topLevelComment?: YouTube.Schema.Comment;
        totalReplyCount?: number;
        videoId?: string;
      }
      interface ContentRating {
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
      interface GeoPoint {
        altitude?: number;
        latitude?: number;
        longitude?: number;
      }
      interface GuideCategory {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YouTube.Schema.GuideCategorySnippet;
      }
      interface GuideCategoryListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.GuideCategory[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YouTube.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      interface GuideCategorySnippet {
        channelId?: string;
        title?: string;
      }
      interface I18nLanguage {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YouTube.Schema.I18nLanguageSnippet;
      }
      interface I18nLanguageListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.I18nLanguage[];
        kind?: string;
        visitorId?: string;
      }
      interface I18nLanguageSnippet {
        hl?: string;
        name?: string;
      }
      interface I18nRegion {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YouTube.Schema.I18nRegionSnippet;
      }
      interface I18nRegionListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.I18nRegion[];
        kind?: string;
        visitorId?: string;
      }
      interface I18nRegionSnippet {
        gl?: string;
        name?: string;
      }
      interface ImageSettings {
        backgroundImageUrl?: YouTube.Schema.LocalizedProperty;
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
        largeBrandedBannerImageImapScript?: YouTube.Schema.LocalizedProperty;
        largeBrandedBannerImageUrl?: YouTube.Schema.LocalizedProperty;
        smallBrandedBannerImageImapScript?: YouTube.Schema.LocalizedProperty;
        smallBrandedBannerImageUrl?: YouTube.Schema.LocalizedProperty;
        trackingImageUrl?: string;
        watchIconImageUrl?: string;
      }
      interface IngestionInfo {
        backupIngestionAddress?: string;
        ingestionAddress?: string;
        streamName?: string;
      }
      interface InvideoBranding {
        imageBytes?: string;
        imageUrl?: string;
        position?: YouTube.Schema.InvideoPosition;
        targetChannelId?: string;
        timing?: YouTube.Schema.InvideoTiming;
      }
      interface InvideoPosition {
        cornerPosition?: string;
        type?: string;
      }
      interface InvideoPromotion {
        defaultTiming?: YouTube.Schema.InvideoTiming;
        items?: YouTube.Schema.PromotedItem[];
        position?: YouTube.Schema.InvideoPosition;
        useSmartTiming?: boolean;
      }
      interface InvideoTiming {
        durationMs?: string;
        offsetMs?: string;
        type?: string;
      }
      interface LanguageTag {
        value?: string;
      }
      interface LiveBroadcast {
        contentDetails?: YouTube.Schema.LiveBroadcastContentDetails;
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YouTube.Schema.LiveBroadcastSnippet;
        statistics?: YouTube.Schema.LiveBroadcastStatistics;
        status?: YouTube.Schema.LiveBroadcastStatus;
      }
      interface LiveBroadcastContentDetails {
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
        monitorStream?: YouTube.Schema.MonitorStreamInfo;
        projection?: string;
        recordFromStart?: boolean;
        startWithSlate?: boolean;
        stereoLayout?: string;
      }
      interface LiveBroadcastListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.LiveBroadcast[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YouTube.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      interface LiveBroadcastSnippet {
        actualEndTime?: string;
        actualStartTime?: string;
        channelId?: string;
        description?: string;
        isDefaultBroadcast?: boolean;
        liveChatId?: string;
        publishedAt?: string;
        scheduledEndTime?: string;
        scheduledStartTime?: string;
        thumbnails?: YouTube.Schema.ThumbnailDetails;
        title?: string;
      }
      interface LiveBroadcastStatistics {
        concurrentViewers?: string;
        totalChatCount?: string;
      }
      interface LiveBroadcastStatus {
        lifeCycleStatus?: string;
        liveBroadcastPriority?: string;
        privacyStatus?: string;
        recordingStatus?: string;
      }
      interface LiveChatBan {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YouTube.Schema.LiveChatBanSnippet;
      }
      interface LiveChatBanSnippet {
        banDurationSeconds?: string;
        bannedUserDetails?: YouTube.Schema.ChannelProfileDetails;
        liveChatId?: string;
        type?: string;
      }
      interface LiveChatFanFundingEventDetails {
        amountDisplayString?: string;
        amountMicros?: string;
        currency?: string;
        userComment?: string;
      }
      interface LiveChatMessage {
        authorDetails?: YouTube.Schema.LiveChatMessageAuthorDetails;
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YouTube.Schema.LiveChatMessageSnippet;
      }
      interface LiveChatMessageAuthorDetails {
        channelId?: string;
        channelUrl?: string;
        displayName?: string;
        isChatModerator?: boolean;
        isChatOwner?: boolean;
        isChatSponsor?: boolean;
        isVerified?: boolean;
        profileImageUrl?: string;
      }
      interface LiveChatMessageDeletedDetails {
        deletedMessageId?: string;
      }
      interface LiveChatMessageListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.LiveChatMessage[];
        kind?: string;
        nextPageToken?: string;
        offlineAt?: string;
        pageInfo?: YouTube.Schema.PageInfo;
        pollingIntervalMillis?: number;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      interface LiveChatMessageRetractedDetails {
        retractedMessageId?: string;
      }
      interface LiveChatMessageSnippet {
        authorChannelId?: string;
        displayMessage?: string;
        fanFundingEventDetails?: YouTube.Schema.LiveChatFanFundingEventDetails;
        hasDisplayContent?: boolean;
        liveChatId?: string;
        messageDeletedDetails?: YouTube.Schema.LiveChatMessageDeletedDetails;
        messageRetractedDetails?: YouTube.Schema.LiveChatMessageRetractedDetails;
        pollClosedDetails?: YouTube.Schema.LiveChatPollClosedDetails;
        pollEditedDetails?: YouTube.Schema.LiveChatPollEditedDetails;
        pollOpenedDetails?: YouTube.Schema.LiveChatPollOpenedDetails;
        pollVotedDetails?: YouTube.Schema.LiveChatPollVotedDetails;
        publishedAt?: string;
        superChatDetails?: YouTube.Schema.LiveChatSuperChatDetails;
        superStickerDetails?: YouTube.Schema.LiveChatSuperStickerDetails;
        textMessageDetails?: YouTube.Schema.LiveChatTextMessageDetails;
        type?: string;
        userBannedDetails?: YouTube.Schema.LiveChatUserBannedMessageDetails;
      }
      interface LiveChatModerator {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YouTube.Schema.LiveChatModeratorSnippet;
      }
      interface LiveChatModeratorListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.LiveChatModerator[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YouTube.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      interface LiveChatModeratorSnippet {
        liveChatId?: string;
        moderatorDetails?: YouTube.Schema.ChannelProfileDetails;
      }
      interface LiveChatPollClosedDetails {
        pollId?: string;
      }
      interface LiveChatPollEditedDetails {
        id?: string;
        items?: YouTube.Schema.LiveChatPollItem[];
        prompt?: string;
      }
      interface LiveChatPollItem {
        description?: string;
        itemId?: string;
      }
      interface LiveChatPollOpenedDetails {
        id?: string;
        items?: YouTube.Schema.LiveChatPollItem[];
        prompt?: string;
      }
      interface LiveChatPollVotedDetails {
        itemId?: string;
        pollId?: string;
      }
      interface LiveChatSuperChatDetails {
        amountDisplayString?: string;
        amountMicros?: string;
        currency?: string;
        tier?: number;
        userComment?: string;
      }
      interface LiveChatSuperStickerDetails {
        amountDisplayString?: string;
        amountMicros?: string;
        currency?: string;
        superStickerMetadata?: YouTube.Schema.SuperStickerMetadata;
        tier?: number;
      }
      interface LiveChatTextMessageDetails {
        messageText?: string;
      }
      interface LiveChatUserBannedMessageDetails {
        banDurationSeconds?: string;
        banType?: string;
        bannedUserDetails?: YouTube.Schema.ChannelProfileDetails;
      }
      interface LiveStream {
        cdn?: YouTube.Schema.CdnSettings;
        contentDetails?: YouTube.Schema.LiveStreamContentDetails;
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YouTube.Schema.LiveStreamSnippet;
        status?: YouTube.Schema.LiveStreamStatus;
      }
      interface LiveStreamConfigurationIssue {
        description?: string;
        reason?: string;
        severity?: string;
        type?: string;
      }
      interface LiveStreamContentDetails {
        closedCaptionsIngestionUrl?: string;
        isReusable?: boolean;
      }
      interface LiveStreamHealthStatus {
        configurationIssues?: YouTube.Schema.LiveStreamConfigurationIssue[];
        lastUpdateTimeSeconds?: string;
        status?: string;
      }
      interface LiveStreamListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.LiveStream[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YouTube.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      interface LiveStreamSnippet {
        channelId?: string;
        description?: string;
        isDefaultStream?: boolean;
        publishedAt?: string;
        title?: string;
      }
      interface LiveStreamStatus {
        healthStatus?: YouTube.Schema.LiveStreamHealthStatus;
        streamStatus?: string;
      }
      interface LocalizedProperty {
        default?: string;
        defaultLanguage?: YouTube.Schema.LanguageTag;
        localized?: YouTube.Schema.LocalizedString[];
      }
      interface LocalizedString {
        language?: string;
        value?: string;
      }
      interface MonitorStreamInfo {
        broadcastStreamDelayMs?: number;
        embedHtml?: string;
        enableMonitorStream?: boolean;
      }
      interface Nonprofit {
        nonprofitId?: YouTube.Schema.NonprofitId;
        nonprofitLegalName?: string;
      }
      interface NonprofitId {
        value?: string;
      }
      interface PageInfo {
        resultsPerPage?: number;
        totalResults?: number;
      }
      interface Playlist {
        contentDetails?: YouTube.Schema.PlaylistContentDetails;
        etag?: string;
        id?: string;
        kind?: string;
        localizations?: object;
        player?: YouTube.Schema.PlaylistPlayer;
        snippet?: YouTube.Schema.PlaylistSnippet;
        status?: YouTube.Schema.PlaylistStatus;
      }
      interface PlaylistContentDetails {
        itemCount?: number;
      }
      interface PlaylistItem {
        contentDetails?: YouTube.Schema.PlaylistItemContentDetails;
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YouTube.Schema.PlaylistItemSnippet;
        status?: YouTube.Schema.PlaylistItemStatus;
      }
      interface PlaylistItemContentDetails {
        endAt?: string;
        note?: string;
        startAt?: string;
        videoId?: string;
        videoPublishedAt?: string;
      }
      interface PlaylistItemListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.PlaylistItem[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YouTube.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      interface PlaylistItemSnippet {
        channelId?: string;
        channelTitle?: string;
        description?: string;
        playlistId?: string;
        position?: number;
        publishedAt?: string;
        resourceId?: YouTube.Schema.ResourceId;
        thumbnails?: YouTube.Schema.ThumbnailDetails;
        title?: string;
      }
      interface PlaylistItemStatus {
        privacyStatus?: string;
      }
      interface PlaylistListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.Playlist[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YouTube.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      interface PlaylistLocalization {
        description?: string;
        title?: string;
      }
      interface PlaylistPlayer {
        embedHtml?: string;
      }
      interface PlaylistSnippet {
        channelId?: string;
        channelTitle?: string;
        defaultLanguage?: string;
        description?: string;
        localized?: YouTube.Schema.PlaylistLocalization;
        publishedAt?: string;
        tags?: string[];
        thumbnails?: YouTube.Schema.ThumbnailDetails;
        title?: string;
      }
      interface PlaylistStatus {
        privacyStatus?: string;
      }
      interface PromotedItem {
        customMessage?: string;
        id?: YouTube.Schema.PromotedItemId;
        promotedByContentOwner?: boolean;
        timing?: YouTube.Schema.InvideoTiming;
      }
      interface PromotedItemId {
        recentlyUploadedBy?: string;
        type?: string;
        videoId?: string;
        websiteUrl?: string;
      }
      interface PropertyValue {
        property?: string;
        value?: string;
      }
      interface ResourceId {
        channelId?: string;
        kind?: string;
        playlistId?: string;
        videoId?: string;
      }
      interface SearchListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.SearchResult[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YouTube.Schema.PageInfo;
        prevPageToken?: string;
        regionCode?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      interface SearchResult {
        etag?: string;
        id?: YouTube.Schema.ResourceId;
        kind?: string;
        snippet?: YouTube.Schema.SearchResultSnippet;
      }
      interface SearchResultSnippet {
        channelId?: string;
        channelTitle?: string;
        description?: string;
        liveBroadcastContent?: string;
        publishedAt?: string;
        thumbnails?: YouTube.Schema.ThumbnailDetails;
        title?: string;
      }
      interface Sponsor {
        etag?: string;
        kind?: string;
        snippet?: YouTube.Schema.SponsorSnippet;
      }
      interface SponsorListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.Sponsor[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YouTube.Schema.PageInfo;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      interface SponsorSnippet {
        channelId?: string;
        cumulativeDurationMonths?: number;
        sponsorDetails?: YouTube.Schema.ChannelProfileDetails;
        sponsorSince?: string;
      }
      interface Subscription {
        contentDetails?: YouTube.Schema.SubscriptionContentDetails;
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YouTube.Schema.SubscriptionSnippet;
        subscriberSnippet?: YouTube.Schema.SubscriptionSubscriberSnippet;
      }
      interface SubscriptionContentDetails {
        activityType?: string;
        newItemCount?: number;
        totalItemCount?: number;
      }
      interface SubscriptionListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.Subscription[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YouTube.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      interface SubscriptionSnippet {
        channelId?: string;
        channelTitle?: string;
        description?: string;
        publishedAt?: string;
        resourceId?: YouTube.Schema.ResourceId;
        thumbnails?: YouTube.Schema.ThumbnailDetails;
        title?: string;
      }
      interface SubscriptionSubscriberSnippet {
        channelId?: string;
        description?: string;
        thumbnails?: YouTube.Schema.ThumbnailDetails;
        title?: string;
      }
      interface SuperChatEvent {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YouTube.Schema.SuperChatEventSnippet;
      }
      interface SuperChatEventListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.SuperChatEvent[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YouTube.Schema.PageInfo;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      interface SuperChatEventSnippet {
        amountMicros?: string;
        channelId?: string;
        commentText?: string;
        createdAt?: string;
        currency?: string;
        displayString?: string;
        isSuperChatForGood?: boolean;
        isSuperStickerEvent?: boolean;
        messageType?: number;
        nonprofit?: YouTube.Schema.Nonprofit;
        superStickerMetadata?: YouTube.Schema.SuperStickerMetadata;
        supporterDetails?: YouTube.Schema.ChannelProfileDetails;
      }
      interface SuperStickerMetadata {
        altText?: string;
        altTextLanguage?: string;
        stickerId?: string;
      }
      interface Thumbnail {
        height?: number;
        url?: string;
        width?: number;
      }
      interface ThumbnailDetails {
        default?: YouTube.Schema.Thumbnail;
        high?: YouTube.Schema.Thumbnail;
        maxres?: YouTube.Schema.Thumbnail;
        medium?: YouTube.Schema.Thumbnail;
        standard?: YouTube.Schema.Thumbnail;
      }
      interface ThumbnailSetResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.ThumbnailDetails[];
        kind?: string;
        visitorId?: string;
      }
      interface Video {
        ageGating?: YouTube.Schema.VideoAgeGating;
        contentDetails?: YouTube.Schema.VideoContentDetails;
        etag?: string;
        fileDetails?: YouTube.Schema.VideoFileDetails;
        id?: string;
        kind?: string;
        liveStreamingDetails?: YouTube.Schema.VideoLiveStreamingDetails;
        localizations?: object;
        monetizationDetails?: YouTube.Schema.VideoMonetizationDetails;
        player?: YouTube.Schema.VideoPlayer;
        processingDetails?: YouTube.Schema.VideoProcessingDetails;
        projectDetails?: YouTube.Schema.VideoProjectDetails;
        recordingDetails?: YouTube.Schema.VideoRecordingDetails;
        snippet?: YouTube.Schema.VideoSnippet;
        statistics?: YouTube.Schema.VideoStatistics;
        status?: YouTube.Schema.VideoStatus;
        suggestions?: YouTube.Schema.VideoSuggestions;
        topicDetails?: YouTube.Schema.VideoTopicDetails;
      }
      interface VideoAbuseReport {
        comments?: string;
        language?: string;
        reasonId?: string;
        secondaryReasonId?: string;
        videoId?: string;
      }
      interface VideoAbuseReportReason {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YouTube.Schema.VideoAbuseReportReasonSnippet;
      }
      interface VideoAbuseReportReasonListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.VideoAbuseReportReason[];
        kind?: string;
        visitorId?: string;
      }
      interface VideoAbuseReportReasonSnippet {
        label?: string;
        secondaryReasons?: YouTube.Schema.VideoAbuseReportSecondaryReason[];
      }
      interface VideoAbuseReportSecondaryReason {
        id?: string;
        label?: string;
      }
      interface VideoAgeGating {
        alcoholContent?: boolean;
        restricted?: boolean;
        videoGameRating?: string;
      }
      interface VideoCategory {
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YouTube.Schema.VideoCategorySnippet;
      }
      interface VideoCategoryListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.VideoCategory[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YouTube.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      interface VideoCategorySnippet {
        assignable?: boolean;
        channelId?: string;
        title?: string;
      }
      interface VideoContentDetails {
        caption?: string;
        contentRating?: YouTube.Schema.ContentRating;
        countryRestriction?: YouTube.Schema.AccessPolicy;
        definition?: string;
        dimension?: string;
        duration?: string;
        hasCustomThumbnail?: boolean;
        licensedContent?: boolean;
        projection?: string;
        regionRestriction?: YouTube.Schema.VideoContentDetailsRegionRestriction;
      }
      interface VideoContentDetailsRegionRestriction {
        allowed?: string[];
        blocked?: string[];
      }
      interface VideoFileDetails {
        audioStreams?: YouTube.Schema.VideoFileDetailsAudioStream[];
        bitrateBps?: string;
        container?: string;
        creationTime?: string;
        durationMs?: string;
        fileName?: string;
        fileSize?: string;
        fileType?: string;
        videoStreams?: YouTube.Schema.VideoFileDetailsVideoStream[];
      }
      interface VideoFileDetailsAudioStream {
        bitrateBps?: string;
        channelCount?: number;
        codec?: string;
        vendor?: string;
      }
      interface VideoFileDetailsVideoStream {
        aspectRatio?: number;
        bitrateBps?: string;
        codec?: string;
        frameRateFps?: number;
        heightPixels?: number;
        rotation?: string;
        vendor?: string;
        widthPixels?: number;
      }
      interface VideoGetRatingResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.VideoRating[];
        kind?: string;
        visitorId?: string;
      }
      interface VideoListResponse {
        etag?: string;
        eventId?: string;
        items?: YouTube.Schema.Video[];
        kind?: string;
        nextPageToken?: string;
        pageInfo?: YouTube.Schema.PageInfo;
        prevPageToken?: string;
        tokenPagination?: any; // Schema.TokenPagination
        visitorId?: string;
      }
      interface VideoLiveStreamingDetails {
        activeLiveChatId?: string;
        actualEndTime?: string;
        actualStartTime?: string;
        concurrentViewers?: string;
        scheduledEndTime?: string;
        scheduledStartTime?: string;
      }
      interface VideoLocalization {
        description?: string;
        title?: string;
      }
      interface VideoMonetizationDetails {
        access?: YouTube.Schema.AccessPolicy;
      }
      interface VideoPlayer {
        embedHeight?: string;
        embedHtml?: string;
        embedWidth?: string;
      }
      interface VideoProcessingDetails {
        editorSuggestionsAvailability?: string;
        fileDetailsAvailability?: string;
        processingFailureReason?: string;
        processingIssuesAvailability?: string;
        processingProgress?: YouTube.Schema.VideoProcessingDetailsProcessingProgress;
        processingStatus?: string;
        tagSuggestionsAvailability?: string;
        thumbnailsAvailability?: string;
      }
      interface VideoProcessingDetailsProcessingProgress {
        partsProcessed?: string;
        partsTotal?: string;
        timeLeftMs?: string;
      }
      interface VideoProjectDetails {
        tags?: string[];
      }
      interface VideoRating {
        rating?: string;
        videoId?: string;
      }
      interface VideoRecordingDetails {
        location?: YouTube.Schema.GeoPoint;
        locationDescription?: string;
        recordingDate?: string;
      }
      interface VideoSnippet {
        categoryId?: string;
        channelId?: string;
        channelTitle?: string;
        defaultAudioLanguage?: string;
        defaultLanguage?: string;
        description?: string;
        liveBroadcastContent?: string;
        localized?: YouTube.Schema.VideoLocalization;
        publishedAt?: string;
        tags?: string[];
        thumbnails?: YouTube.Schema.ThumbnailDetails;
        title?: string;
      }
      interface VideoStatistics {
        commentCount?: string;
        dislikeCount?: string;
        favoriteCount?: string;
        likeCount?: string;
        viewCount?: string;
      }
      interface VideoStatus {
        embeddable?: boolean;
        failureReason?: string;
        license?: string;
        privacyStatus?: string;
        publicStatsViewable?: boolean;
        publishAt?: string;
        rejectionReason?: string;
        uploadStatus?: string;
      }
      interface VideoSuggestions {
        editorSuggestions?: string[];
        processingErrors?: string[];
        processingHints?: string[];
        processingWarnings?: string[];
        tagSuggestions?: YouTube.Schema.VideoSuggestionsTagSuggestion[];
      }
      interface VideoSuggestionsTagSuggestion {
        categoryRestricts?: string[];
        tag?: string;
      }
      interface VideoTopicDetails {
        relevantTopicIds?: string[];
        topicCategories?: string[];
        topicIds?: string[];
      }
      interface WatchSettings {
        backgroundColor?: string;
        featuredPlaylistId?: string;
        textColor?: string;
      }
    }
  }
  interface YouTube {
    Activities?: YouTube.Collection.ActivitiesCollection;
    Captions?: YouTube.Collection.CaptionsCollection;
    ChannelBanners?: YouTube.Collection.ChannelBannersCollection;
    ChannelSections?: YouTube.Collection.ChannelSectionsCollection;
    Channels?: YouTube.Collection.ChannelsCollection;
    CommentThreads?: YouTube.Collection.CommentThreadsCollection;
    Comments?: YouTube.Collection.CommentsCollection;
    GuideCategories?: YouTube.Collection.GuideCategoriesCollection;
    I18nLanguages?: YouTube.Collection.I18nLanguagesCollection;
    I18nRegions?: YouTube.Collection.I18nRegionsCollection;
    LiveBroadcasts?: YouTube.Collection.LiveBroadcastsCollection;
    LiveChatBans?: YouTube.Collection.LiveChatBansCollection;
    LiveChatMessages?: YouTube.Collection.LiveChatMessagesCollection;
    LiveChatModerators?: YouTube.Collection.LiveChatModeratorsCollection;
    LiveStreams?: YouTube.Collection.LiveStreamsCollection;
    PlaylistItems?: YouTube.Collection.PlaylistItemsCollection;
    Playlists?: YouTube.Collection.PlaylistsCollection;
    Search?: YouTube.Collection.SearchCollection;
    Sponsors?: YouTube.Collection.SponsorsCollection;
    Subscriptions?: YouTube.Collection.SubscriptionsCollection;
    SuperChatEvents?: YouTube.Collection.SuperChatEventsCollection;
    Thumbnails?: YouTube.Collection.ThumbnailsCollection;
    VideoAbuseReportReasons?: YouTube.Collection.VideoAbuseReportReasonsCollection;
    VideoCategories?: YouTube.Collection.VideoCategoriesCollection;
    Videos?: YouTube.Collection.VideosCollection;
    Watermarks?: YouTube.Collection.WatermarksCollection;
    // Create a new instance of AccessPolicy
    newAccessPolicy(): YouTube.Schema.AccessPolicy;
    // Create a new instance of Activity
    newActivity(): YouTube.Schema.Activity;
    // Create a new instance of ActivityContentDetails
    newActivityContentDetails(): YouTube.Schema.ActivityContentDetails;
    // Create a new instance of ActivityContentDetailsBulletin
    newActivityContentDetailsBulletin(): YouTube.Schema.ActivityContentDetailsBulletin;
    // Create a new instance of ActivityContentDetailsChannelItem
    newActivityContentDetailsChannelItem(): YouTube.Schema.ActivityContentDetailsChannelItem;
    // Create a new instance of ActivityContentDetailsComment
    newActivityContentDetailsComment(): YouTube.Schema.ActivityContentDetailsComment;
    // Create a new instance of ActivityContentDetailsFavorite
    newActivityContentDetailsFavorite(): YouTube.Schema.ActivityContentDetailsFavorite;
    // Create a new instance of ActivityContentDetailsLike
    newActivityContentDetailsLike(): YouTube.Schema.ActivityContentDetailsLike;
    // Create a new instance of ActivityContentDetailsPlaylistItem
    newActivityContentDetailsPlaylistItem(): YouTube.Schema.ActivityContentDetailsPlaylistItem;
    // Create a new instance of ActivityContentDetailsPromotedItem
    newActivityContentDetailsPromotedItem(): YouTube.Schema.ActivityContentDetailsPromotedItem;
    // Create a new instance of ActivityContentDetailsRecommendation
    newActivityContentDetailsRecommendation(): YouTube.Schema.ActivityContentDetailsRecommendation;
    // Create a new instance of ActivityContentDetailsSocial
    newActivityContentDetailsSocial(): YouTube.Schema.ActivityContentDetailsSocial;
    // Create a new instance of ActivityContentDetailsSubscription
    newActivityContentDetailsSubscription(): YouTube.Schema.ActivityContentDetailsSubscription;
    // Create a new instance of ActivityContentDetailsUpload
    newActivityContentDetailsUpload(): YouTube.Schema.ActivityContentDetailsUpload;
    // Create a new instance of ActivitySnippet
    newActivitySnippet(): YouTube.Schema.ActivitySnippet;
    // Create a new instance of Caption
    newCaption(): YouTube.Schema.Caption;
    // Create a new instance of CaptionSnippet
    newCaptionSnippet(): YouTube.Schema.CaptionSnippet;
    // Create a new instance of CdnSettings
    newCdnSettings(): YouTube.Schema.CdnSettings;
    // Create a new instance of Channel
    newChannel(): YouTube.Schema.Channel;
    // Create a new instance of ChannelAuditDetails
    newChannelAuditDetails(): YouTube.Schema.ChannelAuditDetails;
    // Create a new instance of ChannelBannerResource
    newChannelBannerResource(): YouTube.Schema.ChannelBannerResource;
    // Create a new instance of ChannelBrandingSettings
    newChannelBrandingSettings(): YouTube.Schema.ChannelBrandingSettings;
    // Create a new instance of ChannelContentDetails
    newChannelContentDetails(): YouTube.Schema.ChannelContentDetails;
    // Create a new instance of ChannelContentDetailsRelatedPlaylists
    newChannelContentDetailsRelatedPlaylists(): YouTube.Schema.ChannelContentDetailsRelatedPlaylists;
    // Create a new instance of ChannelContentOwnerDetails
    newChannelContentOwnerDetails(): YouTube.Schema.ChannelContentOwnerDetails;
    // Create a new instance of ChannelConversionPing
    newChannelConversionPing(): YouTube.Schema.ChannelConversionPing;
    // Create a new instance of ChannelConversionPings
    newChannelConversionPings(): YouTube.Schema.ChannelConversionPings;
    // Create a new instance of ChannelLocalization
    newChannelLocalization(): YouTube.Schema.ChannelLocalization;
    // Create a new instance of ChannelProfileDetails
    newChannelProfileDetails(): YouTube.Schema.ChannelProfileDetails;
    // Create a new instance of ChannelSection
    newChannelSection(): YouTube.Schema.ChannelSection;
    // Create a new instance of ChannelSectionContentDetails
    newChannelSectionContentDetails(): YouTube.Schema.ChannelSectionContentDetails;
    // Create a new instance of ChannelSectionLocalization
    newChannelSectionLocalization(): YouTube.Schema.ChannelSectionLocalization;
    // Create a new instance of ChannelSectionSnippet
    newChannelSectionSnippet(): YouTube.Schema.ChannelSectionSnippet;
    // Create a new instance of ChannelSectionTargeting
    newChannelSectionTargeting(): YouTube.Schema.ChannelSectionTargeting;
    // Create a new instance of ChannelSettings
    newChannelSettings(): YouTube.Schema.ChannelSettings;
    // Create a new instance of ChannelSnippet
    newChannelSnippet(): YouTube.Schema.ChannelSnippet;
    // Create a new instance of ChannelStatistics
    newChannelStatistics(): YouTube.Schema.ChannelStatistics;
    // Create a new instance of ChannelStatus
    newChannelStatus(): YouTube.Schema.ChannelStatus;
    // Create a new instance of ChannelTopicDetails
    newChannelTopicDetails(): YouTube.Schema.ChannelTopicDetails;
    // Create a new instance of Comment
    newComment(): YouTube.Schema.Comment;
    // Create a new instance of CommentSnippet
    newCommentSnippet(): YouTube.Schema.CommentSnippet;
    // Create a new instance of CommentThread
    newCommentThread(): YouTube.Schema.CommentThread;
    // Create a new instance of CommentThreadReplies
    newCommentThreadReplies(): YouTube.Schema.CommentThreadReplies;
    // Create a new instance of CommentThreadSnippet
    newCommentThreadSnippet(): YouTube.Schema.CommentThreadSnippet;
    // Create a new instance of ContentRating
    newContentRating(): YouTube.Schema.ContentRating;
    // Create a new instance of GeoPoint
    newGeoPoint(): YouTube.Schema.GeoPoint;
    // Create a new instance of ImageSettings
    newImageSettings(): YouTube.Schema.ImageSettings;
    // Create a new instance of IngestionInfo
    newIngestionInfo(): YouTube.Schema.IngestionInfo;
    // Create a new instance of InvideoBranding
    newInvideoBranding(): YouTube.Schema.InvideoBranding;
    // Create a new instance of InvideoPosition
    newInvideoPosition(): YouTube.Schema.InvideoPosition;
    // Create a new instance of InvideoPromotion
    newInvideoPromotion(): YouTube.Schema.InvideoPromotion;
    // Create a new instance of InvideoTiming
    newInvideoTiming(): YouTube.Schema.InvideoTiming;
    // Create a new instance of LanguageTag
    newLanguageTag(): YouTube.Schema.LanguageTag;
    // Create a new instance of LiveBroadcast
    newLiveBroadcast(): YouTube.Schema.LiveBroadcast;
    // Create a new instance of LiveBroadcastContentDetails
    newLiveBroadcastContentDetails(): YouTube.Schema.LiveBroadcastContentDetails;
    // Create a new instance of LiveBroadcastSnippet
    newLiveBroadcastSnippet(): YouTube.Schema.LiveBroadcastSnippet;
    // Create a new instance of LiveBroadcastStatistics
    newLiveBroadcastStatistics(): YouTube.Schema.LiveBroadcastStatistics;
    // Create a new instance of LiveBroadcastStatus
    newLiveBroadcastStatus(): YouTube.Schema.LiveBroadcastStatus;
    // Create a new instance of LiveChatBan
    newLiveChatBan(): YouTube.Schema.LiveChatBan;
    // Create a new instance of LiveChatBanSnippet
    newLiveChatBanSnippet(): YouTube.Schema.LiveChatBanSnippet;
    // Create a new instance of LiveChatFanFundingEventDetails
    newLiveChatFanFundingEventDetails(): YouTube.Schema.LiveChatFanFundingEventDetails;
    // Create a new instance of LiveChatMessage
    newLiveChatMessage(): YouTube.Schema.LiveChatMessage;
    // Create a new instance of LiveChatMessageAuthorDetails
    newLiveChatMessageAuthorDetails(): YouTube.Schema.LiveChatMessageAuthorDetails;
    // Create a new instance of LiveChatMessageDeletedDetails
    newLiveChatMessageDeletedDetails(): YouTube.Schema.LiveChatMessageDeletedDetails;
    // Create a new instance of LiveChatMessageRetractedDetails
    newLiveChatMessageRetractedDetails(): YouTube.Schema.LiveChatMessageRetractedDetails;
    // Create a new instance of LiveChatMessageSnippet
    newLiveChatMessageSnippet(): YouTube.Schema.LiveChatMessageSnippet;
    // Create a new instance of LiveChatModerator
    newLiveChatModerator(): YouTube.Schema.LiveChatModerator;
    // Create a new instance of LiveChatModeratorSnippet
    newLiveChatModeratorSnippet(): YouTube.Schema.LiveChatModeratorSnippet;
    // Create a new instance of LiveChatPollClosedDetails
    newLiveChatPollClosedDetails(): YouTube.Schema.LiveChatPollClosedDetails;
    // Create a new instance of LiveChatPollEditedDetails
    newLiveChatPollEditedDetails(): YouTube.Schema.LiveChatPollEditedDetails;
    // Create a new instance of LiveChatPollItem
    newLiveChatPollItem(): YouTube.Schema.LiveChatPollItem;
    // Create a new instance of LiveChatPollOpenedDetails
    newLiveChatPollOpenedDetails(): YouTube.Schema.LiveChatPollOpenedDetails;
    // Create a new instance of LiveChatPollVotedDetails
    newLiveChatPollVotedDetails(): YouTube.Schema.LiveChatPollVotedDetails;
    // Create a new instance of LiveChatSuperChatDetails
    newLiveChatSuperChatDetails(): YouTube.Schema.LiveChatSuperChatDetails;
    // Create a new instance of LiveChatSuperStickerDetails
    newLiveChatSuperStickerDetails(): YouTube.Schema.LiveChatSuperStickerDetails;
    // Create a new instance of LiveChatTextMessageDetails
    newLiveChatTextMessageDetails(): YouTube.Schema.LiveChatTextMessageDetails;
    // Create a new instance of LiveChatUserBannedMessageDetails
    newLiveChatUserBannedMessageDetails(): YouTube.Schema.LiveChatUserBannedMessageDetails;
    // Create a new instance of LiveStream
    newLiveStream(): YouTube.Schema.LiveStream;
    // Create a new instance of LiveStreamConfigurationIssue
    newLiveStreamConfigurationIssue(): YouTube.Schema.LiveStreamConfigurationIssue;
    // Create a new instance of LiveStreamContentDetails
    newLiveStreamContentDetails(): YouTube.Schema.LiveStreamContentDetails;
    // Create a new instance of LiveStreamHealthStatus
    newLiveStreamHealthStatus(): YouTube.Schema.LiveStreamHealthStatus;
    // Create a new instance of LiveStreamSnippet
    newLiveStreamSnippet(): YouTube.Schema.LiveStreamSnippet;
    // Create a new instance of LiveStreamStatus
    newLiveStreamStatus(): YouTube.Schema.LiveStreamStatus;
    // Create a new instance of LocalizedProperty
    newLocalizedProperty(): YouTube.Schema.LocalizedProperty;
    // Create a new instance of LocalizedString
    newLocalizedString(): YouTube.Schema.LocalizedString;
    // Create a new instance of MonitorStreamInfo
    newMonitorStreamInfo(): YouTube.Schema.MonitorStreamInfo;
    // Create a new instance of Playlist
    newPlaylist(): YouTube.Schema.Playlist;
    // Create a new instance of PlaylistContentDetails
    newPlaylistContentDetails(): YouTube.Schema.PlaylistContentDetails;
    // Create a new instance of PlaylistItem
    newPlaylistItem(): YouTube.Schema.PlaylistItem;
    // Create a new instance of PlaylistItemContentDetails
    newPlaylistItemContentDetails(): YouTube.Schema.PlaylistItemContentDetails;
    // Create a new instance of PlaylistItemSnippet
    newPlaylistItemSnippet(): YouTube.Schema.PlaylistItemSnippet;
    // Create a new instance of PlaylistItemStatus
    newPlaylistItemStatus(): YouTube.Schema.PlaylistItemStatus;
    // Create a new instance of PlaylistLocalization
    newPlaylistLocalization(): YouTube.Schema.PlaylistLocalization;
    // Create a new instance of PlaylistPlayer
    newPlaylistPlayer(): YouTube.Schema.PlaylistPlayer;
    // Create a new instance of PlaylistSnippet
    newPlaylistSnippet(): YouTube.Schema.PlaylistSnippet;
    // Create a new instance of PlaylistStatus
    newPlaylistStatus(): YouTube.Schema.PlaylistStatus;
    // Create a new instance of PromotedItem
    newPromotedItem(): YouTube.Schema.PromotedItem;
    // Create a new instance of PromotedItemId
    newPromotedItemId(): YouTube.Schema.PromotedItemId;
    // Create a new instance of PropertyValue
    newPropertyValue(): YouTube.Schema.PropertyValue;
    // Create a new instance of ResourceId
    newResourceId(): YouTube.Schema.ResourceId;
    // Create a new instance of Subscription
    newSubscription(): YouTube.Schema.Subscription;
    // Create a new instance of SubscriptionContentDetails
    newSubscriptionContentDetails(): YouTube.Schema.SubscriptionContentDetails;
    // Create a new instance of SubscriptionSnippet
    newSubscriptionSnippet(): YouTube.Schema.SubscriptionSnippet;
    // Create a new instance of SubscriptionSubscriberSnippet
    newSubscriptionSubscriberSnippet(): YouTube.Schema.SubscriptionSubscriberSnippet;
    // Create a new instance of SuperStickerMetadata
    newSuperStickerMetadata(): YouTube.Schema.SuperStickerMetadata;
    // Create a new instance of Thumbnail
    newThumbnail(): YouTube.Schema.Thumbnail;
    // Create a new instance of ThumbnailDetails
    newThumbnailDetails(): YouTube.Schema.ThumbnailDetails;
    // Create a new instance of Video
    newVideo(): YouTube.Schema.Video;
    // Create a new instance of VideoAbuseReport
    newVideoAbuseReport(): YouTube.Schema.VideoAbuseReport;
    // Create a new instance of VideoAgeGating
    newVideoAgeGating(): YouTube.Schema.VideoAgeGating;
    // Create a new instance of VideoContentDetails
    newVideoContentDetails(): YouTube.Schema.VideoContentDetails;
    // Create a new instance of VideoContentDetailsRegionRestriction
    newVideoContentDetailsRegionRestriction(): YouTube.Schema.VideoContentDetailsRegionRestriction;
    // Create a new instance of VideoFileDetails
    newVideoFileDetails(): YouTube.Schema.VideoFileDetails;
    // Create a new instance of VideoFileDetailsAudioStream
    newVideoFileDetailsAudioStream(): YouTube.Schema.VideoFileDetailsAudioStream;
    // Create a new instance of VideoFileDetailsVideoStream
    newVideoFileDetailsVideoStream(): YouTube.Schema.VideoFileDetailsVideoStream;
    // Create a new instance of VideoLiveStreamingDetails
    newVideoLiveStreamingDetails(): YouTube.Schema.VideoLiveStreamingDetails;
    // Create a new instance of VideoLocalization
    newVideoLocalization(): YouTube.Schema.VideoLocalization;
    // Create a new instance of VideoMonetizationDetails
    newVideoMonetizationDetails(): YouTube.Schema.VideoMonetizationDetails;
    // Create a new instance of VideoPlayer
    newVideoPlayer(): YouTube.Schema.VideoPlayer;
    // Create a new instance of VideoProcessingDetails
    newVideoProcessingDetails(): YouTube.Schema.VideoProcessingDetails;
    // Create a new instance of VideoProcessingDetailsProcessingProgress
    newVideoProcessingDetailsProcessingProgress(): YouTube.Schema.VideoProcessingDetailsProcessingProgress;
    // Create a new instance of VideoProjectDetails
    newVideoProjectDetails(): YouTube.Schema.VideoProjectDetails;
    // Create a new instance of VideoRecordingDetails
    newVideoRecordingDetails(): YouTube.Schema.VideoRecordingDetails;
    // Create a new instance of VideoSnippet
    newVideoSnippet(): YouTube.Schema.VideoSnippet;
    // Create a new instance of VideoStatistics
    newVideoStatistics(): YouTube.Schema.VideoStatistics;
    // Create a new instance of VideoStatus
    newVideoStatus(): YouTube.Schema.VideoStatus;
    // Create a new instance of VideoSuggestions
    newVideoSuggestions(): YouTube.Schema.VideoSuggestions;
    // Create a new instance of VideoSuggestionsTagSuggestion
    newVideoSuggestionsTagSuggestion(): YouTube.Schema.VideoSuggestionsTagSuggestion;
    // Create a new instance of VideoTopicDetails
    newVideoTopicDetails(): YouTube.Schema.VideoTopicDetails;
    // Create a new instance of WatchSettings
    newWatchSettings(): YouTube.Schema.WatchSettings;
  }
}

declare var YouTube: GoogleAppsScript.YouTube;
