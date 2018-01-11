# TypeScript typings for AdSense Management API v1.4
Accesses AdSense publishers' inventory and generates performance reports.
For detailed description please check [documentation](https://developers.google.com/adsense/management/).

## Installing

Install typings for AdSense Management API:
```
npm install @types/gapi.client.adsense@v1.4 --save-dev
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
gapi.client.load('adsense', 'v1.4', () => {
    // now we can use gapi.client.adsense
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your AdSense data
        'https://www.googleapis.com/auth/adsense',
    
        // View your AdSense data
        'https://www.googleapis.com/auth/adsense.readonly',
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

After that you can use AdSense Management API resources:

```typescript 
    
/* 
Get information about the selected AdSense account.  
*/
await gapi.client.accounts.get({ accountId: "accountId",  }); 
    
/* 
List all accounts available to this AdSense account.  
*/
await gapi.client.accounts.list({  }); 
    
/* 
List all ad clients in this AdSense account.  
*/
await gapi.client.adclients.list({  }); 
    
/* 
Gets the specified ad unit in the specified ad client.  
*/
await gapi.client.adunits.get({ adClientId: "adClientId", adUnitId: "adUnitId",  }); 
    
/* 
Get ad code for the specified ad unit.  
*/
await gapi.client.adunits.getAdCode({ adClientId: "adClientId", adUnitId: "adUnitId",  }); 
    
/* 
List all ad units in the specified ad client for this AdSense account.  
*/
await gapi.client.adunits.list({ adClientId: "adClientId",  }); 
    
/* 
Dismiss (delete) the specified alert from the publisher's AdSense account.  
*/
await gapi.client.alerts.delete({ alertId: "alertId",  }); 
    
/* 
List the alerts for this AdSense account.  
*/
await gapi.client.alerts.list({  }); 
    
/* 
Get the specified custom channel from the specified ad client.  
*/
await gapi.client.customchannels.get({ adClientId: "adClientId", customChannelId: "customChannelId",  }); 
    
/* 
List all custom channels in the specified ad client for this AdSense account.  
*/
await gapi.client.customchannels.list({ adClientId: "adClientId",  }); 
    
/* 
List the payments for this AdSense account.  
*/
await gapi.client.payments.list({  }); 
    
/* 
Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.  
*/
await gapi.client.reports.generate({ endDate: "endDate", startDate: "startDate",  }); 
    
/* 
Get a specific saved ad style from the user's account.  
*/
await gapi.client.savedadstyles.get({ savedAdStyleId: "savedAdStyleId",  }); 
    
/* 
List all saved ad styles in the user's account.  
*/
await gapi.client.savedadstyles.list({  }); 
    
/* 
List all URL channels in the specified ad client for this AdSense account.  
*/
await gapi.client.urlchannels.list({ adClientId: "adClientId",  });
```