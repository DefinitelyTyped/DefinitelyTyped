import { PathLike } from "fs";
import { Stream } from "rdf-js";
import defaults = require("./defaults");

type Options = Record<string, any> & {
    extensions?: typeof defaults["extensions"];
};

declare function fromFile(filename: PathLike, options?: Options): Stream;

export = fromFile;
