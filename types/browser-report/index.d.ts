interface Window {
    browserReport(result: (error: ErrorEvent, report: ReportResult) => any): void;
    browserReportSync(): ReportResult;
}

interface ReportResult {
    "browser": {
        "name": string;
        "version": string;
    };
    "cookies": boolean;
    "flash": {
        "version": string;
    };
    "ip": string;
    "country": {
        "name": string;
        "code": string;
        "city": string;
        "latitude": string;
        "longitude": string;
        "timezone": string;
    };
    "java": {
        "version": string;
    };
    "lang": Array<string>;
    "os": {
        "name": string;
        "version": string;
    };
    "screen": {
        "colors": number;
        "dppx": number;
        "height": number;
        "width": number;
    };
    "scripts": boolean;
    "timestamp": string;
    "userAgent": string;
    "viewport": {
        "height": number;
        "layout": {
            "height": number;
            "width": number;
        };
        "width": number;
        "zoom": number;
    };
    "websockets": boolean;
}
