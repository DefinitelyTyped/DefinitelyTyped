// Type definitions for dav 1.7
// Project: https://github.com/lambdabaa/dav/, https://github.com/gaye/dav
// Definitions by: ToastHawaii <https://github.com/ToastHawaii>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export let version: string;

/**
 * Perform an initial download of a caldav or carddav account's data.
 * @param options
 * @returns a Promise which will be fulfilled with a dav.Account object.
 */
export function createAccount(options: CreateAccountOptions): Promise<Account>;

export interface CreateAccountOptions {
    /**
     * one of 'caldav' or 'carddav'. Defaults to 'caldav'.
     */
    accountType?: "caldav" | "carddav";

    /**
     * list of caldav filters to send with request.
     */
    filters?: object[];

    /**
     *  whether or not to load dav collections.
     */
    loadCollections?: boolean;

    /**
     * whether or not to load dav objects.
     */
    loadObjects?: boolean;

    /**
     * request sandox.
     */
    sandbox?: Sandbox | {};

    /**
     *  some url for server (needn't be base url).
     */
    server: string;

    /**
     * VTIMEZONE calendar object.
     */
    timezone?: string;

    /**
     * request sender.
     */

    xhr?: transport.Transport;
}

/**
 * Create a calendar object on the parameter calendar.
 * @param calendar the calendar to put the object on.
 * @param options
 * @returns a Promise which will be fulfilled when the calendar has been created.
 */
export function createCalendarObject(calendar: Calendar, options: CreateCalendarObjectOptions): Promise<CalendarObject>;

export interface CreateCalendarObjectOptions {
    /**
     * rfc 5545 VCALENDAR object.
     */
    data: string;

    /**
     * name for the calendar ics file.
     */
    filename: string;

    /**
     * request sandbox.
     */
    sandbox?: Sandbox;

    /**
     * request sender.
     */
    xhr?: transport.Transport;
}

/**
 * Persist updates to the parameter calendar object to the server.
 * @param calendarObject updated calendar object.
 * @param options
 * @returns a Promise which will be fulfilled when the calendar has been updated.
 */
export function updateCalendarObject(calendarObject: CalendarObject, options: UpdateCalendarObjectOptions): Promise<CalendarObject>;

export interface UpdateCalendarObjectOptions {
    /**
     * request sandbox.
     */
    sandbox?: Sandbox;

    /**
     * request sender.
     */
    xhr?: transport.Transport;
}

/**
 * Delete the parameter calendar object on the server.
 * @param calendarObject target calendar object.
 * @param options
 * @returns a Promise which will be fulfilled when the calendar has been deleted.
 */
export function deleteCalendarObject(calendarObject: CalendarObject, options: DeleteCalendarObjectOptions): Promise<CalendarObject>;

export interface DeleteCalendarObjectOptions {
    /**
     * request sandbox.
     */
    sandbox?: Sandbox;

    /**
     * request sender.
     */
    xhr?: transport.Transport;
}

/**
 * Fetch changes from the remote server to the parameter calendar.
 * @param calendar the calendar to fetch changes for.
 * @param options
 * @returns a Promise which will be fulfilled with an updated dav.Calendar object once sync is complete.
 */
export function syncCalendar(calendar: Calendar, options: SyncCalendarOptions): Promise<Calendar>;

export interface SyncCalendarOptions {
    /**
     * list of caldav filters to send with request.
     */
    filters?: object[];

    /**
     * request sandbox.
     */
    sandbox?: Sandbox;

    /**
     * either 'basic' or 'webdav'. If unspecified, will try to do webdav sync
     * and failover to basic sync if rfc 6578 is not supported by the server.
     */
    syncMethod?: "basic" | "webdav";

    /**
     * VTIMEZONE calendar object.
     */
    timezone?: string;

    /**
     * request sender.
     */
    xhr?: transport.Transport;
}

/**
 * Fetch changes from the remote server to the account's calendars.
 * @param account the calendar account to sync.
 * @param options
 * @returns a Promise which will be fulfilled with an updated dav.Account object once sync is complete.
 */
export function syncCaldavAccount(account: Account, options: SyncCaldavAccountOptions): Promise<Account>;

export interface SyncCaldavAccountOptions {
    /**
     * list of caldav filters to send with request.
     */
    filters?: object[];

    /**
     * request sandbox.
     */
    sandbox?: Sandbox;

    /**
     * either 'basic' or 'webdav'. If unspecified, will try to do webdav sync
     * and failover to basic sync if rfc 6578 is not supported by the server.
     */
    syncMethod?: "basic" | "webdav";

    /**
     * VTIMEZONE calendar object.
     */
    timezone?: string;

    /**
     * request sender.
     */
    xhr?: transport.Transport;
}

