import { LatLng, Marker, Path, Point } from "leaflet";

declare module "leaflet" {
    interface ContextMenuItem {
        text: string;
        icon?: string;
        retinaIcon?: string;
        iconCls?: string;
        retinaIconCls?: string;
        disabled?: boolean;
        separator?: boolean;
        hideOnSelect?: boolean;
        index?: number;
        // map is the scope where contextmenu is defined.
        callback?: (ev: ContextMenuItemClickEvent, map?: Map) => void;
    }

    interface MapOptions {
        contextmenu: boolean;
        contextmenuItems: ContextMenuItem[];
    }

    interface MarkerOptions {
        contextmenu: boolean;
        contextmenuItems: ContextMenuItem[];
    }

    interface ContextMenuItemClickEvent {
        latlng: LatLng;
        layerPoint: Point;
        containerPoint: Point;
        relatedTarget: Marker | Path | undefined;
    }
}
