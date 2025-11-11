// tslint:disable: no-var-keyword prefer-const object-literal-shorthand

// from https://developers.google.com/apps-script/overview
function createAndSendDocument() {
    // Create a new Google Doc named 'Hello, world!'
    var doc = DocumentApp.create("Hello, world!");

    // Access the body of the document, then add a paragraph.
    doc.getBody().appendParagraph("This document was created by Google Apps Script.");

    // Get the URL of the document.
    var url = doc.getUrl();

    // Get the email address of the active user - that's you.
    var email = Session.getActiveUser().getEmail();

    // Get the name of the document to use as an email subject line.
    var subject = doc.getName();

    // Append a new string to the "url" variable to use as an email body.
    var body = "Link to your doc: " + url;

    // Send yourself an email with a link to the document.
    GmailApp.sendEmail(email, subject, body);
}

// Regression
ScriptApp.getService().getUrl();
CalendarApp.GuestStatus.NO;

// test for URLFetchRequestOptions.payload
import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;
const postTest = (payload: object): string => {
    const url = "http://httpbin.org/post";
    const params: URLFetchRequestOptions = {
        method: "post",
        payload: payload,
    };
    return UrlFetchApp.fetch(url, params).getContentText();
};

// CalendarApp
// https://developers.google.com/apps-script/reference/calendar/calendar-app

// CalendarApp.Color
// https://developers.google.com/apps-script/reference/calendar/color

function testCalendarAppColor() {
    CalendarApp.Color.BLUE;
    CalendarApp.Color.BROWN;
    CalendarApp.Color.CHARCOAL;
    CalendarApp.Color.CHESTNUT;
    CalendarApp.Color.GRAY;
    CalendarApp.Color.GREEN;
    CalendarApp.Color.INDIGO;
    CalendarApp.Color.LIME;
    CalendarApp.Color.MUSTARD;
    CalendarApp.Color.OLIVE;
    CalendarApp.Color.ORANGE;
    CalendarApp.Color.PINK;
    CalendarApp.Color.PLUM;
    CalendarApp.Color.PURPLE;
    CalendarApp.Color.RED;
    CalendarApp.Color.RED_ORANGE;
    CalendarApp.Color.SEA_BLUE;
    CalendarApp.Color.SLATE;
    CalendarApp.Color.TEAL;
    CalendarApp.Color.TURQOISE;
    CalendarApp.Color.YELLOW;
}

// CalendarApp.EventTransparency
// https://developers.google.com/apps-script/reference/calendar/event-transparency

function testCalendarAppEventTransparency() {
    CalendarApp.EventTransparency.OPAQUE;
    CalendarApp.EventTransparency.TRANSPARENT;
}

// CalendarApp.EventType
// https://developers.google.com/apps-script/reference/calendar/event-type

function testCalendarAppEventType() {
    CalendarApp.EventType.DEFAULT;
    CalendarApp.EventType.BIRTHDAY;
    CalendarApp.EventType.FOCUS_TIME;
    CalendarApp.EventType.FROM_GMAIL;
    CalendarApp.EventType.OUT_OF_OFFICE;
    CalendarApp.EventType.WORKING_LOCATION;
}

// CalendarEvent
// https://developers.google.com/apps-script/reference/calendar/calendar-event

function testCalendarEvent() {
    const event = CalendarApp.getEventById("abc123456");

    event.addEmailReminder(15); // $ExpectType CalendarEvent
    event.addGuest("user@example.com"); // $ExpectType CalendarEvent
    event.addPopupReminder(10); // $ExpectType CalendarEvent
    event.addSmsReminder(5); // $ExpectType CalendarEvent
    event.anyoneCanAddSelf(); // $ExpectType boolean
    event.deleteEvent(); // $ExpectType void
    event.deleteTag("sometag"); // $ExpectType CalendarEvent
    event.getAllDayEndDate(); // $ExpectType Date
    event.getAllDayStartDate(); // $ExpectType Date
    event.getAllTagKeys(); // $ExpectType string[]
    event.getColor(); // $ExpectType string
    event.getCreators(); // $ExpectType string[]
    event.getDateCreated(); // $ExpectType Date
    event.getDescription(); // $ExpectType string
    event.getEmailReminders(); // $ExpectType number[]
    event.getEndTime(); // $ExpectType Date
    event.getEventSeries(); // $ExpectType CalendarEventSeries
    event.getEventType(); // $ExpectType EventType
    event.getGuestByEmail("user@example.com"); // $ExpectType EventGuest
    event.getGuestList(); // $ExpectType EventGuest[]
    event.getGuestList(true); // $ExpectType EventGuest[]
    event.getId(); // $ExpectType string
    event.getLastUpdated(); // $ExpectType Date
    event.getLocation(); // $ExpectType string
    event.getMyStatus(); // $ExpectType GuestStatus
    event.getOriginalCalendarId(); // $ExpectType string
    event.getPopupReminders(); // $ExpectType number[]
    event.getSmsReminders(); // $ExpectType number[]
    event.getStartTime(); // $ExpectType Date
    event.getTag("somekey"); // $ExpectType string
    event.getTitle(); // $ExpectType string
    event.getTransparency(); // $ExpectType EventTransparency
    event.getVisibility(); // $ExpectType Visibility
    event.guestsCanInviteOthers(); // $ExpectType boolean
    event.guestsCanModify(); // $ExpectType boolean
    event.guestsCanSeeGuests(); // $ExpectType boolean
    event.isAllDayEvent(); // $ExpectType boolean
    event.isOwnedByMe(); // $ExpectType boolean
    event.isRecurringEvent(); // $ExpectType boolean
    event.removeAllReminders(); // $ExpectType CalendarEvent
    event.removeGuest("user@example.com"); // $ExpectType CalendarEvent
    event.resetRemindersToDefault(); // $ExpectType CalendarEvent
    event.setAllDayDate(new Date("Feb 17, 2023")); // $ExpectType CalendarEvent
    // $ExpectType CalendarEvent
    event.setAllDayDates(
        new Date("Feb 18, 2023"),
        new Date("Feb 25, 2023"),
    );
    event.setAnyoneCanAddSelf(true); // $ExpectType CalendarEvent
    event.setColor("3"); // $ExpectType CalendarEvent
    event.setColor(CalendarApp.EventColor.GREEN); // $ExpectType CalendarEvent
    event.setDescription("some description"); // $ExpectType CalendarEvent
    event.setGuestsCanInviteOthers(true); // $ExpectType CalendarEvent
    event.setGuestsCanModify(true); // $ExpectType CalendarEvent
    event.setGuestsCanSeeGuests(true); // $ExpectType CalendarEvent
    event.setLocation("some location"); // $ExpectType CalendarEvent
    event.setMyStatus(CalendarApp.GuestStatus.MAYBE); // $ExpectType CalendarEvent
    event.setTag("somekey", "somevalue"); // $ExpectType CalendarEvent
    // $ExpectType CalendarEvent
    event.setTime(
        new Date("Feb 20, 2023 11:00:00"),
        new Date("Feb 20, 2023 12:00:00"),
    );
    event.setTitle("some location"); // $ExpectType CalendarEvent
    event.setTransparency(CalendarApp.EventTransparency.TRANSPARENT); // $ExpectType CalendarEvent
    event.setVisibility(CalendarApp.Visibility.PRIVATE); // $ExpectType CalendarEvent
}

