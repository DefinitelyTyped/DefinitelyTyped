// Type definitions for g2 3.0.5
// Project: https://github.com/antvis/g2
// Definitions by: yixin https://github.com/Leannechn;
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = G2;
export as namespace G2;

declare namespace G2 {
  function track(option: boolean): void;
  const version: string;
  const Animate: Animate;
  const Util: Util;
  const Shape: Shape;

  class Global {
    setTheme(option: 'default' | 'dark'): void;
    version: string;
    trackable: boolean;
    animate: boolean;
    snapArray: Array<number>;
    // 指定固定 tick 数的逼近值
    snapCountArray: Array<number>;
    widthRatio: {
      // 宽度所占的分类的比例
      column: number; // 一般的柱状图占比 1/2
      rose: number; // 玫瑰图柱状占比 1
      multiplePie: number; // 多层的饼图、环图
    };
    // 折线图、区域图、path 当只有一个数据时，是否显示成点
    showSinglePoint: boolean;
    connectNulls: boolean;
    colors: string[]; // 更改默认的颜色 --不推荐
  }

  /**
   * base Style interface [绘图属性]
   */
  namespace Styles {
    interface common {
      fill?: string; // 设置用于填充绘画的颜色、渐变或模式；
      stroke?: string | number; //  设置用于笔触的颜色、渐变或模式；
      shadowColor?: string; // 设置用于阴影的颜色；
      shadowBlur?: string | number; // 设置用于阴影的模糊级别；
      shadowOffsetX?: string | number; // 设置阴影距形状的水平距离；
      shadowOffsetY?: string | number; //  设置阴影距形状的垂直距离；
      opacity?: string | number; // 设置绘图的当前 alpha 或透明值；
      globalCompositeOperation?: string; // 设置新图像如何绘制到已有的图像上。
    }
    interface text extends common {
      font?: string;
      // 文本对齐方向，可取值为
      textAlign?: 'center' | 'end' | 'left' | 'right' | 'start';
      // 文本粗细
      rotate?: number;
      // 文本基准线，可取 top middle bottom，默认为middle
      textBaseline?: 'top' | 'middle' | 'bottom';
      fontStyle?: 'normal' | 'italic' | 'oblique';
      fontVariant?: 'normal' | 'small-caps';
      fontWeight?: string | number;
      fontSize?: string | number;
      fontFamily?: string;
    }
    interface line extends common {
      strokeOpacity?: string | number;
      lineDash?: number[]; // 虚线的设置
      lineCap?: string;
      lineJoin?: string;
      lineWidth?: string | number;
      miterLimit?: string | number;
      startArrow?: boolean;
      endArrow?: boolean;
      arrowAngle?: number;
      arrowRadius?: number;
    }

    interface tickLine extends line{
      length?: number; // 刻度线的长度，可以为负值（表示反方向渲染）
    }

    interface background extends common {
      fillOpacity?: number; // 图表背景透明度
      strokeOpacity?: number; // 图表边框透明度
      lineWidth?: number; // 图表边框粗度
      radius?: number; // 图表圆角大小
    }

    interface path extends common {
      fillOpacity?: number; // 图表背景透明度
      strokeOpacity?: number; // 图表边框透明度
    }
  }

  /**
   * base type
   */
  type EventParams = {
    x?: number;
    y?: number;
    target?: HTMLCanvasElement;
    toElement?: HTMLElement;
    shape?: Shape;
    views?: View[];
    data?: any;
    geom?: any;
  }

  /**
   * 图标接收的参数
   */
  interface ChartProps {
    container: string | HTMLDivElement;
    width?: number;
    height: number;
    padding?:
      | {
          top?: number;
          right?: number;
          bottom?: number;
          left?: number;
        }
      | number
      | [number, number, number, number]
      | [string, string];
    background?: Styles.background;
    plotBackground?: Styles.background;
    forceFit?: boolean;
    animate?: boolean;
    pixelRatio?: number;
    data?: Object | any;
  }

