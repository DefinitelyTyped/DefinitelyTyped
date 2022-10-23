declare namespace AMap {
    namespace RangingTool {
        interface Options {
            /**
             * 设置量测起始点标记属性对象，包括点标记样式、大小等，参考 MarkerOptions
             */
            startMarkerOption?: Marker.Options | undefined;
            /**
             * 设置量测中间点标记属性对象，包括点标记样式、大小等，参考 MarkerOptions
             */
            midMarkerOptions?: Marker.Options | undefined;
            /**
             * 设置量测终点标记属性对象，包括点标记样式、大小等，参考 MarkerOptions
             */
            endMarkerOptions?: Marker.Options | undefined;
            /**
             * 设置距离量测线的属性对象，包括线样式、颜色等，参考 PolylineOptions
             */
            lineOptions?: Polyline.Options | undefined;
            /**
             * 设置距离量测过程中临时量测线的属性对象，包括线样式、颜色，参考 PolylineOptions
             */
            tmpLineOptions?: Polyline.Options | undefined;
            /**
             * 设置量测起始点标签的文字内容，默认为“起点”
             */
            startLabelText?: string | undefined;
            /**
             * 设置量测中间点处标签的文字内容，默认为当前量测结果值
             */
            midLabelText?: string | undefined;
            /**
             * 设置量测结束点处标签的文字内容，默认为当前量测结果值
             */
            endLabelText?: string | undefined;
            /**
             * 设置量测起始点标签的偏移量。默认值：Pixel(-6, 6)
             */
            startLabelOffset?: Pixel | undefined;
            /**
             * 设置量测中间点标签的偏移量。默认值：Pixel(-6, 6)
             */
            midLabelOffset?: Pixel | undefined;
            /**
             * 设置量测结束点标签的偏移量。默认值：Pixel(-6, 6)
             */
            endLabelOffset?: Pixel | undefined;
        }
        type AddNodeEvent = Event<
            'addnode',
            {
                /**
                 * 添加的标记点对象
                 */
                marker: Marker;
                /**
                 * 添加的标记点坐标
                 */
                position: LngLat;
            }
        >;
        type RemoveNodeEvent = Event<
            'removenode',
            {
                /**
                 * 距离量测对象
                 */
                target: object;
                /**
                 * 距离量测对象
                 */
                polyline: Polyline;
                /**
                 * 量测点（LngLat）对象的集合
                 */
                points: LngLat[];
                /**
                 * 本次距离量测的总距离值,单位默认为：公里
                 */
                distance: number;
            }
        >;
        type EndEvent = Event<
            'end',
            {
                /**
                 * 距离量测对象
                 */
                target: object;
                /**
                 * 量测线对象
                 */
                polyline: Polyline;
                /**
                 * 量测点（LngLat）对象的集合
                 */
                points: LngLat[];
                /**
                 * 本次距离量测的总距离值,单位默认为：公里
                 */
                distance: number;
            }
        >;
        interface EventMap {
            addnode: AddNodeEvent;
            removenode: RemoveNodeEvent;
            end: EndEvent;
        }
    }
    class RangingTool extends EventEmitter {
        constructor(map: Map, opts?: RangingTool.Options);
        /**
         * 启动测距工具
         */
        turnOn(): void;
        /**
         * 关闭测距工具
         */
        turnOff(removeOverlays: boolean): void;
    }
}
