/// <reference types="jquery" />

declare namespace JQuery.Jcrop {
    interface Options {
        /** Aspect ratio of w/h (e.g. 1 for square)  */
        aspectRatio?: number | undefined;
        /** Minimum width/height, use 0 for unbounded dimension; [width, height] */
        minSize?: [number, number] | undefined;
        /** Maximum width/height, use 0 for unbounded dimension; [width, height] */
        maxSize?: [number, number] | undefined;
        minSelect?: [number, number] | undefined;
        /** Set an initial selection area; [x, y, x2, y2] */
        setSelect?: [number, number, number, number] | undefined;

        /** Set color of background container @default 'black' */
        bgColor?: string | undefined;
        /** Opacity of outer image when cropping; between 0 and 1 @default .6 */
        bgOpacity?: number | undefined;
        baseClass?: string | undefined;
        addClass?: string | undefined;
        bgFade?: boolean | undefined;
        borderOpacity?: number | undefined;
        handleOpacity?: number | undefined;
        handleSize?: number | null | undefined;

        /** Called when selection is completed */
        onSelect?: JCropEventHandler | undefined;
        /** Called when the selection is moving */
        onChange?: JCropEventHandler | undefined;
        /** Called when double-clicked */
        onDblClick?: JCropEventHandler | undefined;
        /** Called when the selection is released */
        onRelease?: JCropEventHandler | undefined;

        /** Maximum width of cropping area @default 0 (no limit) */
        boxWidth?: number | undefined;
        /** Maximum height of cropping area @default 0 (no limit) */
        boxHeight?: number | undefined;
        boundary?: number | undefined;
        fadeTime?: number | undefined;
        animationDelay?: number | undefined;
        swingSpeed?: number | undefined;

        /** Specify the true size of the image */
        trueSize?: [number, number] | undefined;

        // Basic Settings
        allowSelect?: boolean | undefined;
        allowMove?: boolean | undefined;
        allowResize?: boolean | undefined;

        trackDocument?: boolean | undefined;

        keySupport?: boolean | undefined;
        createHandles?: Array<CardinalDirection | IntermediateDirection> | undefined;
        createDragbars?: CardinalDirection[] | undefined;
        createBorders?: CardinalDirection[] | undefined;
        drawBorders?: boolean | undefined;
        dragEdges?: boolean | undefined;
        fixedSupport?: boolean | undefined;
        touchSupport?: boolean | null | undefined;
        shade?: boolean | null | undefined;
    }

    type CardinalDirection = "n" | "s" | "e" | "w";
    type IntermediateDirection = "nw" | "ne" | "se" | "sw";
    type JCropEventHandler = (c: SelectionInfo) => void;
    interface SelectionInfo {
        x: number;
        y: number;
        x2: number;
        y2: number;
        w: number;
        h: number;
    }

    interface Api {
        /** Set selection, format: [ x,y,x2,y2 ] */
        setSelect: (selection: [number, number, number, number]) => void;
        /** Animate selection to new selection, format: [ x,y,x2,y2 ] */
        animateTo: (selection: [number, number, number, number]) => void;
        /** Release current selection */
        release: () => void;

        /** Query current selection values (true size) */
        tellSelect: () => SelectionInfo;
        /** Query current selection values (interface)  */
        tellScaled: () => SelectionInfo;

        /** Disables Jcrop interactivity */
        disable: () => void;
        /** Enables Jcrop interactivity */
        enable: () => void;
        /** Remove Jcrop entirely */
        remove: () => void;
    }
}

interface JQuery {
    Jcrop(options?: JQuery.Jcrop.Options, callback?: (this: JQuery.Jcrop.Api) => void): JQuery;
}
