import MIMEType = require('whatwg-mimetype');

// test type exports
type MT = MIMEType;
type MTP = MIMEType.MIMETypeParameters;

const mt = MIMEType.parse('text/plain'); // $ExpectType MIMEType | null

if (mt != null) {
    mt.type; // $ExpectType string
    mt.type = 'text';
    mt.subtype; // $ExpectType string
    mt.subtype = 'plain';
    mt.essence; // $ExpectType string
    // @ts-expect-error
    mt.essence = '';
    mt.parameters; // $ExpectType MIMETypeParameters
    // @ts-expect-error
    mt.parameters = mt.parameters;
    mt.isXML(); // $ExpectType boolean
    mt.isHTML(); // $ExpectType boolean
    mt.isJavaScript(); // $ExpectType boolean
    mt.isJavaScript({ prohibitParameters: true }); // $ExpectType boolean

    mt.parameters.size; // $ExpectType number
    mt.parameters.get('key'); // $ExpectType string | undefined
    mt.parameters.has('key'); // $ExpectType boolean
    mt.parameters.set('key', 'value'); // $ExpectType MIMETypeParameters
    mt.parameters.clear(); // $ExpectType void
    mt.parameters.delete('key'); // $ExpectType boolean
    // $ExpectType void
    mt.parameters.forEach((value, key, map) => {
        value; // $ExpectType string
        key; // $ExpectType string
        map; // $ExpectType Map<string, string>
    }, null);
    mt.parameters.keys(); // $ExpectType IterableIterator<string>
    mt.parameters.values(); // $ExpectType IterableIterator<string>
    mt.parameters.entries(); // $ExpectType IterableIterator<[string, string]>
    mt.parameters[Symbol.iterator](); // $ExpectType IterableIterator<[string, string]>
}