  interface Coordinate {
    //坐标系旋转，angle 表示旋转的度数，单位为角度。
    rotate(angle: number): Coordinate;
    //坐标系缩放，sx 代表 x 方向缩放比例，sy 代表 y 方向缩放比例，单位为数值。
    scale(sx: number, sy: number): Coordinate;
    //坐标系转置，将 x 或者 y 的起始、结束值倒置。
    reflect(xy?: 'x' | 'y' ): Coordinate;
    //将坐标系 x 轴和 y 轴转置。
    transpose(): Coordinate;
  }

  interface Geom {
    position(pos: string): this;
    position(pos: string[]): this;
    color(col: string): this;
    color(type: string, colors: string[]): this;
    color(type: string, fun: Function): this;
    shape(shape: string): this;
    shape(type: string, colors: string[]): this;
    shape(type: string, fun: Function): this;
    size(size: number): this;
    size(col: string): this;
    size(type: string, colors: number[]): this;
    size(type: string, Function): this;
    opacity(op: number): this;
    opacity(col: string): this;
    opacity(type: string, Function): this;
    adjust(adj: string): this;
    adjust(adjs: any[]): this;
    label(field: string): this;
    label(exe: string, Function): this;
    label(exe: string,opt: {
      offset?: number;
      textStyle?: Styles.text;
    }): this;
    tooltip(open: boolean): this;
    tooltip(field: string): this;
    tooltip(exe: string, Function): this;
    style(style: any): this;
    style(exe: string, Function): this;
    select(open: boolean): this;
    select(opt: {
      mode: 'single' | 'multiple', // 选中模式，单选、多选
      style: {}, // 选中后 shape 的样式
      cancelable: true | false, // 选中之后是否允许取消选中，默认允许取消选中
      animate: true | false // 选中是否执行动画，默认执行动画
    }): this;
    select(open: boolean, opt: {
      mode: 'single' | 'multiple', // 选中模式，单选、多选
      style: {}, // 选中后 shape 的样式
      cancelable: true | false, // 选中之后是否允许取消选中，默认允许取消选中
      animate: true | false // 选中是否执行动画，默认执行动画
    }): this;
    active(open: boolean);
    animate(opt: any);
  }
  

  /**
   * 坐标轴标签
   */
  interface AxisLabel {
    // 数值，设置坐标轴文本 label 距离坐标轴线的距离
    offset?: number;
    // 设置文本的显示样式，还可以是个回调函数，
    // 回调函数的参数为该坐标轴对应字段的数值
    textStyle?: ((
      text?: string,
    ) => Styles.text) | Styles.text;
    // 文本是否需要自动旋转，默认为 true
    autoRotate?: boolean;
    /**
     * 用于格式化坐标轴上显示的文本信息的回调函数
     * @param  {string} text  文本值
     * @param  {object} item  该文本值对应的原始数据记录
     * @param  {number} index 索引值
     * @return {string}       返回格式化后的文本值
     */
    formatter?(text: string, item, index: number): string;
    /**
     * 使用 html 渲染文本
     * @param  {string} text  文本值
     * @param  {object} item  该文本值对应的原始数据记录
     * @param  {number} index 索引值
     * @return {string}       返回 html 字符串
     */
    htmlTemplate?(text: string, item, index: number): string;
  }
  /**
   * 坐标轴线
   */
  interface AxisTile {
    autoRotate?: boolean; // 是否需要自动旋转，默认为 true
    offset?: number; // 数值，设置坐标轴标题距离坐标轴线的距离
    // 设置标题的文本样式
    textStyle?: Styles.text;
    // 标题的显示位置（相对于坐标轴线），可取值为 start center end
    position?: 'start' | 'center' | 'end';
  }

  const markerAction: (
    x: number,
    y: number,
    r: number,
    ctx: CanvasRenderingContext2D,
  ) => void;

