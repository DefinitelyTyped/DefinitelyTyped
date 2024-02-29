import { Component, CSSProperties, ReactNode } from "react";

export as namespace ReactCrop;

declare namespace ReactCrop {
    interface Crop {
        aspect?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        unit?: "px" | "%" | undefined;
    }

    interface PercentCrop extends Crop {
        unit?: "%" | undefined;
    }

    interface ReactCropProps {
        src: string;
        crop?: Crop | undefined;
        imageAlt?: string | undefined;
        minWidth?: number | undefined;
        minHeight?: number | undefined;
        maxWidth?: number | undefined;
        maxHeight?: number | undefined;
        keepSelection?: boolean | undefined;
        onChange: (crop: Crop, percentCrop: PercentCrop) => void;
        onComplete?: ((crop: Crop, percentCrop: PercentCrop) => void) | undefined;
        onImageLoaded?: ((target: HTMLImageElement) => void) | undefined;
        onDragStart?: (() => void) | undefined;
        onDragEnd?: (() => void) | undefined;
        disabled?: boolean | undefined;
        crossorigin?: "anonymous" | "use-credentials" | undefined;
        children?: ReactNode | undefined;
        style?: CSSProperties | undefined;
        imageStyle?: CSSProperties | undefined;
        onImageError?: ((event: React.SyntheticEvent<HTMLImageElement>) => void) | undefined;
        className?: string | undefined;
        locked?: boolean | undefined;
        renderComponent?: ReactNode | undefined;
        renderSelectionAddon?: ((state: any) => ReactNode) | undefined;
        ruleOfThirds?: boolean | undefined;
        circularCrop?: boolean | undefined;
    }

    function makeAspectCrop(crop: Crop, imageWidth: number, imageHeight: number): Crop;
    function containCrop(prevCrop: Crop, crop: Crop, imageWidth: number, imageHeight: number): Crop;
}

declare class ReactCrop extends Component<ReactCrop.ReactCropProps> {
    onCropMouseTouchDown: (e: MouseEvent) => void;
    onComponentMouseTouchDown: (e: MouseEvent) => void;
    onDocMouseTouchMove: (e: MouseEvent) => void;
    onComponentKeyDown: (e: MouseEvent) => void;
    onDocMouseTouchEnd: (e: MouseEvent) => void;
    onImageLoad: (image: HTMLImageElement) => void;
    getCropStyle: () => CSSProperties;
    getNewSize: () => {
        width: number;
        height: number;
    };
    resolveCrop: (crop: ReactCrop.Crop, imageWidth: number, imageHeight: number) => ReactCrop.Crop;
    dragCrop: () => ReactCrop.Crop;
    resizeCrop: () => ReactCrop.Crop;
    straightenYPath: (clientX: number) => number;
    createCropSelection: () => ReactNode;
    makeNewCrop: () => ReactCrop.Crop;
    crossOverCheck: () => void;
}

export = ReactCrop;
