// Type definitions for gremlin 3.4
// Project: https://tinkerpop.apache.org/
// Definitions by: matt-sungwook <https://github.com/matt-sungwook>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export {
  driver,
  process,
  structure,
};

declare namespace driver {
  class RemoteConnection {
    constructor(url: string);
    open(): Promise<void>;
    submit(bytecode: process.Bytecode): Promise<any>;
    close(): Promise<void>;
  }

  class RemoteStrategy extends process.TraversalStrategy {
    constructor(connection: RemoteConnection);
    apply(traversal: RemoteTraversal): Promise<any>;
  }

  class RemoteTraversal extends process.Traversal {
    constructor(traversers?: process.Traverser[], sideEffects?: process.TraversalSideEffects);
  }

  class DriverRemoteConnection extends RemoteConnection {
    constructor(url: string, options?: any);
    open(): Promise<void>;
    submit(bytecode: process.Bytecode): Promise<any>;
    close(): Promise<void>;
  }

  class Client {
    constructor(url: string, options?: any);
    open(): Promise<void>;
    submit(message: process.Bytecode | string, bindings?: any): Promise<any>;
    close(): Promise<void>;
  }

  class ResultSet {
    constructor(items: any[], attributes?: MapConstructor);
    toArray(): any[];
    first(): any;
  }

  class Authenticator {
    constructor(options?: any);
    evaluateChallenge(challenge: string): any;
  }

  class PlainTextSaslAuthenticator extends Authenticator {
    constructor(username: string, password: string, authzid?: string);
    evaluateChallenge(challenge: string): Promise<any>;
  }
}

declare namespace process {
  class Bytecode {
    constructor(toClone?: Bytecode);
    addSource(name: string, values?: ReadonlyArray<any>): Bytecode;
    addStep(name: string, values?: ReadonlyArray<any>): Bytecode;
    toString(): string;
  }

  class EnumValue {
    constructor(typeName: string, elementName: string);
    toString(): string;
  }

  class P {
    constructor(operator: EnumValue, value: any, other?: any);
    toString(): string;
    and(arg?: any): P;
    or(arg?: any): P;
    static between(...args: any[]): P;
    static eq(...args: any[]): P;
    static gt(...args: any[]): P;
    static gte(...args: any[]): P;
    static inside(...args: any[]): P;
    static lt(...args: any[]): P;
    static lte(...args: any[]): P;
    static neq(...args: any[]): P;
    static not(...args: any[]): P;
    static outside(...args: any[]): P;
    static test(...args: any[]): P;
    static within(...args: any[]): P;
    static without(...args: any[]): P;
  }

  class TextP {
    constructor(operator: EnumValue, value: string, other?: any);
    toString(): string;
    and(arg?: any): P;
    or(arg?: any): P;
    static containing(...args: any[]): TextP;
    static endingWith(...args: any[]): TextP;
    static notContaining(...args: any[]): TextP;
    static notEndingWith(...args: any[]): TextP;
    static notStartingWith(...args: any[]): TextP;
    static startingWith(...args: any[]): TextP;
  }

  class Traversal {
    constructor(graph: structure.Graph | null, traversalStrategies: TraversalStrategies | null, bytecode: Bytecode);
    // [asyncIteratorSymbol: symbol | SymbolConstructor](): Traversal; // How can I implement this?
    getBytecode(): Bytecode;
    toList(): Promise<Traverser[]>;
    iterate(): Promise<void>;
    next(): Promise<{ value: any; done: boolean; }>;
    toString(): string;
  }

  class TraversalSideEffects {}

  class TraversalStrategies {
    constructor(parent?: TraversalStrategies);
    addStrategy(strategy: TraversalStrategy): void;
    applyStrategies(traversal: Traversal): Promise<Traversal>;
  }

  class TraversalStrategy {
    apply(traversal: Traversal): Promise<Traversal>;
  }

  class Traverser {
    constructor(object: any, bulk?: number);
  }

  const barrier: {
    normsack: EnumValue;
  };

  const cardinality: {
    list: EnumValue;
    set: EnumValue;
    single: EnumValue;
  };

  const column: {
    keys: EnumValue;
    values: EnumValue;
  };

  const direction: {
    both: EnumValue;
    in: EnumValue;
    out: EnumValue;
  };

  const graphSONVersion: {
    "v1_0": EnumValue;
    "v2_0": EnumValue;
    "v3_0": EnumValue;
  };

  const gryoVersion: {
    "v1_0": EnumValue;
    "v3_0": EnumValue;
  };

