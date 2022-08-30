// tslint:disable: no-var-keyword prefer-const object-literal-shorthand

// from https://developers.google.com/apps-script/overview
function createAndSendDocument() {
    // Create a new Google Doc named 'Hello, world!'
    var doc = DocumentApp.create('Hello, world!');

    // Access the body of the document, then add a paragraph.
    doc.getBody().appendParagraph('This document was created by Google Apps Script.');

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
        payload: payload,
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
            dateTime: start.toISOString(),
        },
        end: {
            dateTime: end.toISOString(),
        },
        attendees: [{ email: 'alice@example.com' }, { email: 'bob@example.com' }],
        // Red background. Use Calendar.Colors.get() for the full list.
        colorId: '11',
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
            pageToken: pageToken,
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
    const param: string = e.parameter.param;
    const paramArray: string[] = e.parameters.param;
    Logger.log(JSON.parse(data));
    Logger.log(param);
    Logger.log(paramArray);
}

// doGet function
function doGet(e: GoogleAppsScript.Events.DoGet) {
    const param: string = e.parameter.param;
    const paramArray: string[] = e.parameters.param;
    Logger.log(param);
    Logger.log(paramArray);
}

// Base Service
function createFileFromBlob(blob: GoogleAppsScript.Base.Blob) {
    const file: GoogleAppsScript.Drive.File = DriveApp.createFile(blob);
}

// Console
console.log('log');
console.info('info');
console.warn('warn');
console.error('error');
console.log('Console can use %s and %d format string.', 'hello', 2);

// Data Studio Request
const request: GoogleAppsScript.Data_Studio.Request<any> = {
    configParams: {
        my_param: 'my_param_value',
    },
    dateRange: {
        endDate: '2019-09-14',
        startDate: '2019-07-14',
    },
    scriptParams: {
        lastRefresh: '1569292983027',
    },
    fields: [
        {
            name: 'my_field_name',
        },
    ],
    dimensionsFilters: [
        [
            {
                fieldName: 'my_field_name',
                values: ['my_value'],
                type: 'INCLUDE',
                operator: 'IN_LIST',
            },
        ],
    ],
};

// Spreadsheet Rich Text Value & Builder
// starting with sample code from
// https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value-builder
const richTextStyle = SpreadsheetApp.newTextStyle().setUnderline(false).build();
const richTextValue = SpreadsheetApp.newRichTextValue()
    .setText('foo no baz')
    .setLinkUrl(0, 3, 'https://bar.foo')
    .setLinkUrl(7, 10, 'https://abc.xyz')
    .setTextStyle(7, 10, richTextStyle)
    .build();
for (let richTextRun of richTextValue.getRuns()) {
    let start = richTextRun.getStartIndex();
    let end = richTextRun.getEndIndex();
    let newValueBuilder = SpreadsheetApp.newRichTextValue();
    if (richTextRun.getTextStyle() === richTextValue.getTextStyle(start, end)) {
        newValueBuilder = richTextRun.copy();
    }
    if (richTextRun.getLinkUrl() === richTextValue.getLinkUrl(start, end)) {
        newValueBuilder.setLinkUrl(richTextRun.getLinkUrl());
    }
    if (richTextRun.getTextStyle() === richTextValue.getTextStyle(start, end)) {
        newValueBuilder.setTextStyle(richTextRun.getTextStyle());
    }
    // $ExpectType string
    newValueBuilder.build().getText();
}

// TextStyle - get/setForegroundColorObject
// Build an RGB color object
// $ExpectType Color
const colorObjRgb = SpreadsheetApp.newColor().setRgbColor('red').build();

// Build a Theme color object
// $ExpectType Color
const colorObjTheme = SpreadsheetApp.newColor().setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1).build();

// Build TextStyle objects for Rgb, Theme, and null
// $ExpectType TextStyle
const rgbTextStyle = SpreadsheetApp.newTextStyle().setForegroundColorObject(colorObjRgb).build();

// $ExpectType TextStyle
const themeTextStyle = SpreadsheetApp.newTextStyle().setForegroundColorObject(colorObjTheme).build();

// $ExpectType TextStyle
const nullTextStyle = SpreadsheetApp.newTextStyle().build();

