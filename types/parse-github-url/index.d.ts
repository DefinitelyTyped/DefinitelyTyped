// Type definitions for parse-github-url 1.0
// Project: https://github.com/jonschlinkert/parse-github-url
// Definitions by: Klaus Meinhardt <https://github.com/ajafff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Url } from 'url';

declare namespace gh {
    interface Result extends Url {
        filepath: string | null;
        owner: string | null;
        name: string | null;
        repo: string | null;
        repository: string | null;
        branch: string;
    }
}

declare function gh(url: string): gh.Result | null;

export = gh;
