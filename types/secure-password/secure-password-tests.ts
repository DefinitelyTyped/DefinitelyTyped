import SecurePassword = require('secure-password');

// test type exports
type SP = SecurePassword;
type Options = SecurePassword.Options;
type VerificationResult = SecurePassword.VerificationResult;

SecurePassword.HASH_BYTES; // $ExpectType number
SecurePassword.PASSWORD_BYTES_MIN; // $ExpectType number
SecurePassword.PASSWORD_BYTES_MAX; // $ExpectType number
SecurePassword.MEMLIMIT_MIN; // $ExpectType number
SecurePassword.MEMLIMIT_MAX; // $ExpectType number
SecurePassword.OPSLIMIT_MIN; // $ExpectType number
SecurePassword.OPSLIMIT_MAX; // $ExpectType number
SecurePassword.MEMLIMIT_DEFAULT; // $ExpectType number
SecurePassword.OPSLIMIT_DEFAULT; // $ExpectType number
SecurePassword.VALID; // $ExpectType typeof VALID
SecurePassword.INVALID; // $ExpectType typeof INVALID
SecurePassword.VALID_NEEDS_REHASH; // $ExpectType typeof VALID_NEEDS_REHASH
SecurePassword.INVALID_UNRECOGNIZED_HASH; // $ExpectType typeof INVALID_UNRECOGNIZED_HASH

const sp = new SecurePassword(); // $ExpectType SecurePassword
new SecurePassword({ memlimit: SecurePassword.MEMLIMIT_MAX }); // $ExpectType SecurePassword
new SecurePassword({ opslimit: SecurePassword.OPSLIMIT_MAX }); // $ExpectType SecurePassword

sp.memlimit; // $ExpectType number
// @ts-expect-error
sp.memlimit = 1;
sp.opslimit; // $ExpectType number
// @ts-expect-error
sp.opslimit = 1;

sp.hash(Buffer.from('passw0rd')); // $ExpectType Promise<Buffer>
// $ExpectType void
sp.hash(Buffer.from('passw0rd'), (err, buffer) => {
    err; // $ExpectType Error | null
    buffer; // $ExpectType Buffer
});

sp.hashSync(Buffer.from('passw0rd')); // $ExpectType Buffer

sp.verify(Buffer.from('passw0rd'), Buffer.from('hash')); // $ExpectType Promise<VerificationResult>
// $ExpectType void
sp.verify(Buffer.from('passw0rd'), Buffer.from('hash'), (err, res) => {
    err; // $ExpectType Error | null
    res; // $ExpectType VerificationResult
});

const res = sp.verifySync(Buffer.from('passw0rd'), Buffer.from('hash')); // $ExpectType VerificationResult

switch (res) {
    case SecurePassword.INVALID:
        break;
    case SecurePassword.INVALID_UNRECOGNIZED_HASH:
        break;
    case SecurePassword.VALID_NEEDS_REHASH:
        break;
    case SecurePassword.VALID:
        break;
}
