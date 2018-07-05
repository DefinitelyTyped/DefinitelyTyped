import * as prettyBytes from 'pretty-bytes';

prettyBytes(1337);
// => '1.34 kB'

prettyBytes(100);
// => '100 B'

// Display file size differences
prettyBytes(42, { signed: true });
// => '+42 B'

// Localized output using German locale
prettyBytes(1337, { locale: 'de' });
// => '1,34 kB'

// Localized output using system/browser locale
prettyBytes(1337, { locale: true });
