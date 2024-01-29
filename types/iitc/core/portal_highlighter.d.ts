import { IITC } from "./iitctypes";

export {};

declare global {
    interface Hightligher {
        hightlight: (portal: IITC.Portal) => void;
    }

    /** an object mapping highlighter names to the object containing callback functions */
    var _highlighters: { [name: string]: Hightligher } | null;

    /** the name of the current highlighter */
    var _current_highlighter: string;

    /**
     * = "No Highlights"
     */
    var _no_highlighter: string;

    function addPortalHighlighter(name: string, data: Hightligher): void;

    // (re)creates the highlighter dropdown list
    function updatePortalHighlighterControl(): void;
    function changePortalHighlights(name: string): void;

    function highlightPortal(p: IITC.Portal): void;
    function resetHighlightedPortals(): void;
}
