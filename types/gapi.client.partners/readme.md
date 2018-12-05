# TypeScript typings for Google Partners API v2
Searches certified companies and creates contact leads with them, and also audits the usage of clients.
For detailed description please check [documentation](https://developers.google.com/partners/).

## Installing

Install typings for Google Partners API:
```
npm install @types/gapi.client.partners@v2 --save-dev
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
gapi.client.load('partners', 'v2', () => {
    // now we can use gapi.client.partners
    // ... 
});
```



After that you can use Google Partners API resources:

```typescript 
    
/* 
Lists analytics data for a user's associated company.
Should only be called within the context of an authorized logged in user.  
*/
await gapi.client.analytics.list({  }); 
    
/* 
Logs a generic message from the client, such as
`Failed to render component`, `Profile page is running slow`,
`More than 500 users have accessed this result.`, etc.  
*/
await gapi.client.clientMessages.log({  }); 
    
/* 
Gets a company.  
*/
await gapi.client.companies.get({ companyId: "companyId",  }); 
    
/* 
Lists companies.  
*/
await gapi.client.companies.list({  }); 
    
/* 
Gets an Exam Token for a Partner's user to take an exam in the Exams System  
*/
await gapi.client.exams.getToken({ examType: "examType",  }); 
    
/* 
Lists advertiser leads for a user's associated company.
Should only be called within the context of an authorized logged in user.  
*/
await gapi.client.leads.list({  }); 
    
/* 
Lists the Offers available for the current user  
*/
await gapi.client.offers.list({  }); 
    
/* 
Logs a user event.  
*/
await gapi.client.userEvents.log({  }); 
    
/* 
Lists states for current user.  
*/
await gapi.client.userStates.list({  }); 
    
/* 
Creates a user's company relation. Affiliates the user to a company.  
*/
await gapi.client.users.createCompanyRelation({ userId: "userId",  }); 
    
/* 
Deletes a user's company relation. Unaffiliaites the user from a company.  
*/
await gapi.client.users.deleteCompanyRelation({ userId: "userId",  }); 
    
/* 
Gets a user.  
*/
await gapi.client.users.get({ userId: "userId",  }); 
    
/* 
Updates a user's profile. A user can only update their own profile and
should only be called within the context of a logged in user.  
*/
await gapi.client.users.updateProfile({  }); 
    
/* 
Gets Partners Status of the logged in user's agency.
Should only be called if the logged in user is the admin of the agency.  
*/
await gapi.client.v2.getPartnersstatus({  }); 
    
/* 
Update company.
Should only be called within the context of an authorized logged in user.  
*/
await gapi.client.v2.updateCompanies({  }); 
    
/* 
Updates the specified lead.  
*/
await gapi.client.v2.updateLeads({  });
```