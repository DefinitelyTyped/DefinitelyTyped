declare namespace AMap {
    namespace Overlay {
        interface EventMap<I> {
            touchstart: MapsEvent<'touchstart', I>;
            touchmove: MapsEvent<'touchmove', I>;
            touchend: MapsEvent<'touchend', I>;
            click: MapsEvent<'click', I>;
            rightclick: MapsEvent<'rightclick', I>;
            dblclick: MapsEvent<'dblclick', I>;
            mousemove: MapsEvent<'mousemove', I>;
            mouseover: MapsEvent<'mouseover', I>;
            mousedown: MapsEvent<'mousedown', I>;
            mouseup: MapsEvent<'mouseup', I>;
        }
        interface Options<ExtraData = any> {
            map?: Map;
            cursor?: string;
            extData?: ExtraData;
            bubble?: boolean;
            clickable?: boolean;
            draggable?: boolean;
        }
    }
    abstract class Overlay<ExtraData = any> extends EventEmitter {
        constructor(options?: Overlay.Options);
        show(): void;
        hide(): void;
        getMap(): Map | null | undefined;
        setMap(map: Map | null): void;
        setExtData(extData: ExtraData): void;
        getExtData(): ExtraData | {};

        // internal
        setHeight(height?: number | string): void;
        getHeight(): number | string;
    }
}
