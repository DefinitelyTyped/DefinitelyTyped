// Type definitions for non-npm package Atmosphere package percolate:migrations 1.0
// Project: https://github.com/percolatestudio/meteor-migrations/
// Definitions by: Stepan Yurtsiv <https://github.com/yurtsiv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line no-single-declare-module
declare module 'meteor/percolate:migrations' {
  interface MigrationSpec {
    down?(): void;
    name?: string;
    up(): void;
    version: number;
  }

  interface LoggerOptions {
    level: 'info' | 'warn' | 'error' | 'debug';
    message: string;
    tag: 'Migrations';
  }

  interface Config {
    collectionName?: string;
    log?: boolean;
    logger?: ((options: LoggerOptions) => void) | null;
    logIfLatest?: boolean;
  }

  interface MigrationsPublicApi {
    add(spec: MigrationSpec): void;
    config(c: Config): void;
    getVersion(): number;
    migrateTo(version: number | string): void;
    start(): void;
    unlock(): void;
  }

  const Migrations: MigrationsPublicApi;
}
