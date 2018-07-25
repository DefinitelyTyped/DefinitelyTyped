# TypeScript typings for Google Cloud Speech API v1
Converts audio to text by applying powerful neural network models.
For detailed description please check [documentation](https://cloud.google.com/speech/).

## Installing

Install typings for Google Cloud Speech API:
```
npm install @types/gapi.client.speech@v1 --save-dev
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
gapi.client.load('speech', 'v1', () => {
    // now we can use gapi.client.speech
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

After that you can use Google Cloud Speech API resources:

```typescript 
    
/* 
Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.  
*/
await gapi.client.operations.cancel({ name: "name",  }); 
    
/* 
Deletes a long-running operation. This method indicates that the client is
no longer interested in the operation result. It does not cancel the
operation. If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  
*/
await gapi.client.operations.delete({ name: "name",  }); 
    
/* 
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.  
*/
await gapi.client.operations.get({ name: "name",  }); 
    
/* 
Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`. To
override the binding, API services can add a binding such as
`"/v1/{name=users/*}/operations"` to their service configuration.
For backwards compatibility, the default name includes the operations
collection id, however overriding users must ensure the name binding
is the parent resource, without the operations collection id.  
*/
await gapi.client.operations.list({  }); 
    
/* 
Performs asynchronous speech recognition: receive results via the
google.longrunning.Operations interface. Returns either an
`Operation.error` or an `Operation.response` which contains
a `LongRunningRecognizeResponse` message.  
*/
await gapi.client.speech.longrunningrecognize({  }); 
    
/* 
Performs synchronous speech recognition: receive results after all audio
has been sent and processed.  
*/
await gapi.client.speech.recognize({  });
```