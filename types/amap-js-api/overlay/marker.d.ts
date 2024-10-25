declare namespace AMap {
    namespace Marker {
        interface EventMap<I = Marker> {
            click: MapsEvent<"click", I>;
            dblclick: MapsEvent<"dblclick", I>;
            rightclick: MapsEvent<"rightclick", I>;
            mousemove: MapsEvent<"mousemove", I>;
            mouseover: MapsEvent<"mouseover", I>;
            mouseout: MapsEvent<"mouseout", I>;
            mousedown: MapsEvent<"mousedown", I>;
            mouseup: MapsEvent<"mouseup", I>;
            dragstart: MapsEvent<"dragstart", I>;
            dragging: MapsEvent<"dragging", I>;
            dragend: MapsEvent<"dragend", I>;
            moving: Event<"moving", { passedPath: LngLat[] }>;
            moveend: Event<"moveend">;
            movealong: Event<"movealong">;
            touchstart: MapsEvent<"touchstart", I>;
            touchmove: MapsEvent<"touchmove", I>;
            touchend: MapsEvent<"touchend", I>;
        }

        type LabelDirection = "top" | "right" | "bottom" | "left" | "center";
        interface Label {
          /**
           * 文本标注的内容
           */
            content?: string | undefined;
            /**
             * offset为偏移量。如设置了 direction，以 direction 方位为基准点进行偏移。
             */
            offset?: Pixel | number[] |  undefined;
            /**
             * 文本标注方位 可选值：'top'|'right'|'bottom'|'left'|'center'，默认值: 'right'。
             */
            direction?: LabelDirection | undefined;
        }

        type Anchor =
            | "top-left"
            | "top-center"
            | "top-right"
            | "middle-left"
            | "center"
            | "middle-right"
            | "bottom-left"
            | "bottom-center"
            | "bottom-right";

        interface Options<ExtraData = any> extends Overlay.Options<ExtraData> {
            /**
             * 点标记在地图上显示的位置
             */
            position?: LocationValue | undefined
            /**
             * 设置点标记锚点, 可选值：
             * - 'top-left'
             * - 'top-center'
             * - 'top-right'
             * - 'middle-left'
             * - 'center'
             * - 'middle-right'
             * - 'bottom-left'
             * - 'bottom-center'
             * - 'bottom-right'
             * @link https://lbs.amap.com/demo/javascript-api-v2/example/marker/marker-anchor
             */
            anchor?: Anchor | undefined;
            /**
             * - 点标记显示位置偏移量，默认值为 [0,0] 。
             * - Marker指定position后，默认以marker左上角位置为基准点（若设置了anchor，则以anchor设置位置为基准点），对准所给定的position位置，若需使marker指定位置对准在position处，需根据marker的尺寸设置一定的偏移量。
             */
            offset?: Pixel | number[] | undefined;
            /**
             * 在点标记中显示的图标。可以传一个图标地址，也可以传Icon对象。有合法的content内容设置时，此属性无效。
             */
            icon?: string | Icon | undefined;
            /**
             * 点标记显示内容。可以是HTML要素字符串或者HTML DOM对象。content有效时，icon属性将被覆盖。
             */
            content?: string | HTMLElement | undefined;
            /**
             * 鼠标点击时marker是否置顶,默认false ，不置顶
             */
            topWhenClick?: boolean | undefined;
            /**
             * 事件是否冒泡，默认为 false
             * 是否将覆盖物的鼠标或touch等事件冒泡到地图上
             */
            bubble?: boolean | undefined;
            /**
             * 点标记是否可拖拽移动, 默认值：false
             */
            draggable?: boolean | undefined;
            /**
             * 拖拽点标记时是否开启点标记离开地图的效果
             */
            raiseOnDrag?: boolean | undefined;
            /**
             * 鼠标悬停时的鼠标样式; 默认值：'pointer'
             */
            cursor?: string | undefined;
            /**
             * 点标记是否可见，默认值：true
             */
            visible?: boolean | undefined;
            /**
             * 点标记的叠加顺序
             * 地图上存在多个点标记叠加时，通过该属性使级别较高的点标记在上层显示，默认zIndex：12
             */
            zIndex?: number | undefined;
            /**
             * 点标记的旋转角度； 广泛用于改变车辆行驶方向。默认值：0
             */
            angle?: number | undefined;
            /**
             * 是否自动旋转
             */
            autoRotation?: boolean | undefined;
            /**
             * 点标记的动画效果
             */
            animation?: AnimationName | undefined;
            /**
             * 点标记阴影
             */
            shadow?: Icon | string | undefined;
            /**
             * 鼠标滑过点标记时的文字提示。不设置则鼠标滑过点标无文字提示。
             */
            title?: string | undefined;
            /**
             * 可点击区域
             */
            shape?: MarkerShape | undefined;
            /**
             * 文本标注
             */
            label?: Label | undefined;

            /**
             * 类型：Vector2	点标记显示的层级范围，超过范围不显示。默认值：zooms: [2, 20]
             */
            zooms?: [number, number] | undefined;
            topWhenMouseOver?: boolean | undefined;
            /**
             * 设置Marker点是否离地绘制，默认值为0，等于0时贴地绘制。大于0时离地绘制，此时Marker点高度等于height值加Marker点高程值（JSAPI v2.1新增属性目前只适用于v2.1版本）。
             */
            height?: number | undefined;

            /**
             * 点标记是否可点击，默认值: true
             */
            clickable?: boolean
        }
    }

    /**
     * @example
     * var marker = new AMap.Marker({
            position: new AMap.LngLat(116.397428, 39.90923),
            icon: 'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
            anchor: 'bottom-center',
        });
        map.add(marker);
     */
    class Marker<ExtraData = any> extends Overlay<ExtraData> {
        /**
         * 点标记
         * @param options 选项
         */
        constructor(options?: Marker.Options<ExtraData>);
        /**
         * 唤起高德地图客户端标注页
         * @param obj 唤起参数
         */
        markOnAMAP(obj?: { name?: string | undefined; position?: LocationValue | undefined }): void;
        /**
         * 获取锚点
         */
        getAnchor(): Marker.Anchor | undefined;
        /**
         * 设置锚点
         */
        setAnchor(anchor?: Marker.Anchor): void;
        /**
         * 获取偏移量
         */
        getOffset(): Pixel;
        /**
         *     设置偏移量
         * @param offset 偏移量
         */
        setOffset(offset: Pixel): void;
        /**
         * 设置点标记的动画效果
         * @param animate 动画效果类型
         */
        setAnimation(animate: AnimationName, prevent?: boolean): void;
        /**
         * 获取点标记的动画效果类型
         */
        getAnimation(): AnimationName;
        /**
         * 设置点标记是支持鼠标单击事件
         * @param cilckable 是否支持点击
         */
        setClickable(cilckable: boolean): void;
        /**
         *     获取点标记是否支持鼠标单击事件
         */
        getClickable(): boolean;
        /**
         *     获取点标记的位置
         */
        getPosition(): LngLat | undefined;
        /**
         * 设置点标记位置
         * @param position 位置经纬度
         */
        setPosition(position: LocationValue): void;
        /**
         *     设置点标记的旋转角度
         * @param angle 旋转角度
         */
        setAngle(angle: number): void;
        /**
         * 设置点标记文本标签内容
         * @param label 标签内容
         */
        setLabel(label?: Marker.Label): void;
        /**
         * 获取点标记文本标签内容
         */
        getLabel(): Marker.Label | undefined;
        /**
         *     获取点标记的旋转角度
         */
        getAngle(): number;
        /**
         * 设置点标记的叠加顺序
         * @param index 层级
         */
        setzIndex(index: number): void;
        /**
         * 获取点标记的叠加顺序
         */
        getzIndex(): number;
        /**
         * 设置点标记的显示图标
         * @param content 图标
         */
        setIcon(content: string | Icon): void;
        /**
         * 当点标记未自定义图标时，获取Icon内容
         */
        getIcon(): string | Icon | undefined;
        /**
         * 设置点标记对象是否可拖拽移动
         * @param draggable 是否可拖拽移动
         */
        setDraggable(draggable: boolean): void;
        /**
         * 获取点标记对象是否可拖拽移动
         */
        getDraggable(): boolean;
        /**
         * 设置鼠标悬停时的光标
         * @param cursor 光标
         */
        setCursor(cursor: string): void;
        /**
         *     设置点标记显示内容，可以是HTML要素字符串或者HTML DOM对象
         * @param content 显示内容
         */
        setContent(content: string | HTMLElement): void;
        /**
         * 获取点标记内容
         */
        getContent(): string | HTMLElement;
        /**
         * 以指定的速度，点标记沿指定的路径移动
         * @param path 移动轨迹
         * @param speed 速度
         * @param timingFunction 缓动函数
         * @param circleable 是否循环
         */
        moveAlong(
            path: LngLat[],
            speed: number,
            timingFunction?: (t: number) => number,
            circleable?: boolean,
        ): void;
        /**
         * 以给定速度移动点标记到指定位置
         * @param lnglat 目标位置
         * @param speed 速度
         * @param timingFunction 缓动函数
         */
        moveTo(
            lnglat: LocationValue,
            speed: number,
            timingFunction?: (t: number) => number,
        ): void;
        /**
         * 点标记停止动画
         */
        stopMove(): void;
        /**
         *     暂定点标记的动画效果
         */
        pauseMove(): boolean;
        /**
         * 重新开始点标记的动画效果
         */
        resumeMove(): boolean;
        /**
         * 指定目标显示地图
         * @param map 地图
         */
        setMap(map: null | Map): void;
        /**
         * 鼠标滑过点标时的文字提示
         * @param title 提示文字
         */
        setTitle(title: string): void;
        /**
         * 获取点标记的文字提示
         */
        getTitle(): string | undefined;
        /**
         * 设置是否展示在最顶层
         * @param isTop 是否展示在最顶层
         */
        setTop(isTop: boolean): void;
        /**
         * 获取是否展示在最顶层
         */
        getTop(): boolean;
        /**
         * 设置阴影效果
         * @param icon 阴影效果
         */
        setShadow(icon?: Icon | string): void;
        /**
         * 获取阴影图标
         */
        getShadow(): Icon | undefined | string;
        /**
         * 设置可点击区域
         * @param shape 可点击区域
         */
        setShape(shape?: MarkerShape): void;
        /**
         * 获取可点击区域
         */
        getShape(): MarkerShape | undefined;
    }
}