// ScriptApp
// https://developers.google.com/apps-script/reference/script/script-app

function testOAuthScopes() {
    // https://developers.google.com/apps-script/reference/script/script-app#requireallscopesauthmode
    ScriptApp.requireAllScopes(ScriptApp.AuthMode.FULL);

    // https://developers.google.com/apps-script/reference/script/script-app#requirescopesauthmode,-oauthscopes
    ScriptApp.requireScopes(ScriptApp.AuthMode.FULL, [
        "https://www.googleapis.com/auth/documents",
        "https://www.googleapis.com/auth/presentations",
    ]);
}

// Advanced Services
Slides.Presentations?.Pages?.getThumbnail("presentationId", "pageId");

// Calendar (Advanced service)
const createEvent = (): GoogleAppsScript.Calendar.Schema.Event => {
    if (!Calendar.Events) throw new Error("Calendar.Events is not available");
    const calendarId = "primary";
    const start = new Date();
    const end = new Date();
    start.setHours(10);
    end.setHours(11);
    let event: GoogleAppsScript.Calendar.Schema.Event = {
        summary: "Lunch Meeting",
        location: "The Deli",
        description: "To discuss our plans for the presentation next week.",
        start: {
            dateTime: start.toISOString(),
        },
        end: {
            dateTime: end.toISOString(),
        },
        attendees: [{ email: "alice@example.com" }, { email: "bob@example.com" }],
        // Red background. Use Calendar.Colors.get() for the full list.
        colorId: "11",
        eventType: "default",
    };
    event = Calendar.Events.insert(event, calendarId);
    Logger.log("Event ID: " + event.id);

    return event;
};

// Calendar Working Locations (Advanced Service)
const createWorkingLocationEvent = (): void => {
    if (!Calendar.Events) return;
    const calendarId = "primary";
    const start = new Date();
    const end = new Date();
    start.setHours(10);
    end.setHours(11);
    let event: GoogleAppsScript.Calendar.Schema.Event = {
        creator: { self: true, email: "alice@example.com" },
        workingLocationProperties: {
            officeLocation: {
                buildingId: "The-Office",
                label: "The-Office",
            },
            type: "officeLocation",
        },
        kind: "calendar#event",
        summary: "The-Office (Office)",
        visibility: "public",
        transparency: "transparent",
        created: "2023-05-30T14:47:58.000Z",
        originalStartTime: { date: "2023-09-25" },
        eventType: "workingLocation",
        organizer: { email: "bob@example.com", self: true },
        start: {
            date: "2023-09-25",
        },
        end: {
            date: "2023-09-26",
        },
    };
    event = Calendar.Events.insert(event, calendarId);
    Logger.log("Event ID: " + event.id);
};

// Admin Directory (Advanced service)
const listAllUsers = () => {
    let pageToken: string | undefined = undefined;
    if (!AdminDirectory.Users) return;
    do {
        const page: GoogleAppsScript.AdminDirectory.Schema.Users = AdminDirectory.Users.list({
            domain: "example.com",
            orderBy: "givenName",
            maxResults: 100,
            pageToken: pageToken,
        });
        const users = page.users;
        if (users) {
            for (const user of users) {
                Logger.log("%s (%s)", user.name?.fullName, user.primaryEmail);
            }
        } else {
            Logger.log("No users found.");
        }
        pageToken = page.nextPageToken;
    } while (pageToken);
};

// Admin Directory - User Organization
const listAllUserOrganizations = () => {
    let pageToken: string | undefined = undefined;
    if (!AdminDirectory.Users) return;
    do {
        const page: GoogleAppsScript.AdminDirectory.Schema.Users = AdminDirectory.Users.list({
            domain: "example.com",
            orderBy: "givenName",
            maxResults: 100,
            pageToken: pageToken,
            viewType: "domain_public",
        });
        const users = page.users;
        if (users) {
            for (const user of users) {
                Logger.log(
                    "%s: %s - %s)",
                    user.name?.fullName,
                    user.organizations?.[0].location,
                    user.organizations?.[0].department,
                );
            }
        } else {
            Logger.log("No users found.");
        }
        pageToken = page.nextPageToken;
    } while (pageToken);
};

// doPost function
function doPost(e: GoogleAppsScript.Events.DoPost) {
    const path: string = e.pathInfo;
    const data: string = e.postData.contents;
    const param: string = e.parameter.param;
    const paramArray: string[] = e.parameters.param;
    Logger.log(path);
    Logger.log(JSON.parse(data));
    Logger.log(param);
    Logger.log(paramArray);
}

// doGet function
function doGet(e: GoogleAppsScript.Events.DoGet) {
    const path: string = e.pathInfo;
    const param: string = e.parameter.param;
    const paramArray: string[] = e.parameters.param;
    Logger.log(path);
    Logger.log(param);
    Logger.log(paramArray);
}

// Base Service
function createFileFromBlob(blob: GoogleAppsScript.Base.Blob) {
    const file: GoogleAppsScript.Drive.File = DriveApp.createFile(blob);
}

// Console
console.log("log");
console.info("info");
console.warn("warn");
console.error("error");
console.log("Console can use %s and %d format string.", "hello", 2);

// Data Studio Request
const request: GoogleAppsScript.Data_Studio.Request<any> = {
    configParams: {
        my_param: "my_param_value",
    },
    dateRange: {
        endDate: "2019-09-14",
        startDate: "2019-07-14",
    },
    scriptParams: {
        lastRefresh: "1569292983027",
    },
    fields: [
        {
            name: "my_field_name",
        },
    ],
    dimensionsFilters: [
        [
            {
                fieldName: "my_field_name",
                values: ["my_value"],
                type: "INCLUDE",
                operator: "IN_LIST",
            },
        ],
    ],
};

