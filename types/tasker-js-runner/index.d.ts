// Type definitions for tasker-js-runner 1.1
// Project: https://github.com/amoshydra/tasker-js-runner
// Definitions by: Ivan Soriano Arabia <https://github.com/ivansoriarab>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class TaskerJs {
    router: { [ profileName: string ]: object };

    constructor(routes: { [ profileName: string ]: object });

    hotReload(): Promise<void>;
}
