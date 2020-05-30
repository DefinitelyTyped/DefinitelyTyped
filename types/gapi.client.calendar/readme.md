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
gapi.load('client', () => {
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
      // See, edit, share, and permanently delete all the calendars you can access using Google Calendar
      'https://www.googleapis.com/auth/calendar',

      // View and edit events on all your calendars
      'https://www.googleapis.com/auth/calendar.events',

      // View events on all your calendars
      'https://www.googleapis.com/auth/calendar.events.readonly',

      // View your calendars
      'https://www.googleapis.com/auth/calendar.readonly',

      // View your Calendar settings
      'https://www.googleapis.com/auth/calendar.settings.readonly',
    ],
    immediate = true;
// ...

gapi.auth.authorize(
  { client_id: client_id, scope: scope, immediate: immediate },
  authResult => {
    if (authResult && !authResult.error) {
        /* handle successful authorization */
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
await gapi.client.calendar.acl.delete({ calendarId: "calendarId", ruleId: "ruleId",  });

/*
Returns an access control rule.
*/
await gapi.client.calendar.acl.get({ calendarId: "calendarId", ruleId: "ruleId",  });

/*
Creates an access control rule.
*/
await gapi.client.calendar.acl.insert({ calendarId: "calendarId",  });

/*
Returns the rules in the access control list for the calendar.
*/
await gapi.client.calendar.acl.list({ calendarId: "calendarId",  });

/*
Updates an access control rule. This method supports patch semantics.
*/
await gapi.client.calendar.acl.patch({ calendarId: "calendarId", ruleId: "ruleId",  });

/*
Updates an access control rule.
*/
await gapi.client.calendar.acl.update({ calendarId: "calendarId", ruleId: "ruleId",  });

/*
Watch for changes to ACL resources.
*/
await gapi.client.calendar.acl.watch({ calendarId: "calendarId",  });

/*
Removes a calendar from the user's calendar list.
*/
await gapi.client.calendar.calendarList.delete({ calendarId: "calendarId",  });

/*
Returns a calendar from the user's calendar list.
*/
await gapi.client.calendar.calendarList.get({ calendarId: "calendarId",  });

/*
Inserts an existing calendar into the user's calendar list.
*/
await gapi.client.calendar.calendarList.insert({  });

/*
Returns the calendars on the user's calendar list.
*/
await gapi.client.calendar.calendarList.list({  });

/*
Updates an existing calendar on the user's calendar list. This method supports patch semantics.
*/
await gapi.client.calendar.calendarList.patch({ calendarId: "calendarId",  });

/*
Updates an existing calendar on the user's calendar list.
*/
await gapi.client.calendar.calendarList.update({ calendarId: "calendarId",  });

/*
Watch for changes to CalendarList resources.
*/
await gapi.client.calendar.calendarList.watch({  });

/*
Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
*/
await gapi.client.calendar.calendars.clear({ calendarId: "calendarId",  });

/*
Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
*/
await gapi.client.calendar.calendars.delete({ calendarId: "calendarId",  });

/*
Returns metadata for a calendar.
*/
await gapi.client.calendar.calendars.get({ calendarId: "calendarId",  });

/*
Creates a secondary calendar.
*/
await gapi.client.calendar.calendars.insert({  });

/*
Updates metadata for a calendar. This method supports patch semantics.
*/
await gapi.client.calendar.calendars.patch({ calendarId: "calendarId",  });

/*
Updates metadata for a calendar.
*/
await gapi.client.calendar.calendars.update({ calendarId: "calendarId",  });

/*
Stop watching resources through this channel
*/
await gapi.client.calendar.channels.stop({  });

/*
Returns the color definitions for calendars and events.
*/
await gapi.client.calendar.colors.get({  });

/*
Deletes an event.
*/
await gapi.client.calendar.events.delete({ calendarId: "calendarId", eventId: "eventId",  });

/*
Returns an event.
*/
await gapi.client.calendar.events.get({ calendarId: "calendarId", eventId: "eventId",  });

/*
Imports an event. This operation is used to add a private copy of an existing event to a calendar.
*/
await gapi.client.calendar.events.import({ calendarId: "calendarId",  });

/*
Creates an event.
*/
await gapi.client.calendar.events.insert({ calendarId: "calendarId",  });

/*
Returns instances of the specified recurring event.
*/
await gapi.client.calendar.events.instances({ calendarId: "calendarId", eventId: "eventId",  });

/*
Returns events on the specified calendar.
*/
await gapi.client.calendar.events.list({ calendarId: "calendarId",  });

/*
Moves an event to another calendar, i.e. changes an event's organizer.
*/
await gapi.client.calendar.events.move({ calendarId: "calendarId", destination: "destination", eventId: "eventId",  });

/*
Updates an event. This method supports patch semantics.
*/
await gapi.client.calendar.events.patch({ calendarId: "calendarId", eventId: "eventId",  });

/*
Creates an event based on a simple text string.
*/
await gapi.client.calendar.events.quickAdd({ calendarId: "calendarId", text: "text",  });

/*
Updates an event.
*/
await gapi.client.calendar.events.update({ calendarId: "calendarId", eventId: "eventId",  });

/*
Watch for changes to Events resources.
*/
await gapi.client.calendar.events.watch({ calendarId: "calendarId",  });

/*
Returns free/busy information for a set of calendars.
*/
await gapi.client.calendar.freebusy.query({  });

/*
Returns a single user setting.
*/
await gapi.client.calendar.settings.get({ setting: "setting",  });

/*
Returns all user settings for the authenticated user.
*/
await gapi.client.calendar.settings.list({  });

/*
Watch for changes to Settings resources.
*/
await gapi.client.calendar.settings.watch({  });
```
