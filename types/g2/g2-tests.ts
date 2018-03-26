import * as G2 from 'g2';

const backgroundStyle: G2.Styles.background = {
  fill: "#aaa", // 图表背景色
  fillOpacity: .5, // 图表背景透明度
  stroke: "#aaa", // 图表边框颜色
  strokeOpacity: .5, // 图表边框透明度
  opacity: .5, // 图表整体透明度
  lineWidth: 1, // 图表边框粗度
  radius: 5 // 图表圆角大小 
}
const data = [
  { type: 0, value: 1 },
  { type: 1, value: 2 },
  { type: 2, value: 3 },
  { type: 2, value: 3, color: '#f80' },
];
let str: string;
let num: number;

// 创建 Chart 
const chart = new G2.Chart({
  container: 'div',
  width: 123,
  height: 123,
  padding: {x:1,y:1},
  background: backgroundStyle,
  plotBackground: backgroundStyle,
  forceFit: true,
  animate: false,
  pixelRatio: 123,
  data: []
});

const chart1 = new G2.Chart({
  container: document.getElementById('c1'),
  width: 1000,
  height: 500
});

chart.source(data, {
  type: {
    type: 'cat', // 声明 type 字段为分类类型
    values: [ 'A', 'B', 'C' ], // 重新显示的值
    alias: '类型' // 设置属性的别名
  }
});

chart.scale('x', {
  type: 'cat', // 声明 type 字段为分类类型
  values: [ 'A', 'B', 'C' ], // 重新显示的值
  alias: '类型' // 设置属性的别名  
});

chart.scale({
  x: {
    type: 'cat', // 声明 type 字段为分类类型
    values: [ 'A', 'B', 'C' ], // 重新显示的值
    alias: '类型' // 设置属性的别名
  },
  y: {
    type: 'cat'
  }
});

chart.coord('polar', {
  radius: 0.5, // 设置半径，值范围为 0 至 1
  innerRadius: 0.3, // 空心圆的半径，值范围为 0 至 1
  startAngle: -1 * Math.PI / 2, // 极坐标的起始角度，单位为弧度
  endAngle: 3 * Math.PI / 2 // 极坐标的结束角度，单位为弧度
});

chart.axis('x', {
  line: {
    stroke: '#ff8800'
  },
  label: {
    textStyle: {
      textAlign: 'center', // 文本对齐方向，可取值为： start middle end
      fill: '#404040', // 文本的颜色
      fontSize: '12', // 文本大小
      fontWeight: 'bold', // 文本粗细
      rotate: 30, 
      textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
    },
    formatter: (text, item, index) => '',
  },
  title: {
    textStyle: {
      textAlign: 'center', // 文本对齐方向，可取值为： start middle end
      fill: '#404040', // 文本的颜色
      fontSize: '12', // 文本大小
      fontWeight: 'bold', // 文本粗细
      rotate: 30, // 文本旋转角度，以角度为单位，仅当 autoRotate 为 false 时生效
      textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
    },
    position: 'start'
  },
  tickLine: {
    lineWidth: 1, // 刻度线宽
    stroke: '#ccc', // 刻度线的颜色
    strokeOpacity: 0.5, // 刻度线颜色的透明度
    length: 5, // 刻度线的长度，可以为负值（表示反方向渲染）
  },
  subTickLine: {
    lineWidth: 1, // 次刻度线宽
    stroke: '#ddd', // 次刻度线颜色
    strokeOpacity: 0.5, // 次刻度线颜色的透明度
    length: 3 // 次刻度线的长度，可以为负值（表示反方向渲染）
  },
  grid: {
    align: 'center', // 声明网格顶点从两个刻度中间开始，默认从刻度点开始
    type: 'line', // 声明网格的类型，line 表示线，polygon 表示矩形框
    // 当网格类型 type 为 line 时，使用 lineStyle 设置样式
    lineStyle: {
      stroke: '#d9d9d9', // 网格线的颜色
      lineWidth: 1, // 网格线的粗细
      lineDash: [4, 4 ] // 网格线的虚线配置，第一个参数描述虚线的实部占多少像素，第二个参数描述虚线的虚部占多少像素
    },
    alternateColor: [ '#f80', '#ccc' ], // 当网格类型 type 为 polygon 时，使用 alternateColor 为网格设置交替的颜色，指定一个值则先渲染奇数层，两个值则交替渲染
    hideFirstLine: true , // 是否隐藏第一条网格线，默认为 false
    hideLastLine: true  // 是否隐藏最后一条网格线，默认为 false
  }
});

