import traverson = require('traverson');

function testTraverson() {
    var mediaTypeHandler: any = {};

    traverson.registerMediaType('application/some-fancy+json', mediaTypeHandler);

    traverson
        .from('http://example.api.com/')
        .follow('link_to')
        .withTemplateParameters({ id: 1 })
        .get((error, document, traversal) => {
            traversal
                .continue()
                .follow('link_back')
                .get((error, document, traversal) => {
                    ///
                });
        });
}