  interface LegendConfig {
    position?: 'top' | 'bottom' | 'left' | 'right';
    layout?: 'vertica' | 'horizontal';
    title?: Styles.text;
    offsetX?: number;
    offsetY?: number;
    itemGap?: number;
    itemMarginBottom?: number;
    itemWidth?: number;
    unCheckColor?: string;
    background?: {
      fill?: string;
      fillOpacity?: number;
    };
    allowAllCanceled?: number;
    itemFormatter?: (value: string) => string;
    marker?: string | Function;
    textStyle?: Styles.text;
    clickable?: boolean;
    hoverable?: boolean;
    selectedMode?: 'single' | 'multiple';
    onHover?: (e: MouseEvent) => void;
    onClick?: (e: MouseEvent) => void;
    useHtml?: boolean;
    container?: string;
    containerTpl?: string;
    itemTpl?: string;
    slidable?: boolean;
    width?: number;
    height?: number;
    custom?: number;
    items?: Array<{
      value: string; // 图例项的文本内容
      fill: string; // 该图例项 marker 的填充颜色
      marker?: string | Function;
    }>;
  }

  interface TooltipConfig {
    triggerOn?: 'mousemove' | 'click' | 'none';
    showTitle?: boolean;
    title?: string;
    crosshairs?: {
      // rect 表示矩形框，x 表示水平辅助线，y 表示垂直辅助线，cross 表示十字辅助线
      type?: 'rect' | 'x' | 'y' | 'cross';
      style?: Styles.background | Styles.line;
    };
    offset?: number;
    inPlot?: boolean;
    follow?: boolean;
    shared?: boolean;
    enterable?: boolean;
    position?: 'left' | 'righ' | 'top' | 'bottom';
    hideMarkers?: boolean;
    containerTpl?: string;
    itemTpl?: string;
    'g2-tooltip'?: any;
    'g2-tooltip-title'?: any;
    'g2-tooltip-list-item'?: any;
    'g2-tooltip-list'?: any;
    'g2-tooltip-marker'?: any;
  }

  class ChartGuide {
    line(
      option: {
        top?: boolean; // 指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
        // 辅助线起始位置，值为原始数据值，支持 callback
        start?: any | Function | Array<string | number>;
        // 辅助线结束位置，值为原始数据值，支持 callback
        end?: any | Function | Array<string | number>;
        lineStyle?: Styles.line; // 图形样式配置
        text?: {
          // 文本的显示位置
          position?: 'start' | 'center' | 'end' | '39%' | 0.5;
          // 是否沿线的角度排布，默认为 true
          autoRotate?: boolean;
          // 文本图形样式配置
          style?: any;
          // 文本的内容
          content?: string;
          // x 方向的偏移量
          offsetX?: number;
          // y 方向的偏移量
          offsetY?: number;
        };
      },
    ) : void;
    text(
      option: {
        // 指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
        top?: boolean;
        // 文本的起始位置，值为原始数据值，支持 callback
        position?: any | Function | Array<string | number>;
        // 显示的文本内容
        content?: string;
        style?: G2.Styles.text; // 文本的图形样式属性
        offsetX?: number; // x 方向的偏移量
        offsetY?: number; // y 方向偏移量
      },
    ): void;
    image(
      option: {
        // 指定 giude 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
        top?: boolean;
        // 图片起始位置， 值为原始数据值，支持 callback
        start?: any | Function | Array<string | number>;
        // 图片结束位置， 值为原始数据值，支持 callback
        end?: any | Function | Array<string | number>;
        // 图片路径
        src?: string;
        // x 方向的偏移量
        offsetX?: number;
        // y 方向偏移量
        offsetY?: number;
        width?: number;
        height?: number;
      },
    ): void;
    region(
      option: {
        // 指定 giude 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
        top?: boolean;
        // 辅助框起始位置，值为原始数据值，支持 callback
        start?: any | Function | Array<string | number>;
        // 辅助框结束位置，值为原始数据值，支持 callback
        end?: any | Function | Array<string | number>;
        style?: {
          // 辅助框的边框宽度
          lineWidth?: number;
          // 辅助框填充的颜色
          fill?: string;
          // 辅助框的背景透明度
          fillOpacity?: number;
          stroke?: string;
        };
      },
    ): void;
    html(
      option: {
        // html的起始位置，值为原始数据值，支持 callback
        position?: any | Function | Array<string | number>;
        alignX?: 'left' | 'middle' | 'right';
        alignY?: 'top' | 'middle' | 'bottom';
        offsetX?: number;
        offsetY?: number;
        // html 代码
        html?: string;
        zIndex?: number;
      },
    ): void;

