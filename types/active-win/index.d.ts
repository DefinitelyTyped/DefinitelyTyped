// Type definitions for active-win 4.0
// Project: https://github.com/sindresorhus/active-win#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = activeWin;

declare function activeWin(): Promise<activeWin.Result>;

declare namespace activeWin {
    function sync(): Result;

    interface Result {
        title: string;
        id: number;
        bounds?: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        owner: {
            name: string;
            processId: number;
            bundleId?: number;
            path?: string;
        };
        memoryUsage?: number;
    }
}
