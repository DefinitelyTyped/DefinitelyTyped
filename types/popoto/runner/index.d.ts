import { Driver, Session, Result } from 'neo4j-driver-lite';

export namespace Runner {
    let DRIVER: Driver;

    function createSession(): Session;

    function run(statements: Array<{ statement: string, parameters: any[] }>): void;

    function toObject(results: Result[]): any[][];
}
