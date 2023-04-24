import { Settings } from './Settings';

export function createTerminalService(Settings: Settings): {
    getToken: () => Promise<string>;
    executeCommand: (rawCommand: string, stopMD?: (screens: any) => boolean) => Promise<string>;
    closeSession: () => Promise<boolean>;
};
