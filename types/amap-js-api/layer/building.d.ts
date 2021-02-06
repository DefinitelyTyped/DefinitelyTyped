declare namespace AMap {
    namespace Buildings {
        interface Options extends Layer.Options {
            /**
             * 可见级别范围
             */
            zooms?: [number, number];
            /**
             * 不透明度
             */
            opacity?: number;
            /**
             * 高度比例系数，可控制3D视图下的楼块高度
             */
            heightFactor?: number;
            /**
             *     是否可见
             */
            visible?: boolean;
            /**
             * 层级
             */
            zIndex?: number;

            // inner
            merge?: boolean;
            sort?: boolean;
        }
        interface AreaStyle {
            color1: string;
            path: LocationValue[];
            color2?: string;
            visible?: boolean;
            rejectTexture?: boolean;
        }
        interface Style {
            hideWithoutStyle?: boolean;
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
