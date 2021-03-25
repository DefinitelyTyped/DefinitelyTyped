// Type definitions for camouflage-rewrite 1.2
// Project: https://github.com/zazukoians/camouflage-rewrite
// Definitions by: Tomasz Pluskiewicz <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { RequestHandler } from 'express';

declare namespace CamouflageRewrite {
    interface Options {
        mediaTypes?: string[];
        rewriteContent?: boolean;
        rewriteHeaders?: boolean;
        url: string;
    }
}

declare function CamouflageRewrite(options: CamouflageRewrite.Options): RequestHandler;

export = CamouflageRewrite;