// Null Color Test
// $ExpectType Color
const nullColorObj = nullTextStyle.getForegroundColorObject();
Logger.log(nullColorObj); // null

// RgbColor Test
// $ExpectType Color
const rgbColorObj = rgbTextStyle.getForegroundColorObject();
Logger.log(rgbColorObj); // Color
Logger.log(rgbColorObj.getColorType()); // RGB
Logger.log(rgbColorObj.asRgbColor().asHexString()); // #ff0000
Logger.log(rgbColorObj.asRgbColor().getBlue()); // 0
Logger.log(rgbColorObj.asRgbColor().getGreen()); // 0
Logger.log(rgbColorObj.asRgbColor().getRed()); // 255

// ThemeColor Test
// $ExpectType Color
const themeColorObj = themeTextStyle.getForegroundColorObject();
Logger.log(themeColorObj); // Color
Logger.log(themeColorObj.getColorType()); // THEME
Logger.log(themeColorObj.asThemeColor().getThemeColorType()); // ACCENT1

const tableCell = DocumentApp.create('').getCursor().getElement().asTableCell();
tableCell.getParentRow().getChildIndex(tableCell);

XmlService.createElement('')
    .addContent(XmlService.createCdata(''))
    .addContent(XmlService.createComment(''))
    .addContent(XmlService.createDocType(''))
    .addContent(XmlService.createText(''));

const createFolderAndGetDescription = () => {
    // Create folder.
    const folder = DriveApp.createFolder('MyFolder');
    // Get description. Expect null.
    Logger.log(folder.getDescription());
    // Set description.
    folder.setDescription('desc');
    // Get description. Expect 'DESC'.
    Logger.log(folder.getDescription().toUpperCase());
};

function onChange(e: GoogleAppsScript.Events.SheetsOnChange) {
    if (e.changeType === 'FORMAT') {
        console.log('Formatting change detected');
    }
}

const createFileAndGetDescription = () => {
    // Create file.
    const file = DriveApp.createFile('New Text File', 'Hello, world!');
    // Get description. Expect null.
    Logger.log(file.getDescription());
    // Set description.
    file.setDescription('desc');
    // Get description. Expect 'DESC'.
    Logger.log(file.getDescription().toUpperCase());
};

function timeDriven(e: GoogleAppsScript.Events.TimeDriven) {
    if (typeof e.hour === 'number') {
        console.log('Time driven event detected');
    }
}

CardService.newDecoratedText(); // $ExpectType DecoratedText
CardService.newDecoratedText().setAuthorizationAction(CardService.newAuthorizationAction()); // $ExpectType DecoratedText
CardService.newDecoratedText().setBottomLabel(''); // $ExpectType DecoratedText
CardService.newDecoratedText().setButton(CardService.newTextButton()); // $ExpectType DecoratedText
CardService.newDecoratedText().setComposeAction(CardService.newAction(), CardService.ComposedEmailType.REPLY_AS_DRAFT); // $ExpectType DecoratedText
CardService.newDecoratedText().setIcon(CardService.Icon.AIRPLANE); // $ExpectType DecoratedText
CardService.newDecoratedText().setIconAltText(''); // $ExpectType DecoratedText
CardService.newDecoratedText().setIconUrl(''); // $ExpectType DecoratedText
CardService.newDecoratedText().setOnClickAction(CardService.newAction()); // $ExpectType DecoratedText
CardService.newDecoratedText().setOnClickOpenLinkAction(CardService.newAction()); // $ExpectType DecoratedText
CardService.newDecoratedText().setOpenLink(CardService.newOpenLink()); // $ExpectType DecoratedText
CardService.newDecoratedText().setSwitchControl(CardService.newSwitch()); // $ExpectType DecoratedText
CardService.newDecoratedText().setText(''); // $ExpectType DecoratedText
CardService.newDecoratedText().setTopLabel(''); // $ExpectType DecoratedText
CardService.newDecoratedText().setWrapText(true); // $ExpectType DecoratedText

CardService.newDivider(); // $ExpectType Divider

