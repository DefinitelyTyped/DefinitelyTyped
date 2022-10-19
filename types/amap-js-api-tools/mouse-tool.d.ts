declare namespace AMap{
  namespace MouseTool {
    type DrawEvent = Event<'draw', {
      /**
       * 绘制完成的覆盖物对象
       */
      obj: string; // FIXME:确定不是object?
    }>
    type EventMap = {
      draw: DrawEvent;
    }
  }
  class MouseTool extends EventEmitter {
    constructor(map: Map);
    /**
     * 开启鼠标画点标注模式。鼠标在地图上单击绘制点标注，标注样式参考MarkerOptions设置
     * 
     * @param options 
     */
    marker(options?: Marker.Options): void;
    /**
     * 开启鼠标圆形绘制模式。鼠标在地图上单击绘制圆形，圆形样式参考CircleOptions设置
     * 
     * @param options 参考CircleOptions设置
     */
    circle(options?: Circle.Options): void;
    /**
     * 开启鼠标矩形绘制模式。鼠标在地图上单击绘制矩形，矩形样式参考PolygonOptions设置
     */
    rectangle(options?: Polygon.Options): void;
    /**
     * 开启折线绘制模式。鼠标在地图上单击绘制折线，折线样式参考PolylineOptions设置
     */
    polyline(options?: Polyline.Options): void;
    /**
     * 开启多边形绘制模式。鼠标在地图上单击绘制多边形，多边形样式参考PolygonOptions设置
     */
    polygon(options?: Polygon.Options): void;
    /**
     * 开启面积量测模式。鼠标在地图上单击绘制量测区域，鼠标左键双击或右键单击结束当前量测操作，并显示本次量测结果。量测面样式参考PolygonOptions设置
     */
    mearureArea(options?: Polygon.Options): void;
    /**
     * 开启距离量测模式。鼠标在地图上单击绘制量测节点，并计算显示两两节点之间的距离，鼠标左键双击或右键单击结束当前量测操作。量测线样式参考 PolylineOptions 设置 注：不能同时使用rule方法和RangTool插件进行距离量测
     */
    rule(options?: Polyline.Options): void;
    /**
     * 开启鼠标拉框放大模式。鼠标可在地图上拉框放大地图。矩形框样式参考PolygonOptions设置
     */
    rectZoomIn(options?: Polygon.Options): void;
    /**
     * 开启鼠标拉框缩小模式。鼠标可在地图上拉框缩小地图。矩形框样式参考PolygonOptions设置
     */
    rectZoomOut(options?: Polygon.Options): void;
    /**
     * 关闭当前鼠标操作。参数arg设为true时，鼠标操作关闭的同时清除地图上绘制的所有覆盖物对象；设为false时，保留所绘制的覆盖物对象。默认为false
     */
    close(ifClear?: boolean): void;
  }
}