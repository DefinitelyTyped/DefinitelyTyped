import { Repository } from './repository';
import { Time } from './time';

export class Signature {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @returns {Signature}
     *
     * @memberof Signature
     */
    static default(repo: Repository): Signature;
    /**
     *
     *
     * @static
     * @param {string} name
     * @param {string} email
     * @param {number} time
     * @param {number} offset
     * @returns {Signature}
     *
     * @memberof Signature
     */
    static create(name: string, email: string, time: number, offset: number): Signature;
    /**
     *
     *
     * @static
     * @param {string} name
     * @param {string} email
     * @returns {Signature}
     *
     * @memberof Signature
     */
    static now(name: string, email: string): Signature;
    /**
     *
     *
     * @static
     * @param {string} buf
     * @returns {Promise<Signature>}
     *
     * @memberof Signature
     */
    static fromBuffer(buf: string): Promise<Signature>;

    /**
     *
     *
     * @returns {Promise<Signature>}
     *
     * @memberof Signature
     */
    dup(): Promise<Signature>;
    /**
     *
     *
     *
     * @memberof Signature
     */
    free(): void;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Signature
     */
    toString(): string;
    /**
     *
     *
     * @type {string}
     * @memberof Signature
     */
    name: string;
    /**
     *
     *
     * @type {string}
     * @memberof Signature
     */
    email: string;
    /**
     *
     *
     * @type {Time}
     * @memberof Signature
     */
    when: Time;
}
