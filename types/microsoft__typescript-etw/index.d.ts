// Type definitions for @microsoft/typescript-etw 0.1
// Project: https://github.com/microsoft/typescript-etw
// Definitions by: Michael Crane <https://github.com/mrcrane>
//                 Andrew Casey <https://github.com/amcasey>
//                 Mine Starks <https://github.com/minestarks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function logEvent(msg: string): void;
export function logErrEvent(msg: string): void;
export function logPerfEvent(msg: string): void;
export function logInfoEvent(msg: string): void;
export function logStartCommand(command: string, msg: string): void;
export function logStopCommand(command: string, msg: string): void;
export function logStartUpdateProgram(msg: string): void;
export function logStopUpdateProgram(msg: string): void;
export function logStartUpdateGraph(): void;
export function logStopUpdateGraph(): void;
export function logStartResolveModule(name: string): void;
export function logStopResolveModule(success: string): void;
export function logStartParseSourceFile(filename: string): void;
export function logStopParseSourceFile(): void;
export function logStartReadFile(filename: string): void;
export function logStopReadFile(): void;
export function logStartBindFile(filename: string): void;
export function logStopBindFile(): void;
export function logStartScheduledOperation(operationId: string): void;
export function logStopScheduledOperation(): void;
