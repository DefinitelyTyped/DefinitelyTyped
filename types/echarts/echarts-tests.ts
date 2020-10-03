import * as echarts from 'echarts'

const option:echarts.EChartOption = {
    series:[]
};

// id, type, and name are defined for every series type
const map = option.series!.map( s => [s.id, s.name, s.type]);
