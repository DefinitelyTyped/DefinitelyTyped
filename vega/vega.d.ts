// Type definitions for Vega
// Project: http://trifacta.github.io/vega/
// Definitions by: Tom Crockett <http://github.com/pelotom>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Vega {

  export interface Parse {
    spec(url: string, callback: (chart: (args: ViewArgs) => View) => void): void;
    spec(spec: Spec, callback: (chart: (args: ViewArgs) => View) => void): void;
    data(dataSet: Data[], callback: () => void): void;
    // TODO all the other stuff
  }

  export interface ViewArgs {
    // TODO docs
    el: any;
    data?: any;
    hover?: boolean;
    renderer?: string;
  }

  export interface View {
    // TODO docs
    width(): number;
    width(w: number): View;

    height(): number;
    height(h: number): View;

    padding(): Padding;
    padding(p: Padding): View;

    viewport(): number[];
    viewport(v: number[]): View;

    renderer(r: string): View;

    data(): Runtime.DataSets;
    data(d: any/*TODO*/): View;

    initialize(selector: string): View;
    initialize(node: Element): View;

    render(r?: any[]): View;

    update(options?: UpdateOptions): View;

    model(): Vega.Model;

    defs(): Defs;
    defs(defs: Defs): View;
  }

  export interface Padding {
    // TODO docs
    top: number;
    right: number;
    bottom: number;
    left: number;
  }

  export interface UpdateOptions {
    // TODO docs
    props?: string;
    items?: any;
    duration?: number;
    ease?: string; 
  }

  export interface Bounds {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    clear(): Bounds;
    set(x1: number, y1: number, x2: number, y2: number): Bounds;
    add(x: number, y: number): Bounds;
    expand(d: number): Bounds;
    round(): Bounds;
    translate(dx: number, dy: number): Bounds;
    rotate(angle: number, x: number, y: number): Bounds;
    union(b: Bounds): Bounds;
    encloses(b: Bounds): boolean;
    intersects(b: Bounds): boolean;
    contains(x: number, y: number): boolean;
    width(): number;
    height(): number;
  }

  export interface Model {
    defs(): Defs;
    defs(defs: Defs): Model;

    data(): Runtime.DataSets;
    data(data: Runtime.DataSets): Model;

    ingest(name: string, tx: any/*TODO*/, input: any/*TODO*/): void;

    dependencies(name: string, tx: any/*TODO*/): void;

    width(w: number): Model;

    height(h: number): Model;

    scene(): Node;
    scene(node: Node): Model;

    build(): Model;

    encode(trans?: any/*TODO*/, request?: string, item?: any): Model;

    reset(): Model;
  }

  export module Runtime {
    export interface DataSets {
      [name: string]: Datum[];
    }

    export interface Datum {
      [key: string]: any
    }

    export interface Marks {
      type: string;
      width: number;
      height: number;
      scales: Scale[];
      axes: Axis[];
      legends: Legend[];
      marks: Mark[];
    }

    export interface Mark {
      // Stuff from Spec.Mark
      type: string;
      name?: string;
      description?: string;
      from?: Mark.From;
      key?: string;
      delay?: Properties;

      // Runtime PropertySets
      properties?: PropertySets;
    }

    export interface PropertySets {
      enter?: Properties;
      exit?: Properties;
      update?: Properties;
      hover?: Properties;
    }

    export interface Properties {
      (item: Node, group: Node, trans: any/*TODO*/): void;
    }
  }

  export interface Node {
    def: Runtime.Mark;
    marktype: string;
    interactive: boolean;
    items: Node[];
    bounds: Bounds;

    // mark item members
    hasPropertySet(name: string): boolean;
    cousin(offset: number, index: number): Node;
    sibling(offset: number): Node;
    remove(): Node;
    touch(): void;

    // group members
    scales?: {[name: string]: any};
    axisItems?: Node[];
  }

  export interface Defs {
    width: number;
    height: number;
    viewport?: number[];
    padding: any;
    marks: Runtime.Marks;
    data: Data[];
  }

  export interface Spec {
    /**
    * A unique name for the visualization specification.
    */
    name?: string;
    /**
    * The total width, in pixels, of the data rectangle. Default is 500 if
    * undefined.
    */
    width?: number;
    /**
    * The total height, in pixels, of the data rectangle. Default is 500 if
    * undefined.
    */
    height?: number;
    /**
    * The width and height of the on-screen viewport, in pixels. If necessary,
    * clipping and scrolling will be applied.
    */
    viewport?: number[];
    /**
    * [Number | Object | String]
    * The internal padding, in pixels, from the edge of the visualization
    * canvas to the data rectangle. If an object is provided, it must include
    * {top, left, right, bottom} properties. Two string values are also
    * acceptable: "auto" (the default) and "strict". Auto-padding computes the
    * padding dynamically based on the contents of the visualization. All
    * marks, including axes and legends, are used to compute the necessary
    * padding. "Strict" auto-padding attempts to adjust the padding such that
    * the overall width and height of the visualization is unchanged. This mode
    * can cause the visualization's width and height parameters to be adjusted
    * such that the total size, including padding, remains constant. Note that
    * in some cases strict padding is not possible; for example, if the axis
    * labels are much larger than the data rectangle.
    */
    padding?: any;
    /**
    * Definitions of data to visualize.
    */
    data: Data[];
    /**
    * Scale transform definitions.
    */
    scales?: Scale[];
    /**
    * Axis definitions.
    */
    axes?: Axis[];
    /**
    * Legend definitions.
    */
    legends?: Legend[];
    /**
    * Graphical mark definitions.
    */
    marks: Mark[];
  }

  export interface Data {
    /**
    * A unique name for the data set.
    */
    name: string;
    /**
    * An object that specifies the format for the data file, if loaded from a
    * URL.
    */
    format?: Data.Format;
    /**
    * The actual data set to use. The values property allows data to be inlined
    * directly within the specification itself.
    */
    values?: any;
    /**
    * The name of another data set to use as the source for this data set. The
    * source property is particularly useful in combination with a transform
    * pipeline to derive new data.
    */
    source?: string;
    /**
    * A URL from which to load the data set. Use the format property to ensure
    * the loaded data is correctly parsed. If the format property is not specified,
    * the data is assumed to be in a row-oriented JSON format.
    */
    url?: string;
    /**
    * An array of transforms to perform on the data. Transform operators will be
    * run on the default data, as provided by late-binding or as specified by the
    *   source, values, or url properties.
    */
    transform?: Data.Transform[];
  }

  export module Data {
    export interface Format {
      /**
      * The currently supported format types are json (JavaScript Object
      * Notation), csv (comma-separated values), tsv (tab-separated values),
      * topojson, and treejson.
      */
      type?: string;
      // TODO: fields for specific formats
    }

    export interface Transform {
      // TODO
    }
  }

  export interface Scale {
    // TODO docs

    // -- Common scale properties
    name?: string;
    type?: string;
    domain?: any;
    domainMin?: any;
    domainMax?: any;
    range?: any;
    rangeMin?: any;
    rangeMax?: any;
    reverse?: boolean;
    round?: boolean;

    // -- Ordinal scale properties
    points?: boolean;
    padding?: number;
    sort?: boolean;

    // -- Time/Quantitative scale properties
    clamp?: boolean;
    nice?: any; // boolean for quantitative scales, string for time scales

    // -- Quantitative scale properties
    exponent?: number;
    zero?: boolean;
  }

  export interface Axis {
    // TODO docs
    type: string;
    scale: string;
    orient?: string;
    title?: string;
    titleOffset?: number;
    format?: string;
    ticks?: number;
    values?: any[];
    subdivide?: number;
    tickPadding?: number;
    tickSize?: number;
    tickSizeMajor?: number;
    tickSizeMinor?: number;
    tickSizeEnd?: number;
    offset?: any;
    layer?: string;
    grid?: boolean;
    properties?: Axis.Properties
  }

  export module Axis {
    export interface Properties {
      majorTicks?: PropertySet;
      minorTicks?: PropertySet;
      grid?: PropertySet;
      labels?: PropertySet;
      title?: PropertySet;
      axis?: PropertySet;
    }
  }

  export interface Legend {
    // TODO
  }

  export interface Mark {
    // TODO docs
    type: string;
    name?: string;
    description?: string;
    from?: Mark.From;
    properties?: PropertySets;
    key?: string;
    delay?: ValueRef;
  }

  export module Mark {
    export interface From {
      // TODO docs
      data?: string;
      transform?: Data.Transform[];
    }
  }

  export interface PropertySets {
    // TODO docs
    enter?: PropertySet;
    exit?: PropertySet;
    update?: PropertySet;
    hover?: PropertySet;
  }

  export interface PropertySet {
    // TODO docs

    // -- Shared visual properties
    x?: ValueRef;
    x2?: ValueRef;
    width?: ValueRef;
    y?: ValueRef;
    y2?: ValueRef;
    height?: ValueRef;
    opacity?: ValueRef;
    fill?: ValueRef;
    fillOpacity?: ValueRef;
    stroke?: ValueRef;
    strokeWidth?: ValueRef;
    strokeOpacity?: ValueRef;
    strokeDash?: ValueRef;
    strokeDashOffset?: ValueRef;

    // -- symbol
    size?: ValueRef;
    shape?: ValueRef;

    // -- path
    path?: ValueRef;

    // -- arc
    innerRadius?: ValueRef;
    outerRadius?: ValueRef;
    startAngle?: ValueRef;
    endAngle?: ValueRef;

    // -- area / line
    interpolate?: ValueRef;
    tension?: ValueRef;

    // -- image / text
    align?: ValueRef;
    baseline?: ValueRef;

    // -- image
    url?: ValueRef;

    // -- text
    text?: ValueRef;
    dx?: ValueRef;
    dy?: ValueRef;
    angle?: ValueRef;
    font?: ValueRef;
    fontSize?: ValueRef;
    fontWeight?: ValueRef;
    fontStyle?: ValueRef;
  }

  export interface ValueRef {
    // TODO docs
    value?: any;
    field?: any;
    group?: any;
    scale?: any;
    mult?: number;
    offset?: number;
    band?: boolean;
  }
}

declare module vg {
  export var parse: Vega.Parse;
  export module scene {
    export function item(mark: Vega.Node): Vega.Node;
  }
  
  export class Bounds implements Vega.Bounds {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    clear(): Bounds;
    set(x1: number, y1: number, x2: number, y2: number): Bounds;
    add(x: number, y: number): Bounds;
    expand(d: number): Bounds;
    round(): Bounds;
    translate(dx: number, dy: number): Bounds;
    rotate(angle: number, x: number, y: number): Bounds;
    union(b: Bounds): Bounds;
    encloses(b: Bounds): boolean;
    intersects(b: Bounds): boolean;
    contains(x: number, y: number): boolean;
    width(): number;
    height(): number;
  }

  // TODO: classes for View, Model, etc.
}