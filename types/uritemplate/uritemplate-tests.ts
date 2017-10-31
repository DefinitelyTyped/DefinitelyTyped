
import {parse as parseUriTemplate, UriTemplate, UriTemplateError} from "uritemplate";

function test_uritemplate() {

    // syntax check: UriTemplate.parse
    var template: UriTemplate = parseUriTemplate('http://localhost/categories{/categoryId}{?sort,pageNumber}');

    // syntax check: template.expand
    var url: string = template.expand({
        categoryId : 'shoes',
        sort: 'price',
        pageNumber: 8
    });

    // import module check
    var expectedUrl: string = 'http://localhost/categories/shoes?sort=price&pageNumber=8';
    if (expectedUrl != url) {
        throw `Expected ${expectedUrl}, got ${url}`;
    } else {
        console.log('Test passed');
    }

    // syntax check: new UriTemplateError
    let error: UriTemplateError = new UriTemplateError({
        expressionText: 'error expression',
        message: 'error message',
        position: 5
    });
}
