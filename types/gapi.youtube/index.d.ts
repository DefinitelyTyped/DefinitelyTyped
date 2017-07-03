// Type definitions for YouTube Data API 3.0
// Project: https://developers.google.com/youtube/v3/
// Definitions by: Frank M <https://github.com/sgtfrankieboy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="gapi" />

declare namespace gapi.client.youtube {

    export interface activities {

        /**
         * Posts a bulletin for a specific channel.
         */
        insert(object: {
            /**
             * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.
             */
            part: string;
            /**
             * HTTP Request Body
             */
            RequestBody?: string;
        }): HttpRequest<GoogleApiYouTubeActivityResource>;

        /**
         * Returns a list of channel activity events that match the request criteria.
         */
        list(object: {
            /**
             * The part parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set part=snippet, the API response will also contain all of those nested properties.
             */
            part: string;
            /**
             * The channelId parameter specifies a unique YouTube channel ID. The API will then return a list of that channel's activities.
             */
            channelId?: string;
            /**
             * Set this parameter's value to true to retrieve the activity feed that displays on the YouTube home page for the currently authenticated user.
             */
            home?: boolean;
            /**
             * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
             */
            maxResults?: number;
            /**
             * Set this parameter's value to true to retrieve a feed of the authenticated user's activities.
             */
            mine?: boolean;
            /**
             * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
             */
            pageToken?: string;
            /**
             * The publishedAfter parameter specifies the earliest date and time that an activity could have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be included in the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
             */
            publishedAfter?: string;
            /**
             * The publishedBefore parameter specifies the date and time before which an activity must have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be excluded from the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
             */
            publishedBefore?: string;
            /**
             * The regionCode parameter instructs the API to return results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
             */
            regionCode?: string;
        }): HttpRequest<GoogleApiYouTubePaginationInfo<GoogleApiYouTubeActivityResource>>;

    }

    export interface channelBanners {

        /**
         * Uploads a channel banner to YouTube.
         */
        insert(object: {
            /**
             * The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
             */
            onBehalfOfContentOwner: string;
            /**
             * HTTP Request Body
             */
            RequestBody: string;
        }): HttpRequest<GoogleApiYouTubeChannelBannerResource>;
    }

    export interface channels {

        /**
         * Returns a collection of zero or more channel resources that match the request criteria.
         */
        list(object: {
            /**
             * The part parameter specifies a comma-separated list of one or more channel resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, statistics, topicDetails, and invideoPromotion. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set part=contentDetails, the API response will also contain all of those nested properties.
             */
            part: string;
            /**
             * The categoryId parameter specifies a YouTube guide category, thereby requesting YouTube channels associated with that category.
             */
            categoryId?: string;
            /**
             * The forUsername parameter specifies a YouTube username, thereby requesting the channel associated with that username.
             */
            forUsername?: string;
            /**
             * The id parameter specifies a comma-separated list of the YouTube channel ID(s) for the resource(s) that are being retrieved. In a channel resource, the id property specifies the channel's YouTube channel ID.
             */
            id?: string;
            /**
             * Set this parameter's value to true to instruct the API to only return channels managed by the content owner that the onBehalfOfContentOwner parameter specifies. The user must be authenticated as a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
             */
            managedByMe?: boolean;
            /**
             * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
             */
            maxResults?: number;
            /**
             * Set this parameter's value to true to instruct the API to only return channels owned by the authenticated user.
             */
            mine?: boolean;
            /**
             * Set this parameter's value to true to retrieve a list of channels that subscribed to the authenticated user's channel.
             */
            mySubscribers?: boolean;
            /**
             * The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
             */
            onBehalfOfContentOwner?: string;
            /**
             * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
             */
            pageToken?: string;
        }): HttpRequest<GoogleApiYouTubePaginationInfo<GoogleApiYouTubeChannelResource>>;

        /**
         * Updates a channel's metadata.
         */
        update(object: {
            /**
             * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are id and invideoPromotion. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.
             */
            part: string;
            /**
             * The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
             */
            onBehalfOfContentOwner?: string;
            /**
             * HTTP Request Body
             */
            RequestBody?: string;
        }): HttpRequest<GoogleApiYouTubeChannelResource>;

    }

    export interface guideCategories {

        /**
         * Returns a list of categories that can be associated with YouTube channels.
         */
        list(object: {
            /**
             * The part parameter specifies a comma-separated list of one or more guideCategory resource properties that the API response will include. The part names that you can include in the parameter value are id and snippet. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a guideCategory resource, the snippet property contains other properties, such as the category's title. If you set part=snippet, the API response will also contain all of those nested properties.
             */
            part: string;
            /**
             * The hl parameter specifies the language that will be used for text values in the API response.
             */
            hl?: string;
            /**
             * The id parameter specifies a comma-separated list of the YouTube channel category ID(s) for the resource(s) that are being retrieved. In a guideCategory resource, the id property specifies the YouTube channel category ID.
             */
            id?: string;
            /**
             * The regionCode parameter instructs the API to return the list of guide categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
             */
            regionCode?: string;
        }): HttpRequest<GoogleApiYouTubePageInfo<GoogleApiYouTubeGuideCategoryResource>>;

    }

    export interface playlistItems {

        /**
         * Deletes a playlist item.
         */
        delete(object: {
            /**
             * The id parameter specifies the YouTube playlist item ID for the playlist item that is being deleted. In a playlistItem resource, the id property specifies the playlist item's ID.
             */
            id: string;
        }): HttpRequest<GoogleApiYouTubePlaylistItemResource>;

        /**
         * Adds a resource to a playlist.
         */
        insert(object: {
            /**
             * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.
             */
            part: string;
            /**
             * HTTP Request Body
             */
            RequestBody?: string;
        }): HttpRequest<GoogleApiYouTubePlaylistItemResource>;

        /**
         * Returns a collection of playlist items that match the API request parameters. You can retrieve all of the playlist items in a specified playlist or retrieve one or more playlist items by their unique IDs.
         */
        list(object: {
            /**
             * The part parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set part=snippet, the API response will contain all of those properties.
             */
            part: string;
            /**
             * The id parameter specifies a comma-separated list of one or more unique playlist item IDs.
             */
            id?: string;
            /**
             * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
             */
            maxResults?: number;
            /**
             * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
             */
            pageToken?: string;
            /**
             * The playlistId parameter specifies the unique ID of the playlist for which you want to retrieve playlist items. Note that even though this is an optional parameter, every request to retrieve playlist items must specify a value for either the id parameter or the playlistId parameter.
             */
            playlistId?: string;
            /**
             * The videoId parameter specifies that the request should return only the playlist items that contain the specified video.
             */
            videoId?: string;
        }): HttpRequest<GoogleApiYouTubePaginationInfo<GoogleApiYouTubePlaylistItemResource>>;

        /**
         * Modifies a playlist item. For example, you could update the item's position in the playlist.
         */
        update(object: {
            /**
             * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist's privacy setting is contained in the status part. As such, if your request is updating a private playlist, and the request's part parameter value includes the status part, the playlist's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the playlist will revert to the default privacy setting.
             */
            part: string;
            /**
             * HTTP Request Body
             */
            RequestBody?: string;
        }): HttpRequest<GoogleApiYouTubePlaylistItemResource>;
    }

    export interface playlists {

        /**
         * Deletes a playlist.
         */
        delete(object: {
            /**
             * The id parameter specifies the YouTube playlist ID for the playlist that is being deleted. In a playlist resource, the id property specifies the playlist's ID.

             */
            id: string;
        }): HttpRequest<GoogleApiYouTubePlaylistResource>;

        /**
         * Creates a playlist.
         */
        insert(object: {
            /**
             * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and status.
             */
            part: string;
            /**
             * HTTP Request Body
             */
            RequestBody?: string;
        }): HttpRequest<GoogleApiYouTubePlaylistResource>;