/**
 * Create a vcard object on the parameter address book.
 * @param addressBook the address book to put the object on.
 * @param options
 * @returns a Promise which will be fulfilled when the vcard has been created.
 */
export function createCard(addressBook: AddressBook, options: CreateCardOptions): Promise<AddressBook>;

export interface CreateCardOptions {
    /**
     * VCARD object.
     */
    data: string;
    /**
     * name for the vcard vcf file.
     */
    filename: string;

    /**
     * request sandbox.
     */
    sandbox?: Sandbox;
    /**
     * request sender.
     */
    xhr?: transport.Transport;
}

/**
 *     Persist updates to the parameter vcard object to the server.
 * @param  card updated vcard object.
 * @param options
 * @returns a Promise which will be fulfilled when the vcard has been updated.
 */
export function updateCard(card: VCard, options: UpdateCardOptions): Promise<VCard>;

export interface UpdateCardOptions {
    /**
     * request sandbox.
     */
    sandbox?: Sandbox;
    /**
     * request sender.
     */
    xhr?: transport.Transport;
}

/**
 * Delete the parameter vcard object on the server.
 * @param card target vcard object.
 * @param options
 * @returns a Promise which will be fulfilled when the vcard has been deleted.
 */
export function deleteCard(card: VCard, options: DeleteCardOptions): Promise<VCard>;

export interface DeleteCardOptions {
    /**
     * request sandbox.
     */
    sandbox?: Sandbox;
    /**
     * request sender.
     */
    xhr?: transport.Transport;
}

/**
 * Fetch changes from the remote server to the parameter address books.
 * @param addressBook the address book to fetch changes for.
 * @param options
 * @returns a Promise which will be fulfilled with an updated AddressBook object once sync is complete.
 */
export function syncAddressBook(addressBook: AddressBook, options: SyncAddressBookOptions): Promise<AddressBook>;

export interface SyncAddressBookOptions {
    /**
     * request sandbox.
     */
    sandbox?: Sandbox;
    /**
     * either 'basic' or 'webdav'.If unspecified, will try to do webdav sync
     * and failover to basic sync if rfc 6578 is not supported by the server.
     */
    syncMethod?: "basic" | "webdav";

    /**
     * request sender.
     */
    xhr?: transport.Transport;
}

/**
 * Fetch changes from the remote server to the account's address books.
 * @param  account the address book account to sync.
 * @param options
 * @returns a Promise which will be fulfilled with an updated Account object once sync is complete.
 */
export function syncCarddavAccount(account: Account, options: SyncCarddavAccountOptions): Promise<Account>;

export interface SyncCarddavAccountOptions {
    /**
     * list of caldav filters to send with request.
     */
    filters?: object[];

    /**
     * request sandbox.
     */
    sandbox?: Sandbox;

    /**
     * either 'basic' or 'webdav'. If unspecified, will try to do webdav sync
     * and failover to basic sync if rfc 6578 is not supported by the server.
     */
    syncMethod?: "basic" | "webdav";

    /**
     * VTIMEZONE calendar object.
     */
    timezone?: string;

    /**
     * request sender.
     */
    xhr?: transport.Transport;
}

/**
 * Create a request sandbox.
 */
export class Sandbox {
    constructor();

    requestList: any[];

    add(request: any): void;

    /**
     * abort sandboxed requests as a group.
     */
    abort(): void;
}

/**
 * @deprecated
 */
export function createSandbox(): Sandbox;

export namespace transport {
    class Transport {
        /**
         * @param credentials user authorization.
         */
        constructor(credentials: Credentials);

        send(request: Request, url: string, options?: TransportOptions): Promise<any>;
    }

    interface TransportOptions {
        /**
         *  request sandbox.
         */
        sandbox?: Sandbox;

        retry?: boolean;
    }

    class Basic extends Transport {
        /**
         * Create a new Basic object. This sends dav requests using http basic authentication.
         * @param credentials user authorization.
         */
        constructor(credentials: Credentials);

        /**
         *
         * @param request object with request info.
         * @param url
         * @param options
         * @return a promise that will be resolved with an xhr request after
         * its readyState is 4 or the result of applying an optional request
         * `transformResponse` function to the xhr object after its readyState
         * is 4.
         */
        send(request: Request, url: string, options?: TransportOptions): Promise<any>;
    }

    /**
     * Create a new OAuth2 object.This sends dav requests authorized via rfc 6749 oauth2.
     * @param credentials user authorization.
     */
    class OAuth2 extends Transport {
        constructor(credentials: Credentials);

        /**
         *
         * @param request object with request info.
         * @param url
         * @param options
         * @return a promise that will be resolved with an xhr request after
         * its readyState is 4 or the result of applying an optional request
         * `transformResponse` function to the xhr object after its readyState
         * is 4.
         */
        send(request: Request, url: string, options?: TransportOptions): Promise<any>;
    }
}

