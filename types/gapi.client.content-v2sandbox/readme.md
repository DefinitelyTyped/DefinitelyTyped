# Typescript typings for Content API for Shopping
Manages product items, inventory, and Merchant Center accounts for Google Shopping.
For detailed description please check [documentation](https://developers.google.com/shopping-content).

## Installing

Install typings for Content API for Shopping:
```
npm install @types/gapi.client.content-v2sandbox --save-dev
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
gapi.client.load('content', 'v2sandbox', () => {
    // now we can use gapi.client.content
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your product listings and accounts for Google Shopping
        'https://www.googleapis.com/auth/content',
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

After that you can use Content API for Shopping resources:

```typescript 
    
/* 
Marks an order as acknowledged. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.orders.acknowledge({ merchantId: "merchantId", orderId: "orderId",  }); 
    
/* 
Sandbox only. Moves a test order from state "inProgress" to state "pendingShipment". This method can only be called for non-multi-client accounts.  
*/
await gapi.client.orders.advancetestorder({ merchantId: "merchantId", orderId: "orderId",  }); 
    
/* 
Cancels all line items in an order, making a full refund. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.orders.cancel({ merchantId: "merchantId", orderId: "orderId",  }); 
    
/* 
Cancels a line item, making a full refund. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.orders.cancellineitem({ merchantId: "merchantId", orderId: "orderId",  }); 
    
/* 
Sandbox only. Creates a test order. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.orders.createtestorder({ merchantId: "merchantId",  }); 
    
/* 
Retrieves or modifies multiple orders in a single request. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.orders.custombatch({  }); 
    
/* 
Retrieves an order from your Merchant Center account. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.orders.get({ merchantId: "merchantId", orderId: "orderId",  }); 
    
/* 
Retrieves an order using merchant order id. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.orders.getbymerchantorderid({ merchantId: "merchantId", merchantOrderId: "merchantOrderId",  }); 
    
/* 
Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.orders.gettestordertemplate({ merchantId: "merchantId", templateName: "templateName",  }); 
    
/* 
Lists the orders in your Merchant Center account. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.orders.list({ merchantId: "merchantId",  }); 
    
/* 
Refund a portion of the order, up to the full amount paid. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.orders.refund({ merchantId: "merchantId", orderId: "orderId",  }); 
    
/* 
Returns a line item. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.orders.returnlineitem({ merchantId: "merchantId", orderId: "orderId",  }); 
    
/* 
Marks line item(s) as shipped. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.orders.shiplineitems({ merchantId: "merchantId", orderId: "orderId",  }); 
    
/* 
Updates the merchant order ID for a given order. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.orders.updatemerchantorderid({ merchantId: "merchantId", orderId: "orderId",  }); 
    
/* 
Updates a shipment's status, carrier, and/or tracking ID. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.orders.updateshipment({ merchantId: "merchantId", orderId: "orderId",  });
```