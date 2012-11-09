// Type definitions for PhoneGap 2.2
// Project: http://phonegap.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface Acceleration {
    x: number;
    y: number;
    z: number;
    timestamp: number; //DOMTimeStamp;
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

interface CameraOptions {
    quality?: number;
    destinationType?: number;
    sourceType?: number;
    allowEdit?: bool;
    encodingType?: number;
    targetWidth?: number;
    targetHeight?: number;
    mediaType?: number;
    correctOrientation?: bool;
    saveToPhotoAlbum?: bool;
    popoverOptions?: number;
}

interface Camera {
    getPicture(cameraSuccess: (imageData: string) => void , cameraError: (message: string) => void , cameraOptions?: CameraOptions): void;
    cleanup(cameraSuccess: (imageData: string) => void , cameraError: (message: string) => void ): void;
}

interface CaptureAudioOptions {
    limit?: number;
    duration?: number;
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
    captureAudio(captureSuccess: (mediaFiles: MediaFile[]) => void , captureError: (error: CaptureError) =>void , options?: CaptureAudioOptions);
}

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

interface Compass {
    getCurrentHeading(compassSuccess: (heading: CompassHeading) => void , compassError: (error: CompassError) => void , compassOptions?: CompassOptions): void;
    watchHeading(compassSuccess: (heading: CompassHeading) => void , compassError: (error: CompassError) => void , compassOptions?: CompassOptions): void;
    clearWatch(watchID: number): void;
}

interface Connection {
    type: number;
}

interface ContactAddress {
    pref: bool;
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
    pref: bool;
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
}

interface ContactFindOptions {
    filter?: string;
    multiple?: bool;
}

interface ContactName {
    formatted: string;
    familyName: string;
    givenName: string;
    middleName: string;
    honorificPrefix: string;
    honorificSuffix: string;
}

interface ContactOrganization {
    pref: bool;
    type: string;
    name: string;
    department: string;
    title: string;
}

interface ContactError {
    code: number;
}

interface Contacts {
    create(properties: any): void;
    find(contactFields: string[], contactSuccess: (contacts: Contact[]) => void , contactError: (error: ContactError) => void , contactFindOptions?: ContactFindOptions): void;
}

interface Device {
    name: string;
    cordova: string;
    platform: string;
    uuid: string;
    version: string;
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

    abort();
    seek();
    truncate();
    write();
}

interface FileSystem {
    name: string;
    root: DirectoryEntry;
}

interface FileSystemEntry {
    isFile: bool;
    isDirectory: bool;
    name: string;
    fullPath: string;
    filesystem: FileSystem;

    getMetadata();
    setMetadata();
    toURL();
    remove();
    getParent();
}

interface FileEntry extends FileSystemEntry {
    moveTo();
    copyTo();
    createWriter();
    file();
}

interface DirectoryEntry extends FileSystemEntry {
    createReader();
    getDirectory();
    getFile();
    removeRecursively();
}

interface DirectoryReader {
    readEntries(successCallback: (entries: FileSystemEntry) => void , errorCallback: (error: FileError) => void );
}

interface FileTransfer {
    onprogress: Function;

    upload(filePath: string, server: string, successCallback: (metadata: Metadata) => void , errorCallback: (error: FileError) => void , options: any): void;
    download(source: string, target: string, successCallback: (fileEntry: FileEntry) => void , errorCallback: (error: FileError) => void ): void;
    abort(): void;
}

interface FileUploadOptions {
    fileKey?: string;
    fileName?: string;
    mimeType?: string;
    params?: any;
    chunkedMode?: bool;
    headers?: any;
}

interface FileUploadResult {
    bytesSent: number;
    responseCode: number;
    response: string;
}

// TODO Flags

interface LocalFileSystem {
    requestFileSystem: Function;
    resolveLocalFileSystemURI: Function;
}

interface Metadata {
    modificationTime: Date;
}

interface FileError {
    code: number;
}

interface FileTransferError {
    code: number;
    source: string;
    target: string;
    http_status: number;
}

interface GeolocationOptions {
    enableHighAccuracy?: bool;
    timeout?: number;
    maximumAge?: number;
}

interface Geolocation {
    getCurrentPosition(geolocationSuccess: (position: Position) => void , geolocationError?: PositionErrorCallback, geolocationOptions?: GeolocationOptions): void;
    watchPosition(geolocationSuccess: (position: Position) => void , geolocationError?: PositionErrorCallback, geolocationOptions?: GeolocationOptions): void;
    clearWatch(watchID: number): void;
}

interface GlobalizationError {
    code: number;
    message: string;
}

interface Globalization {
    getPreferredLanguage(successCB, errorCB): void;
    getLocaleName(successCB, errorCB): void;
    dateToString(date, successCB, errorCB, options): void;
    stringToDate(dateString, successCB, errorCB, options): void;
    getDatePattern(successCB, errorCB, options): void;
    getDateNames(successCB, errorCB, options): void;
    isDayLightSavingsTime(date, successCB, errorCB): void;
    getFirstDayOfWeek(successCB, errorCB): void;
    numberToString(number, successCB, errorCB, options): void;
    stringToNumber(string, successCB, errorCB, options): void;
    getNumberPattern(successCB, errorCB, options): void;
    getCurrencyPattern(currencyCode, successCB, errorCB): void;
}

interface Media {
    new (src: string, mediaSuccess: Function, mediaError?: MediaError, mediaStatus?: Function);
    getCurrentPosition(mediaSuccess: Function, mediaError?: MediaError): void;
    getDuration(): void;
    play(): void;
    pause(): void;
    release(): void;
    seekTo(milliseconds: number): void;
    startRecord(): void;
    stopRecord(): void;
    stop(): void;
}

interface Notification {
    alert(message: string, alertCallback: Function, title?: string, buttonName?: string): void;
    confirm(message: string, confirmCallback: Function, title?: string, buttonLabels?: string): void;
    beep(times: number): void;
    vibrate(milliseconds: number): void;
}

interface Splashscreen {
    show(): void;
    hide(): void;
}

interface Database {
    transaction();
    changeVersion();
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

interface Navigator {
    accelerometer: Accelerometer;
    camera: Camera;
    capture: Capture;
    compass: Compass;
    connection: Connection;
    contacts: Contacts;
    device: Device;
    geolocation: Geolocation;
    globalization: Globalization;
    notification: Notification;
    splashscreen: Splashscreen;
}

interface Window {
    openDatabase(database_name: string, database_version: string, database_displayname: string, database_size: number): Database;
}