export interface WebRequestHeader {
    [key: string]: string;
}
export interface WebRequestHeaderConfig {
    urlPatterns: string[];
    headers: WebRequestHeader[];
}
