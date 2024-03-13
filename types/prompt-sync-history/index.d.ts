import { History } from "prompt-sync";

declare namespace history {}
declare function history(file?: string, max?: number): History;

export = history;
