# TypeScript typings for Google Proximity Beacon API v1beta1
Registers, manages, indexes, and searches beacons.
For detailed description please check [documentation](https://developers.google.com/beacons/proximity/).

## Installing

Install typings for Google Proximity Beacon API:
```
npm install @types/gapi.client.proximitybeacon@v1beta1 --save-dev
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
gapi.client.load('proximitybeacon', 'v1beta1', () => {
    // now we can use gapi.client.proximitybeacon
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and modify your beacons
        'https://www.googleapis.com/auth/userlocation.beacon.registry',
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

After that you can use Google Proximity Beacon API resources:

```typescript 
    
/* 
Given one or more beacon observations, returns any beacon information
and attachments accessible to your application. Authorize by using the
[API key](https://developers.google.com/beacons/proximity/get-started#request_a_browser_api_key)
for the application.  
*/
await gapi.client.beaconinfo.getforobserved({  }); 
    
/* 
Activates a beacon. A beacon that is active will return information
and attachment data when queried via `beaconinfo.getforobserved`.
Calling this method on an already active beacon will do nothing (but
will return a successful response code).

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.  
*/
await gapi.client.beacons.activate({ beaconName: "beaconName",  }); 
    
/* 
Deactivates a beacon. Once deactivated, the API will not return
information nor attachment data for the beacon when queried via
`beaconinfo.getforobserved`. Calling this method on an already inactive
beacon will do nothing (but will return a successful response code).

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.  
*/
await gapi.client.beacons.deactivate({ beaconName: "beaconName",  }); 
    
/* 
Decommissions the specified beacon in the service. This beacon will no
longer be returned from `beaconinfo.getforobserved`. This operation is
permanent -- you will not be able to re-register a beacon with this ID
again.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.  
*/
await gapi.client.beacons.decommission({ beaconName: "beaconName",  }); 
    
/* 
Deletes the specified beacon including all diagnostics data for the beacon
as well as any attachments on the beacon (including those belonging to
other projects). This operation cannot be undone.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.  
*/
await gapi.client.beacons.delete({ beaconName: "beaconName",  }); 
    
/* 
Returns detailed information about the specified beacon.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **viewer**, **Is owner** or **Can edit**
permissions in the Google Developers Console project.

Requests may supply an Eddystone-EID beacon name in the form:
`beacons/4!beaconId` where the `beaconId` is the base16 ephemeral ID
broadcast by the beacon. The returned `Beacon` object will contain the
beacon's stable Eddystone-UID. Clients not authorized to resolve the
beacon's ephemeral Eddystone-EID broadcast will receive an error.  
*/
await gapi.client.beacons.get({ beaconName: "beaconName",  }); 
    
/* 
Searches the beacon registry for beacons that match the given search
criteria. Only those beacons that the client has permission to list
will be returned.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **viewer**, **Is owner** or **Can edit**
permissions in the Google Developers Console project.  
*/
await gapi.client.beacons.list({  }); 
    
/* 
Registers a previously unregistered beacon given its `advertisedId`.
These IDs are unique within the system. An ID can be registered only once.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.  
*/
await gapi.client.beacons.register({  }); 
    
/* 
Updates the information about the specified beacon. **Any field that you do
not populate in the submitted beacon will be permanently erased**, so you
should follow the "read, modify, write" pattern to avoid inadvertently
destroying data.

Changes to the beacon status via this method will be  silently ignored.
To update beacon status, use the separate methods on this API for
activation, deactivation, and decommissioning.
Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **Is owner** or **Can edit** permissions in the
Google Developers Console project.  
*/
await gapi.client.beacons.update({ beaconName: "beaconName",  }); 
    
/* 
Lists all attachment namespaces owned by your Google Developers Console
project. Attachment data associated with a beacon must include a
namespaced type, and the namespace must be owned by your project.

Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
from a signed-in user with **viewer**, **Is owner** or **Can edit**
permissions in the Google Developers Console project.  
*/
await gapi.client.namespaces.list({  }); 
    
/* 
Updates the information about the specified namespace. Only the namespace
visibility can be updated.  
*/
await gapi.client.namespaces.update({ namespaceName: "namespaceName",  }); 
    
/* 
Gets the Proximity Beacon API's current public key and associated
parameters used to initiate the Diffie-Hellman key exchange required to
register a beacon that broadcasts the Eddystone-EID format. This key
changes periodically; clients may cache it and re-use the same public key
to provision and register multiple beacons. However, clients should be
prepared to refresh this key when they encounter an error registering an
Eddystone-EID beacon.  
*/
await gapi.client.v1beta1.getEidparams({  });
```