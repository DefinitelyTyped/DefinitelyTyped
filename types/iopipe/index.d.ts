// Type definitions for iopipe
// Project: https://github.com/iopipe/iopipe-js

interface IOPipeConfig {
    debug?: boolean;
    token?: string;
    networkTimeout?: number;
    timeoutWindow?: number;
}
  
interface Mark {
    start(label: string): void;
    end(label: string): void;
}
  
declare module "@iopipe/iopipe" {
    export function label(label: string): void;
    export function metric(label: string, number: number): void;
    export let mark: Mark
  
    export default function iopipe(config?: IOPipeConfig): Function;
}