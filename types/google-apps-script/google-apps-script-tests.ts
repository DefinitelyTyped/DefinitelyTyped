// from https://developers.google.com/apps-script/overview
function createAndSendDocument() {
  // Create a new Google Doc named 'Hello, world!'
  var doc = DocumentApp.create('Hello, world!');

  // Access the body of the document, then add a paragraph.
  doc.getBody().appendParagraph(
    'This document was created by Google Apps Script.'
  );

  // Get the URL of the document.
  var url = doc.getUrl();

  // Get the email address of the active user - that's you.
  var email = Session.getActiveUser().getEmail();

  // Get the name of the document to use as an email subject line.
  var subject = doc.getName();

  // Append a new string to the "url" variable to use as an email body.
  var body = 'Link to your doc: ' + url;

  // Send yourself an email with a link to the document.
  GmailApp.sendEmail(email, subject, body);
}

// Regression
ScriptApp.getService().getUrl();
CalendarApp.GuestStatus.NO;

// test for URLFetchRequestOptions.payload
import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;
const postTest = (payload: object): string => {
  const url = 'http://httpbin.org/post';
  const params: URLFetchRequestOptions = {
    method: 'post',
    payload: payload
  };
  return UrlFetchApp.fetch(url, params).getContentText();
};

// Advanced Services
Slides.Presentations.Pages.getThumbnail('presentationId', 'pageId');

// Calendar (Advanced service)
const createEvent = (): void => {
  const calendarId = 'primary';
  const start = new Date();
  const end = new Date();
  start.setHours(10);
  end.setHours(11);
  let event: GoogleAppsScript.Calendar.Schema.Event = {
    summary: 'Lunch Meeting',
    location: 'The Deli',
    description: 'To discuss our plans for the presentation next week.',
    start: {
      dateTime: start.toISOString()
    },
    end: {
      dateTime: end.toISOString()
    },
    attendees: [
      { email: 'alice@example.com' },
      { email: 'bob@example.com' }
    ],
    // Red background. Use Calendar.Colors.get() for the full list.
    colorId: '11'
  };
  event = Calendar.Events.insert(event, calendarId);
  Logger.log('Event ID: ' + event.id);
};

// Admin Directory (Advanced service)
const listAllUsers = () => {
  let pageToken: string;
  let page: GoogleAppsScript.AdminDirectory.Schema.Users;
  do {
    page = AdminDirectory.Users.list({
      domain: 'example.com',
      orderBy: 'givenName',
      maxResults: 100,
      pageToken: pageToken
    });
    const users: GoogleAppsScript.AdminDirectory.Schema.User[] = page.users;
    if (users) {
      for (const user of users) {
        Logger.log('%s (%s)', user.name.fullName, user.primaryEmail);
      }
    } else {
      Logger.log('No users found.');
    }
    pageToken = page.nextPageToken;
  } while (pageToken);
};

// doPost function
function doPost(e: GoogleAppsScript.Events.DoPost) {
  const data: string = e.postData.contents;
  Logger.log(JSON.parse(data));
}

// doGet function
function doGet(e: GoogleAppsScript.Events.DoGet) {
  const params: object = e.parameters;
}

// Base Service
function createFileFromBlob(blob: GoogleAppsScript.Base.Blob){
  const file: GoogleAppsScript.Drive.File = DriveApp.createFile(blob);
}
