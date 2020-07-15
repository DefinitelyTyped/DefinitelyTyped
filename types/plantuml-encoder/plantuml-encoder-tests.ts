import plantUmlEncoder = require('plantuml-encoder');

if (plantUmlEncoder.encode('A -> B: Hello') !== 'SrJGjLDmibBmICt9oGS0') {
    throw new Error('Test failed: encode');
}

if (plantUmlEncoder.decode('SrJGjLDmibBmICt9oGS0') !== 'A -> B: Hello') {
    throw new Error('Test failed: decode');
}
