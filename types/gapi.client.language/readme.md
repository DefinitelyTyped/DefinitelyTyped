# TypeScript typings for Google Cloud Natural Language API v1
Provides natural language understanding technologies to developers. Examples include sentiment analysis, entity recognition, entity sentiment analysis, and text annotations.
For detailed description please check [documentation](https://cloud.google.com/natural-language/).

## Installing

Install typings for Google Cloud Natural Language API:
```
npm install @types/gapi.client.language@v1 --save-dev
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
gapi.client.load('language', 'v1', () => {
    // now we can use gapi.client.language
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Apply machine learning models to reveal the structure and meaning of text
        'https://www.googleapis.com/auth/cloud-language',
    
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

After that you can use Google Cloud Natural Language API resources:

```typescript 
    
/* 
Finds named entities (currently proper names and common nouns) in the text
along with entity types, salience, mentions for each entity, and
other properties.  
*/
await gapi.client.documents.analyzeEntities({  }); 
    
/* 
Finds entities, similar to AnalyzeEntities in the text and analyzes
sentiment associated with each entity and its mentions.  
*/
await gapi.client.documents.analyzeEntitySentiment({  }); 
    
/* 
Analyzes the sentiment of the provided text.  
*/
await gapi.client.documents.analyzeSentiment({  }); 
    
/* 
Analyzes the syntax of the text and provides sentence boundaries and
tokenization along with part of speech tags, dependency trees, and other
properties.  
*/
await gapi.client.documents.analyzeSyntax({  }); 
    
/* 
A convenience method that provides all the features that analyzeSentiment,
analyzeEntities, and analyzeSyntax provide in one call.  
*/
await gapi.client.documents.annotateText({  });
```