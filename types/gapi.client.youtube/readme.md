# TypeScript typings for YouTube Data API v3
Supports core YouTube features, such as uploading videos, creating and managing playlists, searching for content, and much more.
For detailed description please check [documentation](https://developers.google.com/youtube/v3).

## Installing

Install typings for YouTube Data API:
```
npm install @types/gapi.client.youtube@v3 --save-dev
```

## Usage

You need to initialize Google API client in your code:
```typescript
gapi.load("client", () => { 
    // now we can use gapi.client
    // ... 
});
```

Then load api client wrapper:
```typescript
gapi.client.load('youtube', 'v3', () => {
    // now we can use gapi.client.youtube
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your YouTube account
        'https://www.googleapis.com/auth/youtube',
    
        // Manage your YouTube account
        'https://www.googleapis.com/auth/youtube.force-ssl',
    
        // View your YouTube account
        'https://www.googleapis.com/auth/youtube.readonly',
    
        // Manage your YouTube videos
        'https://www.googleapis.com/auth/youtube.upload',
    
        // View and manage your assets and associated content on YouTube
        'https://www.googleapis.com/auth/youtubepartner',
    
        // View private information of your YouTube channel relevant during the audit process with a YouTube partner
        'https://www.googleapis.com/auth/youtubepartner-channel-audit',
    ],
    immediate = true;
// ...

gapi.auth.authorize({ client_id: client_id, scope: scope, immediate: immediate }, authResult => {
    if (authResult && !authResult.error) {
        /* handle succesfull authorization */
    } else {
        /* handle authorization error */
    }
});            
```

After that you can use YouTube Data API resources:

```typescript 
    
/* 
Posts a bulletin for a specific channel. (The user submitting the request must be authorized to act on the channel's behalf.)

Note: Even though an activity resource can contain information about actions like a user rating a video or marking a video as a favorite, you need to use other API methods to generate those activity resources. For example, you would use the API's videos.rate() method to rate a video and the playlistItems.insert() method to mark a video as a favorite.  
*/
await gapi.client.activities.insert({ part: "part",  }); 
    
/* 
Returns a list of channel activity events that match the request criteria. For example, you can retrieve events associated with a particular channel, events associated with the user's subscriptions and Google+ friends, or the YouTube home page feed, which is customized for each user.  
*/
await gapi.client.activities.list({ part: "part",  }); 
    
/* 
Deletes a specified caption track.  
*/
await gapi.client.captions.delete({ id: "id",  }); 
    
/* 
Downloads a caption track. The caption track is returned in its original format unless the request specifies a value for the tfmt parameter and in its original language unless the request specifies a value for the tlang parameter.  
*/
await gapi.client.captions.download({ id: "id",  }); 
    
/* 
Uploads a caption track.  
*/
await gapi.client.captions.insert({ part: "part",  }); 
    
/* 
Returns a list of caption tracks that are associated with a specified video. Note that the API response does not contain the actual captions and that the captions.download method provides the ability to retrieve a caption track.  
*/
await gapi.client.captions.list({ part: "part", videoId: "videoId",  }); 
    
/* 
Updates a caption track. When updating a caption track, you can change the track's draft status, upload a new caption file for the track, or both.  
*/
await gapi.client.captions.update({ part: "part",  }); 
    
/* 
Uploads a channel banner image to YouTube. This method represents the first two steps in a three-step process to update the banner image for a channel:

- Call the channelBanners.insert method to upload the binary image data to YouTube. The image must have a 16:9 aspect ratio and be at least 2120x1192 pixels.
- Extract the url property's value from the response that the API returns for step 1.
- Call the channels.update method to update the channel's branding settings. Set the brandingSettings.image.bannerExternalUrl property's value to the URL obtained in step 2.  
*/
await gapi.client.channelBanners.insert({  }); 
    
/* 
Deletes a channelSection.  
*/
await gapi.client.channelSections.delete({ id: "id",  }); 
    
/* 
Adds a channelSection for the authenticated user's channel.  
*/
await gapi.client.channelSections.insert({ part: "part",  }); 
    
/* 
Returns channelSection resources that match the API request criteria.  
*/
await gapi.client.channelSections.list({ part: "part",  }); 
    
/* 
Update a channelSection.  
*/
await gapi.client.channelSections.update({ part: "part",  }); 
    
/* 
Returns a collection of zero or more channel resources that match the request criteria.  
*/
await gapi.client.channels.list({ part: "part",  }); 
    
/* 
Updates a channel's metadata. Note that this method currently only supports updates to the channel resource's brandingSettings and invideoPromotion objects and their child properties.  
*/
await gapi.client.channels.update({ part: "part",  }); 
    
/* 
Creates a new top-level comment. To add a reply to an existing comment, use the comments.insert method instead.  
*/
await gapi.client.commentThreads.insert({ part: "part",  }); 
    
/* 
Returns a list of comment threads that match the API request parameters.  
*/
await gapi.client.commentThreads.list({ part: "part",  }); 
    
/* 
Modifies the top-level comment in a comment thread.  
*/
await gapi.client.commentThreads.update({ part: "part",  }); 
    
/* 
Deletes a comment.  
*/
await gapi.client.comments.delete({ id: "id",  }); 
    
/* 
Creates a reply to an existing comment. Note: To create a top-level comment, use the commentThreads.insert method.  
*/
await gapi.client.comments.insert({ part: "part",  }); 
    
/* 
Returns a list of comments that match the API request parameters.  
*/
await gapi.client.comments.list({ part: "part",  }); 
    
/* 
Expresses the caller's opinion that one or more comments should be flagged as spam.  
*/
await gapi.client.comments.markAsSpam({ id: "id",  }); 
    
/* 
Sets the moderation status of one or more comments. The API request must be authorized by the owner of the channel or video associated with the comments.  
*/
await gapi.client.comments.setModerationStatus({ id: "id", moderationStatus: "moderationStatus",  }); 
    
/* 
Modifies a comment.  
*/
await gapi.client.comments.update({ part: "part",  }); 
    
/* 
Lists fan funding events for a channel.  
*/
await gapi.client.fanFundingEvents.list({ part: "part",  }); 
    
/* 
Returns a list of categories that can be associated with YouTube channels.  
*/
await gapi.client.guideCategories.list({ part: "part",  }); 
    
/* 
Returns a list of application languages that the YouTube website supports.  
*/
await gapi.client.i18nLanguages.list({ part: "part",  }); 
    
/* 
Returns a list of content regions that the YouTube website supports.  
*/
await gapi.client.i18nRegions.list({ part: "part",  }); 
    
/* 
Binds a YouTube broadcast to a stream or removes an existing binding between a broadcast and a stream. A broadcast can only be bound to one video stream, though a video stream may be bound to more than one broadcast.  
*/
await gapi.client.liveBroadcasts.bind({ id: "id", part: "part",  }); 
    
/* 
Controls the settings for a slate that can be displayed in the broadcast stream.  
*/
await gapi.client.liveBroadcasts.control({ id: "id", part: "part",  }); 
    
/* 
Deletes a broadcast.  
*/
await gapi.client.liveBroadcasts.delete({ id: "id",  }); 
    
/* 
Creates a broadcast.  
*/
await gapi.client.liveBroadcasts.insert({ part: "part",  }); 
    
/* 
Returns a list of YouTube broadcasts that match the API request parameters.  
*/
await gapi.client.liveBroadcasts.list({ part: "part",  }); 
    
/* 
Changes the status of a YouTube live broadcast and initiates any processes associated with the new status. For example, when you transition a broadcast's status to testing, YouTube starts to transmit video to that broadcast's monitor stream. Before calling this method, you should confirm that the value of the status.streamStatus property for the stream bound to your broadcast is active.  
*/
await gapi.client.liveBroadcasts.transition({ broadcastStatus: "broadcastStatus", id: "id", part: "part",  }); 
    
/* 
Updates a broadcast. For example, you could modify the broadcast settings defined in the liveBroadcast resource's contentDetails object.  
*/
await gapi.client.liveBroadcasts.update({ part: "part",  }); 
    
/* 
Removes a chat ban.  
*/
await gapi.client.liveChatBans.delete({ id: "id",  }); 
    
/* 
Adds a new ban to the chat.  
*/
await gapi.client.liveChatBans.insert({ part: "part",  }); 
    
/* 
Deletes a chat message.  
*/
await gapi.client.liveChatMessages.delete({ id: "id",  }); 
    
/* 
Adds a message to a live chat.  
*/
await gapi.client.liveChatMessages.insert({ part: "part",  }); 
    
/* 
Lists live chat messages for a specific chat.  
*/
await gapi.client.liveChatMessages.list({ liveChatId: "liveChatId", part: "part",  }); 
    
/* 
Removes a chat moderator.  
*/
await gapi.client.liveChatModerators.delete({ id: "id",  }); 
    
/* 
Adds a new moderator for the chat.  
*/
await gapi.client.liveChatModerators.insert({ part: "part",  }); 
    
/* 
Lists moderators for a live chat.  
*/
await gapi.client.liveChatModerators.list({ liveChatId: "liveChatId", part: "part",  }); 
    
/* 
Deletes a video stream.  
*/
await gapi.client.liveStreams.delete({ id: "id",  }); 
    
/* 
Creates a video stream. The stream enables you to send your video to YouTube, which can then broadcast the video to your audience.  
*/
await gapi.client.liveStreams.insert({ part: "part",  }); 
    
/* 
Returns a list of video streams that match the API request parameters.  
*/
await gapi.client.liveStreams.list({ part: "part",  }); 
    
/* 
Updates a video stream. If the properties that you want to change cannot be updated, then you need to create a new stream with the proper settings.  
*/
await gapi.client.liveStreams.update({ part: "part",  }); 
    
/* 
Deletes a playlist item.  
*/
await gapi.client.playlistItems.delete({ id: "id",  }); 
    
/* 
Adds a resource to a playlist.  
*/
await gapi.client.playlistItems.insert({ part: "part",  }); 
    
/* 
Returns a collection of playlist items that match the API request parameters. You can retrieve all of the playlist items in a specified playlist or retrieve one or more playlist items by their unique IDs.  
*/
await gapi.client.playlistItems.list({ part: "part",  }); 
    
/* 
Modifies a playlist item. For example, you could update the item's position in the playlist.  
*/
await gapi.client.playlistItems.update({ part: "part",  }); 
    
/* 
Deletes a playlist.  
*/
await gapi.client.playlists.delete({ id: "id",  }); 
    
/* 
Creates a playlist.  
*/
await gapi.client.playlists.insert({ part: "part",  }); 
    
/* 
Returns a collection of playlists that match the API request parameters. For example, you can retrieve all playlists that the authenticated user owns, or you can retrieve one or more playlists by their unique IDs.  
*/
await gapi.client.playlists.list({ part: "part",  }); 
    
/* 
Modifies a playlist. For example, you could change a playlist's title, description, or privacy status.  
*/
await gapi.client.playlists.update({ part: "part",  }); 
    
/* 
Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource.  
*/
await gapi.client.search.list({ part: "part",  }); 
    
/* 
Lists sponsors for a channel.  
*/
await gapi.client.sponsors.list({ part: "part",  }); 
    
/* 
Deletes a subscription.  
*/
await gapi.client.subscriptions.delete({ id: "id",  }); 
    
/* 
Adds a subscription for the authenticated user's channel.  
*/
await gapi.client.subscriptions.insert({ part: "part",  }); 
    
/* 
Returns subscription resources that match the API request criteria.  
*/
await gapi.client.subscriptions.list({ part: "part",  }); 
    
/* 
Lists Super Chat events for a channel.  
*/
await gapi.client.superChatEvents.list({ part: "part",  }); 
    
/* 
Uploads a custom video thumbnail to YouTube and sets it for a video.  
*/
await gapi.client.thumbnails.set({ videoId: "videoId",  }); 
    
/* 
Returns a list of abuse reasons that can be used for reporting abusive videos.  
*/
await gapi.client.videoAbuseReportReasons.list({ part: "part",  }); 
    
/* 
Returns a list of categories that can be associated with YouTube videos.  
*/
await gapi.client.videoCategories.list({ part: "part",  }); 
    
/* 
Deletes a YouTube video.  
*/
await gapi.client.videos.delete({ id: "id",  }); 
    
/* 
Retrieves the ratings that the authorized user gave to a list of specified videos.  
*/
await gapi.client.videos.getRating({ id: "id",  }); 
    
/* 
Uploads a video to YouTube and optionally sets the video's metadata.  
*/
await gapi.client.videos.insert({ part: "part",  }); 
    
/* 
Returns a list of videos that match the API request parameters.  
*/
await gapi.client.videos.list({ part: "part",  }); 
    
/* 
Add a like or dislike rating to a video or remove a rating from a video.  
*/
await gapi.client.videos.rate({ id: "id", rating: "rating",  }); 
    
/* 
Report abuse for a video.  
*/
await gapi.client.videos.reportAbuse({  }); 
    
/* 
Updates a video's metadata.  
*/
await gapi.client.videos.update({ part: "part",  }); 
    
/* 
Uploads a watermark image to YouTube and sets it for a channel.  
*/
await gapi.client.watermarks.set({ channelId: "channelId",  }); 
    
/* 
Deletes a channel's watermark image.  
*/
await gapi.client.watermarks.unset({ channelId: "channelId",  });
```