# TypeScript typings for Surveys API v2
Creates and conducts surveys, lists the surveys that an authenticated user owns, and retrieves survey results and information about specified surveys.
For detailed description please check [documentation](undefined).

## Installing

Install typings for Surveys API:
```
npm install @types/gapi.client.surveys@v2 --save-dev
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
gapi.client.load('surveys', 'v2', () => {
    // now we can use gapi.client.surveys
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your surveys and results
        'https://www.googleapis.com/auth/surveys',
    
        // View your surveys and survey results
        'https://www.googleapis.com/auth/surveys.readonly',
    
        // View your email address
        'https://www.googleapis.com/auth/userinfo.email',
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

After that you can use Surveys API resources:

```typescript 
    
/* 
Retrieves a MobileAppPanel that is available to the authenticated user.  
*/
await gapi.client.mobileapppanels.get({ panelId: "panelId",  }); 
    
/* 
Lists the MobileAppPanels available to the authenticated user.  
*/
await gapi.client.mobileapppanels.list({  }); 
    
/* 
Updates a MobileAppPanel. Currently the only property that can be updated is the owners property.  
*/
await gapi.client.mobileapppanels.update({ panelId: "panelId",  }); 
    
/* 
Retrieves any survey results that have been produced so far. Results are formatted as an Excel file. You must add "?alt=media" to the URL as an argument to get results.  
*/
await gapi.client.results.get({ surveyUrlId: "surveyUrlId",  }); 
    
/* 
Removes a survey from view in all user GET requests.  
*/
await gapi.client.surveys.delete({ surveyUrlId: "surveyUrlId",  }); 
    
/* 
Retrieves information about the specified survey.  
*/
await gapi.client.surveys.get({ surveyUrlId: "surveyUrlId",  }); 
    
/* 
Creates a survey.  
*/
await gapi.client.surveys.insert({  }); 
    
/* 
Lists the surveys owned by the authenticated user.  
*/
await gapi.client.surveys.list({  }); 
    
/* 
Begins running a survey.  
*/
await gapi.client.surveys.start({ resourceId: "resourceId",  }); 
    
/* 
Stops a running survey.  
*/
await gapi.client.surveys.stop({ resourceId: "resourceId",  }); 
    
/* 
Updates a survey. Currently the only property that can be updated is the owners property.  
*/
await gapi.client.surveys.update({ surveyUrlId: "surveyUrlId",  });
```