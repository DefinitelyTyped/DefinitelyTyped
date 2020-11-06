export interface AjaxOptions {
    type: string;
    url: string;
    accept: string;
    data: string;
    crossDomain?: boolean;
    withCredentials?: boolean;
}

export function ajax(options: AjaxOptions): void;
export function href(element: HTMLElement): string | undefined;
export function isCrossDomain(url: string): boolean;
