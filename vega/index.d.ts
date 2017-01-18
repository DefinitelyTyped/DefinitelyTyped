// Type definitions for Vega
// Project: http://trifacta.github.io/vega/
// Definitions by: Tom Crockett <http://github.com/pelotom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace vg {

  export type ChartViewConstructor = {
    (args: {renderer: 'svg'} & ViewArgs): SvgView;
    (args: {renderer: 'canvas'} & ViewArgs): CanvasView;
    (args: ViewArgs): View;
  };

  export interface Parse {
    spec(url: string, callback: (chart: ChartViewConstructor) => void): void;
    spec(spec: Spec, callback: (chart: ChartViewConstructor) => void): void;
    data(dataSet: Data[], callback: () => void): void;
    // TODO all the other stuff
  }

  export interface ViewArgs {
    // TODO docs
    el?: any;
    data?: any;
    hover?: boolean;
    renderer?: string;
  }

  export interface View {
    // TODO docs
    width(): number;
    width(w: number): this;

    height(): number;
    height(h: number): this;

    padding(): Padding;
    padding(p: Padding): this;

    viewport(): number[];
    viewport(v: number[]): this;

    renderer(r: string): this;

    data(): Runtime.DataSets;
    data(d: any/*TODO*/): this;

    initialize(selector: string): this;
    initialize(node: Element): this;

    render(r?: any[]): this;

    update(options?: UpdateOptions): this;

    model(): Vega.Model;

    defs(): Defs;
    defs(defs: Defs): this;
  }

  export interface SvgView extends View {
    svg(): string;
  }

  export interface CanvasView extends View {
    canvas(): any; // Returns a node-canvas instance
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

  export namespace Runtime {
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
    def: Vega.Mark;
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
    padding?: number | string | {
        top: number; left: number; right: number; bottom: number
    }; // string is "auto" or "strict"
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
    marks: (Mark | GroupMark)[];
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

  export namespace Data {
    export interface FormatBase {
      /**
      * The currently supported format types are json (JavaScript Object
      * Notation), csv (comma-separated values), tsv (tab-separated values),
      * topojson, and treejson.
      */
      type: string;
      // TODO: fields for specific formats
    }

    /**
     * The JSON property containing the desired data.
     * This parameter can be used when the loaded JSON file may have surrounding structure or meta-data.
     * For example "property": "values.features" is equivalent to retrieving json.values.features from the
     * loaded JSON object.
     */
    export interface JsonFormat extends FormatBase {
      type: string; // "json"
      property?: string;
    }

    export interface CsvOrTsvFormat extends FormatBase {
      type: string; // "csv" | "tsv"
      parse?: {
       [propertyName: string]: string; // "number" | "boolean" | "date"
      }
    }

    export interface TopoJsonFormat extends FormatBase {
      type: string; // "topojson"
      feature?: string;
      mesh?: string;
    }

    export interface TreeJson extends FormatBase {
      type: string; // "treejson"
      children?: string;
      parse?: {
       [propertyName: string]: string; // "number" | "boolean" | "date"
      }
    }

    export type Format = JsonFormat | CsvOrTsvFormat | TopoJsonFormat | TreeJson;

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
    /** boolean for quantitative scales, string for time scales */
    nice?: boolean | string;

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

  export namespace Axis {
    export interface Properties {
      ticks?: PropertySet;
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
    // Stuff from Spec.Mark
    type: string; // "rect" | "symbol" | "path" | "arc" | "area" | "line" | "rule" | "image" | "text" | "group"
    name?: string;
    description?: string;
    from?: Mark.From;
    key?: string;
    delay?: ValueRef;
    /**
    * "linear-in" | "linear-out" | "linear-in-out" | "linear-out-in" | "quad-in" | "quad-out" | "quad-in-out" |
    * "quad-out-in" | "cubic-in" | "cubic-out" | "cubic-in-out" | "cubic-out-in" | "sin-in" | "sin-out" | "sin-in-out" |
    * "sin-out-in" | "exp-in" | "exp-out" | "exp-in-out" | "exp-out-in" | "circle-in" | "circle-out" | "circle-in-out" |
    * "circle-out-in" | "bounce-in" | "bounce-out" | "bounce-in-out" | "bounce-out-in"
    */
    ease?: string;

    interactive?: boolean;

    // Runtime PropertySets
    properties?: PropertySets;
  }

  export module Mark {
    export interface From {
      // TODO docs
      data?: string;
      mark?: string;
      transform?: Data.Transform[];
    }
  }

  export interface GroupMark extends Mark {
    type: string; // "group"
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
     * Groups differ from other mark types in their ability to contain children marks.
     * Marks defined within a group mark can inherit data from their parent group.
     * For inheritance to work each data element for a group must contain data elements of its own.
     * This arrangement of nested data is typically achieved by facetting the data, such that each group-level data element includes its own array of sub-elements
     */
    marks?: (Mark | GroupMark)[];
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

  export var parse: Parse;
  export namespace scene {
    export function item(mark: Node): Node;
  }

  export class Bounds implements Bounds {
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

export = vg;
export as namespace vg;
export as namespace Vega;
