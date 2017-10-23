// Type definitions for sjcl v1.0.1
// Project: http://crypto.stanford.edu/sjcl/
// Definitions by: Eugene Chernyshov <https://github.com/Evgenus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = sjcl;
export as namespace sjcl;

declare namespace sjcl {

    export var bn: BigNumberStatic;
    export var bitArray: BitArrayStatic;
    export var codec: SjclCodecs;
    export var hash: SjclHashes;
    export var exception: SjclExceptions;
    export var cipher: SjclCiphers;
    export var mode: SjclModes;
    export var misc: SjclMisc;
    export var ecc: SjclEllipticCurveCryptography;
    export var random: SjclRandom;
    export var prng: SjclRandomStatic;
    export var keyexchange: SjclKeyExchange;
    export var json: SjclJson;
    export var encrypt: SjclConveninceEncryptor;
    export var decrypt: SjclConveninceDecryptor;

    // ________________________________________________________________________

    interface BigNumber {
        radix: number;
        maxMul: number;

        copy(): BigNumber;

        /// Initializes this with it, either as a bn, a number, or a hex string.
        initWith: TypeHelpers.BigNumberBinaryOperator;

        /// Returns true if "this" and "that" are equal.  Calls fullReduce().
        /// Equality test is in constant time.
        equals(that: number): boolean;
        equals(that: BigNumber): boolean;

        /// Get the i'th limb of this, zero if i is too large.
        getLimb(index: number): number;

        /// Constant time comparison function.
        /// Returns 1 if this >= that, or zero otherwise.
        greaterEquals(that: number): boolean;
        greaterEquals(that: BigNumber): boolean;

        /// Convert to a hex string.
        toString(): string;

        /// this += that.  Does not normalize.
        addM: TypeHelpers.BigNumberBinaryOperator;

        /// this *= 2.  Requires normalized; ends up normalized.
        doubleM(): BigNumber;

        /// this /= 2, rounded down.  Requires normalized; ends up normalized.
        halveM(): BigNumber;

        /// this -= that.  Does not normalize.
        subM: TypeHelpers.BigNumberBinaryOperator;

        mod: TypeHelpers.BigNumberBinaryOperator;

        /// return inverse mod prime p.  p must be odd. Binary extended Euclidean algorithm mod p.
        inverseMod: TypeHelpers.BigNumberBinaryOperator;

        /// this + that.  Does not normalize.
        add: TypeHelpers.BigNumberBinaryOperator;

        /// this - that.  Does not normalize.
        sub: TypeHelpers.BigNumberBinaryOperator;

        /// this * that.  Normalizes and reduces.
        mul: TypeHelpers.BigNumberBinaryOperator;

        /// this ^ 2.  Normalizes and reduces.
        square(): BigNumber;

        /// this ^ n.  Uses square-and-multiply.  Normalizes and reduces.
        power(n: number): BigNumber;
        power(n: BigNumber): BigNumber;
        power(a: number[]): BigNumber;

        /// this * that mod N
        mulmod: TypeHelpers.BigNumberTrinaryOperator;

        /// this ^ x mod N
        powermod: TypeHelpers.BigNumberTrinaryOperator;

        trim(): BigNumber;

        /// Reduce mod a modulus.  Stubbed for subclassing.
        reduce(): BigNumber;

        /// Reduce and normalize.
        fullReduce(): BigNumber;

        /// Propagate carries.
        normalize(): BigNumber;

        /// Constant-time normalize. Does not allocate additional space.
        cnormalize(): BigNumber;

        /// Serialize to a bit array
        toBits(len?: number): BitArray;

        /// Return the length in bits, rounded up to the nearest byte.
        bitLength(): number;
    }

    interface BigNumberStatic {
        new (): BigNumber;
        new (n: string): BigNumber;
        new (n: number): BigNumber;
        new (n: BigNumber): BigNumber;