// Spreadsheet Rich Text Value & Builder
// starting with sample code from
// https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value-builder
const richTextStyle = SpreadsheetApp.newTextStyle().setUnderline(false).build();
const richTextValue = SpreadsheetApp.newRichTextValue()
    .setText("foo no baz")
    .setLinkUrl(0, 3, "https://bar.foo")
    .setLinkUrl(7, 10, "https://abc.xyz")
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
const colorObjRgb = SpreadsheetApp.newColor().setRgbColor("red").build();

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
// $ExpectType Color | null
const nullColorObj = nullTextStyle.getForegroundColorObject();
Logger.log(nullColorObj); // null

// RgbColor Test
// $ExpectType Color | null
const rgbColorObj = rgbTextStyle.getForegroundColorObject();
if (rgbColorObj) {
    Logger.log(rgbColorObj); // Color
    Logger.log(rgbColorObj.getColorType()); // RGB
    Logger.log(rgbColorObj.asRgbColor().asHexString()); // #ff0000
    Logger.log(rgbColorObj.asRgbColor().getBlue()); // 0
    Logger.log(rgbColorObj.asRgbColor().getGreen()); // 0
    Logger.log(rgbColorObj.asRgbColor().getRed()); // 255
}

// ThemeColor Test
// $ExpectType Color | null
const themeColorObj = themeTextStyle.getForegroundColorObject();
if (themeColorObj) {
    Logger.log(themeColorObj); // Color
    Logger.log(themeColorObj.getColorType()); // THEME
    Logger.log(themeColorObj.asThemeColor().getThemeColorType()); // ACCENT1
}

const tableCell = DocumentApp.create("").getCursor()?.getElement().asTableCell();
tableCell?.getParentRow().getChildIndex(tableCell);

XmlService.createElement("")
    .addContent(XmlService.createCdata(""))
    .addContent(XmlService.createComment(""))
    .addContent(XmlService.createDocType(""))
    .addContent(XmlService.createText(""));

// https://developers.google.com/apps-script/reference/xml-service
const parseXml = () => {
    const xml = "<root>"
        + " <channel>"
        + "  <item><title>title 1</title><category>cat1</category><category>cat2</category></item>"
        + "  <item><title>title 2</title><category>cat2</category></item>"
        + "  <item><title>title 3</title><category>cat1</category><category>cat3</category></item>"
        + "  <item><title>title 4</title></item>"
        + " </channel>"
        + "</root>";
    const document = XmlService.parse(xml); // $ExpectType Document
    const root = document.getRootElement(); // $ExpectType Element | null

    const channel = root?.getChild("channel");
    const items = channel?.getChildren("item") ?? [];
    items.forEach(item => {
        const title = item.getChild("title")?.getText();
        const categories = item.getChildren("category");
        const labels = categories.map(category => category.getText());
        console.log("%s (%s)", title, labels.join(", "));
    });
};

// https://developers.google.com/apps-script/reference/xml-service
const createXml = () => {
    const root = XmlService.createElement("threads");
    const threads = [
        { messageCount: 1, isUnread: true, subject: "subject 1" },
        { messageCount: 10, isUnread: true, subject: "subject 2" },
        { messageCount: 3, isUnread: false, subject: "subject 3" },
    ];
    threads.forEach(thread => {
        const child = XmlService.createElement("thread")
            .setAttribute("messageCount", String(thread.messageCount))
            .setAttribute("isUnread", String(thread.isUnread))
            .setText(thread.subject);
        root.addContent(child);
    });
    const document = XmlService.createDocument(root);
    const xml = XmlService.getPrettyFormat().format(document);
    console.log(xml);
};

const testXmlService = () => {
    // https://developers.google.com/apps-script/reference/xml-service/cdata
    const cdata = XmlService.createCdata("cdata"); // $ExpectType Cdata
    cdata.getParentElement(); // $ExpectType Element | null

    // https://developers.google.com/apps-script/reference/xml-service/comment
    const comment = XmlService.createComment("comment"); // $ExpectType Comment
    comment.getParentElement(); // $ExpectType Element | null

    // https://developers.google.com/apps-script/reference/xml-service/content
    const content = XmlService.createComment("").detach();
    content.asCdata(); // $ExpectType Cdata | null
    content.asComment(); // $ExpectType Comment | null
    content.asDocType(); // $ExpectType DocType | null
    content.asElement(); // $ExpectType Element | null
    content.asEntityRef(); // $ExpectType EntityRef | null
    content.asProcessingInstruction(); // $ExpectType ProcessingInstruction | null
    content.asText(); // $ExpectType Text | null
    content.getParentElement(); // $ExpectType Element | null

    // https://developers.google.com/apps-script/reference/xml-service/doc-type
    const docType = XmlService.createDocType("html"); // $ExpectType DocType
    docType.getInternalSubset(); // $ExpectType string | null
    docType.getParentElement(); // $ExpectType Element | null
    docType.getPublicId(); // $ExpectType string | null
    docType.getSystemId(); // $ExpectType string | null

    // https://developers.google.com/apps-script/reference/xml-service/document
    const doc = XmlService.createDocument(); // $ExpectType Document
    doc.detachRootElement(); // $ExpectType Element | null
    doc.getContent(0); // $ExpectType Content | null
    doc.getDocType(); // $ExpectType DocType | null
    doc.getRootElement(); // $ExpectType Element | null
    doc.removeContent(0); // $ExpectType Content | null

    // https://developers.google.com/apps-script/reference/xml-service/element
    const element = XmlService.createElement("element"); // $ExpectType Element
    const namespace = XmlService.getNamespace("uri"); // $ExpectType Namespace
    element.getAttribute("attr"); // $ExpectType Attribute | null
    element.getAttribute("attr", namespace); // $ExpectType Attribute | null
    element.getChild("child"); // $ExpectType Element | null
    element.getChild("child", namespace); // $ExpectType Element | null
    element.getChildText("child"); // $ExpectType string | null
    element.getChildText("child", namespace); // $ExpectType string | null
    element.getContent(1); // $ExpectType Content | null
    element.getDocument(); // $ExpectType Document | null
    element.getNamespace("prefix"); // $ExpectType Namespace | null
    element.getParentElement(); // $ExpectType Element | null
    element.removeContent(1); // $ExpectType Content | null

    // https://developers.google.com/apps-script/reference/xml-service/entity-ref
    const entityRef = content.asEntityRef() as GoogleAppsScript.XML_Service.EntityRef;
    entityRef.getParentElement(); // $ExpectType Element | null
    entityRef.getPublicId(); // $ExpectType string | null
    entityRef.getSystemId(); // $ExpectType string | null

    // https://developers.google.com/apps-script/reference/xml-service/format
    XmlService.getCompactFormat().setIndent(null).format(element);

    // https://developers.google.com/apps-script/reference/xml-service/processing-instruction
    const processingInstruction = content
        .asProcessingInstruction() as GoogleAppsScript.XML_Service.ProcessingInstruction;
    processingInstruction.getParentElement(); // $ExpectType Element | null

    // https://developers.google.com/apps-script/reference/xml-service/text
    const text = XmlService.createText("");
    text.getParentElement(); // $ExpectType Element | null
};

