// Type definitions for PhoneGap 2.3
// Project: http://phonegap.com
// Definitions by: Boris Yankov <https://github.com/borisyankov>, Dick van den Brink <https://github.com/DickvdBrink>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface GeolocationError {
    code: number;
    message: string;
}

interface Acceleration {
    x: number;
    y: number;
    z: number;
    timestamp: number; //DOMTimeStamp;
}
declare var Acceleration: {
    new(): Acceleration;
}

interface AccelerometerOptions {
    frequency?: number;
}

interface Accelerometer {
    getCurrentAcceleration(accelerometerSuccess: (acceleration: Acceleration) => void , accelerometerError: () => void ): void;
    watchAcceleration(accelerometerSuccess: (acceleration: Acceleration) => void , accelerometerError: () => void , accelerometerOptions?: AccelerometerOptions): void;
    clearWatch(watchID: number): void;
}

interface CameraPopoverOptions {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    arrowDir?: number;
}
declare var CameraPopoverOptions: {
    new(x: number, y: number, width: number, height: number, arrowDir: number): CameraPopoverOptions;
}

interface CameraOptions {
    quality?: number;
    destinationType?: number;
    sourceType?: number;
    allowEdit?: boolean;
    encodingType?: number;
    targetWidth?: number;
    targetHeight?: number;
    mediaType?: number;
    correctOrientation?: boolean;
    saveToPhotoAlbum?: boolean;
    popoverOptions?: CameraPopoverOptions;
}

interface CameraPictureSourceTypeObject {
    CAMERA: number;
    PHOTOLIBRARY: number;
    SAVEDPHOTOALBUM: number;
}

interface CameraDestinationTypeObject {
    FILE_URI: number;
    DATA_URL: number;
}

interface CameraEncodingTypeObject {
    JPEG: number;
    PNG: number;
}

interface CameraMediaTypeObject {
    PICTURE: number;
    VIDEO: number;
    ALLMEDIA: number;
}

interface CameraPopoverArrowDirectionObject {
    ARROW_UP: number;
    ARROW_DOWN: number;
    ARROW_LEFT: number;
    ARROW_RIGHT: number;
    ARROW_ANY: number;
}

interface Camera {
    sourceType: any;
    PictureSourceType: CameraPictureSourceTypeObject;
    DestinationType: CameraDestinationTypeObject;
    EncodingType: CameraEncodingTypeObject;
    MediaType: CameraMediaTypeObject;
    PopoverArrowDirection: CameraPopoverArrowDirectionObject;
    getPicture(cameraSuccess: (imageData: string) => void , cameraError: (message: string) => void , cameraOptions?: CameraOptions): void;
    cleanup(cameraSuccess: (imageData: string) => void , cameraError: (message: string) => void ): void;
}

interface CaptureAudioOptions {
    limit?: number;
    duration?: number;
    mode?: number;
}

interface CaptureImageOptions {
    limit?: number;
    mode?: number;
}

interface MediaFile {
    name: string;
    fullPath: string;
    type: string;
    lastModifiedDate: Date;
    size: number;

    getFormatData(successCallback: Function, errorCallback?: Function): void;
}

interface CaptureError {
    code: number;
    message: string;
}

interface Capture {
    captureAudio(captureSuccess: (mediaFiles: MediaFile[]) => void , captureError: (error: CaptureError) =>void , options?: CaptureAudioOptions): void;
    captureImage(captureSuccess: (mediaFiles: MediaFile[]) => void , captureError: (error: CaptureError) =>void , options?: CaptureImageOptions): void;
    captureVideo(captureSuccess: (mediaFiles: MediaFile[]) => void , captureError: (error: CaptureError) =>void , options?: CaptureImageOptions): void;
}

interface Connection {
    UNKNOWN: number;
    ETHERNET: number;
    WIFI: number;
    CELL_2G: number;
    CELL_3G: number;
    CELL_4G: number;
    NONE: number;
}
declare var Connection: Connection;

interface CompassOptions {
    frequency?: number;
    filter?: number;
}

interface CompassHeading {
    magneticHeading?: number;
    trueHeading?: number;
    headingAccuracy?: number;
    timestamp?: number;
}

interface CompassError {
    code: number;
}

declare var CompassError: {
    COMPASS_INTERNAL_ERR: number;
    COMPASS_NOT_SUPPORTED: number;
}

interface Compass {
    getCurrentHeading(compassSuccess: (heading: CompassHeading) => void , compassError: (error: CompassError) => void , compassOptions?: CompassOptions): void;
    watchHeading(compassSuccess: (heading: CompassHeading) => void , compassError: (error: CompassError) => void , compassOptions?: CompassOptions): void;
    clearWatch(watchID: number): void;
}

