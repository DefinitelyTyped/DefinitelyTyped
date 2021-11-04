export interface RenderOptions {
    into?: string | undefined;
    controller?: string | undefined;
    model?: any;
    outlet?: string | undefined;
    view?: string | undefined;
}

export interface RouteQueryParam {
    refreshModel?: boolean | undefined;
    replace?: boolean | undefined;
    as?: string | undefined;
}
