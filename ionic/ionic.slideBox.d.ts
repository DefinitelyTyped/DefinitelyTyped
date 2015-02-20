declare module Ionic {
    /**
     * Angular service: $ionicSlideBoxDelegate
     * 
     * Delegate that controls the ionSlideBox directive.
     * Methods called directly on the $ionicSlideBoxDelegate service will control all slide boxes. Use the $getByHandle method to control specific slide box instances.
     */
    interface ISlideBoxDelegate {
        /**
         * Update the slidebox (for example if using Angular with ng-repeat, resize it for the elements inside).
         */
        update(): void;

        /**
         * @param to The index to slide to
         * @param speed The number of milliseconds for the change to take
         */
        slide(to: number, speed?: number): void;

        /**
         * Returns whether sliding is enabled.
         * 
         * @param shouldEnable Whether to enable sliding the slidebox.
         */
        enableSlide(shouldEnable?: boolean): boolean;

        /**
         * Go to the previous slide. Wraps around if at the beginning.
         */
        previous(): void;

        /**
         * Go to the next slide. Wraps around if at the end.
         */
        next(): void;

        /**
         * Stop sliding. The slideBox will not move again until explicitly told to do so.
         */
        stop(): void;

        /**
         * Start sliding again if the slideBox was stopped.
         */
        start(): void;

        /**
         * Returns the index of the current slide.
         */
        currentIndex(): number;

        /**
         * Returns the number of slides there are currently.
         */
        slidesCount(): number;

        /**
         * Returns a delegate instance that controls only the ionSlideBox directives with delegate-handle matching the given handle.
         */
        $getByHandle(handle: string): ISlideBoxDelegate;
    }
}