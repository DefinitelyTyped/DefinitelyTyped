interface GenerateCtrlCEvent {
    generateCtrlC(): boolean;
    generateCtrlCAsync(): Promise<boolean>;
    generateCtrlBreak(dwProcessGroupId?: number): boolean;
    generateCtrlBreakAsync(dwProcessGroupId?: number): Promise<boolean>;
}

declare var funcs: GenerateCtrlCEvent;
export = funcs;
