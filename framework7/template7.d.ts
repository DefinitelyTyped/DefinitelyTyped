// Type definitions for Template7
// Project: https://github.com/nolimits4web/Framework7
// Definitions by: JasonKleban <https://github.com/JasonKleban/Framework7.d.ts>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Template7 {

    interface Template7{
        global?: any
        templates?: any;
        compile? (htmlString: string): any;
        registerHelper? (name: string, helper: Function): any;
        unregisterHelper? (name: string);
        registerPartial? (name: string, template: string);
        unregisterPartial? (name: string);
    }
    
}

declare let Template7: Template7.Template7;

declare module "Template7" {
    export = Template7;
}