CardService.newTimePicker(); // $ExpectType TimePicker
CardService.newTimePicker().setFieldName(''); // $ExpectType TimePicker
CardService.newTimePicker().setHours(0); // $ExpectType TimePicker
CardService.newTimePicker().setMinutes(0); // $ExpectType TimePicker
CardService.newTimePicker().setOnChangeAction(CardService.newAction()); // $ExpectType TimePicker
CardService.newTimePicker().setTitle(''); // $ExpectType TimePicker

// CardService.newCardBuilder().setDisplayStyle(CardService.DisplayStyle.PEEK)
CardService.DisplayStyle.PEEK;
CardService.DisplayStyle.REPLACE;

DriveApp.createShortcut('').getTargetId();
DriveApp.createFile('', '').moveTo(DriveApp.getFolderById(''));

// Addon event objects tests:

const handleCalendarAction = (e: GoogleAppsScript.Addons.EventObject) => {
    const {
        calendar: { attendees, calendarId, recurringEventId },
    } = e;

    // $ExpectType Calendar
    const cal = CalendarApp.getCalendarById(calendarId);

    // $ExpectType CalendarEvent
    const ev = cal.getEventById(recurringEventId);

    // $ExpectType string[]
    const attends: typeof attendees[number]['displayName'][] = ev.getGuestList().map(guest => guest.getName());

    console.log({ attends });

    const eventInfo: Partial<GoogleAppsScript.Addons.CalendarEventObject> = {
        calendarId: cal.getId(),
        recurringEventId: ev.getId(),
        capabilities: {
            canAddAttendees: ev.guestsCanInviteOthers(),
            canSeeAttendees: ev.guestsCanSeeGuests(),
            canSeeConferenceData: false,
            canSetConferenceData: false,
            conferenceData: {
                conferenceId: '12345',
                entryPoints: [
                    {
                        accessCode: 'access',
                        entryPointFeatures: ['toll', 'toll_free'],
                        entryPointType: 'phone',
                        label: 'MyEntry',
                        meetingCode: 'meeting',
                        passcode: 'pass',
                        password: '12M$q_5',
                        pin: '50193',
                        uri: 'tel:123456',
                        regionCode: 'en-US',
                    },
                ],
                notes: 'My notes about the conference',
                conferenceSolution: {
                    iconUri: 'https://hostname/path/image.jpeg',
                    key: {
                        type: 'hangoutsMeet',
                    },
                    name: 'MyConference',
                },
                parameters: {
                    addOnParameters: {
                        test: 'value',
                        attends: '5',
                    },
                },
            },
        },
        id: ev.getId(),
        organizer: {
            email: ev.getCreators()[0],
        },
    };

    console.log(eventInfo);

    const [firstGuest] = ev.getGuestList();

    const guestInfo: Partial<GoogleAppsScript.Addons.AttendeeObject> = {
        email: firstGuest.getEmail(),
        additionalGuests: firstGuest.getAdditionalGuests(),
        displayName: firstGuest.getName(),
    };

    console.log(guestInfo);
};

const handleDocsAction = (e: GoogleAppsScript.Addons.EventObject) => {
    const {
        docs: { addonHasFileScopePermission, id, title },
    } = e;

    if (addonHasFileScopePermission) {
        console.log(`${id} - ${title}`);
    }
};

const handleDriveAction = (e: GoogleAppsScript.Addons.EventObject) => {
    const {
        drive: { activeCursorItem, selectedItems },
    } = e;

    const includeHash: { [title: string]: 0 | 1 } = { myTitle: 1 };

    // $ExpectType DriveItemObject[]
    [activeCursorItem, ...selectedItems].filter(({ addonHasFileScopePermission, iconUrl, id, mimeType, title }) => {
        // $ExpectType File
        const file = DriveApp.getFileById(id);

        const mimeOk = file.getMimeType() === mimeType;

        const hasIcon = iconUrl !== '';

        return mimeOk && hasIcon && addonHasFileScopePermission && includeHash[title];
    });
};

const handleGmailAction = (e: GoogleAppsScript.Addons.EventObject) => {
    const {
        gmail: { messageId, threadId, bccRecipients = [], ccRecipients = [], toRecipients = [] },
    } = e;

    GmailApp.getMessageById(messageId);
    GmailApp.getThreadById(threadId);

    toRecipients.forEach((to, idx) => console.log({ to, idx }));

    bccRecipients.map((bcc, idx) => `bcc${idx}: ${bcc}`);

    ccRecipients.map((cc, idx) => `cc${idx}: ${cc}`);
};

