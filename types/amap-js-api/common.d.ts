declare namespace AMap {
    type SizeValue = Size | [number, number];
    type LocationValue = LngLat | [number, number];
    type Lang = 'zh_cn' | 'en' | 'zh_en';

    type Event<N extends string = string, V = undefined> = { type: N } &
        (V extends HTMLElement ? { value: V }
            : V extends object ? V
            : V extends undefined ? {}
            : { value: V });
    type MapsEvent<N extends string, I> = Event<N, {
        /**
         * 经纬度坐标
         */
        lnglat: LngLat;
        /**
         * 像素坐标
         */
        pixel: Pixel;
        /**
         * 触发对象
         */
        target: I
    }>;

    type StrokeLineJoin = 'miter' | 'round' | 'bevel';
    type StrokeLineCap = 'butt' | 'round' | 'square';
    type StrokeStyle = 'dashed' | 'solid';

    type AnimationName = 'AMAP_ANIMATION_NONE' | 'AMAP_ANIMATION_DROP' | 'AMAP_ANIMATION_BOUNCE';
}
