# Typescript typings for Ad Exchange Buyer API
Accesses your bidding-account information, submits creatives for validation, finds available direct deals, and retrieves performance reports.
For detailed description please check [documentation](https://developers.google.com/ad-exchange/buyer-rest).

## Installing

Install typings for Ad Exchange Buyer API:
```
npm install @types/gapi.client.adexchangebuyer-v1.2 --save-dev
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
gapi.client.load('adexchangebuyer', 'v1.2', () => {
    // now we can use gapi.client.adexchangebuyer
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your Ad Exchange buyer account configuration
        'https://www.googleapis.com/auth/adexchange.buyer',
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

After that you can use Ad Exchange Buyer API resources:

```typescript 
    
/* 
Gets one account by ID.  
*/
await gapi.client.accounts.get({ id: 1,  }); 
    
/* 
Retrieves the authenticated user's list of accounts.  
*/
await gapi.client.accounts.list({  }); 
    
/* 
Updates an existing account. This method supports patch semantics.  
*/
await gapi.client.accounts.patch({ id: 1,  }); 
    
/* 
Updates an existing account.  
*/
await gapi.client.accounts.update({ id: 1,  }); 
    
/* 
Gets the status for a single creative. A creative will be available 30-40 minutes after submission.  
*/
await gapi.client.creatives.get({ accountId: 1, buyerCreativeId: "buyerCreativeId",  }); 
    
/* 
Submit a new creative.  
*/
await gapi.client.creatives.insert({  }); 
    
/* 
Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.  
*/
await gapi.client.creatives.list({  });
```