// 不显示所有的图例
chart.legend(false);
// 不显示 field 字段对应的图例
chart.legend('field', false);
// 为数据字段 field 对应的图例进行配置
const legendConfig: G2.LegendConfig = {
  position: 'right',
  title: {
    textAlign: 'center', // 文本对齐方向，可取值为： start middle end
    fill: '#404040', // 文本的颜色
    fontSize: '12', // 文本大小
    fontWeight: 'bold', // 文本粗细
    rotate: 30, // 文本旋转角度，以角度为单位，仅当 autoRotate 为 false 时生效
    textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
  },
  background: {
    fill: '#000',
    fillOpacity: 0.3
  },
  itemFormatter(val) {
    return val; // val 为每个图例项的文本值
  },
  marker: (x, y, r, ctx) => {
    ctx.lineWidth = 1;
    ctx.fillStyle = ctx.strokeStyle;
    ctx.moveTo(x - r - 3, y);
    ctx.lineTo(x + r + 3, y);
    ctx.arc(x, y, r - 1, 0, Math.PI * 2, false);
    ctx.fill();
  },
  textStyle: {
    textAlign: 'center', // 文本对齐方向，可取值为： start middle end
    fill: '#404040', // 文本的颜色
    fontSize: '12', // 文本大小
    fontWeight: 'bold', // 文本粗细
    rotate: 30, // 文本旋转角度，以角度为单位，仅当 autoRotate 为 false 时生效
    textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
  },
  clickable: true,
  hoverable: true,
  onHover: ev => {},
  onClick: ev => {},
  containerTpl: '<div class="g2-legend" style="position:absolute;top:20px;right:60px;width:auto;">'
  + '<h4 class="g2-legend-title"></h4>' 
  + '<ul class="g2-legend-list" style="list-style-type:none;margin:0;padding:0;"></ul>'
  + '</div>',
  itemTpl: '<li class="g2-legend-list-item item-{index} {checked}" data-color="{originColor}" data-value="{originValue}" style="cursor: pointer;font-size: 14px;">'
  + '<i class="g2-legend-marker" style="width:10px;height:10px;border-radius:50%;display:inline-block;margin-right:10px;background-color: {color};"></i>'
  + '<span class="g2-legend-text">{value}</span>'
  + '</li>',

}
chart.legend('field', legendConfig);

// 关闭 tooltip 功能
chart.tooltip(false);

// 配置 tooltip
const tooltipConfig: G2.TooltipConfig = {
  showTitle: false,
  inPlot: false,
  title: '',
  crosshairs: {
    style: {
      fill: '#aaa',
      lineDash: [1,2,1,1,2]
    }
  },
  containerTpl: '<div class="g2-tooltip">'
  + '<div class="g2-tooltip-title" style="margin:10px 0;"></div>'
  + '<ul class="g2-tooltip-list"></ul>'
  + '</div>',
  'g2-tooltip': {
    font: '',
    border: ''
  }
}
chart.tooltip({});
chart.tooltip(tooltipConfig);

// 绘制辅助线
chart.guide().line({
  top: true, // 指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  start: () => [1,2], // 辅助线起始位置，值为原始数据值，支持 callback
  end: {x: 1, y:1}, // 辅助线结束位置，值为原始数据值，支持 callback
  lineStyle: {
    stroke: '#999', // 线的颜色
    lineDash: [ 0, 2, 2 ], // 虚线的设置
    lineWidth: 3 // 线的宽度
  }, // 图形样式配置
  text: {
    position: '39%', // 文本的显示位置
    autoRotate: true, // 是否沿线的角度排布，默认为 true
    style: {}, // 文本图形样式配置
    content: '', // 文本的内容
    offsetX: 123, // x 方向的偏移量
    offsetY: 123 // y 方向的偏移量
  }
});

