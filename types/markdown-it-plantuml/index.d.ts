import MarkdownIt = require("markdown-it");
import Renderer = require("markdown-it/lib/renderer");

declare namespace markdownItPlantuml {
    interface Options {
        closeMarker?: string | undefined;
        diagramName?: string | undefined;
        generateSource?: ((umlCode: string, pluginOptions: Options) => string) | undefined;
        imageFormat?: string | undefined;
        openMarker?: string | undefined;
        render?: Renderer.RenderRule | undefined;
        server?: string | undefined;
    }
}

declare const markdownItPlantuml: MarkdownIt.PluginWithOptions<markdownItPlantuml.Options>;
export = markdownItPlantuml;
