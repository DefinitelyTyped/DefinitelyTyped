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

const testAxisLabelColor = (options: echarts.EChartOption.XAxis) => {
    options.axisLabel = {
        color: 'red',
    };
    options.axisLabel = {
        color: (val: string) => {
        if (val === '300') {
            return 'red';
        } else {
            return 'blue';
        }
        },
    };
};

// id, type, and name are defined for every series type
const map = option.series!.map(s => [s.id, s.name, s.type]);

const seriesGraph: echarts.EChartOption.SeriesGraph = { };
// $ExpectType number | number[] | undefined
seriesGraph.autoCurveness;
seriesGraph.autoCurveness = 10;
seriesGraph.autoCurveness = [1, 2, 3, 4];
// @ts-expect-error
seriesGraph.autoCurveness = 'error';
