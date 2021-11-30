// Type definitions for bcore-2d-fast 1.0
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Richar-Dada <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as THREE from 'three';

export interface Position {
    x: number;
    y: number;
    z: number;
}

export interface BackgroundColor {
    color: string;
    alpha: boolean;
}

export interface AmbientLight {
    color: string;
    intensity: number;
    enable: boolean;
}

export interface DirectionalLight {
    color: number;
    position: Position;
    intensity: number;
    enable: boolean;
    castShadow: boolean;
}

export interface RendererOptions {
    antialias: boolean;
    gammaInput: boolean;
    gammaOutput: boolean;
    shadowMap: boolean;
    logarithmicDepthBuffer: boolean;
    alpha: boolean;
    exposure: number;
}

export interface CameraConfig {
    up: Position;
    fov: number;
    ner: number;
    far: number;
    defPosition: Position;
    frustumSize: number;
}

export interface CameraControl {
    enableDamping: boolean;
    dampingFactor: number;
    rotateSpeed: number;
    zoomSpeed: number;
    panSpeed: number;
}

export namespace Application {
    class Application2DConfig {
        mainUI: string[];

        tools: string[];

        enableMessage: boolean;

        enableProgressBar: boolean;

        language: string;
    }

    class Application2D {
        applicationConfig: Application2DConfig;
        viewer: Viewer.Viewer2D | undefined;

        constructor(application: Application2DConfig);

        addViewer2D(viewer: Viewer.Viewer2D): void;

        destoryViewer2D(): void;

        setLanguage(lang: string): void;

        setMainUIConfig(mainUI: string[]): void;

        setToolbarsConfig(tools: string[]): void;

        toggleToolbar(flag: boolean): void;

        setMessageConfig(flag: boolean): void;

        setLoadingProgressBar(flag: boolean): void;

        addEventListener(eventType: string, callback: () => void): void;

        removeEventListener(eventType: string, callBack: () => void): void;
    }
}

export namespace Viewer {
    class Viewer2DConfig {
        backgroundColor: BackgroundColor;

        ambientLight: AmbientLight;

        directionalLight: DirectionalLight;

        rendererOptions: RendererOptions;

        cameraConfig: CameraConfig;

        cameraControl: CameraControl;
    }

    class Viewer2D {
        constructor(viewerConfig: Viewer2DConfig);

        initConfig(): void;

        initViewer2D(accessToken: string, callback?: () => void): void;

        addDrawing(fileId: string, callback?: () => void): void;

        removeDrawing(callback?: () => void): void;

        setHomeView(): void;

        getViewportInfo(): void;

        getScreenShotImage(): void;

        showLayer(layerName: string): void;

        hideLayer(layerName: string): void;

        showAllLayer(): void;

        hideAllLayer(): void;

        getLayersInfo(): void;

        addEventListener(eventType: string, callback: () => void): void;

        removeEventListener(eventType: string, callBack: () => void): void;

        zoomToBoundingBox(boundingBox: THREE.Box3, isAnimation: boolean, delay: number, callback?: () => void): void;

        destroy(): void;
    }
}

export enum EventType {
    TokenInvalid = 'TokenInvalid',

    AddDrawingBegin = 'AddDrawingBegin',

    AddDrawingProgress = 'AddDrawingProgress',

    AddDrawingEnd = 'AddDrawingEnd',

    SavePostilScreenShot = 'SavePostilScreenShot',
}

export enum PostilType {
    Rect = 'rect',

    Ellipse = 'ellipse',

    Font = 'font',

    Line = 'line',

    ArrowHead = 'arrowHead',

    Select = 'select',

    Del = 'del',

    Redo = 'redo',

    Undo = 'undo',

    Save = 'save',
}

export interface Static {
    EventType: EventType;
    PostilType: PostilType;
}

export namespace Extension2D {
    class AnnotationConfig {
        isAutoSavePostilScreenShot: boolean;
        isShowMessage: boolean;

        constructor(viewer: Viewer.Viewer2D);
    }

    class Annotation {
        viewer: Viewer.Viewer2D;

        constructor(annotationConfig: AnnotationConfig);

        beginPostil(): void;

        endPostil(): void;

        setPostilType(type: PostilType): void;

        getPostilScreenShot(): void;

        getPostilConfig(): void;

        setPostilConfig(postilConfig: AnnotationConfig): void;

        getPostilRecord(): void;

        setPostilRecord(svgjson: string): void;

        clearPostilRecord(): void;

        wrapEventOn(event: string, fn: () => void, useCaptrue: boolean): void;

        wrapEventOff(event: string, fn: () => void): void;
    }
}

export as namespace BCore2dFast;
