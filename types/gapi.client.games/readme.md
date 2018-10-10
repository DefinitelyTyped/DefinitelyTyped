# TypeScript typings for Google Play Game Services API v1
The API for Google Play Game Services.
For detailed description please check [documentation](https://developers.google.com/games/services/).

## Installing

Install typings for Google Play Game Services API:
```
npm install @types/gapi.client.games@v1 --save-dev
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
gapi.client.load('games', 'v1', () => {
    // now we can use gapi.client.games
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage its own configuration data in your Google Drive
        'https://www.googleapis.com/auth/drive.appdata',
    
        // Share your Google+ profile information and view and manage your game activity
        'https://www.googleapis.com/auth/games',
    
        // Know the list of people in your circles, your age range, and language
        'https://www.googleapis.com/auth/plus.login',
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

After that you can use Google Play Game Services API resources:

```typescript 
    
/* 
Lists all the achievement definitions for your application.  
*/
await gapi.client.achievementDefinitions.list({  }); 
    
/* 
Increments the steps of the achievement with the given ID for the currently authenticated player.  
*/
await gapi.client.achievements.increment({ achievementId: "achievementId", stepsToIncrement: 1,  }); 
    
/* 
Lists the progress for all your application's achievements for the currently authenticated player.  
*/
await gapi.client.achievements.list({ playerId: "playerId",  }); 
    
/* 
Sets the state of the achievement with the given ID to REVEALED for the currently authenticated player.  
*/
await gapi.client.achievements.reveal({ achievementId: "achievementId",  }); 
    
/* 
Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.  
*/
await gapi.client.achievements.setStepsAtLeast({ achievementId: "achievementId", steps: 1,  }); 
    
/* 
Unlocks this achievement for the currently authenticated player.  
*/
await gapi.client.achievements.unlock({ achievementId: "achievementId",  }); 
    
/* 
Updates multiple achievements for the currently authenticated player.  
*/
await gapi.client.achievements.updateMultiple({  }); 
    
/* 
Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified platformType, the returned response will not include any instance data.  
*/
await gapi.client.applications.get({ applicationId: "applicationId",  }); 
    
/* 
Indicate that the the currently authenticated user is playing your application.  
*/
await gapi.client.applications.played({  }); 
    
/* 
Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.  
*/
await gapi.client.applications.verify({ applicationId: "applicationId",  }); 
    
/* 
Returns a list showing the current progress on events in this application for the currently authenticated user.  
*/
await gapi.client.events.listByPlayer({  }); 
    
/* 
Returns a list of the event definitions in this application.  
*/
await gapi.client.events.listDefinitions({  }); 
    
/* 
Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.  
*/
await gapi.client.events.record({  }); 
    
/* 
Retrieves the metadata of the leaderboard with the given ID.  
*/
await gapi.client.leaderboards.get({ leaderboardId: "leaderboardId",  }); 
    
/* 
Lists all the leaderboard metadata for your application.  
*/
await gapi.client.leaderboards.list({  }); 
    
/* 
Return the metagame configuration data for the calling application.  
*/
await gapi.client.metagame.getMetagameConfig({  }); 
    
/* 
List play data aggregated per category for the player corresponding to playerId.  
*/
await gapi.client.metagame.listCategoriesByPlayer({ collection: "collection", playerId: "playerId",  }); 
    
/* 
Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set playerId to me.  
*/
await gapi.client.players.get({ playerId: "playerId",  }); 
    
/* 
Get the collection of players for the currently authenticated user.  
*/
await gapi.client.players.list({ collection: "collection",  }); 
    
/* 
Removes a push token for the current user and application. Removing a non-existent push token will report success.  
*/
await gapi.client.pushtokens.remove({  }); 
    
/* 
Registers a push token for the current user and application.  
*/
await gapi.client.pushtokens.update({  }); 
    
/* 
Report that a reward for the milestone corresponding to milestoneId for the quest corresponding to questId has been claimed by the currently authorized user.  
*/
await gapi.client.questMilestones.claim({ milestoneId: "milestoneId", questId: "questId", requestId: "requestId",  }); 
    
/* 
Indicates that the currently authorized user will participate in the quest.  
*/
await gapi.client.quests.accept({ questId: "questId",  }); 
    
/* 
Get a list of quests for your application and the currently authenticated player.  
*/
await gapi.client.quests.list({ playerId: "playerId",  }); 
    
/* 
Checks whether the games client is out of date.  
*/
await gapi.client.revisions.check({ clientRevision: "clientRevision",  }); 
    
/* 
Create a room. For internal use by the Games SDK only. Calling this method directly is unsupported.  
*/
await gapi.client.rooms.create({  }); 
    
/* 
Decline an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.  
*/
await gapi.client.rooms.decline({ roomId: "roomId",  }); 
    
/* 
Dismiss an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.  
*/
await gapi.client.rooms.dismiss({ roomId: "roomId",  }); 
    
/* 
Get the data for a room.  
*/
await gapi.client.rooms.get({ roomId: "roomId",  }); 
    
/* 
Join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.  
*/
await gapi.client.rooms.join({ roomId: "roomId",  }); 
    
/* 
Leave a room. For internal use by the Games SDK only. Calling this method directly is unsupported.  
*/
await gapi.client.rooms.leave({ roomId: "roomId",  }); 
    
/* 
Returns invitations to join rooms.  
*/
await gapi.client.rooms.list({  }); 
    
/* 
Updates sent by a client reporting the status of peers in a room. For internal use by the Games SDK only. Calling this method directly is unsupported.  
*/
await gapi.client.rooms.reportStatus({ roomId: "roomId",  }); 
    
/* 
Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, leaderboardId can be set to ALL to retrieve data for all leaderboards in a given time span.
NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.  
*/
await gapi.client.scores.get({ leaderboardId: "leaderboardId", playerId: "playerId", timeSpan: "timeSpan",  }); 
    
/* 
Lists the scores in a leaderboard, starting from the top.  
*/
await gapi.client.scores.list({ collection: "collection", leaderboardId: "leaderboardId", timeSpan: "timeSpan",  }); 
    
/* 
Lists the scores in a leaderboard around (and including) a player's score.  
*/
await gapi.client.scores.listWindow({ collection: "collection", leaderboardId: "leaderboardId", timeSpan: "timeSpan",  }); 
    
/* 
Submits a score to the specified leaderboard.  
*/
await gapi.client.scores.submit({ leaderboardId: "leaderboardId", score: "score",  }); 
    
/* 
Submits multiple scores to leaderboards.  
*/
await gapi.client.scores.submitMultiple({  }); 
    
/* 
Retrieves the metadata for a given snapshot ID.  
*/
await gapi.client.snapshots.get({ snapshotId: "snapshotId",  }); 
    
/* 
Retrieves a list of snapshots created by your application for the player corresponding to the player ID.  
*/
await gapi.client.snapshots.list({ playerId: "playerId",  }); 
    
/* 
Cancel a turn-based match.  
*/
await gapi.client.turnBasedMatches.cancel({ matchId: "matchId",  }); 
    
/* 
Create a turn-based match.  
*/
await gapi.client.turnBasedMatches.create({  }); 
    
/* 
Decline an invitation to play a turn-based match.  
*/
await gapi.client.turnBasedMatches.decline({ matchId: "matchId",  }); 
    
/* 
Dismiss a turn-based match from the match list. The match will no longer show up in the list and will not generate notifications.  
*/
await gapi.client.turnBasedMatches.dismiss({ matchId: "matchId",  }); 
    
/* 
Finish a turn-based match. Each player should make this call once, after all results are in. Only the player whose turn it is may make the first call to Finish, and can pass in the final match state.  
*/
await gapi.client.turnBasedMatches.finish({ matchId: "matchId",  }); 
    
/* 
Get the data for a turn-based match.  
*/
await gapi.client.turnBasedMatches.get({ matchId: "matchId",  }); 
    
/* 
Join a turn-based match.  
*/
await gapi.client.turnBasedMatches.join({ matchId: "matchId",  }); 
    
/* 
Leave a turn-based match when it is not the current player's turn, without canceling the match.  
*/
await gapi.client.turnBasedMatches.leave({ matchId: "matchId",  }); 
    
/* 
Leave a turn-based match during the current player's turn, without canceling the match.  
*/
await gapi.client.turnBasedMatches.leaveTurn({ matchId: "matchId", matchVersion: 1,  }); 
    
/* 
Returns turn-based matches the player is or was involved in.  
*/
await gapi.client.turnBasedMatches.list({  }); 
    
/* 
Create a rematch of a match that was previously completed, with the same participants. This can be called by only one player on a match still in their list; the player must have called Finish first. Returns the newly created match; it will be the caller's turn.  
*/
await gapi.client.turnBasedMatches.rematch({ matchId: "matchId",  }); 
    
/* 
Returns turn-based matches the player is or was involved in that changed since the last sync call, with the least recent changes coming first. Matches that should be removed from the local cache will have a status of MATCH_DELETED.  
*/
await gapi.client.turnBasedMatches.sync({  }); 
    
/* 
Commit the results of a player turn.  
*/
await gapi.client.turnBasedMatches.takeTurn({ matchId: "matchId",  });
```