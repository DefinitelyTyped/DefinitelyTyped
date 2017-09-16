export class DiffLine {
    /**
     * The relevant line
     *
     * @returns {string}
     *
     * @memberof DiffLine
     */
    content(): string;
    /**
     * The non utf8 translated text
     *
     * @returns {string}
     *
     * @memberof DiffLine
     */
    rawContent(): string;
    /**
     *
     *
     * @type {number}
     * @memberof DiffLine
     */
    origin: number;
    /**
     *
     *
     * @type {number}
     * @memberof DiffLine
     */
    oldLineno: number;
    /**
     *
     *
     * @type {number}
     * @memberof DiffLine
     */
    newLineno: number;
    /**
     *
     *
     * @type {number}
     * @memberof DiffLine
     */
    numLines: number;
    /**
     *
     *
     * @type {number}
     * @memberof DiffLine
     */
    contentLen: number;
    /**
     *
     *
     * @type {number}
     * @memberof DiffLine
     */
    contentOffset: number;
}
