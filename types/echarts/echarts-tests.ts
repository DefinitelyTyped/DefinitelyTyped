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

const seriesGraph: echarts.EChartOption.SeriesGraph = {};
// $ExpectType number | number[] | undefined
seriesGraph.autoCurveness;
seriesGraph.autoCurveness = 10;
seriesGraph.autoCurveness = [1, 2, 3, 4];
// $ExpectError
seriesGraph.autoCurveness = 'error';

// enumerate render item return type
type renderItemReturnType = echarts.EChartOption.SeriesCustom.RenderItemReturnGroup
    | echarts.EChartOption.SeriesCustom.RenderItemReturnPath
    | echarts.EChartOption.SeriesCustom.RenderItemReturnImage
    | echarts.EChartOption.SeriesCustom.RenderItemReturnText
    | echarts.EChartOption.SeriesCustom.RenderItemReturnRect
    | echarts.EChartOption.SeriesCustom.RenderItemReturnCircle
    | echarts.EChartOption.SeriesCustom.RenderItemReturnRing
    | echarts.EChartOption.SeriesCustom.RenderItemReturnSector
    | echarts.EChartOption.SeriesCustom.RenderItemReturnArc
    | echarts.EChartOption.SeriesCustom.RenderItemReturnPolygon
    | echarts.EChartOption.SeriesCustom.RenderItemReturnPolyline
    | echarts.EChartOption.SeriesCustom.RenderItemReturnLine
    | echarts.EChartOption.SeriesCustom.RenderItemReturnBezierCurve


// test the property `context` of renderItem parameter `param` dynamic type 
const renderItem: echarts.EChartOption.SeriesCustom.RenderItem = (param) => {
    const { context } = param;

    type CacheObjType = { customKey: number; custAccessKey: string; };

    const cacheObj:CacheObjType = {
        customKey: 1,
        custAccessKey: 'diff CustomParams'
    };

    // prettier-ignore
    context.customKey = 'error';    // $ExpectError

    

    if (context) {
        // $ExpectType { [key: string]: any; } & CacheObjType
        Object.assign(context,cacheObj)
    }else{
        // $ExpectType undefined
        context
    }

    const result: renderItemReturnType = {};
    //$ExpectType 'image' | 'text' | 'circle' | 'sector' | 'ring' | 'polygon' | 'polyline' | 'rect' | 'line' | 'bezierCurve' | 'arc' | 'group'
    result.type = 'image';
    result.type = 'text';
    result.type = 'circle';
    result.type = 'sector';
    result.type = 'ring';
    result.type = 'polygon';
    result.type = 'polyline';
    result.type = 'rect';
    result.type = 'line';
    result.type = 'bezierCurve';
    result.type = 'arc';
    result.type = 'group';
    return result;
}

type CustomParams = {
    customKey: string;
    customErrorKey?: number;
}

// test the key `context` of renderItem parameter `param` dynamic type 
const renderItemWithTypeParams: echarts.EChartOption.SeriesCustom.RenderItem<CustomParams> = (param) => {
    const { context } = param;

    // $ExpectError
    context.customKey = 'error';



    if (context) {
        // $ExpectType CustomParams
        Object.assign(context,{
            customKey: 'cache content'
        } as CustomParams)
        // $ExpectError
        context.customErrorKey = ''
    }

    const result: renderItemReturnType = {};
    //$ExpectType 'image' | 'text' | 'circle' | 'sector' | 'ring' | 'polygon' | 'polyline' | 'rect' | 'line' | 'bezierCurve' | 'arc' | 'group'
    result.type = 'image';
    result.type = 'text';
    result.type = 'circle';
    result.type = 'sector';
    result.type = 'ring';
    result.type = 'polygon';
    result.type = 'polyline';
    result.type = 'rect';
    result.type = 'line';
    result.type = 'bezierCurve';
    result.type = 'arc';
    result.type = 'group';
    return result;
} 