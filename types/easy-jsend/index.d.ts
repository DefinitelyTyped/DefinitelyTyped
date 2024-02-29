declare namespace Express {
    interface MakePartialInput {
        model: any;
        opts: {
            limit: number;
            skip: number;
        };
        search: Object;
        result: any;
    }

    interface PartialInput {
        limit?: number | undefined;
        offset: number;
        count: number;
        data: any;
    }

    export interface Response {
        success(data?: any, status?: number): void;
        fail(data: any, status?: number): void;
        error(err: any, status?: number): void;
        partial?(data: PartialInput, status?: number): void;
        makePartial?(data: MakePartialInput): void;
    }
}

declare module "easy-jsend" {
    export function init(conf?: { partial: boolean }): void;
}