    arc: (
      option: {
        top?: boolean;
        // 辅助框起始位置，值为原始数据值，支持 callback
        start?: any | Function | Array<string | number>;
        // 辅助框结束位置，值为原始数据值，支持 callback
        end?: any | Function | Array<string | number>;
        style?: object;
      },
    ) => void;
  }

  class ChartAxisConfig {
    position?: 'top' | 'bottom' | 'left' | 'right';
    line?: Styles.line;
    label?: AxisLabel;
    title?: AxisTile;
    tickLine?: Styles.tickLine | null;
    subTickCount?: number;
    subTickLine?: Styles.tickLine | null;
    grid?: AxisGrid | null;
  }
  type AxisGrid  = {
    // 声明网格顶点从两个刻度中间开始，默认从刻度点开始
    align?: 'center';
    // 声明网格的类型，line 表示线，polygon 表示矩形框
    type?: 'line' | 'polygon';
    // 当网格类型 type 为 line 时，使用 lineStyle 设置样式
    lineStyle?: Styles.line;
    // 当网格类型 type 为 polygon 时，使用 alternateColor 为网格设置交替的颜色
    // 指定一个值则先渲染奇数层，两个值则交替渲染
    alternateColor?: string | [string, string];
    // 是否隐藏第一条网格线，默认为 false
    hideFirstLine?: boolean;
    // 是否隐藏最后一条网格线，默认为 false
    hideLastLine?: boolean;
  };



  class BashView {
    source(data: any): this;
    source(data: any, scaleConfig: any): this;
    getXScale<T>(): T;
    getYScales<T>(): T[];
    getXY: () => {
      x: number; // 画布上的横坐标
      y: number; // 画布上的纵坐标
    };
    filter(field: string, callback: (value: string | number) => boolean): this;
    axis(option: boolean): this;
    axis(field: string, option: boolean): this;
    axis(field: string, axisConfig: ChartAxisConfig): this;
    guide(): ChartGuide;
    scale(scaleConfig: any): this;
    scale(field: string, scaleConfig: any): this;
    coord(
      type: 'rect' | 'polar' | 'theta' | 'helix',
      coordConfig?: {
        // 设置半径，值范围为 0 至 1
        radius: number;
        // 空心圆的半径，值范围为 0 至 1
        innerRadius: number;
        // 极坐标的起始角度，单位为弧度
        startAngle: number;
        // 极坐标的结束角度，单位为弧度
        endAngle: number;
      },
    ): Coordinate;
    animate: (option: boolean) => void;
    clear: () => void;
    changeData: (data: any) => void;
    changeVisible: (visible: string) => void;
    repaint: () => void;
    destroy: () => void;
    line: () => Geom;
    path: () => Geom;
    area: () => Geom;
    point: () => Geom;
    interval: () => Geom;
    polygon: () => Geom;
    schema: () => Geom;
    edge: () => Geom;
    heatmap: () => Geom;
    pointStack: () => Geom;
    pointJitter: () => Geom;
    pointDodge: () => Geom;
    intervalStack: () => Geom;
    intervalDodge: () => Geom;
    intervalSymmetric: () => Geom;
    areaStack:() => Geom;
    schemaDodge: () => Geom;
  }

  class View extends BashView {
    tooltip(option: boolean): this;
  }

  class Chart extends BashView {
    constructor(ChartProp: {});
    legend(option: boolean): this;
    legend(field: string, option: boolean): this;
    legend(field: string, legendConfig: LegendConfig): this;
    tooltip(tooltipConfig: TooltipConfig): this;
    tooltip(tooltipConfig: boolean): this;
    view: (
      option?: {
        start?: { x: number; y: number };
        end?: { x: number; y: number };
        padding?: number;
        animate?: boolean;
      },
    ) => View;
    forceFit(boolean): this;
    render: () => void;
    changeSize(width: number, height: number) : this;
    changeWidth(width: number): this;
    changeHeight(height: number): this;
    getSnapRecords(ponit: { x: number; y: number }): Array<number>;
    getAllGeoms(): Array<any>;
    toDataURL(): string;
    downloadImage: (name: string) => string;
    showTooltip: (ponit: { x: number; y: number }) => any;
    hideTooltip: () => any;
    on: (eventNane: string, event: any) => any;
    facet(
      type: 'rect' | 'list' | 'tree' | 'mirror' | 'matrix',
      option: {
        fileds?: Array<String>;
        showTitle?: boolean; // 显示标题
        autoSetAxis?: boolean; // 自动设置坐标轴的文本，避免重复和遮挡
        padding?: number; // 每个 view 之间的间距
        /**
         * 创建每个分面中的视图
         * @param  {object} view  视图对象
         * @param  {object} facet
         * @return {null}
         */
        eachView?: any;
        // 列标题
        colTitle?: {
          offsetY?: number;
          style?: G2.Styles.text;
        } | null;
        // 行标题
        rowTitle?: {
          offsetX?: number;
          style?: G2.Styles.text;
        } | null;
      },
    ): void;
  }

