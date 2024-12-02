import * as React from "react";

declare namespace CanvasDraw {
    interface CanvasDrawProps {
        onChange?: ((canvas: CanvasDraw) => void) | null | undefined;

        /** @default 5 */
        loadTimeOffset?: number | undefined;

        /** @default 12 */
        lazyRadius?: number | undefined;

        /** @default 10 */
        brushRadius?: number | undefined;

        /** @default "#444" */
        brushColor?: string | undefined;

        /** @default "#0a0302" */
        catenaryColor?: string | undefined;

        /** @default "rgba(150,150,150,0.17)" */
        gridColor?: string | undefined;

        /** @default "#FFF" */
        backgroundColor?: string | undefined;

        /** @default false */
        hideGrid?: boolean | undefined;

        /** @default 400 */
        canvasWidth?: number | string | undefined;

        /** @default 400 */
        canvasHeight?: number | string | undefined;

        /** @default false */
        disabled?: boolean | undefined;

        /** @default "" */
        imgSrc?: string | undefined;

        /** @default "" */
        saveData?: string | undefined;

        /** @default false */
        immediateLoading?: boolean | undefined;

        /** @default false */
        hideInterface?: boolean | undefined;

        /** @default 25 */
        gridSizeX?: number | undefined;

        /** @default 25 */
        gridSizeY?: number | undefined;

        /** @default 0.5 */
        gridLineWidth?: number | undefined;

        /** @default false */
        hideGridX?: boolean | undefined;

        /** @default false */
        hideGridY?: boolean | undefined;

        /** @default false */
        enablePanAndZoom?: boolean | undefined;

        /** @default 0.01 */
        mouseZoomFactor?: number | undefined;

        /** @default { min: 0.33, max: 3 } */
        zoomExtents?: { min: number; max: number } | undefined;

        /** @default false */
        clampLinesToDocument?: boolean | undefined;

        className?: string | undefined;

        style?: React.CSSProperties | undefined;
    }
}

declare class CanvasDraw extends React.Component<CanvasDraw.CanvasDrawProps> {
    /**
     * Returns the drawing's save-data as a stringified object.
     */
    getSaveData(): string;

    /**
     * Loads a previously saved drawing using the saveData string, as well as an optional boolean
     * flag to load it immediately, instead of live-drawing it.
     */
    loadSaveData(saveData: string, immediate?: boolean): void;

    /**
     * Clears the canvas completely.
     */
    clear(): void;

    /**
     * Removes the latest change to the drawing. This includes everything drawn since the last MouseDown event.
     */
    undo(): void;
}

export = CanvasDraw;
