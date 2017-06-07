import { Repository } from './repository';
import { Blob } from './blob';
import { Buf } from './buf';

export class Filter {
    static listContains(filters: any, name: string): number;
    static listLength(fl: any): number;
    static listNew(repo: Repository, mode: number, options: number): Promise<any>;
    static listStreamBlob(filters: any, blob: Blob, target: Writestream): number;
    static listStreamData(filters: any, data: Buf, target: Writestream): number;
    static listStreamFile(filters: any, repo: Repository, path: string, target: Writestream): number;
    static unregister(name: string): number;

    lookup(name: string): Filter;
    register(name: string, priority: number): number;
    version: number;
    attributes: string;
    stream: Function;
}
