// Type definitions for non-npm package scriptable-ios 1.5
// Project: https://scriptable.app/
// Definitions by: schl3ck <https://github.com/schl3ck>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * _Presents an alert._
 * @see https://docs.scriptable.app/alert/#-new-alert
 */
declare class Alert {
    /**
     * _Title displayed in the alert. Usually a short string._
     * @see https://docs.scriptable.app/alert/#title
     */
    title: string;

    /**
     * _Detailed message displayed in the alert._
     * @see https://docs.scriptable.app/alert/#message
     */
    message: string;

    /**
     * _Presents an alert._
     * @see https://docs.scriptable.app/alert/#-new-alert
     */
    constructor();

    /**
     * _Adds an action to the alert._
     *
     * Adds an action button to the alert. To check if an action was selected, you should use the first parameter provided when the promise returned by presentAlert() and presentSheet()
     * is resolved.
     * @param title - Title of the action.
     * @see https://docs.scriptable.app/alert/#-addaction
     */
    addAction(title: string): void;

    /**
     * _Adds a destructive action to the alert._
     *
     * Destructive action titles have a red text color, signaling that the action may modify or delete data.
     * @param title - Title of the action.
     * @see https://docs.scriptable.app/alert/#-adddestructiveaction
     */
    addDestructiveAction(title: string): void;

    /**
     * _Adds a cancel action to the alert._
     *
     * Adds a cancel action to the alert. When a cancel action is selected, the index provided by presentAlert() or presentSheet() will always be -1. Please note that when running on the
     * iPad and presenting using presentSheet(), the action will not be shown in the list of actions. The operation is cancelled by tapping outside the sheet.
     * @param title - Title of the action.
     * @see https://docs.scriptable.app/alert/#-addcancelaction
     */
    addCancelAction(title: string): void;

    /**
     * _Adds a text field prompting for user input._
     *
     * Adds a text field to the alert controller prompting for user input. Retrieve the value for the text field using textFieldValue() and supply the index of the text field. Indices for
     * text fields are assigned in the same order as they are added to the alert starting at 0.
     *
     * Text fields are not supported when using the sheet presentation.
     * @param placeholder - Optional placeholder that will be displayed when the text field is empty.
     * @param text - Optional default value for the text field.
     * @see https://docs.scriptable.app/alert/#-addtextfield
     */
    addTextField(placeholder?: string, text?: string): void;

    /**
     * _Adds a secure text field prompting for user input._
     *
     * Adds a secure text field to the alert controller prompting for user input. Values entered into a secure text field will be hidden behind dots. Retrieve the value for the text field
     * using textFieldValue() and supply the index of the text field. Indices for text fields are assigned in the same order as they are added to the alert starting at 0.
     * @param placeholder - Optional placeholder that will be displayed when the text field is empty.
     * @param text - Optional default value for the text field.
     * @see https://docs.scriptable.app/alert/#-addsecuretextfield
     */
    addSecureTextField(placeholder?: string, text?: string): void;

    /**
     * _Retrieves value of a text field._
     *
     * Retrieves the value of a text field added using addTextField() or addSecureTextField(). Indices for text fields are assigned in the same order as they are added to the alert
     * starting at 0.
     * @param index - Index of text field to retrieve for value.
     * @see https://docs.scriptable.app/alert/#-textfieldvalue
     */
    textFieldValue(index: number): string;

    /**
     * _Presents the alert modally._
     *
     * This is a shorthand for presentAlert().
     * @see https://docs.scriptable.app/alert/#-present
     */
    present(): Promise<number>;

    /**
     * _Presents the alert modally._
     * @see https://docs.scriptable.app/alert/#-presentalert
     */
    presentAlert(): Promise<number>;

    /**
     * _Presents the alert as a sheet._
     * @see https://docs.scriptable.app/alert/#-presentsheet
     */
    presentSheet(): Promise<number>;
}

/**
 * _Arguments passed to the script._
 * @see https://docs.scriptable.app/args
 */
declare var args: {
    /**
     * _Plain texts supplied by a share sheet or a shortcut action._
     *
     * All plain texts passed to the script from a share sheet or a shortcut action.
     *
     * If you have enabled "Text" as a share sheet input from the script settings, the script can be run from any share sheet throughout the system that shares plain text.
     * @see https://docs.scriptable.app/args/#plaintexts
     */
    plainTexts: string[];

    /**
     * _URLs supplied by a share sheet or a shortcut action._
     *
     * All URLs passed to the script from a share sheet or a shortcut action.
     *
     * If you have enabled "URLs" as a share sheet input from the script settings, the script can be run from any share sheet throughout the system that shares URLs.
     * @see https://docs.scriptable.app/args/#urls
     */
    urls: string[];

    /**
     * _File URLs supplied by a share sheet or a shortcut action._
     *
     * All file URLs passed to the script from a share sheet or a shortcut action.
     *
     * If you have enabled "File URLs" as a share sheet input from the script settings, the script can be run from any share sheet throughout the system that shares URLs pointing to a
     * file.
     *
     * When large files are passed from a share sheet or a shortcut action, the system may terminate the process due to memory constraints. In that case, you should enable "Run in App" in
     * the script settings or in the shortcut.
     * @see https://docs.scriptable.app/args/#fileurls
     */
    fileURLs: string[];

    /**
     * _Images supplied by a share sheet or a shortcut action._
     *
     * All images passed to the script from a share sheet or a shortcut action.
     *
     * If you have enabled "Images" as a share sheet input from the script settings, the script can be run from any share sheet throughout the system that shares images.
     *
     * When large images are passed from a share sheet or a shortcut action, the system may terminate the process due to memory constraints. In that case, you should enable "Run in App"
     * in the script settings or in the shortcut.
     * @see https://docs.scriptable.app/args/#images
     */
    images: Image[];

    /**
     * _Query parameters from a URL scheme._
     *
     * Query parameters are supplied to a script when running it from a URL scheme. See the documentation on Scriptables URL schemes for more information.
     * @see https://docs.scriptable.app/args/#queryparameters
     */
    queryParameters: { [key: string]: string };

    /**
     * _Parameter passed to a Shortcut._
     *
     * When creating a shortcut using the Shortcuts app, you can pass an input parameter that can be read in your script using `args.shortcutParameter`.
     *
     * This parameter can be any text, list, dictionary or file and will be exposed in your script using the appropriate type. When passing a file, the "Run Script" action will attempt to
     * read the file as JSON or a plain text. If the file cannot be read as JSON or a plain text, a path to the file will be passed as the input parameter.
     * @see https://docs.scriptable.app/args/#shortcutparameter
     */
    shortcutParameter: any;

    /**
     * _Parameter passed to a widget._
     *
     * When creating a widget on the Home screen, you can define a parameter that can be read in your script using `args.widgetParameter`.
     *
     * The parameter can be used to differentiate the behavior of multiple widgets.
     * @see https://docs.scriptable.app/args/#widgetparameter
     */
    widgetParameter: any;

    /**
     * _Notification being handled by the script._
     *
     * The notification that a script is being run in or the application was opened from.
     *
     * The notification contains all information that was set when the notification was originally scheduled, including the `userInfo` property which can be used to contain custom data
     * that might be relevant when running the script.
     * @see https://docs.scriptable.app/args/#notification
     */
    notification: Notification;
};

/**
 * _Holds reminders and events._
 * @see https://docs.scriptable.app/calendar
 */
declare class Calendar {
    /**
     * _Calendar identifier._
     * @see https://docs.scriptable.app/calendar/#identifier
     */
    identifier: string;

    /**
     * _Title of calendar._
     * @see https://docs.scriptable.app/calendar/#title
     */
    title: string;

    /**
     * _Whether the calendar is a subscribed calendar._
     * @see https://docs.scriptable.app/calendar/#issubscribed
     */
    isSubscribed: boolean;

    /**
     * _Indicates whether items can be added, edited, and deleted in the calendar._
     * @see https://docs.scriptable.app/calendar/#allowscontentmodifications
     */
    allowsContentModifications: boolean;

    /**
     * _Color of calendar._
     * @see https://docs.scriptable.app/calendar/#color
     */
    color: Color;

    /**
     * _Fetches calendars for reminders._
     *
     * A calendar can only hold either reminders or events. Call this function to fetch all calendars that can hold reminders.
     * @see https://docs.scriptable.app/calendar/#forreminders
     */
    static forReminders(): Promise<Calendar[]>;

    /**
     * _Fetches calendars for events._
     *
     * A calendar can only hold either reminders or events. Call this function to fetch all calendars that can hold events.
     * @see https://docs.scriptable.app/calendar/#forevents
     */
    static forEvents(): Promise<Calendar[]>;

    /**
     * _Fetches a calendar that holds reminders._
     * @param title - Title of calendar.
     * @see https://docs.scriptable.app/calendar/#forremindersbytitle
     */
    static forRemindersByTitle(title: string): Promise<Calendar>;

    /**
     * _Fetches a calendar that holds events._
     * @param title - Title of calendar.
     * @see https://docs.scriptable.app/calendar/#foreventsbytitle
     */
    static forEventsByTitle(title: string): Promise<Calendar>;

    /**
     * _Create a new calendar that holds reminders._
     *
     * This will create a new list for reminders in the Reminders app. The list is automatically saved so there is no need to call `save()` after creating the list.
     * @see https://docs.scriptable.app/calendar/#createforreminders
     */
    static createForReminders(title: string): Promise<Calendar>;

    /**
     * _Find or create a new calendar that holds reminders._
     *
     * This will attempt to find a calendar for reminders with the specified name. If no calendar is found, a new calendar is created and the calendar will appear as a reminder list in
     * the Reminders app. If multiple calendars are found for the specified name, the first one will be returned. The list is automatically saved so there is no need to call `save()` in
     * the case the list was created.
     * @see https://docs.scriptable.app/calendar/#findorcreateforreminders
     */
    static findOrCreateForReminders(title: string): Promise<Calendar>;

    /**
     * _Default calendar for reminders._
     *
     * A calendar can only hold either reminders or events. Call this function to get the default calendar that can hold reminders.
     * @see https://docs.scriptable.app/calendar/#defaultforreminders
     */
    static defaultForReminders(): Promise<Calendar>;

    /**
     * _Default calendar for events._
     *
     * A calendar can only hold either reminders or events. Call this function to get the default calendar that can hold events.
     * @see https://docs.scriptable.app/calendar/#defaultforevents
     */
    static defaultForEvents(): Promise<Calendar>;

    /**
     * _Presents a view for picking calendars._
     * @param allowMultiple - Whether to allow picking multiple calenders. Defaults to false.
     * @see https://docs.scriptable.app/calendar/#presentpicker
     */
    static presentPicker(allowMultiple?: boolean): Promise<Calendar[]>;

    /**
     * _Checks if the calendar supports availability._
     *
     * The following values are supported:
     *
     * *   busy
     * *   free
     * *   tentative
     * *   unavailable
     *
     * Not all calendars support all of these availabilities and some calendars may not support availability at all. Use this function to check if the calendar supports a specific
     * availability.
     * @param availability - Availability to check against.
     * @see https://docs.scriptable.app/calendar/#-supportsavailability
     */
    supportsAvailability(availability: 'busy' | 'free' | 'tentative' | 'unavailable'): boolean;

    /**
     * _Saves calendar._
     *
     * Saves changes to the calendar.
     * @see https://docs.scriptable.app/calendar/#-save
     */
    save(): void;

    /**
     * _Removes calendar._
     *
     * The calendar is removed immediately. This cannot be undone.
     * @see https://docs.scriptable.app/calendar/#-remove
     */
    remove(): void;
}

declare namespace CalendarEvent {
    interface Attendees {
        isCurrentUser: boolean;
        name: string;
        status: string;
        type: string;
        role: string;
    }
}

/**
 * _Manages events in calendars._
 *
 * In order to add the event to your calendar, you must call the save() function.
 * @see https://docs.scriptable.app/calendarevent/#-new-calendarevent
 */
declare class CalendarEvent {
    /**
     * _Identifier of event._
     * @see https://docs.scriptable.app/calendarevent/#identifier
     */
    identifier: string;

    /**
     * _Title of event._
     * @see https://docs.scriptable.app/calendarevent/#title
     */
    title: string;

    /**
     * _Location of event._
     * @see https://docs.scriptable.app/calendarevent/#location
     */
    location: string;

    /**
     * _Notes associated with event._
     * @see https://docs.scriptable.app/calendarevent/#notes
     */
    notes: string;

    /**
     * _Start date of event._
     * @see https://docs.scriptable.app/calendarevent/#startdate
     */
    startDate: Date;

    /**
     * _End date of event._
     * @see https://docs.scriptable.app/calendarevent/#enddate
     */
    endDate: Date;

    /**
     * _Whether the event is an all-day event._
     * @see https://docs.scriptable.app/calendarevent/#isallday
     */
    isAllDay: boolean;

    /**
     * _Attendees associated with the event._
     *
     * An array of objects on the following form:
     *
     *     {
     *       "isCurrentUser": false,
     *       "name": "John Appleseed",
     *       "status": "accepted",
     *       "type": "person",
     *       "role": "required"
     *     }
     *
     * Note that the property is read-only since iOS does not expose API to modify the attendees of an event.
     * @see https://docs.scriptable.app/calendarevent/#attendees
     */
    attendees: CalendarEvent.Attendees[];

    /**
     * _Availability during the event._
     *
     * Indicates how the event should be treated for scheduling purposes. The following values are supported:
     *
     * *   busy
     * *   free
     * *   tentative
     * *   unavailable
     *
     * Be aware that not all calendars support all of these availabilities and some calendars may not support availability at all. Use `Calendar.supportsAvailability()` to check if a
     * calendar supports a specific availability.
     * @see https://docs.scriptable.app/calendarevent/#availability
     */
    availability: 'busy' | 'free' | 'tentative' | 'unavailable';

    /**
     * _Time zone of event._
     *
     * Geopolitical region identifier that identifies the time zone, e.g. "Europe/Copenhagen", "America/New\_York" and "Asia/Tokyo".
     * @see https://docs.scriptable.app/calendarevent/#timezone
     */
    timeZone: string;

    /**
     * _Calendar the event is stored in._
     * @see https://docs.scriptable.app/calendarevent/#calendar
     */
    calendar: Calendar;

    /**
     * _Manages events in calendars._
     *
     * In order to add the event to your calendar, you must call the save() function.
     * @see https://docs.scriptable.app/calendarevent/#-new-calendarevent
     */
    constructor();

    /**
     * _Presents a view for creating a calendar event._
     *
     * The presented view supports editing various attributes of the event, including title, location, dates, recurrence and alerts.
     * @see https://docs.scriptable.app/calendarevent/#presentcreate
     */
    static presentCreate(): Promise<CalendarEvent>;

    /**
     * _Events occurring today._
     * @param calendars - Calendars to fetch events for. Defaults to all calendars.
     * @see https://docs.scriptable.app/calendarevent/#today
     */
    static today(calendars?: Calendar[]): Promise<CalendarEvent[]>;

    /**
     * _Events occurring tomorrow._
     * @param calendars - Calendars to fetch events for. Defaults to all calendars.
     * @see https://docs.scriptable.app/calendarevent/#tomorrow
     */
    static tomorrow(calendars?: Calendar[]): Promise<CalendarEvent[]>;

    /**
     * _Events that occurred yesterday._
     * @param calendars - Calendars to fetch events for. Defaults to all calendars.
     * @see https://docs.scriptable.app/calendarevent/#yesterday
     */
    static yesterday(calendars?: Calendar[]): Promise<CalendarEvent[]>;

    /**
     * _Events that occur this week._
     * @param calendars - Calendars to fetch events for. Defaults to all calendars.
     * @see https://docs.scriptable.app/calendarevent/#thisweek
     */
    static thisWeek(calendars?: Calendar[]): Promise<CalendarEvent[]>;

    /**
     * _Events that occur next week._
     * @param calendars - Calendars to fetch events for. Defaults to all calendars.
     * @see https://docs.scriptable.app/calendarevent/#nextweek
     */
    static nextWeek(calendars?: Calendar[]): Promise<CalendarEvent[]>;

    /**
     * _Events that occurred last week._
     * @param calendars - Calendars to fetch events for. Defaults to all calendars.
     * @see https://docs.scriptable.app/calendarevent/#lastweek
     */
    static lastWeek(calendars?: Calendar[]): Promise<CalendarEvent[]>;

    /**
     * _Events that occurs between two dates._
     * @param startDate - Start date to fetch events for.
     * @param endDate - End date to fetch events for.
     * @param calendars - Calendars to fetch events for. Defaults to all calendars.
     * @see https://docs.scriptable.app/calendarevent/#between
     */
    static between(startDate: Date, endDate: Date, calendars?: Calendar[]): Promise<CalendarEvent[]>;

    /**
     * _Adds a recurrence rule._
     *
     * Recurrence rules specify when the event or reminder should be repeated. See the documentation of RecurrenceRule for more information on creating rules.
     * @param recurrenceRule - Recurrence rule to add to the reminder.
     * @see https://docs.scriptable.app/calendarevent/#-addrecurrencerule
     */
    addRecurrenceRule(recurrenceRule: RecurrenceRule): void;

    /**
     * _Removes all recurrence rules._
     * @see https://docs.scriptable.app/calendarevent/#-removeallrecurrencerules
     */
    removeAllRecurrenceRules(): void;

    /**
     * _Saves event._
     *
     * Saves changes to an event, inserting it into the calendar if it is newly created.
     * @see https://docs.scriptable.app/calendarevent/#-save
     */
    save(): void;

    /**
     * _Removes event from calendar._
     * @see https://docs.scriptable.app/calendarevent/#-remove
     */
    remove(): void;

    /**
     * _Presents a view for editing the calendar event._
     *
     * The presented view supports editing various attributes of the event, including title, location, dates, recurrence and alerts.
     * @see https://docs.scriptable.app/calendarevent/#-presentedit
     */
    presentEdit(): Promise<CalendarEvent>;
}

/**
 * _Open x-callback-url requests._
 *
 * Constructs an object that opens x-callback-url requests and waits for a response from the target app.
 * @see https://docs.scriptable.app/callbackurl/#-new-callbackurl
 */
declare class CallbackURL {
    /**
     * _Open x-callback-url requests._
     *
     * Constructs an object that opens x-callback-url requests and waits for a response from the target app.
     * @param baseURL - Base URL of the request. This is usally something like my-app://x-callback-url/action
     * @see https://docs.scriptable.app/callbackurl/#-new-callbackurl
     */
    constructor(baseURL: string);

    /**
     * _Construct CallbackURL._
     *
     * Appends a key/value pair to the base URL as a query parameter. The name and value are automatically encoded. Do not add the x-callback-url paramters, i.e. x-source, x-success,
     * x-error and x-cancel as Scriptable will add those.
     * @param name - Name of the query parameter to add.
     * @param value - Value of the query parameter to add.
     * @see https://docs.scriptable.app/callbackurl/#-addparameter
     */
    addParameter(name: string, value: string): void;

    /**
     * _Opens the callback URL._
     *
     * Opens the target app and waits for the target app to perform the action. The returned promise contains the query parameters supplied by the target app when it invokes the callback.
     * If the action failed in the target app or the action was cancelled, the promise will be rejected. The promise is also rejected if the action times out because the target app did
     * not invoke the callback.
     * @see https://docs.scriptable.app/callbackurl/#-open
     */
    open(): Promise<any>;

    /**
     * _Creates the callback URL._
     *
     * Creates a callback URL with the specified base URL and query parameters.
     * @see https://docs.scriptable.app/callbackurl/#-geturl
     */
    getURL(): string;
}

/**
 * _Stores color data including opacity._
 *
 * Constructs a new color with a hex value and optionally an alpha value. The hex value may specify the alpha value but this will be ignored if the alpha value parameter is provided.
 * Examples of valid hex values: #ff0000, #00ff0080 #00f and #ff. The hashtag is optional.
 * @see https://docs.scriptable.app/color/#-new-color
 */
declare class Color {
    /**
     * _HEX representation._
     * @see https://docs.scriptable.app/color/#hex
     */
    hex: string;

    /**
     * _Amount of red in the color._
     * @see https://docs.scriptable.app/color/#red
     */
    red: number;

    /**
     * _Amount of green in the color._
     * @see https://docs.scriptable.app/color/#green
     */
    green: number;

    /**
     * _Amount of blue in the color._
     * @see https://docs.scriptable.app/color/#blue
     */
    blue: number;

    /**
     * _Alpha of the color._
     * @see https://docs.scriptable.app/color/#alpha
     */
    alpha: number;

    /**
     * _Stores color data including opacity._
     *
     * Constructs a new color with a hex value and optionally an alpha value. The hex value may specify the alpha value but this will be ignored if the alpha value parameter is provided.
     * Examples of valid hex values: #ff0000, #00ff0080 #00f and #ff. The hashtag is optional.
     * @param hex - Hex value.
     * @param alpha - Alpha value.
     * @see https://docs.scriptable.app/color/#-new-color
     */
    constructor(hex: string, alpha: number);

    /**
     * _Constructs a black color._
     * @see https://docs.scriptable.app/color/#black
     */
    static black(): Color;

    /**
     * _Constructs a dark gray color._
     * @see https://docs.scriptable.app/color/#darkgray
     */
    static darkGray(): Color;

    /**
     * _Constructs a light gray color._
     * @see https://docs.scriptable.app/color/#lightgray
     */
    static lightGray(): Color;

    /**
     * _Constructs a white color._
     * @see https://docs.scriptable.app/color/#white
     */
    static white(): Color;

    /**
     * _Constructs a gray color._
     * @see https://docs.scriptable.app/color/#gray
     */
    static gray(): Color;

    /**
     * _Constructs a red color._
     * @see https://docs.scriptable.app/color/#red
     */
    static red(): Color;

    /**
     * _Constructs a green color._
     * @see https://docs.scriptable.app/color/#green
     */
    static green(): Color;

    /**
     * _Constructs a blue color._
     * @see https://docs.scriptable.app/color/#blue
     */
    static blue(): Color;

    /**
     * _Constructs a cyan color._
     * @see https://docs.scriptable.app/color/#cyan
     */
    static cyan(): Color;

    /**
     * _Constructs a yellow color._
     * @see https://docs.scriptable.app/color/#yellow
     */
    static yellow(): Color;

    /**
     * _Constructs a magenta color._
     * @see https://docs.scriptable.app/color/#magenta
     */
    static magenta(): Color;

    /**
     * _Constructs a orange color._
     * @see https://docs.scriptable.app/color/#orange
     */
    static orange(): Color;

    /**
     * _Constructs a purple color._
     * @see https://docs.scriptable.app/color/#purple
     */
    static purple(): Color;

    /**
     * _Constructs a brown color._
     * @see https://docs.scriptable.app/color/#brown
     */
    static brown(): Color;

    /**
     * _Constructs a transparent color._
     * @see https://docs.scriptable.app/color/#clear
     */
    static clear(): Color;
}

/**
 * _Configuration the script runs with._
 * @see https://docs.scriptable.app/config
 */
declare var config: {
    /**
     * Whether the script is running in the app.
     * @see https://docs.scriptable.app/config/#runsinapp
     */
    runsInApp: boolean;

    /**
     * Whether the script is running in the action extension.
     * @see https://docs.scriptable.app/config/#runsinactionextension
     */
    runsInActionExtension: boolean;

    /**
     * Whether the script is running with Siri.
     * @see https://docs.scriptable.app/config/#runswithsiri
     */
    runsWithSiri: boolean;

    /**
     * Whether the script is running in a widget.
     * @see https://docs.scriptable.app/config/#runsinwidget
     */
    runsInWidget: boolean;

    /**
     * Whether the script is running in a notification.
     * @see https://docs.scriptable.app/config/#runsinnotification
     */
    runsInNotification: boolean;

    /**
     * Whether the script was run from the home screen. You can add a script to the home screen from the script settings.
     * @see https://docs.scriptable.app/config/#runsfromhomescreen
     */
    runsFromHomeScreen: boolean;

    /**
     * The size of the widget the script is running in.
     *
     * Possible values are: `small`, `medium`, `large` and `null`. The value is `null` when the script is not running in a widget.
     * @see https://docs.scriptable.app/config/#widgetfamily
     */
    widgetFamily: string;
};

/**
 * _Adds messages to the log._
 * @see https://docs.scriptable.app/console
 */
declare var console: {
    /**
     * _Logs a message to the console._
     *
     * The message will have a default appearance. Refer to `console.error(message)` to log errors.
     *
     * You can also use the global function `log(message)` which is a shorthand for `console.log`.
     * @param message - Message to log to the console.
     * @see https://docs.scriptable.app/console/#log
     */
    log(message: any): void;

    /**
     * _Logs a warning message to the console._
     *
     * The message will have a distinctive appearance. Refer to `console.log(message)` to log informative messages and `console.error(message)` to log errors.
     *
     * You can also use the global function `logWarning(message)` which is a shorthand for `console.warn`.
     * @param message - Message to log to the console.
     * @see https://docs.scriptable.app/console/#warn
     */
    warn(message: any): void;

    /**
     * _Logs an error message to the console._
     *
     * The message will have a distinctive appearance. Refer to `console.log(message)` to log informative message and `console.warn(message)` to log warnings.
     *
     * You can also use the global function `logError(message)` which is a shorthand for `console.error`.
     * @param message - Message to log to the console.
     * @see https://docs.scriptable.app/console/#error
     */
    error(message: any): void;
};

declare namespace Contact {
    interface EmailAddresses {
        identifier?: string;
        label?: string;
        localizedLabel?: string;
        value: string;
    }
    interface PhoneNumbers {
        identifier?: string;
        label?: string;
        localizedLabel?: string;
        value: string;
    }
    interface PostalAddresses {
        identifier?: string;
        label: string;
        localizedLabel: string;
        street: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    }
    interface SocialProfiles {
        identifier?: string;
        label: string;
        localizedLabel: string;
        service: string;
        url: string;
        userIdentifier: string;
        username: string;
    }
}

