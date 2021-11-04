import * as URI from '../';

export = URITemplate;
export as namespace URITemplate;

declare const URITemplate: URITemplate.URITemplateStatic;

declare namespace URITemplate {
    type URITemplateLiteral = string;
    interface URITemplateVariable {
        name: string;
        explode: boolean;
        maxLength?: number | undefined;
    }

    interface URITemplateExpression {
        expression: string;
        operator: string;
        variables: ReadonlyArray<URITemplateVariable>;
    }

    type URITemplatePart = URITemplateLiteral | URITemplateExpression;

    interface URITemplate {
        expand(data: URITemplateInput, opts?: object): URI;
        parse(): this;

        /**
         * @description The parsed parts of the URI Template. Only present after calling
         *              `parse()` first.
         */
        parts?: ReadonlyArray<URITemplatePart> | undefined;
    }

    interface URITemplateStatic {
        (template: string): URITemplate;

        new (template: string): URITemplate;
    }

    type URITemplateValue = string | ReadonlyArray<string> | { [key: string]: string } | undefined | null;
    type URITemplateCallback = (keyName: string) => URITemplateValue;
    type URITemplateInput = { [key: string]: URITemplateValue | URITemplateCallback } | URITemplateCallback;
}
