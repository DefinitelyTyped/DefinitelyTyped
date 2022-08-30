import * as Backbone from 'backbone';
import { TemplateExecutor } from 'lodash';
import { WpBackboneSubviews, WpBackBoneView, WpBackboneViewList } from './wp-backbone';

export type FrameType = 'select' | 'post' | 'manage' | 'image' | 'audio' | 'video' | 'edit-attachments';

export interface FrameClasses {
    select: MediaFrameSelect;
}

export interface FrameOptions {
    title?: string;
    button?: {
        text?: string;
    };
    // frame?: FrameType;
    multiple?: boolean;
}

export type View = WpBackBoneView & {
    constructor: (options?: { [key: string]: any }) => void;
    dispose: () => View;
    remove: () => View;
};

/**
 * A region is a persistent application layout area.
 *
 * A region assumes one mode at any time, and can be switched to another.
 *
 * When mode changes, events are triggered on the region's parent view.
 * The parent view will listen to specific events and fill the region with an
 * appropriate view depending on mode. For example, a frame listens for the
 * 'browse' mode t be activated on the 'content' view and then fills the region
 * with an AttachmentsBrowser view.
 */
export type Region = Backbone.Model & {
    options?: {
        id?: string;
        view?: Backbone.View;
        selector?: string;
    };

    /**
     * Activate a mode.
     */
    mode: (mode: string) => Region;

    /**
     * Render a mode.
     */
    render: (mode: string) => Region;

    /**
     * Get the region's view.
     */
    get: () => View;

    /**
     * Set the region's view as a subview of the frame.
     */
    set: (views: WpBackboneViewList, options: any) => WpBackboneSubviews;

    /**
     * Trigger regional view events on the frame.
     */
    trigger: (event: any) => Region;
};

/**
 * wp.media.controller.State
 *
 * A state is a step in a workflow that when set will trigger the controllers
 * for the regions to be updated as specified in the frame.
 *
 * A state has an event-driven lifecycle:
 *
 *     'ready'      triggers when a state is added to a state machine's collection.
 *     'activate'   triggers when a state is activated by a state machine.
 *     'deactivate' triggers when a state is deactivated by a state machine.
 *     'reset'      is not triggered automatically. It should be invoked by the
 *                  proper controller to reset the state to its default.
 */
export type State = Backbone.Model & {
    constructor: () => void;
    ready: () => void;
    activate: () => void;
    deactivate: () => void;
    reset: () => void;
};

/**
 * wp.media.controller.StateMachine
 *
 * A state machine keeps track of state. It is in one state at a time,
 * and can change from one state to another.
 *
 * States are stored as models in a Backbone collection.
 */
export interface StateMachine {
    (): { extend: typeof Backbone.Model.extend };

    /**
     * Fetch a state.
     *
     * If no `id` is provided, returns the active state.
     *
     * Implicitly creates states.
     *
     * Ensure that the `states` collection exists so the `StateMachine`
     * can be used as a mixin.
     */
    state: (id?: string) => State;

    /**
     * Sets the active state.
     *
     * Bail if we're trying to select the current state, if we haven't
     * created the `states` collection, or are trying to select a state
     * that does not exist.
     */
    setState: (id: string) => StateMachine;

    /**
     * Returns the previous active state.
     *
     * Call the `state()` method with no parameters to retrieve the current
     * active state.
     */
    lastState: () => State;

    on: (event: string, callback: (...args: any[]) => void) => StateMachine;
    off: (event: string, callback: (...args: any[]) => void) => StateMachine;
    trigger: (event: string, ...args: any[]) => StateMachine;
}

export type Frame = StateMachine &
    View & {
        initialize: () => void;
        /**
         * Reset all states on the frame to their defaults.
         */
        reset: () => Frame;

        triggerModeEvents: (
            model: Backbone.Model,
            collection: Backbone.Collection,
            options: { [key: string]: string },
        ) => void;

        /**
         * Activate a mode on the frame.
         */
        activateMode: (mode: string) => Frame;

        /**
         * Deactivate a mode on the frame.
         */
        deactivateMode: (mode: string) => Frame;

        /**
         * Check if a mode is enabled on the frame.
         */
        isModeActive: (mode: string) => boolean;
    };

/**
 * The frame used to create the media modal.
 */
export type MediaFrame = Frame & {
    // Object properties
    className: string;
    template: TemplateExecutor;
    regions: string[];
    events: { [key: string]: string };
    modal: unknown;
    options: {
        [key: string]: unknown;
    };
    uploader: UploaderWindow;
    // Object methods

    /**
     * Sets the attributes to be used on the menu ARIA tab panel.
     */
    setMenuTabPanelAriaAttributes: () => void;

    /**
     * Sets the attributes to be used on the router ARIA tab panel.
     */
    setRouterTabPanelAriaAttributes: () => void;

    render: () => MediaFrame;

    createTitle: (title: any) => void;

    createMenu: (menu: any) => void;

    toggleMenu: (event: any) => void;

    createToolbar: (toolbar: any) => void;

    createRouter: (router: any) => void;

    createIframeStates: (options: any) => void;

    iframeContent: (content: any) => void;

    iframeContentCleanup: () => void;

    iframeMenu: (view: any) => void;

    hijackThickbox: () => void;

    restoreThickbox: () => void;

    open: () => MediaFrame;

    close: () => MediaFrame;

    attach: () => MediaFrame;

    detach: () => MediaFrame;

    escape: () => MediaFrame;
};

export type UploaderWindow = View & {
    tagName: string;
    className: string;
    template: TemplateExecutor;
    options: {
        uploader?: {
            params?: { [key: string]: any };
        };
    };

    initialize: () => void;
    refresh: () => void;
    ready: () => void;
    show: () => void;
    hide: () => void;
};

export type MediaFrameSelect = MediaFrame & {
    initialize: () => void;

    /**
     * Attach a selection collection to the frame.
     *
     * A selection is a collection of attachments used for a specific purpose
     * by a media frame. e.g. Selecting an attachment (or many) to insert into
     * post content.
     */
    createSelection: () => void;

    editImageContent: () => void;

    /**
     * Create the default states on the frame.
     */
    createStates: () => void;

    /**
     * Bind region mode event callbacks.
     */
    bindHandlers: () => void;

    /**
     * Render callback for the router region in the `browse` mode.
     */
    browseRouter: (routerView: any) => void; // RouterView => media.view.Router

    /**
     * Render callback for the content region in the `browse` mode.
     */
    browseContent: (contentRegion: Region) => void;

    /**
     * Render callback for the content region in the `upload` mode.
     */
    uploadContent: () => void;

    createSelectToolbar: (toolbar: any, option: any) => void;
};