        /**
         * Returns a collection of playlists that match the API request parameters. For example, you can retrieve all playlists that the authenticated user owns, or you can retrieve one or more playlists by their unique IDs.
         */
        list(object: {
            /**
             * The part parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and status. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set part=snippet, the API response will contain all of those properties.
             */
            part: string;
            /**
             * This value indicates that the API should only return the specified channel's playlists.
             */
            channelId?: string;
            /**
             * The id parameter specifies a comma-separated list of the YouTube playlist ID(s) for the resource(s) that are being retrieved. In a playlist resource, the id property specifies the playlist's YouTube playlist ID.
             */
            id?: string;
            /**
             * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
             */
            maxResults?: number;
            /**
             * Set this parameter's value to true to instruct the API to only return playlists owned by the authenticated user.
             */
            mine?: boolean;
            /**
             * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
             */
            pagetoken: string;
        }): HttpRequest<GoogleApiYouTubePaginationInfo<GoogleApiYouTubePlaylistResource>>;

        /**
         * Modifies a playlist. For example, you could change a playlist's title, description, or privacy status.
         */
        update(object: {
            /**
             * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist's privacy setting is contained in the status part. As such, if your request is updating a private playlist, and the request's part parameter value includes the status part, the playlist's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the playlist will revert to the default privacy setting.
             */
            part: string;
            /**
             * HTTP Request Body
             */
            RequestBody?: string;
        }): HttpRequest<GoogleApiYouTubePlaylistResource>;

    }

    export interface search {

        /**
         * Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource.
         */
        list(object: {
            /**
             * The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. The part names that you can include in the parameter value are id and snippet. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a search result, the snippet property contains other properties that identify the result's title, description, and so forth. If you set part=snippet, the API response will also contain all of those nested properties.
             */
            part: string;
            /**
             * The channelId parameter indicates that the API response should only contain resources created by the channel
             */
            channelId?: string;
            /**
             * The channelType parameter lets you restrict a search to a particular type of channel.
             */
            channelType?: string;
            /**
             * The forContentOwner parameter restricts the search to only retrieve resources owned by the content owner specified by the onBehalfOfContentOwner parameter. The user must be authenticated as a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
             */
            forContentOwner?: boolean;
            /**
             * The forMine parameter restricts the search to only retrieve videos owned by the authenticated user.
             */
            forMine?: boolean;
            /**
             * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
             */
            maxResults?: number;
            /**
             * The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
             */
            onBehalfOfContentOwner?: string;
            /**
             * The order parameter specifies the method that will be used to order resources in the API response.
             */
            order?: string;
            /**
             * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
             */
            pageToken?: string;
            /**
             * The publishedAfter parameter indicates that the API response should only contain resources created after the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
             */
            publishedAfter?: string;
            /**
             * The publishedBefore parameter indicates that the API response should only contain resources created before the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
             */
            publishedBefore?: string;
            /**
             * The q parameter specifies the query term to search for.
             */
            q?: string;
            /**
             * The regionCode parameter instructs the API to return search results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
             */
            regionCode?: string;
            /**
             * The relatedToVideoId parameter retrieves a list of videos that are related to the video that the parameter value identifies. The parameter value must be set to a YouTube video ID and, if you are using this parameter, the type parameter must be set to video.
             */
            relatedToVideoId?: string;
            /**
             * The safeSearch parameter indicates whether the search results should include restricted content as well as standard content.
             */
            safeSearch?: string;
            /**
             * The topicId parameter indicates that the API response should only contain resources associated with the specified topic. The value identifies a Freebase topic ID.
             */
            topicId?: string;
            /**
             * The type parameter restricts a search query to only retrieve a particular type of resource.
             */
            type?: string;
            /**
             * The videoCaption parameter indicates whether the API should filter video search results based on whether they have captions.
             */
            videoCaption?: string;
            /**
             * The videoCategoryId parameter filters video search results based on their category.
             */
            videoCategoryId?: string;
            /**
             * The videoDefinition parameter lets you restrict a search to only include either high definition (HD) or standard definition (SD) videos. HD videos are available for playback in at least 720p, though higher resolutions, like 1080p, might also be available.
             */
            videoDefinition?: string;
            /**
             * The videoDimension parameter lets you restrict a search to only retrieve 2D or 3D videos.
             */
            videoDimension?: string;
            /**
             * The videoDuration parameter filters video search results based on their duration.
             */
            videoDuration?: string;
            /**
             * The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage.
             */
            videoEmbeddable?: string;
            /**
             * The videoLicense parameter filters search results to only include videos with a particular license. YouTube lets video uploaders choose to attach either the Creative Commons license or the standard YouTube license to each of their videos.
             */
            videoLicense?: string;
            /**
             * The videoSyndicated parameter lets you to restrict a search to only videos that can be played outside youtube.com.
             */
            videoSyndicated?: string;
            /**
             * The videoType parameter lets you restrict a search to a particular type of videos.
             */
            videoType?: string;
        }): HttpRequest<GoogleApiYouTubePaginationInfo<GoogleApiYouTubeSearchResource>>;

    }

    export interface subscriptions {

        /**
         * Deletes a subscription.
         */
        delete(object: {
            /**
             * The id parameter specifies the YouTube subscription ID for the resource that is being deleted. In a subscription resource, the id property specifies the YouTube subscription ID.
             */
            id: string;
        }): HttpRequest<GoogleApiYouTubeSubscriptionResource>;

        /**
         * Adds a subscription for the authenticated user's channel.
         */
        insert(object: {
            /**
             * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.
             */
            part: string;
            /**
             * HTTP Request Body
             */
            RequestBody: string;
        }): HttpRequest<GoogleApiYouTubeSubscriptionResource>;

        /**
         * Returns subscription resources that match the API request criteria.
         */
        list(object: {
            /**
             * The part parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set part=snippet, the API response will also contain all of those nested properties.
             */
            part: string;
            /**
             * The channelId parameter specifies a YouTube channel ID. The API will only return that channel's subscriptions.
             */
            channelId?: string;
            /**
             * The forChannelId parameter specifies a comma-separated list of channel IDs. The API response will then only contain subscriptions matching those channels.
             */
            forChannelId?: string;
            /**
             * The id parameter specifies a comma-separated list of the YouTube subscription ID(s) for the resource(s) that are being retrieved. In a subscription resource, the id property specifies the YouTube subscription ID.
             */
            id?: string;
            /**
             * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
             */
            maxResults?: number;
            /**
             * Set this parameter's value to true to retrieve a feed of the authenticated user's subscriptions.
             */
            mine?: boolean;
            /**
             * Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user.
             */
            mySubscripbers?: boolean;
            /**
             * The order parameter specifies the method that will be used to sort resources in the API response.
             */
            order?: string;
            /**
             * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
             */
            pageToken?: string;
        }): HttpRequest<GoogleApiYouTubePaginationInfo<GoogleApiYouTubeSubscriptionResource>>;
    }

    export interface thumbnails {

        /**
         * Uploads a custom video thumbnail to YouTube and sets it for a video.
         */
        set(object: {
            /**
             * The videoId parameter specifies a YouTube video ID for which the custom video thumbnail is being provided.
             */
            videoId: string;
        }): HttpRequest<GoogleApiYouTubePageInfo<GoogleApiYouTubeThumbnailResource>>;

    }

    export interface videoCategories {

        /**
         * Returns a list of categories that can be associated with YouTube videos.
         */
        list(object: {
            /**
             * The part parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.
             */
            part: string;
            /**
             * The hl parameter specifies the language that should be used for text values in the API response.
             */
            hl?: string;
            /**
             * The id parameter specifies a comma-separated list of video category IDs for the resources that you are retrieving.
             */
            id?: string;
            /**
             * The regionCode parameter instructs the API to return the list of video categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
             */
            regionCode?: string;
        }): HttpRequest<GoogleApiYouTubePageInfo<GoogleApiYouTubeVideoCategoryResource>>;

    }

    export interface videos {

        /**
         * Deletes a YouTube video.
         */
        delete(object: {
            /**
             * The id parameter specifies the YouTube video ID for the resource that is being deleted. In a video resource, the id property specifies the video's ID.

             */
            id: string;
            /**
             * The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
             */
            onBehalfOfContentOwner?: string;
        }): HttpRequest<GoogleApiYouTubeVideoResource>;

