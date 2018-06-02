// Type definitions for react-rnd 7.4
// Project: https://github.com/bokuweb/react-rnd
// Definitions by: Ragg <https://github.com/Ragg->
//                 fsubal <https://github.com/fsubal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import React = require("react");

type Style = { [key: string]: string | number };

declare namespace Rnd {
    type Direction =
        | "bottom"
        | "bottomLeft"
        | "bottomRight"
        | "left"
        | "right"
        | "top"
        | "topLeft"
        | "topRight";

    interface Enable {
        bottom?: boolean;
        bottomLeft?: boolean;
        bottomRight?: boolean;
        left?: boolean;
        right?: boolean;
        top?: boolean;
        topLeft?: boolean;
        topRight?: boolean;
    }

    interface HandleClasses {
        bottom?: string;
        bottomLeft?: string;
        bottomRight?: string;
        left?: string;
        right?: string;
        top?: string;
        topLeft?: string;
        topRight?: string;
    }

    interface HandleStyles {
        bottom?: Style;
        bottomLeft?: Style;
        bottomRight?: Style;
        left?: Style;
        right?: Style;
        top?: Style;
        topLeft?: Style;
        topRight?: Style;
    }

    interface Position {
        x: number;
        y: number;
    }

    interface Size {
        width: number;
        height: number;
    }

    type defaultProps = {
        x: number;
        y: number;
        width?: number | string;
        height?: number | string;
    };

    type Enable = {
        bottom?: boolean;
        bottomLeft?: boolean;
        bottomRight?: boolean;
        left?: boolean;
        right?: boolean;
        top?: boolean;
        topLeft?: boolean;
        topRight?: boolean;
    };

    type ResizeStartCallback = (
        e: MouseEvent | TouchEvent,
        dir: Direction,
        refToElement: HTMLDivElement
    ) => void;

    type ResizeCallback = (
        e: MouseEvent | TouchEvent,
        dir: Direction,
        refToElement: HTMLDivElement,
        delta: Size,
        position: Position
    ) => void;

    type DraggableEventHandler = (
        e: MouseEvent | TouchEvent,
        data: DraggableData
    ) => void | false;

    interface DraggableData {
        node: HTMLElement;
        x: number;
        y: number;
        deltaX: number;
        deltaY: number;
        lastX: number;
        lastY: number;
    }

    interface Options {
        default: defaultProps;
        size?: {
            width: number | string;
            height: number | string;
        };
        position?: Position;
        className?: string;
        style?: { [key: string]: string };
        minWidth?: number | string;
        minHeight?: number | string;
        maxWidth?: number | string;
        maxHeight?: number | string;
        z?: number;
        resizeGrid?: [number, number];
        dragGrid?: [number, number];
        lockAspectRatio?: boolean | number;
        lockAspectRatioExtraWidth?: number;
        lockAspectRatioExtraHeight?: number;
        dragHandleClassName?: string;
        resizeHandleStyles?: HandleStyles;
        resizeHandleClasses: HandleClasses;
        resizeHandleWrapperClass?: string;
        resizeHandleWrapperStyle?: Style;
        enableResizing: Enable;
        disableDragging?: boolean;
        cancel?: string;
        extendsProps?: { [key: string]: any };
        dragAxis?: "x" | "y" | "both" | "none";
        bounds?: string;
        enableUserSelectHack?: boolean;

        onResizeStart?: ResizeStartCallback;
        onResize?: ResizeCallback;
        onResizeStop?: ResizeCallback;

        onDragStart?: DraggableEventHandler;
        onDrag?: DraggableEventHandler;
        onDragStop?: DraggableEventHandler;
    }
}

declare class Rnd extends React.Component<Partial<Rnd.Options>> {}

export = Rnd;
