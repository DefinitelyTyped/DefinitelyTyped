// Type definitions for react-native-permissions 1.1
// Project: https://github.com/yonahforst/react-native-permissions
// Definitions by: Vincent Langlet <https://github.com/vincentlanglet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Status = 'authorized' | 'denied' | 'restricted' | 'undetermined';

export interface Rationale {
    title: string;
    message: string;
}

export type CheckOptions = string | { type: string };

export type RequestOptions = string | { type: string, rationale?: Rationale };

export interface ReactNativePermissions {
    canOpenSettings: () => Promise<boolean>;
    openSettings: () => Promise<any>;
    getTypes: () => string[];
    check: (permission: string, options?: CheckOptions) => Promise<Status>;
    request: (permission: string, options?: RequestOptions) => Promise<Status>;
    checkMultiple: (permissions: string[]) => Promise<{ [key: string]: string }>;
}

declare const Permissions: ReactNativePermissions;

export default Permissions;
