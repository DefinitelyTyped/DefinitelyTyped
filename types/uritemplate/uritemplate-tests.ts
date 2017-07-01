
import { UriTemplate } from 'uritemplate';

function test_uritemplate() {

    // syntax check: UriTemplate.parse
    var template = UriTemplate.parse('http://localhost/categories{/categoryId}{?sort,pageNumber}');

    // syntax check: template.expand
    var url = template.expand({
        categoryId : 'shoes',
        sort: 'price',
        pageNumber: 8
    });

    // import module check
    var expectedUrl = 'http://localhost/categories/shoes?sort=price&pageNumber=8';
    if (expectedUrl != url) {
        throw `Expected ${expectedUrl}, got ${url}`;
    } else {
        console.log('Test passed');
    }

    // syntax check: new UriTemplate.UriTemplateError
    let error = new UriTemplate.UriTemplateError({
        expressionText: 'error expression',
        message: 'error message',
        position: 5
    });
}