interface Connection {
    type: number;
}

interface ContactAddress {
    pref: boolean;
    type: string;
    formatted: string;
    streetAddress: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
}

interface ContactField {
    type: string;
    value: string;
    pref: boolean;
}
declare var ContactField: {
    new(type: string, calue: string, perf: boolean): ContactField;
}

interface Contact {
    id: string;
    displayName: string;
    name: ContactName;
    nickname: string;
    phoneNumbers: ContactField[];
    emails: ContactField[];
    addresses: ContactAddress[];
    ims: ContactField[];
    organizations: ContactOrganization[];
    birthday: Date;
    note: string;
    photos: ContactField[];
    categories: ContactField[];
    urls: ContactField[];

    save(onSuccess?: (contacts: Contacts) => void, onError?: (contactError: ContactError) => void): void;
    remove(onSuccess?: (contacts: Contacts) => void, onError?: (contactError: ContactError) => void): void;
    clone(): Contact;
}

interface ContactFindOptions {
    filter?: string;
    multiple?: boolean;
}
declare var ContactFindOptions : {
    new(): ContactFindOptions;
}

interface ContactName {
    formatted: string;
    familyName: string;
    givenName: string;
    middleName: string;
    honorificPrefix: string;
    honorificSuffix: string;
}
declare var ContactName: {
    new(): ContactName;
}

interface ContactOrganization {
    pref: boolean;
    type: string;
    name: string;
    department: string;
    title: string;
}

interface ContactError {
    code: number;
}

declare var ContactError: {
    UNKNOWN_ERROR: number;
    INVALID_ARGUMENT_ERROR: number;
    TIMEOUT_ERROR: number;
    PENDING_OPERATION_ERROR: number;
    IO_ERROR: number;
    NOT_SUPPORTED_ERROR: number;
    PERMISSION_DENIED_ERROR: number;
}

interface Contacts {
    create(properties?: any): Contact;
    find(contactFields: string[], contactSuccess: (contacts: Contact[]) => void , contactError: (error: ContactError) => void , contactFindOptions?: ContactFindOptions): void;
}

interface Device {
    available: boolean;
    name: string;
    cordova: string;
    platform: string;
    uuid: string;
    version: string;
    model: string;
    capture: Capture;
}

/* Defined in lib.d.ts
interface File {
    fullPath: string;
    type: string;
    size: number;
}
*/

interface FileWriter {
    readyState: any;
    fileName: string;
    length: number;
    position: number;
    error: FileError;

    onwritestart: Function;
    onprogress: Function;
    onwrite: Function;
    onabort: Function;
    onerror: Function;
    onwriteend: Function;

    abort(): void;
    seek(arg: number): void;
    truncate(arg: number): void;
    write(arg: any): void;
}

interface FileSystem {
    name: string;
    root: DirectoryEntry;
}
declare var DirectoryEntry: {
    new(name: string, root: DirectoryEntry): DirectoryEntry;
}

interface FileSystemEntry {
    isFile: boolean;
    isDirectory: boolean;
    name: string;
    fullPath: string;
    filesystem: FileSystem;

    getMetadata(onSuccess?: (arg: Metadata) => void, onError?: (arg: FileError) => void): void;
    setMetadata(onSuccess?: (arg: Metadata) => void, onError?: (arg: FileError) => void, options?: any): void;
    toURL(): string;
    remove(onSuccess?: () => void, onError?: (arg: FileError) => void): void;
    getParent(onSuccess?: (arg: DirectoryEntry) => void, onError?: (arg: FileError) => void): void;
}

interface FileEntry extends FileSystemEntry {
    moveTo(parentEntry: DirectoryEntry, file: string, onSuccess: (arg: DirectoryEntry) => void, onError: (arg: FileError) => void): void;
    copyTo(parentEntry: DirectoryEntry, file: string, onSuccess: (arg: DirectoryEntry) => void, onError: (arg: FileError) => void): void;
    createWriter(onSuccess?: (arg: FileWriter) => void, onError?: (arg: FileError) => void): void;
    file(onSuccess?: (arg: File) => void, onError?: (arg: FileError) => void): void;
}

interface DirectoryEntry extends FileSystemEntry {
    createReader(): DirectoryReader;
    getDirectory(path: string, options: Flags, successCallback: (result: DirectoryEntry) => void, errorCallback: (error: FileError) => void): void;
    getFile(path: string, options: Flags, successCallback: (result: FileEntry) => void, errorCallback: (error: FileError) => void): void;
    removeRecursively(successCallback: () => void, errorCallback: (error: FileError) => void): void;
}

