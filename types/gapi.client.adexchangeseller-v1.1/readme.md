# Typescript typings for Ad Exchange Seller API
Accesses the inventory of Ad Exchange seller users and generates reports.
For detailed description please check [documentation](https://developers.google.com/ad-exchange/seller-rest/).

## Installing

Install typings for Ad Exchange Seller API:
```
npm install @types/gapi.client.adexchangeseller-v1.1 --save-dev
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
gapi.client.load('adexchangeseller', 'v1.1', () => {
    // now we can use gapi.client.adexchangeseller
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your Ad Exchange data
        'https://www.googleapis.com/auth/adexchange.seller',
    
        // View your Ad Exchange data
        'https://www.googleapis.com/auth/adexchange.seller.readonly',
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

After that you can use Ad Exchange Seller API resources:

```typescript 
    
/* 
Get information about the selected Ad Exchange account.  
*/
await gapi.client.accounts.get({ accountId: "accountId",  }); 
    
/* 
List all ad clients in this Ad Exchange account.  
*/
await gapi.client.adclients.list({  }); 
    
/* 
Gets the specified ad unit in the specified ad client.  
*/
await gapi.client.adunits.get({ adClientId: "adClientId", adUnitId: "adUnitId",  }); 
    
/* 
List all ad units in the specified ad client for this Ad Exchange account.  
*/
await gapi.client.adunits.list({ adClientId: "adClientId",  }); 
    
/* 
List the alerts for this Ad Exchange account.  
*/
await gapi.client.alerts.list({  }); 
    
/* 
Get the specified custom channel from the specified ad client.  
*/
await gapi.client.customchannels.get({ adClientId: "adClientId", customChannelId: "customChannelId",  }); 
    
/* 
List all custom channels in the specified ad client for this Ad Exchange account.  
*/
await gapi.client.customchannels.list({ adClientId: "adClientId",  }); 
    
/* 
Get information about the selected Ad Exchange Preferred Deal.  
*/
await gapi.client.preferreddeals.get({ dealId: "dealId",  }); 
    
/* 
List the preferred deals for this Ad Exchange account.  
*/
await gapi.client.preferreddeals.list({  }); 
    
/* 
Generate an Ad Exchange report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.  
*/
await gapi.client.reports.generate({ endDate: "endDate", startDate: "startDate",  }); 
    
/* 
List all URL channels in the specified ad client for this Ad Exchange account.  
*/
await gapi.client.urlchannels.list({ adClientId: "adClientId",  });
```