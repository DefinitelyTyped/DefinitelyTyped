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
     * @returns the drawing's save-data as a stringified object
     */
    getSaveData(): string;
    /**
     * loads a previously saved drawing using the saveData string, as well as an optional boolean flag to load it immediately, instead of live-drawing it.
     */
    loadSaveData(saveData: string, immediate?: boolean): void;
    /**
     * clears the canvas completely, including previously erased lines, and resets the view. After a clear, undo() will have no effect.
     */
    clear(): void;
    /**
     * clears the drawn lines but retains their data; calling undo() can restore the erased lines. Note: erased lines are not included in the save data.
     */
    eraseAll(): void;
    /**
     *  resets the canvas' view to defaults. Has no effect if the enablePanAndZoom property is false.
     */
    resetView(): void;

    /**
     * removes the latest change to the drawing. This includes everything drawn since the last MouseDown event.
     */
    undo(): void;
    /**
     * This function will export the canvas to a data URL, which can subsequently be used to share or manipulate the image file.
     * @param {string} fileType Specifies the file format to export to. Note: should only be the file type, not the "image/" prefix.
     *  For supported types see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
     * @param {bool} useBgImage Specifies whether the canvas' current background image should also be exported. Default is false.
     * @param {string} backgroundColour The desired background colour hex code, e.g. "#ffffff" for white.
     */
    getDataURL(fileType?: string, backgroundColor?: string): string;
}

export = CanvasDraw;
