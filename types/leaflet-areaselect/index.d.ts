import * as L from "leaflet";

declare module "leaflet" {
    function areaSelect(box: AreaSelectOptions): AreaSelect;

    interface AreaSelectOptions {
        width?: number | undefined;
        height?: number | undefined;
        keepAspectRatio?: boolean | undefined;
    }

    interface Dimension {
        width: number;
        height: number;
    }

    interface AreaSelect {
        addTo(map: Map): Map;
        getBounds(): LatLngBounds;
        remove(): void;
        setDimensions(dim: Dimension): void;
    }
}
