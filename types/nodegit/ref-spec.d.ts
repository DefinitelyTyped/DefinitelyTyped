export class Refspec {
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Refspec
     */
    direction(): number;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Refspec
     */
    dst(): string;
    /**
     *
     *
     * @param {string} refname
     * @returns {number}
     *
     * @memberof Refspec
     */
    dstMatches(refname: string): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Refspec
     */
    force(): number;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Refspec
     */
    src(): string;
    /**
     *
     *
     * @param {string} refname
     * @returns {number}
     *
     * @memberof Refspec
     */
    srcMatches(refname: string): number;
}
