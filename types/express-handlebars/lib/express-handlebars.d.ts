import { ExphbsCallback, ExphbsOptions, PartialTemplateOptions, RenderOptions } from "../";

declare class ExpressHandlebars {
    extname: string;
    compiled: object;
    precompiled: Record<string, () => string>;
    create(options?: ExphbsOptions): ExpressHandlebars;
    engine: (path: string, options: object, callback: (e: any, rendered: string) => void) => void;
    getPartials(options?: PartialTemplateOptions): Promise<object>;
    getTemplate(
        filePath: string,
        options?: PartialTemplateOptions & {
            precompiled?: false;
        },
    ): Promise<() => string>;
    getTemplates(dirPath: string, options?: PartialTemplateOptions): Promise<object>;
    render(filePath: string, context: object, options?: RenderOptions): Promise<string>;
    renderView(viewPath: string, callback: ExphbsCallback): void;
    renderView(viewPath: string, options: any, callback: ExphbsCallback): void;
}

export = ExpressHandlebars;
