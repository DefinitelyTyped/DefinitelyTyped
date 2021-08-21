import { Plugin } from "@ckeditor/ckeditor5-core";
/**
 * The default alignment UI plugin.
 *
 * It introduces the `'alignment:left'`, `'alignment:right'`, `'alignment:center'` and `'alignment:justify'` buttons
 * and the `'alignment'` dropdown.
 */
export default class AlignmentUI extends Plugin {
    /**
     * Returns the localized option titles provided by the plugin.
     *
     * The following localized titles corresponding with
     * {@link module:alignment/alignment~AlignmentConfig#options} are available:
     *
     * * `'left'`,
     * * `'right'`,
     * * `'center'`,
     * * `'justify'`.
     */
    readonly localizedOptionTitles: {
        left: string;
        right: string;
        center: string;
        justify: string;
    };
    static readonly pluginName: "AlignmentUI";
    init(): void;
    /**
     * Helper method for initializing the button and linking it with an appropriate command.
     */
    private _addButton;
}
