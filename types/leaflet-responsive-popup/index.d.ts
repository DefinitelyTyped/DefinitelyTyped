// Type definitions for leaflet-responsive-popup 0.6
// Project: https://github.com/yafred/leaflet-responsive-popup
// Definitions by: Stan Kurek <https://github.com/stankurek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as L from 'leaflet';

declare module 'leaflet' {
    interface ResponsivePopupOptions extends PopupOptions {
        hasTip?: boolean;
    }

    class ResponsivePopup extends Popup {
        constructor(options?: ResponsivePopupOptions, source?: Layer);
    }

    function responsivePopup(options?: ResponsivePopupOptions, source?: Layer): ResponsivePopup;
}
