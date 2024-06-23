import * as L from "leaflet";

declare module "leaflet" {
    interface ResponsivePopupOptions extends PopupOptions {
        hasTip?: boolean | undefined;
    }

    class ResponsivePopup extends Popup {
        constructor(options?: ResponsivePopupOptions, source?: Layer);
    }

    function responsivePopup(options?: ResponsivePopupOptions, source?: Layer): ResponsivePopup;
}
