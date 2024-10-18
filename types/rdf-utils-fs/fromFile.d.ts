import { Stream } from "@rdfjs/types";
import { PathLike } from "fs";
import defaults = require("./defaults");

type Options = Record<string, any> & {
    extensions?: typeof defaults["extensions"];
};

declare function fromFile(filename: PathLike, options?: Options): Stream;

export = fromFile;
