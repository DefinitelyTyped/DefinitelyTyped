import "../../";

declare module "../../" {
    interface EditorConfiguration {
        /** when enabled, adds the CSS class cm-trailingspace to stretches of whitespace at the end of lines. */
        showTrailingSpace?: boolean | undefined;
    }
}
