# TypeScript typings for Enterprise License Manager API v1
Views and manages licenses for your domain.
For detailed description please check [documentation](https://developers.google.com/google-apps/licensing/).

## Installing

Install typings for Enterprise License Manager API:
```
npm install @types/gapi.client.licensing@v1 --save-dev
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
gapi.client.load('licensing', 'v1', () => {
    // now we can use gapi.client.licensing
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage G Suite licenses for your domain
        'https://www.googleapis.com/auth/apps.licensing',
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

After that you can use Enterprise License Manager API resources:

```typescript 
    
/* 
Revoke License.  
*/
await gapi.client.licenseAssignments.delete({ productId: "productId", skuId: "skuId", userId: "userId",  }); 
    
/* 
Get license assignment of a particular product and sku for a user  
*/
await gapi.client.licenseAssignments.get({ productId: "productId", skuId: "skuId", userId: "userId",  }); 
    
/* 
Assign License.  
*/
await gapi.client.licenseAssignments.insert({ productId: "productId", skuId: "skuId",  }); 
    
/* 
List license assignments for given product of the customer.  
*/
await gapi.client.licenseAssignments.listForProduct({ customerId: "customerId", productId: "productId",  }); 
    
/* 
List license assignments for given product and sku of the customer.  
*/
await gapi.client.licenseAssignments.listForProductAndSku({ customerId: "customerId", productId: "productId", skuId: "skuId",  }); 
    
/* 
Assign License. This method supports patch semantics.  
*/
await gapi.client.licenseAssignments.patch({ productId: "productId", skuId: "skuId", userId: "userId",  }); 
    
/* 
Assign License.  
*/
await gapi.client.licenseAssignments.update({ productId: "productId", skuId: "skuId", userId: "userId",  });
```