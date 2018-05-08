function test_base() {
    let tb: d3kit.Base;
    let another: d3kit.Base;
    let options: d3kit.ChartOptions;
    let margins: d3kit.ChartMargin;
    let offsets: [number, number];
    let defopts: d3kit.ChartOptions;
    let w: number;
    let h: number;
    let d: [number, number];
    let p: number;

    // create examples of margins, offsets, options
    margins = { top: 20, right: 20, bottom: 20, left: 20};
    offsets = [0.5, 0.5];
    options = { initialWidth: 400, initialHeight: 300, margin: margins, offset: offsets };

    /**
     * Test constructor
     */
    tb = new d3kit.Base();        // empty
    tb = new d3kit.Base(options); // with options
    another = new d3kit.Base();

    /**
     * Test static function
     */
    defopts = d3kit.Base.getDefaultOptions();        // without options
    defopts = d3kit.Base.getDefaultOptions(options); // with options

    /**
     * Test getters
     */
    w = tb.width();
    h = tb.height();
    d = tb.dimension();
    p = tb.pixelRatio();
    margins = tb.margin();
    offsets = tb.offset();

    /**
     * Test setters
     */
    tb.width(w);
    tb.height(h);
    tb.dimension(d);
    tb.margin(margins);
    tb.offset(offsets);
    tb.pixelRatio(window.devicePixelRatio);
    tb.copyDimension(another);

    /**
     * Test events
     */
    tb.dimension(d).updateDimensionNow();
}

function test_abstract_plate() {
    let el: Element;
    let margins: d3kit.ChartMargin;
    let offsets: [number, number];
    let plate: d3kit.AbstractPlate;
    let options: d3kit.ChartOptions;
    let sel: d3.Selection<d3.BaseType, any, d3.BaseType, any>;

    // create a div, append to body, return Node as type Element
    el = document.body.appendChild(document.createElement('div')) as Element;

    // create example of options
    margins = { top: 20, right: 20, bottom: 20, left: 20};
    offsets = [0.5, 0.5];
    options = { initialWidth: 400, initialHeight: 300, margin: margins, offset: offsets };

    /**
     * Test constructor
     */
    plate = new d3kit.AbstractPlate(el);          // without options
    plate = new d3kit.AbstractPlate(el, options); // with options

    /**
     * Test functions
     */
    el  = plate.getNode();
    sel = plate.getSelection();
}

function test_canvas_plate() {
    let el: Element;
    let margins: d3kit.ChartMargin;
    let offsets: [number, number];
    let plate: d3kit.CanvasPlate;
    let options: d3kit.ChartOptions;
    let sel: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    let context: CanvasRenderingContext2D;

    // create example of options
    margins = { top: 20, right: 20, bottom: 20, left: 20};
    offsets = [0.5, 0.5];
    options = { initialWidth: 400, initialHeight: 300, margin: margins, offset: offsets };

    /**
     * Test constructor
     */
    plate = new d3kit.CanvasPlate();        // without options
    plate = new d3kit.CanvasPlate(options); // with options

    /**
     * Test functions
     */
    el  = plate.getNode();
    sel = plate.getSelection();
    plate = plate.clear();
    context = plate.getContext2d();
}

function test_div_plate() {
    let el: Element;
    let margins: d3kit.ChartMargin;
    let offsets: [number, number];
    let plate: d3kit.DivPlate;
    let options: d3kit.ChartOptions;
    let sel: d3.Selection<d3.BaseType, any, d3.BaseType, any>;

    // create example of options
    margins = { top: 20, right: 20, bottom: 20, left: 20};
    offsets = [0.5, 0.5];
    options = { initialWidth: 400, initialHeight: 300, margin: margins, offset: offsets };

    /**
     * Test constructor
     */
    plate = new d3kit.DivPlate();        // without options
    plate = new d3kit.DivPlate(options); // with options

    /**
     * Test functions
     */
    el  = plate.getNode();
    sel = plate.getSelection();
}

function test_svg_plate() {
    let el: Element;
    let margins: d3kit.ChartMargin;
    let offsets: [number, number];
    let plate: d3kit.SvgPlate;
    let options: d3kit.ChartOptions;
    let sel: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    let rootg: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    let layers: d3kit.LayerOrganizer;

    // create example of options
    margins = { top: 20, right: 20, bottom: 20, left: 20};
    offsets = [0.5, 0.5];
    options = { initialWidth: 400, initialHeight: 300, margin: margins, offset: offsets };

    /**
     * Test constructor
     */
    plate = new d3kit.SvgPlate();        // without options
    plate = new d3kit.SvgPlate(options); // with options

    /**
     * Test properties
     */
    rootg = plate.rootG;
    layers = plate.layers;

    /**
     * Test functions
     */
    el  = plate.getNode();
    sel = plate.getSelection();
}