const createFolderAndGetDescription = () => {
    // Create folder.
    const folder = DriveApp.createFolder("MyFolder");
    // Get description. Expect null.
    Logger.log(folder.getDescription());
    // Set description.
    folder.setDescription("desc");
    // Get description. Expect 'DESC'.
    Logger.log(folder.getDescription()?.toUpperCase());
};

function onChange(e: GoogleAppsScript.Events.SheetsOnChange) {
    if (e.changeType === "FORMAT") {
        console.log("Formatting change detected");
    }
    const sheetName = e.source?.getSheetName();
    console.log(sheetName);
    if (sheetName !== undefined) {
        console.log("Success to get e.source field");
    }
}

const createFileAndGetDescription = () => {
    // Create file.
    const file = DriveApp.createFile("New Text File", "Hello, world!");
    // Get description. Expect null.
    Logger.log(file.getDescription());
    // Set description.
    file.setDescription("desc");
    // Get description. Expect 'DESC'.
    Logger.log(file.getDescription()?.toUpperCase());
};

function timeDriven(e: GoogleAppsScript.Events.TimeDriven) {
    if (typeof e.hour === "number") {
        console.log("Time driven event detected");
    }
}

CardService.newAction(); // $ExpectType Action
CardService.newAction().addRequiredWidget(""); // $ExpectType Action
CardService.newAction().setAllWidgetsAreRequired(true); // $ExpectType Action
CardService.newAction().setInteraction(CardService.Interaction.OPEN_DIALOG); // $ExpectType Action

CardService.newTextButton().setAltText("alt text"); // $ExpectType TextButton

CardService.newTextButton().setTextButtonStyle(CardService.TextButtonStyle.OUTLINED); // $ExpectType TextButton
CardService.newTextButton().setTextButtonStyle(CardService.TextButtonStyle.FILLED); // $ExpectType TextButton
CardService.newTextButton().setTextButtonStyle(CardService.TextButtonStyle.FILLED_TONAL); // $ExpectType TextButton
CardService.newTextButton().setTextButtonStyle(CardService.TextButtonStyle.BORDERLESS); // $ExpectType TextButton

CardService.newLinkPreview().setTitle("Smart chip title"); // $ExpectType LinkPreview

CardService.newDecoratedText(); // $ExpectType DecoratedText
CardService.newDecoratedText().setAuthorizationAction(CardService.newAuthorizationAction()); // $ExpectType DecoratedText
CardService.newDecoratedText().setBottomLabel(""); // $ExpectType DecoratedText
CardService.newDecoratedText().setButton(CardService.newTextButton()); // $ExpectType DecoratedText
CardService.newDecoratedText().setComposeAction(CardService.newAction(), CardService.ComposedEmailType.REPLY_AS_DRAFT); // $ExpectType DecoratedText
CardService.newDecoratedText().setIcon(CardService.Icon.AIRPLANE); // $ExpectType DecoratedText
CardService.newDecoratedText().setIconAltText(""); // $ExpectType DecoratedText
CardService.newDecoratedText().setIconUrl(""); // $ExpectType DecoratedText
CardService.newDecoratedText().setOnClickAction(CardService.newAction()); // $ExpectType DecoratedText
CardService.newDecoratedText().setOnClickOpenLinkAction(CardService.newAction()); // $ExpectType DecoratedText
CardService.newDecoratedText().setOpenLink(CardService.newOpenLink()); // $ExpectType DecoratedText
CardService.newDecoratedText().setSwitchControl(CardService.newSwitch()); // $ExpectType DecoratedText
CardService.newDecoratedText().setText(""); // $ExpectType DecoratedText
CardService.newDecoratedText().setTopLabel(""); // $ExpectType DecoratedText
CardService.newDecoratedText().setWrapText(true); // $ExpectType DecoratedText

CardService.newDivider(); // $ExpectType Divider

CardService.newTimePicker(); // $ExpectType TimePicker
CardService.newTimePicker().setFieldName(""); // $ExpectType TimePicker
CardService.newTimePicker().setHours(0); // $ExpectType TimePicker
CardService.newTimePicker().setMinutes(0); // $ExpectType TimePicker
CardService.newTimePicker().setOnChangeAction(CardService.newAction()); // $ExpectType TimePicker
CardService.newTimePicker().setTitle(""); // $ExpectType TimePicker

CardService.newMaterialIcon(); // $ExpectType MaterialIcon
CardService.newMaterialIcon().setFill(true); // $ExpectType MaterialIcon
CardService.newMaterialIcon().setGrade(100); // $ExpectType MaterialIcon
CardService.newMaterialIcon().setName(""); // $ExpectType MaterialIcon
CardService.newMaterialIcon().setWeight(100); // $ExpectType MaterialIcon

CardService.newValidation(); // $ExpectType Validation
CardService.newValidation().setCharacterLimit(10); // $ExpectType Validation
CardService.newValidation().setInputType(CardService.InputType.TEXT); // $ExpectType Validation

// CardService.newCardBuilder().setDisplayStyle(CardService.DisplayStyle.PEEK)
CardService.DisplayStyle.PEEK;
CardService.DisplayStyle.REPLACE;

CardService.OnClose.NOTHING;
CardService.OnClose.RELOAD;
CardService.OnClose.RELOAD_ADD_ON;

CardService.newOpenLink(); // $ExpectType OpenLink
CardService.newOpenLink().setOnClose(CardService.OnClose.NOTHING); // $ExpectType OpenLink
CardService.newOpenLink().setOnClose(CardService.OnClose.RELOAD); // $ExpectType OpenLink
CardService.newOpenLink().setOnClose(CardService.OnClose.RELOAD_ADD_ON); // $ExpectType OpenLink

