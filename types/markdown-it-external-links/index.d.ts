// Type definitions for markdown-it-link-attributes 0.0.6
// Project: https://github.com/rotorz/markdown-it-external-links
// Definitions by: Daniil Pronin <https://github.com/grawl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { PluginWithOptions } from 'markdown-it';
import { RenderRule } from 'markdown-it/lib/renderer';

declare namespace markdownItExternalLinks {
    interface Config {
        externalClassName?: string | null;
        internalClassName?: string | null;
        internalDomains?: string[];
        externalTarget?: string;
        internalTarget?: string;
        externalRel?: string;
        internalRel?: string;
    }
}
declare const markdownItExternalLinks: PluginWithOptions<markdownItExternalLinks.Config | markdownItExternalLinks.Config[]> & {
    readonly defaultRender: RenderRule;
}
export = markdownItExternalLinks;
