import * as vscodeWindowsRegistry from "vscode-windows-registry";

vscodeWindowsRegistry.GetStringRegKey('HKEY_CURRENT_USER', 'path', 'name');