/**
 * _Contact in the address book._
 *
 * In order to add the contact to your address book, you must queue it for insertion using `Contact.add()`. When you're done making changes to the address book you should call
 * `Contact.persistChanges()` to persist the changes.
 * @see https://docs.scriptable.app/contact/#-new-contact
 */
declare class Contact {
    /**
     * _Uniquely identifies the contact on the device._
     * @see https://docs.scriptable.app/contact/#identifier
     */
    identifier: string;

    /**
     * _Name prefix._
     * @see https://docs.scriptable.app/contact/#nameprefix
     */
    namePrefix: string;

    /**
     * _Given name._
     * @see https://docs.scriptable.app/contact/#givenname
     */
    givenName: string;

    /**
     * _Middle name._
     * @see https://docs.scriptable.app/contact/#middlename
     */
    middleName: string;

    /**
     * _Family name._
     * @see https://docs.scriptable.app/contact/#familyname
     */
    familyName: string;

    /**
     * _Nickname._
     * @see https://docs.scriptable.app/contact/#nickname
     */
    nickname: string;

    /**
     * _Birthday._
     * @see https://docs.scriptable.app/contact/#birthday
     */
    birthday: Date;

    /**
     * _Profile picture._
     * @see https://docs.scriptable.app/contact/#image
     */
    image: Image;

    /**
     * _Email addresses._
     *
     * An array of objects on the following form:
     *
     *     {
     *       "identifier": "UUID-ABC-123",
     *       "label": "Home",
     *       "localizedLabel": "Home",
     *       "value": "my@example.com"
     *     }
     *
     * The identifier uniquely identifies the email address on this device. The label is a description of the email address and the value holds the email address itself.
     *
     * When updating this property, you must set the entire array of email addresses that you would like to store on the contact. Each value in the array must have the "value" key. The
     * other keys are optional.
     * @see https://docs.scriptable.app/contact/#emailaddresses
     */
    emailAddresses: Contact.EmailAddresses[];

    /**
     * _Phone numbers._
     *
     * An array of objects on the following form:
     *
     *     {
     *       "identifier": "UUID-ABC-123",
     *       "label": "Home",
     *       "localizedLabel": "Home",
     *       "value": "(111)234-5678"
     *     }
     *
     * The identifier uniquely identifies the phone number on this device. The label is a description of the phone number and the value holds the phone number itself.
     *
     * When updating this property, you must set the entire array of phone numbers that you would like to store on the contact. Each value in the array must have the "value" key. The
     * other keys are optional.
     * @see https://docs.scriptable.app/contact/#phonenumbers
     */
    phoneNumbers: Contact.PhoneNumbers[];

    /**
     * _Postal addresses._
     *
     * An array of objects on the following form:
     *
     *     {
     *       "identifier": "UUID-ABC-123",
     *       "label": "Home",
     *       "localizedLabel": "Home",
     *       "street": "240  Terry Lane",
     *       "city": "New York",
     *       "state": "New York",
     *       "postalCode": "10001",
     *       "country": "United States of America"
     *     }
     *
     * The identifier uniquely identifies the postal address on this device. The label is a description of the postal address.
     *
     * When updating this property, you must set the entire array of postal addresses that you would like to store on the contact. The "identifier" key is optional.
     * @see https://docs.scriptable.app/contact/#postaladdresses
     */
    postalAddresses: Contact.PostalAddresses[];

    /**
     * _Social profiles._
     *
     * An array of objects on the following form:
     *
     *     {
     *       "identifier": "UUID-ABC-123",
     *       "label": "Twitter",
     *       "localizedLabel": "Twitter",
     *       "service": "Twitter",
     *       "url": "https://twitter.com/scriptableapp",
     *       "userIdentifier": null,
     *       "username": "scriptableapp"
     *     }
     *
     * The identifier uniquely identifies the social profile on this device. The label is a description of the social profile, the service is the social profile's service name, the URL
     * contains a link to the social profile, the userIdentifier is the identifier of the social profile and the username is the name for the social profile.
     *
     * When updating this property, you must set the entire array of social profiles that you would like to store on the contact. The "identifier" key is optional.
     * @see https://docs.scriptable.app/contact/#socialprofiles
     */
    socialProfiles: Contact.SocialProfiles[];

    /**
     * _Note for the contact._
     *
     * For security reasons, a contacts notes cannot be accessed in Siri, the Shortcuts app and in a notification.
     * @see https://docs.scriptable.app/contact/#note
     */
    note: string;

    /**
     * _URL addresses._
     *
     * When updating this property, you must set the entire array of URL addresses that you would like to store on the contact. The "identifier" key is optional.
     * @see https://docs.scriptable.app/contact/#urladdresses
     */
    urlAddresses: Array<{ [key: string]: string }>;

    /**
     * _Dates._
     *
     * When updating this property, you must set the entire array of dates that you would like to store on the contact. The "identifier" key is optional.
     * @see https://docs.scriptable.app/contact/#dates
     */
    dates: Array<{ [key: string]: any }>;

    /**
     * _Name of the organization associated with the contact._
     * @see https://docs.scriptable.app/contact/#organizationname
     */
    organizationName: string;

    /**
     * _Name of the department associated with the contact._
     * @see https://docs.scriptable.app/contact/#departmentname
     */
    departmentName: string;

    /**
     * _The contacts job title._
     * @see https://docs.scriptable.app/contact/#jobtitle
     */
    jobTitle: string;

    /**
     * _Whether or not name prefix is available._
     *
     * The `namePrefix` property may not be available if the container does not support it. In that case any value set on the property will be ignored.
     * @see https://docs.scriptable.app/contact/#isnameprefixavailable
     */
    isNamePrefixAvailable: boolean;

    /**
     * _Whether or not given name is available._
     *
     * The `givenName` property may not be available if the container does not support it. In that case any value set on the property will be ignored.
     * @see https://docs.scriptable.app/contact/#isgivenameavailable
     */
    isGiveNameAvailable: boolean;

    /**
     * _Whether or not middle name is available._
     *
     * The `middleName` property may not be available if the container does not support it. In that case any value set on the property will be ignored.
     * @see https://docs.scriptable.app/contact/#ismiddlenameavailable
     */
    isMiddleNameAvailable: boolean;

    /**
     * _Whether or not family name is available._
     *
     * The `familyName` property may not be available if the container does not support it. In that case any value set on the property will be ignored.
     * @see https://docs.scriptable.app/contact/#isfamilynameavailable
     */
    isFamilyNameAvailable: boolean;

    /**
     * _Whether or not nickname is available._
     *
     * The `nickname` property may not be available if the container does not support it. In that case any value set on the property will be ignored.
     * @see https://docs.scriptable.app/contact/#isnicknameavailable
     */
    isNicknameAvailable: boolean;

    /**
     * _Whether or not birthday is available._
     *
     * The `birthday` property may not be available if the container does not support it. In that case any value set on the property will be ignored.
     * @see https://docs.scriptable.app/contact/#isbirthdayavailable
     */
    isBirthdayAvailable: boolean;

    /**
     * _Whether or not email addresses are available._
     *
     * The `emailAddresses` property may not be available if the container does not support it. In that case any value set on the property will be ignored.
     * @see https://docs.scriptable.app/contact/#isemailaddressesavailable
     */
    isEmailAddressesAvailable: boolean;

    /**
     * _Whether or not phone numbers are available._
     *
     * The `phoneNumbers` property may not be available if the container does not support it. In that case any value set on the property will be ignored.
     * @see https://docs.scriptable.app/contact/#isphonenumbersavailable
     */
    isPhoneNumbersAvailable: boolean;

    /**
     * _Whether or not postal addresses are available._
     *
     * The `postalAddresses` property may not be available if the container does not support it. In that case any value set on the property will be ignored.
     * @see https://docs.scriptable.app/contact/#ispostaladdressesavailable
     */
    isPostalAddressesAvailable: boolean;

    /**
     * _Whether or not social profiles are available._
     *
     * The `socialProfiles` property may not be available if the container does not support it. In that case any value set on the property will be ignored.
     * @see https://docs.scriptable.app/contact/#issocialprofilesavailable
     */
    isSocialProfilesAvailable: boolean;

    /**
     * _Whether or not image is available._
     *
     * The `image` property may not be available if the container does not support it. In that case any value set on the property will be ignored.
     * @see https://docs.scriptable.app/contact/#isimageavailable
     */
    isImageAvailable: boolean;

    /**
     * _Whether or not note is available._
     *
     * The `note` property may not be available if the container does not support it. In that case any value set on the property will be ignored.
     * @see https://docs.scriptable.app/contact/#isnoteavailable
     */
    isNoteAvailable: boolean;

    /**
     * _Whether or not URL addresses are available._
     *
     * The `urlAddresses` property may not be available if the container does not support it. In that case any value set on the property will be ignored.
     * @see https://docs.scriptable.app/contact/#isurladdressesavailable
     */
    isURLAddressesAvailable: boolean;

    /**
     * _Whether or not organization name is available._
     *
     * The `organizationName` property may not be available if the container does not support it. In that case any value set on the property will be ignored.
     * @see https://docs.scriptable.app/contact/#isorganizationnameavailable
     */
    isOrganizationNameAvailable: boolean;

    /**
     * _Whether or not department name is available._
     *
     * The `departmentName` property may not be available if the container does not support it. In that case any value set on the property will be ignored.
     * @see https://docs.scriptable.app/contact/#isdepartmentnameavailable
     */
    isDepartmentNameAvailable: boolean;

    /**
     * _Whether or not job title is available._
     *
     * The `jobTitle` property may not be available if the container does not support it. In that case any value set on the property will be ignored.
     * @see https://docs.scriptable.app/contact/#isjobtitleavailable
     */
    isJobTitleAvailable: boolean;

    /**
     * _Whether or not dates are available._
     *
     * The `date` property may not be available if the container does not support it. In that case any value set on the property will be ignored.
     * @see https://docs.scriptable.app/contact/#isdatesavailable
     */
    isDatesAvailable: boolean;

    /**
     * _Contact in the address book._
     *
     * In order to add the contact to your address book, you must queue it for insertion using `Contact.add()`. When you're done making changes to the address book you should call
     * `Contact.persistChanges()` to persist the changes.
     * @see https://docs.scriptable.app/contact/#-new-contact
     */
    constructor();

    /**
     * _Fetches contacts._
     *
     * Fetches the contacts in the specified containers. A contact can be in only one container.
     * @param containers - Containers to fetch contacts from.
     * @see https://docs.scriptable.app/contact/#all
     */
    static all(containers: ContactsContainer[]): Promise<Contact[]>;

    /**
     * _Fetches contacts in groups._
     *
     * Fetches the contacts in the specified contacts groups. A contact may belong to many groups.
     * @param groups - Groups to fetch contacts from.
     * @see https://docs.scriptable.app/contact/#ingroups
     */
    static inGroups(groups: ContactsGroup[]): Promise<Contact[]>;

    /**
     * _Queues a contact to be added._
     *
     * After you have created a contact, you must queue the contact to be added to the address book and invoke `Contact.persistChanges()` to persist the changes to the address book.
     *
     * For performance reasons, it is best to batch changes to the address book. Therefore you should queue all updates, insertions and removals of contacts and contacts groups to as
     * large batches as possible and then call `Contact.persistChanges()` when you want to persist the changes to the address book.
     * @param contact - Contact to queue to be added.
     * @param containerIdentifier - Optional. Identifier of container to add the contact to. If null is specified, the contact will be added to the default container.
     * @see https://docs.scriptable.app/contact/#add
     */
    static add(contact: Contact, containerIdentifier?: string): void;

    /**
     * _Queues an update to a contact._
     *
     * After you have updated one or more properties on a contact, you must queue the contact to be updated and invoke `Contact.persistChanges()` to persist the changes to the address
     * book.
     *
     * For performance reasons, it is best to batch changes to the address book. Therefore you should queue all updates, insertions and removals of contacts and contacts groups to as
     * large batches as possible and then call `Contact.persistChanges()` when you want to persist the changes to the address book.
     * @param contact - Contact to queue to be updated.
     * @see https://docs.scriptable.app/contact/#update
     */
    static update(contact: Contact): void;

    /**
     * _Queues a contact to be deleted._
     *
     * To delete a contact, you must queue the contact for deletion and invoke `Contact.persistChanges()` to persist the changes to the address book.
     *
     * For performance reasons, it is best to batch changes to the address book. Therefore you should queue all updates, insertions and removals of contacts and contacts groups to as
     * large batches as possible and then call `Contact.persistChanges()` when you want to persist the changes to the address book.
     * @param contact - Contact to queue to be deleted.
     * @see https://docs.scriptable.app/contact/#delete
     */
    static delete(contact: Contact): void;

    /**
     * _Persist queued changes to the address book._
     *
     * Call this function to persist changes queued with `Contact.add()`, `Contact.update()` and `Contact.delete()`.
     *
     * For performance reasons, it is best to batch changes to the address book. Therefore you should queue all updates, insertions and removals of contacts and contacts groups to as
     * large batches as possible and then call `Contact.persistChanges()` when you want to persist the changes to the address book.
     * @see https://docs.scriptable.app/contact/#persistchanges
     */
    static persistChanges(): Promise<void>;
}

/**
 * _Collection of contacts._
 * @see https://docs.scriptable.app/contactscontainer
 */
declare class ContactsContainer {
    /**
     * _Identifier of the contacts container._
     * @see https://docs.scriptable.app/contactscontainer/#identifier
     */
    identifier: string;

    /**
     * _Name of the contacts container._
     * @see https://docs.scriptable.app/contactscontainer/#name
     */
    name: string;

    /**
     * _Fetches default contacts container._
     * @see https://docs.scriptable.app/contactscontainer/#default
     */
    static default(): Promise<ContactsContainer>;

    /**
     * _Fetches all contacts containers._
     * @see https://docs.scriptable.app/contactscontainer/#all
     */
    static all(): Promise<ContactsContainer[]>;

    /**
     * _Fetches a contacts container._
     * @param identifier - Identifier of the contacts container to fetch.
     * @see https://docs.scriptable.app/contactscontainer/#withidentifier
     */
    static withIdentifier(identifier: string): Promise<ContactsContainer>;
}

/**
 * _Group of contacts._
 *
 * In order to add the group to your address book, you must queue it for insertion using `ContactsGroup.add()`. When you're done making changes to the address book you should call
 * `Contact.persistChanges()` to persist the changes.
 * @see https://docs.scriptable.app/contactsgroup/#-new-contactsgroup
 */
declare class ContactsGroup {
    /**
     * _Identifier of the contacts group._
     * @see https://docs.scriptable.app/contactsgroup/#identifier
     */
    identifier: string;

    /**
     * _Name of the contacts group._
     * @see https://docs.scriptable.app/contactsgroup/#name
     */
    name: string;

    /**
     * _Group of contacts._
     *
     * In order to add the group to your address book, you must queue it for insertion using `ContactsGroup.add()`. When you're done making changes to the address book you should call
     * `Contact.persistChanges()` to persist the changes.
     * @see https://docs.scriptable.app/contactsgroup/#-new-contactsgroup
     */
    constructor();

    /**
     * _Fetches contacts groups._
     *
     * Fetches the contacts groups in the specified containers. A group can be in only one container.
     * @param containers - Container to fetch contacts groups from.
     * @see https://docs.scriptable.app/contactsgroup/#all
     */
    static all(containers: ContactsContainer[]): Promise<ContactsGroup[]>;

    /**
     * _Queues a contacts group to be added._
     *
     * After you have created a group, you must queue the group to be added to the address book and invoke `Contact.persistChanges()` to persist the changes to the address book.
     *
     * For performance reasons, it is best to batch changes to the address book. Therefore you should queue all updates, insertions and removals of contacts and contacts groups to as
     * large batches as possible and then call `Contact.persistChanges()` when you want to persist the changes to the address book.
     * @param group - Contacts group to queue to be added.
     * @param containerIdentifier - Optional. Identifier of container to add the contacts group to. If null is specified, the group will be added to the default container.
     * @see https://docs.scriptable.app/contactsgroup/#add
     */
    static add(group: ContactsGroup, containerIdentifier?: string): void;

    /**
     * _Queues an update to a contacts group._
     *
     * After you have updated one or more properties on a contacts group, you must queue the group to be updated and invoke `Contact.persistChanges()` to persist the changes to the
     * address book.
     *
     * For performance reasons, it is best to batch changes to the address book. Therefore you should queue all updates, insertions and removals of contacts and contacts groups to as
     * large batches as possible and then call `Contact.persistChanges()` when you want to persist the changes to the address book.
     * @param group - Contacts group to queue to be updated.
     * @see https://docs.scriptable.app/contactsgroup/#update
     */
    static update(group: ContactsGroup): void;

    /**
     * _Queues a contacts group to be deleted._
     *
     * To delete a contacts group, you must queue the group for deletion and invoke `Contact.persistChanges()` to persist the changes to the address book.
     *
     * For performance reasons, it is best to batch changes to the address book. Therefore you should queue all updates, insertions and removals of contacts and contacts groups to as
     * large batches as possible and then call `Contact.persistChanges()` when you want to persist the changes to the address book.
     * @param group - Contacts group to queue to be deleted.
     * @see https://docs.scriptable.app/contactsgroup/#delete
     */
    static delete(group: ContactsGroup): void;

    /**
     * _Adds a contact to the group._
     *
     * In order to persist the change, you should call `Contact.persistChanges()`. It is important that the contact is added to the address book. To add the contact to the address book,
     * you should queue it for insertion using `Contact.add()` before persisting the changes.
     * @param contact - Contact to add to the group.
     * @see https://docs.scriptable.app/contactsgroup/#-addmember
     */
    addMember(contact: Contact): void;

    /**
     * _Removes a contact from the group._
     *
     * In order to persist the change, you should call `Contact.persistChanges()`. It is important that the contact is added to the address book. To add the contact to the address book,
     * you should queue it for insertion using `Contact.add()` before persisting the changes.
     * @param contact - Contact to add to the group.
     * @see https://docs.scriptable.app/contactsgroup/#-removemember
     */
    removeMember(contact: Contact): void;
}

/**
 * _Raw data representation._
 * @see https://docs.scriptable.app/data
 */
declare class Data {
    /**
     * _Creates data from string._
     *
     * The provided string is assumed to be UTF8 encoded. If the string is not UTF8 encoded, the function will return null.
     * @param string - String to create data from.
     * @see https://docs.scriptable.app/data/#fromstring
     */
    static fromString(string: string): Data;

    /**
     * _Reads data from file path._
     *
     * Reads the raw data of the file at the specified file path.
     * @param filePath - Path of file to read data from.
     * @see https://docs.scriptable.app/data/#fromfile
     */
    static fromFile(filePath: string): Data;

    /**
     * _Creates data from base64 encoded string._
     *
     * The supplied string must be base64 encoded otherwise the function will return null.
     * @param base64String - Base64 encoded string to create data from.
     * @see https://docs.scriptable.app/data/#frombase64string
     */
    static fromBase64String(base64String: string): Data;

    /**
     * _Creates data from JPEG image._
     * @param image - JPEG image to convert to data.
     * @see https://docs.scriptable.app/data/#fromjpeg
     */
    static fromJPEG(image: Image): Data;

    /**
     * _Creates data from PNG image._
     * @param image - PNG image to convert to data.
     * @see https://docs.scriptable.app/data/#frompng
     */
    static fromPNG(image: Image): Data;

    /**
     * _Creates a string from the data._
     *
     * The data is assumed to represent a UTF8 encoded string. If the string is not UTF8 encoded string, the function will return null.
     * @see https://docs.scriptable.app/data/#-torawstring
     */
    toRawString(): string;

    /**
     * _Creates a base64 encoded string._
     *
     * Creates a base64 encoded string from the data.
     * @see https://docs.scriptable.app/data/#-tobase64string
     */
    toBase64String(): string;

    /**
     * _Gets bytes from data._
     * @see https://docs.scriptable.app/data/#-getbytes
     */
    getBytes(): number[];
}

/**
 * _Converts between dates and strings._
 *
 * To convert between dates and their textual representation, use the `string()` and `date()` functions.
 * @see https://docs.scriptable.app/dateformatter/#-new-dateformatter
 */
declare class DateFormatter {
    /**
     * _Date format to be used by the formatter._
     *
     * Sets a fixed format to be used by the formatter. For example the date "2019-08-26 16:47" can be represented using the format "yyyy-MM-dd HH:mm".
     *
     * When converting dates to strings, it's advised to use some of the predefined formats for dates and times that can be applied using functions on the formatter, e.g.
     * `useMediumDateStyle()` and `useMediumTimeStyle()`.
     *
     * Year:
     *
     * *   `y`: Year with no padding. Example: "2019"
     * *   `yy`: Year with two zeros. Adds padding if necessary. Example: "19"
     * *   `yyyy`: Year with a minimum of four digits. Adds padding if necessary. Example: "2019"
     *
     * Quarter:
     *
     * *   `Q`: Quarter of the year. Example: "4"
     * *   `QQQQ`: Quarter spelled out. Example: "4th quarter"
     *
     * Month:
     *
     * *   `M`: Numeric month of the year. Example: "1"
     * *   `MM`: Numeric month of the year. Adds padding if necessary. Example: "01"
     * *   `MMM`: Shorthand name of the month. Example: "Jan"
     * *   `MMMM`: Full name of the month. Example: "January"
     * *   `MMMMM`: Narrow name of the month. Example: "J"
     *
     * Day:
     *
     * *   `d`: Day of the month. Example: "9"
     * *   `dd`: Day of the month. Adds padding if necessary. Example: "09"
     * *   `F`: Day of the week. Example: "3rd Friday in August"
     * *   `E`: Day of the week. Example: "Fri"
     * *   `EEEE`: Full name of the day. Example: "Friday"
     * *   `EEEEE`: Narrow day of the week. Example: "F"
     *
     * Hour:
     *
     * *   `h`: Hour on a 12-hour clock. Example: "9"
     * *   `hh`: Hour on a 12-hour clock. Adds padding if necessary. Example: "09"
     * *   `H`: Hour on a 24-hour clock. Example: "21"
     * *   `HH`: Hour on a 24-hour clock. Adds padding if necessary. Example: "21"
     * *   `a`: AM/PM for times on a 12-hour clock. Example: "PM"
     *
     * Minute:
     *
     * *   `m`: Minute. Example: "7"
     * *   `mm`: Minute. Adds padding if necessary. Example: "07"
     *
     * Second:
     *
     * *   `s`: Seconds. Example: "4"
     * *   `ss`: Seconds. Adds padding if necessary. Example: "04"
     * *   `SSS`: Milliseconds. Example: "384"
     *
     * Time zone:
     *
     * *   `zzz`: Three letter name of the time zone. Falls back to GMT-08:00 if the name is unknown. Example: "CST"
     * *   `zzzz`: Full name of the time zone. Falls back to GMT-08:00 if the name is unknown. Example: "Central Standard Time"
     * *   `Z`: Time zone in RFC 822 GMT format. Also matches a literal Z for Zulu (UTC) time. Example: "-0600"
     * *   `ZZZZ`: Time zone with abbreviation and offset. Example: "CST-06:00"
     * *   `ZZZZZ`: Time zone in ISO 8601 format. Example: "-06:00"
     *
     * A great resource for experimenting with date formats is nsdateformatter.com developed by Ben Scheirman.
     * @see https://docs.scriptable.app/dateformatter/#dateformat
     */
    dateFormat: string;

    /**
     * _Locale to use when formatting._
     *
     * The locale should be specified using a string identifier, e.g. "en", "it" or "da". When no locale is set, the formatter will use the current locale of the device.
     * @see https://docs.scriptable.app/dateformatter/#locale
     */
    locale: string;

    /**
     * _Converts between dates and strings._
     *
     * To convert between dates and their textual representation, use the `string()` and `date()` functions.
     * @see https://docs.scriptable.app/dateformatter/#-new-dateformatter
     */
    constructor();

    /**
     * _Creates a string from a date._
     * @param date - The date to convert to a string.
     * @see https://docs.scriptable.app/dateformatter/#-string
     */
    string(date: Date): string;

    /**
     * _Creates a date from a string._
     *
     * Uses the date formatters configuration to parse the string into a date. If the string cannot be parsed with the date foramtters configuration, the function will return null.
     * @param str - The string to parse into a date.
     * @see https://docs.scriptable.app/dateformatter/#-date
     */
    date(str: string): string;

    /**
     * _Use no style for the date._
     *
     * This will remove the date from the formatted string.
     * @see https://docs.scriptable.app/dateformatter/#-usenodatestyle
     */
    useNoDateStyle(): void;

    /**
     * _Use a short style for the date._
     *
     * Dates with a short style are typically numeric only e.g. "08/23/19".
     * @see https://docs.scriptable.app/dateformatter/#-useshortdatestyle
     */
    useShortDateStyle(): void;

    /**
     * _Use a medium style for the date._
     *
     * Dates with a medium style usually includes abbreviations, e.g. "Aug 23, 2019".
     * @see https://docs.scriptable.app/dateformatter/#-usemediumdatestyle
     */
    useMediumDateStyle(): void;

    /**
     * _Use a long style for the date._
     *
     * Dates with a long style usually includes a full text, e.g. "August 23, 2019".
     * @see https://docs.scriptable.app/dateformatter/#-uselongdatestyle
     */
    useLongDateStyle(): void;

    /**
     * _Use a full style for the date._
     *
     * Dates with a full style includes all details, e.g. "Friday, August 23, 2019 AD".
     * @see https://docs.scriptable.app/dateformatter/#-usefulldatestyle
     */
    useFullDateStyle(): void;

