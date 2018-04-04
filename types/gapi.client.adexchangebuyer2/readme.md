# TypeScript typings for Ad Exchange Buyer API II v2beta1
Accesses the latest features for managing Ad Exchange accounts, Real-Time Bidding configurations and auction metrics, and Marketplace programmatic deals.
For detailed description please check [documentation](https://developers.google.com/ad-exchange/buyer-rest/reference/rest/).

## Installing

Install typings for Ad Exchange Buyer API II:
```
npm install @types/gapi.client.adexchangebuyer2@v2beta1 --save-dev
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
gapi.client.load('adexchangebuyer2', 'v2beta1', () => {
    // now we can use gapi.client.adexchangebuyer2
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

After that you can use Ad Exchange Buyer API II resources:

```typescript
```