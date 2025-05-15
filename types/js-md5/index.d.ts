declare namespace md5 {
  type Message = string | number[] | ArrayBuffer | Uint8Array;

  interface Hasher {
    /**
     * Update hash
     *
     * @param message The message you want to hash.
     */
    update(message: Message): Hasher;

    /**
     * Return hash in hex string.
     */
    hex(): string;

    /**
     * Return hash in hex string.
     */
    toString(): string;

    /**
     * Return hash in ArrayBuffer.
     */
    arrayBuffer(): ArrayBuffer;

    /**
     * Return hash in integer array.
     */
    digest(): number[];

    /**
     * Return hash in integer array.
     */
    array(): number[];

    /**
     * Return hash in base64 string.
     */
    base64(): string;
  }

  interface Hmac {
    /**
     * Computes a Hash-based message authentication code (HMAC) using a secret key
     *
     * @param secretKey The Secret Key
     * @param message The message you want to hash.
     */
    (secretKey: Message, message: Message): string;

    /**
     * Create a hash object using a secret key.
     *
     * @param secretKey The Secret Key
     */
    create(secretKey: Message): Hasher;

    /**
     * Create a hash object and hash message using a secret key
     *
     * @param secretKey The Secret Key
     * @param message The message you want to hash.
     */
    update(secretKey: Message, message: Message): Hasher;

    /**
     * Return hash in hex string.
     *
     * @param secretKey The Secret Key
     * @param message The message you want to hash.
     */
    hex(secretKey: Message, message: Message): string;

    /**
     * Return hash in ArrayBuffer.
     *
     * @param secretKey The Secret Key
     * @param message The message you want to hash.
     */
    arrayBuffer(secretKey: Message, message: Message): ArrayBuffer;

    /**
     * Return hash in integer array.
     *
     * @param secretKey The Secret Key
     * @param message The message you want to hash.
     */
    digest(secretKey: Message, message: Message): number[];

    /**
     * Return hash in integer array.
     *
     * @param secretKey The Secret Key
     * @param message The message you want to hash.
     */
    array(secretKey: Message, message: Message): number[];

    /**
     * Return hash in base64 string.
     *
     * @param secretKey The Secret Key
     * @param message The message you want to hash.
     */
    base64(secretKey: Message, message: Message): string;
  }

  interface Hash {
    /**
     * Hash and return hex string.
     *
     * @param message The message you want to hash.
     */
    (message: Message): string;

    /**
     * Create a hash object.
     */
    create(): Hasher;

    /**
     * Create a hash object and hash message.
     *
     * @param message The message you want to hash.
     */
    update(message: Message): Hasher;

    /**
     * Return hash in hex string.
     *
     * @param message The message you want to hash.
     */
    hex(message: Message): string;

    /**
     * Return hash in ArrayBuffer.
     *
     * @param message The message you want to hash.
     */
    arrayBuffer(message: Message): ArrayBuffer;

    /**
     * Return hash in integer array.
     *
     * @param message The message you want to hash.
     */
    digest(message: Message): number[];

    /**
     * Return hash in integer array.
     *
     * @param message The message you want to hash.
     */
    array(message: Message): number[];

    /**
     * Return hash in base64 string.
     *
     * @param message The message you want to hash.
     */
    base64(message: Message): string;

    /**
     * HMAC interface
     */
    hmac: Hmac;
  }
}

declare const md5: md5.Hash;
export = md5;
