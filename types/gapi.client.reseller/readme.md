# TypeScript typings for Enterprise Apps Reseller API v1
Creates and manages your customers and their subscriptions.
For detailed description please check [documentation](https://developers.google.com/google-apps/reseller/).

## Installing

Install typings for Enterprise Apps Reseller API:
```
npm install @types/gapi.client.reseller@v1 --save-dev
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
gapi.client.load('reseller', 'v1', () => {
    // now we can use gapi.client.reseller
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage users on your domain
        'https://www.googleapis.com/auth/apps.order',
    
        // Manage users on your domain
        'https://www.googleapis.com/auth/apps.order.readonly',
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

After that you can use Enterprise Apps Reseller API resources:

```typescript 
    
/* 
Get a customer account.  
*/
await gapi.client.customers.get({ customerId: "customerId",  }); 
    
/* 
Order a new customer's account.  
*/
await gapi.client.customers.insert({  }); 
    
/* 
Update a customer account's settings. This method supports patch semantics.  
*/
await gapi.client.customers.patch({ customerId: "customerId",  }); 
    
/* 
Update a customer account's settings.  
*/
await gapi.client.customers.update({ customerId: "customerId",  }); 
    
/* 
Returns all the details of the watch corresponding to the reseller.  
*/
await gapi.client.resellernotify.getwatchdetails({  }); 
    
/* 
Registers a Reseller for receiving notifications.  
*/
await gapi.client.resellernotify.register({  }); 
    
/* 
Unregisters a Reseller for receiving notifications.  
*/
await gapi.client.resellernotify.unregister({  }); 
    
/* 
Activates a subscription previously suspended by the reseller  
*/
await gapi.client.subscriptions.activate({ customerId: "customerId", subscriptionId: "subscriptionId",  }); 
    
/* 
Update a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments.  
*/
await gapi.client.subscriptions.changePlan({ customerId: "customerId", subscriptionId: "subscriptionId",  }); 
    
/* 
Update a user license's renewal settings. This is applicable for accounts with annual commitment plans only.  
*/
await gapi.client.subscriptions.changeRenewalSettings({ customerId: "customerId", subscriptionId: "subscriptionId",  }); 
    
/* 
Update a subscription's user license settings.  
*/
await gapi.client.subscriptions.changeSeats({ customerId: "customerId", subscriptionId: "subscriptionId",  }); 
    
/* 
Cancel, suspend or transfer a subscription to direct.  
*/
await gapi.client.subscriptions.delete({ customerId: "customerId", deletionType: "deletionType", subscriptionId: "subscriptionId",  }); 
    
/* 
Get a specific subscription.  
*/
await gapi.client.subscriptions.get({ customerId: "customerId", subscriptionId: "subscriptionId",  }); 
    
/* 
Create or transfer a subscription.  
*/
await gapi.client.subscriptions.insert({ customerId: "customerId",  }); 
    
/* 
List of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions.  
*/
await gapi.client.subscriptions.list({  }); 
    
/* 
Immediately move a 30-day free trial subscription to a paid service subscription.  
*/
await gapi.client.subscriptions.startPaidService({ customerId: "customerId", subscriptionId: "subscriptionId",  }); 
    
/* 
Suspends an active subscription.  
*/
await gapi.client.subscriptions.suspend({ customerId: "customerId", subscriptionId: "subscriptionId",  });
```