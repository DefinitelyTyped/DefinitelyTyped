import * as xmlserializer from 'xmlserializer';
import * as parse5 from 'parse5';

const htmlString = '<br>';
const dom = parse5.parse(htmlString);

// $ExpectType string
xmlserializer.serializeToString(dom);
