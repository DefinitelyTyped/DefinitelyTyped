export interface AjaxOptions {
    type: string;
    url: string;
    accept?: string;
    dataType?: string;
    beforeSend?: (xhr: XMLHttpRequest, options: AjaxOptions) => void;
    success?: (response: any, statusText: XMLHttpRequest['statusText'], xhr: XMLHttpRequest) => void;
    error?: (response: any, statusText: XMLHttpRequest['statusText'], xhr: XMLHttpRequest) => void;
    complete?: (xhr: XMLHttpRequest, statusText: XMLHttpRequest['statusText']) => void;
    data?: Document | BodyInit | null;
    crossDomain?: boolean;
    withCredentials?: boolean;
}

export function ajax(options: AjaxOptions): void;
export function href(element: HTMLElement): string | undefined;
export function isCrossDomain(url: string): boolean;
