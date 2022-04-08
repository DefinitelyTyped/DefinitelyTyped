export interface RenderOptions {
    into?: string;
    controller?: string;
    model?: any;
    outlet?: string;
    view?: string;
}

export interface RouteQueryParam {
    refreshModel?: boolean;
    replace?: boolean;
    as?: string;
}
