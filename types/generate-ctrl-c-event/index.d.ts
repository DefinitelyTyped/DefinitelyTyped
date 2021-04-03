// Type definitions for generate-ctrl-c-event 1.2
// Project: https://github.com/zenflow/generate-ctrl-c-event
// Definitions by: Matthew Francis Brunetti <https://github.com/zenflow>
//                 Khairul Azhar Kasmiran <https://github.com/kazarmy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface GenerateCtrlCEvent {
  generateCtrlC(): boolean;
  generateCtrlCAsync(): Promise<boolean>;
  generateCtrlBreak(dwProcessGroupId?: number): boolean;
  generateCtrlBreakAsync(dwProcessGroupId?: number): Promise<boolean>;
}

declare var funcs: GenerateCtrlCEvent;
export = funcs;
