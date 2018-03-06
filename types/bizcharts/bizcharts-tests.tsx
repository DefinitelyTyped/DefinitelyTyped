import * as React from 'react';
import * as BizCharts from 'bizcharts';
import { Chart, View, Shape, Tooltip, Coord, Axis, Legend, Guide, Facet } from 'bizcharts';

const g2: any = BizCharts.G2;

const global: G2.Global = g2.Global;
global.setTheme('dark');

// lodash function
const util: G2.Util = {
  each: ()=>{},
  map: ()=>{},
  isObject: ()=>{},
  isNumber: ()=>{},
  isString: ()=>{},
  isFunction: ()=>{},
  other: ''
};
// same as use BizCharts.Util
const util2: BizCharts.Util = util;
util2.each();
util2.test();

const textStyle: G2.Styles.text = {
  fill: '#333',
}

const axisLabel: G2.AxisLabel = {
  offset: 10,
}

g2.track();

const chartProps: BizCharts.ChartProps = {
  height: 100,
  className: '123',
}


const viewProps: BizCharts.ViewProps = {
  start: {x: 0, y: 0.5},
  filter: ['x', (val) => {return val > 20;}]
}

const tooltipCfg: BizCharts.TooltipProps = {
  containerTpl: '<div class="ac-tooltip" style="position:absolute;visibility: hidden;background: rgba(255, 44, 52, 0.5);color: #fff;border-radius: 50%;padding: 10px 20px;text-align: center;"><h4 class="ac-title" style="margin: 0;padding: 5px 0;border-bottom: 1px solid #fff;"></h4><table class="ac-list custom-table" style="padding: 5px 0;"></table></div>',
  itemTpl: '<tr><td style="display:none">{index}</td><td style="color:{color}">{name}</td><td>{value}k</td></tr>'
};

interface myChartsState {}


class MyCharts extends React.Component<{}, myChartsState> {
  render() : JSX.Element {
    return (
      <div>
        <Chart {...chartProps}>
          <Tooltip {...tooltipCfg}/>
          <Coord scale={[0.7, 1.2]} />
          <Axis name="sales" />
          <View {...viewProps}>
          </View>
        </Chart>
        <Chart height={100}>
          <Legend />
          <Legend
            custom={true}
            items={[
              { value: 'waiting', fill: '#3182bd', marker: 'shape' },
              { value: 'call', fill: '#99d8c9', marker: 'shape' },
              { value: 'people', fill: '#fdae6b', marker: 'shape' },
            ]}
            onHover={ev => {}} // 自定义 hover 事件
            onClick={ev => {}} // 自定义 click 事件
          />
          <View data={[1]} filter={['x', (val) => {return val > 20;}]}>
          </View>
          <Guide>
            <Guide.Line
              top={true} // 指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
              start={[]} // 辅助线起始位置，值为原始数据值，支持 callback
              end={[]}  // 辅助线结束位置，值为原始数据值，支持 callback
              lineStyle= {{
                stroke: '#999', // 线的颜色
                lineDash: [ 0, 2, 2 ], // 虚线的设置
                lineWidth: 3 // 线的宽度
              }} // 图形样式配置
              text={{
                position: 'start', // 文本的显示位置
                autoRotate: true, // 是否沿线的角度排布，默认为 true
                content: 'test', // 文本的内容
                offsetX: 100, // x 方向的偏移量
                offsetY: 123 // y 方向的偏移量
              }}
            />
          </Guide>
          <Facet type='rect' fields = {['cut','clarity']}>
            {(view, facet)=>{
              view.point().position('carat*price').color('cut');
            }}
          </Facet>
        </Chart>
      </div>
    )
  }
}
