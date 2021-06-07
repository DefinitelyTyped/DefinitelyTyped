import wsd = require('websequencediagrams');

async () => {
    const [buffer, mimeType] = await wsd.diagram('Alice->Bob: message', 'modern-blue', 'png');
    mimeType; // $ExpectType string
    buffer; // $ExpectType Buffer

    // @ts-expect-error
    await wsd.diagram('Alice->Bob: message', 'invalid');

    const url = await wsd.diagramURL('Alice->Bob: message', 'modern-blue', 'png');
    url; // $ExpectType string

    // @ts-expect-error
    await wsd.diagramURL('Alice->Bob: message', 'modern-blue', 'invalid');

    // @ts-expect-error
    await wsd.diagramURL(null);

    wsd.root; // $ExpectType string

    wsd.styles; // $ExpectType Style[]
};
