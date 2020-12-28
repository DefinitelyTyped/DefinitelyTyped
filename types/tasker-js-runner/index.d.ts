// Type definitions for tasker-js-runner 1.1
// Project: https://github.com/amoshydra/tasker-js-runner
// Definitions by: Ivan Soriano <https://github.com/ivansoriarab>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import { TK } from 'tasker-types';

export { TK, tk } from 'tasker-types';

export default TaskerJs;

declare class TaskerJs {
    router: Router;

    constructor(routes: TaskerJsRunner.Route);

    hotReload(): Promise<void>;
}

declare class Router {
    constructor(routes: TaskerJsRunner.Route, context: typeof Window);

    dispatch(locals: TaskerJsRunner.Local): void;
}

export namespace TaskerJsRunner {
    interface Route {
        [ name: string ]: object;
    }

    interface Local {
        [ name: string ]: string;
    }

    interface Module {
        enter(locals: Local, tasker: TK): void;

        exit(locals: Local, tasker: TK): void;
    }
}