interface DirectoryReader {
    readEntries(successCallback: (entries: FileSystemEntry) => void, errorCallback: (error: FileError) => void): void;
}

interface FileTransfer {
    onprogress: Function;

    //upload(filePath: string, server: string, successCallback: (metadata: Metadata) => void , errorCallback: (error: FileError) => void , options?: any): void;
    upload(filePath: string, server: string, successCallback: (result: FileUploadResult) => void , errorCallback: (error: FileError) => void , options?: any): void;
    download(source: string, target: string, successCallback: (fileEntry: FileEntry) => void , errorCallback: (error: FileError) => void, options?: any): void;
    abort(): void;
}
declare var FileTransfer: {
    new(): FileTransfer;
}

interface FileUploadOptions {
    fileKey?: string;
    fileName?: string;
    mimeType?: string;
    params?: any;
    chunkedMode?: boolean;
    headers?: any;
}
declare var FileUploadOptions: {
    new(): FileUploadOptions;
}

interface FileUploadResult {
    bytesSent: number;
    responseCode: number;
    response: string;
}

interface Flags {
    create: boolean;
    exclusive?: boolean;
}

/*
interface LocalFileSystem {
    requestFileSystem: Function;
    resolveLocalFileSystemURI: Function;
}*/

interface LocalFileSystem {
    PERSISTENT: number;
    TEMPORARY: number;
}
declare var LocalFileSystem: LocalFileSystem;

interface Metadata {
    modificationTime: Date;
}

interface FileError {
    code: number;
}
declare var FileError: {
    NOT_FOUND_ERR: number;
    SECURITY_ERR: number;
    ABORT_ERR: number;
    NOT_READABLE_ERR: number;
    ENCODING_ERR: number;
    NO_MODIFICATION_ALLOWED_ERR: number;
    INVALID_STATE_ERR: number;
    SYNTAX_ERR: number;
    INVALID_MODIFICATION_ERR: number;
    QUOTA_EXCEEDED_ERR: number;
    TYPE_MISMATCH_ERR: number;
    PATH_EXISTS_ERR: number;
}

interface FileTransferError {
    code: number;
    source: string;
    target: string;
    http_status: number;
}
declare var FileTransferError: {
    FILE_NOT_FOUND_ERR: number;
    INVALID_URL_ERR: number;
    CONNECTION_ERR: number;
    ABORT_ERR: number;
}

interface GeolocationOptions {
    enableHighAccuracy?: boolean;
    timeout?: number;
    maximumAge?: number;
}

interface GlobalizationError {
    code: number;
    message: string;
}

declare var GlobalizationError: {
    UNKNOWN_ERROR: number;
    FORMATTING_ERROR: number;
    PARSING_ERROR: number;
    PATTERN_ERROR: number;
}

interface GlobalizationDate {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
}

interface GlobalizationDateOptions {
    formatLength?: string;
    selector?: string;
}

interface GlobalizationDatePattern {
    pattern: string;
    timezone: string;
    utc_offset: number;
    dst_offset: number;
}

interface GlobalizationDateNameOptions {
    type?: string;
    item?: string;
}

interface GlobalizationNumberOptions {
    type?: string;
}

interface GlobalizationNumberPattern {
    pattern: string;
    symbol: string;
    fraction: number;
    rounding: number;
    positive: string;
    negative: string;
    decimal: string;
    grouping: string;
}

interface GlobalizationCurrencyPattern {
    pattern: string;
    code: string;
    fraction: number;
    rounding: number;
    decimal: string;
    grouping: string;
}

