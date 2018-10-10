# TypeScript typings for DoubleClick Search API v2
Reports and modifies your advertising data in DoubleClick Search (for example, campaigns, ad groups, keywords, and conversions).
For detailed description please check [documentation](https://developers.google.com/doubleclick-search/).

## Installing

Install typings for DoubleClick Search API:
```
npm install @types/gapi.client.doubleclicksearch@v2 --save-dev
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
gapi.client.load('doubleclicksearch', 'v2', () => {
    // now we can use gapi.client.doubleclicksearch
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your advertising data in DoubleClick Search
        'https://www.googleapis.com/auth/doubleclicksearch',
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

After that you can use DoubleClick Search API resources:

```typescript 
    
/* 
Retrieves a list of conversions from a DoubleClick Search engine account.  
*/
await gapi.client.conversion.get({ advertiserId: "advertiserId", agencyId: "agencyId", endDate: 1, engineAccountId: "engineAccountId", rowCount: 1, startDate: 1, startRow: 1,  }); 
    
/* 
Inserts a batch of new conversions into DoubleClick Search.  
*/
await gapi.client.conversion.insert({  }); 
    
/* 
Updates a batch of conversions in DoubleClick Search. This method supports patch semantics.  
*/
await gapi.client.conversion.patch({ advertiserId: "advertiserId", agencyId: "agencyId", endDate: 1, engineAccountId: "engineAccountId", rowCount: 1, startDate: 1, startRow: 1,  }); 
    
/* 
Updates a batch of conversions in DoubleClick Search.  
*/
await gapi.client.conversion.update({  }); 
    
/* 
Updates the availabilities of a batch of floodlight activities in DoubleClick Search.  
*/
await gapi.client.conversion.updateAvailability({  }); 
    
/* 
Generates and returns a report immediately.  
*/
await gapi.client.reports.generate({  }); 
    
/* 
Polls for the status of a report request.  
*/
await gapi.client.reports.get({ reportId: "reportId",  }); 
    
/* 
Downloads a report file encoded in UTF-8.  
*/
await gapi.client.reports.getFile({ reportFragment: 1, reportId: "reportId",  }); 
    
/* 
Inserts a report request into the reporting system.  
*/
await gapi.client.reports.request({  }); 
    
/* 
Retrieve the list of saved columns for a specified advertiser.  
*/
await gapi.client.savedColumns.list({ advertiserId: "advertiserId", agencyId: "agencyId",  });
```