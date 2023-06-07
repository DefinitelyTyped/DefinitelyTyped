// Type definitions for leaflet-contextmenu 1.4
// Project: https://github.com/aratcliffe/Leaflet.contextmenu
// Definitions by: Antonio Vida <https://github.com/antoniovlx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { LatLng, Point, Marker, Path } from "leaflet";

declare module 'leaflet' {
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
