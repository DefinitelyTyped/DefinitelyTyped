import { sha1, sha256, sha384, sha512 } from 'crypto-hash';

// $ExpectType Promise<string>
sha1('🦄');
// $ExpectType Promise<ArrayBuffer>
sha1('🦄', { outputFormat: 'buffer' });
// $ExpectType Promise<string>
sha1('🦄', { outputFormat: 'hex' });

// $ExpectType Promise<string>
sha256('🦄');
// $ExpectType Promise<ArrayBuffer>
sha256('🦄', { outputFormat: 'buffer' });
// $ExpectType Promise<string>
sha256('🦄', { outputFormat: 'hex' });

// $ExpectType Promise<string>
sha384('🦄');
// $ExpectType Promise<ArrayBuffer>
sha384('🦄', { outputFormat: 'buffer' });
// $ExpectType Promise<string>
sha384('🦄', { outputFormat: 'hex' });

// $ExpectType Promise<string>
sha512('🦄');
// $ExpectType Promise<ArrayBuffer>
sha512('🦄', { outputFormat: 'buffer' });
// $ExpectType Promise<string>
sha512('🦄', { outputFormat: 'hex' });
