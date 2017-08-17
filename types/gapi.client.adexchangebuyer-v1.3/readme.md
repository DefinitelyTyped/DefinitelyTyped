# Typescript typings for Ad Exchange Buyer API
Accesses your bidding-account information, submits creatives for validation, finds available direct deals, and retrieves performance reports.
For detailed description please check [documentation](https://developers.google.com/ad-exchange/buyer-rest).

## Installing

Install typings for Ad Exchange Buyer API:
```
npm install @types/gapi.client.adexchangebuyer-v1.3 --save-dev
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
gapi.client.load('adexchangebuyer', 'v1.3', () => {
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
Returns the billing information for one account specified by account ID.  
*/
await gapi.client.billingInfo.get({ accountId: 1,  }); 
    
/* 
Retrieves a list of billing information for all accounts of the authenticated user.  
*/
await gapi.client.billingInfo.list({  }); 
    
/* 
Returns the budget information for the adgroup specified by the accountId and billingId.  
*/
await gapi.client.budget.get({ accountId: "accountId", billingId: "billingId",  }); 
    
/* 
Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.  
*/
await gapi.client.budget.patch({ accountId: "accountId", billingId: "billingId",  }); 
    
/* 
Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.  
*/
await gapi.client.budget.update({ accountId: "accountId", billingId: "billingId",  }); 
    
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
    
/* 
Gets one direct deal by ID.  
*/
await gapi.client.directDeals.get({ id: "id",  }); 
    
/* 
Retrieves the authenticated user's list of direct deals.  
*/
await gapi.client.directDeals.list({  }); 
    
/* 
Retrieves the authenticated user's list of performance metrics.  
*/
await gapi.client.performanceReport.list({ accountId: "accountId", endDateTime: "endDateTime", startDateTime: "startDateTime",  }); 
    
/* 
Deletes an existing pretargeting config.  
*/
await gapi.client.pretargetingConfig.delete({ accountId: "accountId", configId: "configId",  }); 
    
/* 
Gets a specific pretargeting configuration  
*/
await gapi.client.pretargetingConfig.get({ accountId: "accountId", configId: "configId",  }); 
    
/* 
Inserts a new pretargeting configuration.  
*/
await gapi.client.pretargetingConfig.insert({ accountId: "accountId",  }); 
    
/* 
Retrieves a list of the authenticated user's pretargeting configurations.  
*/
await gapi.client.pretargetingConfig.list({ accountId: "accountId",  }); 
    
/* 
Updates an existing pretargeting config. This method supports patch semantics.  
*/
await gapi.client.pretargetingConfig.patch({ accountId: "accountId", configId: "configId",  }); 
    
/* 
Updates an existing pretargeting config.  
*/
await gapi.client.pretargetingConfig.update({ accountId: "accountId", configId: "configId",  });
```