        /**
         * Get user ratings for videos.
         */
        getRating(object: {
            /**
             * The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved. In a video resource, the id property specifies the video's ID.
             */
            id: string;
            /**
             * The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
             */
            onBehalfOfContentOwner?: string;
        }): HttpRequest<GoogleApiYouTubeVideoGetRatingResponse>;

        /**
         * Uploads a video to YouTube and optionally sets the video's metadata.
         */
        insert(object: {
            /**
             * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet, contentDetails, player, statistics, status, and topicDetails. However, not all of those parts contain properties that can be set when setting or updating a video's metadata. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
             */
            part: string;
            /**
             * The autoLevels parameter specifies whether the video should be auto-leveled by YouTube.
             */
            autoLevels?: boolean;
            /**
             * The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
             */
            onBehalfOfContentOwner?: string;
            /**
             * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners. The onBehalfOfContentOwnerChannel parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the channel specified in the parameter value. This parameter must be used in conjunction with the onBehalfOfContentOwner parameter, and the user must be authenticated using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. In addition, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
             */
            onBehalfOfContentOwnerChannel?: string;
            /**
             * The stabilize parameter specifies whether the video should be stabilized by YouTube.
             */
            stabilize?: boolean;
            /**
             * HTTP Request Body
             */
            RequestBody?: string;
        }): HttpRequest<GoogleApiYouTubeVideoResource>;

        /**
         * Returns a list of videos that match the API request parameters.
         */
        list(object: {
            /**
             * The part parameter specifies a comma-separated list of one or more video resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, player, statistics, status, and topicDetails. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set part=snippet, the API response will contain all of those properties.
             */
            part: string;
            /**
             * Set this parameter's value to mostPopular to instruct the API to return videos belonging to the chart of most popular videos.
             */
            chart: string;
            /**
             * The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved. In a video resource, the id property specifies the video's ID.
             */
            id: string;
            /**
             * The locale parameter selects a video chart available in the specified locale. If using this parameter, chart must also be set. The parameter value is an BCP 47 locale. Supported locales include ar_AE, ar_DZ, ar_EG, ar_JO, ar_MA, ar_SA, ar_TN, ar_YE, cs_CZ, de_DE, el_GR, en_AU, en_BE, en_CA, en_GB, en_GH, en_IE, en_IL, en_IN, en_KE, en_NG, en_NZ, en_SG, en_UG, en_US, en_ZA, es_AR, es_CL, es_CO, es_ES, es_MX, es_PE, fil_PH, fr_FR, hu_HU, id_ID, it_IT, ja_JP, ko_KR, ms_MY, nl_NL, pl_PL, pt_BR, ru_RU, sv_SE, tr_TR, zh_HK, zh_TW
             */
            locale: string;
            /**
             * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
             */
            maxResults: number;
            /**
             * Set this parameter's value to like or dislike to instruct the API to only return videos liked or disliked by the authenticated user.
             */
            myRating: string;
            /**
             * The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
             */
            onBehalfOfContentOwner: string;
            /**
             * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
             */
            pageToken: string;
            /**
             * The videoCategoryId parameter selects a video chart based on the category. If using this parameter, chart must also be set.
             */
            videoCategoryId: string;
        }): HttpRequest<GoogleApiYouTubePaginationInfo<GoogleApiYouTubeVideoResource>>;

        /**
         * Like, dislike, or remove rating from a video.
         */
        rate(object: {
            /**
             * The id parameter specifies the YouTube video ID.
             */
            id: string;
            /**
             * Specifies the rating to record.
             */
            rating: string;
            /**
             * The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
             */
            onBehalfOfContentOwner?: string;
        }): HttpRequest<any>;

        /**
         * Updates a video's metadata.
         */
        update(object: {
            /**
             * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet, contentDetails, player, statistics, status, and topicDetails. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting. In addition, not all of those parts contain properties that can be set when setting or updating a video's metadata. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
             */
            part: string;
            /**
             * The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
             */
            onBehalfOfContentOwner?: string;
            /**
             * HTTP Request Body
             */
            RequestBody?: string;
        }): HttpRequest<GoogleApiYouTubeVideoResource>;

    }

}

interface GoogleApiYouTubePageInfo<T> {
    /**
     * The type of the API response. For this operation, the value will be youtube#activityListResponse.
     */
    kind: string;
    /**
     * The ETag of the response.
     */
    etag: string;
    /**
     * A list of activities, or events, that match the request criteria.
     */
    items: T[];
}

interface GoogleApiYouTubePaginationInfo<T> {

    /**
     * The type of the API response. For this operation, the value will be youtube#activityListResponse.
     */
    kind: string;
    /**
     * The ETag of the response.
     */
    etag: string;
    /**
     * The pageInfo object encapsulates paging information for the result set.
     */
    pageInfo: {
        /**
         * The total number of results in the result set.
         */
        totalResults: number;
        /**
         * The number of results included in the API response.
         */
        resultsPerPage: number;
    };
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken: string;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken: string;
    /**
     * A list of activities, or events, that match the request criteria.
     */
    items: T[];

}

