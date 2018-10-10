# TypeScript typings for Google Civic Information API v2
Provides polling places, early vote locations, contest data, election officials, and government representatives for U.S. residential addresses.
For detailed description please check [documentation](https://developers.google.com/civic-information).

## Installing

Install typings for Google Civic Information API:
```
npm install @types/gapi.client.civicinfo@v2 --save-dev
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
gapi.client.load('civicinfo', 'v2', () => {
    // now we can use gapi.client.civicinfo
    // ... 
});
```



After that you can use Google Civic Information API resources:

```typescript 
    
/* 
Searches for political divisions by their natural name or OCD ID.  
*/
await gapi.client.divisions.search({  }); 
    
/* 
List of available elections to query.  
*/
await gapi.client.elections.electionQuery({  }); 
    
/* 
Looks up information relevant to a voter based on the voter's registered address.  
*/
await gapi.client.elections.voterInfoQuery({ address: "address",  }); 
    
/* 
Looks up political geography and representative information for a single address.  
*/
await gapi.client.representatives.representativeInfoByAddress({  }); 
    
/* 
Looks up representative information for a single geographic division.  
*/
await gapi.client.representatives.representativeInfoByDivision({ ocdId: "ocdId",  });
```