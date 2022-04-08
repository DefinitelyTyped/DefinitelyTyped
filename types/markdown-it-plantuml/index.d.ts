// Type definitions for markdown-it-plantuml 1.4
// Project: https://github.com/gmunguia/markdown-it-plantuml#readme
// Definitions by: Gerardo Munguia <https://github.com/gmunguia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import MarkdownIt = require('markdown-it');
import Renderer = require('markdown-it/lib/renderer');

declare namespace markdownItPlantuml {
    interface Options {
        closeMarker?: string;
        diagramName?: string;
        generateSource?: (umlCode: string, pluginOptions: Options) => string;
        imageFormat?: string;
        openMarker?: string;
        render?: Renderer.RenderRule;
        server?: string;
    }
}

declare const markdownItPlantuml: MarkdownIt.PluginWithOptions<markdownItPlantuml.Options>;
export = markdownItPlantuml;
