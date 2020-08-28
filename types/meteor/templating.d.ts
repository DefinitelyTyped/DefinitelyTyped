import { Blaze } from 'meteor/blaze';
declare module "meteor/templating" {
    var Template: TemplateStatic;
    interface TemplateStatic extends Blaze.TemplateStatic {
        new (viewName?: string, renderFunction?: Function): Blaze.Template;
        body: Blaze.Template;
        [index: string]: any | Blaze.Template;
    }
}