interface GoogleApiYouTubeActivityResource {
    /**
     * The type of the API resource. For activity resources, the value will be youtube#activity.
     */
    kind: string;
    /**
     * The ETag of the activity resource.
     */
    etag: string;
    /**
     * The ID that YouTube uses to uniquely identify the activity.
     */
    id: string;
    /**
     * The snippet object contains basic details about the activity, including the activitys type and group ID.
     */
    snippet: {
        /**
         * The date and time that the activity occurred. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt: string;
        /**
         * The ID that YouTube uses to uniquely identify the channel associated with the activity.
         */
        channelId: string;
        /**
         * The title of the resource primarily associated with the activity.
         */
        title: string;
        /**
         * The description of the resource primarily associated with the activity.
         */
        description: string;
        /**
         * A map of thumbnail images associated with the resource that is primarily associated with the activity.
         */
        thumbnails: GoogleApiYouTubeThumbnailItemResource[];
        /**
         * Channel title for the channel responsible for this activity
         */
        channelTitle: string;
        /**
         * The type of activity that the resource describes.
         */
        type: string;
        /**
         * The group ID associated with the activity.
         */
        groupId: string;
    }
    /**
     * The contentDetails object contains information about the content associated with the activity.
     */
    contentDetails: {
        /**
         * The upload object contains information about the uploaded video. This property is only present if the snippet.type is upload.
         */
        upload: {
            /**
             * The ID that YouTube uses to uniquely identify the uploaded video.
             */
            videoId: string;
        }
        /**
         * The like object contains information about a resource that received a positive (like) rating. This property is only present if the snippet.type is like.
         */
        like: {
            /**
             * The resourceId object contains information that identifies the rated resource.
             */
            resourceId: {
                /**
                 * The type of the API resource.
                 */
                kind: string;
                /**
                 * The ID that YouTube uses to uniquely identify the video, if the rated resource is a video. This property is only present if the resourceId.kind is youtube#video
                 */
                videoId: string;
            }
        }
        /**
         * The favorite object contains information about a video that was marked as a favorite video. This property is only present if the snippet.type is favorite.
         */
        favorite: {
            /**
             * The resourceId object contains information that identifies the resource that was marked as a favorite.
             */
            resourceId: {
                /**
                 * The type of the API resource.
                 */
                kind: string;
                /**
                 * The ID that YouTube uses to uniquely identify the favorite video. This property is only present if the resourceId.kind is youtube#video.
                 */
                videoId: string;
            }
        }
        /**
         * The comment object contains information about a resource that received a comment. This property is only present if the snippet.type is comment.
         */
        comment: {
            /**
             * The resourceId object contains information that identifies the resource associated with the comment.
             */
            resourceId: {
                /**
                 * The type of the API resource.
                 */
                kind: string;
                /**
                 * The ID that YouTube uses to uniquely identify the video associated with a comment. This property is only present if the resourceId.kind is youtube#video.
                 */
                videoId: string;
                /**
                 * The ID that YouTube uses to uniquely identify the channel associated with a comment. This property is only present if the resourceId.kind is youtube#channel.
                 */
                channelId: string;
            }
        }
        /**
         * The subscription object contains information about a channel that a user subscribed to. This property is only present if the snippet.type is subscription.
         */
        subscription: {
            /**
             * The resourceId object contains information that identifies the resource that the user subscribed to.
             */
            resourceId: {
                /**
                 * The type of the API resource.
                 */
                kind: string;
                /**
                 * The ID that YouTube uses to uniquely identify the channel that the user subscribed to. This property is only present if the resourceId.kind is youtube#channel.
                 */
                channelId: string;
            }
        }
        /**
         * The playlistItem object contains information about an item that was added to a playlist. This property is only present if the snippet.type is playlistItem.
         */
        playlistItem: {
            /**
             *  The resourceId object contains information that identifies the resource that was added to the playlist.
             */
            resourceId: {
                /**
                 * The type of the API resource.
                 */
                kind: string;
                /**
                 * The ID that YouTube uses to uniquely identify the video that was added to the playlist. This property is only present if the resourceId.kind is youtube#video.
                 */
                videoId: string;
            }
            /**
             * The value that YouTube uses to uniquely identify the playlist.
             */
            playlistId: string;
            /**
             * The value that YouTube uses to uniquely identify the item in the playlist.
             */
            playlistItemId: string;
        }
        /**
         * The recommendation object contains information about a recommended resource. This property is only present if the snippet.type is recommendation.
         */
        recommendation: {
            /**
             * The resourceId object contains information that identifies the recommended resource.
             */
            resourceId: {
                /**
                 * The type of the API resource.
                 */
                kind: string;
                /**
                 * The ID that YouTube uses to uniquely identify the video, if the recommended resource is a video. This property is only present if the resourceId.kind is youtube#video.
                 */
                videoId: string;
                /**
                 * The ID that YouTube uses to uniquely identify the channel, if the recommended resource is a channel. This property is only present if the resourceId.kind is youtube#channel.
                 */
                channelId: string;
            }
            /**
             * The reason that the resource is recommended to the user.
             */
            reason: string;
            /**
             * The seedResourceId object contains information about the resource that caused the recommendation.
             */
            seedResourceId: {
                /**
                 * The type of the API resource.
                 */
                kind: string;
                /**
                 * The ID that YouTube uses to uniquely identify the video, if the recommendation was caused by a particular video. This property is only present if the seedResourceId.kind is youtube#video.
                 */
                videoId: string;
                /**
                 * The ID that YouTube uses to uniquely identify the channel, if the recommendation was caused by a particular channel. This property is only present if the seedResourceId.kind is youtube#channel.
                 */
                channelId: string;
                /**
                 * The ID that YouTube uses to uniquely identify the playlist, if the recommendation was caused by a particular playlist. This property is only present if the seedResourceId.kind is youtube#playlist.
                 */
                playlistId: string;
            }
        }
        /**
         * The bulletin object contains details about a channel bulletin post. This object is only present if the snippet.type is bulletin.
         */
        bulletin: {
            /**
             * The resourceId object contains information that identifies the resource associated with a bulletin post.
             */
            resourceId: {
                /**
                 * The type of the API resource.
                 */
                kind: string;
                /**
                 * The ID that YouTube uses to uniquely identify the video featured in a bulletin post, if the post refers to a video. This property will only be present if the value of the bulletin.resourceId.kind property is youtube#video.
                 */
                videoId: string;
                /**
                 * The ID that YouTube uses to uniquely identify the channel featured in a bulletin post, if the post refers to a channel. This property will only be present if the value of the bulletin.resourceId.kind property is youtube#channel.
                 */
                channelId: string;
                /**
                 * The ID that YouTube uses to uniquely identify the playlist featured in a bulletin post, if the post refers to a playlist. This property will only be present if the value of the bulletin.resourceId.kind property is youtube#playlist.
                 */
                playlistId: string;
            }
        }
        /**
         * The social object contains details about a social network post. This property is only present if the snippet.type is social.
         */
        social: {
            /**
             * The name of the social network.
             */
            type: string;
            /**
             * The resourceId object encapsulates information that identifies the resource associated with a social network post.
             */
            resourceId: {
                /**
                 * The type of the API resource.
                 */
                kind: string;
                /**
                 * The ID that YouTube uses to uniquely identify the video featured in a social network post, if the post refers to a video. This property will only be present if the value of the social.resourceId.kind property is youtube#video.
                 */
                videoId: string;
                /**
                 * The ID that YouTube uses to uniquely identify the channel featured in a social network post, if the post refers to a channel. This property will only be present if the value of the social.resourceId.kind property is youtube#channel.
                 */
                channelId: string;
                /**
                 * The ID that YouTube uses to uniquely identify the playlist featured in a social network post, if the post refers to a playlist. This property will only be present if the value of the social.resourceId.kind property is youtube#playlist.
                 */
                playlistId: string;
            }
            /**
             * The author of the social network post.
             */
            author: string;
            /**
             * The URL of the social network post.
             */
            referenceUrl: string;
            /**
             * An image of the posts author.
             */
            imageUrl: string;
        }
        /**
         * The channelItem object contains details about a resource that was added to a channel. This property is only present if the snippet.type is channelItem.
         */
        channelItem: {
            /**
             * The resourceId object contains information that identifies the resource that was added to the channel.
             */
            resourceId: {
            }
        }
    }
}

interface GoogleApiYouTubeChannelBannerResource {
    /**
     * The type of the API response. For this operation, the value will be youtube#channelBannerInsertResponse.
     */
    kind: string;
    /**
     * The ETag of the response.
     */
    etag: string;
    /**
     * The banner images URL. After calling the channelBanners.insert method, extract this value from the API response. Then call the channels.update method, and set the URL as the value of the brandingSettings.image.bannerExternalUrl property to set the banner image for a channel.
     */
    url: string;
}

