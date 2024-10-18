import component from "./component";

export interface UrlParam {
    url: string;
}

export interface PageConstructor {
    new(): page;
}

export interface PageConfig {
    navigationBarBackgroundColor?: string | undefined;
    navigationBarTextStyle?: string | undefined;
    navigationBarTitleText?: string | undefined;
    backgroundColor?: string | undefined;
    backgroundTextStyle?: string | undefined;
    enablePullDownRefresh?: boolean | undefined;
    disableScroll?: boolean | undefined;
    onReachBottomDistance?: number | undefined;
}

export default class page extends component {
    config?: PageConfig | undefined;
    $preloadData?: { [key: string]: any } | undefined;
    $init(wxpage: any, $parent: any): any;
    $route(
        type: "redirectTo" | "navigateTo",
        url: string | UrlParam,
        params?: { [name: string]: any },
    ): any;
    $preload(key: string | { [key: string]: any }, data: any): any;
    $switch(url: string | UrlParam): any;
    $redirect(url: string, params?: object): any;
    $back(delta: number | { delta: number }): any;
}