  interface Operator {
    addall: EnumValue;
    and: EnumValue;
    assign: EnumValue;
    div: EnumValue;
    max: EnumValue;
    min: EnumValue;
    minus: EnumValue;
    mult: EnumValue;
    or: EnumValue;
    sum: EnumValue;
    sumlong: EnumValue;
  }

  const operator: Operator;

  const order: {
    asc: EnumValue;
    decr: EnumValue;
    desc: EnumValue;
    incr: EnumValue;
    shuffle: EnumValue;
  };

  const pick: {
    any: EnumValue;
    none: EnumValue;
  };

  const pop: {
    all: EnumValue;
    first: EnumValue;
    last: EnumValue;
    mixed: EnumValue;
  };

  const scope: {
    global: EnumValue;
    local: EnumValue;
  };

  const t: {
    id: EnumValue;
    key: EnumValue;
    label: EnumValue;
    value: EnumValue;
  };

  class GraphTraversal extends Traversal {
    constructor(graph: structure.Graph | null, traversalStrategies: TraversalStrategies | null, bytecode: Bytecode);
    V(...args: any[]): GraphTraversal;
    addE(...args: any[]): GraphTraversal;
    addV(...args: any[]): GraphTraversal;
    aggregate(...args: any[]): GraphTraversal;
    and(...args: any[]): GraphTraversal;
    as(...args: any[]): GraphTraversal;
    barrier(...args: any[]): GraphTraversal;
    both(...args: any[]): GraphTraversal;
    bothE(...args: any[]): GraphTraversal;
    bothV(...args: any[]): GraphTraversal;
    branch(...args: any[]): GraphTraversal;
    by(...args: any[]): GraphTraversal;
    cap(...args: any[]): GraphTraversal;
    choose(...args: any[]): GraphTraversal;
    coalesce(...args: any[]): GraphTraversal;
    coin(...args: any[]): GraphTraversal;
    connectedComponent(...args: any[]): GraphTraversal;
    constant(...args: any[]): GraphTraversal;
    count(...args: any[]): GraphTraversal;
    cyclicPath(...args: any[]): GraphTraversal;
    dedup(...args: any[]): GraphTraversal;
    drop(...args: any[]): GraphTraversal;
    emit(...args: any[]): GraphTraversal;
    filter(...args: any[]): GraphTraversal;
    flatMap(...args: any[]): GraphTraversal;
    fold(...args: any[]): GraphTraversal;
    from_(...args: any[]): GraphTraversal;
    group(...args: any[]): GraphTraversal;
    groupCount(...args: any[]): GraphTraversal;
    has(...args: any[]): GraphTraversal;
    hasId(...args: any[]): GraphTraversal;
    hasKey(...args: any[]): GraphTraversal;
    hasLabel(...args: any[]): GraphTraversal;
    hasNot(...args: any[]): GraphTraversal;
    hasValue(...args: any[]): GraphTraversal;
    id(...args: any[]): GraphTraversal;
    identity(...args: any[]): GraphTraversal;
    in_(...args: any[]): GraphTraversal;
    inE(...args: any[]): GraphTraversal;
    inV(...args: any[]): GraphTraversal;
    index(...args: any[]): GraphTraversal;
    inject(...args: any[]): GraphTraversal;
    is(...args: any[]): GraphTraversal;
    key(...args: any[]): GraphTraversal;
    label(...args: any[]): GraphTraversal;
    limit(...args: any[]): GraphTraversal;
    local(...args: any[]): GraphTraversal;
    loops(...args: any[]): GraphTraversal;
    map(...args: any[]): GraphTraversal;
    match(...args: any[]): GraphTraversal;
    math(...args: any[]): GraphTraversal;
    max(...args: any[]): GraphTraversal;
    mean(...args: any[]): GraphTraversal;
    min(...args: any[]): GraphTraversal;
    not(...args: any[]): GraphTraversal;
    option(...args: any[]): GraphTraversal;
    optional(...args: any[]): GraphTraversal;
    or(...args: any[]): GraphTraversal;
    order(...args: any[]): GraphTraversal;
    otherV(...args: any[]): GraphTraversal;
    out(...args: any[]): GraphTraversal;
    outE(...args: any[]): GraphTraversal;
    outV(...args: any[]): GraphTraversal;
    pageRank(...args: any[]): GraphTraversal;
    path(...args: any[]): GraphTraversal;
    peerPressure(...args: any[]): GraphTraversal;
    profile(...args: any[]): GraphTraversal;
    program(...args: any[]): GraphTraversal;
    project(...args: any[]): GraphTraversal;
    properties(...args: any[]): GraphTraversal;
    property(...args: any[]): GraphTraversal;
    propertyMap(...args: any[]): GraphTraversal;
    range(...args: any[]): GraphTraversal;
    read(...args: any[]): GraphTraversal;
    repeat(...args: any[]): GraphTraversal;
    sack(...args: any[]): GraphTraversal;
    sample(...args: any[]): GraphTraversal;
    select(...args: any[]): GraphTraversal;
    shortestPath(...args: any[]): GraphTraversal;
    sideEffect(...args: any[]): GraphTraversal;
    simplePath(...args: any[]): GraphTraversal;
    skip(...args: any[]): GraphTraversal;
    store(...args: any[]): GraphTraversal;
    subgraph(...args: any[]): GraphTraversal;
    sum(...args: any[]): GraphTraversal;
    tail(...args: any[]): GraphTraversal;
    timeLimit(...args: any[]): GraphTraversal;
    times(...args: any[]): GraphTraversal;
    to(...args: any[]): GraphTraversal;
    toE(...args: any[]): GraphTraversal;
    toV(...args: any[]): GraphTraversal;
    tree(...args: any[]): GraphTraversal;
    unfold(...args: any[]): GraphTraversal;
    union(...args: any[]): GraphTraversal;
    until(...args: any[]): GraphTraversal;
    value(...args: any[]): GraphTraversal;
    valueMap(...args: any[]): GraphTraversal;
    values(...args: any[]): GraphTraversal;
    where(...args: any[]): GraphTraversal;
    with_(...args: any[]): GraphTraversal;
    write(...args: any[]): GraphTraversal;
  }

