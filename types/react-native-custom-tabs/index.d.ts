// Type definitions for react-native-custom-tabs 0.1
// Project: https://github.com/droibit/react-native-custom-tabs
// Definitions by: Phil Nova <https://github.com/philnova>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Animations {
  startEnter: string;
  startExit: string;
  endEnter: string;
  endExit: string;
}

export interface CustomTabsOptions {
  toolbarColor?: string;
  enableUrlBarHiding?: boolean;
  showPageTitle?: boolean;
  enableDefaultShare?: boolean;
  animations?: Animations;
  headers?: any;
}

export namespace CustomTabs {
    function openURL(url: string, options?: CustomTabsOptions): Promise<boolean>;
}
