declare var urlTemplate: UrlTemplate.TemplateParser;

export = urlTemplate;
export as namespace urltemplate;

declare namespace UrlTemplate {
    interface TemplateParser {
        parse(template: string): Template;
    }

    interface Template {
        expand(parameters: any): string;
    }
}