  class GraphTraversalSource {
    constructor(graph: structure.Graph | null, traversalStrategies: TraversalStrategies | null, bytecode: Bytecode);
    withRemote(remoteConnection: driver.RemoteConnection): GraphTraversalSource;
    toString(): string;
    with_(...args: any[]): GraphTraversalSource;
    withBulk(...args: any[]): GraphTraversalSource;
    withPath(...args: any[]): GraphTraversalSource;
    withSack(...args: any[]): GraphTraversalSource;
    withSideEffect(...args: any[]): GraphTraversalSource;
    withStrategies(...args: any[]): GraphTraversalSource;
    withoutStrategies(...args: any[]): GraphTraversalSource;
    E(...args: any[]): GraphTraversal;
    V(...args: any[]): GraphTraversal;
    addE(...args: any[]): GraphTraversal;
    addV(...args: any[]): GraphTraversal;
    inject(...args: any[]): GraphTraversal;
    io(...args: any[]): GraphTraversal;
  }

  interface Statics {
    V: (...args: any[]) => GraphTraversal;
    addE: (...args: any[]) => GraphTraversal;
    addV: (...args: any[]) => GraphTraversal;
    aggregate: (...args: any[]) => GraphTraversal;
    and: (...args: any[]) => GraphTraversal;
    as: (...args: any[]) => GraphTraversal;
    barrier: (...args: any[]) => GraphTraversal;
    both: (...args: any[]) => GraphTraversal;
    bothE: (...args: any[]) => GraphTraversal;
    bothV: (...args: any[]) => GraphTraversal;
    branch: (...args: any[]) => GraphTraversal;
    cap: (...args: any[]) => GraphTraversal;
    choose: (...args: any[]) => GraphTraversal;
    coalesce: (...args: any[]) => GraphTraversal;
    coin: (...args: any[]) => GraphTraversal;
    constant: (...args: any[]) => GraphTraversal;
    count: (...args: any[]) => GraphTraversal;
    cyclicPath: (...args: any[]) => GraphTraversal;
    dedup: (...args: any[]) => GraphTraversal;
    drop: (...args: any[]) => GraphTraversal;
    emit: (...args: any[]) => GraphTraversal;
    filter: (...args: any[]) => GraphTraversal;
    flatMap: (...args: any[]) => GraphTraversal;
    fold: (...args: any[]) => GraphTraversal;
    group: (...args: any[]) => GraphTraversal;
    groupCount: (...args: any[]) => GraphTraversal;
    has: (...args: any[]) => GraphTraversal;
    hasId: (...args: any[]) => GraphTraversal;
    hasKey: (...args: any[]) => GraphTraversal;
    hasLabel: (...args: any[]) => GraphTraversal;
    hasNot: (...args: any[]) => GraphTraversal;
    hasValue: (...args: any[]) => GraphTraversal;
    id: (...args: any[]) => GraphTraversal;
    identity: (...args: any[]) => GraphTraversal;
    in_: (...args: any[]) => GraphTraversal;
    inE: (...args: any[]) => GraphTraversal;
    inV: (...args: any[]) => GraphTraversal;
    index: (...args: any[]) => GraphTraversal;
    inject: (...args: any[]) => GraphTraversal;
    is: (...args: any[]) => GraphTraversal;
    key: (...args: any[]) => GraphTraversal;
    label: (...args: any[]) => GraphTraversal;
    limit: (...args: any[]) => GraphTraversal;
    local: (...args: any[]) => GraphTraversal;
    loops: (...args: any[]) => GraphTraversal;
    map: (...args: any[]) => GraphTraversal;
    match: (...args: any[]) => GraphTraversal;
    math: (...args: any[]) => GraphTraversal;
    max: (...args: any[]) => GraphTraversal;
    mean: (...args: any[]) => GraphTraversal;
    min: (...args: any[]) => GraphTraversal;
    not: (...args: any[]) => GraphTraversal;
    optional: (...args: any[]) => GraphTraversal;
    or: (...args: any[]) => GraphTraversal;
    order: (...args: any[]) => GraphTraversal;
    otherV: (...args: any[]) => GraphTraversal;
    out: (...args: any[]) => GraphTraversal;
    outE: (...args: any[]) => GraphTraversal;
    outV: (...args: any[]) => GraphTraversal;
    path: (...args: any[]) => GraphTraversal;
    project: (...args: any[]) => GraphTraversal;
    properties: (...args: any[]) => GraphTraversal;
    property: (...args: any[]) => GraphTraversal;
    propertyMap: (...args: any[]) => GraphTraversal;
    range: (...args: any[]) => GraphTraversal;
    repeat: (...args: any[]) => GraphTraversal;
    sack: (...args: any[]) => GraphTraversal;
    sample: (...args: any[]) => GraphTraversal;
    select: (...args: any[]) => GraphTraversal;
    sideEffect: (...args: any[]) => GraphTraversal;
    simplePath: (...args: any[]) => GraphTraversal;
    skip: (...args: any[]) => GraphTraversal;
    store: (...args: any[]) => GraphTraversal;
    subgraph: (...args: any[]) => GraphTraversal;
    sum: (...args: any[]) => GraphTraversal;
    tail: (...args: any[]) => GraphTraversal;
    timeLimit: (...args: any[]) => GraphTraversal;
    times: (...args: any[]) => GraphTraversal;
    to: (...args: any[]) => GraphTraversal;
    toE: (...args: any[]) => GraphTraversal;
    toV: (...args: any[]) => GraphTraversal;
    tree: (...args: any[]) => GraphTraversal;
    unfold: (...args: any[]) => GraphTraversal;
    union: (...args: any[]) => GraphTraversal;
    until: (...args: any[]) => GraphTraversal;
    value: (...args: any[]) => GraphTraversal;
    valueMap: (...args: any[]) => GraphTraversal;
    values: (...args: any[]) => GraphTraversal;
    where: (...args: any[]) => GraphTraversal;
  }

