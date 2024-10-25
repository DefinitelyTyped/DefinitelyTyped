/**
 * 矩形编辑器
 * @link https://lbs.amap.com/api/javascript-api-v2/documentation#rectangleeditor
 */
declare namespace AMap {
  namespace RectangleEditor {

    interface MarkerOptions {}

    /**
    * 矩形编辑器的配置项
    */
    interface RectangleEditorOptions {
      /**
       * 新创建的对象样式
       */
      createOptions?: any
      /**
       * 	编辑样式
       */
      editOptions?: any
      /**
       * 西南点样式 MarkerOptions
       */
      southWestPoint?: Marker.Options
      /**
       * 东北点样式 MarkerOptions
       */
      northEastPoint?: Marker.Options
    }

    interface EventMap<I = RectangleEditor> {
      /**
       * 增加一个节点时触发此事件
       */
      addnode: MapsEvent<'addnode', I>
      /**
       * 调整折线上某个点时触发此事件
       */
      adjust: MapsEvent<'adjust', I>
      /**
       * 移动覆盖物时触发此事件
       */
      move: MapsEvent<'move', I>
      /**
       * 创建一个覆盖物之后触发该事件，target即为创建对象。当editor编辑对象为空时，调用open接口，再点击一次屏幕就会创建新的覆盖物对象
       */
      add: MapsEvent<'add', I>
      /**
       * 调用close之后触发该事件，target即为编辑后的覆盖物对象
       */
      end: MapsEvent<'end', I>
    }
  }

    /**
     * @link https://lbs.amap.com/api/javascript-api-v2/documentation#rectangleeditor
     */
    class RectangleEditor<ExtraData = any> extends Overlay<ExtraData> {
      /**
       *
       * @param map AMap.Map 的实例
       * @param rect AMap.Rectangle 的实例
       * @param opt 设置参数
       */
      constructor(map: Map, rect?: Rectangle, opt?: RectangleEditor.RectangleEditorOptions)

      /**
       * 打开编辑功能
       */
      open(): void
      /**
       * 关闭编辑功能
       */
      close(): void

      /**
       * 设置编辑对象
       * @param overlay
       */
      setTarget(overlay?: Rectangle): void

      /**
       * 获取编辑对象
       */
      getTarget(): Rectangle | undefined
    }

}