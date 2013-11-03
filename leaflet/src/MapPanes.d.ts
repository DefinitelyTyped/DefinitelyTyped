declare module L {

    export interface MapPanes {

        /**
          * Pane that contains all other map panes.
          */
        mapPane: HTMLElement;

        /**
          * Pane for tile layers.
          */
        tilePane: HTMLElement;

        /**
          * Pane that contains all the panes except tile pane.
          */
        objectsPane: HTMLElement;

        /**
          * Pane for overlay shadows (e.g. marker shadows).
          */
        shadowPane: HTMLElement;

        /**
          * Pane for overlays like polylines and polygons.
          */
        overlayPane: HTMLElement;

        /**
          * Pane for marker icons.
          */
        markerPane: HTMLElement;

        /**
          * Pane for popups.
          */
        popupPane: HTMLElement;
    }
}
