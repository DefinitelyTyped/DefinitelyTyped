import * as React from "react";

export interface MapData {
    locationLink: any;
    locationText: string;
}

export interface MapObject {
    mapId: string;
    data: MapData;
}

export class BingMapService {
    name(): string;

    getMap(params: MapProps): MapObject;
}

export class GoogleMapService {
    name(): string;

    getMap(params: MapProps): MapObject;
}

export class YahooMapService {
    name(): string;

    getMap(params: MapProps): MapObject;
}

export class MapLocationFactory {
    getMap(params: MapProps): MapObject;
}

export interface MapProps {
    providerKey: string;

    /** Default: yahoo */
    provider: 'yahoo' | 'google' | 'bing';

    /** Default: map */
    mapId: string;

    addressLine1?: string;

    city?: string;

    state?: string;

    country?: string;

    longitude?: number;

    latitude?: number;

    /** Default: 270 */
    height: number;

    /** Default: 580 */
    width: number;

    /** Default: 10 */
    zoom: number;

    /** Default: false */
    useBackgroundImageStyle: boolean;
}

export default class Map extends React.Component<MapProps> {}
