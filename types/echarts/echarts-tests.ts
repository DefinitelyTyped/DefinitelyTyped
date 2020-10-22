import * as echarts from 'echarts';

const option: echarts.EChartOption = {
    series: [],
    title: {
        padding: 5,
    },
};

const testChartTitlePadding = (options: echarts.EChartTitleOption) => {
    options.padding = 5;
    options.padding = [5];
    options.padding = [5, 10];
    options.padding = [5, 10, 15];
    options.padding = [5, 10, 15, 20];
};

// id, type, and name are defined for every series type
const map = option.series!.map(s => [s.id, s.name, s.type]);
