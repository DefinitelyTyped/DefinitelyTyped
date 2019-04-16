import component from "./component";

export interface UrlParam {
    url: string;
}

export interface PageConstructor {
    new (): page;
}

export interface PageConfig {
    navigationBarBackgroundColor?: string;
    navigationBarTextStyle?: string;
    navigationBarTitleText?: string;
    backgroundColor?: string;
    backgroundTextStyle?: string;
    enablePullDownRefresh?: boolean;
    disableScroll?: boolean;
    onReachBottomDistance?: number;
}

export default class page extends component {
    config?: PageConfig;
    $preloadData?: { [key: string]: any };
    $init(wxpage: any, $parent: any): any;
    $route(
        type: "redirectTo" | "navigateTo",
        url: string | UrlParam,
        params?: { [name: string]: any }
    ): any;
    $preload(key: string | { [key: string]: any }, data: any): any;
    $switch(url: string | UrlParam): any;
    $redirect(url: string, params?: object): any;
    $back(delta: number | { delta: number }): any;
}
