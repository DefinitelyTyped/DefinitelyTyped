// Type definitions for angular-bootstrap-lightbox
// Project: https://github.com/compact/angular-bootstrap-lightbox
// Definitions by: Roland Zwaga <https://github.com/rolandzwaga>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace angular.bootstrap.lightbox {

    export interface ILightboxImageInfo {
        url: string;
        width: number;
        height: number;
        thumbUrl?: string;
        caption?: string;
    }

    export interface IImageDimensionLimits  {
        minWidth?: number;
        minHeight?: number;
        maxWidth?: number;
        maxHeight?: number;
    }

    export interface IImageDimensionParameter {
        windowWidth:number;
        windowHeight:number;
        imageWidth:number;
        imageHeight:number;
    }

    export interface IModalDimensionsParameter {
        windowWidth:number;
        windowHeight:number;
        imageDisplayWidth:number;
        imageDisplayHeight:number;
    }

    export interface IModalDimensions {
        width:number;
        height:number;
    }

    export interface ILightbox {
        openModal(images:ILightboxImageInfo[], index:number):void;
    }

    export interface ILightBoxProvider {
        templateUrl:string;
        calculateImageDimensionLimits:(dimensions:IImageDimensionParameter)=>IImageDimensionLimits;
        calculateModalDimensions:(dimensions:IModalDimensionsParameter)=>IModalDimensions;
    }
}
