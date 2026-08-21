import type { JavaClass } from "./JavaClass";
// https://ghidra.re/ghidra_docs/api/ghidra/util/task/CancelledListener.html

export interface CancelledListener extends JavaClass {
    cancelled(): void;
}

// https://ghidra.re/ghidra_docs/api/ghidra/util/task/TaskMonitor.html

export interface TaskMonitor extends JavaClass {
    addCancelledListener(listener: CancelledListener): void;
    cancel(): void;
    checkCanceled(): void;
    clearCanceled(): void;
    getMaximum(): number;
    getMessage(): string;
    getProgress(): number;
    incrementProgress(incrementAmount: number): void;
    initialize(max: number): void;
    isCancelEnabled(): boolean;
    isCancelled(): boolean;
    isIndeterminate(): boolean;
    removeCancelledListener(listener: CancelledListener): void;
    setCancelEnabled(enable: boolean): void;
    setIndeterminate(indeterminate: boolean): void;
    setMaximum(max: number): void;
    setMessage(message: string): void;
    setProgress(value: number): void;
    setShowProgressValue(showProgressValue: boolean): void;
}
