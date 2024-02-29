export interface AdministrationType {
    create(name: string, id: string, kwparams: {}): string;
    join(fullName: string, meetingID: string, password: string, kwparams: {}): string;
    end(meetingID: string, password: string): string;
}
export interface ApiType {
    administration: AdministrationType;
    monitoring: MonitoringType;
    recording: RecordingType;
    hooks: HooksType;
}
export interface MonitoringType {
    getMeetingInfo: (meetingID: string) => string;
    isMeetingRunning: (meetingID: string) => string;
    getMeetings: () => string;
}
export interface HooksType {
    create: (callbackURL: string, kwparams: {}) => string;
    destroy: (hookID: string, kwparams: {}) => string;
    list: (kwparams: {}) => string;
}
export interface RecordingType {
    getRecordings: (kwparams: {}) => string;
    publishRecordings: (recordID: string, publish: string) => string;
    deleteRecordings: (recordID: string) => string;
    updateRecordings: (recordID: string, kwparams: {}) => string;
}

export function api(host: string, salt: string, options?: {}): ApiType;
export function http(url: string): any; // Axios
export namespace util {
    function constructUrl(options: {}, string: string, params: string): string;
    function getPathname(url: string, host: string): string;
    function httpClient(url: string): any; // Axios
    function normalizeUrl(url: string): string;
    function parseXml(xml: string): {};
}
