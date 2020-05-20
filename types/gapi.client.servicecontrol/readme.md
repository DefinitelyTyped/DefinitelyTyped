# TypeScript typings for Google Service Control API v1
Google Service Control provides control plane functionality to managed services, such as logging, monitoring, and status checks.
For detailed description please check [documentation](https://cloud.google.com/service-control/).

## Installing

Install typings for Google Service Control API:
```
npm install @types/gapi.client.servicecontrol@v1 --save-dev
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
gapi.client.load('servicecontrol', 'v1', () => {
    // now we can use gapi.client.servicecontrol
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
    
        // Manage your Google Service Control data
        'https://www.googleapis.com/auth/servicecontrol',
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

After that you can use Google Service Control API resources:

```typescript 
    
/* 
Attempts to allocate quota for the specified consumer. It should be called
before the operation is executed.

This method requires the `servicemanagement.services.quota`
permission on the specified service. For more information, see
[Cloud IAM](https://cloud.google.com/iam).

**NOTE:** The client **must** fail-open on server errors `INTERNAL`,
`UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system
reliability, the server may inject these errors to prohibit any hard
dependency on the quota functionality.  
*/
await gapi.client.services.allocateQuota({ serviceName: "serviceName",  }); 
    
/* 
Checks an operation with Google Service Control to decide whether
the given operation should proceed. It should be called before the
operation is executed.

If feasible, the client should cache the check results and reuse them for
60 seconds. In case of server errors, the client can rely on the cached
results for longer time.

NOTE: the CheckRequest has the size limit of 64KB.

This method requires the `servicemanagement.services.check` permission
on the specified service. For more information, see
[Google Cloud IAM](https://cloud.google.com/iam).  
*/
await gapi.client.services.check({ serviceName: "serviceName",  }); 
    
/* 
Signals the quota controller that service ends the ongoing usage
reconciliation.

This method requires the `servicemanagement.services.quota`
permission on the specified service. For more information, see
[Google Cloud IAM](https://cloud.google.com/iam).  
*/
await gapi.client.services.endReconciliation({ serviceName: "serviceName",  }); 
    
/* 
Releases previously allocated quota done through AllocateQuota method.

This method requires the `servicemanagement.services.quota`
permission on the specified service. For more information, see
[Cloud IAM](https://cloud.google.com/iam).


**NOTE:** The client **must** fail-open on server errors `INTERNAL`,
`UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system
reliability, the server may inject these errors to prohibit any hard
dependency on the quota functionality.  
*/
await gapi.client.services.releaseQuota({ serviceName: "serviceName",  }); 
    
/* 
Reports operation results to Google Service Control, such as logs and
metrics. It should be called after an operation is completed.

If feasible, the client should aggregate reporting data for up to 5
seconds to reduce API traffic. Limiting aggregation to 5 seconds is to
reduce data loss during client crashes. Clients should carefully choose
the aggregation time window to avoid data loss risk more than 0.01%
for business and compliance reasons.

NOTE: the ReportRequest has the size limit of 1MB.

This method requires the `servicemanagement.services.report` permission
on the specified service. For more information, see
[Google Cloud IAM](https://cloud.google.com/iam).  
*/
await gapi.client.services.report({ serviceName: "serviceName",  }); 
    
/* 
Unlike rate quota, allocation quota does not get refilled periodically.
So, it is possible that the quota usage as seen by the service differs from
what the One Platform considers the usage is. This is expected to happen
only rarely, but over time this can accumulate. Services can invoke
StartReconciliation and EndReconciliation to correct this usage drift, as
described below:
1. Service sends StartReconciliation with a timestamp in future for each
   metric that needs to be reconciled. The timestamp being in future allows
   to account for in-flight AllocateQuota and ReleaseQuota requests for the
   same metric.
2. One Platform records this timestamp and starts tracking subsequent
   AllocateQuota and ReleaseQuota requests until EndReconciliation is
   called.
3. At or after the time specified in the StartReconciliation, service
   sends EndReconciliation with the usage that needs to be reconciled to.
4. One Platform adjusts its own record of usage for that metric to the
   value specified in EndReconciliation by taking in to account any
   allocation or release between StartReconciliation and EndReconciliation.

Signals the quota controller that the service wants to perform a usage
reconciliation as specified in the request.

This method requires the `servicemanagement.services.quota`
permission on the specified service. For more information, see
[Google Cloud IAM](https://cloud.google.com/iam).  
*/
await gapi.client.services.startReconciliation({ serviceName: "serviceName",  });
```