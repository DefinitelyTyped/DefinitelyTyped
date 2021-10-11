import { Session, Result } from 'neo4j-driver-lite';

export namespace Runner {
    export let createSession: () => Session;

    export const run: (statements: { statement: string, parameters: any[] }[]) => void;

    export const toObject: (results: Result[]) => any[][];
}