    /**
     * _Use no style for the time._
     *
     * This will remove the time from the formatted string.
     * @see https://docs.scriptable.app/dateformatter/#-usenotimestyle
     */
    useNoTimeStyle(): void;

    /**
     * _Use a short style for the time._
     *
     * Times with a short style are typically numeric only but also includes the period for 12-hour clocks, e.g. "7:17 PM".
     * @see https://docs.scriptable.app/dateformatter/#-useshorttimestyle
     */
    useShortTimeStyle(): void;

    /**
     * _Use a short style for the time._
     *
     * Times with a medium style usually includes abbreviations, e.g. "7:16:42 PM".
     * @see https://docs.scriptable.app/dateformatter/#-usemediumtimestyle
     */
    useMediumTimeStyle(): void;

    /**
     * _Use a long style for the time._
     *
     * Times with a long style usually includes a full text, e.g. "7:16:42 PM PST".
     * @see https://docs.scriptable.app/dateformatter/#-uselongtimestyle
     */
    useLongTimeStyle(): void;

    /**
     * _Use a full style for the time._
     *
     * Times with a full style includes all details, e.g. "7:16:42 PM Pacific Standard Time".
     * @see https://docs.scriptable.app/dateformatter/#-usefulltimestyle
     */
    useFullTimeStyle(): void;
}

/**
 * _Presents a date picker._
 *
 * Use the date picker to present a view for selecting a date.
 *
 * The date picker can be configured towards picking a date with or without time, just a time or picking hours and minutes for a timer.
 * @see https://docs.scriptable.app/datepicker/#-new-datepicker
 */
declare class DatePicker {
    /**
     * _Minimum date that is selected in the picker._
     *
     * The minimum date, along with the maximum date, specifies the valid date range. The minimum and maximum dates are ignored if the minimum date is greater than the maximum date. The
     * dates are also ignored in countdown-timer mode.
     * @see https://docs.scriptable.app/datepicker/#minimumdate
     */
    minimumDate: Date;

    /**
     * _Maximum date that is selected in the picker._
     *
     * The maximum date, along with the minimum date, specifies the valid date range. The minimum and maximum dates are ignored if the minimum date is greater than the maximum date. The
     * dates are also ignored in countdown-timer mode.
     * @see https://docs.scriptable.app/datepicker/#maximumdate
     */
    maximumDate: Date;

    /**
     * _Countdown duration displayed by the date picker._
     *
     * Use this property to get and set the duration of a countdown when calling the `pickCountDownDuration()` function to present the picker. The default value is zero and the maximum
     * value is 23:59 (86,399 seconds).
     * @see https://docs.scriptable.app/datepicker/#countdownduration
     */
    countdownDuration: number;

    /**
     * _Interval at which the date picker displays minutes._
     *
     * Use the property to set the interval of the minute wheel. The default and minimum value is 1 and the maximum value is 30.
     * @see https://docs.scriptable.app/datepicker/#minuteinterval
     */
    minuteInterval: number;

    /**
     * _The initially selected date._
     *
     * Use this property to specify the initially selected date and time when picking a date, a time or both using date picker. If no date is specified, the current date and time will be
     * selected initially.
     *
     * Be aware that this property does not hold the selected date after the date picker has been dismissed. The promises returned by `pickTime()`, `pickDate()` and `PickDateAndTime()`
     * carries the selected date.
     * @see https://docs.scriptable.app/datepicker/#initialdate
     */
    initialDate: Date;

    /**
     * _Presents a date picker._
     *
     * Use the date picker to present a view for selecting a date.
     *
     * The date picker can be configured towards picking a date with or without time, just a time or picking hours and minutes for a timer.
     * @see https://docs.scriptable.app/datepicker/#-new-datepicker
     */
    constructor();

    /**
     * _Presents the date picker displaying hours and minutes._
     *
     * Use the method to pick a time. The date picker will display hours and minutes and, depending on the locale of the device, an AM/PM designation.
     *
     * The returned date will be the current date with the hour and minute set to the selected values. Use the `initialDate` property to set the initially selected date.
     * @see https://docs.scriptable.app/datepicker/#-picktime
     */
    pickTime(): Promise<Date>;

    /**
     * _Presents the date picker displaying day, month and year._
     *
     * Use the method to pick a date. The date picker will display the day, month and year. Use the `initialDate` property to set the initially selected date.
     * @see https://docs.scriptable.app/datepicker/#-pickdate
     */
    pickDate(): Promise<Date>;

    /**
     * _Presents the date picker displaying date and time._
     *
     * Use the method to pick a date and a time. The date picker will display the day, month, year, hour, minutes and, depending on the locale of the device, an AM/PM designation. Use the
     * `initialDate` property to set the initially selected date.
     * @see https://docs.scriptable.app/datepicker/#-pickdateandtime
     */
    pickDateAndTime(): Promise<Date>;

    /**
     * _Presents the date picker for selecting the duration of a countdown._
     *
     * Use the method to pick the duration of a countdown, e.g. a timer. The date picker will display hours and minutes. Use the `countdownDuration` property to set the initially selected
     * duration.
     * @see https://docs.scriptable.app/datepicker/#-pickcountdownduration
     */
    pickCountdownDuration(): Promise<number>;
}

/**
 * _Provides information about the device._
 * @see https://docs.scriptable.app/device
 */
declare var Device: {
    /**
     * _Name identifying the device._
     *
     * You can find and edit the name of your device in the system settings.
     * @see https://docs.scriptable.app/device/#name
     */
    name(): string;

    /**
     * _Name of the operating system:_
     * @see https://docs.scriptable.app/device/#systemname
     */
    systemName(): string;

    /**
     * _Version of the operating system._
     * @see https://docs.scriptable.app/device/#systemversion
     */
    systemVersion(): string;

    /**
     * _Model of the device, e.g. "iPhone"._
     * @see https://docs.scriptable.app/device/#model
     */
    model(): string;

    /**
     * _Whether the device is a phone._
     *
     * You can use this property to choose behavior of a script depending on whether its running on a phone or a pad.
     * @see https://docs.scriptable.app/device/#isphone
     */
    isPhone(): boolean;

    /**
     * _Whether the device is a pad._
     *
     * You can use this property to choose behavior of a script depending on whether its running on a phone or a pad.
     * @see https://docs.scriptable.app/device/#ispad
     */
    isPad(): boolean;

    /**
     * _Size of the screen._
     *
     * The value is measured in points. For an explanation of the relationship between points and pixels, see the documentation of the `screenScale()` method. The value takes the device
     * rotation into account, so the value will vary between portrait and landscape.
     * @see https://docs.scriptable.app/device/#screensize
     */
    screenSize(): Size;

    /**
     * _Resolution of the screen._
     *
     * The value is measured in pixels. The value does not take the rotation of the deviec into account.
     * @see https://docs.scriptable.app/device/#screenresolution
     */
    screenResolution(): Size;

    /**
     * _Scale of the screen._
     *
     * Standard resolution displays have a scale of 1.0 where one point on the screen equals one pixel. Retina displays will have a scale factor of 2.0 or 3.0 where one point on the
     * screen is four or nine pixels, respectively.
     * @see https://docs.scriptable.app/device/#screenscale
     */
    screenScale(): number;

    /**
     * _Brightness of the screen in percentage._
     *
     * The value range from 0 to 1. To set the screen brightness, refer to the `setScreenBrightness()` function.
     * @see https://docs.scriptable.app/device/#screenbrightness
     */
    screenBrightness(): number;

    /**
     * _Whether the device is in portrait with the home button or home indicator at the bottom._
     * @see https://docs.scriptable.app/device/#isinportrait
     */
    isInPortrait(): boolean;

    /**
     * _Whether the device is in portrait but upside down with the home button or home indicator at the top._
     * @see https://docs.scriptable.app/device/#isinportraitupsidedown
     */
    isInPortraitUpsideDown(): boolean;

    /**
     * _Whether the device is in landscape with the home button or home indicator on the right side._
     * @see https://docs.scriptable.app/device/#isinlandscapeleft
     */
    isInLandscapeLeft(): boolean;

    /**
     * _Whether the device is in landscape with the home button or home indicator on the left side._
     * @see https://docs.scriptable.app/device/#isinlandscaperight
     */
    isInLandscapeRight(): boolean;

    /**
     * _Whether the device is lying parallel to the ground with the screen facing upwards._
     * @see https://docs.scriptable.app/device/#isfaceup
     */
    isFaceUp(): boolean;

    /**
     * _Whether the device is lying parallel to the ground with the screen facing downwards._
     * @see https://docs.scriptable.app/device/#isfacedown
     */
    isFaceDown(): boolean;

    /**
     * _Current battery level._
     *
     * The value is in percentage ranging between 0 and 1.
     * @see https://docs.scriptable.app/device/#batterylevel
     */
    batteryLevel(): number;

    /**
     * _Whether the device is being not plugged into power and thus discharging._
     * @see https://docs.scriptable.app/device/#isdischarging
     */
    isDischarging(): boolean;

    /**
     * _Whether the device is being charged._
     * @see https://docs.scriptable.app/device/#ischarging
     */
    isCharging(): boolean;

    /**
     * _Whether the device is fully charged._
     * @see https://docs.scriptable.app/device/#isfullycharged
     */
    isFullyCharged(): boolean;

    /**
     * _The preferred langauges._
     *
     * The list is ordered according to the language preferences specified in the system settings.
     * @see https://docs.scriptable.app/device/#preferredlanguages
     */
    preferredLanguages(): string[];

    /**
     * _Identifier for the device locale._
     * @see https://docs.scriptable.app/device/#locale
     */
    locale(): string;

    /**
     * _Identifier for the device language._
     * @see https://docs.scriptable.app/device/#language
     */
    language(): string;

    /**
     * _Whether the device is using dark appearance._
     *
     * This API is not supported in widgets.
     * @see https://docs.scriptable.app/device/#isusingdarkappearance
     */
    isUsingDarkAppearance(): boolean;

    /**
     * _The device volume._
     *
     * The value range from 0 to 1.
     * @see https://docs.scriptable.app/device/#volume
     */
    volume(): number;

    /**
     * _Sets the brightness of the screen._
     *
     * The value range from 0 to 1. To get the screen brightness, refer to the `screenBrightness()` function.
     * @param percentage - Percentage to set the screen brightness to. Value between 0 and 1.
     * @see https://docs.scriptable.app/device/#setscreenbrightness
     */
    setScreenBrightness(percentage: number): void;
};

/**
 * _Presents an interface for dictation._
 * @see https://docs.scriptable.app/dictation
 */
declare var Dictation: {
    /**
     * _Starts dictation._
     *
     * Presents an interface that shows the dictated string. Press "Done" when you are done dictating the text.
     * @param locale - Optional string identifier that specifies the language to dictate in. E.g. "en" for English, "it" for Italian and "da" for Danish. Defaults to the locale of the
     * device.
     * @see https://docs.scriptable.app/dictation/#start
     */
    start(locale?: string): Promise<string>;
};

/**
 * _Presents a document picker._
 * @see https://docs.scriptable.app/documentpicker
 */
declare var DocumentPicker: {
    /**
     * _Opens a document._
     *
     * Presents a document picker for opening a document from the Files app. It is up to the user to specify which types of files can be opened. Types are specified as UTIs, e.g.
     * "public.plain-text" or "public.image". If you want to open a file of any file type, see the `openFile` function and if you want to open a folder, see the `openFolder` function.
     *
     * When fulfilled the returned promise will provide the paths for the selected documents. Use an instance of FileManager to read the contents of the files.
     * @param types - Types of files to select. Specified using UTIs. Defaults to all files.
     * @see https://docs.scriptable.app/documentpicker/#open
     */
    open(types?: string[]): Promise<string[]>;

    /**
     * _Opens a file of any file type._
     *
     * Presents a document picker for opening a file from the Files app. The document picker will allow the selection of any file.
     *
     * When fulfilled the returned promise will provide the paths for the selected files.
     * @see https://docs.scriptable.app/documentpicker/#openfile
     */
    openFile(): Promise<string>;

    /**
     * _Opens a folder._
     *
     * Presents a document picker for opening a folder from the Files app.
     *
     * When fulfilled the returned promise will provide the paths for the selected files.
     * @see https://docs.scriptable.app/documentpicker/#openfolder
     */
    openFolder(): Promise<string>;

    /**
     * _Exports a file to a document._
     *
     * Exports the file to a document with. A picker prompting for a destination to export the document to is presented.
     * @param path - Path of the file to export.
     * @see https://docs.scriptable.app/documentpicker/#export
     */
    export(path: string): Promise<string[]>;

    /**
     * _Exports a string to a document._
     *
     * Exports a string to a new file. The name of the file can optionally be specified. A picker prompting for a destination to export the document to is presented.
     * @param content - Content of the document to export.
     * @param name - Optional name of the document to export.
     * @see https://docs.scriptable.app/documentpicker/#exportstring
     */
    exportString(content: string, name?: string): Promise<string[]>;

    /**
     * _Exports an image._
     *
     * Exports an image to a new file. The name of the file can optionally be specified. A picker prompting for a destination to export the document to is presented.
     * @param image - Image to export.
     * @param name - Optional name of the image to export.
     * @see https://docs.scriptable.app/documentpicker/#exportimage
     */
    exportImage(image: Image, name?: string): Promise<string[]>;

    /**
     * _Exports data._
     *
     * Exports data to a new file. The name of the file can optionally be specified. A picker prompting for a destination to export the document to is presented.
     * @param data - Data to export.
     * @param name - Optional name of the image to export.
     * @see https://docs.scriptable.app/documentpicker/#exportdata
     */
    exportData(data: Data, name?: string): Promise<string[]>;
};

/**
 * _Context for drawing images._
 *
 * Constructs a new canvas to draw images, shapes and texts on.
 * @see https://docs.scriptable.app/drawcontext/#-new-drawcontext
 */
declare class DrawContext {
    /**
     * _Size of canvas._
     *
     * Specifies the size of the canvas on which you are drawing. The image returned by getImage() will have this exact size, except if respectScreenScale is true.
     * @see https://docs.scriptable.app/drawcontext/#size
     */
    size: Size;

    /**
     * _Enable to respect the scale of the screen._
     *
     * Devices have a screen scale that is used to convert between the logical coordinate space and the device coordinate space. For example, retina screens have a screen scale of 2 or 3
     * meaning that one point in the logical coordinate space is represented by four or nine pixels. Respecting the screen scale will multiply the specified size of the canvas by the
     * screen scale. For example a canvas of size 200 by 200 will be 600 by 600 when the image is rendered on a retina screen with a screen scale of 3. When respecting the screen scale is
     * disabled, you may experience that your images looks blurry because essentially the size you have specified will be stretched when rendered on the screen. Default is false.
     * @see https://docs.scriptable.app/drawcontext/#respectscreenscale
     */
    respectScreenScale: boolean;

    /**
     * _Determines whether the context is opaque._
     *
     * When enabled your image will be rendered opaque. Default is true.
     * @see https://docs.scriptable.app/drawcontext/#opaque
     */
    opaque: boolean;

    /**
     * _Context for drawing images._
     *
     * Constructs a new canvas to draw images, shapes and texts on.
     * @see https://docs.scriptable.app/drawcontext/#-new-drawcontext
     */
    constructor();

    /**
     * _Retrieves the image._
     *
     * Call this to retrieve the image you have drawn to the context. Note that this should be called before calling endDrawing().
     * @see https://docs.scriptable.app/drawcontext/#-getimage
     */
    getImage(): Image;

    /**
     * _Draws an image in the specified rect._
     *
     * Draws the image in the rectangle. The image will be scaled to fit within the rectangle.
     * @param image - Image to draw.
     * @param rect - Rectangle to draw the image in.
     * @see https://docs.scriptable.app/drawcontext/#-drawimageinrect
     */
    drawImageInRect(image: Image, rect: Rect): void;

    /**
     * _Draws an image at the specified point._
     *
     * Draws the image at the point. The top-left corner of the image will be drawn at the specified point.
     * @param image - Image to draw.
     * @param point - Point at which to draw top-left corner of the image.
     * @see https://docs.scriptable.app/drawcontext/#-drawimageatpoint
     */
    drawImageAtPoint(image: Image, point: Point): void;

    /**
     * _Sets the fill color._
     *
     * Sets the fill color to be used when performing a fill operation. Any fill operation performed afterwards will fill with the specified color until another call to setFillColor is
     * made.
     * @param color - Color to set for filling.
     * @see https://docs.scriptable.app/drawcontext/#-setfillcolor
     */
    setFillColor(color: Color): void;

    /**
     * _Sets the stroke color._
     *
     * Sets the stroke color to be used when performing a stroke operation. Any stroke operation performed afterwards will stroke with the specified color until another call to
     * setStrokeColor is made.
     * @param color - Color to set for stroking.
     * @see https://docs.scriptable.app/drawcontext/#-setstrokecolor
     */
    setStrokeColor(color: Color): void;

    /**
     * _Sets the line width for stroking._
     *
     * Sets the line width to be used when performing a stroke operation.
     * @param width - Line width to use for stroking.
     * @see https://docs.scriptable.app/drawcontext/#-setlinewidth
     */
    setLineWidth(width: number): void;

    /**
     * _Fills a rectangle._
     *
     * Fills the rectangle with the color set when calling setFillColor.
     * @param rect - Rectangle to fill.
     * @see https://docs.scriptable.app/drawcontext/#-fill
     */
    fill(rect: Rect): void;

    /**
     * _Fills a rectangle._
     *
     * Fills the rectangle with the color set when calling setFillColor.
     * @param rect - Rectangle to fill.
     * @see https://docs.scriptable.app/drawcontext/#-fillrect
     */
    fillRect(rect: Rect): void;

    /**
     * _Fills an ellipse._
     *
     * Fills the ellipse that fits within the supplied rectangle with the color set when calling setFillColor.
     * @param rect - Rectangle incapsulating the ellipse to fill.
     * @see https://docs.scriptable.app/drawcontext/#-fillellipse
     */
    fillEllipse(rect: Rect): void;

    /**
     * _Strokes a rectangle._
     *
     * Draws a line around the rectangle using the color set when calling setStrokeColor. The line will have the width set when calling setLineWidth.
     * @param rect - Rectangle to stroke.
     * @see https://docs.scriptable.app/drawcontext/#-stroke
     */
    stroke(rect: Rect): void;

    /**
     * _Strokes a rectangle._
     *
     * Draws a line around the rectangle using the color set when calling setStrokeColor. The line will have the width set when calling setLineWidth.
     * @param rect - Rectangle to stroke.
     * @see https://docs.scriptable.app/drawcontext/#-strokerect
     */
    strokeRect(rect: Rect): void;

    /**
     * _Strokes an ellipse._
     *
     * Draws a line around the ellipse that fits within the supplied rectangle. The line will have the color set when calling setStrokeColor and the width set when calling setLineWidth.
     * @param rect - Rectangle incapsulating the ellipse to stroke.
     * @see https://docs.scriptable.app/drawcontext/#-strokeellipse
     */
    strokeEllipse(rect: Rect): void;

    /**
     * _Adds a path to the context._
     *
     * After adding a path to the context, the path can be stroked or filled by calling strokePath and fillPath. Note that only the path that was added latest will be affected by calls to
     * strokePath and fillPath.
     * @param path - Path to add to the context.
     * @see https://docs.scriptable.app/drawcontext/#-addpath
     */
    addPath(path: Path): void;

    /**
     * _Strokes the path that was added the latest._
     *
     * The path that was added the latest to the context is stroked with the color set using setStrokeColor and the line width set using setLineWidth.
     * @see https://docs.scriptable.app/drawcontext/#-strokepath
     */
    strokePath(): void;

    /**
     * _Fills the path that was added the latest._
     *
     * The path that was latest added to the context is filled with the color set using setFillColor.
     * @see https://docs.scriptable.app/drawcontext/#-fillpath
     */
    fillPath(): void;

    /**
     * _Draws text at a position._
     *
     * Call this to draw a text string to the context. The top-left of the text will be drawn at the specified position.
     * @param text - Text to draw.
     * @param pos - Position to draw the top-left of the text.
     * @see https://docs.scriptable.app/drawcontext/#-drawtext
     */
    drawText(text: string, pos: Point): void;

    /**
     * _Draws text in a rectangle._
     *
     * Call this to draw a text string in a rectangle. Specify how the text should be aligned within the rectangle by calling setTextAlignedLeft, setTextAlignedCenter or
     * setTextAlignedRight before drawing the text.
     * @param text - Text to draw.
     * @param rect - Rectangle to draw text in.
     * @see https://docs.scriptable.app/drawcontext/#-drawtextinrect
     */
    drawTextInRect(text: string, rect: Rect): void;

    /**
     * _Sets the font to use when drawing text._
     *
     * Sets the font to be used when drawing texts to the context.
     * @param font - Font to use when drawing text.
     * @see https://docs.scriptable.app/drawcontext/#-setfont
     */
    setFont(font: Font): void;

    /**
     * _Sets the text color used when drawing text._
     *
     * Sets the text color to be used when drawing text strings to the context.
     * @param color - Color to use when drawing text.
     * @see https://docs.scriptable.app/drawcontext/#-settextcolor
     */
    setTextColor(color: Color): void;

    /**
     * _Specifies that texts should be left aligned._
     *
     * Sets text alignment to left. Texts drawn after calling this will be left aligned inside the provided rectangle.
     * @see https://docs.scriptable.app/drawcontext/#-settextalignedleft
     */
    setTextAlignedLeft(): void;

    /**
     * _Specifies that texts should be center aligned._
     *
     * Sets text alignment to center. Texts drawn after calling this will be center aligned inside the provided rectangle.
     * @see https://docs.scriptable.app/drawcontext/#-settextalignedcenter
     */
    setTextAlignedCenter(): void;

    /**
     * _Specifies that texts should be right aligned._
     *
     * Sets text alignment to right. Texts drawn after calling this will be right aligned inside the provided rectangle.
     * @see https://docs.scriptable.app/drawcontext/#-settextalignedright
     */
    setTextAlignedRight(): void;
}

declare namespace FileManager {
    interface AllFileBookmarks {
        name: string;
        source: string;
    }
}

/**
 * _Read and write files on disk._
 * @see https://docs.scriptable.app/filemanager
 */
declare class FileManager {
    /**
     * _Creates a local FileManager._
     *
     * Creates a file manager for operating with files stored locally.
     * @see https://docs.scriptable.app/filemanager/#local
     */
    static local(): FileManager;

    /**
     * _Creates an iCloud FileManager._
     *
     * Creates a file manager for operating with files stored in iCloud. iCloud must be enabled on the device in order to use this.
     * @see https://docs.scriptable.app/filemanager/#icloud
     */
    static iCloud(): FileManager;

    /**
     * _Read contents of a file as data._
     *
     * Reads the contents of the file specified by the file path as raw data. To read the file as a string see `readString(filePath)` and to read it as an image see `readImage(filePath)`.
     *
     * The function will error if the file does not exist or if it exists in iCloud but has not been download. Use `fileExists(filePath)` to check if a file exists and
     * `downloadFileFromiCloud(filePath)` to download the file. Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
     * @param filePath - Path of the file to read.
     * @see https://docs.scriptable.app/filemanager/#-read
     */
    read(filePath: string): Data;

    /**
     * _Read contents of a file as string._
     *
     * The function will error if the file does not exist or if it exists in iCloud but has not been download. Use `fileExists(filePath)` to check if a file exists and
     * `downloadFileFromiCloud(filePath)` to download the file. Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
     * @param filePath - Path of the file to read.
     * @see https://docs.scriptable.app/filemanager/#-readstring
     */
    readString(filePath: string): string;

    /**
     * _Read contents of a file as an image._
     *
     * Reads the contents of the file specified by the file path and converts it to an image.
     *
     * The function will error if the file does not exist or if it exists in iCloud but has not been download. Use `fileExists(filePath)` to check if a file exists and
     * `downloadFileFromiCloud(filePath)` to download the file. Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
     * @param filePath - Path of the file to read.
     * @see https://docs.scriptable.app/filemanager/#-readimage
     */
    readImage(filePath: string): Image;

    /**
     * _Write data to a file._
     * @param filePath - Path of file to write to.
     * @param content - Data to write to disk.
     * @see https://docs.scriptable.app/filemanager/#-write
     */
    write(filePath: string, content: Data): void;

    /**
     * _Write a string to a file._
     *
     * Writes the content to the specified file path on disk. If the file does not already exist, it will be created. If the file already exists the contents of the file will be
     * overwritten with the new content.
     * @param filePath - Path of file to write to.
     * @param content - Content to write to disk.
     * @see https://docs.scriptable.app/filemanager/#-writestring
     */
    writeString(filePath: string, content: string): void;

    /**
     * _Write an image to a file._
     *
     * Writes the image to the specified file path on disk. If the file does not already exist, it will be created. If the file already exists the contents of the file will be overwritten
     * with the new content.
     * @param filePath - Path of file to write to.
     * @param image - Image to write to disk.
     * @see https://docs.scriptable.app/filemanager/#-writeimage
     */
    writeImage(filePath: string, image: Image): void;

    /**
     * _Removes a file._
     *
     * Removes the file at the specified path. Use with caution. Removed files cannot be restored.
     * @param filePath - Path of file to remove.
     * @see https://docs.scriptable.app/filemanager/#-remove
     */
    remove(filePath: string): void;

    /**
     * _Moves a file._
     *
     * Moves the file from the source path to the destination path. Caution: This operation will replace any existing file at the the destination.
     * @param sourceFilePath - Path of the file to move.
     * @param destinationFilePath - Path to move the file to.
     * @see https://docs.scriptable.app/filemanager/#-move
     */
    move(sourceFilePath: string, destinationFilePath: string): void;

