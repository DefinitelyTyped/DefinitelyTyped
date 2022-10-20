declare namespace AMap {
    namespace CircleMarker {
        interface CircleMarkerOptions <ExtraData = any> {
            center?: LngLat | undefined;
            radius?: number | undefined;
            zIndex?: number | undefined;
            bubble?: boolean | undefined;
            cursor?: string | undefined;
            strokeColor?: string | undefined;
            strokeOpacity?: number | undefined;
            strokeWeight?: number | undefined;
            fillColor?: string | undefined;
            fillOpacity?: number | undefined;
            draggable?: boolean | undefined;
            extData?: ExtraData;
        }
    }
    /**
     * 圆点标记
     */
    class CircleMarker<ExtraData = any> extends Circle<ExtraData> {
        constructor(options?: CircleMarker.CircleMarkerOptions<ExtraData>);
    }
}
