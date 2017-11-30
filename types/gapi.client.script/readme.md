# TypeScript typings for Google Apps Script Execution API v1
An API for managing and executing Google Apps Script projects.
For detailed description please check [documentation](https://developers.google.com/apps-script/execution/rest/v1/scripts/run).

## Installing

Install typings for Google Apps Script Execution API:
```
npm install @types/gapi.client.script@v1 --save-dev
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
gapi.client.load('script', 'v1', () => {
    // now we can use gapi.client.script
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Read, send, delete, and manage your email
        'https://mail.google.com/',
    
        // Manage your calendars
        'https://www.google.com/calendar/feeds',
    
        // Manage your contacts
        'https://www.google.com/m8/feeds',
    
        // View and manage the provisioning of groups on your domain
        'https://www.googleapis.com/auth/admin.directory.group',
    
        // View and manage the provisioning of users on your domain
        'https://www.googleapis.com/auth/admin.directory.user',
    
        // View and manage the files in your Google Drive
        'https://www.googleapis.com/auth/drive',
    
        // View and manage your forms in Google Drive
        'https://www.googleapis.com/auth/forms',
    
        // View and manage forms that this application has been installed in
        'https://www.googleapis.com/auth/forms.currentonly',
    
        // View and manage your Google Groups
        'https://www.googleapis.com/auth/groups',
    
        // View and manage your spreadsheets in Google Drive
        'https://www.googleapis.com/auth/spreadsheets',
    
        // View your email address
        'https://www.googleapis.com/auth/userinfo.email',
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

After that you can use Google Apps Script Execution API resources:

```typescript 
    
/* 
Runs a function in an Apps Script project. The project must be deployed
for use with the Apps Script Execution API.

This method requires authorization with an OAuth 2.0 token that includes at
least one of the scopes listed in the [Authorization](#authorization)
section; script projects that do not require authorization cannot be
executed through this API. To find the correct scopes to include in the
authentication token, open the project in the script editor, then select
**File > Project properties** and click the **Scopes** tab.  
*/
await gapi.client.scripts.run({ scriptId: "scriptId",  });
```