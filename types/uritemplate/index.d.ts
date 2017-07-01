// Type definitions for URI Template JS 0.3.4
// Project: https://github.com/fxa/uritemplate-js
// Definitions by: Chui Tey <https://github.com/teyc/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*
 UriTemplate Copyright (c) 2012-2013 Franz Antesberger. All Rights Reserved.
 Available via the MIT license.
*/

declare namespace uritemplate {

    interface UriTemplate {
        
        /**
         * Expands template into a string using parameter
         * supplied
         */
        expand(data: {}): string;
    }

    interface UriTemplateErrorOptions {
        expressionText: string
        message: string
        position: number
    }

    interface UriTemplateError {
        new (options: UriTemplateErrorOptions): UriTemplateError
    }


    interface UriTemplateStatic {

        /**
         * parse template text returning instance of UriTemplate
         * @param template text
         * @return instance of UriTemplate
         * @example
         *   import UriTemplate = require('uritemplate');
         *   let template = UriTemplate.parse('http://localhost/query{?name,city}');
         *   let result   = template.expand({name: 'Jayden', city: 'Wodonga'});
         *   // returns http://localhost/query?name=Jayden&city=Wodonga
         */
        parse(templateText: string): uritemplate.UriTemplate;

        UriTemplateError: new (options: uritemplate.UriTemplateErrorOptions) => uritemplate.UriTemplateError;
    }

}

declare module 'uritemplate' {

    export var UriTemplate: uritemplate.UriTemplateStatic;

}
