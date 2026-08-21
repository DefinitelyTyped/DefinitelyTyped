// js installs to root of node_modules
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "BrokenLinkCheckerReport" {
    export = BrokenLinkCheckerReport;
    /**
     * This class handles the creation of broken link checker report.
     * This report can be published and added to Synthetics report.
     */
    class BrokenLinkCheckerReport {
        links: Record<string, SyntheticsLink>;
        brokenLinks: string[];
        totalLinksChecked: number;
        totalBrokenLinks: number;
        /**
         * Adds a link to BrokenLinkCheckerResult.
         * @param syntheticsLink
         * @param isBrokenLink (optional)- If not passed, defaults to consider link as broken if status code is not available or status code >= 400
         */
        addLink(syntheticsLink: SyntheticsLink, isBrokenLink?: boolean): void;
        getLinks(): Record<string, SyntheticsLink>;
        getTotalBrokenLinks(): number;
        getTotalLinksChecked(): number;
        reset(): void;
    }
    import SyntheticsLink = require("SyntheticsLink");
}
