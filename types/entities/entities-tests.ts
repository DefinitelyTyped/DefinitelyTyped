import * as entities from 'entities';

// encoding
entities.encodeXML(`&#38;`);  // `&amp;#38;`
entities.encodeHTML(`&#38;`); // `&amp;&num;38&semi;`

// decoding
entities.decodeXML(`asdf &amp; &#xFF; &#xFC; &apos;`);  // `asdf & ÿ ü '`
entities.decodeHTML(`asdf &amp; &yuml; &uuml; &apos;`); // `asdf & ÿ ü '`