        fromBits(bits: BitArray): BigNumber;
        random: TypeHelpers.Bind1<number>;
        prime: {
            p127: PseudoMersennePrimeStatic;
            // Bernstein's prime for Curve25519
            p25519: PseudoMersennePrimeStatic;
            // Koblitz primes
            p192k: PseudoMersennePrimeStatic;
            p224k: PseudoMersennePrimeStatic;
            p256k: PseudoMersennePrimeStatic;
            // NIST primes
            p192: PseudoMersennePrimeStatic;
            p224: PseudoMersennePrimeStatic;
            p256: PseudoMersennePrimeStatic;
            p384: PseudoMersennePrimeStatic;
            p521: PseudoMersennePrimeStatic;
        };

        pseudoMersennePrime(exponent: number, coeff: number[][]): PseudoMersennePrimeStatic;
    }

    interface PseudoMersennePrime extends BigNumber {
        reduce(): PseudoMersennePrime;
        fullReduce(): PseudoMersennePrime;
        inverse(): PseudoMersennePrime;
    }

    interface PseudoMersennePrimeStatic extends BigNumberStatic {
        new (): PseudoMersennePrime;
        new (n: string): PseudoMersennePrime;
        new (n: number): PseudoMersennePrime;
        new (n: BigNumber): PseudoMersennePrime;
    }

    // ________________________________________________________________________

    interface BitArray extends Array<number> {
    }

    interface BitArrayStatic {
        /// Array slices in units of bits.
        bitSlice(a: BitArray, bstart: number, bend: number): BitArray;

        /// Extract a number packed into a bit array.
        extract(a: BitArray, bstart: number, blenth: number): number;

        /// Concatenate two bit arrays.
        concat(a1: BitArray, a2: BitArray): BitArray

        /// Find the length of an array of bits.
        bitLength(a: BitArray): number;

        /// Truncate an array.
        clamp(a: BitArray, len: number): BitArray;

        /// Make a partial word for a bit array.
        partial(len: number, x: number, _end?: number): number;

        /// Get the number of bits used by a partial word.
        getPartial(x: number): number;

        /// Compare two arrays for equality in a predictable amount of time.
        equal(a: BitArray, b: BitArray): boolean;

        /// Shift an array right.
        _shiftRight(a: BitArray, shift: number, carry?: number, out?: BitArray): BitArray;

        /// xor a block of 4 words together.
        _xor4(x: number[], y: number[]): number[];
    }

    // ________________________________________________________________________

    interface SjclCodec<T> {
        fromBits(bits: BitArray): T;
        toBits(value: T): BitArray;
    }

    interface SjclCodecs {
        utf8String: SjclCodec<string>;
        hex: SjclCodec<string>;
        bytes: SjclCodec<number[]>;
        base64: SjclCodec<string>;
        base64url: SjclCodec<string>;
    }

    // ________________________________________________________________________

    interface SjclHash {
        reset(): SjclHash;
        update(data: string): SjclHash;
        update(data: BitArray): SjclHash;
        finalize(): BitArray;
    }

    interface SjclHashStatic {
        new (hash?: SjclHash): SjclHash;
        hash(data: string): BitArray;
        hash(data: BitArray): BitArray;
    }

    interface SjclHashes {
        sha1: SjclHashStatic;
        sha256: SjclHashStatic;
        sha512: SjclHashStatic;
    }

    // ________________________________________________________________________

    interface SjclExceptions {
        corrupt: SjclExceptionFactory;
        invalid: SjclExceptionFactory;
        bug: SjclExceptionFactory;
        notReady: SjclExceptionFactory;
    }

    interface SjclExceptionFactory {
        new (message: string): Error;
    }

    // ________________________________________________________________________

    interface SjclCiphers {
        aes: SjclCipherStatic;
    }

    interface SjclCipher {
        encrypt(data: number[]): number[];
        decrypt(data: number[]): number[];
    }

    interface SjclCipherStatic {
        new (key: number[]): SjclCipher;
    }

    // ________________________________________________________________________

    interface SjclModes {
        gcm: SjclGCMMode;
        ccm: SjclCCMMode;
        ocb2: SjclOCB2Mode;
        cbc: SjclCBCMode;
    }

