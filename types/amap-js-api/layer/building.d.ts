declare namespace AMap {
    namespace Buildings {
        interface Options extends Layer.Options {
            /**
             * 可见级别范围
             */
            zooms?: [number, number] | undefined;
            /**
             * 不透明度
             */
            opacity?: number | undefined;
            /**
             * 高度比例系数，可控制3D视图下的楼块高度
             */
            heightFactor?: number | undefined;
            /**
             *     是否可见
             */
            visible?: boolean | undefined;
            /**
             * 层级
             */
            zIndex?: number | undefined;

            // inner
            merge?: boolean | undefined;
            sort?: boolean | undefined;
        }
        interface AreaStyle {
            color1: string;
            path: LocationValue[];
            color2?: string | undefined;
            visible?: boolean | undefined;
            rejectTexture?: boolean | undefined;
        }
        interface Style {
            hideWithoutStyle?: boolean | undefined;
            areas: AreaStyle[];
        }
    }

    class Buildings extends Layer {
        /**
         * 楼块图层，单独展示矢量化的楼块图层
         * @param opts 图层选项
         */
        constructor(opts?: Buildings.Options);
        /**
         * 按区域设置楼块的颜色
         * @param style 颜色设置
         */
        setStyle(style: Buildings.Style): void;
    }
}
