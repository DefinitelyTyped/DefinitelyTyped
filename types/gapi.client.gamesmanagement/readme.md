# TypeScript typings for Google Play Game Services Management API v1management
The Management API for Google Play Game Services.
For detailed description please check [documentation](https://developers.google.com/games/services).

## Installing

Install typings for Google Play Game Services Management API:
```
npm install @types/gapi.client.gamesmanagement@v1management --save-dev
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
gapi.client.load('gamesmanagement', 'v1management', () => {
    // now we can use gapi.client.gamesmanagement
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
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

After that you can use Google Play Game Services Management API resources:

```typescript 
    
/* 
Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.  
*/
await gapi.client.achievements.reset({ achievementId: "achievementId",  }); 
    
/* 
Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.  
*/
await gapi.client.achievements.resetAll({  }); 
    
/* 
Resets all draft achievements for all players. This method is only available to user accounts for your developer console.  
*/
await gapi.client.achievements.resetAllForAllPlayers({  }); 
    
/* 
Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.  
*/
await gapi.client.achievements.resetForAllPlayers({ achievementId: "achievementId",  }); 
    
/* 
Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.  
*/
await gapi.client.achievements.resetMultipleForAllPlayers({  }); 
    
/* 
Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.  
*/
await gapi.client.applications.listHidden({ applicationId: "applicationId",  }); 
    
/* 
Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. All quests for this player that use the event will also be reset.  
*/
await gapi.client.events.reset({ eventId: "eventId",  }); 
    
/* 
Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application. All quests for this player will also be reset.  
*/
await gapi.client.events.resetAll({  }); 
    
/* 
Resets all draft events for all players. This method is only available to user accounts for your developer console. All quests that use any of these events will also be reset.  
*/
await gapi.client.events.resetAllForAllPlayers({  }); 
    
/* 
Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset. All quests that use the event will also be reset.  
*/
await gapi.client.events.resetForAllPlayers({ eventId: "eventId",  }); 
    
/* 
Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset. All quests that use any of the events will also be reset.  
*/
await gapi.client.events.resetMultipleForAllPlayers({  }); 
    
/* 
Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.  
*/
await gapi.client.players.hide({ applicationId: "applicationId", playerId: "playerId",  }); 
    
/* 
Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.  
*/
await gapi.client.players.unhide({ applicationId: "applicationId", playerId: "playerId",  }); 
    
/* 
Resets all player progress on the quest with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.  
*/
await gapi.client.quests.reset({ questId: "questId",  }); 
    
/* 
Resets all player progress on all quests for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.  
*/
await gapi.client.quests.resetAll({  }); 
    
/* 
Resets all draft quests for all players. This method is only available to user accounts for your developer console.  
*/
await gapi.client.quests.resetAllForAllPlayers({  }); 
    
/* 
Resets all player progress on the quest with the given ID for all players. This method is only available to user accounts for your developer console. Only draft quests can be reset.  
*/
await gapi.client.quests.resetForAllPlayers({ questId: "questId",  }); 
    
/* 
Resets quests with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft quests may be reset.  
*/
await gapi.client.quests.resetMultipleForAllPlayers({  }); 
    
/* 
Reset all rooms for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.  
*/
await gapi.client.rooms.reset({  }); 
    
/* 
Deletes rooms where the only room participants are from whitelisted tester accounts for your application. This method is only available to user accounts for your developer console.  
*/
await gapi.client.rooms.resetForAllPlayers({  }); 
    
/* 
Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.  
*/
await gapi.client.scores.reset({ leaderboardId: "leaderboardId",  }); 
    
/* 
Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.  
*/
await gapi.client.scores.resetAll({  }); 
    
/* 
Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.  
*/
await gapi.client.scores.resetAllForAllPlayers({  }); 
    
/* 
Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.  
*/
await gapi.client.scores.resetForAllPlayers({ leaderboardId: "leaderboardId",  }); 
    
/* 
Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.  
*/
await gapi.client.scores.resetMultipleForAllPlayers({  }); 
    
/* 
Reset all turn-based match data for a user. This method is only accessible to whitelisted tester accounts for your application.  
*/
await gapi.client.turnBasedMatches.reset({  }); 
    
/* 
Deletes turn-based matches where the only match participants are from whitelisted tester accounts for your application. This method is only available to user accounts for your developer console.  
*/
await gapi.client.turnBasedMatches.resetForAllPlayers({  });
```