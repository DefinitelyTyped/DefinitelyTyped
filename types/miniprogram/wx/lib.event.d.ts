/**
 * 事件对象
 */
declare interface IEventTarget {
  /**
   * 事件源组件的id
   */
  id: string;
  /**
   * 当前组件的类型
   */
  tagName: string;
  /**
   * 事件源组件上由data-开头的自定义属性组成的集合
   */
  dataset: IAnyObject;
}

/**
 * 触摸事件
 */
declare interface IEventTouch {
  clientX: number;
  clientY: number;
  identifier: number;
  pageX: number;
  pageY: number;
}

/**
 * canvas 触摸事件
 */
declare interface IEventCanvasTouch {
  identifier: number;
  x: number;
  y: number;
}

/**
 * base事件参数
 */
declare interface IBaseEvent {
  /**
   * 事件类型
   */
  type: string;
  timeStamp: number;
  target: IEventTarget;
  currentTarget: IEventTarget;
}

/**
 * 自定义事件
 */
declare interface ICustomEvent<P extends IAnyObject = IAnyObject>
  extends IBaseEvent {
  /**
   * 额外的信息
   */
  detail: P;
}

/**
 * 触摸事件返回
 */
declare interface ITouchEvent<
  P extends IAnyObject = IAnyObject,
  T extends IEventTouch = IEventTouch
> extends ICustomEvent<P> {
  touches: T[];
  changedTouches: T[];
}

/**
 * canvas触摸事件返回
 */
declare interface ICanvasTouchEvent<
  T extends IEventCanvasTouch = IEventCanvasTouch
> extends IBaseEvent {
  touches: T[];
  changedTouches: T[];
}
