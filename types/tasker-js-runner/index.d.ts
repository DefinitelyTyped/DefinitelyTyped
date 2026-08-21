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
