export interface SettingsStatic {
    get(key: string): any;
    set(settings: Object): void;
    watchKeys(keys: string | string[], callback: () => void): number;
    clearWatch(watchId: number): void;
}

export const Settings: SettingsStatic;
export type Settings = SettingsStatic;
