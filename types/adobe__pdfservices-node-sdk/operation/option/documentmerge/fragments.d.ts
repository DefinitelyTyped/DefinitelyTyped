/**
 * Class for providing support for Fragments. To know more about fragments use-case in document generation and document templates,
 * please see the <a href="http://www.adobe.com/go/dcdocgen_fragments_support">documentation</a>
 */
export class Fragments {
    fragmentsList: any[];
    /**
     * To add JsonObject into the fragmentsList.
     */
    addFragment(fragment: any): void;
    /**
     * To add List of JsonObject into the fragmentsList.
     */
    addFragments(fragments: any[]): void;
    /**
     * Gets the fragmentsList.
     */
    getFragmentsList(): any[];
}
