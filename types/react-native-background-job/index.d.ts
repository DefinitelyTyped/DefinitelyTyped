// Type definitions for react-native-background-job 2.3
// Project: https://github.com/vikeri/react-native-background-job#readme
// Definitions by: hyun <https://github.com/KoreanThinker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



export interface registerProps {
    jobKey?: string;
    job?: () => void;
}

export interface scheduleProps {
    jobKey?: string;
    timeout?: number;
    period?: number;
    persist?: boolean;
    override?: boolean,
    networkType?: number;
    requiresCharging?: boolean;
    requiresDeviceIdle?: boolean;
    exact?: boolean;
    allowWhileIdle?: boolean;
    allowExecutionInForeground?: boolean;
    notificationText?: string;
    notificationTitle?: string;
}

export interface cancelProps {
    jobKey: string
}


export interface BackgroundJob {
    register: (props: registerProps) => void;
    schedule: (props: scheduleProps) => Promise<any>;
    cancel: (props: cancelProps) => Promise<any>;
    cancelAll: () => Promise<any>;
    setGlobalWarnings: (warn: boolean) => void;
    isAppIgnoringBatteryOptimization: (callback?: (err: any, isIgnoring: any) => void) => Promise<any>;
}

declare const BackgroundJob: BackgroundJob
export default BackgroundJob
