// Type definitions for tasker-js-runner 1.1
// Project: https://github.com/amoshydra/tasker-js-runner
// Definitions by: Ivan Soriano Arabia <https://github.com/ivansoriarab>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { TK as tasker } from "tasker-types";

export default class TaskerJs {
    router: { [profileName: string]: TaskerJsModule };

    constructor(routes: { [profileName: string]: TaskerJsModule });

    hotReload(): Promise<void>;
}

export interface TaskerJsModule {
    enter(locals: { [name: string]: string }, tasker: tasker): void;

    exit(locals: { [name: string]: string }, tasker: tasker): void;
}
