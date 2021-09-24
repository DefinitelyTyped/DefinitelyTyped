import { WebviewApi } from "vscode-webview";

const vscode = acquireVsCodeApi<string>();

// $ExpectType string | undefined
vscode.getState();
