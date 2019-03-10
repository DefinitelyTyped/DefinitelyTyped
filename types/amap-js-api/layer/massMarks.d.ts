declare namespace AMap {
    namespace MassMarks {
        interface EventMap<I = MassMarks> {
            click: UIEvent<'click', I>;
            dblclick: UIEvent<'dblclick', I>;
            mousedown: UIEvent<'mousedown', I>;
            mouseup: UIEvent<'mouseup', I>;
            mouseover: UIEvent<'mouseover', I>;
            mouseout: UIEvent<'mouseout', I>;
            touchstart: UIEvent<'touchstart', I>;
            touchend: UIEvent<'touchend', I>;
        }

        interface Style {
            anchor: Pixel;
            url: string;
            size: Size;
            rotation?: number;
        }

        type UIEvent<N extends string, I> = Event<N, {
            target: I;
            data: I extends MassMarks<infer D> ? D : Data;
        }>;

        interface Options extends Layer.Options {
            zIndex?: number;
            cursor?: string;
            alwayRender?: boolean;
            style: Style | Style[];
            // rejectMapMask
        }
        interface Data {
            lnglat: LocationValue;
            style?: number;
        }
    }

    class MassMarks<D extends MassMarks.Data = MassMarks.Data> extends Layer {
        constructor(data: D[] | string, opts: MassMarks.Options);
        setStyle(style: MassMarks.Style | MassMarks.Style[]): void;
        getStyle(): MassMarks.Style | MassMarks.Style[];
        setData(data: D[] | string): void;
        getData(): Array<Pick<D, Exclude<keyof D, 'lnglat'>> & { lnglat: LngLat }>;
        clear(): void;
    }
}
