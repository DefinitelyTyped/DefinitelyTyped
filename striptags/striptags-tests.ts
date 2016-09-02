/// <reference path="./striptags.d.ts" />
import striptags from 'striptags';

    function testStriptags() {
    var html =
        '<a href="https://example.com">' +
            'lorem ipsum <strong>dolor</strong> <em>sit</em> amet' +
        '</a>';

    striptags(html);
    striptags(html, '<a><strong>');
    striptags(html, ['a']);
}