const handleSheetsAction = (e: GoogleAppsScript.Addons.EventObject) => {
    const {
        sheets: { addonHasFileScopePermission, id, title },
    } = e;

    // $ExpectType Spreadsheet
    const spreadsheet = SpreadsheetApp.openById(id);

    const sheetsInfo: Partial<GoogleAppsScript.Addons.SheetsEventObject> = {
        addonHasFileScopePermission,
        id: spreadsheet.getId(),
        title: spreadsheet.getName(),
    };

    const isTitleCorrect = sheetsInfo.title === title;
    console.log({ isTitleCorrect });
};

const handleSlidesAction = (e: GoogleAppsScript.Addons.EventObject) => {
    const {
        slides: { addonHasFileScopePermission, id, title },
    } = e;

    const presentation = SlidesApp.openById(id);

    const slidesInfo: Partial<GoogleAppsScript.Addons.SlidesEventObject> = {
        addonHasFileScopePermission,
        id: presentation.getId(),
        title: presentation.getName(),
    };

    const isTitleOk = (slidesInfo.title = title);
    console.log({ isTitleOk });
};

const handleCommonAction = (e: GoogleAppsScript.Addons.EventObject) => {
    const {
        commonEventObject: { formInputs, hostApp, parameters, platform, timeZone, userLocale },
    } = e;

    const plaformMap: { [P in GoogleAppsScript.Addons.Platform]: string } = {
        ANDROID: 'Android',
        IOS: 'iOS',
        WEB: 'Web',
    };

    const hostMap: {
        [P in GoogleAppsScript.Addons.HostApplication]: (e: GoogleAppsScript.Addons.EventObject) => void;
    } = {
        CALENDAR: handleCalendarAction,
        DOCS: handleDocsAction,
        DRIVE: handleDriveAction,
        GMAIL: handleGmailAction,
        SHEETS: handleSheetsAction,
        SLIDES: handleSlidesAction,
    };

    try {
        hostMap[hostApp](e);

        const now = new Date();
        const formattedDate = Utilities.formatDate(now, timeZone.id, 'MM/dd/yyyy');
        const formattedTime = Utilities.formatDate(now, timeZone.id, 'hh:mm a');

        Object.keys(formInputs).forEach(id => {
            const { dateInput, dateTimeInput, stringInputs, timeInput } = formInputs[id][''];

            if (dateInput || dateTimeInput) {
                parameters.modifiedAt = dateInput.msSinceEpoch;
            }

            if (stringInputs) {
                parameters.emails = JSON.stringify(stringInputs.value);
            }

            if (timeInput) {
                const { hours, minutes } = timeInput;
                parameters.startsAt = `${hours}:${minutes}`;
            }
        });

        const props = PropertiesService.getUserProperties();
        props.setProperties(parameters);

        console.log(`Processed on ${formattedDate} at ${formattedTime} | ${userLocale}`);
    } catch ({ name, message }) {
        const type = plaformMap[platform];
        console.warn(`Platform: ${type}
        Type: ${name}
        Details: ${message}
        `);
    }
};

const fileSecurityUpdateInfo = () => {
    // get file
    const file = DriveApp.getFileById('');
    // get resource key
    Logger.log(file.getResourceKey());

    // update flag for update enabled
    if (file.getSecurityUpdateEligible() && !file.getSecurityUpdateEnabled()) {
        file.setSecurityUpdateEnabled(true);
    }
};
const folderSecurityUpdateInfo = () => {
    // get folder
    const folder = DriveApp.getFolderById('');
    // get resource key
    Logger.log(folder.getResourceKey());

    // update flag for update enabled
    if (folder.getSecurityUpdateEligible() && !folder.getSecurityUpdateEnabled()) {
        folder.setSecurityUpdateEnabled(true);
    }
};

interface BorderStyleOptions {
    color: string;
    radius: number;
}

interface ImageComponentOptions extends BorderStyleOptions {
    alt: string;
    src: string;
}

