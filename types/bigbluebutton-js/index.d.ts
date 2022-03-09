// Type definitions for bigbluebutton-js 0.2
// Project: https://github.com/aakatev/bigbluebutton-js
// Definitions by: Marcos Kintschner <https://github.com/mktn87>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface AdministrationType {
    create(name: string, id: string, kwparams: {}): string;
    join(fullName: string, meetingID: string, password: string, kwparams: {}): string;
    end(meetingID: string, password: string): string;
}

interface ApiType {
    administration: AdministrationType;
    monitoring: MonitoringType;
    recording: RecordingType;
    hooks: HooksType;
}

interface MonitoringType {
    getMeetingInfo: (meetingID: string) => string;
    isMeetingRunning: (meetingID: string) => string;
    getMeetings: () => string;
}

interface HooksType {
    create: (callbackURL: string, kwparams: {}) => string;
    destroy: (hookID: string, kwparams: {}) => string;
    list: (kwparams: {}) => string;
}

interface RecordingType {
    getRecordings: (kwparams: {}) => string;
    publishRecordings: (recordID: string, publish: string) => string;
    deleteRecordings: (recordID: string) => string;
    updateRecordings: (recordID: string, kwparams: {}) => string;
}

declare namespace BigbluebuttonJs {
    function api(host: string, salt: string, options?: {}): ApiType;
    function http(url: string): any; // Axios
    namespace util {
        function constructUrl(options: {}, string: string, params: string): string;
        function getPathname(url: string, host: string): string;
        function httpClient(url: string): any; // Axios
        function normalizeUrl(url: string): string;
        function parseXml(xml: string): {};
    }
}

export { BigbluebuttonJs };
