# TypeScript typings for Google Cloud Translation API v2
The Google Cloud Translation API lets websites and programs integrate with
    Google Translate programmatically.
For detailed description please check [documentation](https://code.google.com/apis/language/translate/v2/getting_started.html).

## Installing

Install typings for Google Cloud Translation API:
```
npm install @types/gapi.client.translate@v2 --save-dev
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
gapi.client.load('translate', 'v2', () => {
    // now we can use gapi.client.translate
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
    
        // Translate text from one language to another using Google Translate
        'https://www.googleapis.com/auth/cloud-translation',
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

After that you can use Google Cloud Translation API resources:

```typescript 
    
/* 
Detects the language of text within a request.  
*/
await gapi.client.detections.detect({  }); 
    
/* 
Detects the language of text within a request.  
*/
await gapi.client.detections.list({ q: "q",  }); 
    
/* 
Returns a list of supported languages for translation.  
*/
await gapi.client.languages.list({  }); 
    
/* 
Translates input text, returning translated text.  
*/
await gapi.client.translations.list({ q: "q", target: "target",  }); 
    
/* 
Translates input text, returning translated text.  
*/
await gapi.client.translations.translate({  });
```