    interface SjclGCMMode {
        encrypt(prp: SjclCipher, plaintext: BitArray, iv: BitArray, adata?: BitArray, tlen?: number): BitArray;
        decrypt(prp: SjclCipher, ciphertext: BitArray, iv: BitArray, adata?: BitArray, tlen?: number): BitArray;
    }

    interface SjclCCMMode {
        encrypt(prp: SjclCipher, plaintext: BitArray, iv: BitArray, adata?: BitArray, tlen?: number): BitArray;
        decrypt(prp: SjclCipher, ciphertext: BitArray, iv: BitArray, adata?: BitArray, tlen?: number): BitArray;
    }

    interface SjclOCB2Mode {
        encrypt(prp: SjclCipher, plaintext: BitArray, iv: BitArray, adata?: BitArray, tlen?: number, premac?: boolean): BitArray;
        decrypt(prp: SjclCipher, ciphertext: BitArray, iv: BitArray, adata?: BitArray, tlen?: number, premac?: boolean): BitArray;
        pmac(prp: SjclCipher, adata: BitArray): number[];
    }

    interface SjclCBCMode {
        encrypt(prp: SjclCipher, plaintext: BitArray, iv: BitArray, adata?: BitArray): BitArray;
        decrypt(prp: SjclCipher, ciphertext: BitArray, iv: BitArray, adata?: BitArray): BitArray;
    }

    // ________________________________________________________________________

    interface Pbkdf2Params {
        iter?: number;
        salt?: BitArray;
    }

    interface SjclMisc {
        pbkdf2(password: string, salt: string, count?: number, length?: number, Prff?: SjclPseudorandomFunctionFamilyStatic): BitArray;
        pbkdf2(password: BitArray, salt: string, count?: number, length?: number, Prff?: SjclPseudorandomFunctionFamilyStatic): BitArray;
        pbkdf2(password: BitArray, salt: BitArray, count?: number, length?: number, Prff?: SjclPseudorandomFunctionFamilyStatic): BitArray;
        pbkdf2(password: string, salt: BitArray, count?: number, length?: number, Prff?: SjclPseudorandomFunctionFamilyStatic): BitArray;
        hmac: SjclHmacStatic;
        cachedPbkdf2(password: string, obj?: Pbkdf2Params): {
            key: BitArray;
            salt: BitArray;
        };
    }

    class SjclPseudorandomFunctionFamily {
        encrypt(data: string): BitArray;
        encrypt(data: BitArray): BitArray;
    }

    interface SjclHmac extends SjclPseudorandomFunctionFamily {
        mac(data: string): BitArray;
        mac(data: BitArray): BitArray;
        reset(): void;
        update(data: string): void;
        update(data: BitArray): void;
        digest(): BitArray;
    }

    interface SjclPseudorandomFunctionFamilyStatic {
        new (key: BitArray): SjclPseudorandomFunctionFamily;
    }

    interface SjclHmacStatic {
        new (key: BitArray, Hash?: SjclHashStatic): SjclHmac;
    }

    // ________________________________________________________________________

    interface SjclEllipticCurveCryptography {
        point: SjclEllipticalPointStatic;
        pointJac: SjclPointJacobianStatic;
        curve: SjclEllipticalCurveStatic;
        curves: {
            c192: SjclEllipticalCurve;
            c224: SjclEllipticalCurve;
            c256: SjclEllipticalCurve;
            c384: SjclEllipticalCurve;
            k192: SjclEllipticalCurve;
            k224: SjclEllipticalCurve;
            k256: SjclEllipticalCurve;
        };
        basicKey: SjclECCBasic;
        elGamal: SjclElGamal;
        ecdsa: SjclEcdsa;
    }

    interface SjclEllipticalPoint {
        toJac(): SjclPointJacobian;
        mult(k: BigNumber): SjclEllipticalPoint;
        mult2(k: BigNumber, k2: BigNumber, affine2: SjclEllipticalPoint): SjclEllipticalPoint;
        multiples(): Array<SjclEllipticalPoint>;
        isValid(): boolean;
        toBits(): BitArray;
    }