function test_abstract_chart() {
    let el: Element;
    let chart: d3kit.AbstractChart;
    let another: d3kit.AbstractChart;
    let options: d3kit.ChartOptions;
    let margins: d3kit.ChartMargin;
    let offsets: [number, number];
    let defopts: d3kit.ChartOptions;
    let fitopts: d3kit.FitOptions;
    let watchop: d3kit.WatchOptions;
    let events: string[];
    let w: number;
    let h: number;
    let d: [number, number];
    let a: any;
    let b: boolean;
    let p: number;
    let plate: d3kit.AbstractPlate;

    // create a div, append to body, return Node as type Element
    el = document.body.appendChild(document.createElement('div')) as Element;

    // create examples of margins, offsets, options, fit options, watch options
    margins = { top: 20, right: 20, bottom: 20, left: 20};
    offsets = [0.5, 0.5];
    options = { initialWidth: 400, initialHeight: 300, margin: margins, offset: offsets };
    fitopts = { mode: 'basic', width: '90%', ratio: 4 / 3 };
    watchop = { mode: 'window', target: null, interval: 500 };
    plate = new d3kit.AbstractPlate(el);

    /**
     * Test constructor
     */
    chart = new d3kit.AbstractChart(el); // with element
    chart = new d3kit.AbstractChart('div#chart'); // with selector
    chart = new d3kit.AbstractChart(el, options); // with element+options
    chart = new d3kit.AbstractChart('div#chart', options); // with selector+options
    another = new d3kit.AbstractChart(el);

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
    p = chart.pixelRatio();
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
    chart.pixelRatio(window.devicePixelRatio);
    chart.copyDimension(another);

    /**
     * Test booleans
     */
    b = chart.hasData();
    b = chart.hasNonZeroArea();

    /**
     * Test plate functions
     */
    plate = chart.addPlate('a-plate', plate, true); // with doNotAppend
    chart = chart.addPlate('a-plate', plate);       // without doNotAppend
    chart = chart.removePlate('a-plate');

    /**
     * Test events
     */
    chart.dimension(d).updateDimensionNow();
    chart.setupDispatcher(['click', 'mouseover']);
    chart.fit(fitopts); // without watch options
    chart.fit(fitopts, true); // with boolean for watch options
    chart.fit(fitopts, watchop); // with explicit watch options
    chart.stopFitWatcher();
    chart.on('mouseover', () => { chart.stopFitWatcher(); });
    chart.off('mouseover');
    chart.destroy();
}

function test_svg_chart() {
    let el: Element;
    let chart: d3kit.SvgChart;
    let options: d3kit.ChartOptions;
    let margins: d3kit.ChartMargin;
    let offsets: [number, number];
    let svg: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    let rootg: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    let layers: d3kit.LayerOrganizer;
    let plate: d3kit.SvgPlate;

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
     * Test plate functions
     */
    plate = new d3kit.SvgPlate();
    plate = <d3kit.SvgPlate> chart.addPlate('a-plate', plate, true); // with doNotAppend
    chart = chart.addPlate('a-plate', plate);       // without doNotAppend
    chart = chart.removePlate('a-plate');

    /**
     * Test properties
     */
    svg    = chart.svg;
    rootg  = chart.rootG;
    layers = chart.layers;
    plate  = chart.plate;
}

function test_canvas_chart() {
    let el: Element;
    let chart: d3kit.CanvasChart;
    let options: d3kit.ChartOptions;
    let margins: d3kit.ChartMargin;
    let offsets: [number, number];
    let context: CanvasRenderingContext2D;

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

function test_hybrid_chart() {
    let el: Element;
    let chart: d3kit.HybridChart;
    let options: d3kit.ChartOptions;
    let margins: d3kit.ChartMargin;
    let offsets: [number, number];
    let svg: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    let rootg: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    let layers: d3kit.LayerOrganizer;
    let plate: d3kit.SvgPlate;
    let context: CanvasRenderingContext2D;

    // create a div, append to body, return Node as type Element
    el = document.body.appendChild(document.createElement('div')) as Element;

    // create examples of margins, offsets, options, fit options, watch options
    margins = { top: 20, right: 20, bottom: 20, left: 20};
    offsets = [0.5, 0.5];
    options = { initialWidth: 400, initialHeight: 300, margin: margins, offset: offsets };

    /**
     * Test constructor
     */
    chart = new d3kit.HybridChart(el); // with element
    chart = new d3kit.HybridChart('div#chart'); // with selector
    chart = new d3kit.HybridChart(el, options); // with element+options
    chart = new d3kit.HybridChart('div#chart', options); // with selector+options

    /**
     * Test plate functions
     */
    plate = new d3kit.SvgPlate();
    plate = <d3kit.SvgPlate> chart.addPlate('a-plate', plate, true); // with doNotAppend
    chart = chart.addPlate('a-plate', plate);       // without doNotAppend
    chart = chart.removePlate('a-plate');

    /**
     * Test SVG properties
     */
    svg    = chart.svg;
    rootg  = chart.rootG;
    layers = chart.layers;
    plate  = chart.plate;

    /**
     * Test canvas chart functions
     */
    context = chart.getContext2d();
    options = d3kit.CanvasChart.getDefaultOptions();
    chart.clear();
}

function test_layer_organizer() {
    let selection: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    let layer: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    let layers: d3kit.LayerOrganizer;
    let hasXAxis: boolean;

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
    layers.create({graph: [{axes: ['x-axis', 'y-axis']}, {labels: ['x-label', 'y-label', 'title']}]});
    layers.create([{axes: ['x-axis', 'y-axis']}, {labels: ['x-label', 'y-label', 'title']}]);

    /**
     * Test other layer organizer functions
     */
    layer    = layers.get('x-axis');
    hasXAxis = layers.has('x-axis');
}

function test_helper() {
    const simple1: {} = { one: 1 };
    const simple2: {} = { two: 2 };
    const complex: {} = { fruit: ["apple", "pear", "grape"], prez: { fn: "Barack", ln: "Obama" } };
    const anObject: {} = { this: "isanobject"};
    let merged1: {};
    let merged2: {};
    let isObj: boolean;
    let aFuncxn = () => "this is a function";
    let isFunc: boolean;
    let kebabed: string;
    let dbouncd: any;
    let throtld: any;

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
