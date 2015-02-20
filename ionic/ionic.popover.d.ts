declare module Ionic {
    interface IPopoverOptions {
        /**
         * The scope to be a child of. Default: creates a child of $rootScope
         */
        scope?: ng.IScope;

        /**
         * Whether to autofocus the first input of the popover when shown. Default: false
         */
        focusFirstInput?: boolean;

        /**
         * Whether to close the popover on clicking the backdrop. Default: true
         */
        backdropClickToClose?: boolean;

        /**
         * Whether the popover can be closed using the hardware back button on Android and similar devices. Default: true
         */
        hardwareBackButtonClose?: boolean;
    }

    /**
     * Angular service: $ionicPopover
     * 
     * The Popover is a view that floats above an app’s content.
     * Popovers provide an easy way to present or gather information from the user and are commonly used in the following situations:
     * show more info about the current view, select a commonly used tool or configuration, present a list of actions to perform inside one of your views.
     * Put the content of the popover inside of an <ion-popover-view> element
     */
    interface IPopover {
        /**
         * @param templateString The template string to use as the popovers's content
         * @param Options to be passed to the initialize method
         */
        fromTemplate(templateString: string, options: IPopoverOptions): IPopover;

        // TODO: promise
        /**
         * Returns a promise that will be resolved with an instance of an ionicPopover controller ($ionicPopover is built on top of $ionicPopover).
         * 
         * @param templateUrl The url to load the template from
         * @param Options to be passed to the initialize method
         */
        fromTemplateUrl(templateUrl: string, options: IPopoverOptions): any;

        /**
         * Creates a new popover controller instance
         * 
         */
        initialize(options: IPopoverOptions): void;

        // TODO: promise
        /**
         * Show this popover instance.
         * Returns a promise which is resolved when the popover is finished animating in.
         * 
         * @param $event The $event or target element which the popover should align itself next to.
         */
        show($event: any): any;

        // TODO: promise
        /**
         * Hide this popover instance.
         * Returns a promise which is resolved when the popover is finished animating out.
         */
        hide(): any;

        // TODO: promise
        /**
         * Remove this popover instance from the DOM and clean up.
         * Returns a promise which is resolved when the popover is finished animating out.
         */
        remove(): any;

        /**
         * Returns whether this popover is currently shown.
         */
        isShown(): boolean;
    }
}