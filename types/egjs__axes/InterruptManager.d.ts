import { AxesOption } from "./Axes";
export declare class InterruptManager {
    private options;
    private _prevented;
    constructor(options: AxesOption);
    isInterrupting(): boolean;
    isInterrupted(): boolean;
    setInterrupt(prevented: any): void;
}
