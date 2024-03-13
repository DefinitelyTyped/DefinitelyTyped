declare namespace angular.bootstrap.lightbox {
    export interface ILightboxImageInfo {
        url: string;
        width: number;
        height: number;
        thumbUrl?: string | undefined;
        caption?: string | undefined;
    }

    export interface IImageDimensionLimits {
        minWidth?: number | undefined;
        minHeight?: number | undefined;
        maxWidth?: number | undefined;
        maxHeight?: number | undefined;
    }

    export interface IImageDimensionParameter {
        windowWidth: number;
        windowHeight: number;
        imageWidth: number;
        imageHeight: number;
    }

    export interface IModalDimensionsParameter {
        windowWidth: number;
        windowHeight: number;
        imageDisplayWidth: number;
        imageDisplayHeight: number;
    }

    export interface IModalDimensions {
        width: number;
        height: number;
    }

    export interface ILightbox {
        openModal(
            images: ILightboxImageInfo[],
            index: number,
            modalParams?: { [key: string]: any }, // angular.ui.bootstrap.IModalSettings
        ): void;
    }

    export interface ILightBoxProvider {
        templateUrl: string;
        calculateImageDimensionLimits: (dimensions: IImageDimensionParameter) => IImageDimensionLimits;
        calculateModalDimensions: (dimensions: IModalDimensionsParameter) => IModalDimensions;
    }
}
