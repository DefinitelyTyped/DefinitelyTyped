// Type definitions for vscode-windows-registry 1.0
// Project: https://github.com/Microsoft/vscode-windows-registry#readme
// Definitions by: Benjamin Pasero <https://github.com/bpasero>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type HKEY = "HKEY_CURRENT_USER" | "HKEY_LOCAL_MACHINE" | "HKEY_CLASSES_ROOT" | "HKEY_USERS" | "HKEY_CURRENT_CONFIG";
export function GetStringRegKey(hive: HKEY, path: string, name: string): string | undefined;
