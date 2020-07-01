# TypeScript typings for Cloud Monitoring API v2beta2
Accesses Google Cloud Monitoring data.
For detailed description please check [documentation](https://cloud.google.com/monitoring/v2beta2/).

## Installing

Install typings for Cloud Monitoring API:
```
npm install @types/gapi.client.cloudmonitoring@v2beta2 --save-dev
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
gapi.client.load('cloudmonitoring', 'v2beta2', () => {
    // now we can use gapi.client.cloudmonitoring
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

After that you can use Cloud Monitoring API resources:

```typescript 
    
/* 
Create a new metric.  
*/
await gapi.client.metricDescriptors.create({ project: "project",  }); 
    
/* 
Delete an existing metric.  
*/
await gapi.client.metricDescriptors.delete({ metric: "metric", project: "project",  }); 
    
/* 
List metric descriptors that match the query. If the query is not set, then all of the metric descriptors will be returned. Large responses will be paginated, use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.  
*/
await gapi.client.metricDescriptors.list({ project: "project",  }); 
    
/* 
List the data points of the time series that match the metric and labels values and that have data points in the interval. Large responses are paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.  
*/
await gapi.client.timeseries.list({ metric: "metric", project: "project", youngest: "youngest",  }); 
    
/* 
Put data points to one or more time series for one or more metrics. If a time series does not exist, a new time series will be created. It is not allowed to write a time series point that is older than the existing youngest point of that time series. Points that are older than the existing youngest point of that time series will be discarded silently. Therefore, users should make sure that points of a time series are written sequentially in the order of their end time.  
*/
await gapi.client.timeseries.write({ project: "project",  }); 
    
/* 
List the descriptors of the time series that match the metric and labels values and that have data points in the interval. Large responses are paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value of the nextPageToken.  
*/
await gapi.client.timeseriesDescriptors.list({ metric: "metric", project: "project", youngest: "youngest",  });
```