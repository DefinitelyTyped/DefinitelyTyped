# TypeScript typings for Google Cloud Billing API v1
Allows developers to manage billing for their Google Cloud Platform projects
    programmatically.
For detailed description please check [documentation](https://cloud.google.com/billing/).

## Installing

Install typings for Google Cloud Billing API:
```
npm install @types/gapi.client.cloudbilling@v1 --save-dev
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
gapi.client.load('cloudbilling', 'v1', () => {
    // now we can use gapi.client.cloudbilling
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
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

After that you can use Google Cloud Billing API resources:

```typescript 
    
/* 
Gets information about a billing account. The current authenticated user
must be an [owner of the billing
account](https://support.google.com/cloud/answer/4430947).  
*/
await gapi.client.billingAccounts.get({ name: "name",  }); 
    
/* 
Lists the billing accounts that the current authenticated user
[owns](https://support.google.com/cloud/answer/4430947).  
*/
await gapi.client.billingAccounts.list({  }); 
    
/* 
Gets the billing information for a project. The current authenticated user
must have [permission to view the
project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
).  
*/
await gapi.client.projects.getBillingInfo({ name: "name",  }); 
    
/* 
Sets or updates the billing account associated with a project. You specify
the new billing account by setting the `billing_account_name` in the
`ProjectBillingInfo` resource to the resource name of a billing account.
Associating a project with an open billing account enables billing on the
project and allows charges for resource usage. If the project already had a
billing account, this method changes the billing account used for resource
usage charges.

*Note:* Incurred charges that have not yet been reported in the transaction
history of the Google Cloud Console may be billed to the new billing
account, even if the charge occurred before the new billing account was
assigned to the project.

The current authenticated user must have ownership privileges for both the
[project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
) and the [billing
account](https://support.google.com/cloud/answer/4430947).

You can disable billing on the project by setting the
`billing_account_name` field to empty. This action disassociates the
current billing account from the project. Any billable activity of your
in-use services will stop, and your application could stop functioning as
expected. Any unbilled charges to date will be billed to the previously
associated account. The current authenticated user must be either an owner
of the project or an owner of the billing account for the project.

Note that associating a project with a *closed* billing account will have
much the same effect as disabling billing on the project: any paid
resources used by the project will be shut down. Thus, unless you wish to
disable billing, you should always call this method with the name of an
*open* billing account.  
*/
await gapi.client.projects.updateBillingInfo({ name: "name",  }); 
    
/* 
Lists all public cloud services.  
*/
await gapi.client.services.list({  });
```