chart.guide().text({
  top: true, // 指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  position: { time: '2010-01-01', value: 200 }, // 文本的起始位置，值为原始数据值，支持 callback
  content: '', // 显示的文本内容
  style: {
    fill: '#666', // 文本颜色
    fontSize: '12', // 文本大小
    fontWeight: 'bold', // 文本粗细
    rotate: 30 // 旋转角度
  }, // 文本的图形样式属性
  offsetX: 12, // x 方向的偏移量
  offsetY: 12 // y 方向偏移量
});

// 辅助图片 image，只是指定了 start，则该点表示图片左上角坐标
chart.guide().image({
  top: true, // 指定 giude 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  start: [], // 图片起始位置， 值为原始数据值，支持 callback
  src: '', // 图片路径
  width: 100,
  height: 100,
  offsetX: 10, // x 方向的偏移量
  offsetY: 10 // y 方向偏移量
});
// 辅助图片 image，通过指定 start 和 end 确定图片的位置和宽高
chart.guide().image({
  top: true, // 指定 giude 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层 
  start: [], // 图片起始位置， 值为原始数据值，支持 callback
  end: [], // 图片结束位置， 值为原始数据值，支持 callback
  src: '', // 图片路径
  offsetX: 10, // x 方向的偏移量
  offsetY: 10 // y 方向偏移量
});
// 辅助框
chart.guide().region({
  top: true, // 指定 giude 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  start: [], // 辅助框起始位置，值为原始数据值，支持 callback 
  end: [],// 辅助框结束位置，值为原始数据值，支持 callback
  style: {
    lineWidth: 0, // 辅助框的边框宽度
    fill: '#f80', // 辅助框填充的颜色
    fillOpacity: 0.1, // 辅助框的背景透明度
    stroke: '#ccc' // 辅助框的边框颜色设置
  } // 辅助框的图形样式属性
});
// 辅助HTML
chart.guide().html({
  position: [], // html 的中心位置， 值为原始数据值，支持 callback
  alignX: 'left',
  alignY: 'middle',
  offsetX: 10,
  offsetY: 10,
  html: '<div></div>', // html 代码
  zIndex: 100
});

chart.guide().arc({
  top: true, // 指定 giude 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  start: [], // 辅助框起始位置，值为原始数据值，支持 callback 
  end: [],// 辅助框结束位置，值为原始数据值，支持 callback
  style: {} // 图形样式属性
});

// 用于生成分面
chart.facet('rect', {
  fileds: [ 'field1', 'field2'],
  showTitle: true, // 显示标题
  autoSetAxis: true, // 自动设置坐标轴的文本，避免重复和遮挡
  padding: 10, // 每个 view 之间的间距
  /**
   * 创建每个分面中的视图
   * @param  {object} view  视图对象
   * @param  {object} facet facet中有行列等信息，常见属性：data rows cols rowIndex colIndex rowField colField
   * @return {null}
   */
  eachView: (view, facet) => null,
  // 列标题
  colTitle: {
    offsetY: -15,
    style: {
      fontSize: 14,
      textAlign: 'center',
      fill: '#444'
    }
  },
  // 行标题
  rowTitle: {
    offsetX: 15,
    style: {
      fontSize: 14,
      textAlign: 'center',
      rotate: 90,
      fill: '#444'
    }
  }
});

// 过滤数据
chart.filter('x', val => {
  // val 参数为 x 字段对应的数据值。
  return val > 20; // 图表将会只渲染数值大于 20 的数值。
});

// 创建视图
chart.view({
  start: { x: 0, y: 0 },
  end: { x: 0.5, y: 0.5 },
  padding: 0,
  animate: true
});

chart.animate(true);
chart.forceFit(true);

chart.render();
chart.clear();
chart.repaint();
chart.destroy();
chart.changeData(data);
chart.changeSize(100,100)
     .changeWidth(100)
     .changeHeight(100);
