export type HKEY =
    | "HKEY_CURRENT_USER"
    | "HKEY_LOCAL_MACHINE"
    | "HKEY_CLASSES_ROOT"
    | "HKEY_USERS"
    | "HKEY_CURRENT_CONFIG";
export function GetStringRegKey(hive: HKEY, path: string, name: string): string | undefined;