export namespace request {
    /**
     *
     * @param options
     * @returns
     */
    function addressBookQuery(options: AddressBookQueryOptions): string;

    interface AddressBookQueryOptions {
        /**
         * value for Depth header.
         */
        depth?: string;

        /**
         * list of props to request.
         */
        props: object[];
    }

    /**
     *
     * @param options
     * @returns
     */
    function basic(options: BasicOptions): Request;

    interface BasicOptions {
        /**
         * put request body.
         */
        data: string;

        /**
         * http method.
         */
        method: string;

        /**
         * cached calendar object etag.
         */
        etag: string;
    }

    /**
     *
     * @param options
     * @returns
     */
    function calendarQuery(options: CalendarQueryOptions): string;

    interface CalendarQueryOptions {
        /**
         * value for Depth header.
         */
        depth?: string;

        /**
         * list of filters to send with request.
         */
        filters: object[];

        /**
         * list of props to request.
         */
        props: object[];

        /**
         * VTIMEZONE calendar object.
         */
        timezone: string;
    }

    /**
     *
     * @param options
     * @returns
     */
    function propfind(options: PropfindOptions): string;

    interface PropfindOptions {
        /**
         *  value for Depth header.
         */
        depth?: string;

        /**
         * list of props to request.
         */
        props: object[];
    }

    /**
     *
     * @param options
     * @returns
     */
    function syncCollection(options: SyncCollectionOptions): string;

    interface SyncCollectionOptions {
        /**
         * option value for Depth header.
         */
        depth?: string;

        /**
         * list of props to request.
         */
        props: object[];

        /**
         * indicates scope of the sync report request.
         */
        syncLevel: number;

        /**
         * synchronization token provided by the server.
         */
        syncToken: string;
    }
}

export class Client {
    /**
     * Create a new Client object. The client interface allows consumers to set
     * their credentials and transport once and then make authorized requests
     * without passing them to each request. Each of the other, public API
     * methods should be available on Client objects.
     * @param xhr request sender.
     * @param options
     */
    constructor(xhr: transport.Transport, options?: ClientOptions);

    /**
     * Send a request using this client's transport (and perhaps baseUrl).
     * @param  req dav request.
     * @param options
     * @return a promise that will be resolved with an xhr request after
     * its readyState is 4 or the result of applying an optional request
     * `transformResponse` function to the xhr object after its readyState
     * is 4.
     */
    send(req: Request, uri: string, options?: ClientSendOptions): Promise<any>;

    /**
     * Perform an initial download of a caldav or carddav account's data.
     * @param options
     * @returns a Promise which will be fulfilled with a dav.Account object.
     */
    createAccount(options?: CreateAccountOptions): Promise<Account>;

    /**
     * Create a calendar object on the parameter calendar.
     * @param calendar the calendar to put the object on.
     * @param options
     * @returns a Promise which will be fulfilled when the calendar has been created.
     */
    createCalendarObject(calendar: Calendar, options?: CreateCalendarObjectOptions): Promise<CalendarObject>;

    /**
     * Persist updates to the parameter calendar object to the server.
     * @param calendarObject updated calendar object.
     * @param options
     * @returns a Promise which will be fulfilled when the calendar has been updated.
     */
    updateCalendarObject(calendarObject: CalendarObject, options?: UpdateCalendarObjectOptions): Promise<CalendarObject>;

    /**
     * Delete the parameter calendar object on the server.
     * @param calendarObject target calendar object.
     * @param options
     * @returns a Promise which will be fulfilled when the calendar has been deleted.
     */
    deleteCalendarObject(calendarObject: CalendarObject, options?: DeleteCalendarObjectOptions): Promise<CalendarObject>;

    /**
     * Fetch changes from the remote server to the parameter calendar.
     * @param calendar the calendar to fetch changes for.
     * @param options
     * @returns a Promise which will be fulfilled with an updated dav.Calendar object once sync is complete.
     */
    syncCalendar(calendar: Calendar, options?: SyncCalendarOptions): Promise<Calendar>;

    /**
     * Fetch changes from the remote server to the account's calendars.
     * @param account the calendar account to sync.
     * @param options
     * @returns a Promise which will be fulfilled with an updated dav.Account object once sync is complete.
     */
    syncCaldavAccount(account: Account, options?: SyncCaldavAccountOptions): Promise<Account>;

    /**
     * Create a vcard object on the parameter address book.
     * @param addressBook the address book to put the object on.
     * @param options
     * @returns a Promise which will be fulfilled when the vcard has been created.
     */
    createCard(addressBook: AddressBook, options?: CreateCardOptions): Promise<AddressBook>;

