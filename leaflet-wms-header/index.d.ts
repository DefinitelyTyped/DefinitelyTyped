import * as L from 'leaflet';


declare module 'leaflet' {

    namespace TileLayer {

        export class WMSHeader extends WMS {
            constructor(
                baseUrl: string,
                options: WMSOptions,
                header: {header: string, value: string}[]
            );
        }

        export function wmsHeader(
            baseUrl: string,
            options: WMSOptions,
            header: {header: string, value: string}[]
        ): WMSHeader;

    }

}