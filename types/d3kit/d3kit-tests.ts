function test_abstract_chart() {
    let el: Element,
        chart: d3kit.AbstractChart,
        options: d3kit.ChartOptions,
        margins: d3kit.ChartMargin,
        offsets: [number, number],
        defopts: d3kit.ChartOptions,
        fitopts: d3kit.FitOptions,
        watchop: d3kit.WatchOptions,
        events: string[],
        w: number, h:number, d: [number, number], a: any, b: boolean;

    // create a div, append to body, return Node as type Element
    el = document.body.appendChild(document.createElement('div')) as Element;

    // create examples of margins, offsets, options, fit options, watch options
    margins = { top: 20, right: 20, bottom: 20, left: 20};
    offsets = [0.5, 0.5];
    options = { initialWidth: 400, initialHeight: 300, margin: margins, offset: offsets };
    fitopts = { mode: 'basic', width: '90%', ratio: 4/3 };
    watchop = { mode: 'window', target: null, interval: 500 };

    /**
     * Test constructor
     */
    chart = new d3kit.AbstractChart(el); // with element
    chart = new d3kit.AbstractChart('div#chart'); // with selector
    chart = new d3kit.AbstractChart(el, options); // with element+options
    chart = new d3kit.AbstractChart('div#chart', options); // with selector+options

    /**
     * Test static functions
     */
    defopts = d3kit.AbstractChart.getDefaultOptions();
    events  = d3kit.AbstractChart.getCustomEventNames();

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
        chart: d3kit.SvgChart,
        options: d3kit.ChartOptions,
        margins: d3kit.ChartMargin,
        offsets: [number, number],
        svg: d3.Selection<d3.BaseType, any, d3.BaseType, any>,
        rootg: d3.Selection<d3.BaseType, any, d3.BaseType, any>,
        layers: d3kit.LayerOrganizer;

    // create a div, append to body, return Node as type Element
    el = document.body.appendChild(document.createElement('div')) as Element;

    // create examples of margins, offsets, options, fit options, watch options
    margins = { top: 20, right: 20, bottom: 20, left: 20};
    offsets = [0.5, 0.5];
    options = { initialWidth: 400, initialHeight: 300, margin: margins, offset: offsets };

    /**
     * Test constructor
     */
    chart = new d3kit.SvgChart(el); // with element
    chart = new d3kit.SvgChart('div#chart'); // with selector
    chart = new d3kit.SvgChart(el, options); // with element+options
    chart = new d3kit.SvgChart('div#chart', options); // with selector+options

    /**
     * Test properties
     */
    svg    = chart.svg;
    rootg  = chart.rootG;
    layers = chart.layers;
}

function test_canvaschart() {
    let el: Element,
        chart: d3kit.CanvasChart,
        options: d3kit.ChartOptions,
        margins: d3kit.ChartMargin,
        offsets: [number, number],
        context: CanvasRenderingContext2D;

    // create a div, append to body, return Node as type Element
    el = document.body.appendChild(document.createElement('div')) as Element;

    // create examples of margins, offsets, options, fit options, watch options
    margins = { top: 20, right: 20, bottom: 20, left: 20};
    offsets = [0.5, 0.5];
    options = { initialWidth: 400, initialHeight: 300, margin: margins, offset: offsets, pixelRatio: 1 };

    /**
     * Test constructor
     */
    chart = new d3kit.CanvasChart(el); // with element
    chart = new d3kit.CanvasChart('div#chart'); // with selector
    chart = new d3kit.CanvasChart(el, options); // with element+options
    chart = new d3kit.CanvasChart('div#chart', options); // with selector+options

    /**
     * Test canvas chart functions
     */
    context = chart.getContext2d();
    options = d3kit.CanvasChart.getDefaultOptions();
    chart.clear();
}

function test_layer_organizer() {
    let selection: d3.Selection<d3.BaseType, any, d3.BaseType, any>,
        layer: d3.Selection<d3.BaseType, any, d3.BaseType, any>,
        layers: d3kit.LayerOrganizer,
        hasXAxis: boolean;

    selection = d3.select('svg');

    /**
     * Test constructor
     */
    layers = new d3kit.LayerOrganizer(selection);        // without specifying tag
    layers = new d3kit.LayerOrganizer(selection, 'div'); // specifying tag

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

    dbouncd = d3kit.helper.debounce(aFuncxn, 300);
    merged1 = d3kit.helper.extend(simple1, simple2);
    merged2 = d3kit.helper.deepExtend(simple1, complex);
    aFuncxn = d3kit.helper.functor(aFuncxn); // with a function argument
    aFuncxn = d3kit.helper.functor(simple1); // with a value argument
    isObj   = d3kit.helper.isObject(anObject);
    isFunc  = d3kit.helper.isFunction(aFuncxn);
    kebabed = d3kit.helper.kebabCase("a string to convert to kebab case");
    throtld = d3kit.helper.throttle(aFuncxn, 300);
}
