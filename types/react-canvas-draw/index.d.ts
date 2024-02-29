import * as React from "react";

export interface CanvasDrawProps {
    onChange?: ((canvas: CanvasDraw) => void) | null | undefined;
    loadTimeOffset?: number | undefined;
    lazyRadius?: number | undefined;
    brushRadius?: number | undefined;
    brushColor?: string | undefined;
    catenaryColor?: string | undefined;
    gridColor?: string | undefined;
    backgroundColor?: string | undefined;
    hideGrid?: boolean | undefined;
    canvasWidth?: number | string | undefined;
    canvasHeight?: number | string | undefined;
    disabled?: boolean | undefined;
    imgSrc?: string | undefined;
    saveData?: string | undefined;
    immediateLoading?: boolean | undefined;
    hideInterface?: boolean | undefined;
    gridSizeX?: number | undefined;
    gridSizeY?: number | undefined;
    gridLineWidth?: number | undefined;
    hideGridX?: boolean | undefined;
    hideGridY?: boolean | undefined;
    enablePanAndZoom?: boolean | undefined;
    mouseZoomFactor?: number | undefined;
    zoomExtents?: { min: number; max: number } | undefined;
    clampLinesToDocument?: boolean | undefined;
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
}

export default class CanvasDraw extends React.Component<CanvasDrawProps> {
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
