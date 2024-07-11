export interface Animations {
    startEnter: string;
    startExit: string;
    endEnter: string;
    endExit: string;
}

export interface CustomTabsOptions {
    toolbarColor?: string | undefined;
    enableUrlBarHiding?: boolean | undefined;
    showPageTitle?: boolean | undefined;
    enableDefaultShare?: boolean | undefined;
    animations?: Animations | undefined;
    headers?: any;
}

export namespace CustomTabs {
    function openURL(url: string, options?: CustomTabsOptions): Promise<boolean>;
}
