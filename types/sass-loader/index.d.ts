/// <reference types="node" />

import { LoaderOptions } from "./interfaces";

declare function loader(content: string): void;

declare namespace loader {
    type Options = LoaderOptions;
}

export = loader;