  const statics: Statics;

  class Translator {
    constructor(traversalSource: AnonymousTraversalSource | GraphTraversalSource);
    getTraversalSource(): Translator;
    of(traversalSource: AnonymousTraversalSource | GraphTraversalSource): void;
    translate(bytecode: Bytecode): string;
  }

  function traversal(): AnonymousTraversalSource;

  class AnonymousTraversalSource {
    static traversal(): AnonymousTraversalSource;
    withRemote(remoteConnection: driver.RemoteConnection): GraphTraversalSource;
    withGraph(graph: structure.Graph): GraphTraversalSource;
  }

  interface WithOptions {
    tokens: string;
    none: number;
    ids: number;
    labels: number;
    keys: number;
    values: number;
    all: number;
    indexer: string;
    list: number;
    map: number;
  }

  const withOptions: WithOptions;
}

declare namespace structure {
  class Element {
    constructor(id: number, label: string);
    equals(other: Element): boolean;
  }

  class GraphSONReader {
    constructor(options?: any);
    read(obj: any): any;
  }

  class GraphSONWriter {
    constructor(options?: any);
    adaptObject(value: any): any;
    write(obj: any): string;
  }

  class Edge extends Element {
    constructor(id: number, outV: Vertex, label: string, inV: Vertex, properties?: Property[]);
    toString(): string;
  }

  class Graph {
    traversal(): process.GraphTraversalSource;
    toString(): string;
  }

  class Path {
    constructor(labels: string[], objects: any[]);
    toString(): string;
    equals(other: Path): boolean;
  }

  class Property {
    constructor(key: string, value: any);
    toString(): string;
    equals(other: Property): boolean;
  }

  class Vertex extends Element {
    constructor(id: number, label: string, properties?: VertexProperty[]);
    toString(): string;
  }

  class VertexProperty extends Element {
    constructor(id: number, label: string, value: any, properties?: Property[]);
    toString(): string;
  }

  function toLong(value: number | string): Long;

  class Long {
    constructor(value: number | string);
  }
}
