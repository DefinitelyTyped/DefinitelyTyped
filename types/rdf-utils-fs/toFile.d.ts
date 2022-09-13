import { Stream } from 'rdf-js';
import { PathLike } from 'fs';
import defaults = require('./defaults');

type Options = Record<string, any> & {
    extensions?: typeof defaults['extensions']
};

declare function toFile(stream: Stream, filename: PathLike, options?: Options): Promise<void>;

export = toFile;