    /**
     * _Copies a file._
     *
     * Copies the file from the source path to the destination path. If a file already exists at the destination file path, the operation will fail and the file will not be copied.
     * @param sourceFilePath - Path of the file to copy.
     * @param destinationFilePath - Path to copy the file to.
     * @see https://docs.scriptable.app/filemanager/#-copy
     */
    copy(sourceFilePath: string, destinationFilePath: string): void;

    /**
     * _Checks if the file exists._
     *
     * Checks if the file exists at the specified file path. Checking this before moving or copying to a destination can be a good idea as those operations will replace any existing file
     * at the destination file path.
     * @param filePath - File path to examine.
     * @see https://docs.scriptable.app/filemanager/#-fileexists
     */
    fileExists(filePath: string): boolean;

    /**
     * _Checks if a path points to a directory._
     * @param path - Path to examine.
     * @see https://docs.scriptable.app/filemanager/#-isdirectory
     */
    isDirectory(path: string): boolean;

    /**
     * _Creates a directory at the specified path._
     *
     * You can optionally create all intermediate directories.
     * @param path - Path of directory to create.
     * @param intermediateDirectories - Whether to create all intermediate directories. Defaults to false.
     * @see https://docs.scriptable.app/filemanager/#-createdirectory
     */
    createDirectory(path: string, intermediateDirectories?: boolean): void;

    /**
     * _Path of temporary directory._
     *
     * Used to retrieve the path of a temporary directory on disk. The operating system may at any time delete files stored in this directory and therefore you should not rely on it for
     * long time storage. If you need long time storage, see documentsDirectory() or libraryDirectory(). This directory is not shared between the app, the action extension and Siri.
     * @see https://docs.scriptable.app/filemanager/#-temporarydirectory
     */
    temporaryDirectory(): string;

    /**
     * _Path of documents directory._
     *
     * Used to retrieve the path to the documents directory. Your scripts are stored in this directory. If you have iCloud enabled, your scripts will be stored in the documents directory
     * in iCloud otherwise they will be stored in the local documents directory. The directory can be used for long time storage. Documents stored in this directory can be accessed using
     * the Files app. Files stored in the local documents directory will not appear in the Files app.
     * @see https://docs.scriptable.app/filemanager/#-documentsdirectory
     */
    documentsDirectory(): string;

    /**
     * _Path of library directory._
     *
     * Used to retrieve the path to the library directory. The directory can be used for long time storage. Documents stored in this directory cannot be accessed using the Files app.
     * @see https://docs.scriptable.app/filemanager/#-librarydirectory
     */
    libraryDirectory(): string;

    /**
     * _Joins two path components._
     *
     * Joins two paths to created one path. For example to join the path to a directory with the name of a file. This is the suggested approach for creating new file paths passed to the
     * read and write functions of a FileManager.
     * @param lhsPath - Left-hand side part of the new path.
     * @param rhsPath - Right-hand side part of the new path.
     * @see https://docs.scriptable.app/filemanager/#-joinpath
     */
    joinPath(lhsPath: string, rhsPath: string): string;

    /**
     * _Reads all tags from a file._
     *
     * The tags are read from the file at the specified path. Tags can either be read, added and removed using the Files app by using the APIs provided by a FileManager.
     *
     * The function will error if the file does not exist or if it exists in iCloud but has not been download. Use `fileExists(filePath)` to check if a file exists and
     * `downloadFileFromiCloud(filePath)` to download the file. Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
     * @param filePath - Path of file to read tags from.
     * @see https://docs.scriptable.app/filemanager/#-alltags
     */
    allTags(filePath: string): string[];

    /**
     * _Adds a tag to a file._
     *
     * A tag can only be added to a file once. It is not possible to specify a color for the tag. You can create the tags using the Files app to specify the color and then add them to
     * files afterwards using the FileManager API.
     *
     * The function will error if the file does not exist or if it exists in iCloud but has not been download. Use `fileExists(filePath)` to check if a file exists and
     * `downloadFileFromiCloud(filePath)` to download the file. Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
     * @param filePath - Path of file to add the tag to.
     * @param tag - Tag to add. This can be an existing tag or a new tag.
     * @see https://docs.scriptable.app/filemanager/#-addtag
     */
    addTag(filePath: string, tag: string): void;

    /**
     * _Removes a tag from a file._
     *
     * The function will error if the file does not exist or if it exists in iCloud but has not been download. Use `fileExists(filePath)` to check if a file exists and
     * `downloadFileFromiCloud(filePath)` to download the file. Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
     * @param filePath - Path of file to remove the tag from.
     * @param tag - Tag to remove.
     * @see https://docs.scriptable.app/filemanager/#-removetag
     */
    removeTag(filePath: string, tag: string): void;

    /**
     * _Reads an extended attribute from a file._
     *
     * Extended attributes are metadata that can be stored on a file. Note that extended attributes are not synced with iCloud.
     *
     * The function will return `null` if the attribute does not exist.
     *
     * The function will error if the file does not exist or if it exists in iCloud but has not been download. Use `fileExists(filePath)` to check if a file exists and
     * `downloadFileFromiCloud(filePath)` to download the file. Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
     * @param filePath - Path of file to read extended attribute from.
     * @param name - Name of the extended attribute to read.
     * @see https://docs.scriptable.app/filemanager/#-readextendedattribute
     */
    readExtendedAttribute(filePath: string, name: string): string;

    /**
     * _Writes an extended attribute to a file._
     *
     * Extended attributes are metadata that can be stored on a file. Note that extended attributes are not synced with iCloud.
     *
     * The function will error if the file does not exist or if it exists in iCloud but has not been download. Use `fileExists(filePath)` to check if a file exists and
     * `downloadFileFromiCloud(filePath)` to download the file. Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
     * @param filePath - Path of file to add an extended attribute to.
     * @param value - Value of the extended attribute.
     * @param name - Name of the extended attribute. This is used to retrieve the value at a later point.
     * @see https://docs.scriptable.app/filemanager/#-writeextendedattribute
     */
    writeExtendedAttribute(filePath: string, value: string, name: string): void;

    /**
     * _Removes an extended attribute from a file._
     *
     * Extended attributes are metadata that can be stored on a file. Note that extended attributes are not synced with iCloud.
     *
     * The function will error if the file does not exist or if it exists in iCloud but has not been download. Use `fileExists(filePath)` to check if a file exists and
     * `downloadFileFromiCloud(filePath)` to download the file. Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
     * @param filePath - Path of file to add an extended attribute to.
     * @param name - Name of the extended attribute to remove.
     * @see https://docs.scriptable.app/filemanager/#-removeextendedattribute
     */
    removeExtendedAttribute(filePath: string, name: string): void;

    /**
     * _Reads all extended attributes on a file._
     *
     * Extended attributes are metadata that can be stored on a file. Note that extended attributes are not synced with iCloud.
     * @param filePath - Path of file to read extended attributes from.
     * @see https://docs.scriptable.app/filemanager/#-allextendedattributes
     */
    allExtendedAttributes(filePath: string): string[];

    /**
     * _Gets the UTI of the specified file._
     *
     * The Uniform Type Identifier is a string that identifies the type of file.
     * @param filePath - Path of file to get UTI of.
     * @see https://docs.scriptable.app/filemanager/#-getuti
     */
    getUTI(filePath: string): string;

    /**
     * _Lists content of directory._
     *
     * Lists all the contents in the specified directory. The returned array contains file paths to all files in the directory.
     * @param directoryPath - Path to directory.
     * @see https://docs.scriptable.app/filemanager/#-listcontents
     */
    listContents(directoryPath: string): string[];

    /**
     * _Get name of a file._
     *
     * Takes a file path and returns the name of the file. Also supports getting the name of a directory. The returned file name optionally includes the extension of the file.
     * @param filePath - path of file to get name of.
     * @param includeFileExtension - Whether or not the file extension should be included. Defaults to false.
     * @see https://docs.scriptable.app/filemanager/#-filename
     */
    fileName(filePath: string, includeFileExtension?: boolean): string;

    /**
     * _Get extension of a file._
     *
     * Takes a file path and returns the extension of the file, e.g. ".jpg" or ".js". Returns en empty string for directories.
     * @param filePath - Path of file to get extension from.
     * @see https://docs.scriptable.app/filemanager/#-fileextension
     */
    fileExtension(filePath: string): string;

    /**
     * _Get path to a bookmarked file or folder._
     *
     * Gets the path to a bookmarked file or filder. Use file bookmarks to access files and folders outside Scriptables documents directory.
     *
     * You can edit your file bookmarks from Scriptables settings.
     *
     * The function will throw an error if the bookmark doesn't exist.
     *
     * Please beware that bookmarks created from Scriptables settings only can be used when running a script in the app and not from the Share Sheet, Siri and Shortcuts. If you wish to
     * use a bookmark from Siri or the Shortcuts app, the bookmark must be created using Scriptables "Create File Bookmark" shortcut action using the Shortcuts app.
     * @param name - Name of bookmark to create path for.
     * @see https://docs.scriptable.app/filemanager/#-bookmarkedpath
     */
    bookmarkedPath(name: string): string;

    /**
     * _Check if a bookmark exists._
     *
     * Checks if a file bookmark exists with the specified name.
     *
     * You can edit your file bookmarks from Scriptables settings.
     *
     * Please beware that bookmarks created from Scriptables settings only can be used when running a script in the app and not from the Share Sheet, Siri and Shortcuts. If you wish to
     * use a bookmark from Siri or the Shortcuts app, the bookmark must be created using Scriptables "Create File Bookmark" shortcut action using the Shortcuts app.
     * @param name - Name of bookmark.
     * @see https://docs.scriptable.app/filemanager/#-bookmarkexists
     */
    bookmarkExists(name: string): boolean;

    /**
     * _Download file from iCloud if necessary._
     *
     * Downloads the file from iCloud if it has not already been downloaded. If you pass in a path to a file that is not stored in iCloud, the returned promise will be resolved immediately
     * making it safe to pass in any file path.
     * @param filePath - Path of file to download from iCloud.
     * @see https://docs.scriptable.app/filemanager/#-downloadfilefromicloud
     */
    downloadFileFromiCloud(filePath: string): Promise<void>;

    /**
     * _Checks if a file is stored in iCloud._
     *
     * Checks if a file is stored in iCloud or locally on the device. The function returns false if the file does not exist. Check if a file exists using `fileExists(filePath)`
     * @param filePath - Path of file.
     * @see https://docs.scriptable.app/filemanager/#-isfilestoredinicloud
     */
    isFileStoredIniCloud(filePath: string): boolean;

    /**
     * _Checks if a file has been downloaded._
     *
     * If a file is stored in iCloud and it has not been downloaded, this function returns false. In that case, the file can be downloaded using `downloadFileFromiCloud(filePath`. If the
     * file is not stored in iCloud but rather locally on the device, this function returns true.
     *
     * The function returns false if the file does not exist. Check if a file exists using `fileExists(filePath)`
     * @param filePath - Path of file.
     * @see https://docs.scriptable.app/filemanager/#-isfiledownloaded
     */
    isFileDownloaded(filePath: string): boolean;

    /**
     * _Reads the creation date of a file._
     *
     * The returned value will be null if the creation date cannot be read.
     * @param filePath - Path of file.
     * @see https://docs.scriptable.app/filemanager/#-creationdate
     */
    creationDate(filePath: string): Date;

    /**
     * _Reads the modification date of a file._
     *
     * The returned value will be null if the modification date cannot be read.
     * @param filePath - Path of file.
     * @see https://docs.scriptable.app/filemanager/#-modificationdate
     */
    modificationDate(filePath: string): Date;

    /**
     * _Size of the file in kilobytes._
     *
     * The returned value will be null if the file size cannot be read.
     * @param filePath - Path of file.
     * @see https://docs.scriptable.app/filemanager/#-filesize
     */
    fileSize(filePath: string): number;

    /**
     * _Reads all file bookmarks created in settings._
     *
     * File bookmarks are used to bookmark a file or a folder and read or written to it later. File bookmarks are created from Scriptables settings.
     *
     * This function returns all file bookmarks as an array of objects that take the following form.
     *
     *     {
     *       "name": "My Bookmark",
     *       "source": "host"
     *     }
     *
     * The source can either be `host` for file bookmarks that can be used in the app or `siri_shortcuts` for file bookmarks that can be used in Siri and Shortcuts.
     * @see https://docs.scriptable.app/filemanager/#-allfilebookmarks
     */
    allFileBookmarks(): FileManager.AllFileBookmarks[];
}

/**
 * _Represents a font and text size._
 *
 * Refer to [iosfonts.com](http://iosfonts.com) for a list of the fonts that are available in iOS and iPadOS.
 * @see https://docs.scriptable.app/font/#-new-font
 */
// tslint:disable-next-line no-unnecessary-class
declare class Font {
    /**
     * _Represents a font and text size._
     *
     * Refer to [iosfonts.com](http://iosfonts.com) for a list of the fonts that are available in iOS and iPadOS.
     * @param name - Name of the font.
     * @param size - Size of the font.
     * @see https://docs.scriptable.app/font/#-new-font
     */
    constructor(name: string, size: number);

    /**
     * _Preferred font for large titles._
     * @see https://docs.scriptable.app/font/#largetitle
     */
    static largeTitle(): Font;

    /**
     * _Preferred font for first level hierarchical headings._
     * @see https://docs.scriptable.app/font/#title1
     */
    static title1(): Font;

    /**
     * _Preferred font for second level hierarchical headings._
     * @see https://docs.scriptable.app/font/#title2
     */
    static title2(): Font;

    /**
     * _Preferred font for third level hierarchical headings._
     * @see https://docs.scriptable.app/font/#title3
     */
    static title3(): Font;

    /**
     * _Preferred font for headings._
     * @see https://docs.scriptable.app/font/#headline
     */
    static headline(): Font;

    /**
     * _Preferred font for subheadings._
     * @see https://docs.scriptable.app/font/#subheadline
     */
    static subheadline(): Font;

    /**
     * _Preferred font for body texts._
     * @see https://docs.scriptable.app/font/#body
     */
    static body(): Font;

    /**
     * _Preferred font for callouts._
     * @see https://docs.scriptable.app/font/#callout
     */
    static callout(): Font;

    /**
     * _Preferred font for footnotes._
     * @see https://docs.scriptable.app/font/#footnote
     */
    static footnote(): Font;

    /**
     * _Preferred font for standard captions._
     * @see https://docs.scriptable.app/font/#caption1
     */
    static caption1(): Font;

    /**
     * _Preferred font for alternate captions._
     * @see https://docs.scriptable.app/font/#caption2
     */
    static caption2(): Font;

    /**
     * _Creates a system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#systemfont
     */
    static systemFont(size: number): Font;

    /**
     * _Creates an ultra light system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#ultralightsystemfont
     */
    static ultraLightSystemFont(size: number): Font;

    /**
     * _Creates a thin system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#thinsystemfont
     */
    static thinSystemFont(size: number): Font;

    /**
     * _Creates a light system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#lightsystemfont
     */
    static lightSystemFont(size: number): Font;

    /**
     * _Creates a regular system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#regularsystemfont
     */
    static regularSystemFont(size: number): Font;

    /**
     * _Creates a medium system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#mediumsystemfont
     */
    static mediumSystemFont(size: number): Font;

    /**
     * _Creates a semibold system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#semiboldsystemfont
     */
    static semiboldSystemFont(size: number): Font;

    /**
     * _Creates a bold system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#boldsystemfont
     */
    static boldSystemFont(size: number): Font;

    /**
     * _Creates a heavy system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#heavysystemfont
     */
    static heavySystemFont(size: number): Font;

    /**
     * _Creates a font with the system appearance with the black weight._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#blacksystemfont
     */
    static blackSystemFont(size: number): Font;

    /**
     * _Creates an italic system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#italicsystemfont
     */
    static italicSystemFont(size: number): Font;

    /**
     * _Creates an ultra light monospaced system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#ultralightmonospacedsystemfont
     */
    static ultraLightMonospacedSystemFont(size: number): Font;

    /**
     * _Creates a thin monospaced system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#thinmonospacedsystemfont
     */
    static thinMonospacedSystemFont(size: number): Font;

    /**
     * _Creates a light monospaced system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#lightmonospacedsystemfont
     */
    static lightMonospacedSystemFont(size: number): Font;

    /**
     * _Creates a regular monospaced system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#regularmonospacedsystemfont
     */
    static regularMonospacedSystemFont(size: number): Font;

    /**
     * _Creates a medium monospaced system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#mediummonospacedsystemfont
     */
    static mediumMonospacedSystemFont(size: number): Font;

    /**
     * _Creates a semibold monospaced system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#semiboldmonospacedsystemfont
     */
    static semiboldMonospacedSystemFont(size: number): Font;

    /**
     * _Creates a bold monospaced system font.._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#boldmonospacedsystemfont
     */
    static boldMonospacedSystemFont(size: number): Font;

    /**
     * _Creates a heavy monospaced system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#heavymonospacedsystemfont
     */
    static heavyMonospacedSystemFont(size: number): Font;

    /**
     * _Creates a monospaced system font with the black weight._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#blackmonospacedsystemfont
     */
    static blackMonospacedSystemFont(size: number): Font;

    /**
     * _Creates an ultra light and rounded system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#ultralightroundedsystemfont
     */
    static ultraLightRoundedSystemFont(size: number): Font;

    /**
     * _Creates a thin and rounded system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#thinroundedsystemfont
     */
    static thinRoundedSystemFont(size: number): Font;

    /**
     * _Creates a light and rounded system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#lightroundedsystemfont
     */
    static lightRoundedSystemFont(size: number): Font;

    /**
     * _Creates a regular and rounded system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#regularroundedsystemfont
     */
    static regularRoundedSystemFont(size: number): Font;

    /**
     * _Creates a medium and rounded system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#mediumroundedsystemfont
     */
    static mediumRoundedSystemFont(size: number): Font;

    /**
     * _Creates a semibold and rounded system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#semiboldroundedsystemfont
     */
    static semiboldRoundedSystemFont(size: number): Font;

    /**
     * _Creates a bold and rounded system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#boldroundedsystemfont
     */
    static boldRoundedSystemFont(size: number): Font;

    /**
     * _Creates a heavy and rounded system font._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#heavyroundedsystemfont
     */
    static heavyRoundedSystemFont(size: number): Font;

    /**
     * _Creates a rounded system font with the black weight._
     * @param size - Size of the text.
     * @see https://docs.scriptable.app/font/#blackroundedsystemfont
     */
    static blackRoundedSystemFont(size: number): Font;
}

/**
 * _Manages image data._
 * @see https://docs.scriptable.app/image
 */
declare class Image {
    /**
     * _Size of the image in pixels._
     * @see https://docs.scriptable.app/image/#size
     */
    size: Size;

    /**
     * _Creates an image from file._
     *
     * Loads an image from the specified file path. If the image could not be read, the function will return null.
     * @param filePath - File path to read image from.
     * @see https://docs.scriptable.app/image/#fromfile
     */
    static fromFile(filePath: string): Image;

    /**
     * _Creates an image from raw data._
     *
     * Loads an image from the raw data. If the image could not be read, the function will return null.
     * @param data - Data to read image from.
     * @see https://docs.scriptable.app/image/#fromdata
     */
    static fromData(data: Data): Image;
}

/**
 * _Secure storage for credentials._
 * @see https://docs.scriptable.app/keychain
 */
declare var Keychain: {
    /**
     * _Check if keychain contains a key._
     *
     * Checks if the keychain contains the specified key.
     * @param key - Key to look up in the keychain.
     * @see https://docs.scriptable.app/keychain/#contains
     */
    contains(key: string): boolean;

    /**
     * _Add value for a specified key to keychain._
     *
     * Adds the value to the keychain, assigning it to the specified key. If the key already exists in the keychain, the value is overwritten.
     *
     * Values are securely stored in an encrypted database.
     * @param key - Key which the value should be assigned to.
     * @param value - Value to assign to the specified key.
     * @see https://docs.scriptable.app/keychain/#set
     */
    set(key: string, value: string): void;

    /**
     * _Reads a value from the keychain._
     *
     * Reads the value for the specified key. If the key doesn't exist the method will throw an error. Used the `contains` method to check if a key exists in the keychain.
     * @param key - Key to read value for.
     * @see https://docs.scriptable.app/keychain/#get
     */
    get(key: string): string;

    /**
     * _Remove key from keychain._
     * @param key - Key to remove from the keychain.
     * @see https://docs.scriptable.app/keychain/#remove
     */
    remove(key: string): void;
};

/**
 * _Linear gradient._
 * @see https://docs.scriptable.app/lineargradient/#-new-lineargradient
 */
declare class LinearGradient {
    /**
     * _Colors of the gradient._
     *
     * The array of colors should include the same amount of elements as the gradients `locations` property.
     * @see https://docs.scriptable.app/lineargradient/#colors
     */
    colors: Color[];

    /**
     * _Locations of each color._
     *
     * Each location should be a value in the range of 0 to 1 and indicates the location of each color in the gradients `colors` array.
     *
     * The array of locations should include the same amount of elements as the gradients `colors` property.
     * @see https://docs.scriptable.app/lineargradient/#locations
     */
    locations: number[];

    /**
     * _Linear gradient._
     * @see https://docs.scriptable.app/lineargradient/#-new-lineargradient
     */
    constructor();
}

/**
 * _Widget showing a list of elements._
 *
 * A widget showing a list of elements. Pass the widget to Script.setWidget() to display it on your Home screen.
 * @see https://docs.scriptable.app/listwidget/#-new-listwidget
 */
declare class ListWidget {
    /**
     * _Background color of the widget._
     * @see https://docs.scriptable.app/listwidget/#backgroundcolor
     */
    backgroundColor: Color;

    /**
     * _Background image._
     * @see https://docs.scriptable.app/listwidget/#backgroundimage
     */
    backgroundImage: Image;

    /**
     * _Background gradient._
     * @see https://docs.scriptable.app/listwidget/#backgroundgradient
     */
    backgroundGradient: LinearGradient;

    /**
     * _Spacing between elements._
     *
     * Specifies the spacing between elements in the widget. You can also use the `addSpacer()` function on the widget to add spacing between elements. Defaults to 0.
     * @see https://docs.scriptable.app/listwidget/#spacing
     */
    spacing: number;

    /**
     * _URL to open._
     *
     * The URL will be opened when the widget is tapped. This will override any behavior defined in the configuration of the widget. E.g. if the widget is configured to run the script
     * when interacting with the widget but a URL is set the URL will take precedence.
     * @see https://docs.scriptable.app/listwidget/#url
     */
    url: string;

    /**
     * _Earliest date to refresh the widget._
     *
     * The property indicates when the widget can be refreshed again. The widget will not be refreshed before the date has been reached. It is not guaranteed that the widget will refresh
     * at exactly the specified date.
     *
     * The refresh rate of a widget is partly up to iOS/iPadOS. For example, a widget may not refresh if the device is low on battery or the user is rarely looking at the widget.
     *
     * When the property is `null` the default refresh interval is used. Defaults to `null`.
     * @see https://docs.scriptable.app/listwidget/#refreshafterdate
     */
    refreshAfterDate: Date;

    /**
     * _Widget showing a list of elements._
     *
     * A widget showing a list of elements. Pass the widget to Script.setWidget() to display it on your Home screen.
     * @see https://docs.scriptable.app/listwidget/#-new-listwidget
     */
    constructor();

    /**
     * _Add text to the widget._
     *
     * Adds a text element to the widget. Use the properties on the returned element to style the text.
     * @see https://docs.scriptable.app/listwidget/#-addtext
     */
    addText(text: string): WidgetText;

    /**
     * _Add date to the widget._
     *
     * Adds a date element to the widget. Use the properties on the returned element to style the date.
     * @see https://docs.scriptable.app/listwidget/#-adddate
     */
    addDate(date: Date): WidgetDate;

    /**
     * _Add image to the widget._
     *
     * Adds an image element to the widget. Use the properties on the returned element to style the image.
     * @see https://docs.scriptable.app/listwidget/#-addimage
     */
    addImage(image: Image): WidgetImage;

    /**
     * _Add spacer._
     *
     * Adds a spacer to the widget. This can be used to offset the content vertically in the widget.
     * @param length - Length of the spacer. Pass null to create a spacer with a flexible length.
     * @see https://docs.scriptable.app/listwidget/#-addspacer
     */
    addSpacer(length: number): WidgetSpacer;

    /**
     * _Add stack._
     *
     * Adds a stack to the widget. Stacks layout elements horizontally by default.
     * @see https://docs.scriptable.app/listwidget/#-addstack
     */
    addStack(): WidgetStack;

    /**
     * _Set padding._
     *
     * Sets the padding on each side of the widget.
     * @param top - Padding on the top edge.
     * @param leading - Padding on the leading edge.
     * @param bottom - Padding on the bottom edge.
     * @param trailing - Padding on the trailing edge.
     * @see https://docs.scriptable.app/listwidget/#-setpadding
     */
    setPadding(top: number, leading: number, bottom: number, trailing: number): void;

    /**
     * _Use the default padding._
     *
     * Configure the widget to use the default padding. Any padding previously defined with `setPadding()` will be discarded.
     * @see https://docs.scriptable.app/listwidget/#-usedefaultpadding
     */
    useDefaultPadding(): void;

    /**
     * _Presents a preview of the widget._
     *
     * The widget is presented in its small size.
     *
     * Widgets on the Home screen are updated periodically so while working on your widget you may want to preview it in the app.
     * @see https://docs.scriptable.app/listwidget/#-presentsmall
     */
    presentSmall(): Promise<void>;

    /**
     * _Presents a preview of the widget._
     *
     * The widget is presented in its medium size.
     *
     * Widgets on the Home screen are updated periodically so while working on your widget you may want to preview it in the app.
     * @see https://docs.scriptable.app/listwidget/#-presentmedium
     */
    presentMedium(): Promise<void>;

