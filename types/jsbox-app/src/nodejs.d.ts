// JSBox Nodejs API TypeScript Declaration

interface JBNodejs {
    run(
        args:
            | string
            | {
                name: string;
                query?: any;
                argv?: any[];
                listener?: {
                    id: string;
                    handler: (result: any) => void;
                };
            }
            | {
                script: string;
                query?: any;
                argv?: any[];
                listener?: {
                    id: string;
                    handler: (result: any) => void;
                };
            }
            | {
                path: string;
                query?: any;
                argv?: any[];
                listener?: {
                    id: string;
                    handler: (result: any) => void;
                };
            },
    ): void;
    listen(eventId: string, handler: (data: any) => void): void;
    version: string;
    path: string;
}

declare const $nodejs: JBNodejs;
