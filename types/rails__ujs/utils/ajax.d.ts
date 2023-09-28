export interface AjaxOptions {
    type: string;
    url: string;
    accept?: string | undefined;
    dataType?: string | undefined;
    beforeSend?: ((xhr: XMLHttpRequest, options: AjaxOptions) => void) | undefined;
    success?: ((response: any, statusText: XMLHttpRequest["statusText"], xhr: XMLHttpRequest) => void) | undefined;
    error?: ((response: any, statusText: XMLHttpRequest["statusText"], xhr: XMLHttpRequest) => void) | undefined;
    complete?: ((xhr: XMLHttpRequest, statusText: XMLHttpRequest["statusText"]) => void) | undefined;
    data?: Document | BodyInit | null | undefined;
    crossDomain?: boolean | undefined;
    withCredentials?: boolean | undefined;
}

export function ajax(options: AjaxOptions): void;
export function href(element: HTMLElement): string | undefined;
export function isCrossDomain(url: string): boolean;
