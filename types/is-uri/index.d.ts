import { Options, URI } from "parse-uri";

declare function isURI(uri: string | URI, opts?: Options): boolean;

export = isURI;
