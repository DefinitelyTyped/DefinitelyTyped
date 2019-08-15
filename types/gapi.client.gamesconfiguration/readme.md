# TypeScript typings for Google Play Game Services Publishing API v1configuration
The Publishing API for Google Play Game Services.
For detailed description please check [documentation](https://developers.google.com/games/services).

## Installing

Install typings for Google Play Game Services Publishing API:
```
npm install @types/gapi.client.gamesconfiguration@v1configuration --save-dev
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
gapi.client.load('gamesconfiguration', 'v1configuration', () => {
    // now we can use gapi.client.gamesconfiguration
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your Google Play Developer account
        'https://www.googleapis.com/auth/androidpublisher',
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

After that you can use Google Play Game Services Publishing API resources:

```typescript 
    
/* 
Delete the achievement configuration with the given ID.  
*/
await gapi.client.achievementConfigurations.delete({ achievementId: "achievementId",  }); 
    
/* 
Retrieves the metadata of the achievement configuration with the given ID.  
*/
await gapi.client.achievementConfigurations.get({ achievementId: "achievementId",  }); 
    
/* 
Insert a new achievement configuration in this application.  
*/
await gapi.client.achievementConfigurations.insert({ applicationId: "applicationId",  }); 
    
/* 
Returns a list of the achievement configurations in this application.  
*/
await gapi.client.achievementConfigurations.list({ applicationId: "applicationId",  }); 
    
/* 
Update the metadata of the achievement configuration with the given ID. This method supports patch semantics.  
*/
await gapi.client.achievementConfigurations.patch({ achievementId: "achievementId",  }); 
    
/* 
Update the metadata of the achievement configuration with the given ID.  
*/
await gapi.client.achievementConfigurations.update({ achievementId: "achievementId",  }); 
    
/* 
Uploads an image for a resource with the given ID and image type.  
*/
await gapi.client.imageConfigurations.upload({ imageType: "imageType", resourceId: "resourceId",  }); 
    
/* 
Delete the leaderboard configuration with the given ID.  
*/
await gapi.client.leaderboardConfigurations.delete({ leaderboardId: "leaderboardId",  }); 
    
/* 
Retrieves the metadata of the leaderboard configuration with the given ID.  
*/
await gapi.client.leaderboardConfigurations.get({ leaderboardId: "leaderboardId",  }); 
    
/* 
Insert a new leaderboard configuration in this application.  
*/
await gapi.client.leaderboardConfigurations.insert({ applicationId: "applicationId",  }); 
    
/* 
Returns a list of the leaderboard configurations in this application.  
*/
await gapi.client.leaderboardConfigurations.list({ applicationId: "applicationId",  }); 
    
/* 
Update the metadata of the leaderboard configuration with the given ID. This method supports patch semantics.  
*/
await gapi.client.leaderboardConfigurations.patch({ leaderboardId: "leaderboardId",  }); 
    
/* 
Update the metadata of the leaderboard configuration with the given ID.  
*/
await gapi.client.leaderboardConfigurations.update({ leaderboardId: "leaderboardId",  });
```