interface GridItemOptions extends ImageComponentOptions {
    id: string;
    title: string;
    subtitle: string;
}

interface GridOptions extends BorderStyleOptions {
    items: GoogleAppsScript.Card_Service.GridItem[];
}

const makeBorderStyle = ({ color, radius }: BorderStyleOptions) => {
    // $ExpectType BorderStyle
    const style = CardService.newBorderStyle();
    style.setCornerRadius(radius).setStrokeColor(color).setType(CardService.BorderType.STROKE);

    return style;
};

const makeImageCropStyle = (ratio: number) => {
    // $ExpectType ImageCropStyle
    const style = CardService.newImageCropStyle();
    style.setAspectRatio(ratio).setImageCropType(CardService.ImageCropType.CIRCLE);

    return style;
};

const makeImageComponent = ({ alt, src, ...options }: ImageComponentOptions) => {
    // $ExpectType ImageComponent
    const img = CardService.newImageComponent();
    img.setAltText(alt).setBorderStyle(makeBorderStyle(options)).setCropStyle(makeImageCropStyle(42)).setImageUrl(src);

    return img;
};

const makeGridItem = ({ id, subtitle, title, ...options }: GridItemOptions) => {
    // $ExpectType GridItem
    const item = CardService.newGridItem();
    item.setIdentifier(id)
        .setImage(makeImageComponent(options))
        .setLayout(CardService.GridItemLayout.TEXT_BELOW)
        .setSubtitle(subtitle)
        .setTextAlignment(CardService.HorizontalAlignment.CENTER)
        .setTitle(title);

    return item;
};

const makeGrid = ({ items, ...options }: GridOptions) => {
    // $ExpectType Grid
    const grid = CardService.newGrid();
    items.forEach(item => grid.addItem(item));

    const action = CardService.newAction();
    action.setFunctionName('somefunc');

    grid.setOnClickAction(action).setBorderStyle(makeBorderStyle(options)).setNumColumns(2).setTitle('My Grid');

    return grid;
};

const handleScopeAction = () => {
    // $ExpectType EditorFileScopeActionResponseBuilder
    const builder = CardService.newEditorFileScopeActionResponseBuilder();
    builder.requestFileScopeForActiveDocument();

    // $ExpectType EditorFileScopeActionResponse
    const response = builder.build();

    // $ExpectType string
    const serialized = response.printJson();

    return serialized;
};

// Analytics Test
const requestAnalyticsData = (): string => {
    const gaData = Analytics.Data.Ga.get('An Id', '2022-01-18', '2022-01-18', 'Some metrics', {
        dimensions: 'Some dimensions',
    });

    const totalsForAllResults = gaData.totalsForAllResults;
    const totalSessions = totalsForAllResults['ga:sessions'];

    return totalSessions;
};

// Example of adding an attachment to a calendar event.
const onItemSelected = () => {
    // $ExpectType Attachment
    const attachment = CardService.newAttachment()
        .setResourceUrl('https://example.com')
        .setTitle('My Attachment')
        .setMimeType('text/html')
        .setIconUrl('https://example.com/icon.png');

    // $ExpectType CalendarEventActionResponseBuilder
    CardService.newCalendarEventActionResponseBuilder().addAttachments([attachment]);
};

SlidesApp.getActivePresentation().getSlides()[0].setSkipped(true);

// Examples for form app validation builders:

// Example of building a text validation
const formAppTextValidation = FormApp.createTextValidation()
    .requireNumberBetween(1, 100)
    .build();

// Example of building a grid validation
const formAppGridValidation = FormApp.createGridValidation()
    .requireLimitOneResponsePerColumn()
    .build();

// Example of building a grid validation
const formAppCheckboxGridValidation = FormApp.createCheckboxGridValidation()
    .requireLimitOneResponsePerColumn()
    .build();

// Example of building a checkbox validation
const formAppCheckboxValidation = FormApp.createCheckboxValidation()
    .requireSelectAtLeast(1)
    .build();

// Example of building a paragraph text validation
const formAppParagraphTextValidation = FormApp.createParagraphTextValidation()
    .requireTextDoesNotContainPattern('string')
    .build();

const mimeTypes: string[] = [
    MimeType.GOOGLE_APPS_SCRIPT,
];
