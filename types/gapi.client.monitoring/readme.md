# TypeScript typings for Stackdriver Monitoring API v3
Manages your Stackdriver Monitoring data and configurations. Most projects must be associated with a Stackdriver account, with a few exceptions as noted on the individual method pages.
For detailed description please check [documentation](https://cloud.google.com/monitoring/api/).

## Installing

Install typings for Stackdriver Monitoring API:
```
npm install @types/gapi.client.monitoring@v3 --save-dev
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
gapi.client.load('monitoring', 'v3', () => {
    // now we can use gapi.client.monitoring
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
    
        // View and write monitoring data for all of your Google and third-party Cloud and API projects
        'https://www.googleapis.com/auth/monitoring',
    
        // View monitoring data for all of your Google Cloud and third-party projects
        'https://www.googleapis.com/auth/monitoring.read',
    
        // Publish metric data to your Google Cloud projects
        'https://www.googleapis.com/auth/monitoring.write',
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

After that you can use Stackdriver Monitoring API resources:

```typescript
```