    /**
     * _Presents a preview of the widget._
     *
     * The widget is presented in its large size.
     *
     * Widgets on the Home screen are updated periodically so while working on your widget you may want to preview it in the app.
     * @see https://docs.scriptable.app/listwidget/#-presentlarge
     */
    presentLarge(): Promise<void>;
}

/**
 * _Fetches your location._
 * @see https://docs.scriptable.app/location
 */
declare var Location: {
    /**
     * _Fetches your location._
     *
     * Your location is fetched using GPS, WiFi and cellular hardware. The object carried by the promise includes the latitude, longitude and altitude as well as the horizontal and
     * vertical accuracy measured in meters.
     * @see https://docs.scriptable.app/location/#current
     */
    current(): Promise<any>;

    /**
     * _Uses best accuracy. This is default._
     *
     * Set this when you want to achieve the best possible accuracy when retrieving your location. This is the default accuracy.
     * @see https://docs.scriptable.app/location/#setaccuracytobest
     */
    setAccuracyToBest(): void;

    /**
     * _Sets accuracy to within ten meters._
     * @see https://docs.scriptable.app/location/#setaccuracytotenmeters
     */
    setAccuracyToTenMeters(): void;

    /**
     * _Sets accuracy to within hundred meters._
     * @see https://docs.scriptable.app/location/#setaccuracytohundredmeters
     */
    setAccuracyToHundredMeters(): void;

    /**
     * _Sets accuracy to within one kilometer._
     * @see https://docs.scriptable.app/location/#setaccuracytokilometer
     */
    setAccuracyToKilometer(): void;

    /**
     * _Sets accuracy to within three kilometers._
     * @see https://docs.scriptable.app/location/#setaccuracytothreekilometers
     */
    setAccuracyToThreeKilometers(): void;

    /**
     * _Performs reverse-geocoding for a location._
     *
     * A reverse-geocoding request fetches information about the current location. The data is delivered by Apples geocoding service.
     * @param latitude - Latitude of coordinate to fetch information about.
     * @param longitude - Longitude of coordinate to fetch information about.
     * @param locale - Optional. Preferred locale to fetch information in. Uses the default locale of the device if null.
     * @see https://docs.scriptable.app/location/#reversegeocode
     */
    reverseGeocode(latitude: number, longitude: number, locale?: string): Array<{ [key: string]: any }>;
};

/**
 * _Sends a mail._
 * @see https://docs.scriptable.app/mail/#-new-mail
 */
declare class Mail {
    /**
     * _Recipients of the mail._
     *
     * Array of recipients to send the mail to. Elements in the array should be e-mail addresses. You will have a chance to modify this before the mail is sent.
     * @see https://docs.scriptable.app/mail/#torecipients
     */
    toRecipients: string[];

    /**
     * _Recipients to set CC on the mail._
     *
     * Array of recipients to set as CC on the mail. Elements in the array should be e-mail addresses. You will have a chance to modify this before the mail is sent.
     * @see https://docs.scriptable.app/mail/#ccrecipients
     */
    ccRecipients: string[];

    /**
     * _Recipients to set BCC on the mail._
     *
     * Array of recipients to set as BCC on the mail. Elements in the array should be e-mail addresses. You will have a chance to modify this before the mail is sent.
     * @see https://docs.scriptable.app/mail/#bccrecipients
     */
    bccRecipients: string[];

    /**
     * _Subject of the mail._
     *
     * Subject of the mail to send. You will have a chance to modify this before the mail is sent.
     * @see https://docs.scriptable.app/mail/#subject
     */
    subject: string;

    /**
     * _Body of the mail._
     *
     * Body of the mail to send. You will have a chance to modify this before the mail is sent.
     * @see https://docs.scriptable.app/mail/#body
     */
    body: string;

    /**
     * _Whether body is HTML._
     *
     * Set to true if the body of the mail is HTML. Defaults to false.
     * @see https://docs.scriptable.app/mail/#isbodyhtml
     */
    isBodyHTML: boolean;

    /**
     * _Preferred email address to use in the from field._
     *
     * Sets the preferred email addressed to use when sending the mail. If no account with the preferred email address is set up, the default email address is used.
     * @see https://docs.scriptable.app/mail/#preferredsendingemailaddress
     */
    preferredSendingEmailAddress: string;

    /**
     * _Sends a mail._
     * @see https://docs.scriptable.app/mail/#-new-mail
     */
    constructor();

    /**
     * _Send the mail._
     *
     * Presents a screen from which the mail can be sent. The mail will not be sent until you have confirmed it from the presented screen.
     * @see https://docs.scriptable.app/mail/#-send
     */
    send(): Promise<void>;

    /**
     * _Adds an image attachment to the mail._
     * @param image - Image to add to the mail.
     * @see https://docs.scriptable.app/mail/#-addimageattachment
     */
    addImageAttachment(image: Image): void;

    /**
     * _Adds a file attachment to the mail._
     * @param filePath - Path of file to add to the mail.
     * @see https://docs.scriptable.app/mail/#-addfileattachment
     */
    addFileAttachment(filePath: string): void;

    /**
     * _Adds a data attachment to the mail._
     *
     * When adding a data attachment to the mail, you are responsible for providing a valid MIME type and filename. It is advised to use `addImageAttachment` and `addFileAttachment`
     * whenever possible.
     * @param data - Data representation of file to add to the mail.
     * @param mimeType - MIME type of file represented by the data.
     * @param filename - Name of the file represented by the data.
     * @see https://docs.scriptable.app/mail/#-adddataattachment
     */
    addDataAttachment(data: Data, mimeType: string, filename: string): void;
}

/**
 * _Sends a message._
 *
 * Constructs a message to be sent either as a text message or an iMessage.
 * @see https://docs.scriptable.app/message/#-new-message
 */
declare class Message {
    /**
     * _Recipients of the message._
     *
     * Array of recipients to send the message to. Elements in the array should be phone numbers. You will have a chance to modify this before the message is sent.
     * @see https://docs.scriptable.app/message/#recipients
     */
    recipients: string[];

    /**
     * _Body of the message._
     *
     * Body of the message to send. You will have a chance to modify this before the message is sent.
     * @see https://docs.scriptable.app/message/#body
     */
    body: string;

    /**
     * _Sends a message._
     *
     * Constructs a message to be sent either as a text message or an iMessage.
     * @see https://docs.scriptable.app/message/#-new-message
     */
    constructor();

    /**
     * _Send the message._
     *
     * Presents a screen from which the message can be sent. The message will not be sent until you have confirmed it from the presented screen.
     * @see https://docs.scriptable.app/message/#-send
     */
    send(): Promise<void>;

    /**
     * _Adds an image attachment to the message._
     * @param image - Image to add to the message.
     * @see https://docs.scriptable.app/message/#-addimageattachment
     */
    addImageAttachment(image: Image): void;

    /**
     * _Adds a file attachment to the message._
     * @param filePath - Path of file to add to the message.
     * @see https://docs.scriptable.app/message/#-addfileattachment
     */
    addFileAttachment(filePath: string): void;

    /**
     * _Adds a data attachment to the message._
     *
     * When adding a data attachment to the message, you are responsible for providing a valid Uniform Type Identifier and filename. It is advised to use `addImageAttachment` and
     * `addFileAttachment` whenever possible.
     * @param data - Data representation of file to add to the message.
     * @param uti - UTI of file represented by the data.
     * @param filename - Name of the file represented by the data.
     * @see https://docs.scriptable.app/message/#-adddataattachment
     */
    addDataAttachment(data: Data, uti: string, filename: string): void;
}

/**
 * _The current module._
 * @see https://docs.scriptable.app/module
 */
declare var module: {
    /**
     * _Path to file containing the module._
     *
     * This is the absolute path to the file containing the module.
     * @see https://docs.scriptable.app/module/#filename
     */
    filename: string;

    /**
     * _Exported functions and modules._
     *
     * Values assigned to `exports` are returned by the global `importModule` function when the module is imported.
     *
     * `exports` can be of any type but by default it is an empty object. Consider the following example which exports the `area` and `circumference` functions.
     *
     *     module.exports.area = (r) => {
     *       return Math.PI * Math.pow(r, 2)
     *     }
     *
     *     module.exports.circumference = (r) => {
     *       return 2 * Math.PI * r
     *     }
     *
     * Alternatively if you only need to export a single function or object, you can assign directly to the `exports` property as shown in the following examples.
     *
     *     module.exports = (r) => {
     *       return 2 * Math.PI * r
     *     }
     *
     *     module.exports = "My string"
     * @see https://docs.scriptable.app/module/#exports
     */
    exports: any;
};

declare namespace Notification {
    interface Actions {
        title: string;
        url: string;
    }
}

/**
 * _Schedules and manages notifications._
 * @see https://docs.scriptable.app/notification/#-new-notification
 */
declare class Notification {
    /**
     * _Identifier of the notification._
     *
     * To reschedule a notification, use the identifier of an existing notification.
     * @see https://docs.scriptable.app/notification/#identifier
     */
    identifier: string;

    /**
     * _Title of the notification._
     * @see https://docs.scriptable.app/notification/#title
     */
    title: string;

    /**
     * _Subtitle of the notification._
     * @see https://docs.scriptable.app/notification/#subtitle
     */
    subtitle: string;

    /**
     * _Body of the notification._
     * @see https://docs.scriptable.app/notification/#body
     */
    body: string;

    /**
     * _Preferred height of the notification._
     *
     * By default Scriptable attempts to determine an appropriate height for your notification. If you want to override the default behavior, you can specify a preferred content height.
     * The preferred content height is only used when running a script inside the notification, i.e. when `scriptName` is not null. iOS may limit the height of the notification in which
     * case the preferred content height is not guaranteed to be respected.
     * @see https://docs.scriptable.app/notification/#preferredcontentheight
     */
    preferredContentHeight: number;

    /**
     * _Number to display in the app icon's badge._
     *
     * When the number is zero, no badge is displayed. When the number is greater than zero, the number is displayed in the app icon's badge. Setting the value to null, will leave the
     * badge unchanged. The default value is null.
     * @see https://docs.scriptable.app/notification/#badge
     */
    badge: number;

    /**
     * _Identifier for grouping the notification._
     *
     * Notifications are grouped by the identifier on the Home screen and in the Notification Center.
     * @see https://docs.scriptable.app/notification/#threadidentifier
     */
    threadIdentifier: string;

    /**
     * _Custom information._
     *
     * Store any custom information for the notification. This can be accessed from the `Notification.opened` property when a script is run from a notification.
     * @see https://docs.scriptable.app/notification/#userinfo
     */
    userInfo: { [key: string]: any };

    /**
     * _Sound of the notification._
     *
     * Set to null if you do not want any sound. Set to one of the following values if you want a sound.
     *
     * *   default
     * *   accept
     * *   alert
     * *   complete
     * *   event
     * *   failure
     * *   piano\_error
     * *   piano\_success
     * *   popup
     *
     * By default the notification is delivered with no sound.
     * @see https://docs.scriptable.app/notification/#sound
     */
    sound:
        | 'default'
        | 'accept'
        | 'alert'
        | 'complete'
        | 'event'
        | 'failure'
        | 'piano_error'
        | 'piano_success'
        | 'popup';

    /**
     * _URL to open when notification is tapped._
     *
     * The Scriptable application will open the URL when the notification is tapped. This can be a URL that uses Scriptables URL scheme, the URL scheme of another application or a website
     * URL.
     * @see https://docs.scriptable.app/notification/#openurl
     */
    openURL: string;

    /**
     * _Delivery date of the notification._
     *
     * If the notification has already been delivered, for example because it was fetched using `Notification.allDelivered()`, the deliveryDate will be populated. Otherwise it will be
     * null.
     *
     * The property cannot be set. In order to specify a future delivery date for a notification, see the `setTriggerDate` function. For recurring notifications, see the `setDailyTrigger`
     * and `setWeeklyTrigger` functions.
     * @see https://docs.scriptable.app/notification/#deliverydate
     */
    deliveryDate: Date;

    /**
     * _Next trigger date of the notification._
     *
     * The next trigger date is the point in time where the next notification will be delivered.
     *
     * The property cannot be set. In order to specify a future delivery date for a notification, see the `setTriggerDate` function. For recurring notifications, see the `setDailyTrigger`
     * and `setWeeklyTrigger` functions.
     * @see https://docs.scriptable.app/notification/#nexttriggerdate
     */
    nextTriggerDate: Date;

    /**
     * _Name of script to run in rich notification._
     *
     * When notification is force touched or long pressed, Scriptable can run a script inside the notification without opening the app. Set the `scriptName` to a name of an existing
     * script to run it inside the notification.
     * @see https://docs.scriptable.app/notification/#scriptname
     */
    scriptName: string;

    /**
     * _Actions added to the notification._
     *
     * An array of objects on the following form:
     *
     *     {
     *       "title": "Open Website",
     *       "url": "https://scriptable.app"
     *     }
     *
     * To add a notification, use `Notification.addAction`.
     * @see https://docs.scriptable.app/notification/#actions
     */
    actions: Notification.Actions;

    /**
     * _Schedules and manages notifications._
     * @see https://docs.scriptable.app/notification/#-new-notification
     */
    constructor();

    /**
     * _All pending notifications._
     *
     * Fetches all notifications that have been scheduled from Scriptable and are waiting to be delivered.
     * @see https://docs.scriptable.app/notification/#allpending
     */
    static allPending(): Promise<Notification[]>;

    /**
     * _Delivered notifications displayed in the Notification Center._
     *
     * Fetches all notifications that have been scheduled from Scriptable and that are still displayed in the Notification Center of iOS.
     * @see https://docs.scriptable.app/notification/#alldelivered
     */
    static allDelivered(): Promise<Notification[]>;

    /**
     * _Removes all pending notifications._
     *
     * Removes all notifications that have been scheduled from Scriptable and are waiting to be delivered.
     *
     * Use with caution. This removes all notifications scheduled across all of your scripts and the action cannot be undone.
     * @see https://docs.scriptable.app/notification/#removeallpending
     */
    static removeAllPending(): Promise<void>;

    /**
     * _Removes all delivered notifications._
     *
     * Removes all notifications that have been scheduled from Scriptable and that are still displayed in the Notification Center of iOS.
     * @see https://docs.scriptable.app/notification/#removealldelivered
     */
    static removeAllDelivered(): Promise<void>;

    /**
     * _Removes pending notifications._
     *
     * Removes notifications with the specified identifiers. The notifications are only removed if they are pending, that is they have been scheduled and are waiting to be delivered. To
     * remove delivered notifications, see `Notification.removeDelivered()`.
     * @see https://docs.scriptable.app/notification/#removepending
     */
    static removePending(identifiers: string[]): Promise<void>;

    /**
     * _Removes delivered notifications._
     *
     * Removes notifications with the specified identifiers. The notifications are only removed if they have been delivered. To remove pending notifications, see
     * `Notification.removePending()`.
     * @see https://docs.scriptable.app/notification/#removedelivered
     */
    static removeDelivered(identifiers: string[]): Promise<void>;

    /**
     * _Resets the current notification._
     *
     * Effectively sets `args.notification` to null.
     *
     * When a notification scheduled from Scriptable has been tapped to open the app or while the app was open, `args.notification` will have a value until Scriptable is quit. You can
     * manually reset the value using `Notification.resetCurrent`.
     * @see https://docs.scriptable.app/notification/#resetcurrent
     */
    static resetCurrent(): void;

    /**
     * _Schedules the notification._
     *
     * When a new notification is constructed, it must be scheduled, otherwise it will not be delivered. If an existing notification is modified, it must also be scheduled again for the
     * changes to take effect.
     * @see https://docs.scriptable.app/notification/#-schedule
     */
    schedule(): Promise<void>;

    /**
     * _Removes the notification._
     *
     * Removes all future triggers of the notification.
     * @see https://docs.scriptable.app/notification/#-remove
     */
    remove(): Promise<void>;

    /**
     * _Sets the notification to be triggered on a date and time._
     * @param date - Date and time to trigger the notification on.
     * @see https://docs.scriptable.app/notification/#-settriggerdate
     */
    setTriggerDate(date: Date): void;

    /**
     * _Sets the notification to be triggered daily._
     *
     * Sets the notification to be triggered on a specific time of the day. When the notification repeats, it will be sent at the same time on all future days. If the notification is not
     * repating it will be sent on the next occurrence of the specified time.
     * @param hour - Hour of the day to trigger the notification.
     * @param minute - Minute of the day to trigger the notification.
     * @param repeats - If true the notification will be sent daily on the specified time, otherwise it will only be sent once. Defaults to false.
     * @see https://docs.scriptable.app/notification/#-setdailytrigger
     */
    setDailyTrigger(hour: number, minute: number, repeats?: boolean): void;

    /**
     * _Sets the notification to be triggered weekly._
     *
     * Sets the notification to be triggered on a specific day of the week and a specific time of that day. When the notification repeats, it will be sent at the same time on all future
     * days. If the notification is not repating it will be sent on the next occurrence of the specified time.
     * @param weekday - Day of the week to trigger the notification.
     * @param hour - Hour of the day to trigger the notification.
     * @param minute - Minute of the day to trigger the notification.
     * @param repeats - If true the notification will be sent daily on the specified time, otherwise it will only be sent once. Defaults to false.
     * @see https://docs.scriptable.app/notification/#-setweeklytrigger
     */
    setWeeklyTrigger(weekday: number, hour: number, minute: number, repeats?: boolean): void;

    /**
     * _Adds an action button._
     *
     * Actions are shown as buttons in the notification. When screen space is unlimited, the system shows up to 10 actions. When the space is limited the system shows at most two actions.
     * @param title - Title of the action.
     * @param url - URL to open when choosing the action.
     * @param destructive - Optional. If set to true, the button is displayed with special highlighting to indicate that it performs a destructive task. Defaults to false.
     * @see https://docs.scriptable.app/notification/#-addaction
     */
    addAction(title: string, url: string, destructive?: boolean): void;
}

/**
 * _Copy and paste strings or images._
 * @see https://docs.scriptable.app/pasteboard
 */
declare var Pasteboard: {
    /**
     * _Copies a string to the pasteboard._
     * @param string - The string to copy to the pasteboard.
     * @see https://docs.scriptable.app/pasteboard/#copy
     */
    copy(string: string): void;

    /**
     * _Pastes a string from the pasteboard._
     * @see https://docs.scriptable.app/pasteboard/#paste
     */
    paste(): string;

    /**
     * _Copies a string to the pasteboard._
     * @param string - The string to copy to the pasteboard.
     * @see https://docs.scriptable.app/pasteboard/#copystring
     */
    copyString(string: string): void;

    /**
     * _Pastes a string from the pasteboard._
     * @see https://docs.scriptable.app/pasteboard/#pastestring
     */
    pasteString(): string;

    /**
     * _Copies an image to the pasteboard._
     * @param image - The image to copy to the pasteboard.
     * @see https://docs.scriptable.app/pasteboard/#copyimage
     */
    copyImage(image: Image): void;

    /**
     * _Pastes an image from the pasteboard._
     * @see https://docs.scriptable.app/pasteboard/#pasteimage
     */
    pasteImage(): Image;
};

/**
 * _A path describes a shape._
 *
 * Use the methods on the path to create complex shapes.
 * @see https://docs.scriptable.app/path/#-new-path
 */
declare class Path {
    /**
     * _A path describes a shape._
     *
     * Use the methods on the path to create complex shapes.
     * @see https://docs.scriptable.app/path/#-new-path
     */
    constructor();

    /**
     * _Moves to a point._
     *
     * Moves to a point without drawing a line between the current point and the new point.
     * @param point - Point to move to.
     * @see https://docs.scriptable.app/path/#-move
     */
    move(point: Point): void;

    /**
     * _Adds a line to a point._
     *
     * Add a line from the current point, e.g. set using the move method, and to the new point.
     * @param point - Point to add line to.
     * @see https://docs.scriptable.app/path/#-addline
     */
    addLine(point: Point): void;

    /**
     * _Adds a rectangle._
     *
     * This is a convenience function for adding a rectangle to the path starting from the lower left corner and drawing the lines counter-clockwise until the rectangle is closed.
     * @param rect - Rectangle to add.
     * @see https://docs.scriptable.app/path/#-addrect
     */
    addRect(rect: Rect): void;

    /**
     * _Adds an ellipse._
     *
     * Adds an ellipse incapsulated by the provided rectangle to the path.
     * @param rect - Rectangle incapsulating the ellipse.
     * @see https://docs.scriptable.app/path/#-addellipse
     */
    addEllipse(rect: Rect): void;

    /**
     * _Adds a rounded rectangle._
     *
     * Adds a rounded rectangle to the path. The corner width specifies the horizontal size of the corner and the corner height specifies the the vertical size of the corner.
     * @param rect - Rectangle to add.
     * @param cornerWidth - Horizontal size of the rounded corner.
     * @param cornerHeight - Vertical size of the rounded corner.
     * @see https://docs.scriptable.app/path/#-addroundedrect
     */
    addRoundedRect(rect: Rect, cornerWidth: number, cornerHeight: number): void;

    /**
     * _Adds a cubic curve to a point._
     *
     * Adds a cubic Bézier curve to the path with the specified end point and control points.
     * @param point - End point of the curve.
     * @param control1 - First control point of the curve.
     * @param control2 - Second control point of the curve.
     * @see https://docs.scriptable.app/path/#-addcurve
     */
    addCurve(point: Point, control1: Point, control2: Point): void;

    /**
     * _Adds a quadratic curve to a point._
     *
     * Adds a quadratic Bézier curve to the specified end point with the specified control point.
     * @param point - End point of the curve.
     * @param control - Control point of the curve.
     * @see https://docs.scriptable.app/path/#-addquadcurve
     */
    addQuadCurve(point: Point, control: Point): void;

    /**
     * _Adds a set of lines._
     *
     * Adds straight lines between an array of points. Calling this method is equivalent to calling the move function with the first point in the array of points and then calling addLine
     * on the subsequent points in the array.
     * @param points - Points to add lines between.
     * @see https://docs.scriptable.app/path/#-addlines
     */
    addLines(points: Point[]): void;

    /**
     * _Adds a set of rectangles._
     *
     * Calling this is equivalent to repeatedly calling addRect.
     * @param rects - Rectangles to add.
     * @see https://docs.scriptable.app/path/#-addrects
     */
    addRects(rects: Rect[]): void;

    /**
     * _Closes a sub path._
     *
     * Adds a straight line from the current point to the start of the current subpath.
     * @see https://docs.scriptable.app/path/#-closesubpath
     */
    closeSubpath(): void;
}

/**
 * _Provides access to your photo library._
 * @see https://docs.scriptable.app/photos
 */
declare var Photos: {
    /**
     * _Presents the photo library for picking an image._
     *
     * Use this for picking an image from the photo library.
     * @see https://docs.scriptable.app/photos/#fromlibrary
     */
    fromLibrary(): Promise<Image>;

    /**
     * _Opens the camera for taking an image._
     *
     * Use this for taking a new image using the camera.
     * @see https://docs.scriptable.app/photos/#fromcamera
     */
    fromCamera(): Promise<Image>;

    /**
     * _Get latest photo._
     *
     * Reads the latest photo from your photo library. If no photo is available, the promise will be rejected.
     * @see https://docs.scriptable.app/photos/#latestphoto
     */
    latestPhoto(): Promise<Image>;

    /**
     * _Get latest photos._
     *
     * Reads the latests photos from your photo library. If no photo is available, the promise will be rejected.
     * @param count - Number of photos to fetch.
     * @see https://docs.scriptable.app/photos/#latestphotos
     */
    latestPhotos(count: number): Promise<Image[]>;

    /**
     * _Get latest screenshot._
     *
     * Reads the latest screenshot from your photo library. If no screenshot is available, the promise will be rejected.
     * @see https://docs.scriptable.app/photos/#latestscreenshot
     */
    latestScreenshot(): Promise<Image>;

    /**
     * _Get latest screenshots._
     *
     * Reads the latests screenshots from your photo library. If no screenshot is available, the promise will be rejected.
     * @param count - Number of screenshots to fetch.
     * @see https://docs.scriptable.app/photos/#latestscreenshots
     */
    latestScreenshots(count: number): Promise<Image[]>;

    /**
     * _Removes latest photo._
     *
     * Before removing the photo, an alert is shown prompting you to confirm the removal.
     * @see https://docs.scriptable.app/photos/#removelatestphoto
     */
    removeLatestPhoto(): void;

    /**
     * _Removes latest photos._
     *
     * Before removing the photos, an alert is shown prompting you to confirm the removal.
     * @param count - Number of photos to remove.
     * @see https://docs.scriptable.app/photos/#removelatestphotos
     */
    removeLatestPhotos(count: number): void;

    /**
     * _Removes latest screenshot._
     *
     * Before removing the screenshot, an alert is shown prompting you to confirm the removal.
     * @see https://docs.scriptable.app/photos/#removelatestscreenshot
     */
    removeLatestScreenshot(): void;

    /**
     * _Removes latest screenshots._
     *
     * Before removing the screenshots, an alert is shown prompting you to confirm the removal.
     * @param count - Number of screenshots to remove.
     * @see https://docs.scriptable.app/photos/#removelatestscreenshots
     */
    removeLatestScreenshots(count: number): void;

    /**
     * _Save an image._
     *
     * Saves the image to the photo library.
     * @param image - The image to save.
     * @see https://docs.scriptable.app/photos/#save
     */
    save(image: Image): void;
};

/**
 * _Structure representing a point._
 * @see https://docs.scriptable.app/point/#-new-point
 */
declare class Point {
    /**
     * _X value._
     * @see https://docs.scriptable.app/point/#x
     */
    x: number;

    /**
     * _Y value._
     * @see https://docs.scriptable.app/point/#y
     */
    y: number;

    /**
     * _Structure representing a point._
     * @param x - X value.
     * @param y - Y value.
     * @see https://docs.scriptable.app/point/#-new-point
     */
    constructor(x: number, y: number);
}

