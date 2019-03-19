// Type definitions for non-npm package amap-js-api-indoor-map 1.4
// Project: https://lbs.amap.com/api/javascript-api/reference/indoormap
// Definitions by: breeze9527 <https://github.com/breeze9527>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="amap-js-api" />

declare namespace AMap {
    namespace IndoorMap {
        interface EventMap {
            complete: Event<'complete'>;
            click: MouseEvent<'click'>;

            floor_complete: Event<'floor_complete', SearchResult>;
            mouseover: MouseEvent<'mouseover'>;
            mouseout: MouseEvent<'mouseout'>;
        }
        type MouseEvent<N extends string> = Event<N, {
            building_id: string;
            lnglat: LngLat;
            floor: number;
            shop: Shop;
        }>;
        interface Options extends Layer.Options {
            zIndex?: number;
            opacity?: number;
            cursor?: string;
            hideFloorBar?: boolean;
            alaysShow?: boolean;
            // internal
            visible?: boolean;
            featurezIndex?: number;
            zooms?: [number, number];
            disableIconRender?: boolean;
            disableLabelRender?: boolean;
            disableHoverMarker?: boolean;
            autoLoadBuildingsInTile?: boolean;
        }
        interface FloorDetails {
            floor_indexs: number[];
            floor_nonas: string[];
            floor_names: string[];
        }
        type ShopCategory = 'public' | 'connection' | 'shop';
        interface Shop {
            id: string;
            poiId: string;
            building_id: string;
            name: string;
            lnglat: LngLat;
            category: ShopCategory;
        }
        interface Building {
            id: string;
            name: string;
            lnglat: LngLat;
            floor: number;
            floor_details: FloorDetails;
        }
        interface SearchSuccessResult {
            id: string;
            status: 0;
            building: Building;
        }
        interface SearchErrorResult {
            id: string;
            status: 1;
            error: Error;
        }
        type SearchResult = SearchSuccessResult | SearchErrorResult;
    }

    class IndoorMap extends Layer {
        constructor(options?: IndoorMap.Options);
        showIndoorMap(
            indoorId: string,
            floor?: number,
            shopId?: string,
            noMove?: boolean,
            callback?: (error: null | Error, result: IndoorMap.SearchResult) => void
        ): void;
        showIndoorMap(
            indoorId: string,
            floor?: number,
            shopId?: string,
            callback?: (error: null | Error, result: IndoorMap.SearchResult) => void
        ): void;
        showIndoorMap(
            indoorId: string,
            floor?: number,
            callback?: (error: null | Error, result: IndoorMap.SearchResult) => void
        ): void;
        showIndoorMap(
            indoorId: string,
            callback?: (error: null | Error, result: IndoorMap.SearchResult) => void
        ): void;

        showFloor(floor: number, noMove?: boolean): false | undefined;
        showFloorBar(): void;
        hideFloorBar(): void;
        showLabels(): void;
        hideLabels(): void;
        getSelectedBuildingId(): string | null;
        getSelectedBuilding(): IndoorMap.Building | null;

        // internal
        getFloorBar(): void;
        setSelectedBuildingId(id: string): void;
    }
}
