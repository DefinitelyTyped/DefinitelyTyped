/*
 UriTemplate Copyright (c) 2012-2013 Franz Antesberger. All Rights Reserved.
 Available via the MIT license.
*/

export class UriTemplate {
    /**
     * Expands template into a string using parameter
     * supplied
     */
    expand(data: {}): string;
}

export interface UriTemplateErrorOptions {
    expressionText: string;
    message: string;
    position: number;
}

export class UriTemplateError {
    constructor(options: UriTemplateErrorOptions);
}

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
export function parse(templateText: string): UriTemplate;
