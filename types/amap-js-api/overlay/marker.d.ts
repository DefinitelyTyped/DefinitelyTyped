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
            moving: Event<'moving', { passedPath: LngLat[]; }>;
            moveend: Event<'moveend'>;
            movealong: Event<'movealong'>;
            touchstart: MapsEvent<'touchstart', I>;
            touchmove: MapsEvent<'touchmove', I>;
            touchend: MapsEvent<'touchend', I>;
        }

        type LabelDirection = 'top' | 'right' | 'bottom' | 'left' | 'center';
        interface Label {
            content?: string;
            offset?: Pixel;
            direction?: LabelDirection;
        }

        type Anchor = 'top-left' | 'top-center' | 'top-right' | 'middle-left' | 'center' | 'middle-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

        interface Options<ExtraData = any> extends Overlay.Options<ExtraData> {
            /**
             * 点标记在地图上显示的位置
             */
            position?: LocationValue;
            /**
             * 标记锚点
             */
            anchor?: Anchor;
            /**
             * 点标记显示位置偏移量
             */
            offset?: Pixel;
            /**
             * 需在点标记中显示的图标
             */
            icon?: string | Icon;
            /**
             * 点标记显示内容
             */
            content?: string | HTMLElement;
            /**
             * 鼠标点击时marker是否置顶
             */
            topWhenClick?: boolean;
            /**
             * 是否将覆盖物的鼠标或touch等事件冒泡到地图上
             */
            bubble?: boolean;
            /**
             * 点标记是否可拖拽移动
             */
            draggable?: boolean;
            /**
             * 拖拽点标记时是否开启点标记离开地图的效果
             */
            raiseOnDrag?: boolean;
            /**
             * 鼠标悬停时的鼠标样式
             */
            cursor?: string;
            /**
             * 点标记是否可见
             */
            visible?: boolean;
            /**
             * 点标记的叠加顺序
             */
            zIndex?: number;
            /**
             * 点标记的旋转角度
             */
            angle?: number;
            /**
             * 是否自动旋转
             */
            autoRotation?: boolean;
            /**
             * 点标记的动画效果
             */
            animation?: AnimationName;
            /**
             * 点标记阴影
             */
            shadow?: Icon | string;
            /**
             * 鼠标滑过点标记时的文字提示
             */
            title?: string;
            /**
             * 可点击区域
             */
            shape?: MarkerShape;
            /**
             * 文本标注
             */
            label?: Label;

            // internal
            zooms?: [number, number];
            topWhenMouseOver?: boolean;
            height?: number;
        }
    }

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
        markOnAMAP(obj?: { name?: string, position?: LocationValue }): void;
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
         *     获取点标记文本标签内容
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
         * 获取Icon内容
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
            circleable?: boolean
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
            timingFunction?: (t: number) => number
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
