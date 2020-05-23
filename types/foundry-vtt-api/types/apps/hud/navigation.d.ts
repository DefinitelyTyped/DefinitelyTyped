// @TODO:

/**
 * Top menu scene navigation
 */
declare class SceneNavigation extends Application {
    /**
     * Assign the default options which are supported by the SceneNavigation UI
     */
    static get defaultOptions(): ApplicationOptions;

    /**
     * Return an Array of Scenes which are displayed in the Navigation bar
     */
    get scenes(): Scene[];

    /**
     * Extend the Application.render logic to first check the rendering context to see what was changed
     * If a specific context was provided, make sure an update to the navigation is necessary before rendering
     */
    render(force?: boolean, options?: RenderOptions): Application;

    /**
     * Prepare the default data which is required to render the SceneNavigation menu
     */
    getData(): object;

    /**
     * Expand the SceneNavigation menu, sliding it down if it is currently collapsed
     */
    expand(): Promise<boolean>;

    /**
     * Collapse the SceneNavigation menu, sliding it up if it is currently expanded
     */
    collapse(): Promise<boolean>;
}
