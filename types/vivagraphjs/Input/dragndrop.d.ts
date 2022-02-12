export = dragndrop;
declare function dragndrop(element: any): {
    onStart: (callback: any) => any;
    onDrag: (callback: any) => any;
    onStop: (callback: any) => any;
    /**
     * Occurs when mouse wheel event happens. callback = function(e, scrollDelta, scrollPoint);
     */
    onScroll: (callback: any) => any;
    release: () => void;
};
