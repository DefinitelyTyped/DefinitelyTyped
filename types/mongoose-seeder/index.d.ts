import * as Q from "q";

export interface IOptions {
    dropDatabase?: boolean | undefined;
    dropCollections?: boolean | undefined;
}

type seedCallback = (err: any, dbData: any) => void;

export function seed(data: any, options: IOptions, callback: seedCallback): void;
export function seed(data: any, callback: seedCallback): void;

export function seed(data: any, options: IOptions): Q.Promise<any>;
