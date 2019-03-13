declare namespace AMap {
    namespace Marker {
        interface EventMap<I = Marker> {
            click: MapsEvent<'click', I>;
            dblclick: MapsEvent<'dblclick', I>;
            rightclick: MapsEvent<'rightclick', I>;
            mousemove: MapsEvent<'mousemove', I>;
            mouseover: MapsEvent<'mouseover', I>;
            mouseout: MapsEvent<'mouseout', I>;
            mousedown: MapsEvent<'mousedown', I>;
            mouseup: MapsEvent<'mouseup', I>;
            dragstart: MapsEvent<'dragstart', I>;
            dragging: MapsEvent<'dragging', I>;
            dragend: MapsEvent<'dragend', I>;
            moving: Event<'moving', { passwdPath: LngLat[]; }>;
            moveend: Event<'moveend'>;
            movealong: Event<'movealong'>;
            touchstart: MapsEvent<'touchstart', I>;
            touchmove: MapsEvent<'touchmove', I>;
            touchend: MapsEvent<'touchend', I>;
        }

        interface Label {
            content?: string;
            offset?: Pixel;
        }

        interface Options<ExtraData = any> extends Overlay.Options<ExtraData> {
            position?: LocationValue;
            offset?: Pixel;
            icon?: string | Icon;
            content?: string | HTMLElement;
            topWhenClick?: boolean;
            bubble?: boolean;
            draggable?: boolean;
            raiseOnDrag?: boolean;
            cursor?: string;
            visible?: boolean;
            zIndex?: number;
            angle?: number;
            autoRotation?: boolean;
            animation?: AnimationName;
            shadow?: Icon | string;
            title?: string;
            shape?: MarkerShape;
            label?: Label;
            zooms?: [number, number];

            // internal
            topWhenMouseOver?: boolean;
            height?: number;
        }
    }

    class Marker<ExtraData = any> extends Overlay<ExtraData> {
        constructor(options?: Marker.Options<ExtraData>);
        markOnAMAP(obj?: { name?: string, position?: LocationValue }): void;
        getOffset(): Pixel;
        setOffset(offset: Pixel): void;
        setAnimation(animate: AnimationName, prevent?: boolean): void;
        getAnimation(): AnimationName;
        setClickable(cilckable: boolean): void;
        getClickable(): boolean;
        getPosition(): LngLat | undefined;
        setPosition(position: LocationValue): void;
        setAngle(angle: number): void;
        setLabel(label?: Marker.Label): void;
        getLabel(): Marker.Label | undefined;
        getAngle(): number;
        setzIndex(index: number): void;
        getzIndex(): number;
        setIcon(content: string | Icon): void;
        getIcon(): string | Icon | undefined;
        setDraggable(draggable: boolean): void;
        getDraggable(): boolean;
        setCursor(cursor: string): void;
        setContent(content: string | HTMLElement): void;
        getContent(): string | HTMLElement;
        moveAlong(
            path: LngLat[],
            speed: number,
            timingFunction?: (t: number) => number,
            circleable?: boolean
        ): void;
        moveTo(
            path: LocationValue,
            speed: number,
            timingFunction?: (t: number) => number
        ): void;
        stopMove(): void;
        pauseMove(): boolean;
        resumeMove(): boolean;
        setMap(map: null | Map): void;
        setTitle(title: string): void;
        getTitle(): string | undefined;
        setTop(isTop: boolean): void;
        getTop(): boolean;
        setShadow(icon?: Icon | string): void;
        getShadow(): Icon | undefined | string;
        setShape(shape?: MarkerShape): void;
        getShape(): MarkerShape | undefined;
    }
}