interface GoogleApiYouTubeChannelResource {
    /**
     * The ID that YouTube uses to uniquely identify the channel.
     */
    id: string;
    /**
     * The type of the API resource. For channel resources, the value will be youtube#channel.
     */
    kind: string;
    /**
     * The ETag for the channel resource.
     */
    etag: string;
    /**
     * The snippet object contains basic details about the channel, such as its title, description, and thumbnail images.
     */
    snippet: {
        /**
         * The channels title.
         */
        title: string;
        /**
         * The channels description.
         */
        description: string;
        /**
         * The date and time that the channel was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt: string;
        /**
         * A map of thumbnail images associated with the channel. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
         */
        thumbnails: GoogleApiYouTubeThumbnailItemResource[];
    }
    /**
     * The contentDetails object encapsulates information about the channels content.
     */
    contentDetails: {
        /**
         * The relatedPlaylists object is a map that identifies playlists associated with the channel, such as the channels uploaded videos or favorite videos. You can retrieve any of these playlists using the playlists.list method.
         */
        relatedPlaylists: {
            /**
             * The ID of the playlist that contains the channels liked videos.
             */
            likes: string;
            /**
             * The ID of the playlist that contains the channels favorite videos.
             */
            favorites: string;
            /**
             * The ID of the playlist that contains the channels uploaded videos.
             */
            uploads: string;
            /**
             * The ID of the playlist that contains the channels watch history.
             */
            watchHistory: string;
            /**
             * The ID of the channels watch later playlist.
             */
            watchLater: string;
        }
        /**
         * The googlePlusUserId object identifies the Google+ profile ID associated with this channel.
         */
        googlePlusUserId: string;
    }
    /**
     * The statistics object encapsulates statistics for the channel.
     */
    statistics: {
        /**
         * The number of times the channel has been viewed.
         */
        viewCount: number;
        /**
         * The number of comments for the channel.
         */
        commentCount: number;
        /**
         * The number of subscribers that the channel has.
         */
        subscriberCount: number;
        /**
         * The number of videos uploaded to the channel.
         */
        videoCount: number;
    }
    /**
     * The topicDetails object encapsulates information about Freebase topics associated with the channel.
     */
    topicDetails: {
        /**
         * A list of Freebase topic IDs associated with the channel. You can retrieve information about each topic using the Freebase Topic API.
         */
        topicIds: string[];
    }
    /**
     * The status object encapsulates information about the privacy status of the channel.
     */
    status: {
        /**
         * Privacy status of the channel.
         */
        privacyStatus: string;
        /**
         * Indicates whether the channel data identifies a user that is already linked to either a YouTube username or a Google+ account. A user that has one of these links already has a public YouTube identity, which is a prerequisite for several actions, such as uploading videos.
         */
        isLinked: boolean;
    }
    /**
     * The brandingSettings object encapsulates information about the branding of the channel.
     */
    brandingSettings: {
        /**
         * The channel object encapsulates branding properties of the channel page.
         */
        channel: {
            /**
             * The channels title. The title has a maximum length of 30 characters.
             */
            title: string;
            /**
             * The channel description, which appears in the channel information box on your channel page.
             */
            description: string;
            /**
             * Keywords associated with your channel. The value is a comma-separated list of strings.
             */
            keywords: string;
            /**
             * The content tab that users should display by default when viewers arrive at your channel page.
             */
            defaultTab: string;
            /**
             * The ID for a Google Analytics account that you want to use to track and measure traffic to your channel.
             */
            trackingAnalyticsAccountId: string;
            /**
             * This setting determines whether user-submitted comments left on the channel page need to be approved by the channel owner to be publicly visible. The default value is false.
             */
            moderateComments: boolean;
            /**
             * This setting indicates whether YouTube should show an algorithmically generated list of related channels on your channel page.
             */
            showRelatedChannels: boolean;
            /**
             * This setting indicates whether the channel page should display content in a browse or feed view.
             */
            showBrowseView: boolean;
            /**
             * The title that displays above the featured channels module.
             */
            featuredChannelsTitle: string;
            /**
             * A list of up to 16 channels that you would like to link to from the featured channels module. The property value is a list of YouTube channel ID values, each of which uniquely identifies a channel.
             */
            featuredChannelsUrls: string[];
            /**
             * The video that should play in the featured video module in the channel pages browse view for unsubscribed viewers. Subscribed viewers may see a different view that highlights more recent channel activity.
             */
            unsubscribedTrailer: string;
        }
        /**
         * The watch object encapsulates branding properties of the watch pages for the channels videos.
         */
        watch: {
            /**
             * The background color for the video watch pages branded area.
             */
            textColor: string;
            /**
             * The text color for the video watch pages branded area.
             */
            backgroundColor: string;
            /**
             * An ID that uniquely identifies a playlist that displays next to the video player on the video watch page.
             */
            featuredPlaylistId: string;
        }
        /**
         * The image object encapsulates information about images that display on the channels channel page or video watch pages.
         */
        image: {
            /**
             * The URL for the banner image shown on the channel page on the YouTube website. The image is 1060px by 175px.
             */
            bannerImageUrl: string;
            /**
             * The URL for the banner image shown on the channel page in mobile applications. The image is 640px by 175px.
             */
            bannerMobileImageUrl: string;
            /**
             * The backgroundImageUrl object encapsulates settings for the background image shown on the video watch page. The image is 1200px by 615px, with a maximum file size of 128k.
             */
            backgroundImageUrl: {
                /**
                 * The default value for the property.
                 */
                default: string;
                /**
                 * A list of objects that specify language-specific values for the property.
                 */
                localized: {
                    /**
                     * The property value for a specified language.
                     */
                    value: string;
                    /**
                     * The language associated with the value.
                     */
                    language: string;
                }[];
            }
            /**
             * The largeBrandedBannerImageImapScript object encapsulates information about the image map script for the banner image shown on the channel page.
             */
            largeBrandedBannerImageImapScript: {
                /**
                 * The default value for the property.
                 */
                default: string;
                /**
                 * A list of objects that specify language-specific values for the property.
                 */
                localized: {
                    /**
                     * The property value for a specified language.
                     */
                    value: string;
                    /**
                     * The language associated with the value.
                     */
                    language: string;
                }[];
            }
            /**
             * The URL for the 854px by 70px image that appears below the video player in the expanded video view of the video watch page.
             */
            largeBrandedBannerImageUrl: {
                /**
                 * The default value for the property.
                 */
                default: string;
                /**
                 * A list of objects that specify language-specific values for the property.
                 */
                localized: {
                    /**
                     * The property value for a specified language.
                     */
                    value: string;
                    /**
                     * The language associated with the value.
                     */
                    language: string;
                }[];
            }
            /**
             * The image map script for the small banner image. The largeBrandedBannerImageImapScript object encapsulates information about the image map script for the banner image shown on the channel page in mobile applications.
             */
            smallBrandedBannerImageImapScript: {
                /**
                 * The default value for the property.
                 */
                default: string;
                /**
                 * A list of objects that specify language-specific values for the property.
                 */
                localized: {
                    /**
                     * The property value for a specified language.
                     */
                    value: string;
                    /**
                     * The language associated with the value.
                     */
                    language: string;
                }[];
            }
            /**
             * The URL for the 640px by 70px banner image that appears below the video player in the default view of the video watch page.
             */
            smallBrandedBannerImageUrl: {
                /**
                 * The default value for the property.
                 */
                default: string;
                /**
                 * A list of objects that specify language-specific values for the property.
                 */
                localized: {
                    /**
                     * The property value for a specified language.
                     */
                    value: string;
                    /**
                     * The language associated with the value.
                     */
                    language: string;
                }[];
            }
            /**
             * The URL for the image that appears above the video player. This is a 25-pixel-high image with a flexible width that cannot exceed 170 pixels. If you do not provide this image, your channel name will appear instead of an image.
             */
            watchIconImageUrl: string;
            /**
             * The URL for a 1px by 1px tracking pixel that can be used to collect statistics for views of the channel or video pages.
             */
            trackingImageUrl: string;
            /**
             * The URL for a low-resolution banner image that displays on the channel page in tablet applications. The image is 1138px by 188px.
             */
            bannerTabletLowImageUrl: string;
            /**
             * The URL for a banner image that displays on the channel page in tablet applications. The image is 1707px by 283px.
             */
            bannerTabletImageUrl: string;
            /**
             * The URL for a high-resolution banner image that displays on the channel page in tablet applications. The image is 2276px by 377px.
             */
            bannerTabletHdImageUrl: string;
            /**
             * The URL for an insanely high-resolution banner image that displays on the channel page in tablet applications. The image is 2560px by 424px.
             */
            bannerTabletExtraHdImageUrl: string;
            /**
             * The URL for a low-resolution banner image that displays on the channel page in mobile applications. The image is 320px by 88px.
             */
            bannerMobileLowImageUrl: string;
            /**
             * The URL for a medium-resolution banner image that displays on the channel page in mobile applications. The image is 960px by 263px.
             */
            bannerMobileMediumImageUrl: string;
            /**
             * The URL for a high-resolution banner image that displays on the channel page in mobile applications. The image is 1280px by 360px.
             */
            bannerMobileHdImageUrl: string;
            /**
             * The URL for a very high-resolution banner image that displays on the channel page in mobile applications. The image is 1440px by 395px.
             */
            bannerMobileExtraHdImageUrl: string;
            /**
             * The URL for a banner image that displays on the channel page in television applications. The image is 2120px by 1192px.
             */
            bannerTvImageUrl: string;
            /**
             * This property specifies the location of the banner image that YouTube will use to generate the various banner image sizes for a channel. To obtain the URL banner images external URL, you must first upload the channel banner image that you want to use by calling the channelBanners.insert method.
             */
            bannerExternalUrl: string;
        }
        /**
         * The hints object encapsulates additional branding properties
         */
        hints: {
            /**
             * A property.
             */
            property: string;
            /**
             * The propertys value.
             */
            value: string;
        }[];
    }
    /**
     * The invideoPromotion object encapsulates information about a promotional campaign associated with the channel. A channel can use an in-video promotional campaign to display the thumbnail image of a promoted video in the video player during playback of the channels videos
     */
    invideoPromotion: {
        /**
         * The timing object encapsulates information about the temporal position within the video when the promoted item will be displayed.
         */
        timing: {
            /**
             * The timing method that determines when the promoted item is inserted during the video playback. If the value is offsetFromStart, then the offsetMs field represents an offset from the start of the video. If the value is offsetFromEnd, then the offsetMs field represents an offset from the end of the video.
             */
            type: string;
            /**
             * The time offset, specified in milliseconds, that determines when the promoted item appears during video playbacks. The type propertys value determines whether the offset is measured from the start or end of the video.
             */
            offsetMs: number;
        }
        /**
         * The position object encapsulates information about the spatial position within the video where the promoted item will be displayed.
         */
        position: {
            /**
             * The manner in which the promoted item is positioned in the video player.
             */
            type: string;
            /**
             * The corner of the player where the promoted item will appear.
             */
            cornerPosition: string;
        }
        /**
         * The list of promoted items in the order that they will display across different playbacks to the same viewer.
         */
        items: {
            /**
             * The promoted items type.
             */
            type: string;
            /**
             * If the promoted item represents a video, then this value is present and identifies the YouTube ID that YouTube assigned to identify that video. This field is only present if the type propertys value is video.
             */
            videoId: string;
        }[];
    }
}

