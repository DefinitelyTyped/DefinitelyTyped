import ElGamal from 'elgamal';

(async () => {
    const eg = await ElGamal.generateAsync();

    const secret = 'The quick brown fox jumps over the lazy dog';
    const encrypted = await eg.encryptAsync(secret); // $ExpectType EncryptedValue
    const decrypted = await eg.decryptAsync(encrypted); // $ExpectType DecryptedValue

    decrypted.toString(); // $ExpectType string
})();