interface Globalization {
    getPreferredLanguage(successCallback: (properties: {value: string}) => void, errorCallback: (error: GlobalizationError) => void): void;
    getLocaleName(successCallback: (properties: {value: string}) => void, errorCallback: (error: GlobalizationError) => void): void;
    dateToString(date: Date, successCallback: (properties: {value: string}) => void, errorCallback: (error: GlobalizationError) => void, options?: GlobalizationDateOptions): void;
    stringToDate(dateString: string, successCallback: (properties: GlobalizationDate) => void, errorCallback: (error: GlobalizationError) => void, options?: GlobalizationDateOptions): void;
    getDatePattern(successCallback: (properties: GlobalizationDatePattern) => void, errorCallback: (error: GlobalizationError) => void, options?: GlobalizationDateOptions): void;
    getDateNames(successCallback: (properties: {value: string[]}) => void, errorCallback: (error: GlobalizationError) => void, options?: GlobalizationDateNameOptions): void;
    isDayLightSavingsTime(date: Date, successCallback: (properties: {dst: boolean}) => void, errorCallback: (error: GlobalizationError) => void): void;
    getFirstDayOfWeek(successCallback: (properties: {value: number}) => void, errorCallback: (error: GlobalizationError) => void): void;
    numberToString(number: number, successCallback: (properties: {value: string}) => void, errorCallback: (error: GlobalizationError) => void, options?: GlobalizationNumberOptions): void;
    stringToNumber(string: string, successCallback: (properties: {value: number}) => void, errorCallback: (error: GlobalizationError) => void, options?: GlobalizationNumberOptions): void;
    getNumberPattern(successCallback: (parameters: GlobalizationNumberPattern) => void, errorCallback: (error: GlobalizationError) => void, options?: GlobalizationNumberOptions): void;
    getCurrencyPattern(currencyCode: string, successCallback: (parameters: GlobalizationCurrencyPattern) => void, errorCallback: (error: GlobalizationError) => void): void;
}

/*
interface InAppBrowser {
    addEventListener(eventname: string, callback): void;
    removeEventListener(eventname: string, callback): void;
    open(url?: string, target?: string, features?: string, replace?: boolean): Window;
    close(): void;
}
*/

interface Media {
    new (src: string, mediaSuccess: Function, mediaError?: (mediaError: MediaError) => any, mediaStatus?: Function): Media;
    getCurrentPosition(mediaSuccess: Function, mediaError?: (mediaError: MediaError) => any): void;
    getDuration(): any;
    play(): void;
    pause(): void;
    release(): void;
    seekTo(milliseconds: number): void;
    startRecord(): void;
    stopRecord(): void;
    stop(): void;
}
declare var Media: {
    new(src: string, onSuccess: (arg: any) => any, onError: (error: any) => any): Media;
}

interface PhonegapNotification {
    alert(message: string, alertCallback: Function, title?: string, buttonName?: string): void;
    confirm(message: string, confirmCallback: Function, title?: string, buttonLabels?: string): void;
	confirm(message: string, confirmCallback: Function, title?: string, buttonLabels?: string[]): void;
    beep(times: number): void;
    vibrate(milliseconds: number): void;
}

interface Splashscreen {
    show(): void;
    hide(): void;
}

interface Database {
    transaction(populateDB?: (tx: SQLTransaction) => any, errorCB?: (err: any) => any, successCB?: () => any): void;
    changeVersion(var1: string, var2: string): void;
}

interface SQLResultSetRowList {
    length: number;
    item(index: number): any;
}

interface SQLError {
    code: number;
    message: string;
}

interface SQLResultSet {
    insertId: number;
    rowsAffected: number;
    rows: SQLResultSetRowList;
}

interface SQLTransaction {
    executeSql(sql: string): SQLResultSet;
}

/* Defined in lib.d.ts

interface LocalStorage {
    key;
    getItem;
    setItem;
    removeItem;
    clear;
}
*/

interface StatusBar {
    isVisible: boolean;

    overlaysWebView(doOverlay: boolean): void;
    styleDefault(): void;
    styleLightContent(): void;
    styleBlackTranslucent(): void;
    styleBlackOpaque(): void;
    backgroundColorByName(colorname: string): void;
    backgroundColorByHexString(hexString: string): void;
    hide(): void;
    show(): void;
}
declare var StatusBar: StatusBar;

interface Keyboard {
    automaticScrollToTopOnHiding: boolean;
    isVisible: boolean;

    onshow: Function;
    onhide: Function;
    onshowing: Function;
    onhiding: Function;

    disableScrollingInShrinkView(disable: boolean): void;
    hideFormAccessoryBar(hide: boolean): void;
    shrinkView(shrink: boolean): void;
}
declare var Keyboard: Keyboard;

interface /*PhoneGapNavigator extends*/ Navigator {
    accelerometer: Accelerometer;
    camera: Camera;
    capture: Capture;
    compass: Compass;
    connection: Connection;
    contacts: Contacts;
    device: Device;
    globalization: Globalization;
    notification: PhonegapNotification;
    splashscreen: Splashscreen;
}

interface Window {
    requestFileSystem: any;
    openDatabase(database_name: string, database_version: string, database_displayname: string, database_size: number): Database;
}

declare var device: Device;
declare var phoneGapNavigator: Navigator /*PhoneGapNavigator*/;
