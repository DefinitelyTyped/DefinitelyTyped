//// <reference types="leaflet" />

import * as L from "leaflet";

export interface WmsParamsOptions extends L.WMSParams {
    crs?: string;
    uppercase?: boolean;
    attribution?: string;
    opacity?: number;
    isBack?: boolean;
    minZoom?: number;
    maxZoom?: number;
}

export interface SourceOptions extends L.LayerOptions {
    untiled: boolean;
    indentify: boolean;
}

export class Source extends L.Layer {
    options: SourceOptions;
    subLayers: any;
    _url: string;
    _overlay: any;

    constructor(url: string, options: WmsParamsOptions);

    initialize(url: string, options: SourceOptions): void;
    createOverlay(untiled: boolean): any;
    onAdd(): any;
    getEvents(): any;
    setOpacity(opacity: boolean): void;
    bringToBack(): void;
    bringToFront(): void;
    getLayer(name: string): any;
    addSubLayer(name: string): void;
    removeSubLayer(name: string): void;
    refreshOverlay(): void;
    identify(evt: any): void;
    getFeatureInfo(point: any, latLng: L.LatLng, layers: any, callback: any): void;
    ajax(url: string, callback: any): void;
    getIdentifyLayers(): any;
    getFeatureInfoParams(point: any, layers: any): any;
    parseFeatureInfo(result: string, url: string): string;
    showFeatureInfo(latlng: L.LatLng, info: any): void;
    showWaiting(): void;
    hideWaiting(): void;
}

export function source(url: string, options: WmsParamsOptions): Source;
export function layer(source: string, options: WmsParamsOptions): any;
export function getSourceForUrl(url: string, options: WmsParamsOptions): any;
export function overlay(url: string, options: WmsParamsOptions): any;