/**
 * _Presents an item._
 * @see https://docs.scriptable.app/quicklook
 */
declare var QuickLook: {
    /**
     * _Presents the item._
     *
     * Chooses the best suited presentation of the item and performs the presentation if possible.
     * @param item - Item to be present.
     * @param fullscreen - Optional. Set to true to present the item in fullscreen. This only has an effect when used within the app. Defaults to false.
     * @see https://docs.scriptable.app/quicklook/#present
     */
    present(item: any, fullscreen?: boolean): Promise<void>;
};

/**
 * _Structure representing a rectangle._
 *
 * Constructs a new rectangle placed in a two-dimensional coordinate system.
 * @see https://docs.scriptable.app/rect/#-new-rect
 */
declare class Rect {
    /**
     * _Minimum X value._
     *
     * The smallest x-coordinate in the rectangle.
     * @see https://docs.scriptable.app/rect/#minx
     */
    minX: number;

    /**
     * _Minimum Y value._
     *
     * The smallest y-coordinate in the rectangle.
     * @see https://docs.scriptable.app/rect/#miny
     */
    minY: number;

    /**
     * _Maximum X value._
     *
     * The greatest x-coordinate in the rectangle.
     * @see https://docs.scriptable.app/rect/#maxx
     */
    maxX: number;

    /**
     * _Maximum Y value._
     *
     * The greatest y-coordinate in the rectangle.
     * @see https://docs.scriptable.app/rect/#maxy
     */
    maxY: number;

    /**
     * _X value._
     *
     * The x-coordinate of the rectangle.
     * @see https://docs.scriptable.app/rect/#x
     */
    x: number;

    /**
     * _Y value._
     *
     * The y-coordinate of the rectangle.
     * @see https://docs.scriptable.app/rect/#y
     */
    y: number;

    /**
     * _Width of rectangle._
     *
     * The width of the rectangle.
     * @see https://docs.scriptable.app/rect/#width
     */
    width: number;

    /**
     * _Height of rectangle._
     *
     * The height of the rectangle.
     * @see https://docs.scriptable.app/rect/#height
     */
    height: number;

    /**
     * _Point that specifies the rectangles origin._
     *
     * The x- and y-coordinate that specifies the rectangles origin as a Point structure.
     * @see https://docs.scriptable.app/rect/#origin
     */
    origin: Point;

    /**
     * _Size of the rectangle._
     *
     * The width and height of the rectangle as a Size structure.
     * @see https://docs.scriptable.app/rect/#size
     */
    size: Size;

    /**
     * _Structure representing a rectangle._
     *
     * Constructs a new rectangle placed in a two-dimensional coordinate system.
     * @param x - X coordinate.
     * @param y - Y coordinate.
     * @param width - Width of rectangle.
     * @param height - Height of rectangle.
     * @see https://docs.scriptable.app/rect/#-new-rect
     */
    constructor(x: number, y: number, width: number, height: number);
}

/**
 * _Recurrence rule used with reminders and calendar events._
 * @see https://docs.scriptable.app/recurrencerule
 */
declare class RecurrenceRule {}

declare namespace RecurrenceRule {
    /**
     * _Constructs a daily recurrence rule._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every day and a
     * value of 3 specifies that the rule should repeat every third day.
     * @param interval - Interval at which to repeat the rule.
     * @see https://docs.scriptable.app/recurrencerule/#daily
     */
    function daily(interval: number): RecurrenceRule;

    /**
     * _Constructs a daily recurrence rule with an end date._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every day and a
     * value of 3 specifies that the rule should repeat every third day.
     * @param interval - Interval at which to repeat the rule.
     * @param endDate - Date at which the recurrence rule should end.
     * @see https://docs.scriptable.app/recurrencerule/#dailyenddate
     */
    function dailyEndDate(interval: number, endDate: Date): RecurrenceRule;

    /**
     * _Constructs a daily recurrence rule with an occurrence count._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every day and a
     * value of 3 specifies that the rule should repeat every third day.
     * @param interval - Interval at which to repeat the rule.
     * @param occurrenceCount - Number of times the rule should repeat before it ends.
     * @see https://docs.scriptable.app/recurrencerule/#dailyoccurrencecount
     */
    function dailyOccurrenceCount(interval: number, occurrenceCount: number): RecurrenceRule;

    /**
     * _Constructs a weekly recurrence rule._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every week and a
     * value of 3 specifies that the rule should repeat every third week.
     * @param interval - Interval at which to repeat the rule.
     * @see https://docs.scriptable.app/recurrencerule/#weekly
     */
    function weekly(interval: number): RecurrenceRule;

    /**
     * _Constructs a weekly recurrence rule with an end date._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every week and a
     * value of 3 specifies that the rule should repeat every third week.
     * @param interval - Interval at which to repeat the rule.
     * @param endDate - Date at which the recurrence rule should end.
     * @see https://docs.scriptable.app/recurrencerule/#weeklyenddate
     */
    function weeklyEndDate(interval: number, endDate: Date): RecurrenceRule;

    /**
     * _Constructs a weekly recurrence rule with an occurrence count._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every week and a
     * value of 3 specifies that the rule should repeat every third week.
     * @param interval - Interval at which to repeat the rule.
     * @param occurrenceCount - Number of times the rule should repeat before it ends.
     * @see https://docs.scriptable.app/recurrencerule/#weeklyoccurrencecount
     */
    function weeklyOccurrenceCount(interval: number, occurrenceCount: number): RecurrenceRule;

    /**
     * _Constructs a monthly recurrence rule._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every month and a
     * value of 3 specifies that the rule should repeat every third month.
     * @param interval - Interval at which to repeat the rule.
     * @see https://docs.scriptable.app/recurrencerule/#monthly
     */
    function monthly(interval: number): RecurrenceRule;

    /**
     * _Constructs a monthly recurrence rule with an end date._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every month and a
     * value of 3 specifies that the rule should repeat every third month.
     * @param interval - Interval at which to repeat the rule.
     * @param endDate - Date at which the recurrence rule should end.
     * @see https://docs.scriptable.app/recurrencerule/#monthlyenddate
     */
    function monthlyEndDate(interval: number, endDate: Date): RecurrenceRule;

    /**
     * _Constructs a monthly recurrence rule with an occurrence count._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every month and a
     * value of 3 specifies that the rule should repeat every third month.
     * @param interval - Interval at which to repeat the rule.
     * @param occurrenceCount - Number of times the rule should repeat before it ends.
     * @see https://docs.scriptable.app/recurrencerule/#monthlyoccurrencecount
     */
    function monthlyOccurrenceCount(interval: number, occurrenceCount: number): RecurrenceRule;

    /**
     * _Constructs a yearly recurrence rule._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every year and a
     * value of 3 specifies that the rule should repeat every third year.
     * @param interval - Interval at which to repeat the rule.
     * @see https://docs.scriptable.app/recurrencerule/#yearly
     */
    function yearly(interval: number): RecurrenceRule;

    /**
     * _Constructs a yearly recurrence rule with an end date._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every year and a
     * value of 3 specifies that the rule should repeat every third year.
     * @param interval - Interval at which to repeat the rule.
     * @param endDate - Date at which the recurrence rule should end.
     * @see https://docs.scriptable.app/recurrencerule/#yearlyenddate
     */
    function yearlyEndDate(interval: number, endDate: Date): RecurrenceRule;

    /**
     * _Constructs a yearly recurrence rule with an occurrence count._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every year and a
     * value of 3 specifies that the rule should repeat every third year.
     * @param interval - Interval at which to repeat the rule.
     * @param occurrenceCount - Number of times the rule should repeat before it ends.
     * @see https://docs.scriptable.app/recurrencerule/#yearlyoccurrencecount
     */
    function yearlyOccurrenceCount(interval: number, occurrenceCount: number): RecurrenceRule;

    /**
     * _Constructs a complex weekly recurrence rule._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every week and a
     * value of 3 specifies that the rule should repeat every third week.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through
     * Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year.
     * @param interval - Interval at which to repeat the rule.
     * @param daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param setPositions - Filters which recurrences to include in the rule's frequency.
     * @see https://docs.scriptable.app/recurrencerule/#complexweekly
     */
    function complexWeekly(interval: number, daysOfTheWeek: number[], setPositions: number[]): RecurrenceRule;

    /**
     * _Constructs a complex weekly recurrence rule with an end date._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every week and a
     * value of 3 specifies that the rule should repeat every third week.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through
     * Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year.
     * @param interval - Interval at which to repeat the rule.
     * @param daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param setPositions - Filters which recurrences to include in the rule's frequency.
     * @param endDate - Date at which the recurrence rule should end.
     * @see https://docs.scriptable.app/recurrencerule/#complexweeklyenddate
     */
    function complexWeeklyEndDate(
        interval: number,
        daysOfTheWeek: number[],
        setPositions: number[],
        endDate: Date,
    ): RecurrenceRule;

    /**
     * _Constructs a complex weekly recurrence rule with an occurrence count._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every week and a
     * value of 3 specifies that the rule should repeat every third week.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through
     * Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year.
     * @param interval - Interval at which to repeat the rule.
     * @param daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param setPositions - Filters which recurrences to include in the rule's frequency.
     * @param occurrenceCount - Number of times the rule should repeat before it ends.
     * @see https://docs.scriptable.app/recurrencerule/#complexweeklyoccurrencecount
     */
    function complexWeeklyOccurrenceCount(
        interval: number,
        daysOfTheWeek: number[],
        setPositions: number[],
        occurrenceCount: number,
    ): RecurrenceRule;

    /**
     * _Constructs a complex monthly recurrence rule._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every month and a
     * value of 3 specifies that the rule should repeat every third month.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through
     * Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year.
     * @param interval - Interval at which to repeat the rule.
     * @param daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param daysOfTheMonth - Days of the month to repeat the rule. Values range from 1 to 31 and from -1 to -31.
     * @param setPositions - Filters which recurrences to include in the rule's frequency.
     * @see https://docs.scriptable.app/recurrencerule/#complexmonthly
     */
    function complexMonthly(
        interval: number,
        daysOfTheWeek: number[],
        daysOfTheMonth: number[],
        setPositions: number[],
    ): RecurrenceRule;

    /**
     * _Constructs a complex monthly recurrence rule with an end date._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every month and a
     * value of 3 specifies that the rule should repeat every third month.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through
     * Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year.
     * @param interval - Interval at which to repeat the rule.
     * @param daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param daysOfTheMonth - Days of the month to repeat the rule. Values range from 1 to 31 and from -1 to -31.
     * @param setPositions - Filters which recurrences to include in the rule's frequency.
     * @param endDate - Date at which the recurrence rule should end.
     * @see https://docs.scriptable.app/recurrencerule/#complexmonthlyenddate
     */
    function complexMonthlyEndDate(
        interval: number,
        daysOfTheWeek: number[],
        daysOfTheMonth: number[],
        setPositions: number[],
        endDate: Date,
    ): RecurrenceRule;

    /**
     * _Constructs a complex monthly recurrence rule with an occurrence count._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every month and a
     * value of 3 specifies that the rule should repeat every third month.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through
     * Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year.
     * @param interval - Interval at which to repeat the rule.
     * @param daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param daysOfTheMonth - Days of the month to repeat the rule. Values range from 1 to 31 and from -1 to -31.
     * @param setPositions - Filters which recurrences to include in the rule's frequency.
     * @param occurrenceCount - Number of times the rule should repeat before it ends.
     * @see https://docs.scriptable.app/recurrencerule/#complexmonthlyoccurrencecount
     */
    function complexMonthlyOccurrenceCount(
        interval: number,
        daysOfTheWeek: number[],
        daysOfTheMonth: number[],
        setPositions: number[],
        occurrenceCount: number,
    ): RecurrenceRule;

    /**
     * _Constructs a complex yearly recurrence rule._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every year and a
     * value of 3 specifies that the rule should repeat every third year.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through
     * Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year.
     * @param interval - Interval at which to repeat the rule.
     * @param daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param monthsOfTheYear - The months of the year to repeat the rule. Values range from 1 to 12.
     * @param weeksOfTheYear - The weeks of the year to repeat the rule. Values range from 1 to 53 and -1 to -53.
     * @param daysOfTheYear - The days of the year to repeat the rule. Values range from 1 to 366 and -1 to -366.
     * @param setPositions - Filters which recurrences to include in the rule's frequency.
     * @see https://docs.scriptable.app/recurrencerule/#complexyearly
     */
    function complexYearly(
        interval: number,
        daysOfTheWeek: number[],
        monthsOfTheYear: number[],
        weeksOfTheYear: number[],
        daysOfTheYear: number[],
        setPositions: number[],
    ): RecurrenceRule;

    /**
     * _Constructs a complex yearly recurrence rule with an end date._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every year and a
     * value of 3 specifies that the rule should repeat every third week.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through
     * Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year.
     * @param interval - Interval at which to repeat the rule.
     * @param daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param monthsOfTheYear - The months of the year to repeat the rule. Values range from 1 to 12.
     * @param weeksOfTheYear - The weeks of the year to repeat the rule. Values range from 1 to 53 and -1 to -53.
     * @param daysOfTheYear - The days of the year to repeat the rule. Values range from 1 to 366 and -1 to -366.
     * @param setPositions - Filters which recurrences to include in the rule's frequency.
     * @param endDate - Date at which the recurrence rule should end.
     * @see https://docs.scriptable.app/recurrencerule/#complexyearlyenddate
     */
    function complexYearlyEndDate(
        interval: number,
        daysOfTheWeek: number[],
        monthsOfTheYear: number[],
        weeksOfTheYear: number[],
        daysOfTheYear: number[],
        setPositions: number[],
        endDate: Date,
    ): RecurrenceRule;

    /**
     * _Constructs a complex yearly recurrence rule with an occurrence count._
     *
     * The interval should have a value greater than 0 and specifies how often the pattern repeats. For example, an interval of 1 specifies that the rule should repeat every year and a
     * value of 3 specifies that the rule should repeat every third year.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through
     * Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year.
     * @param interval - Interval at which to repeat the rule.
     * @param daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param monthsOfTheYear - The months of the year to repeat the rule. Values range from 1 to 12.
     * @param weeksOfTheYear - The weeks of the year to repeat the rule. Values range from 1 to 53 and -1 to -53.
     * @param daysOfTheYear - The days of the year to repeat the rule. Values range from 1 to 366 and -1 to -366.
     * @param setPositions - Filters which recurrences to include in the rule's frequency.
     * @param occurrenceCount - Number of times the rule should repeat before it ends.
     * @see https://docs.scriptable.app/recurrencerule/#complexyearlyoccurrencecount
     */
    function complexYearlyOccurrenceCount(
        interval: number,
        daysOfTheWeek: number[],
        monthsOfTheYear: number[],
        weeksOfTheYear: number[],
        daysOfTheYear: number[],
        setPositions: number[],
        occurrenceCount: number,
    ): RecurrenceRule;
}

/**
 * _Creates a textual representation of the amount of time between two dates._
 *
 * The formatter creates a textual representation of the time between two points in time.
 * @see https://docs.scriptable.app/relativedatetimeformatter/#-new-relativedatetimeformatter
 */
declare class RelativeDateTimeFormatter {
    /**
     * _Locale to use when formatting._
     *
     * The locale should be specified using a string identifier, e.g. "en", "it" or "da". When no locale is set, the formatter will use the current locale of the device.
     * @see https://docs.scriptable.app/relativedatetimeformatter/#locale
     */
    locale: string;

    /**
     * _Creates a textual representation of the amount of time between two dates._
     *
     * The formatter creates a textual representation of the time between two points in time.
     * @see https://docs.scriptable.app/relativedatetimeformatter/#-new-relativedatetimeformatter
     */
    constructor();

    /**
     * _Creates a localized string communicating the amount of time between two dates._
     *
     * Creates a localized textual representation of the amount of time between to dates. If the two dates are the same, the function will return "now". If the reference date is
     * yesterday, the function will return "yesterday". Other examples include "in 10 seconds", "2 hours ago", "last week" and "next year".
     * @param date - The date to create a relative date and time for.
     * @param referenceDate - The reference date that `date` is relative to.
     * @see https://docs.scriptable.app/relativedatetimeformatter/#-string
     */
    string(date: Date, referenceDate: Date): string;

    /**
     * _Prefers named dates and times._
     *
     * When using the named style, the formatter tries to find a suitable textual representation over a numeric value for the relative time, e.g. "now" instead of "in 0 seconds" and
     * "yesterday" instead of "1 day ago".
     *
     * When no named representation is found the formatter will fallback to using the numeric style.
     * @see https://docs.scriptable.app/relativedatetimeformatter/#-usenameddatetimestyle
     */
    useNamedDateTimeStyle(): void;

    /**
     * _Prefers numeric dates and times._
     *
     * When using the numeric style, the formatter will always prefer numeric representations over named representations. E.g. it will return "in 0 seconds" instead of "now" and "1 day
     * ago" instead of "yesteday".
     * @see https://docs.scriptable.app/relativedatetimeformatter/#-usenumericdatetimestyle
     */
    useNumericDateTimeStyle(): void;
}

/**
 * _Manages reminders in calendars._
 *
 * In order to add the reminder to your calendar, you must call the save() function.
 * @see https://docs.scriptable.app/reminder/#-new-reminder
 */
declare class Reminder {
    /**
     * _Identifier of reminder._
     * @see https://docs.scriptable.app/reminder/#identifier
     */
    identifier: string;

    /**
     * _Title of reminder._
     * @see https://docs.scriptable.app/reminder/#title
     */
    title: string;

    /**
     * _Notes associated with reminder._
     * @see https://docs.scriptable.app/reminder/#notes
     */
    notes: string;

    /**
     * _Whether the reminder is completed_
     * @see https://docs.scriptable.app/reminder/#iscompleted
     */
    isCompleted: boolean;

    /**
     * _Priority of reminder._
     *
     * Specifies the prirority of the reminder with 0 representing an undefined priority, 1 the highest priority, and 9 the lowest priority.
     * @see https://docs.scriptable.app/reminder/#priority
     */
    priority: number;

    /**
     * _Due date of reminder._
     * @see https://docs.scriptable.app/reminder/#duedate
     */
    dueDate: Date;

    /**
     * _Whether the due date includes a time._
     *
     * When this is true, assignments to the `dueDate` property will include a time, when this is false, the time component of the date will be ignored. Defaults to true.
     * @see https://docs.scriptable.app/reminder/#duedateincludestime
     */
    dueDateIncludesTime: boolean;

    /**
     * _Completion date of reminder._
     * @see https://docs.scriptable.app/reminder/#completiondate
     */
    completionDate: Date;

    /**
     * _Creation date of reminder._
     * @see https://docs.scriptable.app/reminder/#creationdate
     */
    creationDate: Date;

    /**
     * _Calendar the reminder is stored in._
     * @see https://docs.scriptable.app/reminder/#calendar
     */
    calendar: Calendar;

    /**
     * _Manages reminders in calendars._
     *
     * In order to add the reminder to your calendar, you must call the save() function.
     * @see https://docs.scriptable.app/reminder/#-new-reminder
     */
    constructor();

