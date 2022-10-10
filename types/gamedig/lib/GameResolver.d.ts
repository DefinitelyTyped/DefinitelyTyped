import { Type } from '../index';

declare class GameResolver {
    constructor();
    gamesByKey: Map<
        Type,
        {
            keys: string[];
            pretty: string;
            options: {
                protocol: string;
                port?: number;
                port_query_offset?: number;
                port_query?: number;
            };
            extra: {
                doc_notes?: string;
            };
        }
    >;
    games: [
        {
            keys: string[];
            pretty: string;
            options: {
                protocol: string;
                port?: number;
                port_query_offset?: number;
                port_query?: number;
            };
            extra: {
                doc_notes?: string;
            };
        },
    ];
    lookup(type: Type): {
        protocol: string;
        port?: number;
        port_query_offset?: number;
        port_query?: number;
    };
    printReadme(): void;
}

export = GameResolver;