chart.getXScale<G2.ScaleCat<string>>().values;
chart.getYScales<G2.ScaleLog>()[0].base;
chart.getXY().x;
chart.getSnapRecords({x:1, y:2});
str = chart.toDataURL();
chart.hideTooltip();

// 事件
chart.on('mousedown', ev => {});
chart.on('mousemove', ev => {});
chart.on('mouseleave', ev => {});
chart.on('mouseup', ev => {});
chart.on('click', ev => {});
chart.on('dblclick', ev => {});
chart.on('touchstart', ev => {});
chart.on('touchmove', ev => {});
chart.on('touchend', ev => {});

// Scale
const defs: {
  'month': G2.ScaleCat<string>,
} = {
  'month':{
    type: 'cat',
    values: [ '一月','二月','三月','四月','五月','六月','七月' ] // 这时候 month 的原始值是索引值
  }
};
chart.source(data, defs);

// 创建View
chart.view();

const view: G2.View = chart.view({
  start: {
    x: 0,
    y: 0
  }, // 视图绘图区域的起始点，x、y 数值在 0 - 1 范围内
  end: {
    x: 1,
    y: 1
  } // 视图绘图区域的结束点，x、y 数值在 0 - 1 范围内
});

view.tooltip(true);

// Geom
chart.interval()
.position('')
.size('')
.color('')
.shape('')
.opacity('')
.adjust('')
.tooltip('')
.label('')
.style('')
.select(true);

chart.area().position('x*y').adjust([ 'stack', 'symmetric' ]);
chart.line().position('x*y');
chart.line().position([ 'x', 'y' ]);

chart.line().color('red'); // 常量颜色
chart.line().color('type'); // 对 type 字段进行映射，使用内置的颜色
chart.line().color('type', [ 'red', 'blue' ]) // 指定颜色
chart.line().color('type', (type) => { // 通过回调函数
  if (type === 'a') {
    return 'red';
  }
  return 'blue';
});
chart.line().color('type*value', (type, value) => { //多个参数，通过回调函数
  if (type === 'a' && value > 100) {
    return 'red';
  }
  return 'blue';
});

chart.line().animate({
  appear: {
    // 初始入场动画配置
  },
  enter: {
    // 更新时出现动画配置
  },
  leave: {
    // 更新时销毁动画配置
  },
  update: {
    // 更新时改变动画配置
  }
});

const Shape = G2.Shape; // 全局shape ，非实例
const shapeObj = Shape.registerShape('geomType', 'shapeName', { 
  getPoints(pointInfo) {
    // 获取每种 shape 绘制的关键点
  },
  draw(cfg, container) {
    // 自定义最终绘制的逻辑
  }
});

Shape.registerShape('interval', 'rect', {
  getPoints(pointInfo) {
    // ...
  },
  draw(cfg, container) {
    // ...
  }
});

G2.Animate.registerAnimation('appear', 'delayScaleInY', function(shape, animateCfg) {
  const box = shape.getBBox(); // 获取柱子包围盒
  const origin = shape.get('origin'); // 获取柱子原始数据
  const points = origin.points; // 获取柱子顶点
  // 计算柱子的变换中点
  const centerX = (box.minX + box.maxX) / 2;
  let centerY;
  if (points[0].y - points[1].y <= 0) { // 当顶点在零点之下
    centerY = box.maxY;
  } else {
    centerY = box.minY;
  }
  // 设置初始态
  shape.attr('transform', [
    [ 't', -centerX, -centerY ],
    [ 's', 1, 0.1 ],
    [ 't', centerX, centerY ]
  ]);
  const index = shape.get('index');
  let delay = animateCfg.delay;
  if (G2.Util.isFunction(delay)) {
    delay = animateCfg.delay(index);
  }
  let easing = animateCfg.easing;
  if (G2.Util.isFunction(easing)) {
    easing = animateCfg.easing(index);
  }
  // 设置动画目标态
  shape.animate({
    transform: [
      [ 't', -centerX, -centerY ],
      [ 's', 1, 10 ],
      [ 't', centerX, centerY ]
    ]
  }, animateCfg.duration, easing, animateCfg.callback, delay);
});
