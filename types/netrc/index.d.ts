/// <reference types="node" />

import fs from "fs";

export = netrc;

declare function netrc(file?: fs.PathLike): netrc.Machines;

declare namespace netrc {
    type Machines = Record<string, Record<string, string>>;
    function parse(content: string): Machines;
    function format(machines: Machines): string;
    function save(machines: Machines): void;
}
