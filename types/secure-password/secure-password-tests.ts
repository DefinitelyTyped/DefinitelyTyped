import SecurePassword = require('secure-password');

const sp = new SecurePassword();
const spWithOpts = new SecurePassword({memlimit: 10, opslimit: 10});

const clearTextBuf = Buffer.from('testing');

const hashPromise = sp.hash(clearTextBuf).then((hash) => hash);
sp.hash(clearTextBuf, (err, hash) => {});
const hashBuf = sp.hashSync(clearTextBuf);

const verifyPromise = sp.verify(clearTextBuf, hashBuf).then((symb) => symb);
sp.verify(clearTextBuf, hashBuf, (err, result) => {});
const verifyResult = sp.verifySync(clearTextBuf, hashBuf);
