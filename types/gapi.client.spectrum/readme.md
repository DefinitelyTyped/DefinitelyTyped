# TypeScript typings for Google Spectrum Database API v1explorer
API for spectrum-management functions.
For detailed description please check [documentation](http://developers.google.com/spectrum).

## Installing

Install typings for Google Spectrum Database API:
```
npm install @types/gapi.client.spectrum@v1explorer --save-dev
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
gapi.client.load('spectrum', 'v1explorer', () => {
    // now we can use gapi.client.spectrum
    // ... 
});
```



After that you can use Google Spectrum Database API resources:

```typescript 
    
/* 
Requests information about the available spectrum for a device at a location. Requests from a fixed-mode device must include owner information so the device can be registered with the database.  
*/
await gapi.client.paws.getSpectrum({  }); 
    
/* 
The Google Spectrum Database does not support batch requests, so this method always yields an UNIMPLEMENTED error.  
*/
await gapi.client.paws.getSpectrumBatch({  }); 
    
/* 
Initializes the connection between a white space device and the database.  
*/
await gapi.client.paws.init({  }); 
    
/* 
Notifies the database that the device has selected certain frequency ranges for transmission. Only to be invoked when required by the regulator. The Google Spectrum Database does not operate in domains that require notification, so this always yields an UNIMPLEMENTED error.  
*/
await gapi.client.paws.notifySpectrumUse({  }); 
    
/* 
The Google Spectrum Database implements registration in the getSpectrum method. As such this always returns an UNIMPLEMENTED error.  
*/
await gapi.client.paws.register({  }); 
    
/* 
Validates a device for white space use in accordance with regulatory rules. The Google Spectrum Database does not support master/slave configurations, so this always yields an UNIMPLEMENTED error.  
*/
await gapi.client.paws.verifyDevice({  });
```