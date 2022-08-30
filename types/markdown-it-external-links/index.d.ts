// Type definitions for markdown-it-link-attributes 0.0
// Project: https://github.com/rotorz/markdown-it-external-links
// Definitions by: Daniil Pronin <https://github.com/grawl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { PluginWithOptions } from 'markdown-it';
import { RenderRule } from 'markdown-it/lib/renderer';

declare namespace markdownItExternalLinks {
    interface Config {
        externalClassName?: string | null;
        internalClassName?: string | null;
        internalDomains?: string[] | undefined;
        externalTarget?: string | undefined;
        internalTarget?: string | undefined;
        externalRel?: string | undefined;
        internalRel?: string | undefined;
    }
}
declare const markdownItExternalLinks: PluginWithOptions<markdownItExternalLinks.Config | markdownItExternalLinks.Config[]> & {
    readonly defaultRender: RenderRule;
};
export = markdownItExternalLinks;