    interface SjclEllipticalPointStatic {
        new (curve: SjclEllipticalCurve, x?: BigNumber, y?: BigNumber): SjclEllipticalPoint;
    }

    interface SjclPointJacobian {
        add(T: SjclEllipticalPoint): SjclPointJacobian;
        doubl(): SjclPointJacobian;
        toAffine(): SjclEllipticalPoint;
        mult(k: BigNumber, affine: SjclEllipticalPoint): SjclPointJacobian;
        mult2(k1: BigNumber, affine: SjclEllipticalPoint, k2: BigNumber, affine2: SjclEllipticalPoint): SjclPointJacobian;
        isValid(): boolean;
    }

    interface SjclPointJacobianStatic {
        new (curve: SjclEllipticalCurve, x?: BigNumber, y?: BigNumber, z?: BigNumber):SjclPointJacobian;
    }

    interface SjclEllipticalCurve {
        fromBits(bits: BitArray): SjclEllipticalPoint;
    }

    interface SjclEllipticalCurveStatic {
        new (Field: BigNumber, r: BigNumber, a: BigNumber, b: BigNumber, x: BigNumber, y: BigNumber): SjclEllipticalCurve;
    }

    interface SjclKeyPair<P extends SjclECCPublicKey, S extends SjclECCSecretKey> {
        pub: P;
        sec: S;
    }

    interface SjclKeysGenerator<P extends SjclECCPublicKey, S extends SjclECCSecretKey> {
        (curve: SjclEllipticalCurve, paranoia: number, sec?: BigNumber): SjclKeyPair<P, S>;
        (curve: number, paranoia: number, sec?: BigNumber): SjclKeyPair<P, S>;
    }

    interface SjclECCPublicKeyData {
        x: BitArray;
        y: BitArray;
    }

    class SjclECCPublicKey {
        get(): SjclECCPublicKeyData;
    }

    class SjclECCSecretKey {
        get(): BitArray;
    }

    interface SjclECCPublicKeyFactory<T extends SjclECCPublicKey> {
        new (curve: SjclEllipticalCurve, point: SjclEllipticalPoint): T;
        new (curve: SjclEllipticalCurve, point: BitArray): T;
    }

    interface SjclECCSecretKeyFactory<T extends SjclECCSecretKey> {
        new (curve: SjclEllipticalCurve, exponent: BigNumber): T;
    }

    interface SjclECCBasic {
        publicKey: SjclECCPublicKeyFactory<SjclECCPublicKey>;
        secretKey: SjclECCSecretKeyFactory<SjclECCSecretKey>;
        generateKeys(cn: string): SjclKeysGenerator<SjclECCPublicKey, SjclECCSecretKey>;
    }

    class SjclElGamalPublicKey extends SjclECCPublicKey {
        kem(paranoia: number): {
            key: BitArray;
            tag: BitArray;
        };
    }

    class SjclElGamalSecretKey extends SjclECCSecretKey {
        unkem(tag: BitArray): BitArray;
        dh(pk: SjclECCPublicKey): BitArray;
    }

    interface SjclElGamal {
        publicKey: SjclECCPublicKeyFactory<SjclElGamalPublicKey>;
        secretKey: SjclECCSecretKeyFactory<SjclElGamalSecretKey>;
        generateKeys: SjclKeysGenerator<SjclElGamalPublicKey, SjclElGamalSecretKey>;
    }

    class SjclEcdsaPublicKey extends SjclECCPublicKey {
        verify(hash: BitArray, rs: BitArray, fakeLegacyVersion: boolean): boolean;
    }

    class SjclEcdsaSecretKey extends SjclECCSecretKey {
        sign(hash: BitArray, paranoia: number, fakeLegacyVersion: boolean, fixedKForTesting?: BigNumber): BitArray;
    }

    interface SjclEcdsa {
        publicKey: SjclECCPublicKeyFactory<SjclEcdsaPublicKey>;
        secretKey: SjclECCSecretKeyFactory<SjclEcdsaSecretKey>;
        generateKeys: SjclKeysGenerator<SjclEcdsaPublicKey, SjclEcdsaSecretKey>;
    }