interface GoogleApiYouTubeGuideCategoryResource {
    /**
     * The ID that YouTube uses to uniquely identify the guide category.
     */
    id: string;
    /**
     * The type of the API resource. For guideCategory resources, the value will be youtube#guideCategory.
     */
    kind: string;
    /**
     * The ETag of the guideCategory resource.
     */
    etag: string;
    /**
     * The snippet object contains basic details about the category, such as its title.
     */
    snippet: {
        /**
         * The ID that YouTube uses to uniquely identify the channel publishing the guide category.
         */
        channelId: string;
        /**
         * The categorys title.
         */
        title: string;
    }
}

interface GoogleApiYouTubePlaylistItemResource {
    /**
     * The ID that YouTube uses to uniquely identify the playlist item.
     */
    id: string;
    /**
     * The type of the API resource. For playlist item resources, the value will be youtube#playlistItem.
     */
    kind: string;
    /**
     * The ETag for the playlist item resource.
     */
    etag: string;
    /**
     * The snippet object contains basic details about the playlist item, such as its title and position in the playlist.
     */
    snippet: {
        /**
         * The date and time that the item was added to the playlist. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt: string;
        /**
         * The ID that YouTube uses to uniquely identify the user that added the item to the playlist.
         */
        channelId: string;
        /**
         * The items title.
         */
        title: string;
        /**
         * The items description.
         */
        description: string;
        /**
         * A map of thumbnail images associated with the playlist item. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
         */
        thumbnails: GoogleApiYouTubeThumbnailItemResource[];
        /**
         * The channel title of the channel that the playlist item belongs to.
         */
        channelTitle: string;
        /**
         * The ID that YouTube uses to uniquely identify the playlist that the playlist item is in.
         */
        playlistId: string;
        /**
         * The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth.
         */
        position: number;
        /**
         * The id object contains information that can be used to uniquely identify the resource that is included in the playlist as the playlist item.
         */
        resourceId: {
            /**
             * The kind, or type, of the referred resource.
             */
            kind: string;
            /**
             * If the snippet.resourceId.kind propertys value is youtube#video, then this property will be present and its value will contain the ID that YouTube uses to uniquely identify the video in the playlist.
             */
            videoId: string;
        }
    }
    /**
     * The contentDetails object is included in the resource if the included item is a YouTube video. The object contains additional information about the video.
     */
    contentDetails: {
        /**
         * The ID that YouTube uses to uniquely identify a video. To retrieve the video resource, set the id query parameter to this value in your API request.
         */
        videoId: string;
        /**
         * The time, measured in seconds from the start of the video, when the video should start playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) The default value is 0.
         */
        startAt: string;
        /**
         * The time, measured in seconds from the start of the video, when the video should stop playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) By default, assume that the video.endTime is the end of the video.
         */
        endAt: string;
        /**
         * A user-generated note for this item.
         */
        note: string;
    }
    /**
     * The status object contains information about the playlist items privacy status.
     */
    status: {
        /**
         * The playlist items privacy status. The channel that uploaded the video that the playlist item represents can set this value using either the videos.insert or videos.update method.
         */
        privacyStatus: string;
    }
}

interface GoogleApiYouTubePlaylistResource {
    /**
     * The ID that YouTube uses to uniquely identify the playlist.
     */
    id: string;
    /**
     * The type of the API resource. For video resources, the value will be youtube#playlist.
     */
    kind: string;
    /**
     * The ETag for the playlist resource.
     */
    etag: string;
    /**
     * The snippet object contains basic details about the playlist, such as its title and description.
     */
    snippet: {
        /**
         * The date and time that the playlist was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt: string;
        /**
         * The ID that YouTube uses to uniquely identify the channel that published the playlist.
         */
        channelId: string;
        /**
         * The playlists title.
         */
        title: string;
        /**
         * The playlists description.
         */
        description: string;
        /**
         * A map of thumbnail images associated with the playlist. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
         */
        thumbnails: GoogleApiYouTubeThumbnailItemResource[];
        /**
         * The channel title of the channel that the video belongs to.
         */
        channelTitle: string;
        /**
         * Keyword tags associated with the playlist.
         */
        tags: string[];
    }
    /**
     * The status object contains status information for the playlist.
     */
    status: {
        /**
         * The playlists privacy status.
         */
        privacyStatus: string;
    }
    /**
     * The contentDetails object contains information about the playlist content, including the number of videos in the playlist.
     */
    contentDetails: {
        /**
         * The number of videos in the playlist.
         */
        itemCount: number;
    }
    /**
     * The player object contains information that you would use to play the playlist in an embedded player.
     */
    player: {
        /**
         * An <iframe> tag that embeds a player that will play the playlist.
         */
        embedHtml: string;
    }
}

interface GoogleApiYouTubeSearchResource {
    /**
     * The kind, fixed to "youtube#searchResult".
     */
    kind: string;
    /**
     * Etag of this resource.
     */
    etag: string;
    /**
     * The id object contains information that can be used to uniquely identify the resource that matches the search request.
     */
    id: {
        /**
         * The type of the API resource.
         */
        kind: string;
        /**
         * If the id.type propertys value is youtube#video, then this property will be present and its value will contain the ID that YouTube uses to uniquely identify a video that matches the search query.
         */
        videoId: string;
        /**
         * If the id.type propertys value is youtube#channel, then this property will be present and its value will contain the ID that YouTube uses to uniquely identify a channel that matches the search query.
         */
        channelId: string;
        /**
         * If the id.type propertys value is youtube#playlist, then this property will be present and its value will contain the ID that YouTube uses to uniquely identify a playlist that matches the search query.
         */
        playlistId: string;
    }
    /**
     * The snippet object contains basic details about a search result, such as its title or description.
     */
    snippet: {
        /**
         * The creation date and time of the resource that the search result identifies. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt: string;
        /**
         * The value that YouTube uses to uniquely identify the channel that published the resource that the search result identifies.
         */
        channelId: string;
        /**
         * The title of the search result.
         */
        title: string;
        /**
         * A description of the search result.
         */
        description: string;
        /**
         * A map of thumbnail images associated with the search result. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
         */
        thumbnails: GoogleApiYouTubeThumbnailItemResource[];
        /**
         * The title of the channel that published the resource that the search result identifies.
         */
        channelTitle: string;
    }
}

