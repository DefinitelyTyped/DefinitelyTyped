export = UserAgent;
declare function UserAgent(browserUserAgent: string): void;
declare class UserAgent {
    constructor(browserUserAgent: string);
    browserUserAgent: string;
    getFrameworkUserAgent(): number;
}