    /**
     * _Fetches the schedule of reminders._
     *
     * The fetched result contains reminders that are due today and reminders that are overdue. This is similar to the reminders shown in the Reminders apps "Scheduled" list. For
     * performance reasons iOS limits fetched results to events within a four year timespan.
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#scheduled
     */
    static scheduled(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches all reminders._
     *
     * For performance reasons iOS limits fetched results to events within a four year timespan.
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#all
     */
    static all(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches all completed reminders._
     *
     * For performance reasons iOS limits fetched results to events within a four year timespan.
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#allcompleted
     */
    static allCompleted(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches all incomplete reminders._
     *
     * For performance reasons iOS limits fetched results to events within a four year timespan.
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#allincomplete
     */
    static allIncomplete(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches all reminders due today._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#allduetoday
     */
    static allDueToday(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches completed reminders due today._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#completedduetoday
     */
    static completedDueToday(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches incomplete reminders due today._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#incompleteduetoday
     */
    static incompleteDueToday(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches all reminders due tomorrow._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#allduetomorrow
     */
    static allDueTomorrow(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches completed reminders due tomorrow._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#completedduetomorrow
     */
    static completedDueTomorrow(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches incomplete reminders due tomorrow._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#incompleteduetomorrow
     */
    static incompleteDueTomorrow(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches all reminders due yesterday._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#alldueyesterday
     */
    static allDueYesterday(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches completed reminders due yesterday._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#completeddueyesterday
     */
    static completedDueYesterday(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches incomplete reminders due yesterday._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#incompletedueyesterday
     */
    static incompleteDueYesterday(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches all reminders due this week._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#allduethisweek
     */
    static allDueThisWeek(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches completed reminders due this week._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#completedduethisweek
     */
    static completedDueThisWeek(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches incomplete reminders due this week._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#incompleteduethisweek
     */
    static incompleteDueThisWeek(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches all reminders due next week._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#allduenextweek
     */
    static allDueNextWeek(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches completed reminders due next week._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#completedduenextweek
     */
    static completedDueNextWeek(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches incomplete reminders due next week._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#incompleteduenextweek
     */
    static incompleteDueNextWeek(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches all reminders due last week._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#allduelastweek
     */
    static allDueLastWeek(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches completed reminders due last week._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#completedduelastweek
     */
    static completedDueLastWeek(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches incomplete reminders due last week._
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#incompleteduelastweek
     */
    static incompleteDueLastWeek(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches reminders completed today._
     *
     * Note that this does not take the due date into account. This will return all reminders that you have completed today.
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#completedtoday
     */
    static completedToday(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches reminders completed this week._
     *
     * Note that this does not take the due date into account. This will return all reminders that you have completed this week.
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#completedthisweek
     */
    static completedThisWeek(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches reminders completed last week._
     *
     * Note that this does not take the due date into account. This will return all reminders that you have completed last week.
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#completedlastweek
     */
    static completedLastWeek(calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches due reminders._
     *
     * Fetches reminders that are due within the time interval constituted by the start and end dates.
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#allduebetween
     */
    static allDueBetween(startDate: Date, endDate: Date, calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches completed reminders._
     *
     * Fetches reminders that are completed and that were due within the time interval constituted by the start and end dates.
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#completedduebetween
     */
    static completedDueBetween(startDate: Date, endDate: Date, calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches incomplete reminders._
     *
     * Fetches reminders that are incomplete and that were due within the time interval constituted by the start and end dates.
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#incompleteduebetween
     */
    static incompleteDueBetween(startDate: Date, endDate: Date, calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Fetches completed reminders._
     *
     * Fetches reminders that were completed within the time interval constituted by the start and end dates.
     * @param calendars - Calendars to fetch reminders for. Defaults to all calendars.
     * @see https://docs.scriptable.app/reminder/#completedbetween
     */
    static completedBetween(startDate: Date, endDate: Date, calendars?: Calendar[]): Promise<Reminder[]>;

    /**
     * _Adds a recurrence rule._
     *
     * Recurrence rules specify when the reminder should be repeated. See the documentation of RecurrenceRule for more information on creating rules.
     * @param recurrenceRule - Recurrence rule to add to the reminder.
     * @see https://docs.scriptable.app/reminder/#-addrecurrencerule
     */
    addRecurrenceRule(recurrenceRule: RecurrenceRule): void;

    /**
     * _Removes all recurrence rules._
     * @see https://docs.scriptable.app/reminder/#-removeallrecurrencerules
     */
    removeAllRecurrenceRules(): void;

    /**
     * _Saves reminder._
     *
     * Saves changes to a reminder, inserting it into the calendar if it is newly created.
     * @see https://docs.scriptable.app/reminder/#-save
     */
    save(): void;

    /**
     * _Removes reminder from calendar._
     * @see https://docs.scriptable.app/reminder/#-remove
     */
    remove(): void;
}

/**
 * _Performs HTTP requests._
 *
 * Constructs a new request that will be sent to the provided URL. The request is not sent until an appropriate load method is called, e.g. loadImage for downloading and interpreting
 * the response as an image.
 * @see https://docs.scriptable.app/request/#-new-request
 */
declare class Request {
    /**
     * _URL to send request to._
     * @see https://docs.scriptable.app/request/#url
     */
    url: string;

    /**
     * _HTTP method used for the request._
     *
     * Specifies the HTTP method to use when sending the request. The default is to send the request using the GET HTTP method.
     * @see https://docs.scriptable.app/request/#method
     */
    method: string;

    /**
     * _HTTP headers to send with the request._
     *
     * Key value pairs where the key is the name of an HTTP header and the value will be sent as the value for the HTTP header.
     * @see https://docs.scriptable.app/request/#headers
     */
    headers: { [key: string]: string };

    /**
     * _Body to send with the request._
     *
     * The body will be send along the request. While this property can be any value, currently only strings and Data is supported.
     *
     * Be aware that this property is ignored if you convert the request to a multipart request using `addParameterToMultipart`, `addFileToMultipart` or `addFileDataToMultipart`.
     * @see https://docs.scriptable.app/request/#body
     */
    body: any;

    /**
     * _Response of the request._
     *
     * The response is not populated until the request has been completed. The response is an object that looks like the following example.
     *
     *     {
     *       "url": "https://example.com/",
     *       "statusCode": 200
     *       "mimeType": "application/json",
     *       "textEncodingName": "utf-8",
     *       "headers": {
     *         "Content-Type": "application/json;charset=utf-8",
     *         "Content-Length": "17671"
     *       },
     *       "cookies": [{
     *         "path": "/",
     *         "httpOnly": true,
     *         "domain": "www.example.com",
     *         "sessionOnly": true,
     *         "name": "JSESSIONID",
     *         "value": "7616271F4878CFD05182D20C45F4CEB3"
     *       }]
     *     }
     * @see https://docs.scriptable.app/request/#response
     */
    response: { [key: string]: any };

    /**
     * _Allow the request even if it is deemed insecure._
     *
     * By default Scriptable will attempt to reject requests that are deemed insecure.
     *
     * As an example, Scriptable will reject communicating with a server that has an invalid certificate. Such servers might be malicious and may put confidentional information at risk.
     * By enabling this setting, those requests will be allowed.
     *
     * Enable this setting at your own risk.
     * @see https://docs.scriptable.app/request/#allowinsecurerequest
     */
    allowInsecureRequest: boolean;

    /**
     * _Performs HTTP requests._
     *
     * Constructs a new request that will be sent to the provided URL. The request is not sent until an appropriate load method is called, e.g. loadImage for downloading and interpreting
     * the response as an image.
     * @param url - URL to send request to.
     * @see https://docs.scriptable.app/request/#-new-request
     */
    constructor(url: string);

    /**
     * _Sends request._
     *
     * Call to send the configured request to the specified URL. The raw response is provided when the returned promise is fulfilled.
     * @see https://docs.scriptable.app/request/#-load
     */
    load(): Promise<Data>;

    /**
     * _Sends request and parses response as a string._
     *
     * Call to send the configured request to the specified URL. The response is parsed to a string and provided when the returned promise is fulfilled.
     * @see https://docs.scriptable.app/request/#-loadstring
     */
    loadString(): Promise<string>;

    /**
     * _Sends request and parses response as JSON._
     *
     * Call to send the configured request to the specified URL. The response is expected to be a valid JSON string and is parsed into an object.
     * @see https://docs.scriptable.app/request/#-loadjson
     */
    loadJSON(): Promise<any>;

    /**
     * _Sends request and parses response as an image._
     *
     * Call to send the configured request to the specified URL. The response is expected to be an image.
     * @see https://docs.scriptable.app/request/#-loadimage
     */
    loadImage(): Promise<Image>;

    /**
     * _Adds a parameter to a multipart request._
     *
     * Converts the request to a multipart request and adds a parameter with the specified name and value. Be aware that the `body` property on the request is ignored for multipart
     * requests as parameters and files added to the request constitutes the body.
     *
     * Calling this function will make the request a multipart request. When the request is send, the content type will automatically be set to "multipart/form-data".
     * @param name - Name of the parameter.
     * @param value - Value of the parameter.
     * @see https://docs.scriptable.app/request/#-addparametertomultipart
     */
    addParameterToMultipart(name: string, value: string): void;

    /**
     * _Adds a file to a multipart request._
     *
     * Converts the request to a multipart request and adds the file to the request. Be aware that the `body` property on the request is ignored for multipart requests as parameters and
     * files added to the request constitutes the body.
     *
     * Calling this function will make the request a multipart request. When the request is send, the content type will automatically be set to "multipart/form-data".
     * @param data - File data to add.
     * @param mimeType - MIME type of the file to add.
     * @param name - Name of the parameter which holds the file.
     * @param filename - Name of the file.
     * @see https://docs.scriptable.app/request/#-addfiledatatomultipart
     */
    addFileDataToMultipart(data: Data, mimeType: string, name: string, filename: string): void;

    /**
     * _Adds a file to a multipart request._
     *
     * Converts the request to a multipart request and adds the file to the request. The function will automatically determine the MIME type of the file as well as the filename. Be aware
     * that the `body` property on the request is ignored for multipart requests as parameters and files added to the request constitutes the body.
     *
     * Calling this function will make the request a multipart request. When the request is send, the content type will automatically be set to "multipart/form-data".
     * @param filePath - Path of the file to add.
     * @param name - Name of the parameter which holds the file.
     * @param filename - Optional name of the uploaded file.
     * @see https://docs.scriptable.app/request/#-addfiletomultipart
     */
    addFileToMultipart(filePath: string, name: string, filename?: string): void;

    /**
     * _Adds an image to a multipart request._
     *
     * Converts the request to a multipart request and adds the image to the request. The function will automatically determine the MIME type of the file Be aware that the `body` property
     * on the request is ignored for multipart requests as parameters and files added to the request constitutes the body.
     *
     * Calling this function will make the request a multipart request. When the request is send, the content type will automatically be set to "multipart/form-data".
     * @param image - Image to add.
     * @param name - Name of the parameter which holds the file.
     * @param filename - Optional name of the uploaded file.
     * @see https://docs.scriptable.app/request/#-addimagetomultipart
     */
    addImageToMultipart(image: Image, name: string, filename?: string): void;

    /**
     * _Function called upon redirect._
     *
     * The function determines how redirects should be handled. By default redirects are allowed. When invoked the function is supplied with the request that we're about to redirect to.
     * The function can return the request to continue redirecting or it can return another request to redirect to. Returning null will stop the redirect. Note that onRedirect will only
     * be invoked on the initial request. Consecutive redirects should be handled on the initial request.
     * @see https://docs.scriptable.app/request/#onredirect
     */
    onRedirect: (arg0: Request) => Request;
}

/**
 * _Representation of an SF symbol._
 * @see https://docs.scriptable.app/sfsymbol
 */
declare class SFSymbol {
    /**
     * _Convert the symbol to an image._
     * @see https://docs.scriptable.app/sfsymbol/#image
     */
    image: Image;

    private constructor();

    /**
     * _Constructs an SF symbol._
     *
     * SF symbols are Apple's configurable icons that are designed to look great with the San Francisco font.
     *
     * Symbols are referenced by their name. You can find the symbol names in [Apples SF Symbols app for macOS](https://developer.apple.com/sf-symbols/). You can also browse symbol names
     * in the [SF Symbols Browser](https://apps.apple.com/us/app/sf-symbols-browser/id1491161336) and [San Fransymbols](https://apps.apple.com/us/app/san-fransymbols/id1504761986) apps
     * for iOS.
     * @param symbolName - Name of the symbol.
     * @see https://docs.scriptable.app/sfsymbol/#named
     */
    static named(symbolName: string): SFSymbol;

    /**
     * _Configures the symbol with the specified font information._
     * @see https://docs.scriptable.app/sfsymbol/#-applyfont
     */
    applyFont(font: Font): void;

    /**
     * _Configures the symbol to use an ultra light weight._
     * @see https://docs.scriptable.app/sfsymbol/#-applyultralightweight
     */
    applyUltraLightWeight(): void;

    /**
     * _Configures the symbol to use a thin weight._
     * @see https://docs.scriptable.app/sfsymbol/#-applythinweight
     */
    applyThinWeight(): void;

    /**
     * _Configures the symbol to use a light weight._
     * @see https://docs.scriptable.app/sfsymbol/#-applylightweight
     */
    applyLightWeight(): void;

    /**
     * _Configures the symbol to use a regular weight._
     * @see https://docs.scriptable.app/sfsymbol/#-applyregularweight
     */
    applyRegularWeight(): void;

    /**
     * _Configures the symbol to use a medium weight._
     * @see https://docs.scriptable.app/sfsymbol/#-applymediumweight
     */
    applyMediumWeight(): void;

    /**
     * _Configures the symbol to use a semibold weight._
     * @see https://docs.scriptable.app/sfsymbol/#-applysemiboldweight
     */
    applySemiboldWeight(): void;

    /**
     * _Configures the symbol to use a bold weight._
     * @see https://docs.scriptable.app/sfsymbol/#-applyboldweight
     */
    applyBoldWeight(): void;

    /**
     * _Configures the symbol to use a heavy weight._
     * @see https://docs.scriptable.app/sfsymbol/#-applyheavyweight
     */
    applyHeavyWeight(): void;

    /**
     * _Configures the symbol to use a black weight._
     * @see https://docs.scriptable.app/sfsymbol/#-applyblackweight
     */
    applyBlackWeight(): void;
}

/**
 * _Presents a website._
 * @see https://docs.scriptable.app/safari
 */
declare var Safari: {
    /**
     * _Presents a website in-app._
     *
     * Presents a website without leaving the app.
     * @param url - URL of website to present.
     * @param fullscreen - Optional. Set to true to display the web view in fullsceen. This only has an effect when used within the app. Defaults to true.
     * @see https://docs.scriptable.app/safari/#openinapp
     */
    openInApp(url: string, fullscreen?: boolean): Promise<void>;

    /**
     * _Presents a website._
     *
     * Presents a website in the Safari app, thus leaving the current app.
     * @param url - URL of website to present.
     * @see https://docs.scriptable.app/safari/#open
     */
    open(url: string): void;
};

/**
 * _Access information about the script._
 * @see https://docs.scriptable.app/script
 */
declare var Script: {
    /**
     * _Name of the script._
     * @see https://docs.scriptable.app/script/#name
     */
    name(): string;

    /**
     * _Informs the system about script completion._
     *
     * Call this function to inform the system that the script has completed running.
     *
     * When a script is run inside Siri and the Shortcuts app, Scriptable use heuristics to determine if the script has completed. If you find that a script takes too long to complete,
     * you can manually call the `complete` function to stop the execution. Note that this should be done as the very last action the script performs.
     *
     * When the script is run from a share sheet, the `complete` function will complete execution and dismiss the presented view.
     * @see https://docs.scriptable.app/script/#complete
     */
    complete(): void;

    /**
     * _Sets output when running the script as a shortcut action._
     *
     * Use this function to pass values to other actions in the Shortcuts app. The output can be a text, a number, a boolean, a dictionary or a file path pointing to a file stored in
     * iCloud.
     *
     * You can also use JavaScripts `return` keyword to output a value to a shortcut.
     * @param value - Value to provide as output.
     * @see https://docs.scriptable.app/script/#setshortcutoutput
     */
    setShortcutOutput(value: any): void;

    /**
     * _Sets the widget to be displayed._
     * @param widget - Widget to display.
     * @see https://docs.scriptable.app/script/#setwidget
     */
    setWidget(widget: any): void;
};

/**
 * _Offers standard activities to perform on items._
 * @see https://docs.scriptable.app/sharesheet
 */
declare var ShareSheet: {
    /**
     * _Presents the activity picker._
     *
     * Presents a share sheet with an array of items to share. The activities included in the presented sheet will vary based on the type of item.
     * @param activityItems - Items to perform activity on.
     * @see https://docs.scriptable.app/sharesheet/#present
     */
    present(activityItems: any[]): Promise<any>;
};

/**
 * _Structure representing a size._
 * @see https://docs.scriptable.app/size/#-new-size
 */
declare class Size {
    /**
     * _Width value._
     * @see https://docs.scriptable.app/size/#width
     */
    width: number;

    /**
     * _Height value._
     * @see https://docs.scriptable.app/size/#height
     */
    height: number;

    /**
     * _Structure representing a size._
     * @param width - Width value.
     * @param height - Height value.
     * @see https://docs.scriptable.app/size/#-new-size
     */
    constructor(width: number, height: number);
}

/**
 * _Speaks a text._
 * @see https://docs.scriptable.app/speech
 */
declare var Speech: {
    /**
     * Speaks a text.
     * @param text - Text to speak.
     * @see https://docs.scriptable.app/speech/#speak
     */
    speak(text: string): void;
};

/**
 * _A timer that fires after a time interval has elapsed._
 *
 * Constructs a timer that fires after a specified time interval.
 * @see https://docs.scriptable.app/timer/#-new-timer
 */
declare class Timer {
    /**
     * _The frequency at which the timer fires, in milliseconds._
     *
     * Be aware that the time interval is specified in setting. Defaults to 0, causing the timer to fire instantly.
     * @see https://docs.scriptable.app/timer/#timeinterval
     */
    timeInterval: number;

    /**
     * _Whether the timer should repeat._
     *
     * A repeating timer will keep firing until it is invalidated. In contrast to non-repeating timers, repeating timers are not automatically invalidated. Defaults to false.
     * @see https://docs.scriptable.app/timer/#repeats
     */
    repeats: boolean;

    /**
     * _A timer that fires after a time interval has elapsed._
     *
     * Constructs a timer that fires after a specified time interval.
     * @see https://docs.scriptable.app/timer/#-new-timer
     */
    constructor();

    /**
     * _Schedules a timer._
     *
     * This is a convenience function for creating a new timer. The created timer is instantly scheduled and will fire after the specified time interval.
     * @param timeInterval - The time interval to fire the timer at.
     * @param repeats - Whether the timer should repeat or not.
     * @param callback - The callback to be called when the timer fires.
     * @see https://docs.scriptable.app/timer/#schedule
     */
    static schedule(timeInterval: number, repeats: boolean, callback: () => void): Timer;

    /**
     * _Schedules the timer._
     *
     * Schedules the timer using its configuration. The supplied function is called when the timer fires. To stop the timer from firing, call the `invalidate()` function.
     * @param callback - The callback to be called when the timer fires.
     * @see https://docs.scriptable.app/timer/#-schedule
     */
    schedule(callback: () => void): void;

    /**
     * _Stops the timer from firing._
     *
     * Stops the timer from firing ever again. Non-repeating timers are automatically invalidated after they have fired once. Repeating timers must be manually invalidated.
     * @see https://docs.scriptable.app/timer/#-invalidate
     */
    invalidate(): void;
}

/**
 * _Renders a table._
 *
 * Use a table to present data in a structured manner.
 * @see https://docs.scriptable.app/uitable/#-new-uitable
 */
declare class UITable {
    /**
     * _Whether to show separators._
     *
     * Whether to show separators between rows. Defaults to false.
     * @see https://docs.scriptable.app/uitable/#showseparators
     */
    showSeparators: boolean;

    /**
     * _Renders a table._
     *
     * Use a table to present data in a structured manner.
     * @see https://docs.scriptable.app/uitable/#-new-uitable
     */
    constructor();

    /**
     * _Adds a row._
     *
     * Adds a row to the table. Rows are shown vertically in the table view, i.e. from the top and down. Rows are rendered in the order they are added.
     * @param row - Row to add.
     * @see https://docs.scriptable.app/uitable/#-addrow
     */
    addRow(row: UITableRow): void;

    /**
     * _Removes a row._
     *
     * Removes a row from the table.
     * @param row - Row to remove.
     * @see https://docs.scriptable.app/uitable/#-removerow
     */
    removeRow(row: UITableRow): void;

    /**
     * _Removes all rows._
     *
     * Removes all rows from the table. If the table is presented, you must call the `reload` function in order for the changes to be reflected visually.
     * @see https://docs.scriptable.app/uitable/#-removeallrows
     */
    removeAllRows(): void;

    /**
     * _Reloads the table._
     *
     * If you add or remove rows while a table view is presented, you must reload the table in order for the changes to take effect.
     * @see https://docs.scriptable.app/uitable/#-reload
     */
    reload(): void;

    /**
     * _Presents the table._
     * @param fullscreen - Optional. Set to true to present the web view in fullscreen. This only has an effect when used within the app. Defaults to false.
     * @see https://docs.scriptable.app/uitable/#-present
     */
    present(fullscreen?: boolean): Promise<void>;
}

/**
 * _Cell in a UITableRow._
 * @see https://docs.scriptable.app/uitablecell
 */
declare class UITableCell {
    /**
     * _Relative width of the cell._
     *
     * A width weight specifies the relative width of the cell. When computing the absolute width of the cell, all width weights are taken into account. Consider the following example.
     *
     * Cell A has a width weight of 50. Cell B has a width weight of 100. Cell C has a width wegiht of 150.
     *
     * Assume that the row has an absolute width of 100. The width will be distributed among cells A, B and C. B will be double as wide as A but C will be fifty percent wider than B and
     * three times as wide as A.
     * @see https://docs.scriptable.app/uitablecell/#widthweight
     */
    widthWeight: number;

    /**
     * _Whether to dismiss the table when the button is tapped._
     *
     * Defaults to false.
     * @see https://docs.scriptable.app/uitablecell/#dismissontap
     */
    dismissOnTap: boolean;

    /**
     * _Color of the title._
     *
     * This only has an effect on cells with a title. By default the color is null, in which case an appropriate color is automatically chosen based on the theme of the app and the
     * context the script is running in.
     * @see https://docs.scriptable.app/uitablecell/#titlecolor
     */
    titleColor: Color;

    /**
     * _Color of the subtitle._
     *
     * This only has an effect on cells with a subtitle. By default the color is null, in which case an appropriate color is automatically chosen based on the theme of the app and the
     * context the script is running in.
     * @see https://docs.scriptable.app/uitablecell/#subtitlecolor
     */
    subtitleColor: Color;

    /**
     * _Font of the title._
     * @see https://docs.scriptable.app/uitablecell/#titlefont
     */
    titleFont: Font;

    /**
     * _Font of the subtitle._
     * @see https://docs.scriptable.app/uitablecell/#subtitlefont
     */
    subtitleFont: Font;

    /**
     * _Constructs a text cell._
     *
     * Constructs a new cell containing text.
     * @param title - Optional title to show in the cell.
     * @param subtitle - Optional subtitle shown below the title.
     * @see https://docs.scriptable.app/uitablecell/#text
     */
    static text(title?: string, subtitle?: string): UITableCell;

    /**
     * _Constructs an image cell._
     *
     * Constructs a new cell containing an image.
     * @param image - Image to show in the cell.
     * @see https://docs.scriptable.app/uitablecell/#image
     */
    static image(image: Image): UITableCell;

    /**
     * _Constructs an image cell._
     *
     * Constructs a new cell that loads the image at the specified URL.
     * @param url - URL to image.
     * @see https://docs.scriptable.app/uitablecell/#imageaturl
     */
    static imageAtURL(url: string): UITableCell;

    /**
     * _Constructs a button cell._
     *
     * Constructs a new cell that contains a button. Set the `onTap` property to specify an action to performed when the button is tapped.
     * @param title - Title of the button.
     * @see https://docs.scriptable.app/uitablecell/#button
     */
    static button(title: string): UITableCell;

    /**
     * _Left aligns content._
     *
     * Specifies that content in the cell should be left aligned.
     * @see https://docs.scriptable.app/uitablecell/#-leftaligned
     */
    leftAligned(): void;

    /**
     * _Center aligns content._
     *
     * Specifies that content in the cell should be center aligned.
     * @see https://docs.scriptable.app/uitablecell/#-centeraligned
     */
    centerAligned(): void;

    /**
     * _Right aligns content._
     *
     * Specifies that content in the cell should be right aligned.
     * @see https://docs.scriptable.app/uitablecell/#-rightaligned
     */
    rightAligned(): void;

    /**
     * _Called when the button is tapped._
     *
     * Buttons cannot be tapped when the table is presented in Siri.
     * @see https://docs.scriptable.app/uitablecell/#ontap
     */
    onTap: () => void;
}

/**
 * _Row in a UITable._
 *
 * Rows are shown vertically in a UITable. A row contains cells which are displayed horizontally.
 * @see https://docs.scriptable.app/uitablerow/#-new-uitablerow
 */
declare class UITableRow {
    /**
     * _Spacing between cells._
     *
     * Specifies the horizontal spacing between cells in the row.
     * @see https://docs.scriptable.app/uitablerow/#cellspacing
     */
    cellSpacing: number;

    /**
     * _Height of the row._
     *
     * The height of the row defaults to 44.
     * @see https://docs.scriptable.app/uitablerow/#height
     */
    height: number;

    /**
     * _Whether the cell is a header._
     *
     * Headers are highlighted cells that helps users understand context. Defaults to false.
     * @see https://docs.scriptable.app/uitablerow/#isheader
     */
    isHeader: boolean;

    /**
     * _Whether to dismiss the table when the row is selected._
     *
     * This property will only have an effect if the row is selectable, i.e. `onSelect` has a value. Otherwise it is ignored.
     *
     * Defaults to true.
     * @see https://docs.scriptable.app/uitablerow/#dismissonselect
     */
    dismissOnSelect: boolean;

    /**
     * _Background color._
     * @see https://docs.scriptable.app/uitablerow/#backgroundcolor
     */
    backgroundColor: Color;

    /**
     * _Row in a UITable._
     *
     * Rows are shown vertically in a UITable. A row contains cells which are displayed horizontally.
     * @see https://docs.scriptable.app/uitablerow/#-new-uitablerow
     */
    constructor();

    /**
     * _Adds a cell._
     *
     * Adds a cell to the row. Note that cells are shown in the order they are added to the row.
     * @param cell - Cell to add to the row.
     * @see https://docs.scriptable.app/uitablerow/#-addcell
     */
    addCell(cell: UITableCell): void;

    /**
     * _Adds a text cell._
     *
     * Constructs a new cell containing the specified string and adds it to the row.
     * @param title - Optional title to show in the cell.
     * @param subtitle - Optional subtitle shown below the title in the cell.
     * @see https://docs.scriptable.app/uitablerow/#-addtext
     */
    addText(title?: string, subtitle?: string): UITableCell;

    /**
     * _Adds an image cell._
     *
     * Constructs a new cell containing the specified image and adds it to the row.
     * @param image - Image to show in the cell.
     * @see https://docs.scriptable.app/uitablerow/#-addimage
     */
    addImage(image: Image): UITableCell;

    /**
     * _Adds an image cell._
     *
     * Constructs a new cell that loads the image at the specified url and adds the cell to the row.
     * @param url - URL to image.
     * @see https://docs.scriptable.app/uitablerow/#-addimageaturl
     */
    addImageAtURL(url: string): UITableCell;

    /**
     * _Adds a button cell._
     *
     * Constructs a new cell that contains a button. Set the `onTap` property to specify an action to performed when the button is tapped.
     * @param title - Title of the button.
     * @see https://docs.scriptable.app/uitablerow/#-addbutton
     */
    addButton(title: string): UITableCell;

    /**
     * _Called when the row is selected._
     *
     * Called when the row is selected when the table is presented. If this has no value, the row cannot be selected. Defaults to null.
     *
     * Rows cannot be tapped when the tables is presented in Siri.
     * @see https://docs.scriptable.app/uitablerow/#onselect
     */
    onSelect: (arg0: number) => void;
}

/**
 * _Manages URL schemes for Scriptable._
 * @see https://docs.scriptable.app/urlscheme
 */
declare var URLScheme: {
    /**
     * _URL for opening the script._
     *
     * Gets the URL for opening the current script. When making a request to the returned URL from another app, e.g. Safari, the script will be opened.
     * @see https://docs.scriptable.app/urlscheme/#foropeningscript
     */
    forOpeningScript(): string;

    /**
     * _URL for opening script settings._
     *
     * Gets the URL for opening the settings of the current script. When making a request to the returned URL from another app, e.g. Safari, the settings of the current script will be
     * opened.
     * @see https://docs.scriptable.app/urlscheme/#foropeningscriptsettings
     */
    forOpeningScriptSettings(): string;

    /**
     * _URL for running script._
     *
     * Gets the URL for running the current script. When making a request to the returned URL from another app, e.g. Safari, the current script will run.
     *
     * Get the query parameters using `args.queryParameters`.
     * @see https://docs.scriptable.app/urlscheme/#forrunningscript
     */
    forRunningScript(): string;
};

/**
 * _Unique identifier._
 * @see https://docs.scriptable.app/uuid
 */
declare var UUID: {
    /**
     * _Generate a UUID._
     *
     * Used for getting the string value of a newly generated UUID.
     * @see https://docs.scriptable.app/uuid/#string
     */
    string(): string;
};

/**
 * _Presents websites and evaluates JavaScript on websites._
 *
 * Constructs a new web view. Use a web view to evaluate JavaScript on websites.
 * @see https://docs.scriptable.app/webview/#-new-webview
 */
declare class WebView {
    /**
     * _Presents websites and evaluates JavaScript on websites._
     *
     * Constructs a new web view. Use a web view to evaluate JavaScript on websites.
     * @see https://docs.scriptable.app/webview/#-new-webview
     */
    constructor();

    /**
     * _Loads HTML and renders it._
     * @param html - HTML to load and render.
     * @param baseURL - Optional. Base URL used to resolve relative URLs in the HTML.
     * @param preferredSize - Optional. Preferred size of the view. This size is not guaranteed to be respected and is only used when the script is run with Siri or in the Shortcuts app.
     * @param fullscreen - Optional. Set to true to present the web view in fullscreen. This only has an effect when used within the app. Defaults to false.
     * @see https://docs.scriptable.app/webview/#loadhtml
     */
    static loadHTML(html: string, baseURL?: string, preferredSize?: Size, fullscreen?: boolean): Promise<void>;

    /**
     * _Loads a file and renders it._
     *
     * Files can be of various types, including HTML files and images.
     *
     * The supplied HTML file can reference files and nested directories in the same directory as the HTML file resides.
     *
     * The optional `preferredSize` parameter is ignored unless the script is run in a Siri Shortcut.
     *
     * If you are displaying large images in a memory constrained envrionment, for example in a Siri Shortcut, you should use the WebView bridge instead of the QuickLook bridge. The
     * technical reason for this is that a Siri Shortcut and other app extension processes have very limited memory and loading a very large image will cause the app extension to be
     * terminated. However, the web view will run in a different process meaning that it is not affected by the same memory constraints.
     * @param fileURL - URL of the file to load and render.
     * @param preferredSize - Optional. Preferred size of the view. This size is not guaranteed to be respected and is only used when the script is run with Siri or in the Shortcuts app.
     * @param fullscreen - Optional. Set to true to present the web view in fullscreen. This only has an effect when used within the app. Defaults to false.
     * @see https://docs.scriptable.app/webview/#loadfile
     */
    static loadFile(fileURL: string, preferredSize?: Size, fullscreen?: boolean): Promise<void>;

    /**
     * _Loads URL in web view and presents the web view._
     *
     * The optional `preferredSize` parameter is ignored unless the script is run in a Siri Shortcut.
     * @param url - URL to load into the web view.
     * @param preferredSize - Optional. Preferred size of the view. This size is not guaranteed to be respected and is only used when the script is run with Siri or in the Shortcuts app.
     * @param fullscreen - Optional. Set to true to present the web view in fullscreen. This only has an effect when used within the app. Defaults to false.
     * @see https://docs.scriptable.app/webview/#loadurl
     */
    static loadURL(url: string, preferredSize?: Size, fullscreen?: boolean): Promise<void>;

    /**
     * _Loads URL in web view._
     *
     * Loads the URL in the web view. The returned promise will complete once the web view has finished loading.
     * @param url - URL to load into the web view.
     * @see https://docs.scriptable.app/webview/#-loadurl
     */
    loadURL(url: string): Promise<void>;

    /**
     * _Loads request in web view._
     *
     * When loading a request into the web view, the HTTP method, body and headers of the request will be respected. The onRedirect function on the request will not be invoked.
     * @param request - Request to load into the web view.
     * @see https://docs.scriptable.app/webview/#-loadrequest
     */
    loadRequest(request: Request): Promise<void>;

    /**
     * _Loads HTML in web view._
     *
     * Loads the HTML into the web view. The returned promise will complete once the web view has finished loading.
     * @param html - HTML to load into the web view.
     * @param baseURL - Optional. Base URL used to resolve relative URLs in the HTML.
     * @see https://docs.scriptable.app/webview/#-loadhtml
     */
    loadHTML(html: string, baseURL?: string): Promise<void>;

    /**
     * _Loads file in the web view._
     *
     * Files can be of various types, including HTML files and images.
     *
     * The supplied HTML file can reference files and nested directories in the same directory as the HTML file resides.
     * @param fileURL - URL of the file to load and render.
     * @see https://docs.scriptable.app/webview/#-loadfile
     */
    loadFile(fileURL: string): Promise<void>;

    /**
     * _Evaluates JavaScript in the web view._
     *
     * Evaluates JavaScript in the current context of the web view. The returned promise carries the result of evaluating the JavaScript.
     *
     * When passing `false` to the `useCallback` parameter, which is the default value, evaluation will terminate after evaluating the last line of the JavaScript. The value on the last
     * line of the script will be carried by the promise returned by `evaluateJavaScript`.
     *
     * When passing `true` to the `useCallback` parameter, evaluation will only complete after the globally available `completion` function is called. Any value passed to the function,
     * will be carried by the promise returned by `evaluateJavaScript`.
     *
     * The log is available from the evaluated JavaScript, i.e. messages passed to the globally available `log` and `logError` functions will be shown in the log.
     * @param javaScript - JavaScript to evaluate in the web view.
     * @param useCallback - Optional. If true the web view waits for the globally available completion function of the web view to be called before terminating. Defaults to false.
     * @see https://docs.scriptable.app/webview/#-evaluatejavascript
     */
    evaluateJavaScript(javaScript: string, useCallback?: boolean): Promise<any>;

    /**
     * _Reads and returns HTML from the loaded website._
     * @see https://docs.scriptable.app/webview/#-gethtml
     */
    getHTML(): Promise<any>;

    /**
     * _Presents the web view._
     *
     * The web view is presented with the content that has been loaded into it.
     * @param fullscreen - Set to true to present the web view in fullscreen. Defaults to false.
     * @see https://docs.scriptable.app/webview/#-present
     */
    present(fullscreen?: boolean): Promise<void>;

    /**
     * _Waits for the web view to load._
     *
     * The returned promise will be fulfilled when the web view finishes loading. If the load fails, the promise will be fulfilled with an error. Use this with caution. If the web view is
     * not loading a new page or is not about to load a new page, the returned promise will never be fulfilled. This limitation exists because Scriptable cannot determine if a web view is
     * about to load a page in cases where evaluating JavaScript in the web view causes a new page to load.
     *
     * Generally this should only be used when loading causing a new page to load from `evaluateJavaScript`. In other cases, e.g. when loading a URL using `loadURL`, the returned promise
     * will be fulfilled when the page has been loaded.
     * @see https://docs.scriptable.app/webview/#-waitforload
     */
    waitForLoad(): Promise<any>;

    /**
     * _Function called upon load of a request._
     *
     * When the web view performs a request to load a resource, the function can determine whether or not to allow the request. Disallowing request can speed up the time it takes to load
     * the website. Requests made from JavaScript in the page are not passed to this function.
     *
     * By default all requests are allowed.
     * @see https://docs.scriptable.app/webview/#shouldallowrequest
     */
    shouldAllowRequest: (arg0: Request) => boolean;
}

/**
 * _Date element shown in a widget._
 * @see https://docs.scriptable.app/widgetdate
 */
declare class WidgetDate {
    /**
     * _Date to show in a widget._
     * @see https://docs.scriptable.app/widgetdate/#date
     */
    date: Date;

    /**
     * _Color of the text._
     * @see https://docs.scriptable.app/widgetdate/#textcolor
     */
    textColor: Color;

    /**
     * _Font and text size of the text._
     * @see https://docs.scriptable.app/widgetdate/#font
     */
    font: Font;

    /**
     * _Opacity of the text._
     *
     * Opacity of the text. This must be a value between 0 and 1. Defaults to 1.
     * @see https://docs.scriptable.app/widgetdate/#textopacity
     */
    textOpacity: number;

    /**
     * _Maximum number of lines._
     *
     * Maximum number of lines to display. The limit is disabled when the value is 0 or less. Defaults to 0.
     * @see https://docs.scriptable.app/widgetdate/#linelimit
     */
    lineLimit: number;

    /**
     * _Minimum amount the text scales down to._
     *
     * Sets the minimum amount that text scales down to fit in the available space. For example, a text with a minimum scale factor of 0.5 allows the widget to draw the text in a font
     * size half the size of the actual font. The scale factor should be a fraction between 0 and 1, both inclusive. Defaults to 1.
     * @see https://docs.scriptable.app/widgetdate/#minimumscalefactor
     */
    minimumScaleFactor: number;

    /**
     * _Color of the shadow._
     *
     * Sets the color of the shadow cast by the text. The `shadowRadius` property must have a value greater than zero for this property to have an effect. Defaults to black.
     * @see https://docs.scriptable.app/widgetdate/#shadowcolor
     */
    shadowColor: Color;

    /**
     * _Size of the shadow._
     *
     * Sets the size of the shadow cast by the text. Defaults to 0.
     * @see https://docs.scriptable.app/widgetdate/#shadowradius
     */
    shadowRadius: number;

    /**
     * _Offset of the shadow._
     *
     * Sets the offset of the shadow cast by the text. The `shadowRadius` property must have a value greater than zero for this property to have an effect. Defaults to (0, 0).
     * @see https://docs.scriptable.app/widgetdate/#shadowoffset
     */
    shadowOffset: Point;

    /**
     * _URL to open._
     *
     * The URL will be opened when the text is tapped. This is only supported in medium and large widgets. Small widgets can only have a single tap target, which is specified by the `url`
     * property on the widget.
     * @see https://docs.scriptable.app/widgetdate/#url
     */
    url: string;

    /**
     * _Left aligns the text._
     *
     * Specifies that text should be left aligned. This is the default.
     *
     * This does not affect texts placed in stacks. Use spacers instead when aligning text in stacks. To align the text to left in a horizontal stack, you should place a spacer
     * after the text.
     * @see https://docs.scriptable.app/widgetdate/#-leftaligntext
     */
    leftAlignText(): void;

    /**
     * _Center aligns the text._
     *
     * Specifies that text should be center aligned.
     *
     * This does not affect texts placed in stacks. Use spacers instead when aligning text in stacks. To align the text in the center of a horizontal stack, you should place a spacer both
     * before and after the text.
     * @see https://docs.scriptable.app/widgetdate/#-centeraligntext
     */
    centerAlignText(): void;

    /**
     * _Right aligns the text._
     *
     * Specifies that text should be right aligned.
     *
     * This does not affect texts placed in stacks. Use spacers instead when aligning text in stacks. To align the text to the right in a horizontal stack, you should place a spacer
     * before the text.
     * @see https://docs.scriptable.app/widgetdate/#-rightaligntext
     */
    rightAlignText(): void;

    /**
     * _Display time component of the date._
     *
     * Example output: 11:23PM
     * @see https://docs.scriptable.app/widgetdate/#-applytimestyle
     */
    applyTimeStyle(): void;

    /**
     * _Display entire date._
     *
     * Example output: June 3, 2019
     *
     * This is the default.
     * @see https://docs.scriptable.app/widgetdate/#-applydatestyle
     */
    applyDateStyle(): void;

    /**
     * _Display date as relative to now._
     *
     * Example output: 2 hours, 23 minutes 1 year, 1 month
     * @see https://docs.scriptable.app/widgetdate/#-applyrelativestyle
     */
    applyRelativeStyle(): void;

    /**
     * _Display date as offset from now._
     *
     * Example output: +2 hours -3 months
     * @see https://docs.scriptable.app/widgetdate/#-applyoffsetstyle
     */
    applyOffsetStyle(): void;

    /**
     * _Display date as timer counting from now._
     *
     * Example output: 2:32 36:59:01
     * @see https://docs.scriptable.app/widgetdate/#-applytimerstyle
     */
    applyTimerStyle(): void;
}

/**
 * _Image element shown in widget._
 * @see https://docs.scriptable.app/widgetimage
 */
declare class WidgetImage {
    /**
     * _Image to show in widget._
     * @see https://docs.scriptable.app/widgetimage/#image
     */
    image: Image;

    /**
     * _Whether the image is resizable._
     *
     * When set to true, the image can be resized. Defaults to true.
     * @see https://docs.scriptable.app/widgetimage/#resizable
     */
    resizable: boolean;

    /**
     * _Size of the image in the widget._
     *
     * Size of the image. When set to null, the image will be shwon at its full size. Defaults to null.
     * @see https://docs.scriptable.app/widgetimage/#imagesize
     */
    imageSize: Size;

    /**
     * _Opacity when shown in widget._
     *
     * Opacity of the image. This must be a value between 0 and 1. Defaults to 1.
     * @see https://docs.scriptable.app/widgetimage/#imageopacity
     */
    imageOpacity: number;

    /**
     * _Radius of the corners._
     *
     * Radius of the rounded corners. This property is ignored when `containerRelativeShape` is set to true. Defaults to 0.
     * @see https://docs.scriptable.app/widgetimage/#cornerradius
     */
    cornerRadius: number;

    /**
     * _Border width._
     *
     * Width of the border around the image. Defaults to 0.
     * @see https://docs.scriptable.app/widgetimage/#borderwidth
     */
    borderWidth: number;

    /**
     * _Border color._
     *
     * Color of the border around the image. Defaults to black.
     * @see https://docs.scriptable.app/widgetimage/#bordercolor
     */
    borderColor: Color;

    /**
     * _Shape the image relative to its container._
     *
     * When true the corners of the image will be rounded relative to the containing widget. The value of `cornerRadius` is ignored when this is true. Defaults to false.
     * @see https://docs.scriptable.app/widgetimage/#containerrelativeshape
     */
    containerRelativeShape: boolean;

    /**
     * _Tint color of the image._
     *
     * Changes the color of the image. Set to `null` to show the original image. Defaults to `null`.
     * @see https://docs.scriptable.app/widgetimage/#tintcolor
     */
    tintColor: Color;

    /**
     * _URL to open._
     *
     * The URL will be opened when the image is tapped. This is only supported in medium and large widgets. Small widgets can only have a single tap target, which is specified by the `url`
     * on the widget.
     * @see https://docs.scriptable.app/widgetimage/#url
     */
    url: string;

    /**
     * _Left aligns the image._
     *
     * Specifies that image should be left aligned. This is the default.
     * @see https://docs.scriptable.app/widgetimage/#-leftalignimage
     */
    leftAlignImage(): void;

    /**
     * _Center aligns the image._
     *
     * Specifies that image should be center aligned.
     * @see https://docs.scriptable.app/widgetimage/#-centeralignimage
     */
    centerAlignImage(): void;

    /**
     * _Right aligns the image._
     *
     * Specifies that image should be right aligned.
     * @see https://docs.scriptable.app/widgetimage/#-rightalignimage
     */
    rightAlignImage(): void;

    /**
     * _Uses fitting content mode._
     *
     * The image will fit the available space. This content mode is the default.
     * @see https://docs.scriptable.app/widgetimage/#-applyfittingcontentmode
     */
    applyFittingContentMode(): void;

    /**
     * _Uses filling content mode._
     *
     * The image will fill the available space.
     * @see https://docs.scriptable.app/widgetimage/#-applyfillingcontentmode
     */
    applyFillingContentMode(): void;
}

/**
 * _Spacer element shown in widget._
 * @see https://docs.scriptable.app/widgetspacer
 */
declare class WidgetSpacer {
    /**
     * _Amount of space this spacer consumes._
     * @see https://docs.scriptable.app/widgetspacer/#length
     */
    length: number;
}

/**
 * _Stack element shown in widget._
 * @see https://docs.scriptable.app/widgetstack
 */
declare class WidgetStack {
    /**
     * _Background color of the stack._
     * @see https://docs.scriptable.app/widgetstack/#backgroundcolor
     */
    backgroundColor: Color;

    /**
     * _Background image._
     * @see https://docs.scriptable.app/widgetstack/#backgroundimage
     */
    backgroundImage: Image;

    /**
     * _Background gradient._
     * @see https://docs.scriptable.app/widgetstack/#backgroundgradient
     */
    backgroundGradient: LinearGradient;

    /**
     * _Spacing between elements._
     *
     * Specifies the spacing between elements in the stack. You can also use the `addSpacer()` function on the widget to add spacing between elements. Defaults to 0.
     * @see https://docs.scriptable.app/widgetstack/#spacing
     */
    spacing: number;

    /**
     * _Size of the stack._
     *
     * Specifies the size of the stack when shown in a widget. When a dimension is set to zero or less, the widget will automatically decide a length for that dimension. Both dimensions
     * default to 0.
     * @see https://docs.scriptable.app/widgetstack/#size
     */
    size: Size;

    /**
     * _Radius of the corners._
     *
     * Radius of the rounded corners. Defaults to 0.
     * @see https://docs.scriptable.app/widgetstack/#cornerradius
     */
    cornerRadius: number;

    /**
     * _Border width._
     *
     * Width of the border around the stack. Defaults to 0.
     * @see https://docs.scriptable.app/widgetstack/#borderwidth
     */
    borderWidth: number;

    /**
     * _Border color._
     *
     * Color of the border around the stack. Defaults to black.
     * @see https://docs.scriptable.app/widgetstack/#bordercolor
     */
    borderColor: Color;

    /**
     * _URL to open._
     *
     * The URL will be opened when the stack is tapped. This is only supported in medium and large widgets. Small widgets can only have a single tap target, which is specified by the `url`
     * on the widget.
     * @see https://docs.scriptable.app/widgetstack/#url
     */
    url: string;

    /**
     * _Add text to the stack._
     *
     * Adds a text element to the stack. Use the properties on the returned element to style the text.
     * @see https://docs.scriptable.app/widgetstack/#-addtext
     */
    addText(text: string): WidgetText;

    /**
     * _Add date to the widget._
     *
     * Adds a date element to the widget. Use the properties on the returned element to style the date.
     * @see https://docs.scriptable.app/widgetstack/#-adddate
     */
    addDate(date: Date): WidgetDate;

    /**
     * _Add image to the stack._
     *
     * Adds an image element to the stack. Use the properties on the returned element to style the image.
     * @see https://docs.scriptable.app/widgetstack/#-addimage
     */
    addImage(image: Image): WidgetImage;

    /**
     * _Add spacer._
     *
     * Adds a spacer to the stack. This can be used to offset the content horizontally in the stack.
     * @param length - Length of the spacer. Pass null to create a spacer with a flexible length.
     * @see https://docs.scriptable.app/widgetstack/#-addspacer
     */
    addSpacer(length: number): WidgetSpacer;

    /**
     * _Add stack._
     *
     * Adds a stack to the widget. Stacks layout elements horizontally by default.
     * @see https://docs.scriptable.app/widgetstack/#-addstack
     */
    addStack(): WidgetStack;

    /**
     * _Set padding._
     *
     * Sets the padding on each side of the stack.
     * @param top - Padding on the top edge.
     * @param leading - Padding on the leading edge.
     * @param bottom - Padding on the bottom edge.
     * @param trailing - Padding on the trailing edge.
     * @see https://docs.scriptable.app/widgetstack/#-setpadding
     */
    setPadding(top: number, leading: number, bottom: number, trailing: number): void;

    /**
     * _Use the default padding._
     *
     * Configure the stack to use the default padding. Any padding previously defined with `setPadding()` will be discarded.
     * @see https://docs.scriptable.app/widgetstack/#-usedefaultpadding
     */
    useDefaultPadding(): void;

    /**
     * _Top aligns the content._
     *
     * Specifies that the content should be top aligned. This is the default.
     * @see https://docs.scriptable.app/widgetstack/#-topaligncontent
     */
    topAlignContent(): void;

    /**
     * _Center aligns the content._
     *
     * Specifies that the content should be center aligned.
     * @see https://docs.scriptable.app/widgetstack/#-centeraligncontent
     */
    centerAlignContent(): void;

    /**
     * _Bottom aligns the content._
     *
     * Specifies that the content should be bottom aligned.
     * @see https://docs.scriptable.app/widgetstack/#-bottomaligncontent
     */
    bottomAlignContent(): void;

    /**
     * _Layout elements horizontally._
     *
     * Specifies that the stack should layout elements horizontally. This is the default.
     * @see https://docs.scriptable.app/widgetstack/#-layouthorizontally
     */
    layoutHorizontally(): void;

    /**
     * _Layout elements vertically._
     *
     * Specifies that the stack should layout elements vertically.
     * @see https://docs.scriptable.app/widgetstack/#-layoutvertically
     */
    layoutVertically(): void;
}

/**
 * _Text element shown in a widget._
 * @see https://docs.scriptable.app/widgettext
 */
declare class WidgetText {
    /**
     * _Text to show in a widget._
     * @see https://docs.scriptable.app/widgettext/#text
     */
    text: string;

    /**
     * _Color of the text._
     * @see https://docs.scriptable.app/widgettext/#textcolor
     */
    textColor: Color;

    /**
     * _Font and text size of the text._
     * @see https://docs.scriptable.app/widgettext/#font
     */
    font: Font;

    /**
     * _Opacity of the text._
     *
     * Opacity of the text. This must be a value between 0 and 1. Defaults to 1.
     * @see https://docs.scriptable.app/widgettext/#textopacity
     */
    textOpacity: number;

    /**
     * _Maximum number of lines._
     *
     * Maximum number of lines to display. The limit is disabled when the value is 0 or less. Defaults to 0.
     * @see https://docs.scriptable.app/widgettext/#linelimit
     */
    lineLimit: number;

    /**
     * _Minimum amount the text scales down to._
     *
     * Sets the minimum amount that text scales down to fit in the available space. For example, a text with a minimum scale factor of 0.5 allows the widget to draw the text in a font
     * size half the size of the actual font. The scale factor should be a fraction between 0 and 1, both inclusive. Defaults to 1.
     * @see https://docs.scriptable.app/widgettext/#minimumscalefactor
     */
    minimumScaleFactor: number;

    /**
     * _Color of the shadow._
     *
     * Sets the color of the shadow cast by the text. The `shadowRadius` property must have a value greater than zero for this property to have an effect. Defaults to black.
     * @see https://docs.scriptable.app/widgettext/#shadowcolor
     */
    shadowColor: Color;

    /**
     * _Size of the shadow._
     *
     * Sets the size of the shadow cast by the text. Defaults to 0.
     * @see https://docs.scriptable.app/widgettext/#shadowradius
     */
    shadowRadius: number;

    /**
     * _Offset of the shadow._
     *
     * Sets the offset of the shadow cast by the text. The `shadowRadius` property must have a value greater than zero for this property to have an effect. Defaults to (0, 0).
     * @see https://docs.scriptable.app/widgettext/#shadowoffset
     */
    shadowOffset: Point;

    /**
     * _URL to open._
     *
     * The URL will be opened when the text is tapped. This is only supported in medium and large widgets. Small widgets can only have a single tap target, which is specified by the `url`
     * property on the widget.
     * @see https://docs.scriptable.app/widgettext/#url
     */
    url: string;

    /**
     * _Left aligns the text._
     *
     * Specifies that text should be left aligned. This is the default.
     *
     * This does not affect texts placed in stacks. Use spacers instead when aligning text in stacks. To align the text to left in a horizontal stack, you should place a spacer
     * after the text.
     * @see https://docs.scriptable.app/widgettext/#-leftaligntext
     */
    leftAlignText(): void;

    /**
     * _Center aligns the text._
     *
     * Specifies that text should be center aligned.
     *
     * This does not affect texts placed in stacks. Use spacers instead when aligning text in stacks. To align the text in the center of a horizontal stack, you should place a spacer both
     * before and after the text.
     * @see https://docs.scriptable.app/widgettext/#-centeraligntext
     */
    centerAlignText(): void;

    /**
     * _Right aligns the text._
     *
     * Specifies that text should be right aligned.
     *
     * This does not affect texts placed in stacks. Use spacers instead when aligning text in stacks. To align the text to the right in a horizontal stack, you should place a spacer
     * before the text.
     * @see https://docs.scriptable.app/widgettext/#-rightaligntext
     */
    rightAlignText(): void;
}

/**
 * _Event driven XML parser._
 *
 * Constructs an event driven XML parser. It does not do any parsing on its own and therefore the callback functions must be set before starting to parse.
 * @see https://docs.scriptable.app/xmlparser/#-new-xmlparser
 */
declare class XMLParser {
    /**
     * _XML string to be parsed._
     * @see https://docs.scriptable.app/xmlparser/#string
     */
    string: string;

    /**
     * _Event driven XML parser._
     *
     * Constructs an event driven XML parser. It does not do any parsing on its own and therefore the callback functions must be set before starting to parse.
     * @param string - XML string to be parsed.
     * @see https://docs.scriptable.app/xmlparser/#-new-xmlparser
     */
    constructor(string: string);

    /**
     * _Starts parsing._
     *
     * Before calling this function you should ensure that the parser is correctly configured, i.e. the necessary callback functions should be set.
     * @see https://docs.scriptable.app/xmlparser/#-parse
     */
    parse(): boolean;

    /**
     * _Function called when the parser begins parsing a document._
     * @see https://docs.scriptable.app/xmlparser/#didstartdocument
     */
    didStartDocument: () => void;

    /**
     * _Function called when the parser ends parsing a document._
     *
     * When the parser calls the function, it has successfully completed parsing the document.
     * @see https://docs.scriptable.app/xmlparser/#didenddocument
     */
    didEndDocument: () => void;

    /**
     * _Function called when starting to parse an element._
     *
     * Called by the parser when it encounters a start tag for an element. The function takes the element name as a parameter as well as a key value pair containing all the attributes
     * associated with the element.
     *
     * Use this function to update your state and prepare for receiving the characters of the element. After this function is called, the parser will call the foundCharacters callback
     * function with all or parts of the characters of the element.
     * @see https://docs.scriptable.app/xmlparser/#didstartelement
     */
    didStartElement: (arg0: string, arg1: { [key: string]: string }) => void;

    /**
     * _Function called when ended parsing an element._
     *
     * Called by the parser when it encounters an end tag for an element. The function takes the element name as a parameter.
     * @see https://docs.scriptable.app/xmlparser/#didendelement
     */
    didEndElement: (arg0: string) => void;

    /**
     * _Function called when the parser finds characters of an element._
     *
     * The parser calls this function with a string whenever it finds characters for the current element. This function may be called several times for a single element.
     * @see https://docs.scriptable.app/xmlparser/#foundcharacters
     */
    foundCharacters: (arg0: string) => void;

    /**
     * _Function called when the parser encounters an error._
     *
     * The parser will call this function when it encounters a fatal error preventing it from continuing to parse. When the function is called the parsing is stopped.
     * @see https://docs.scriptable.app/xmlparser/#parseerroroccurred
     */
    parseErrorOccurred: (arg0: string) => void;
}

/**
 * _Logs a message to the console._
 */
declare function log(message: any): void;

/**
 * _Logs a warning message to the console._
 */
declare function logWarning(message: any): void;

/**
 * _Logs an error message to the console._
 */
declare function logError(message: any): void;

/**
 * _Converts base64 string to ascii._
 */
declare function atob(str: string): string;

/**
 * _Converts ascii string to base64._
 */
declare function btoa(str: string): string;

/**
 * _Imports module with specified name._
 *
 * Modules are imported by specifying the name of the file. For example, to import the file `foo.js`, call `importModule('foo')`. Including the file extension is optional. Scriptable
 * will look for modules in the following directories, in order:
 *
 * 1.  Relative to the file the module is imported into.
 * 2.  In Scriptables folder in iCloud if you have iCloud Drive enabled. This folder is accessible from the Files app.
 * 3.  In Scriptables "app group" folder which is not accessible to the user but your scripts are stored in this folder if you do not have iCloud Drive enabled.
 * 4.  In Scriptables local folder. This folder is accessible from the Files app.
 *
 * You can specify a file path rather than the name of a file e.g. `importModule('/lib/foo')`. If the path points to a directory, Scriptable will look for a file named `index.js` in
 * the directory.
 *
 * The `importModule` function returns `module.exports` of the imported module.
 *
 * Consider the following file.
 *
 *     let circle = importModule('circle')
 *     let r = 2
 *     let area = circle.area(r)
 *     log('Area of circle: ' + area)
 *
 * The file imports the module `circle.js` which has the following contents.
 *
 *     module.exports.area = (r) => {
 *       return Math.PI * Math.pow(r, 2)
 *     }
 *
 *     module.exports.circumference = (r) => {
 *       return 2 * Math.PI * r
 *     }
 *
 * The `circle.js` module exports the functions `area` and `circumference`.
 *
 * For more information about modules, refer to the documentation on the `module` variable.
 * @see https://docs.scriptable.app/importmodule
 */
declare function importModule(path: string): any;