interface GoogleApiYouTubeSubscriptionResource {
    /**
     * The ID that YouTube uses to uniquely identify the subscription.
     */
    id: string;
    /**
     * The ETag of the subscription resource.
     */
    etag: string;
    /**
     * The type of the API resource. For subscription resources, the value will be youtube#subscription.
     */
    kind: string;
    /**
     * The snippet object contains basic details about the subscription, including its title and the channel that the user subscribed to.
     */
    snippet: {
        /**
         * The date and time that the subscription was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt: string;
        /**
         * The title of the channel that the subscription belongs to.
         */
        channelTitle: string;
        /**
         * The subscriptions title.
         */
        title: string;
        /**
         * The subscriptions details.
         */
        description: string;
        /**
         * The id object contains information about the channel that the user subscribed to.
         */
        resourceId: {
            /**
             * The type of the API resource.
             */
            kind: string;
            /**
             * The value that YouTube uses to uniquely identify the channel that the user subscribed to.
             */
            channelId: string;
        }
        /**
         * The ID that YouTube uses to uniquely identify the subscribers channel. The resource_id object identifies the channel that the user subscribed to.
         */
        channelId: string;
        /**
         * A map of thumbnail images associated with the subscription. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
         */
        thumbnails: GoogleApiYouTubeThumbnailItemResource[];
    }
    /**
     *
     */
    contentDetails: {
        /**
         *
         */
        totalItemCount: number;
        /**
         *
         */
        newItemCount: number;
    }
    /**
     *
     */
    subscriberSnippet: {
        title: string;
        description: string;
        channelId: string;
        thumbnails: GoogleApiYouTubeThumbnailItemResource[];
    }
}

interface GoogleApiYouTubeThumbnailResource {
    /**
     * The default thumbnail image. The default thumbnail for a video – or a resource that refers to a video, such as a playlist item or search result – is 120px wide and 90px tall. The default thumbnail for a channel is 88px wide and 88px tall.
     */
    default: GoogleApiYouTubeThumbnailItemResource;
    /**
     * A higher resolution version of the thumbnail image. For a video (or a resource that refers to a video), this image is 320px wide and 180px tall. For a channel, this image is 240px wide and 240px tall.
     */
    medium: GoogleApiYouTubeThumbnailItemResource;
    /**
     * A high resolution version of the thumbnail image. For a video (or a resource that refers to a video), this image is 480px wide and 360px tall. For a channel, this image is 800px wide and 800px tall.
     */
    high: GoogleApiYouTubeThumbnailItemResource;
}

interface GoogleApiYouTubeThumbnailItemResource {
    /**
     * The images URL.
     */
    url: string;
    /**
     * The images width.
     */
    width: number;
    /**
     * The images height.
     */
    height: number;
}

interface GoogleApiYouTubeVideoCategoryResource {
    /**
     * The ID that YouTube uses to uniquely identify the video category.
     */
    id: string;
    /**
     * The type of the API resource. For video category resources, the value will be youtube#videoCategory.
     */
    kind: string;
    /**
     * The ETag of the videoCategory resource.
     */
    etag: string;
    /**
     * The snippet object contains basic details about the video category, including its title.
     */
    snippet: {
        /**
         * The YouTube channel that created the video category.
         */
        channelId: string;
        /**
         * The video categorys title.
         */
        title: string;
    }
}

