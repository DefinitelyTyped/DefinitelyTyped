// Type definitions for ps-list 6.0
// Project: https://github.com/sindresorhus/ps-list#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = psList;

declare function psList(options?: psList.Options): Promise<psList.ProcessDescriptor[]>;

declare namespace psList {
    interface Options {
        all?: boolean;
    }

    interface ProcessDescriptor {
        pid: number;
        name: string;
        ppid: number;
        cmd?: string;
        cpu?: number;
        memory?: number;
    }
}
