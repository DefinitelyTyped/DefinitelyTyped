# TypeScript typings for YouTube Reporting API v1
Schedules reporting jobs containing your YouTube Analytics data and downloads the resulting bulk data reports in the form of CSV files.
For detailed description please check [documentation](https://developers.google.com/youtube/reporting/v1/reports/).

## Installing

Install typings for YouTube Reporting API:
```
npm install @types/gapi.client.youtubereporting@v1 --save-dev
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
gapi.client.load('youtubereporting', 'v1', () => {
    // now we can use gapi.client.youtubereporting
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View monetary and non-monetary YouTube Analytics reports for your YouTube content
        'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
    
        // View YouTube Analytics reports for your YouTube content
        'https://www.googleapis.com/auth/yt-analytics.readonly',
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

After that you can use YouTube Reporting API resources:

```typescript 
    
/* 
Creates a job and returns it.  
*/
await gapi.client.jobs.create({  }); 
    
/* 
Deletes a job.  
*/
await gapi.client.jobs.delete({ jobId: "jobId",  }); 
    
/* 
Gets a job.  
*/
await gapi.client.jobs.get({ jobId: "jobId",  }); 
    
/* 
Lists jobs.  
*/
await gapi.client.jobs.list({  }); 
    
/* 
Method for media download. Download is supported
on the URI `/v1/media/{+name}?alt=media`.  
*/
await gapi.client.media.download({ resourceName: "resourceName",  }); 
    
/* 
Lists report types.  
*/
await gapi.client.reportTypes.list({  });
```