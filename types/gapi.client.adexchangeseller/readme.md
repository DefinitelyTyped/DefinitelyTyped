# TypeScript typings for Ad Exchange Seller API v2.0
Accesses the inventory of Ad Exchange seller users and generates reports.
For detailed description please check [documentation](https://developers.google.com/ad-exchange/seller-rest/).

## Installing

Install typings for Ad Exchange Seller API:
```
npm install @types/gapi.client.adexchangeseller@v2.0 --save-dev
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
gapi.client.load('adexchangeseller', 'v2.0', () => {
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
List all accounts available to this Ad Exchange account.  
*/
await gapi.client.accounts.list({  });
```