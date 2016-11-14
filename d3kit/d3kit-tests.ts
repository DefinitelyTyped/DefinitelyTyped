/// <reference path="index.d.ts" />
/// <reference types="d3" />

function test_abstract_chart() {
    let el: Element,
        chart: AbstractChart,
        options: ChartOptions,
        margins: ChartMargin,
        offsets: ChartOffset,
        defopts: ChartOptions,
        fitopts: FitOptions,
        watchop: WatchOptions,
        events: string[],
        w: number, h:number, d: [number, number], a: any, b: boolean;

    // create a div, append to body, return Node as type Element
    el = document.body.appendChild(document.createElement('div')) as Element;

    // create examples of margins, offsets, options, fit options, watch options
    margins = { top: 20, right: 20, bottom: 20, left: 20};
    offsets = { x: 0.5, y: 0.5 };
    options = { initialWidth: 400, initialHeight: 300, margin: margins, offset: offsets };
    fitopts = { mode: 'basic', width: '90%', ratio: 4/3 };
    watchop = { mode: 'window', target: null, interval: 500 };

    /**
     * Test constructor
     */
    chart = new AbstractChart(el); // with element
    chart = new AbstractChart('div#chart'); // with selector
    chart = new AbstractChart(el, options); // with element+options
    chart = new AbstractChart('div#chart', options); // with selector+options

    /**
     * Test static functions
     */
    defopts = AbstractChart.getDefaultOptions();
    events  = AbstractChart.getCustomEventNames();

    /**
     * Test getters
     */
    w = chart.getInnerWidth();
    h = chart.getInnerHeight();
    w = chart.width();
    h = chart.height();
    d = chart.dimension();
    a = chart.data();
    margins = chart.margin();
    offsets = chart.offset();
    options = chart.options();
    events  = chart.getCustomEventNames();

    /**
     * Test setters
     */
    chart.width(w);
    chart.height(h);
    chart.dimension(d);
    chart.data([1, 2, 3, 4, 5, 6]);
    chart.margin(margins);
    chart.offset(offsets);
    chart.options(options);

    /**
     * Test booleans
     */
    b = chart.hasData();
    b = chart.hasNonZeroArea();

    /**
     * Test events
     */
    chart.dimension(d).updateDimensionNow();
    chart.setupDispatcher(['click', 'mouseover']);
    chart.fit(fitopts); // without watch options
    chart.fit(fitopts, watchop); // with watch options
    chart.stopFitWatcher();
    chart.on('mouseover', () => { chart.stopFitWatcher(); });
    chart.off('mouseover');
    chart.destroy();
}

function test_svgchart() {
    let el: Element,
        chart: SvgChart,
        options: ChartOptions,
        margins: ChartMargin,
        offsets: ChartOffset,
        svg: SVGElement, rootg: SVGElement, layers: LayerOrganizer;

    // create a div, append to body, return Node as type Element
    el = document.body.appendChild(document.createElement('div')) as Element;

    // create examples of margins, offsets, options, fit options, watch options
    margins = { top: 20, right: 20, bottom: 20, left: 20};
    offsets = { x: 0.5, y: 0.5 };
    options = { initialWidth: 400, initialHeight: 300, margin: margins, offset: offsets };

    /**
     * Test constructor
     */
    chart = new SvgChart(el); // with element
    chart = new SvgChart('div#chart'); // with selector
    chart = new SvgChart(el, options); // with element+options
    chart = new SvgChart('div#chart', options); // with selector+options

    /**
     * Test properties
     */
    svg    = chart.svg;
    rootg  = chart.rootG;
    layers = chart.layers;
}

function test_canvaschart() {
    let el: Element,
        chart: CanvasChart,
        options: ChartOptions,
        margins: ChartMargin,
        offsets: ChartOffset,
        context: CanvasRenderingContext2D;

    // create a div, append to body, return Node as type Element
    el = document.body.appendChild(document.createElement('div')) as Element;

    // create examples of margins, offsets, options, fit options, watch options
    margins = { top: 20, right: 20, bottom: 20, left: 20};
    offsets = { x: 0.5, y: 0.5 };
    options = { initialWidth: 400, initialHeight: 300, margin: margins, offset: offsets, pixelRatio: 1 };

    /**
     * Test constructor
     */
    chart = new CanvasChart(el); // with element
    chart = new CanvasChart('div#chart'); // with selector
    chart = new CanvasChart(el, options); // with element+options
    chart = new CanvasChart('div#chart', options); // with selector+options

    /**
     * Test canvas chart functions
     */
    context = chart.getContext2d();
    options = CanvasChart.getDefaultOptions();
    chart.clear();
}

function test_layer_organizer() {
    let selection: d3.Selection<d3.BaseType, any, d3.BaseType, any>,
        layer: d3.Selection<d3.BaseType, any, d3.BaseType, any>,
        layers: LayerOrganizer,
        hasXAxis: boolean;

    selection = d3.select('svg');

    /**
     * Test constructor
     */
    layers = new LayerOrganizer(selection);        // without specifying tag
    layers = new LayerOrganizer(selection, 'div'); // specifying tag

    /**
     * Test layer creation
     */
    layers.create('graph');
    layers.create(['graph', 'highlight']);
    layers.create({'graph': [{'axes':['x-axis', 'y-axis']}, {'labels':['x-label', 'y-label', 'title']}]});
    layers.create([{'axes':['x-axis', 'y-axis']}, {'labels':['x-label', 'y-label', 'title']}]);

    /**
     * Test other layer organizer functions
     */
    layer    = layers.get('x-axis');
    hasXAxis = layers.has('x-axis');
}

function test_helper() {
    let simple1: Object = { "one": 1 },
        simple2: Object = { "two": 2 },
        complex: Object = { "fruit": ["apple", "pear", "grape"], "prez": { "fn": "Barack", "ln": "Obama" } },
        merged1: Object, merged2: Object,
        anObject: Object = {"this": "isanobject"}, isObj: boolean,
        aFuncxn = () => "this is a function", isFunc: boolean,
        kebabed: string, dbouncd: any, throtld: any;

    dbouncd = helper.debounce(aFuncxn, 300);
    merged1 = helper.extend(simple1, simple2);
    merged2 = helper.deepExtend(simple1, complex);
    aFuncxn = helper.functor(aFuncxn); // with a function argument
    aFuncxn = helper.functor(simple1); // with a value argument
    isObj   = helper.isObject(anObject);
    isFunc  = helper.isFunction(aFuncxn);
    kebabed = helper.kebabCase("a string to convert to kebab case");
    throtld = helper.throttle(aFuncxn, 300);
}