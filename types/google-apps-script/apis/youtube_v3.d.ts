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
                insert(
                    resource: Schema.Caption,
                    part: string,
                    mediaData: any,
                    optionalArgs: object,
                ): YouTube.Schema.Caption;
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
                update(
                    resource: Schema.Caption,
                    part: string,
                    mediaData: any,
                    optionalArgs: object,
                ): YouTube.Schema.Caption;
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
                insert(
                    resource: Schema.ChannelBannerResource,
                    mediaData: any,
                    optionalArgs: object,
                ): YouTube.Schema.ChannelBannerResource;
            }
            interface ChannelSectionsCollection {
                // Adds a channelSection for the authenticated user's channel.
                insert(resource: Schema.ChannelSection, part: string): YouTube.Schema.ChannelSection;
                // Adds a channelSection for the authenticated user's channel.
                insert(
                    resource: Schema.ChannelSection,
                    part: string,
                    optionalArgs: object,
                ): YouTube.Schema.ChannelSection;
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
                update(
                    resource: Schema.ChannelSection,
                    part: string,
                    optionalArgs: object,
                ): YouTube.Schema.ChannelSection;
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
                insert(
                    resource: Schema.LiveBroadcast,
                    part: string,
                    optionalArgs: object,
                ): YouTube.Schema.LiveBroadcast;
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
                transition(
                    broadcastStatus: string,
                    id: string,
                    part: string,
                    optionalArgs: object,
                ): YouTube.Schema.LiveBroadcast;
                // Updates a broadcast. For example, you could modify the broadcast settings defined in the liveBroadcast resource's contentDetails object.
                update(resource: Schema.LiveBroadcast, part: string): YouTube.Schema.LiveBroadcast;
                // Updates a broadcast. For example, you could modify the broadcast settings defined in the liveBroadcast resource's contentDetails object.
                update(
                    resource: Schema.LiveBroadcast,
                    part: string,
                    optionalArgs: object,
                ): YouTube.Schema.LiveBroadcast;
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
                list(
                    liveChatId: string,
                    part: string,
                    optionalArgs: object,
                ): YouTube.Schema.LiveChatMessageListResponse;
                // Deletes a chat message.
                remove(id: string): void;
            }
            interface LiveChatModeratorsCollection {
                // Adds a new moderator for the chat.
                insert(resource: Schema.LiveChatModerator, part: string): YouTube.Schema.LiveChatModerator;
                // Lists moderators for a live chat.
                list(liveChatId: string, part: string): YouTube.Schema.LiveChatModeratorListResponse;
                // Lists moderators for a live chat.
                list(
                    liveChatId: string,
                    part: string,
                    optionalArgs: object,
                ): YouTube.Schema.LiveChatModeratorListResponse;
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
                insert(
                    resource: Schema.Video,
                    part: string,
                    mediaData: any,
                    optionalArgs: object,
                ): YouTube.Schema.Video;
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
                allowed?: boolean | undefined;
                exception?: string[] | undefined;
            }
            interface Activity {
                contentDetails?: YouTube.Schema.ActivityContentDetails | undefined;
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.ActivitySnippet | undefined;
            }
            interface ActivityContentDetails {
                bulletin?: YouTube.Schema.ActivityContentDetailsBulletin | undefined;
                channelItem?: YouTube.Schema.ActivityContentDetailsChannelItem | undefined;
                comment?: YouTube.Schema.ActivityContentDetailsComment | undefined;
                favorite?: YouTube.Schema.ActivityContentDetailsFavorite | undefined;
                like?: YouTube.Schema.ActivityContentDetailsLike | undefined;
                playlistItem?: YouTube.Schema.ActivityContentDetailsPlaylistItem | undefined;
                promotedItem?: YouTube.Schema.ActivityContentDetailsPromotedItem | undefined;
                recommendation?: YouTube.Schema.ActivityContentDetailsRecommendation | undefined;
                social?: YouTube.Schema.ActivityContentDetailsSocial | undefined;
                subscription?: YouTube.Schema.ActivityContentDetailsSubscription | undefined;
                upload?: YouTube.Schema.ActivityContentDetailsUpload | undefined;
            }
            interface ActivityContentDetailsBulletin {
                resourceId?: YouTube.Schema.ResourceId | undefined;
            }
            interface ActivityContentDetailsChannelItem {
                resourceId?: YouTube.Schema.ResourceId | undefined;
            }
            interface ActivityContentDetailsComment {
                resourceId?: YouTube.Schema.ResourceId | undefined;
            }
            interface ActivityContentDetailsFavorite {
                resourceId?: YouTube.Schema.ResourceId | undefined;
            }
            interface ActivityContentDetailsLike {
                resourceId?: YouTube.Schema.ResourceId | undefined;
            }
            interface ActivityContentDetailsPlaylistItem {
                playlistId?: string | undefined;
                playlistItemId?: string | undefined;
                resourceId?: YouTube.Schema.ResourceId | undefined;
            }
            interface ActivityContentDetailsPromotedItem {
                adTag?: string | undefined;
                clickTrackingUrl?: string | undefined;
                creativeViewUrl?: string | undefined;
                ctaType?: string | undefined;
                customCtaButtonText?: string | undefined;
                descriptionText?: string | undefined;
                destinationUrl?: string | undefined;
                forecastingUrl?: string[] | undefined;
                impressionUrl?: string[] | undefined;
                videoId?: string | undefined;
            }
            interface ActivityContentDetailsRecommendation {
                reason?: string | undefined;
                resourceId?: YouTube.Schema.ResourceId | undefined;
                seedResourceId?: YouTube.Schema.ResourceId | undefined;
            }
            interface ActivityContentDetailsSocial {
                author?: string | undefined;
                imageUrl?: string | undefined;
                referenceUrl?: string | undefined;
                resourceId?: YouTube.Schema.ResourceId | undefined;
                type?: string | undefined;
            }
            interface ActivityContentDetailsSubscription {
                resourceId?: YouTube.Schema.ResourceId | undefined;
            }
            interface ActivityContentDetailsUpload {
                videoId?: string | undefined;
            }
            interface ActivityListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.Activity[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YouTube.Schema.PageInfo | undefined;
                prevPageToken?: string | undefined;
                tokenPagination?: any; // Schema.TokenPagination
                visitorId?: string | undefined;
            }
            interface ActivitySnippet {
                channelId?: string | undefined;
                channelTitle?: string | undefined;
                description?: string | undefined;
                groupId?: string | undefined;
                publishedAt?: string | undefined;
                thumbnails?: YouTube.Schema.ThumbnailDetails | undefined;
                title?: string | undefined;
                type?: string | undefined;
            }
            interface Caption {
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.CaptionSnippet | undefined;
            }
            interface CaptionListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.Caption[] | undefined;
                kind?: string | undefined;
                visitorId?: string | undefined;
            }
            interface CaptionSnippet {
                audioTrackType?: string | undefined;
                failureReason?: string | undefined;
                isAutoSynced?: boolean | undefined;
                isCC?: boolean | undefined;
                isDraft?: boolean | undefined;
                isEasyReader?: boolean | undefined;
                isLarge?: boolean | undefined;
                language?: string | undefined;
                lastUpdated?: string | undefined;
                name?: string | undefined;
                status?: string | undefined;
                trackKind?: string | undefined;
                videoId?: string | undefined;
            }
            interface CdnSettings {
                format?: string | undefined;
                frameRate?: string | undefined;
                ingestionInfo?: YouTube.Schema.IngestionInfo | undefined;
                ingestionType?: string | undefined;
                resolution?: string | undefined;
            }
            interface Channel {
                auditDetails?: YouTube.Schema.ChannelAuditDetails | undefined;
                brandingSettings?: YouTube.Schema.ChannelBrandingSettings | undefined;
                contentDetails?: YouTube.Schema.ChannelContentDetails | undefined;
                contentOwnerDetails?: YouTube.Schema.ChannelContentOwnerDetails | undefined;
                conversionPings?: YouTube.Schema.ChannelConversionPings | undefined;
                etag?: string | undefined;
                id?: string | undefined;
                invideoPromotion?: YouTube.Schema.InvideoPromotion | undefined;
                kind?: string | undefined;
                localizations?: object | undefined;
                snippet?: YouTube.Schema.ChannelSnippet | undefined;
                statistics?: YouTube.Schema.ChannelStatistics | undefined;
                status?: YouTube.Schema.ChannelStatus | undefined;
                topicDetails?: YouTube.Schema.ChannelTopicDetails | undefined;
            }
            interface ChannelAuditDetails {
                communityGuidelinesGoodStanding?: boolean | undefined;
                contentIdClaimsGoodStanding?: boolean | undefined;
                copyrightStrikesGoodStanding?: boolean | undefined;
            }
            interface ChannelBannerResource {
                etag?: string | undefined;
                kind?: string | undefined;
                url?: string | undefined;
            }
            interface ChannelBrandingSettings {
                channel?: YouTube.Schema.ChannelSettings | undefined;
                hints?: YouTube.Schema.PropertyValue[] | undefined;
                image?: YouTube.Schema.ImageSettings | undefined;
                watch?: YouTube.Schema.WatchSettings | undefined;
            }
            interface ChannelContentDetails {
                relatedPlaylists?: YouTube.Schema.ChannelContentDetailsRelatedPlaylists | undefined;
            }
            interface ChannelContentDetailsRelatedPlaylists {
                favorites?: string | undefined;
                likes?: string | undefined;
                uploads?: string | undefined;
                watchHistory?: string | undefined;
                watchLater?: string | undefined;
            }
            interface ChannelContentOwnerDetails {
                contentOwner?: string | undefined;
                timeLinked?: string | undefined;
            }
            interface ChannelConversionPing {
                context?: string | undefined;
                conversionUrl?: string | undefined;
            }
            interface ChannelConversionPings {
                pings?: YouTube.Schema.ChannelConversionPing[] | undefined;
            }
            interface ChannelListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.Channel[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YouTube.Schema.PageInfo | undefined;
                prevPageToken?: string | undefined;
                tokenPagination?: any; // Schema.TokenPagination
                visitorId?: string | undefined;
            }
            interface ChannelLocalization {
                description?: string | undefined;
                title?: string | undefined;
            }
            interface ChannelProfileDetails {
                channelId?: string | undefined;
                channelUrl?: string | undefined;
                displayName?: string | undefined;
                profileImageUrl?: string | undefined;
            }
            interface ChannelSection {
                contentDetails?: YouTube.Schema.ChannelSectionContentDetails | undefined;
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                localizations?: object | undefined;
                snippet?: YouTube.Schema.ChannelSectionSnippet | undefined;
                targeting?: YouTube.Schema.ChannelSectionTargeting | undefined;
            }
            interface ChannelSectionContentDetails {
                channels?: string[] | undefined;
                playlists?: string[] | undefined;
            }
            interface ChannelSectionListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.ChannelSection[] | undefined;
                kind?: string | undefined;
                visitorId?: string | undefined;
            }
            interface ChannelSectionLocalization {
                title?: string | undefined;
            }
            interface ChannelSectionSnippet {
                channelId?: string | undefined;
                defaultLanguage?: string | undefined;
                localized?: YouTube.Schema.ChannelSectionLocalization | undefined;
                position?: number | undefined;
                style?: string | undefined;
                title?: string | undefined;
                type?: string | undefined;
            }
            interface ChannelSectionTargeting {
                countries?: string[] | undefined;
                languages?: string[] | undefined;
                regions?: string[] | undefined;
            }
            interface ChannelSettings {
                country?: string | undefined;
                defaultLanguage?: string | undefined;
                defaultTab?: string | undefined;
                description?: string | undefined;
                featuredChannelsTitle?: string | undefined;
                featuredChannelsUrls?: string[] | undefined;
                keywords?: string | undefined;
                moderateComments?: boolean | undefined;
                profileColor?: string | undefined;
                showBrowseView?: boolean | undefined;
                showRelatedChannels?: boolean | undefined;
                title?: string | undefined;
                trackingAnalyticsAccountId?: string | undefined;
                unsubscribedTrailer?: string | undefined;
            }
            interface ChannelSnippet {
                country?: string | undefined;
                customUrl?: string | undefined;
                defaultLanguage?: string | undefined;
                description?: string | undefined;
                localized?: YouTube.Schema.ChannelLocalization | undefined;
                publishedAt?: string | undefined;
                thumbnails?: YouTube.Schema.ThumbnailDetails | undefined;
                title?: string | undefined;
            }
            interface ChannelStatistics {
                commentCount?: string | undefined;
                hiddenSubscriberCount?: boolean | undefined;
                subscriberCount?: string | undefined;
                videoCount?: string | undefined;
                viewCount?: string | undefined;
            }
            interface ChannelStatus {
                isLinked?: boolean | undefined;
                longUploadsStatus?: string | undefined;
                privacyStatus?: string | undefined;
            }
            interface ChannelTopicDetails {
                topicCategories?: string[] | undefined;
                topicIds?: string[] | undefined;
            }
            interface Comment {
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.CommentSnippet | undefined;
            }
            interface CommentListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.Comment[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YouTube.Schema.PageInfo | undefined;
                tokenPagination?: any; // Schema.TokenPagination
                visitorId?: string | undefined;
            }
            interface CommentSnippet {
                authorChannelId?: object | undefined;
                authorChannelUrl?: string | undefined;
                authorDisplayName?: string | undefined;
                authorProfileImageUrl?: string | undefined;
                canRate?: boolean | undefined;
                channelId?: string | undefined;
                likeCount?: number | undefined;
                moderationStatus?: string | undefined;
                parentId?: string | undefined;
                publishedAt?: string | undefined;
                textDisplay?: string | undefined;
                textOriginal?: string | undefined;
                updatedAt?: string | undefined;
                videoId?: string | undefined;
                viewerRating?: string | undefined;
            }
            interface CommentThread {
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                replies?: YouTube.Schema.CommentThreadReplies | undefined;
                snippet?: YouTube.Schema.CommentThreadSnippet | undefined;
            }
            interface CommentThreadListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.CommentThread[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YouTube.Schema.PageInfo | undefined;
                tokenPagination?: any; // Schema.TokenPagination
                visitorId?: string | undefined;
            }
            interface CommentThreadReplies {
                comments?: YouTube.Schema.Comment[] | undefined;
            }
            interface CommentThreadSnippet {
                canReply?: boolean | undefined;
                channelId?: string | undefined;
                isPublic?: boolean | undefined;
                topLevelComment?: YouTube.Schema.Comment | undefined;
                totalReplyCount?: number | undefined;
                videoId?: string | undefined;
            }
            interface ContentRating {
                acbRating?: string | undefined;
                agcomRating?: string | undefined;
                anatelRating?: string | undefined;
                bbfcRating?: string | undefined;
                bfvcRating?: string | undefined;
                bmukkRating?: string | undefined;
                catvRating?: string | undefined;
                catvfrRating?: string | undefined;
                cbfcRating?: string | undefined;
                cccRating?: string | undefined;
                cceRating?: string | undefined;
                chfilmRating?: string | undefined;
                chvrsRating?: string | undefined;
                cicfRating?: string | undefined;
                cnaRating?: string | undefined;
                cncRating?: string | undefined;
                csaRating?: string | undefined;
                cscfRating?: string | undefined;
                czfilmRating?: string | undefined;
                djctqRating?: string | undefined;
                djctqRatingReasons?: string[] | undefined;
                ecbmctRating?: string | undefined;
                eefilmRating?: string | undefined;
                egfilmRating?: string | undefined;
                eirinRating?: string | undefined;
                fcbmRating?: string | undefined;
                fcoRating?: string | undefined;
                fmocRating?: string | undefined;
                fpbRating?: string | undefined;
                fpbRatingReasons?: string[] | undefined;
                fskRating?: string | undefined;
                grfilmRating?: string | undefined;
                icaaRating?: string | undefined;
                ifcoRating?: string | undefined;
                ilfilmRating?: string | undefined;
                incaaRating?: string | undefined;
                kfcbRating?: string | undefined;
                kijkwijzerRating?: string | undefined;
                kmrbRating?: string | undefined;
                lsfRating?: string | undefined;
                mccaaRating?: string | undefined;
                mccypRating?: string | undefined;
                mcstRating?: string | undefined;
                mdaRating?: string | undefined;
                medietilsynetRating?: string | undefined;
                mekuRating?: string | undefined;
                menaMpaaRating?: string | undefined;
                mibacRating?: string | undefined;
                mocRating?: string | undefined;
                moctwRating?: string | undefined;
                mpaaRating?: string | undefined;
                mpaatRating?: string | undefined;
                mtrcbRating?: string | undefined;
                nbcRating?: string | undefined;
                nbcplRating?: string | undefined;
                nfrcRating?: string | undefined;
                nfvcbRating?: string | undefined;
                nkclvRating?: string | undefined;
                oflcRating?: string | undefined;
                pefilmRating?: string | undefined;
                rcnofRating?: string | undefined;
                resorteviolenciaRating?: string | undefined;
                rtcRating?: string | undefined;
                rteRating?: string | undefined;
                russiaRating?: string | undefined;
                skfilmRating?: string | undefined;
                smaisRating?: string | undefined;
                smsaRating?: string | undefined;
                tvpgRating?: string | undefined;
                ytRating?: string | undefined;
            }
            interface GeoPoint {
                altitude?: number | undefined;
                latitude?: number | undefined;
                longitude?: number | undefined;
            }
            interface GuideCategory {
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.GuideCategorySnippet | undefined;
            }
            interface GuideCategoryListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.GuideCategory[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YouTube.Schema.PageInfo | undefined;
                prevPageToken?: string | undefined;
                tokenPagination?: any; // Schema.TokenPagination
                visitorId?: string | undefined;
            }
            interface GuideCategorySnippet {
                channelId?: string | undefined;
                title?: string | undefined;
            }
            interface I18nLanguage {
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.I18nLanguageSnippet | undefined;
            }
            interface I18nLanguageListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.I18nLanguage[] | undefined;
                kind?: string | undefined;
                visitorId?: string | undefined;
            }
            interface I18nLanguageSnippet {
                hl?: string | undefined;
                name?: string | undefined;
            }
            interface I18nRegion {
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.I18nRegionSnippet | undefined;
            }
            interface I18nRegionListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.I18nRegion[] | undefined;
                kind?: string | undefined;
                visitorId?: string | undefined;
            }
            interface I18nRegionSnippet {
                gl?: string | undefined;
                name?: string | undefined;
            }
            interface ImageSettings {
                backgroundImageUrl?: YouTube.Schema.LocalizedProperty | undefined;
                bannerExternalUrl?: string | undefined;
                bannerImageUrl?: string | undefined;
                bannerMobileExtraHdImageUrl?: string | undefined;
                bannerMobileHdImageUrl?: string | undefined;
                bannerMobileImageUrl?: string | undefined;
                bannerMobileLowImageUrl?: string | undefined;
                bannerMobileMediumHdImageUrl?: string | undefined;
                bannerTabletExtraHdImageUrl?: string | undefined;
                bannerTabletHdImageUrl?: string | undefined;
                bannerTabletImageUrl?: string | undefined;
                bannerTabletLowImageUrl?: string | undefined;
                bannerTvHighImageUrl?: string | undefined;
                bannerTvImageUrl?: string | undefined;
                bannerTvLowImageUrl?: string | undefined;
                bannerTvMediumImageUrl?: string | undefined;
                largeBrandedBannerImageImapScript?: YouTube.Schema.LocalizedProperty | undefined;
                largeBrandedBannerImageUrl?: YouTube.Schema.LocalizedProperty | undefined;
                smallBrandedBannerImageImapScript?: YouTube.Schema.LocalizedProperty | undefined;
                smallBrandedBannerImageUrl?: YouTube.Schema.LocalizedProperty | undefined;
                trackingImageUrl?: string | undefined;
                watchIconImageUrl?: string | undefined;
            }
            interface IngestionInfo {
                backupIngestionAddress?: string | undefined;
                ingestionAddress?: string | undefined;
                streamName?: string | undefined;
            }
            interface InvideoBranding {
                imageBytes?: string | undefined;
                imageUrl?: string | undefined;
                position?: YouTube.Schema.InvideoPosition | undefined;
                targetChannelId?: string | undefined;
                timing?: YouTube.Schema.InvideoTiming | undefined;
            }
            interface InvideoPosition {
                cornerPosition?: string | undefined;
                type?: string | undefined;
            }
            interface InvideoPromotion {
                defaultTiming?: YouTube.Schema.InvideoTiming | undefined;
                items?: YouTube.Schema.PromotedItem[] | undefined;
                position?: YouTube.Schema.InvideoPosition | undefined;
                useSmartTiming?: boolean | undefined;
            }
            interface InvideoTiming {
                durationMs?: string | undefined;
                offsetMs?: string | undefined;
                type?: string | undefined;
            }
            interface LanguageTag {
                value?: string | undefined;
            }
            interface LiveBroadcast {
                contentDetails?: YouTube.Schema.LiveBroadcastContentDetails | undefined;
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.LiveBroadcastSnippet | undefined;
                statistics?: YouTube.Schema.LiveBroadcastStatistics | undefined;
                status?: YouTube.Schema.LiveBroadcastStatus | undefined;
            }
            interface LiveBroadcastContentDetails {
                boundStreamId?: string | undefined;
                boundStreamLastUpdateTimeMs?: string | undefined;
                closedCaptionsType?: string | undefined;
                enableAutoStart?: boolean | undefined;
                enableClosedCaptions?: boolean | undefined;
                enableContentEncryption?: boolean | undefined;
                enableDvr?: boolean | undefined;
                enableEmbed?: boolean | undefined;
                enableLowLatency?: boolean | undefined;
                latencyPreference?: string | undefined;
                mesh?: string | undefined;
                monitorStream?: YouTube.Schema.MonitorStreamInfo | undefined;
                projection?: string | undefined;
                recordFromStart?: boolean | undefined;
                startWithSlate?: boolean | undefined;
                stereoLayout?: string | undefined;
            }
            interface LiveBroadcastListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.LiveBroadcast[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YouTube.Schema.PageInfo | undefined;
                prevPageToken?: string | undefined;
                tokenPagination?: any; // Schema.TokenPagination
                visitorId?: string | undefined;
            }
            interface LiveBroadcastSnippet {
                actualEndTime?: string | undefined;
                actualStartTime?: string | undefined;
                channelId?: string | undefined;
                description?: string | undefined;
                isDefaultBroadcast?: boolean | undefined;
                liveChatId?: string | undefined;
                publishedAt?: string | undefined;
                scheduledEndTime?: string | undefined;
                scheduledStartTime?: string | undefined;
                thumbnails?: YouTube.Schema.ThumbnailDetails | undefined;
                title?: string | undefined;
            }
            interface LiveBroadcastStatistics {
                concurrentViewers?: string | undefined;
                totalChatCount?: string | undefined;
            }
            interface LiveBroadcastStatus {
                lifeCycleStatus?: string | undefined;
                liveBroadcastPriority?: string | undefined;
                privacyStatus?: string | undefined;
                recordingStatus?: string | undefined;
            }
            interface LiveChatBan {
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.LiveChatBanSnippet | undefined;
            }
            interface LiveChatBanSnippet {
                banDurationSeconds?: string | undefined;
                bannedUserDetails?: YouTube.Schema.ChannelProfileDetails | undefined;
                liveChatId?: string | undefined;
                type?: string | undefined;
            }
            interface LiveChatFanFundingEventDetails {
                amountDisplayString?: string | undefined;
                amountMicros?: string | undefined;
                currency?: string | undefined;
                userComment?: string | undefined;
            }
            interface LiveChatMessage {
                authorDetails?: YouTube.Schema.LiveChatMessageAuthorDetails | undefined;
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.LiveChatMessageSnippet | undefined;
            }
            interface LiveChatMessageAuthorDetails {
                channelId?: string | undefined;
                channelUrl?: string | undefined;
                displayName?: string | undefined;
                isChatModerator?: boolean | undefined;
                isChatOwner?: boolean | undefined;
                isChatSponsor?: boolean | undefined;
                isVerified?: boolean | undefined;
                profileImageUrl?: string | undefined;
            }
            interface LiveChatMessageDeletedDetails {
                deletedMessageId?: string | undefined;
            }
            interface LiveChatMessageListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.LiveChatMessage[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                offlineAt?: string | undefined;
                pageInfo?: YouTube.Schema.PageInfo | undefined;
                pollingIntervalMillis?: number | undefined;
                tokenPagination?: any; // Schema.TokenPagination
                visitorId?: string | undefined;
            }
            interface LiveChatMessageRetractedDetails {
                retractedMessageId?: string | undefined;
            }
            interface LiveChatMessageSnippet {
                authorChannelId?: string | undefined;
                displayMessage?: string | undefined;
                fanFundingEventDetails?: YouTube.Schema.LiveChatFanFundingEventDetails | undefined;
                hasDisplayContent?: boolean | undefined;
                liveChatId?: string | undefined;
                messageDeletedDetails?: YouTube.Schema.LiveChatMessageDeletedDetails | undefined;
                messageRetractedDetails?: YouTube.Schema.LiveChatMessageRetractedDetails | undefined;
                pollClosedDetails?: YouTube.Schema.LiveChatPollClosedDetails | undefined;
                pollEditedDetails?: YouTube.Schema.LiveChatPollEditedDetails | undefined;
                pollOpenedDetails?: YouTube.Schema.LiveChatPollOpenedDetails | undefined;
                pollVotedDetails?: YouTube.Schema.LiveChatPollVotedDetails | undefined;
                publishedAt?: string | undefined;
                superChatDetails?: YouTube.Schema.LiveChatSuperChatDetails | undefined;
                superStickerDetails?: YouTube.Schema.LiveChatSuperStickerDetails | undefined;
                textMessageDetails?: YouTube.Schema.LiveChatTextMessageDetails | undefined;
                type?: string | undefined;
                userBannedDetails?: YouTube.Schema.LiveChatUserBannedMessageDetails | undefined;
            }
            interface LiveChatModerator {
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.LiveChatModeratorSnippet | undefined;
            }
            interface LiveChatModeratorListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.LiveChatModerator[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YouTube.Schema.PageInfo | undefined;
                prevPageToken?: string | undefined;
                tokenPagination?: any; // Schema.TokenPagination
                visitorId?: string | undefined;
            }
            interface LiveChatModeratorSnippet {
                liveChatId?: string | undefined;
                moderatorDetails?: YouTube.Schema.ChannelProfileDetails | undefined;
            }
            interface LiveChatPollClosedDetails {
                pollId?: string | undefined;
            }
            interface LiveChatPollEditedDetails {
                id?: string | undefined;
                items?: YouTube.Schema.LiveChatPollItem[] | undefined;
                prompt?: string | undefined;
            }
            interface LiveChatPollItem {
                description?: string | undefined;
                itemId?: string | undefined;
            }
            interface LiveChatPollOpenedDetails {
                id?: string | undefined;
                items?: YouTube.Schema.LiveChatPollItem[] | undefined;
                prompt?: string | undefined;
            }
            interface LiveChatPollVotedDetails {
                itemId?: string | undefined;
                pollId?: string | undefined;
            }
            interface LiveChatSuperChatDetails {
                amountDisplayString?: string | undefined;
                amountMicros?: string | undefined;
                currency?: string | undefined;
                tier?: number | undefined;
                userComment?: string | undefined;
            }
            interface LiveChatSuperStickerDetails {
                amountDisplayString?: string | undefined;
                amountMicros?: string | undefined;
                currency?: string | undefined;
                superStickerMetadata?: YouTube.Schema.SuperStickerMetadata | undefined;
                tier?: number | undefined;
            }
            interface LiveChatTextMessageDetails {
                messageText?: string | undefined;
            }
            interface LiveChatUserBannedMessageDetails {
                banDurationSeconds?: string | undefined;
                banType?: string | undefined;
                bannedUserDetails?: YouTube.Schema.ChannelProfileDetails | undefined;
            }
            interface LiveStream {
                cdn?: YouTube.Schema.CdnSettings | undefined;
                contentDetails?: YouTube.Schema.LiveStreamContentDetails | undefined;
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.LiveStreamSnippet | undefined;
                status?: YouTube.Schema.LiveStreamStatus | undefined;
            }
            interface LiveStreamConfigurationIssue {
                description?: string | undefined;
                reason?: string | undefined;
                severity?: string | undefined;
                type?: string | undefined;
            }
            interface LiveStreamContentDetails {
                closedCaptionsIngestionUrl?: string | undefined;
                isReusable?: boolean | undefined;
            }
            interface LiveStreamHealthStatus {
                configurationIssues?: YouTube.Schema.LiveStreamConfigurationIssue[] | undefined;
                lastUpdateTimeSeconds?: string | undefined;
                status?: string | undefined;
            }
            interface LiveStreamListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.LiveStream[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YouTube.Schema.PageInfo | undefined;
                prevPageToken?: string | undefined;
                tokenPagination?: any; // Schema.TokenPagination
                visitorId?: string | undefined;
            }
            interface LiveStreamSnippet {
                channelId?: string | undefined;
                description?: string | undefined;
                isDefaultStream?: boolean | undefined;
                publishedAt?: string | undefined;
                title?: string | undefined;
            }
            interface LiveStreamStatus {
                healthStatus?: YouTube.Schema.LiveStreamHealthStatus | undefined;
                streamStatus?: string | undefined;
            }
            interface LocalizedProperty {
                default?: string | undefined;
                defaultLanguage?: YouTube.Schema.LanguageTag | undefined;
                localized?: YouTube.Schema.LocalizedString[] | undefined;
            }
            interface LocalizedString {
                language?: string | undefined;
                value?: string | undefined;
            }
            interface MonitorStreamInfo {
                broadcastStreamDelayMs?: number | undefined;
                embedHtml?: string | undefined;
                enableMonitorStream?: boolean | undefined;
            }
            interface Nonprofit {
                nonprofitId?: YouTube.Schema.NonprofitId | undefined;
                nonprofitLegalName?: string | undefined;
            }
            interface NonprofitId {
                value?: string | undefined;
            }
            interface PageInfo {
                resultsPerPage?: number | undefined;
                totalResults?: number | undefined;
            }
            interface Playlist {
                contentDetails?: YouTube.Schema.PlaylistContentDetails | undefined;
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                localizations?: object | undefined;
                player?: YouTube.Schema.PlaylistPlayer | undefined;
                snippet?: YouTube.Schema.PlaylistSnippet | undefined;
                status?: YouTube.Schema.PlaylistStatus | undefined;
            }
            interface PlaylistContentDetails {
                itemCount?: number | undefined;
            }
            interface PlaylistItem {
                contentDetails?: YouTube.Schema.PlaylistItemContentDetails | undefined;
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.PlaylistItemSnippet | undefined;
                status?: YouTube.Schema.PlaylistItemStatus | undefined;
            }
            interface PlaylistItemContentDetails {
                endAt?: string | undefined;
                note?: string | undefined;
                startAt?: string | undefined;
                videoId?: string | undefined;
                videoPublishedAt?: string | undefined;
            }
            interface PlaylistItemListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.PlaylistItem[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YouTube.Schema.PageInfo | undefined;
                prevPageToken?: string | undefined;
                tokenPagination?: any; // Schema.TokenPagination
                visitorId?: string | undefined;
            }
            interface PlaylistItemSnippet {
                channelId?: string | undefined;
                channelTitle?: string | undefined;
                description?: string | undefined;
                playlistId?: string | undefined;
                position?: number | undefined;
                publishedAt?: string | undefined;
                resourceId?: YouTube.Schema.ResourceId | undefined;
                thumbnails?: YouTube.Schema.ThumbnailDetails | undefined;
                title?: string | undefined;
            }
            interface PlaylistItemStatus {
                privacyStatus?: string | undefined;
            }
            interface PlaylistListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.Playlist[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YouTube.Schema.PageInfo | undefined;
                prevPageToken?: string | undefined;
                tokenPagination?: any; // Schema.TokenPagination
                visitorId?: string | undefined;
            }
            interface PlaylistLocalization {
                description?: string | undefined;
                title?: string | undefined;
            }
            interface PlaylistPlayer {
                embedHtml?: string | undefined;
            }
            interface PlaylistSnippet {
                channelId?: string | undefined;
                channelTitle?: string | undefined;
                defaultLanguage?: string | undefined;
                description?: string | undefined;
                localized?: YouTube.Schema.PlaylistLocalization | undefined;
                publishedAt?: string | undefined;
                tags?: string[] | undefined;
                thumbnails?: YouTube.Schema.ThumbnailDetails | undefined;
                title?: string | undefined;
            }
            interface PlaylistStatus {
                privacyStatus?: string | undefined;
            }
            interface PromotedItem {
                customMessage?: string | undefined;
                id?: YouTube.Schema.PromotedItemId | undefined;
                promotedByContentOwner?: boolean | undefined;
                timing?: YouTube.Schema.InvideoTiming | undefined;
            }
            interface PromotedItemId {
                recentlyUploadedBy?: string | undefined;
                type?: string | undefined;
                videoId?: string | undefined;
                websiteUrl?: string | undefined;
            }
            interface PropertyValue {
                property?: string | undefined;
                value?: string | undefined;
            }
            interface ResourceId {
                channelId?: string | undefined;
                kind?: string | undefined;
                playlistId?: string | undefined;
                videoId?: string | undefined;
            }
            interface SearchListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.SearchResult[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YouTube.Schema.PageInfo | undefined;
                prevPageToken?: string | undefined;
                regionCode?: string | undefined;
                tokenPagination?: any; // Schema.TokenPagination
                visitorId?: string | undefined;
            }
            interface SearchResult {
                etag?: string | undefined;
                id?: YouTube.Schema.ResourceId | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.SearchResultSnippet | undefined;
            }
            interface SearchResultSnippet {
                channelId?: string | undefined;
                channelTitle?: string | undefined;
                description?: string | undefined;
                liveBroadcastContent?: string | undefined;
                publishedAt?: string | undefined;
                thumbnails?: YouTube.Schema.ThumbnailDetails | undefined;
                title?: string | undefined;
            }
            interface Sponsor {
                etag?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.SponsorSnippet | undefined;
            }
            interface SponsorListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.Sponsor[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YouTube.Schema.PageInfo | undefined;
                tokenPagination?: any; // Schema.TokenPagination
                visitorId?: string | undefined;
            }
            interface SponsorSnippet {
                channelId?: string | undefined;
                cumulativeDurationMonths?: number | undefined;
                sponsorDetails?: YouTube.Schema.ChannelProfileDetails | undefined;
                sponsorSince?: string | undefined;
            }
            interface Subscription {
                contentDetails?: YouTube.Schema.SubscriptionContentDetails | undefined;
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.SubscriptionSnippet | undefined;
                subscriberSnippet?: YouTube.Schema.SubscriptionSubscriberSnippet | undefined;
            }
            interface SubscriptionContentDetails {
                activityType?: string | undefined;
                newItemCount?: number | undefined;
                totalItemCount?: number | undefined;
            }
            interface SubscriptionListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.Subscription[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YouTube.Schema.PageInfo | undefined;
                prevPageToken?: string | undefined;
                tokenPagination?: any; // Schema.TokenPagination
                visitorId?: string | undefined;
            }
            interface SubscriptionSnippet {
                channelId?: string | undefined;
                channelTitle?: string | undefined;
                description?: string | undefined;
                publishedAt?: string | undefined;
                resourceId?: YouTube.Schema.ResourceId | undefined;
                thumbnails?: YouTube.Schema.ThumbnailDetails | undefined;
                title?: string | undefined;
            }
            interface SubscriptionSubscriberSnippet {
                channelId?: string | undefined;
                description?: string | undefined;
                thumbnails?: YouTube.Schema.ThumbnailDetails | undefined;
                title?: string | undefined;
            }
            interface SuperChatEvent {
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.SuperChatEventSnippet | undefined;
            }
            interface SuperChatEventListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.SuperChatEvent[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YouTube.Schema.PageInfo | undefined;
                tokenPagination?: any; // Schema.TokenPagination
                visitorId?: string | undefined;
            }
            interface SuperChatEventSnippet {
                amountMicros?: string | undefined;
                channelId?: string | undefined;
                commentText?: string | undefined;
                createdAt?: string | undefined;
                currency?: string | undefined;
                displayString?: string | undefined;
                isSuperChatForGood?: boolean | undefined;
                isSuperStickerEvent?: boolean | undefined;
                messageType?: number | undefined;
                nonprofit?: YouTube.Schema.Nonprofit | undefined;
                superStickerMetadata?: YouTube.Schema.SuperStickerMetadata | undefined;
                supporterDetails?: YouTube.Schema.ChannelProfileDetails | undefined;
            }
            interface SuperStickerMetadata {
                altText?: string | undefined;
                altTextLanguage?: string | undefined;
                stickerId?: string | undefined;
            }
            interface Thumbnail {
                height?: number | undefined;
                url?: string | undefined;
                width?: number | undefined;
            }
            interface ThumbnailDetails {
                default?: YouTube.Schema.Thumbnail | undefined;
                high?: YouTube.Schema.Thumbnail | undefined;
                maxres?: YouTube.Schema.Thumbnail | undefined;
                medium?: YouTube.Schema.Thumbnail | undefined;
                standard?: YouTube.Schema.Thumbnail | undefined;
            }
            interface ThumbnailSetResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.ThumbnailDetails[] | undefined;
                kind?: string | undefined;
                visitorId?: string | undefined;
            }
            interface Video {
                ageGating?: YouTube.Schema.VideoAgeGating | undefined;
                contentDetails?: YouTube.Schema.VideoContentDetails | undefined;
                etag?: string | undefined;
                fileDetails?: YouTube.Schema.VideoFileDetails | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                liveStreamingDetails?: YouTube.Schema.VideoLiveStreamingDetails | undefined;
                localizations?: object | undefined;
                monetizationDetails?: YouTube.Schema.VideoMonetizationDetails | undefined;
                player?: YouTube.Schema.VideoPlayer | undefined;
                processingDetails?: YouTube.Schema.VideoProcessingDetails | undefined;
                projectDetails?: YouTube.Schema.VideoProjectDetails | undefined;
                recordingDetails?: YouTube.Schema.VideoRecordingDetails | undefined;
                snippet?: YouTube.Schema.VideoSnippet | undefined;
                statistics?: YouTube.Schema.VideoStatistics | undefined;
                status?: YouTube.Schema.VideoStatus | undefined;
                suggestions?: YouTube.Schema.VideoSuggestions | undefined;
                topicDetails?: YouTube.Schema.VideoTopicDetails | undefined;
            }
            interface VideoAbuseReport {
                comments?: string | undefined;
                language?: string | undefined;
                reasonId?: string | undefined;
                secondaryReasonId?: string | undefined;
                videoId?: string | undefined;
            }
            interface VideoAbuseReportReason {
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.VideoAbuseReportReasonSnippet | undefined;
            }
            interface VideoAbuseReportReasonListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.VideoAbuseReportReason[] | undefined;
                kind?: string | undefined;
                visitorId?: string | undefined;
            }
            interface VideoAbuseReportReasonSnippet {
                label?: string | undefined;
                secondaryReasons?: YouTube.Schema.VideoAbuseReportSecondaryReason[] | undefined;
            }
            interface VideoAbuseReportSecondaryReason {
                id?: string | undefined;
                label?: string | undefined;
            }
            interface VideoAgeGating {
                alcoholContent?: boolean | undefined;
                restricted?: boolean | undefined;
                videoGameRating?: string | undefined;
            }
            interface VideoCategory {
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTube.Schema.VideoCategorySnippet | undefined;
            }
            interface VideoCategoryListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.VideoCategory[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YouTube.Schema.PageInfo | undefined;
                prevPageToken?: string | undefined;
                tokenPagination?: any; // Schema.TokenPagination
                visitorId?: string | undefined;
            }
            interface VideoCategorySnippet {
                assignable?: boolean | undefined;
                channelId?: string | undefined;
                title?: string | undefined;
            }
            interface VideoContentDetails {
                caption?: string | undefined;
                contentRating?: YouTube.Schema.ContentRating | undefined;
                countryRestriction?: YouTube.Schema.AccessPolicy | undefined;
                definition?: string | undefined;
                dimension?: string | undefined;
                duration?: string | undefined;
                hasCustomThumbnail?: boolean | undefined;
                licensedContent?: boolean | undefined;
                projection?: string | undefined;
                regionRestriction?: YouTube.Schema.VideoContentDetailsRegionRestriction | undefined;
            }
            interface VideoContentDetailsRegionRestriction {
                allowed?: string[] | undefined;
                blocked?: string[] | undefined;
            }
            interface VideoFileDetails {
                audioStreams?: YouTube.Schema.VideoFileDetailsAudioStream[] | undefined;
                bitrateBps?: string | undefined;
                container?: string | undefined;
                creationTime?: string | undefined;
                durationMs?: string | undefined;
                fileName?: string | undefined;
                fileSize?: string | undefined;
                fileType?: string | undefined;
                videoStreams?: YouTube.Schema.VideoFileDetailsVideoStream[] | undefined;
            }
            interface VideoFileDetailsAudioStream {
                bitrateBps?: string | undefined;
                channelCount?: number | undefined;
                codec?: string | undefined;
                vendor?: string | undefined;
            }
            interface VideoFileDetailsVideoStream {
                aspectRatio?: number | undefined;
                bitrateBps?: string | undefined;
                codec?: string | undefined;
                frameRateFps?: number | undefined;
                heightPixels?: number | undefined;
                rotation?: string | undefined;
                vendor?: string | undefined;
                widthPixels?: number | undefined;
            }
            interface VideoGetRatingResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.VideoRating[] | undefined;
                kind?: string | undefined;
                visitorId?: string | undefined;
            }
            interface VideoListResponse {
                etag?: string | undefined;
                eventId?: string | undefined;
                items?: YouTube.Schema.Video[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
                pageInfo?: YouTube.Schema.PageInfo | undefined;
                prevPageToken?: string | undefined;
                tokenPagination?: any; // Schema.TokenPagination
                visitorId?: string | undefined;
            }
            interface VideoLiveStreamingDetails {
                activeLiveChatId?: string | undefined;
                actualEndTime?: string | undefined;
                actualStartTime?: string | undefined;
                concurrentViewers?: string | undefined;
                scheduledEndTime?: string | undefined;
                scheduledStartTime?: string | undefined;
            }
            interface VideoLocalization {
                description?: string | undefined;
                title?: string | undefined;
            }
            interface VideoMonetizationDetails {
                access?: YouTube.Schema.AccessPolicy | undefined;
            }
            interface VideoPlayer {
                embedHeight?: string | undefined;
                embedHtml?: string | undefined;
                embedWidth?: string | undefined;
            }
            interface VideoProcessingDetails {
                editorSuggestionsAvailability?: string | undefined;
                fileDetailsAvailability?: string | undefined;
                processingFailureReason?: string | undefined;
                processingIssuesAvailability?: string | undefined;
                processingProgress?: YouTube.Schema.VideoProcessingDetailsProcessingProgress | undefined;
                processingStatus?: string | undefined;
                tagSuggestionsAvailability?: string | undefined;
                thumbnailsAvailability?: string | undefined;
            }
            interface VideoProcessingDetailsProcessingProgress {
                partsProcessed?: string | undefined;
                partsTotal?: string | undefined;
                timeLeftMs?: string | undefined;
            }
            interface VideoProjectDetails {
                tags?: string[] | undefined;
            }
            interface VideoRating {
                rating?: string | undefined;
                videoId?: string | undefined;
            }
            interface VideoRecordingDetails {
                location?: YouTube.Schema.GeoPoint | undefined;
                locationDescription?: string | undefined;
                recordingDate?: string | undefined;
            }
            interface VideoSnippet {
                categoryId?: string | undefined;
                channelId?: string | undefined;
                channelTitle?: string | undefined;
                defaultAudioLanguage?: string | undefined;
                defaultLanguage?: string | undefined;
                description?: string | undefined;
                liveBroadcastContent?: string | undefined;
                localized?: YouTube.Schema.VideoLocalization | undefined;
                publishedAt?: string | undefined;
                tags?: string[] | undefined;
                thumbnails?: YouTube.Schema.ThumbnailDetails | undefined;
                title?: string | undefined;
            }
            interface VideoStatistics {
                commentCount?: string | undefined;
                dislikeCount?: string | undefined;
                favoriteCount?: string | undefined;
                likeCount?: string | undefined;
                viewCount?: string | undefined;
            }
            interface VideoStatus {
                embeddable?: boolean | undefined;
                failureReason?: string | undefined;
                license?: string | undefined;
                privacyStatus?: string | undefined;
                publicStatsViewable?: boolean | undefined;
                publishAt?: string | undefined;
                rejectionReason?: string | undefined;
                uploadStatus?: string | undefined;
            }
            interface VideoSuggestions {
                editorSuggestions?: string[] | undefined;
                processingErrors?: string[] | undefined;
                processingHints?: string[] | undefined;
                processingWarnings?: string[] | undefined;
                tagSuggestions?: YouTube.Schema.VideoSuggestionsTagSuggestion[] | undefined;
            }
            interface VideoSuggestionsTagSuggestion {
                categoryRestricts?: string[] | undefined;
                tag?: string | undefined;
            }
            interface VideoTopicDetails {
                relevantTopicIds?: string[] | undefined;
                topicCategories?: string[] | undefined;
                topicIds?: string[] | undefined;
            }
            interface WatchSettings {
                backgroundColor?: string | undefined;
                featuredPlaylistId?: string | undefined;
                textColor?: string | undefined;
            }
        }
    }
    interface YouTube {
        Activities?: YouTube.Collection.ActivitiesCollection | undefined;
        Captions?: YouTube.Collection.CaptionsCollection | undefined;
        ChannelBanners?: YouTube.Collection.ChannelBannersCollection | undefined;
        ChannelSections?: YouTube.Collection.ChannelSectionsCollection | undefined;
        Channels?: YouTube.Collection.ChannelsCollection | undefined;
        CommentThreads?: YouTube.Collection.CommentThreadsCollection | undefined;
        Comments?: YouTube.Collection.CommentsCollection | undefined;
        GuideCategories?: YouTube.Collection.GuideCategoriesCollection | undefined;
        I18nLanguages?: YouTube.Collection.I18nLanguagesCollection | undefined;
        I18nRegions?: YouTube.Collection.I18nRegionsCollection | undefined;
        LiveBroadcasts?: YouTube.Collection.LiveBroadcastsCollection | undefined;
        LiveChatBans?: YouTube.Collection.LiveChatBansCollection | undefined;
        LiveChatMessages?: YouTube.Collection.LiveChatMessagesCollection | undefined;
        LiveChatModerators?: YouTube.Collection.LiveChatModeratorsCollection | undefined;
        LiveStreams?: YouTube.Collection.LiveStreamsCollection | undefined;
        PlaylistItems?: YouTube.Collection.PlaylistItemsCollection | undefined;
        Playlists?: YouTube.Collection.PlaylistsCollection | undefined;
        Search?: YouTube.Collection.SearchCollection | undefined;
        Sponsors?: YouTube.Collection.SponsorsCollection | undefined;
        Subscriptions?: YouTube.Collection.SubscriptionsCollection | undefined;
        SuperChatEvents?: YouTube.Collection.SuperChatEventsCollection | undefined;
        Thumbnails?: YouTube.Collection.ThumbnailsCollection | undefined;
        VideoAbuseReportReasons?: YouTube.Collection.VideoAbuseReportReasonsCollection | undefined;
        VideoCategories?: YouTube.Collection.VideoCategoriesCollection | undefined;
        Videos?: YouTube.Collection.VideosCollection | undefined;
        Watermarks?: YouTube.Collection.WatermarksCollection | undefined;
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
