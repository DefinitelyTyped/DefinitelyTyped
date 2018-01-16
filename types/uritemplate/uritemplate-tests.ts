import { parse as parseUriTemplate, UriTemplate, UriTemplateError } from "uritemplate";

function test_uritemplate() {
    // syntax check: UriTemplate.parse
    const template: UriTemplate = parseUriTemplate('http://localhost/categories{/categoryId}{?sort,pageNumber}');

    // syntax check: template.expand
    const url: string = template.expand({
        categoryId : 'shoes',
        sort: 'price',
        pageNumber: 8
    });

    // import module check
    const expectedUrl = 'http://localhost/categories/shoes?sort=price&pageNumber=8';
    if (expectedUrl !== url) {
        throw new Error(`Expected ${expectedUrl}, got ${url}`);
    } else {
        console.log('Test passed');
    }

    // syntax check: new UriTemplateError
    const error: UriTemplateError = new UriTemplateError({
        expressionText: 'error expression',
        message: 'error message',
        position: 5
    });
}
