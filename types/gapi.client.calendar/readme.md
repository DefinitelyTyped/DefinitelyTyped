# TypeScript typings for Calendar API v3
Manipulates events and other calendar data.
For detailed description please check [documentation](https://developers.google.com/google-apps/calendar/firstapp).

## Installing

Install typings for Calendar API:
```
npm install @types/gapi.client.calendar@v3 --save-dev
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
gapi.client.load('calendar', 'v3', () => {
    // now we can use gapi.client.calendar
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your calendars
        'https://www.googleapis.com/auth/calendar',
    
        // View your calendars
        'https://www.googleapis.com/auth/calendar.readonly',
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

After that you can use Calendar API resources:

```typescript 
    
/* 
Deletes an access control rule.  
*/
await gapi.client.acl.delete({ calendarId: "calendarId", ruleId: "ruleId",  }); 
    
/* 
Returns an access control rule.  
*/
await gapi.client.acl.get({ calendarId: "calendarId", ruleId: "ruleId",  }); 
    
/* 
Creates an access control rule.  
*/
await gapi.client.acl.insert({ calendarId: "calendarId",  }); 
    
/* 
Returns the rules in the access control list for the calendar.  
*/
await gapi.client.acl.list({ calendarId: "calendarId",  }); 
    
/* 
Updates an access control rule. This method supports patch semantics.  
*/
await gapi.client.acl.patch({ calendarId: "calendarId", ruleId: "ruleId",  }); 
    
/* 
Updates an access control rule.  
*/
await gapi.client.acl.update({ calendarId: "calendarId", ruleId: "ruleId",  }); 
    
/* 
Watch for changes to ACL resources.  
*/
await gapi.client.acl.watch({ calendarId: "calendarId",  }); 
    
/* 
Deletes an entry on the user's calendar list.  
*/
await gapi.client.calendarList.delete({ calendarId: "calendarId",  }); 
    
/* 
Returns an entry on the user's calendar list.  
*/
await gapi.client.calendarList.get({ calendarId: "calendarId",  }); 
    
/* 
Adds an entry to the user's calendar list.  
*/
await gapi.client.calendarList.insert({  }); 
    
/* 
Returns entries on the user's calendar list.  
*/
await gapi.client.calendarList.list({  }); 
    
/* 
Updates an entry on the user's calendar list. This method supports patch semantics.  
*/
await gapi.client.calendarList.patch({ calendarId: "calendarId",  }); 
    
/* 
Updates an entry on the user's calendar list.  
*/
await gapi.client.calendarList.update({ calendarId: "calendarId",  }); 
    
/* 
Watch for changes to CalendarList resources.  
*/
await gapi.client.calendarList.watch({  }); 
    
/* 
Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.  
*/
await gapi.client.calendars.clear({ calendarId: "calendarId",  }); 
    
/* 
Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.  
*/
await gapi.client.calendars.delete({ calendarId: "calendarId",  }); 
    
/* 
Returns metadata for a calendar.  
*/
await gapi.client.calendars.get({ calendarId: "calendarId",  }); 
    
/* 
Creates a secondary calendar.  
*/
await gapi.client.calendars.insert({  }); 
    
/* 
Updates metadata for a calendar. This method supports patch semantics.  
*/
await gapi.client.calendars.patch({ calendarId: "calendarId",  }); 
    
/* 
Updates metadata for a calendar.  
*/
await gapi.client.calendars.update({ calendarId: "calendarId",  }); 
    
/* 
Stop watching resources through this channel  
*/
await gapi.client.channels.stop({  }); 
    
/* 
Returns the color definitions for calendars and events.  
*/
await gapi.client.colors.get({  }); 
    
/* 
Deletes an event.  
*/
await gapi.client.events.delete({ calendarId: "calendarId", eventId: "eventId",  }); 
    
/* 
Returns an event.  
*/
await gapi.client.events.get({ calendarId: "calendarId", eventId: "eventId",  }); 
    
/* 
Imports an event. This operation is used to add a private copy of an existing event to a calendar.  
*/
await gapi.client.events.import({ calendarId: "calendarId",  }); 
    
/* 
Creates an event.  
*/
await gapi.client.events.insert({ calendarId: "calendarId",  }); 
    
/* 
Returns instances of the specified recurring event.  
*/
await gapi.client.events.instances({ calendarId: "calendarId", eventId: "eventId",  }); 
    
/* 
Returns events on the specified calendar.  
*/
await gapi.client.events.list({ calendarId: "calendarId",  }); 
    
/* 
Moves an event to another calendar, i.e. changes an event's organizer.  
*/
await gapi.client.events.move({ calendarId: "calendarId", destination: "destination", eventId: "eventId",  }); 
    
/* 
Updates an event. This method supports patch semantics.  
*/
await gapi.client.events.patch({ calendarId: "calendarId", eventId: "eventId",  }); 
    
/* 
Creates an event based on a simple text string.  
*/
await gapi.client.events.quickAdd({ calendarId: "calendarId", text: "text",  }); 
    
/* 
Updates an event.  
*/
await gapi.client.events.update({ calendarId: "calendarId", eventId: "eventId",  }); 
    
/* 
Watch for changes to Events resources.  
*/
await gapi.client.events.watch({ calendarId: "calendarId",  }); 
    
/* 
Returns free/busy information for a set of calendars.  
*/
await gapi.client.freebusy.query({  }); 
    
/* 
Returns a single user setting.  
*/
await gapi.client.settings.get({ setting: "setting",  }); 
    
/* 
Returns all user settings for the authenticated user.  
*/
await gapi.client.settings.list({  }); 
    
/* 
Watch for changes to Settings resources.  
*/
await gapi.client.settings.watch({  });
```