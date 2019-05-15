// Type definitions for mongoose-seeder 1.2.1
// Project: https://github.com/SamVerschueren/mongoose-seeder
// Definitions by: Crevil <https://github.com/Crevil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Q from 'q';

export interface IOptions {
  dropDatabase?: boolean;
  dropCollections?: boolean;
}

type seedCallback = (err: any, dbData: any) => void;

export function seed(data: any, options: IOptions, callback: seedCallback): void;
export function seed(data: any, callback: seedCallback): void;

export function seed(data: any, options: IOptions): Q.Promise<any>;
