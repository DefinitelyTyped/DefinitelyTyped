import { compilation, Plugin } from "webpack";

declare class CustomTemplatedPathPlugin extends Plugin {
    constructor(
        template: Record<
            string,
            (
                path: string,
                data: {
                    basename?: string | undefined;
                    chunk?: compilation.Chunk | undefined;
                    filename?: string | undefined;
                    hash?: string | undefined;
                    query?: any;
                },
            ) => string
        >,
    );
}

export = CustomTemplatedPathPlugin;
