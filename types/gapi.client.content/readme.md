# TypeScript typings for Content API for Shopping v2
Manages product items, inventory, and Merchant Center accounts for Google Shopping.
For detailed description please check [documentation](https://developers.google.com/shopping-content).

## Installing

Install typings for Content API for Shopping:
```
npm install @types/gapi.client.content@v2 --save-dev
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
gapi.client.load('content', 'v2', () => {
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
Returns information about the authenticated user.  
*/
await gapi.client.accounts.authinfo({  }); 
    
/* 
Claims the website of a Merchant Center sub-account. This method can only be called for accounts to which the managing account has access: either the managing account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account.  
*/
await gapi.client.accounts.claimwebsite({ accountId: "accountId", merchantId: "merchantId",  }); 
    
/* 
Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.  
*/
await gapi.client.accounts.custombatch({  }); 
    
/* 
Deletes a Merchant Center sub-account. This method can only be called for multi-client accounts.  
*/
await gapi.client.accounts.delete({ accountId: "accountId", merchantId: "merchantId",  }); 
    
/* 
Retrieves a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account.  
*/
await gapi.client.accounts.get({ accountId: "accountId", merchantId: "merchantId",  }); 
    
/* 
Creates a Merchant Center sub-account. This method can only be called for multi-client accounts.  
*/
await gapi.client.accounts.insert({ merchantId: "merchantId",  }); 
    
/* 
Lists the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.  
*/
await gapi.client.accounts.list({ merchantId: "merchantId",  }); 
    
/* 
Updates a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account. This method supports patch semantics.  
*/
await gapi.client.accounts.patch({ accountId: "accountId", merchantId: "merchantId",  }); 
    
/* 
Updates a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account.  
*/
await gapi.client.accounts.update({ accountId: "accountId", merchantId: "merchantId",  }); 
    
/* 
undefined  
*/
await gapi.client.accountstatuses.custombatch({  }); 
    
/* 
Retrieves the status of a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account.  
*/
await gapi.client.accountstatuses.get({ accountId: "accountId", merchantId: "merchantId",  }); 
    
/* 
Lists the statuses of the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.  
*/
await gapi.client.accountstatuses.list({ merchantId: "merchantId",  }); 
    
/* 
Retrieves and updates tax settings of multiple accounts in a single request.  
*/
await gapi.client.accounttax.custombatch({  }); 
    
/* 
Retrieves the tax settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account.  
*/
await gapi.client.accounttax.get({ accountId: "accountId", merchantId: "merchantId",  }); 
    
/* 
Lists the tax settings of the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.  
*/
await gapi.client.accounttax.list({ merchantId: "merchantId",  }); 
    
/* 
Updates the tax settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account. This method supports patch semantics.  
*/
await gapi.client.accounttax.patch({ accountId: "accountId", merchantId: "merchantId",  }); 
    
/* 
Updates the tax settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account.  
*/
await gapi.client.accounttax.update({ accountId: "accountId", merchantId: "merchantId",  }); 
    
/* 
undefined  
*/
await gapi.client.datafeeds.custombatch({  }); 
    
/* 
Deletes a datafeed configuration from your Merchant Center account. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.datafeeds.delete({ datafeedId: "datafeedId", merchantId: "merchantId",  }); 
    
/* 
Retrieves a datafeed configuration from your Merchant Center account. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.datafeeds.get({ datafeedId: "datafeedId", merchantId: "merchantId",  }); 
    
/* 
Registers a datafeed configuration with your Merchant Center account. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.datafeeds.insert({ merchantId: "merchantId",  }); 
    
/* 
Lists the datafeeds in your Merchant Center account. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.datafeeds.list({ merchantId: "merchantId",  }); 
    
/* 
Updates a datafeed configuration of your Merchant Center account. This method can only be called for non-multi-client accounts. This method supports patch semantics.  
*/
await gapi.client.datafeeds.patch({ datafeedId: "datafeedId", merchantId: "merchantId",  }); 
    
/* 
Updates a datafeed configuration of your Merchant Center account. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.datafeeds.update({ datafeedId: "datafeedId", merchantId: "merchantId",  }); 
    
/* 
undefined  
*/
await gapi.client.datafeedstatuses.custombatch({  }); 
    
/* 
Retrieves the status of a datafeed from your Merchant Center account. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.datafeedstatuses.get({ datafeedId: "datafeedId", merchantId: "merchantId",  }); 
    
/* 
Lists the statuses of the datafeeds in your Merchant Center account. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.datafeedstatuses.list({ merchantId: "merchantId",  }); 
    
/* 
Updates price and availability for multiple products or stores in a single request. This operation does not update the expiration date of the products. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.inventory.custombatch({  }); 
    
/* 
Updates price and availability of a product in your Merchant Center account. This operation does not update the expiration date of the product. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.inventory.set({ merchantId: "merchantId", productId: "productId", storeCode: "storeCode",  }); 
    
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
    
/* 
Retrieves, inserts, and deletes multiple products in a single request. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.products.custombatch({  }); 
    
/* 
Deletes a product from your Merchant Center account. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.products.delete({ merchantId: "merchantId", productId: "productId",  }); 
    
/* 
Retrieves a product from your Merchant Center account. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.products.get({ merchantId: "merchantId", productId: "productId",  }); 
    
/* 
Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.products.insert({ merchantId: "merchantId",  }); 
    
/* 
Lists the products in your Merchant Center account. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.products.list({ merchantId: "merchantId",  }); 
    
/* 
Gets the statuses of multiple products in a single request. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.productstatuses.custombatch({  }); 
    
/* 
Gets the status of a product from your Merchant Center account. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.productstatuses.get({ merchantId: "merchantId", productId: "productId",  }); 
    
/* 
Lists the statuses of the products in your Merchant Center account. This method can only be called for non-multi-client accounts.  
*/
await gapi.client.productstatuses.list({ merchantId: "merchantId",  }); 
    
/* 
Retrieves and updates the shipping settings of multiple accounts in a single request.  
*/
await gapi.client.shippingsettings.custombatch({  }); 
    
/* 
Retrieves the shipping settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account.  
*/
await gapi.client.shippingsettings.get({ accountId: "accountId", merchantId: "merchantId",  }); 
    
/* 
Retrieves supported carriers and carrier services for an account.  
*/
await gapi.client.shippingsettings.getsupportedcarriers({ merchantId: "merchantId",  }); 
    
/* 
Lists the shipping settings of the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.  
*/
await gapi.client.shippingsettings.list({ merchantId: "merchantId",  }); 
    
/* 
Updates the shipping settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account. This method supports patch semantics.  
*/
await gapi.client.shippingsettings.patch({ accountId: "accountId", merchantId: "merchantId",  }); 
    
/* 
Updates the shipping settings of the account. This method can only be called for accounts to which the managing account has access: either the managing account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account.  
*/
await gapi.client.shippingsettings.update({ accountId: "accountId", merchantId: "merchantId",  });
```