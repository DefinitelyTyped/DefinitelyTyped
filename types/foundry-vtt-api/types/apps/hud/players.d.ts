// @TODO:

/**
 * The active Player List application
 */
declare class PlayerList extends Application {
    /**
     * Assign the default options which are supported by the PlayerList UI
     */
    static get defaultOptions(): ApplicationOptions;

    /**
     * Extend the render logic to first check whether a render is necessary based on the context
     * If a specific context was provided, make sure an update to the navigation is necessary before rendering
     */
    render(force?: boolean, context?: RenderOptions);

    /**
     * Prepare the default data which is required to render the PlayerList ui
     */
    getData(): object;

    /**
     * Add a context menu to the players UI which allows players to control or release Actors that they own
     */
    activateListeners(html: JQuery);
}
