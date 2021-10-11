import { Driver, Session, Result } from 'neo4j-driver-lite';

export namespace Runner {
    export let DRIVER: Driver;

    export let createSession: () => Session;

    export const run: (statements: { statement: string, parameters: any[] }[]) => void;

    export const toObject: (results: Result[]) => any[][];
}