  /**
   * config interface
   */
  class Scale<T> {
    type?: 'identity' | 'linear' | 'cat' | 'time' | 'timeCat' | 'log' | 'pow';
    formatter?: (value: T) => string;
    range?: [number, number];
    alias?: string | number;
    tickCount?: number;
    ticks?: Array<any>;
    scale?(value: T): number;
    invert?(n: number): T;
    getTicks?(): any[];
    getText?(value: any): string;
  }

  class ScaleLinear extends Scale<number> {
    nice?: boolean;
    min?: number;
    max?: number;
    tickInterval?: number; // 用于指定坐标轴各个标度点的间距，是原始数据之间的间距差值，tickCount 和 tickInterval 不可以同时声明。
  }

  class ScaleCat<T> extends Scale<T> {
    range?: [number, number];
    values?: T[];
  }

  class ScaleLog extends Scale<number> {
    nice?: boolean;
    min?: number;
    max?: number;
    base?: number;
    tickInterval?: number;
  }

  class ScalePow extends Scale<number> {
    nice?: boolean;
    min?: number;
    max?: number;
    exponent?: number;
    tickInterval?: number;
  }

  class ScaleTime extends Scale<(number | string)> {
    nice?: boolean;
    min?: number | string;
    max?: number | string;
    mask?: string;
    tickInterval?: number;
  }

  class scaleTimeCat extends Scale<(number | string)> {
    nice?: boolean;
    mask?: string;
    values?: number[] | string[];
  }

  interface Shape {
    getLinearValue?(percent: any): any;
    registerShape?: (
      chartType: string,
      shapeName: string,
      config: {
        getPoints: any;
        draw: any;
      },
    ) => {
      parsePoint: any;
      parsePoints: any;
      parsePath: any;
    };
  }


  interface Animate {
    registerAnimation(
      animationType: string,
      animationName: string,
      animationFun: any,
    ): void;
  }

  type lodashFn = any;

  interface Util {
    each: lodashFn;
    map: lodashFn;
    isObject: lodashFn;
    isNumber: lodashFn;
    isString: lodashFn;
    isFunction: lodashFn;
    [other:string]: lodashFn;
  }

  class DomUtil {
    getBoundingClientRect: (
      node,
    ) => { top: number; bottom: number; left: number; right: number };
    getStyle: (dom: HTMLElement, name: string) => any;
    modifyCSS(dom: HTMLElement, css: any): HTMLElement;
    createDom(str: string): HTMLElement;
    getRatio(): number;
    getWidth(el: HTMLElement): number;
    getHeight(el: HTMLElement): number;
    getOuterWidth(el: HTMLElement): number;
    getOuterHeight(el: HTMLElement): number;
    addEventListener(
      target: HTMLElement,
      eventType: string,
      callback: (e: any) => void,
    );
    requestAnimationFrame(fn: () => void);
  }

  class MatrixUtil {
    mat3: any;
    vec2: any;
    vec3: any;
    transform: any;
  }
  class PathUtil {
    parsePathString(pathString: string): Array<any>;
    parsePathArray(pathArray): any;
    pathTocurve(path: Array<any>): any;
    pathToAbsolute(path: Array<any>): any;
    catmullRomToBezier(pointsArray: Array<any>): any;
    intersection(path1: Array<any>, path2: Array<any>): any;
  }
}
