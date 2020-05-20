/**
 * Provides the functionality to handle the `RenderTemplate`-event.
 */
export interface RenderTemplateEventHandler {
    /**
     * Handles the `RenderTemplate`-event.
     *
     * @param index
     * The index of the header.
     *
     * @param template
     * The rendered content of the header.
     *
     * @return
     * A manipulated version of the content of the header.
     */
    (index: number, template: string): string;
}
