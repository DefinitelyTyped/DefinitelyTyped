declare namespace AMap {
  namespace RangingTool {
    interface Options {
      startMarkerOption?: Marker.Options | undefined;
      midMarkerOptions?: Marker.Options | undefined;
      endMarkerOptions?: Marker.Options | undefined;
      lineOptions?: Polyline.Options | undefined;
      tmpLineOptions?: Polyline.Options | undefined;
      startLabelText?: string | undefined;
      midLabelText?: string | undefined;
      endLabelText?: string | undefined;
      startLabelOffset?: Pixel | undefined;
      midLabelOffset?: Pixel | undefined;
      endLabelOffset?: Pixel | undefined;
    }
    type AddNodeEvent = Event<'addnode', {
      /**
       * 添加的标记点对象
       */
      marker: Marker;
      /**
       * 添加的标记点坐标
       */
      position: LngLat;
    }>;
    type RemoveNodeEvent = Event<'removenode', {
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
    }>
    type EndEvent = Event<'end', {
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
    }>
    type EventMap = {
      addnode: AddNodeEvent;
      removenode: RemoveNodeEvent;
      end: EndEvent;
    }
  }
  class RangingTool extends EventEmitter {
    constructor(map: Map, opts?: RangingTool.Options);
    turnOn(): void;
    turnOff(removeOverlays: Boolean): void;
  }
}