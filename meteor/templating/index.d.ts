import { Blaze } from 'meteor/blaze';

export let Template: TemplateStatic;
export interface TemplateStatic extends Blaze.TemplateStatic {
    new (viewName?: string, renderFunction?: Function): Blaze.Template;
    body: Blaze.Template;
    [index: string]: any | Blaze.Template;
}
