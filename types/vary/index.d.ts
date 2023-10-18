/// <reference types="node" />
import { ServerResponse } from "http";
export = vary;

declare function vary(res: ServerResponse, field: string | string[]): void;

declare namespace vary {
    function append(header: string, field: string | string[]): string;
}
