# TypeScript typings for Android Device Provisioning Partner API v1
Automates reseller integration into zero-touch enrollment by assigning devices to customers and creating device reports.
For detailed description please check [documentation](https://developers.google.com/zero-touch/).

## Installing

Install typings for Android Device Provisioning Partner API:
```
npm install @types/gapi.client.androiddeviceprovisioning@v1 --save-dev
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
gapi.client.load('androiddeviceprovisioning', 'v1', () => {
    // now we can use gapi.client.androiddeviceprovisioning
    // ... 
});
```



After that you can use Android Device Provisioning Partner API resources:

```typescript 
    
/* 
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.  
*/
await gapi.client.operations.get({ name: "name",  });
```