# TypeScript typings for Google Vault API v1

For detailed description please check [documentation](https://apps.google.com/products/vault/).

## Installing

Install typings for Google Vault API:
```
npm install @types/gapi.client.vault@v1 --save-dev
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
gapi.client.load('vault', 'v1', () => {
    // now we can use gapi.client.vault
    // ... 
});
```



After that you can use Google Vault API resources:

```typescript 
    
/* 
Closes the specified matter. Returns matter with updated state.  
*/
await gapi.client.matters.close({ matterId: "matterId",  }); 
    
/* 
Undeletes the specified matter. Returns matter with updated state.  
*/
await gapi.client.matters.undelete({ matterId: "matterId",  }); 
    
/* 
Gets the specified matter.  
*/
await gapi.client.matters.get({ matterId: "matterId",  }); 
    
/* 
Updates the specified matter.
This updates only the name and description of the matter, identified by
matter id. Changes to any other fields are ignored.
Returns the default view of the matter.  
*/
await gapi.client.matters.update({ matterId: "matterId",  }); 
    
/* 
Deletes the specified matter. Returns matter with updated state.  
*/
await gapi.client.matters.delete({ matterId: "matterId",  }); 
    
/* 
Lists matters the user has access to.  
*/
await gapi.client.matters.list({  }); 
    
/* 
Adds an account as a matter collaborator.  
*/
await gapi.client.matters.addPermissions({ matterId: "matterId",  }); 
    
/* 
Creates a new matter. Returns created matter with default view.  
*/
await gapi.client.matters.create({  }); 
    
/* 
Removes an account as a matter collaborator.  
*/
await gapi.client.matters.removePermissions({ matterId: "matterId",  }); 
    
/* 
Reopens the specified matter. Returns matter with updated state.  
*/
await gapi.client.matters.reopen({ matterId: "matterId",  });
```