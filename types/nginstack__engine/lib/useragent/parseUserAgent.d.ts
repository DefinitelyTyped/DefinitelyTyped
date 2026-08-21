declare namespace _exports {
    export { UserAgentBrowser, UserAgentDevice, UserAgentOS, UserAgentInfo };
}
declare function _exports(userAgent: string): UserAgentInfo;
export = _exports;
interface UserAgentBrowser {
    name: string;
    version: string;
    major: string;
}
interface UserAgentDevice {
    type: string;
    vendor: string;
    model: string;
}
interface UserAgentOS {
    name: string;
    version: string;
}
interface UserAgentInfo {
    userAgent: string;
    browser: UserAgentBrowser;
    device: UserAgentDevice;
    os: UserAgentOS;
}