// Class CardService.SelectionInput
// https://developers.google.com/apps-script/reference/card-service/selection-input
CardService.newSelectionInput(); // $ExpectType SelectionInput
CardService.newSelectionInput().addItem("", "", true); // $ExpectType SelectionInput
CardService.newSelectionInput().addMultiSelectItem("", "", false, "", ""); // $ExpectType SelectionInput
CardService.newSelectionInput().setFieldName(""); // $ExpectType SelectionInput
CardService.newSelectionInput().setMultiSelectMaxSelectedItems(5); // $ExpectType SelectionInput
CardService.newSelectionInput().setMultiSelectMinQueryLength(1); // $ExpectType SelectionInput
CardService.newSelectionInput().setTitle(""); // $ExpectType SelectionInput
CardService.newSelectionInput().setType(CardService.SelectionInputType.CHECK_BOX); // $ExpectType SelectionInput

// Enum SelectionInputType
// https://developers.google.com/apps-script/reference/card-service/selection-input-type
CardService.SelectionInputType.CHECK_BOX;
CardService.SelectionInputType.RADIO_BUTTON;
CardService.SelectionInputType.DROPDOWN;
CardService.SelectionInputType.SWITCH;
CardService.SelectionInputType.MULTI_SELECT;

DriveApp.createShortcut("").getTargetId();
DriveApp.createFile("", "").moveTo(DriveApp.getFolderById(""));

// Addon event objects tests:

