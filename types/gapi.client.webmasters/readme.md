# TypeScript typings for Search Console API v3
View Google Search Console data for your verified sites.
For detailed description please check [documentation](https://developers.google.com/webmaster-tools/).

## Installing

Install typings for Search Console API:
```
npm install @types/gapi.client.webmasters@v3 --save-dev
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
gapi.client.load('webmasters', 'v3', () => {
    // now we can use gapi.client.webmasters
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage Search Console data for your verified sites
        'https://www.googleapis.com/auth/webmasters',
    
        // View Search Console data for your verified sites
        'https://www.googleapis.com/auth/webmasters.readonly',
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

After that you can use Search Console API resources:

```typescript 
    
/* 
Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.

When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.  
*/
await gapi.client.searchanalytics.query({ siteUrl: "siteUrl",  }); 
    
/* 
Deletes a sitemap from this site.  
*/
await gapi.client.sitemaps.delete({ feedpath: "feedpath", siteUrl: "siteUrl",  }); 
    
/* 
Retrieves information about a specific sitemap.  
*/
await gapi.client.sitemaps.get({ feedpath: "feedpath", siteUrl: "siteUrl",  }); 
    
/* 
Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).  
*/
await gapi.client.sitemaps.list({ siteUrl: "siteUrl",  }); 
    
/* 
Submits a sitemap for a site.  
*/
await gapi.client.sitemaps.submit({ feedpath: "feedpath", siteUrl: "siteUrl",  }); 
    
/* 
Adds a site to the set of the user's sites in Search Console.  
*/
await gapi.client.sites.add({ siteUrl: "siteUrl",  }); 
    
/* 
Removes a site from the set of the user's Search Console sites.  
*/
await gapi.client.sites.delete({ siteUrl: "siteUrl",  }); 
    
/* 
Retrieves information about specific site.  
*/
await gapi.client.sites.get({ siteUrl: "siteUrl",  }); 
    
/* 
Lists the user's Search Console sites.  
*/
await gapi.client.sites.list({  }); 
    
/* 
Retrieves a time series of the number of URL crawl errors per error category and platform.  
*/
await gapi.client.urlcrawlerrorscounts.query({ siteUrl: "siteUrl",  }); 
    
/* 
Retrieves details about crawl errors for a site's sample URL.  
*/
await gapi.client.urlcrawlerrorssamples.get({ category: "category", platform: "platform", siteUrl: "siteUrl", url: "url",  }); 
    
/* 
Lists a site's sample URLs for the specified crawl error category and platform.  
*/
await gapi.client.urlcrawlerrorssamples.list({ category: "category", platform: "platform", siteUrl: "siteUrl",  }); 
    
/* 
Marks the provided site's sample URL as fixed, and removes it from the samples list.  
*/
await gapi.client.urlcrawlerrorssamples.markAsFixed({ category: "category", platform: "platform", siteUrl: "siteUrl", url: "url",  });
```