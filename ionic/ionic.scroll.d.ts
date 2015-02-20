declare module Ionic {
    interface IScrollPosition {
        /**
         * The distance the user has scrolled from the left (starts at 0)
         */
        left: number;

        /**
         * The distance the user has scrolled from the top (starts at 0)
         */
        top: number;
    }

    /**
     * Angular service: $ionicScrollDelegate
     * 
     * Delegate for controlling scrollViews (created by ionContent and ionScroll directives).
     * Methods called directly on the $ionicScrollDelegate service will control all scroll views. Use the $getByHandle method to control specific scrollViews.
     */
    interface IScrollDelegate {
        /**
         * Tell the scrollView to recalculate the size of its container
         */
        resize(): void;


        /**
         * @param shouldAnimate Whether the scroll should animate
         */
        scrollTop(shouldAnimate?: boolean): void;


        /**
         * @param shouldAnimate Whether the scroll should animate
         */
        scrollBottom(shouldAnimate?: boolean): void;



        /**
         * @param left The x-value to scroll to
         * @param top The y-value to scroll to
         * @param shouldAnimate Whether the scroll should animate
         */
        scrollTo(left: number, top: number, shouldAnimate?: boolean): void;

        /**
         * @param left The x-offset to scroll by
         * @param top The y-offset to scroll by
         * @param shouldAnimate Whether the scroll should animate
         */
        scrollBy(left: number, top: number, shouldAnimate?: boolean): void;

        /**
         * @param level Level to zoom to
         * @param animate Whether to animate the zoom
         * @param originLeft Zoom in at given left coordinate
         * @param originTop Zoom in at given top coordinate
         */
        zoomTo(level: number, animate?: boolean, originLeft?: number, originTop?: number): void;

        /**
         * @param factor The factor to zoom by
         * @param animate Whether to animate the zoom
         * @param originLeft Zoom in at given left coordinate
         * @param originTop Zoom in at given top coordinate
         */
        zoomBy(factor: number, animate?: boolean, originLeft?: number, originTop?: number): void;

        /**
         * Returns the scroll position of this view
         */
        getScrollPosition(): IScrollPosition;

        /**
         * Tell the scrollView to scroll to the element with an id matching window.location.hash
         * If no matching element is found, it will scroll to top
         * 
         * @param shouldAnimate Whether the scroll should animate
         */
        anchorScroll(shouldAnimate?: boolean): void;

        /**
         * Returns the scrollView associated with this delegate.
         */
        // TODO: define ScrollView object
        getScrollView(): any;

        /**
         * Stop remembering the scroll position for this scrollView
         */
        forgetScrollPosition(): void;

        /**
         * If this scrollView has an id associated with its scroll position, (through calling rememberScrollPosition), and that position is remembered, load the position and scroll to it.
         * 
         * @param shouldAnimate Whether the scroll should animate
         */
        scrollToRememberedPosition(shouldAnimate?: boolean): void;

        /**
         * Return a delegate instance that controls only the scrollViews with delegate-handle matching the given handle.
         */
        $getByHandle(handle: string): IScrollDelegate;
    }
}