    /**
     * Persist updates to the parameter vcard object to the server.
     * @param  card updated vcard object.
     * @param options
     * @returns a Promise which will be fulfilled when the vcard has been updated.
     */
    updateCard(card: VCard, options?: UpdateCardOptions): Promise<VCard>;

    /**
     *
     * Delete the parameter vcard object on the server.
     * @param card target vcard object.
     * @param options
     * @returns a Promise which will be fulfilled when the vcard has been deleted.
     */
    deleteCard(card: VCard, options?: DeleteCardOptions): Promise<VCard>;

    /**
     * Fetch changes from the remote server to the parameter address books.
     * @param addressBook the address book to fetch changes for.
     * @param options
     * @returns a Promise which will be fulfilled with an updated AddressBook object once sync is complete.
     */
    syncAddressBook(addressBook: AddressBook, options?: SyncAddressBookOptions): Promise<AddressBook>;

    /**
     * Fetch changes from the remote server to the account's address books.
     * @param  account the address book account to sync.
     * @param options
     * @returns a Promise which will be fulfilled with an updated Account object once sync is complete.
     */
    syncCarddavAccount(account: Account, options?: SyncCarddavAccountOptions): Promise<Account>;
}

export interface ClientOptions {
    /**
     * root url to resolve relative request urls with.
     */
    baseUrl: string;
}

export interface ClientSendOptions {
    /**
     * request sandbox.
     */
    sandbox?: Sandbox;
    /**
     * relative url for request.
     */
    url?: string;
}

export type Partial<T> = {
    [P in keyof T]?: T[P];
};

export class Account {
    constructor(options?: AccountOptions);
    server: string;
    credentials: Credentials;
    rootUrl: string;
    principalUrl: string;
    homeUrl: string;
    calendars: Calendar[];
    addressBooks: AddressBook[];
}

export type AccountOptions = Partial<Account>;

export class Credentials {
    constructor(options?: CredentialsOptions);

    /**
     * username (perhaps email) for calendar user.
     */
    username: string;

    /**
     * plaintext password for calendar user.
     */
    password: string;

    /**
     * oauth client id.
     */
    clientId: string;

    /**
     * oauth client secret.
     */
    clientSecret: string;

    /**
     * oauth code.
     */
    authorizationCode: string;

    /**
     * oauth redirect url.
     */
    redirectUrl: string;

    /**
     * oauth token url.
     */
    tokenUrl: string;

    /**
     * oauth access token.
     */
    accessToken: string;

    /**
     * oauth refresh token.
     */
    refreshToken: string;

    /**
     * unix time for access token expiration.
     */
    expiration: number;
}
export type CredentialsOptions = Partial<Credentials>;

export class DAVCollection<T> {
    constructor(options: DAVCollectionOptions<T>);
    data: string;
    objects: T[];
    account: Account;
    ctag: string;
    description: string;
    displayName: string;
    reports: string[];
    resourcetype: string;
    syncToken: string;
    url: string;
}
export type DAVCollectionOptions<T> = Partial<DAVCollection<T>>;

export class AddressBook extends DAVCollection<VCard> {
    constructor(options?: AddressBookOptions);
}
export type AddressBookOptions = Partial<AddressBook>;

export class Calendar extends DAVCollection<CalendarObject> {
    constructor(options?: CalendarOptions);

    components: string[];
    timezone: string;
}
export type CalendarOptions = Partial<Calendar>;

export class DAVObject {
    constructor(options: DAVObjectOptions);
    data: string;
    etag: string;
    url: string;
}
export type DAVObjectOptions = Partial<DAVObject>;

export class CalendarObject extends DAVObject {
    constructor(options?: CalendarObjectOptions);
    calendar: Calendar;
    calendarData: string;
}
export type CalendarObjectOptions = Partial<CalendarObject>;

export class VCard extends DAVObject {
    constructor(options?: VCardOptions);
    addressBook: AddressBook;
    addressData: string;
}

export type VCardOptions = Partial<VCard>;

export class Request {
    constructor(options?: RequestOptions);
    method: string;
    requestData?: string;
    transformRequest?: (xhr: any) => any;
    transformResponse?: (xhr: any) => any;
    onerror?: (error: Error) => any;
}

export type RequestOptions = Partial<Request>;

export namespace debug {
    let enabled: boolean;
}

export namespace ns {
    const CALENDAR_SERVER = 'http://calendarserver.org/ns/';
    const CALDAV_APPLE = 'http://apple.com/ns/ical/';
    const CALDAV = 'urn:ietf:params:xml:ns:caldav';
    const CARDDAV = 'urn:ietf:params:xml:ns:carddav';
    const DAV = 'DAV:';
}
