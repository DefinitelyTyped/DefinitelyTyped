export class Oid {
    static fromString(str: string): Oid;
    /**
     *
     *
     * @param {Oid} b
     * @returns {number}
     *
     * @memberof Oid
     */
    cmp(b: Oid): number;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Oid
     */
    cpy(): Oid;
    /**
     *
     *
     * @param {Oid} b
     * @returns {number}
     *
     * @memberof Oid
     */
    equal(b: Oid): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Oid
     */
    iszero(): number;
    /**
     *
     *
     * @param {Oid} b
     * @param {number} len
     * @returns {number}
     *
     * @memberof Oid
     */
    ncmp(b: Oid, len: number): number;
    /**
     *
     *
     * @param {string} str
     * @returns {number}
     *
     * @memberof Oid
     */
    strcmp(str: string): number;
    /**
     *
     *
     * @param {string} str
     * @returns {number}
     *
     * @memberof Oid
     */
    streq(str: string): number;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Oid
     */
    tostrS(): string;
}
