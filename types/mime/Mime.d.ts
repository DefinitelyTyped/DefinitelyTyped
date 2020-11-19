import { TypeMap } from "./index";

export default class Mime {
    constructor(mimes: TypeMap);

    getType(path: string): string | null;
    getExtension(mime: string): string | null;
    define(mimes: TypeMap, force?: boolean): void;
}