const handleCalendarAction = (e: GoogleAppsScript.Addons.EventObject) => {
    if (!e.calendar) return;
    const {
        calendar: { attendees, calendarId, recurringEventId },
    } = e;

    // $ExpectType Calendar
    const cal = CalendarApp.getCalendarById(calendarId);

    // $ExpectType CalendarEvent
    const ev = cal.getEventById(recurringEventId);

    // $ExpectType string[]
    const attends: Array<(typeof attendees)[number]["displayName"]> = ev.getGuestList().map((guest) => guest.getName());

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
                conferenceId: "12345",
                entryPoints: [
                    {
                        accessCode: "access",
                        entryPointFeatures: ["toll", "toll_free"],
                        entryPointType: "phone",
                        label: "MyEntry",
                        meetingCode: "meeting",
                        passcode: "pass",
                        password: "12M$q_5",
                        pin: "50193",
                        uri: "tel:123456",
                        regionCode: "en-US",
                    },
                ],
                notes: "My notes about the conference",
                conferenceSolution: {
                    iconUri: "https://hostname/path/image.jpeg",
                    key: {
                        type: "hangoutsMeet",
                    },
                    name: "MyConference",
                },
                parameters: {
                    addOnParameters: {
                        test: "value",
                        attends: "5",
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
    if (!e.docs) return;
    const {
        docs: { addonHasFileScopePermission, id, title },
    } = e;

    if (addonHasFileScopePermission) {
        console.log(`${id} - ${title}`);
    }
};

const handleDriveAction = (e: GoogleAppsScript.Addons.EventObject) => {
    if (!e.drive) return;
    const {
        drive: { activeCursorItem, selectedItems },
    } = e;

    const includeHash: { [title: string]: 0 | 1 } = { myTitle: 1 };

    // $ExpectType DriveItemObject[]
    [activeCursorItem, ...selectedItems].filter(({ addonHasFileScopePermission, iconUrl, id, mimeType, title }) => {
        // $ExpectType File
        const file = DriveApp.getFileById(id);

        const mimeOk = file.getMimeType() === mimeType;

        const hasIcon = iconUrl !== "";

        return mimeOk && hasIcon && addonHasFileScopePermission && includeHash[title];
    });
};

const handleGmailAction = (e: GoogleAppsScript.Addons.EventObject) => {
    if (!e.gmail) return;
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
    if (!e.sheets) return;
    const {
        sheets: { addonHasFileScopePermission, id, title },
    } = e;
    if (!id) return;

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
    if (!e.slides) return;
    const {
        slides: { addonHasFileScopePermission, id, title },
    } = e;
    if (!id) return;

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
    if (!timeZone) return;

    const plaformMap: { [P in GoogleAppsScript.Addons.Platform]: string } = {
        ANDROID: "Android",
        IOS: "iOS",
        WEB: "Web",
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
        const formattedDate = Utilities.formatDate(now, timeZone.id, "MM/dd/yyyy");
        const formattedTime = Utilities.formatDate(now, timeZone.id, "hh:mm a");

        Object.keys(formInputs).forEach((id) => {
            const {
                // V8
                dateInput,
                dateTimeInput,
                stringInputs,
                timeInput,
                // Rhino
                "": {
                    dateInput: dateInputRhino,
                    dateTimeInput: dateTimeInputRhino,
                    stringInputs: stringInputsRhino,
                    timeInput: timeInputRhino,
                },
            } = formInputs[id];

            const dateSource = dateInput || dateInputRhino;
            if (dateSource) {
                parameters.modifiedAt = dateSource.msSinceEpoch;
            }

            const dateTimeSource = dateTimeInput || dateTimeInputRhino;
            if (dateTimeSource) {
                parameters.modifiedAt = dateTimeSource.msSinceEpoch;
            }

            const stringSource = stringInputs || stringInputsRhino;
            if (stringSource) {
                parameters.emails = JSON.stringify(stringSource.value);
            }

            const timeSource = timeInput || timeInputRhino;
            if (timeSource) {
                const { hours, minutes } = timeSource;
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
    const file = DriveApp.getFileById("");
    // get resource key
    Logger.log(file.getResourceKey());

    // update flag for update enabled
    if (file.getSecurityUpdateEligible() && !file.getSecurityUpdateEnabled()) {
        file.setSecurityUpdateEnabled(true);
    }
};
const folderSecurityUpdateInfo = () => {
    // get folder
    const folder = DriveApp.getFolderById("");
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
    items.forEach((item) => grid.addItem(item));

    const action = CardService.newAction();
    action.setFunctionName("somefunc");

    grid.setOnClickAction(action).setBorderStyle(makeBorderStyle(options)).setNumColumns(2).setTitle("My Grid");

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
    if (!Analytics.Data?.Ga) throw new Error();
    const gaData = Analytics.Data.Ga.get("An Id", "2022-01-18", "2022-01-18", "Some metrics", {
        dimensions: "Some dimensions",
    });

    const totalsForAllResults = gaData.totalsForAllResults;
    if (!totalsForAllResults) throw new Error();
    const totalSessions = totalsForAllResults["ga:sessions"];

    return totalSessions;
};

// Example of adding an attachment to a calendar event.
const onItemSelected = () => {
    // $ExpectType Attachment
    const attachment = CardService.newAttachment()
        .setResourceUrl("https://example.com")
        .setTitle("My Attachment")
        .setMimeType("text/html")
        .setIconUrl("https://example.com/icon.png");

    // $ExpectType CalendarEventActionResponseBuilder
    CardService.newCalendarEventActionResponseBuilder().addAttachments([attachment]);
};

SlidesApp.getActivePresentation().getSlides()[0].setSkipped(true);

// Examples for form app validation builders:

// Example of building a text validation
const formAppTextValidation = FormApp.createTextValidation()
    .requireNumberBetween(1, 100)
    .setHelpText("Please be between 1 and 100")
    .build();

// Example of building a grid validation
const formAppGridValidation = FormApp.createGridValidation()
    .requireLimitOneResponsePerColumn()
    .setHelpText("You did it wrong")
    .build();

// Example of building a grid validation
const formAppCheckboxGridValidation = FormApp.createCheckboxGridValidation()
    .requireLimitOneResponsePerColumn()
    .setHelpText("This is not fine")
    .build();

// Example of building a checkbox validation
const formAppCheckboxValidation = FormApp.createCheckboxValidation()
    .requireSelectAtLeast(1)
    .setHelpText("Select one pls")
    .build();

// Example of building a paragraph text validation
const formAppParagraphTextValidation = FormApp.createParagraphTextValidation()
    .requireTextDoesNotContainPattern("string")
    .setHelpText("Hey! You put a string in your string!")
    .build();

const mimeTypes: string[] = [MimeType.GOOGLE_APPS_SCRIPT];

// analytics reporting test
const analyticsReporting = () => {
    const gaData = AnalyticsReporting.Reports?.batchGet({
        reportRequests: [
            {
                viewId: "",
                dateRanges: [
                    {
                        startDate: "2023-03-08",
                        endDate: "2023-03-08",
                    },
                ],
                metrics: [
                    {
                        expression: "some metrics",
                        alias: "some metrics",
                        formattingType: "some metrics",
                    },
                ],
                dimensions: [
                    {
                        name: "some dimensions",
                    },
                ],
                samplingLevel: "LARGE",
            },
        ],
    });
};

// Spreadsheet Drawing test
const sheetDrawing = () => {
    const sheet = SpreadsheetApp.getActiveSheet();
    const drawing = sheet.getDrawings()[0];
    // get methods
    drawing.getContainerInfo();
    drawing.getHeight();
    drawing.getOnAction();
    drawing.getSheet();
    drawing.getWidth();
    drawing.getZIndex();
    // set methods
    drawing.setHeight(100);
    drawing.setOnAction("functionName");
    drawing.setPosition(0, 0, 10, 10);
    drawing.setWidth(100);
    drawing.setZIndex(100);
    // delete drawing
    drawing.remove();
};

// Font Color objects
const sheetFontColorObjects = () => {
    const sheet = SpreadsheetApp.getActiveSheet();
    // Test for a single cell
    const singleBuilder = SpreadsheetApp.newColor().setRgbColor("#808080").build();
    sheet.getRange("A1").setFontColorObject(singleBuilder);
    // Test for multiple cells
    const multipleBuilders = [
        [
            SpreadsheetApp.newColor().setRgbColor("#000000").build(),
            SpreadsheetApp.newColor().setRgbColor("#800000").build(),
        ],
        [
            SpreadsheetApp.newColor().setRgbColor("#008000").build(),
            SpreadsheetApp.newColor().setRgbColor("#000080").build(),
        ],
    ];
    sheet.getRange("A1:B2").setFontColorObjects(multipleBuilders);
};

const utilitiesParseDate = () => {
    Utilities.parseDate("2022/01/01", "GMT", "yyyy/MM/dd");
};

// Spreadsheet Cell Image test
const sheetCellImage = () => {
    const imageBuilder = SpreadsheetApp.newCellImage();
    // set methods
    imageBuilder.setAltTextTitle("Title");
    imageBuilder.setAltTextDescription("Description");
    imageBuilder.setSourceUrl("https://hostname/path/image.jpeg");
    // get methods
    imageBuilder.getAltTextTitle();
    imageBuilder.getAltTextDescription();
    imageBuilder.getContentUrl();
    imageBuilder.getUrl();

    const cellImage = imageBuilder.build();
    cellImage.getAltTextTitle();
    cellImage.getAltTextDescription();
    cellImage.getContentUrl();
    cellImage.getUrl();

    console.assert(cellImage.valueType === SpreadsheetApp.ValueType.IMAGE);
};

// Blob test
const blob = () => {
    // $ExpectType Blob
    const blob = Utilities.newBlob("content", "application/json");
    blob.setContentType(null);

    // $ExpectType string | null
    const contentType = blob.getContentType();

    return contentType;
};

// DataSourceSheet test
const sheetDataSource = () => {
    const sheet = SpreadsheetApp.getActiveSheet();
    const dss = sheet.asDataSourceSheet();
    if (!dss) return;

    // methods
    dss.addFilter("column1", {} as unknown as GoogleAppsScript.Spreadsheet.FilterCriteria);
    dss.asSheet();
    dss.autoResizeColumn("column1");
    dss.autoResizeColumns(["column1"]);
    dss.forceRefreshData();
    dss.getColumnWidth("column1");
    dss.getDataSource();
    dss.getFilters();
    dss.getSheetValues("column1");
    dss.getSheetValues("column1", 1, 1);
    dss.getSortSpecs();
    dss.getStatus();
    dss.refreshData();
    dss.removeFilters("column1");
    dss.removeSortSpec("column1");
    dss.setColumnWidth("column1", 100);
    dss.setColumnWidths(["column1"], 100);
    dss.setSortSpec("column1", true);
    dss.waitForCompletion(10);
};

// Drive Activity (Advanced service)
const driveActivity = () => {
    const response = DriveActivity.Activity?.query({ pageSize: 10, filter: "time > 1452409200000" });
    for (const activity of response?.activities ?? []) {
        const originalObject = activity.primaryActionDetail?.create?.copy?.originalObject;
        if (originalObject && originalObject.driveItem) {
            console.log(originalObject.driveItem.file); // DriveFileReference.file is deprecated
            console.log(originalObject.driveItem.driveFile);
            console.log(originalObject.driveItem.folder); // DriveFileReference.folder is deprecated
            console.log(originalObject.driveItem.driveFolder);
        }
        for (const target of activity.targets ?? []) {
            const driveItem = target.driveItem;
            if (!driveItem) continue;
            console.log(driveItem.file); // DriveFile.file is deprecated
            console.log(driveItem.driveFile);
            console.log(driveItem.folder); // DriveFile.folder is deprecated
            console.log(driveItem.driveFolder);
        }
    }
};

// People_v1 (Advanced Service)
const people = () => {
    if (!People.People) return;
    // contacts batch methods
    const batchCreateContactsResponse = People.People.batchCreateContacts({
        readMask: "names,emailAddresses",
        contacts: [{
            contactPerson: {
                names: [{ displayName: "test user" }],
                emailAddresses: [{ value: "test@example.com" }],
            },
        }],
    });
    console.log(batchCreateContactsResponse.createdPeople?.[0].person?.names);
    const batchUpdateContactsResponse = People.People.batchUpdateContacts({
        updateMask: "names,emailAddresses",
        readMask: "names,emailAddresses",
        contacts: {
            "people/test0123": {
                names: [{ displayName: "test user" }],
                emailAddresses: [{ value: "test-2@example.com" }],
            },
        },
    });
    console.log(batchUpdateContactsResponse.updateResult?.names);
    People.People.batchDeleteContacts({ resourceNames: ["people/test1234"] });

    const image = DriveApp.getFileById("some-photo-data-file-id").getBlob();
    const baseImage = Utilities.base64Encode(image.getBytes());

    // contacts photo methods
    const updateContactPhotoResponse = People.People.updateContactPhoto({
        photoBytes: baseImage,
        sources: ["READ_SOURCE_TYPE_PROFILE", "READ_SOURCE_TYPE_CONTACT"],
    }, "people/test0123");
    console.log(updateContactPhotoResponse.person?.names);
    const deleteContactPhotoResponse = People.People.deleteContactPhoto("people/test0123", {
        sources: ["READ_SOURCE_TYPE_PROFILE", "READ_SOURCE_TYPE_CONTACT"],
    });
    console.log(deleteContactPhotoResponse.person?.names);

    // directory methods
    const searchDirectoryPeopleResponse = People.People.searchDirectoryPeople({
        query: "test@example.com",
        readMask: "names,emailAddresses",
        sources: ["DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE"],
    });
    console.log(searchDirectoryPeopleResponse.people?.[0].names);
    const listDirectoryPeopleResponse = People.People.listDirectoryPeople({
        readMask: "names,emailAddresses",
        sources: ["DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE"],
    });
    console.log(listDirectoryPeopleResponse.people?.[0].names);

    if (!People.OtherContacts) return;
    // other contacts methods
    const otherContactsListResponse = People.OtherContacts.list({
        readMask: "names,emailAddresses",
        sources: ["READ_SOURCE_TYPE_CONTACT", "READ_SOURCE_TYPE_PROFILE"],
    });
    console.log(otherContactsListResponse.otherContacts?.[0].names);
    const otherContactsSearchResponse = People.OtherContacts.search({
        query: "Foo",
        readMask: "names,emailAddresses",
    });
    console.log(otherContactsSearchResponse.people?.[0].names);
    const otherContactsCopyResponse = People.OtherContacts.copyOtherContactToMyContactsGroup({
        copyMask: "names,emailAddresses,phoneNumbers",
    }, "people/test0123");
    console.log(otherContactsCopyResponse.names);
};

// DataSourceFormula test
const sheetDataSourceFormula = () => {
    const sheet = SpreadsheetApp.getActiveSheet();
    const range = sheet.getRange("A1");
    const dataSourceFormula = range.getDataSourceFormula();

    // methods
    dataSourceFormula.forceRefreshData();
    dataSourceFormula.getAnchorCell();
    dataSourceFormula.getDataSource();
    dataSourceFormula.getDisplayValue();
    dataSourceFormula.getFormula();
    dataSourceFormula.getStatus();
    dataSourceFormula.refreshData();
    dataSourceFormula.setFormula("formula");
    dataSourceFormula.waitForCompletion(100);
};

// DataSourcePivotTable test
const sheetDataSourcePivotTable = () => {
    const sheet = SpreadsheetApp.getActiveSheet();
    const range = sheet.getRange("A1");
    const dataSourcePivotTables = range.getDataSourcePivotTables();

    // methods
    dataSourcePivotTables[0].addColumnGroup("column");
    dataSourcePivotTables[0].addFilter("column1", {} as unknown as GoogleAppsScript.Spreadsheet.FilterCriteria);
    dataSourcePivotTables[0].addPivotValue(
        "column1",
        {} as unknown as GoogleAppsScript.Spreadsheet.PivotTableSummarizeFunction,
    );
    dataSourcePivotTables[0].addRowGroup("column1");
    dataSourcePivotTables[0].asPivotTable();
    dataSourcePivotTables[0].forceRefreshData();
    dataSourcePivotTables[0].getDataSource();
    dataSourcePivotTables[0].getStatus();
    dataSourcePivotTables[0].refreshData();
    dataSourcePivotTables[0].waitForCompletion(100);
};

// Range test
const sheetRange = () => {
    const sheet = SpreadsheetApp.getActiveSheet();
    const range = sheet.getRange("A1");
    const dataSource = {} as unknown as GoogleAppsScript.Spreadsheet.DataSource;

    // methods
    let color = range.getBackgroundObject();
    range.setBackgroundObject(color);

    color = range.getFontColorObject();
    range.setFontColorObject(color);

    let colors = range.getBackgroundObjects();
    range.setBackgroundObjects(colors);

    colors = range.getFontColorObjects();
    range.setFontColorObjects(colors);

    range.getDataSourceFormula();
    range.getDataSourceFormulas();

    const dataSourcePivotTables = range.getDataSourcePivotTables();
    range.createDataSourcePivotTable(dataSource);
    range.createDataSourceTable(dataSource);
};

// Drive v3 API - Test File

function driveFileOperations() {
    // Create a new file
    const createdFile = Drive.Files.create({
        name: "test_create",
        description: "This is a description for a test file.",
        mimeType: MimeType.GOOGLE_DOCS, // Example MIME type
    });
    if (!createdFile.id) return;
    console.log("Created File:", createdFile.name, createdFile.id, createdFile.mimeType);

    // Get a file (replace with a valid Drive ID)
    const driveId = "YOUR_DRIVE_ID_HERE"; // <--- REPLACE with an actual Drive ID
    try {
        const drive = Drive.Drives.get(driveId); // Use Drives.get to get Drive metadata

        if (drive) { // Check if the Drive exists (Drives.get returns null if not found)
            // Update a file (using a blob)
            const blob = Utilities.newBlob(
                "Hello world!\nRepo Link: https://github.dev/DefinitelyTyped/DefinitelyTyped",
                MimeType.PLAIN_TEXT,
            );
            const updatedFile = Drive.Files.update({ name: "test_updated" }, createdFile.id, blob, {
                addParents: [drive.id],
            }); // addParents takes an array
            console.log("Updated File:", updatedFile.name, updatedFile.id);
        } else {
            console.error("Drive not found:", driveId);
        }
    } catch (e) {
        console.error("Error getting Drive:", e);
    }

    // Remove a file
    // Comment out to keep the test file
    Drive.Files.remove(createdFile.id);

    // Other operations (examples)

    // List files (Example showing how to use the 'q' parameter)
    const fileList = Drive.Files.list({
        q: "mimeType = 'application/vnd.google-apps.document' and trashed = false", // Example query
        pageSize: 10, // Optional: Limit the number of results
        fields: "files(id, name)", // Optional: List of fields in the response
    });

    if (fileList.files && fileList.files.length > 0) {
        console.log("Files found:");
        fileList.files.forEach(file => console.log(file.name, file.id));
    } else {
        console.log("No files found.");
    }

    // Get file metadata (example with optional fields)
    const metadata = Drive.Files.get(createdFile.id, { fields: "name,mimeType,webViewLink" });
    console.log("File Metadata:", metadata);

    // Copy a file
    const copiedFile = Drive.Files.copy({ name: "test_copy" }, createdFile.id);
    console.log("Copied File:", copiedFile.name, copiedFile.id);

    if (!copiedFile.id) return;
    // (Don't forget to remove the copied file if you want to clean up)
    Drive.Files.remove(copiedFile.id);
}

// Example showing how to create a folder
function createFolder() {
    const folder = Drive.Files.create({
        name: "Test Folder",
        mimeType: MimeType.FOLDER,
    });
    console.log("Created Folder:", folder.name, folder.id);
}

function getFile() {
    const file = Drive.Files.get("FileID");
    console.log(file.name);
}

function getRawFile() {
    const fileBlob: string = Drive.Files.get("FileID", { alt: "media" });
    console.log(fileBlob);
}

// Example showing how to create a folder
function createDrive() {
    const drive = Drive.Drives.create({
        name: "Test Folder",
    }, "request-id");
    console.log("Created Folder:", drive.name, drive.id);
}

// Example: List Drives (Shared Drives)
function listDrives() {
    const driveList = Drive.Drives.list();
    if (driveList && driveList.drives && driveList.drives.length > 0) {
        console.log("Drives found:");
        driveList.drives.forEach(drive => {
            console.log(drive.name, drive.id);
        });
    } else {
        console.log("No shared Drives found.");
    }
}

// Example: Create a comment and a reply
function commentAndReply() {
    const comment = Drive.Comments.create({ content: "Comment text" }, "FileID", { fields: "id" });
    if (!comment.id) return;
    const reply = Drive.Replies.create({ content: "Reply text" }, "FileID", comment.id, { fields: "id" });
    console.log(reply.id);
}

// Example: List tabs (Google Docs)
function listTabs() {
    const allTabs = DocumentApp.openById("FileID").getTabs();
    console.log("Total tabs found: " + allTabs.length);

    const activeTabTitle = DocumentApp.getActiveDocument().getActiveTab().getTitle();
    console.log("Active tab title: " + activeTabTitle);
}

// Example: Set active tab (Google Docs)
function activeTab() {
    const tabId = DocumentApp.getActiveDocument().getActiveTab().getId();
    DocumentApp.getActiveDocument().setActiveTab(tabId);
    console.log("Set active tab to id: " + tabId);
}

// Follows the example at https://developers.google.com/apps-script/reference/document/body#findelementelementtype,-from
function optionalFields() {
    const body = DocumentApp.getActiveDocument()
        .getActiveTab()
        .asDocumentTab()
        .getBody();

    let searchResult: GoogleAppsScript.Document.RangeElement | null = null;
    let index = -1;

    while (
        (searchResult = body.findElement(
            DocumentApp.ElementType.PARAGRAPH,
            searchResult,
        ))
    ) {
        const element = searchResult.getElement();
        console.log("Found an element");
    }
}

// GmailMessage.createDraftReply and createDraftReplyAll with subject option
function testGmailDraftReplyWithSubject() {
    const message = GmailApp.getMessageById("message-id");
    const thread = GmailApp.getThreadById("thread-id");

    // Test GmailMessage.createDraftReply with subject option
    message.createDraftReply("Reply body"); // $ExpectType GmailDraft
    message.createDraftReply("Reply body", { subject: "Custom subject" }); // $ExpectType GmailDraft
    // $ExpectType GmailDraft
    message.createDraftReply("Reply body", {
        subject: "Custom subject",
        cc: "cc@example.com",
        bcc: "bcc@example.com",
        htmlBody: "<p>HTML reply</p>",
    });

    // Test GmailMessage.createDraftReplyAll with subject option
    message.createDraftReplyAll("Reply all body"); // $ExpectType GmailDraft
    message.createDraftReplyAll("Reply all body", { subject: "Custom subject for all" }); // $ExpectType GmailDraft
    // $ExpectType GmailDraft
    message.createDraftReplyAll("Reply all body", {
        subject: "Custom subject for all",
        cc: "cc@example.com",
        htmlBody: "<p>HTML reply all</p>",
    });

    // Test GmailThread.createDraftReply with subject option
    thread.createDraftReply("Thread reply body"); // $ExpectType GmailDraft
    thread.createDraftReply("Thread reply body", { subject: "Thread custom subject" }); // $ExpectType GmailDraft
    // $ExpectType GmailDraft
    thread.createDraftReply("Thread reply body", {
        subject: "Thread custom subject",
        from: "from@example.com",
        name: "Custom Name",
    });

    // Test GmailThread.createDraftReplyAll with subject option
    thread.createDraftReplyAll("Thread reply all body"); // $ExpectType GmailDraft
    thread.createDraftReplyAll("Thread reply all body", { subject: "Thread custom subject for all" }); // $ExpectType GmailDraft
    // $ExpectType GmailDraft
    thread.createDraftReplyAll("Thread reply all body", {
        subject: "Thread custom subject for all",
        replyTo: "replyto@example.com",
        attachments: [DriveApp.getFileById("file-id").getBlob()],
    });
}
