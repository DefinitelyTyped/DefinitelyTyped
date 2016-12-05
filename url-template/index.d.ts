// Type definitions for url-template 2.0.6
// Project: https://github.com/bramstein/url-template
// Definitions by: Marcin Porębski <https://github.com/marcinporebski/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var urlTemplate: UrlTemplate.TemplateParser;

export = urlTemplate;
export as namespace urltemplate;

declare namespace UrlTemplate
{
    interface TemplateParser {
        parse(template: string): Template;
    }

    interface Template {
        expand(parameters: any): string;
    }
}


