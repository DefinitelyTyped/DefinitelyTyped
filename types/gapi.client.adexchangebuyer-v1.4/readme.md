# Typescript typings for Ad Exchange Buyer API
Accesses your bidding-account information, submits creatives for validation, finds available direct deals, and retrieves performance reports.
For detailed description please check [documentation](https://developers.google.com/ad-exchange/buyer-rest).

## Installing

Install typings for Ad Exchange Buyer API:
```
npm install @types/gapi.client.adexchangebuyer-v1.4 --save-dev
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
gapi.client.load('adexchangebuyer', 'v1.4', () => {
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
Add a deal id association for the creative.  
*/
await gapi.client.creatives.addDeal({ accountId: 1, buyerCreativeId: "buyerCreativeId", dealId: "dealId",  }); 
    
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
Lists the external deal ids associated with the creative.  
*/
await gapi.client.creatives.listDeals({ accountId: 1, buyerCreativeId: "buyerCreativeId",  }); 
    
/* 
Remove a deal id associated with the creative.  
*/
await gapi.client.creatives.removeDeal({ accountId: 1, buyerCreativeId: "buyerCreativeId", dealId: "dealId",  }); 
    
/* 
Delete the specified deals from the proposal  
*/
await gapi.client.marketplacedeals.delete({ proposalId: "proposalId",  }); 
    
/* 
Add new deals for the specified proposal  
*/
await gapi.client.marketplacedeals.insert({ proposalId: "proposalId",  }); 
    
/* 
List all the deals for a given proposal  
*/
await gapi.client.marketplacedeals.list({ proposalId: "proposalId",  }); 
    
/* 
Replaces all the deals in the proposal with the passed in deals  
*/
await gapi.client.marketplacedeals.update({ proposalId: "proposalId",  }); 
    
/* 
Add notes to the proposal  
*/
await gapi.client.marketplacenotes.insert({ proposalId: "proposalId",  }); 
    
/* 
Get all the notes associated with a proposal  
*/
await gapi.client.marketplacenotes.list({ proposalId: "proposalId",  }); 
    
/* 
Update a given private auction proposal  
*/
await gapi.client.marketplaceprivateauction.updateproposal({ privateAuctionId: "privateAuctionId",  }); 
    
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
    
/* 
Gets the requested product by id.  
*/
await gapi.client.products.get({ productId: "productId",  }); 
    
/* 
Gets the requested product.  
*/
await gapi.client.products.search({  }); 
    
/* 
Get a proposal given its id  
*/
await gapi.client.proposals.get({ proposalId: "proposalId",  }); 
    
/* 
Create the given list of proposals  
*/
await gapi.client.proposals.insert({  }); 
    
/* 
Update the given proposal. This method supports patch semantics.  
*/
await gapi.client.proposals.patch({ proposalId: "proposalId", revisionNumber: "revisionNumber", updateAction: "updateAction",  }); 
    
/* 
Search for proposals using pql query  
*/
await gapi.client.proposals.search({  }); 
    
/* 
Update the given proposal to indicate that setup has been completed.  
*/
await gapi.client.proposals.setupcomplete({ proposalId: "proposalId",  }); 
    
/* 
Update the given proposal  
*/
await gapi.client.proposals.update({ proposalId: "proposalId", revisionNumber: "revisionNumber", updateAction: "updateAction",  }); 
    
/* 
Gets the requested publisher profile(s) by publisher accountId.  
*/
await gapi.client.pubprofiles.list({ accountId: 1,  });
```