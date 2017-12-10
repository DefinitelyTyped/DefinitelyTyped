// Type definitions for react-cartographer 0.4.4
// Project: https://github.com/yahoo/react-cartographer
// Definitions by: Tre`Von McKay <https://github.com/trevonmckay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

declare module 'react-cartographer/lib/components/Map' {
    import * as React from "react";

    interface MapData {
        locationLink: any;
        locationText: string;
    }

    export interface MapObject {
        mapId: string;
        data: MapData;
    }

    export class BingMapService {
        name(): string;

        getMap(params: IMapProps): MapObject;
    }

    export class GoogleMapService {
        name(): string;

        getMap(params: IMapProps): MapObject;
    }

    export class YahooMapService {
        name(): string;

        getMap(params: IMapProps): MapObject;
    }

    export class MapLocationFactory {
        getMap(params: IMapProps): MapObject;
    }

    export interface IMapProps {

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

    interface DefaultProps {
        provider: 'yahoo' | 'google' | 'bing';
        mapId: string,
        height: number,
        width: number,
        zoom: number,
        useBackgroundImageStyle: boolean
    }

    export default class Map extends React.Component<IMapProps, {}> {}
}