interface GoogleApiYouTubeVideoResource {
    /**
     * The ID that YouTube uses to uniquely identify the video.
     */
    id: string;
    /**
     * The type of the API resource. For video resources, the value will be youtube#video.
     */
    kind: string;
    /**
     * The ETag of the video resource.
     */
    etag: string;
    /**
     * The snippet object contains basic details about the video, such as its title, description, and category.
     */
    snippet: {
        /**
         * The date and time that the video was uploaded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt: string;
        /**
         * The ID that YouTube uses to uniquely identify the channel that the video was uploaded to.
         */
        channelId: string;
        /**
         * The videos title.
         */
        title: string;
        /**
         * The videos description.
         */
        description: string;
        /**
         * A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
         */
        thumbnails: GoogleApiYouTubeThumbnailItemResource[];
        /**
         * Channel title for the channel that the video belongs to.
         */
        channelTitle: string;
        /**
         * A list of keyword tags associated with the video. Tags may contain spaces. This field is only visible to the videos uploader.
         */
        tags: string[];
        /**
         * The YouTube video category associated with the video.
         */
        categoryId: string;
    }
    /**
     * The contentDetails object contains information about the video content, including the length of the video and its aspect ratio.
     */
    contentDetails: {
        /**
         * The length of the video. The tag value is an ISO 8601 duration in the format PT#M#S, in which the letters PT indicate that the value specifies a period of time, and the letters M and S refer to length in minutes and seconds, respectively. The # characters preceding the M and S letters are both integers that specify the number of minutes (or seconds) of the video.
         */
        duration: string;
        /**
         * Indicates whether the video is available in 3D or in 2D.
         */
        dimension: string;
        /**
         * Indicates whether the video is available in high definition (HD) or only in standard definition.
         */
        definition: string;
        /**
         * Indicates whether captions are available for the video.
         */
        caption: string;
        /**
         * Indicates whether the video represents licensed content, which means that the content has been claimed by a YouTube content partner.
         */
        licensedContent: boolean;
        /**
         * The regionRestriction object contains information about the countries where a video is (or is not) viewable. The object will contain either the contentDetails.regionRestriction.allowed property or the contentDetails.regionRestriction.blocked property.
         */
        regionRestriction: {
            /**
             * A list of region codes that identify countries where the video is viewable. If this property is present and a country is not listed in its value, then the video is blocked from appearing in that country. If this property is present and contains an empty list, the video is blocked in all countries.
             */
            allowed: string[];
            /**
             * A list of region codes that identify countries where the video is blocked. If this property is present and a country is not listed in its value, then the video is viewable in that country. If this property is present and contains an empty list, the video is viewable in all countries.

             */
            blocked: string[];
        }
        /**
         * Specifies the ratings that the video received under various rating schemes.
         */
        contentRating: {
            /**
             * The videos Motion Picture Association of America (MPAA) rating.
             */
            mpaaRating: string;
            /**
             * The videos TV Parental Guidelines (TVPG) rating.
             */
            tvpgRating: string;
            /**
             * The videos British Board of Film Classification (BBFC) rating.
             */
            bbfcRating: string;
            /**
             * The videos Canadian Home Video Rating System (CHVRS) rating.
             */
            chvrsRating: string;
            /**
             * The videos Eirin rating. Eirin is the Japanese rating system.
             */
            eirinRating: string;
            /**
             * The videos Central Board of Film Certification (CBFC - India) rating.
             */
            cbfcRating: string;
            /**
             * The videos Centre national du cinéma et de limage animé (French Ministry of Culture) rating.
             */
            fmocRating: string;
            /**
             * The videos Instituto de la Cinematografía y de las Artes Audiovisuales (ICAA - Spain) rating.
             */
            icaaRating: string;
            /**
             * The videos Australian Classification Board (ACB) rating.
             */
            acbRating: string;
            /**
             * The videos Office of Film and Literature Classification (OFLC - New Zealand) rating.
             */
            oflcRating: string;
            /**
             * The videos Freiwillige Selbstkontrolle der Filmwirtschaft (FSK - Germany) rating.
             */
            fskRating: string;
            /**
             * The videos Korea Media Rating Board rating. The KMRB rates videos in South Korea.
             */
            kmrbRating: string;
            /**
             * The videos Departamento de Justiça, Classificação, Qualificação e Títulos (DJCQT - Brazil) rating.
             */
            djctqRating: string;
            /**
             * The videos National Film Registry of the Russian Federation (MKRF - Russia) rating.
             */
            russiaRating: string;
            /**
             * The videos General Directorate of Radio, Television and Cinematography (Mexico) rating.
             */
            rtcRating: string;
        }
    }
    /**
     * The player object contains information that you would use to play the video in an embedded player.
     */
    player: {
        /**
         * An <iframe> tag that embeds a player that will play the video.
         */
        embedHtml: string;
    }
    /**
     * The statistics object contains statistics about the video.
     */
    statistics: {
        /**
         * The number of times the video has been viewed.
         */
        viewCount: number;
        /**
         * The number of users who have indicated that they liked the video by giving it a positive rating.
         */
        likeCount: number;
        /**
         * The number of users who have indicated that they disliked the video by giving it a negative rating.
         */
        dislikeCount: number;
        /**
         * The number of users who currently have the video marked as a favorite video.
         */
        favoriteCount: number;
        /**
         * The number of comments for the video.
         */
        commentCount: number;
    }
    /**
     * The status object contains information about the videos uploading, processing, and privacy statuses.
     */
    status: {
        /**
         * The status of the uploaded video.
         */
        uploadStatus: string;
        /**
         * This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed.
         */
        failureReason: string;
        /**
         * This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected.
         */
        rejectionReason: string;
        /**
         * The videos privacy status.
         */
        privacyStatus: string;
        /**
         * The videos license.
         */
        license: string;
        /**
         * This value indicates whether the video can be embedded on another website.

         */
        embeddable: boolean;
        /**
         * This value indicates whether the extended video statistics on the videos watch page are publicly viewable. By default, those statistics are viewable, and statistics like a videos viewcount and ratings will still be publicly visible even if this propertys value is set to false.
         */
        publicStatsViewable: boolean;
    }
    /**
     * The topicDetails object encapsulates information about Freebase topics associated with the video.
     */
    topicDetails: {
        /**
         * A list of Freebase topic IDs associated with the video. You can retrieve information about each topic using the Freebase Topic API.
         */
        topicIds: string[];
    }
    /**
     * The recordingDetails object encapsulates information about the location, date and address where the video was recorded. This object will only be returned for a video if the videos geolocation data or recording time has been set.
     */
    recordingDetails: {
        /**
         * The geolocation information associated with the video.
         */
        location: {
            /**
             * Latitude in degrees.
             */
            latitude: number;
            /**
             * Longitude in degrees.
             */
            longitude: number;
            /**
             * Altitude above the WGS 84 reference ellipsoid, in meters.
             */
            elevation: number;
        }
        /**
         * The text description of the location where the video was recorded.
         */
        locationDescription: string;
        /**
         * The date and time when the video was recorded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        recordingDate: string;
    }
    /**
     * The fileDetails object encapsulates information about the video file that was uploaded to YouTube, including the files resolution, duration, audio and video codecs, stream bitrates, and more. This data can only be retrieved by the video owner.
     */
    fileDetails: {
        /**
         * The uploaded files name. This field is present whether a video file or another type of file was uploaded.
         */
        fileName: string;
        /**
         * The uploaded files size in bytes. This field is present whether a video file or another type of file was uploaded.
         */
        fileSize: number;
        /**
         * The uploaded files type as detected by YouTubes video processing engine. Currently, YouTube only processes video files, but this field is present whether a video file or another type of file was uploaded.
         */
        fileType: string;
        /**
         * The uploaded video files container format.
         */
        container: string;
        /**
         * A list of video streams contained in the uploaded video file. Each item in the list contains detailed metadata about a video stream.
         */
        videoStreams: {
            /**
             * The encoded video contents width in pixels.
             */
            widthPixels: number;
            /**
             * The encoded video contents height in pixels.
             */
            heightPixels: number;
            /**
             * The video streams frame rate, in frames per second.
             */
            frameRateFps: number;
            /**
             * The video contents display aspect ratio, which specifies the aspect ratio in which the video should be displayed.
             */
            aspectRatio: number;
            /**
             * The video codec that the stream uses.
             */
            codec: string;
            /**
             * The video streams bitrate, in bits per second.
             */
            bitrateBps: number;
            /**
             * The amount that YouTube needs to rotate the original source content to properly display the video.
             */
            rotation: string;
            /**
             * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
             */
            vender: string;
        }[];
        /**
         * A list of audio streams contained in the uploaded video file. Each item in the list contains detailed metadata about an audio stream.
         */
        audioStreams: {
            /**
             * The number of audio channels that the stream contains.
             */
            channelCount: number;
            /**
             * The audio codec that the stream uses.
             */
            codec: string;
            /**
             * The audio streams bitrate, in bits per second.
             */
            bitrateBps: number;
            /**
             * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
             */
            vendor: string;
        }[];
        /**
         * The length of the uploaded video in milliseconds.
         */
        durationMs: number;
        /**
         * The uploaded video files combined (video and audio) bitrate in bits per second.
         */
        bitrateBps: number;
        /**
         * Geographic coordinates that identify the place where the uploaded video was recorded. Coordinates are defined using WGS 84.
         */
        recordingLocation: {
            /**
             * Latitude in degrees.
             */
            latitude: number;
            /**
             * Longitude in degrees.
             */
            longitude: number;
            /**
             * Altitude above the WGS 84 reference ellipsoid, in meters.
             */
            elevation: number;
        }
        /**
         * The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are supported:
         */
        creationTime: string;
    }
    /**
     * The processingProgress object encapsulates information about YouTubes progress in processing the uploaded video file. The properties in the object identify the current processing status and an estimate of the time remaining until YouTube finishes processing the video. This part also indicates whether different types of data or content, such as file details or thumbnail images, are available for the video.
     * The processingProgress object is designed to be polled so that the video uploaded can track the progress that YouTube has made in processing the uploaded video file. This data can only be retrieved by the video owner.
     */
    processingDetails: {
        /**
         * The videos processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed.
         */
        processingStatus: string;
        /**
         * The processingProgress object contains information about the progress YouTube has made in processing the video. The values are really only relevant if the videos processing status is processing.
         */
        processingProgress: {
            /**
             * An estimate of the total number of parts that need to be processed for the video. The number may be updated with more precise estimates while YouTube processes the video.
             */
            partsTotal: number;
            /**
             * The number of parts of the video that YouTube has already processed.
             */
            partsProcessed: number;
            /**
             * An estimate of the amount of time, in millseconds, that YouTube needs to finish processing the video.
             */
            timeLeftMs: number;
        }
        processingFailureReason: string;
        /**
         * The reason that YouTube failed to process the video. This property will only have a value if the processingStatus propertys value is failed.
         */
        fileDetailsAvailability: string;
        /**
         * This value indicates whether file details are available for the uploaded video. You can retrieve a videos file details by requesting the fileDetails part in your videos.list() request.
         */
        processingIssuesAvailability: string;
        /**
         * This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a videos metadata to make it easier for other users to find the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
         */
        tagSuggestionsAvailability: string;
        /**
         * This value indicates whether video editing suggestions, which might improve video quality or the playback experience, are available for the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
         */
        editorSuggestionsAvailability: string;
        /**
         * This value indicates whether thumbnail images have been generated for the video.
         */
        thumbnailsAvailability: string;
    }
    /**
     * The suggestions object encapsulates suggestions that identify opportunities to improve the video quality or the metadata for the uploaded video. This data can only be retrieved by the video owner.
     */
    suggestions: {
        /**
         * A list of errors that will prevent YouTube from successfully processing the uploaded video. These errors indicate that, regardless of the videos current processing status, eventually, that status will almost certainly be failed.
         */
        processingErrors: string[];
        /**
         * A list of reasons why YouTube may have difficulty transcoding the uploaded video or that might result in an erroneous transcoding. These warnings are generated before YouTube actually processes the uploaded video file. In addition, they identify issues that do not necessarily indicate that video processing will fail but that still might cause problems such as sync issues, video artifacts, or a missing audio track.
         */
        processingWarnings: string[];
        /**
         * A list of suggestions that may improve YouTubes ability to process the video.
         */
        processingHints: string[];
        /**
         * A list of keyword tags that could be added to the videos metadata to increase the likelihood that users will locate your video when searching or browsing on YouTube.
         */
        tagSuggestions: {
            /**
             * The keyword tag suggested for the video.
             */
            tag: string;
            /**
             * A set of video categories for which the tag is relevant. You can use this information to display appropriate tag suggestions based on the video category that the video uploader associates with the video. By default, tag suggestions are relevant for all categories if there are no restricts defined for the keyword.
             */
            categoryRestricts: string[];
        }[];
        /**
         * A list of video editing operations that might improve the video quality or playback experience of the uploaded video.
         */
        editorSuggestions: string[];
    }

}

interface GoogleApiYouTubeVideoGetRatingResponse {
    /**
     * The type of the API response. For this operation, the value will be youtube#videoGetRatingResponse.
     */
    kind: string;
    /**
     * The ETag of the response.
     */
    etag: string;
    /**
     * A list of ratings that match the request criteria.
     */
    items: {
        /**
         * The ID that YouTube uses to uniquely identify the video.
         */
        videoId: string;
        /**
         * The rating that the authorized user gave to the video.
         */
        rating: string;
    }[];
}