    // ________________________________________________________________________

    interface SjclRandom {
        randomWords(nwords: number, paranoia?: number): BitArray;
        setDefaultParanoia(paranoia: number, allowZeroParanoia: string): void;
        addEntropy(data: number, estimatedEntropy: number, source: string): void;
        addEntropy(data: number[], estimatedEntropy: number, source: string): void;
        addEntropy(data: string, estimatedEntropy: number, source: string): void;
        isReady(paranoia?: number): boolean;
        getProgress(paranoia?: number): number;
        startCollectors(): void;
        stopCollectors(): void;
        addEventListener(name: string, cb: Function): void;
        removeEventListener(name: string, cb: Function): void;
    }

    interface SjclRandomStatic {
        new (defaultParanoia: number): SjclRandom;
    }

    // ________________________________________________________________________

    interface SjclKeyExchange {
        srp: SecureRemotePassword;
    }

    interface SjclSRPGroup {
        N: BigNumber;
        g: BigNumber;
    }

    interface SecureRemotePassword {
        makeVerifier(username: string, password: string, salt: BitArray, group: SjclSRPGroup): BitArray;
        makeX(username: string, password: string, salt: BitArray): BitArray;
        knownGroup(i: string): SjclSRPGroup;
        knownGroup(i: number): SjclSRPGroup;
    }

    // ________________________________________________________________________

    interface SjclCipherParams {
        v?: number;
        iter?: number;
        ks?: number;
        ts?: number;
        mode?: string;
        adata?: string;
        cipher?: string;
    }

    interface SjclCipherEncryptParams extends SjclCipherParams {
        salt: BitArray;
        iv: BitArray;
    }

    interface SjclCipherDecryptParams extends SjclCipherParams {
        salt?: BitArray;
        iv?: BitArray;
    }

    interface SjclCipherEncrypted extends SjclCipherEncryptParams {
        kemtag?: BitArray;
        ct: BitArray;
    }

    interface SjclCipherDecrypted extends SjclCipherEncrypted {
        key: BitArray;
    }

    interface SjclConveninceEncryptor {
        (password: string, plaintext: string, params?: SjclCipherEncryptParams, rp?: SjclCipherEncrypted): SjclCipherEncrypted;
        (password: BitArray, plaintext: string, params?: SjclCipherEncryptParams, rp?: SjclCipherEncrypted): SjclCipherEncrypted;
        (password: SjclElGamalPublicKey, plaintext: string, params?: SjclCipherEncryptParams, rp?: SjclCipherEncrypted): SjclCipherEncrypted;
    }

    interface SjclConveninceDecryptor {
        (password: string, ciphertext: SjclCipherEncrypted, params?: SjclCipherDecryptParams, rp?: SjclCipherDecrypted): string;
        (password: string, ciphertext: string, params?: SjclCipherDecryptParams, rp?: SjclCipherDecrypted): string;
        (password: BitArray, ciphertext: SjclCipherEncrypted, params?: SjclCipherDecryptParams, rp?: SjclCipherDecrypted): string;
        (password: SjclElGamalSecretKey, ciphertext: SjclCipherEncrypted, params?: SjclCipherDecryptParams, rp?: SjclCipherDecrypted): string;
    }

    interface SjclJson {
        encrypt: SjclConveninceEncryptor;
        decrypt: SjclConveninceDecryptor;
        encode(obj: Object): string;
        decode(obj: string): Object;
    }

    // ________________________________________________________________________

    namespace TypeHelpers {
        interface One<T> {
            (value: T): BigNumber;
        }

        interface BigNumberBinaryOperator extends One<number>, One<string>, One<BigNumber> {
        }

        interface Two<T1, T2> {
            (x: T1, N: T2): BigNumber;
        }

        interface Bind1<T> extends Two<number, T>, Two<string, T>, Two<BigNumber, T> {
        }

        interface BigNumberTrinaryOperator extends Bind1<number>, Bind1<string>, Bind1<BigNumber> {
        }
    }
}
