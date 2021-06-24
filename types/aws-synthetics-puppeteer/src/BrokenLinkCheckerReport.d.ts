declare module 'BrokenLinkCheckerReport' {
    export = BrokenLinkCheckerReport;
    /**
     * This class handles the creation of broken link checker report.
     * This report can be published and added to Synthetics report.
     */
    class BrokenLinkCheckerReport {
        links: {};
        brokenLinks: any[];
        totalLinksChecked: number;
        totalBrokenLinks: number;
        /**
         * Adds a link to BrokenLinkCheckerResult.
         * @param {Object.<SyntheticsResult>} syntheticsLink
         * @param {boolean} isBrokenLink (optional)- If not passed, defaults to consider link as broken if status code is not available or status code >= 400
         * @returns {void}
         */
        addLink(syntheticsLink: any, isBrokenLink: boolean): void;
        getLinks(): {};
        getTotalBrokenLinks(): number;
        getTotalLinksChecked(): number;
        reset(): void;
    }
}
