export interface DevToolsSettingsManagerStatic {
    reload(): void;
    setConsolePatchSettings(newSettings: string): void;
    getConsolePatchSettings(): string | null;
    setProfilingSettings(newSettings: string): void;
    getProfilingSettings(): string | null;
}

export const DevToolsSettingsManager: DevToolsSettingsManagerStatic;
export type DevToolsSettingsManager = DevToolsSettingsManagerStatic;
