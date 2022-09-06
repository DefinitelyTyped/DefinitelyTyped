// Type definitions for gremlin 3.6
// Project: https://tinkerpop.apache.org/
// Definitions by: Paulo Soares <https://github.com/7jpsan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export { driver, process, structure };

import RemoteConnection = driver.RemoteConnection;

import Bytecode = process.Bytecode;
import GraphTraversalSource = process.GraphTraversalSource;
import Traversal = process.Traversal;
import TraversalSideEffects = process.TraversalSideEffects;
import TraversalStrategy = process.TraversalStrategy;
import Traverser = process.Traverser;

import Graph = structure.Graph;

type Nullable<T> = T | null;
interface Newable<T> {
    new (...args: any[]): T;
}

declare namespace driver {
    class RemoteConnection {
        constructor(url: string, options?: any);
        open(): Promise<void>;
        submit(bytecode: Bytecode): Promise<any>;
        close(): Promise<void>;
    }

    class RemoteStrategy extends TraversalStrategy {
        constructor(connection: RemoteConnection);
        apply(traversal: RemoteTraversal): Promise<any>;
    }

    class RemoteTraversal extends Traversal {
        constructor(traversers?: Traverser[], sideEffects?: TraversalSideEffects);
    }

    class DriverRemoteConnection extends RemoteConnection {
        constructor(url: string, options?: any);
        open(): Promise<void>;
        isOpen: Promise<boolean>;
        submit(bytecode: Bytecode): Promise<any>;
        createSession(): this;
        isSessionBound: boolean;
        commit(): Promise<any>;
        rollback(): Promise<any>;
        close(): Promise<void>;
        addListener(event: string | symbol, handler: (...args: any[]) => void): void;
        removeListener(event: string | symbol, handler: (...args: any[]) => void): void;
    }

    interface RequestOptions {
        requestId: string;
        batchSize: number;
        userAgent: string;
        evaluationTimeout: number;
    }

    class Client {
        constructor(url: string, options?: any);
        open(): Promise<void>;
        isOpen: Promise<boolean>;
        submit(message: Bytecode | string, bindings?: any, requestOptions?: RequestOptions): Promise<any>;
        stream(message: Bytecode | string, bindings?: any, requestOptions?: RequestOptions): any;
        close(): Promise<void>;
    }

    class ResultSet {
        constructor(items: any[], attributes?: MapConstructor);
        toArray(): any[];
        first(): any;
    }

    namespace auth {
        class Authenticator {
            constructor(options?: any);
            evaluateChallenge(challenge: string): any;
        }

        class PlainTextSaslAuthenticator extends Authenticator {
            constructor(username: string, password: string, authzid?: string);
            evaluateChallenge(challenge: string): Promise<any>;
        }
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
        static regex(...args: any[]): TextP;
        static notRegex(...args: any[]): TextP;
    }

    class Traversal implements AsyncIterableIterator<any> {
        constructor(graph: Nullable<Graph>, traversalStrategies: Nullable<TraversalStrategies>, bytecode: Bytecode);
        getBytecode(): Bytecode;
        hasNext(): Promise<boolean>;
        iterate(): Promise<void>;
        next(): Promise<IteratorResult<any>>;
        toList(): Promise<Traverser[]>;
        toString(): string;
        [Symbol.asyncIterator](): AsyncIterableIterator<any>;
    }

    class TraversalSideEffects {}

    class TraversalStrategies {
        constructor(parent?: TraversalStrategies);
        addStrategy(strategy: TraversalStrategy): void;
        removeStrategy(strategy: TraversalStrategy): any;
        applyStrategies(traversal: Traversal): Promise<Traversal>;
    }

    class TraversalStrategy {
        apply(traversal: Traversal): Promise<Traversal>;
    }

    class Traverser {
        constructor(object: any, bulk?: number);
    }

    const barrier: {
        normSack: EnumValue;
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
        v1_0: EnumValue;
        v2_0: EnumValue;
        v3_0: EnumValue;
    };

    const gryoVersion: {
        v1_0: EnumValue;
        v3_0: EnumValue;
    };

    interface Operator {
        addAll: EnumValue;
        and: EnumValue;
        assign: EnumValue;
        div: EnumValue;
        max: EnumValue;
        min: EnumValue;
        minus: EnumValue;
        mult: EnumValue;
        or: EnumValue;
        sum: EnumValue;
        sumLong: EnumValue;
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
        constructor(graph: Nullable<Graph>, traversalStrategies: Nullable<TraversalStrategies>, bytecode: Bytecode);
        clone(): this;
        V(...args: any[]): this;
        addE(...args: any[]): this;
        addV(...args: any[]): this;
        aggregate(...args: any[]): this;
        and(...args: any[]): this;
        as(...args: any[]): this;
        barrier(...args: any[]): this;
        both(...args: any[]): this;
        bothE(...args: any[]): this;
        bothV(...args: any[]): this;
        branch(...args: any[]): this;
        by(...args: any[]): this;
        call(...args: any[]): this;
        cap(...args: any[]): this;
        choose(...args: any[]): this;
        coalesce(...args: any[]): this;
        coin(...args: any[]): this;
        connectedComponent(...args: any[]): this;
        constant(...args: any[]): this;
        count(...args: any[]): this;
        cyclicPath(...args: any[]): this;
        dedup(...args: any[]): this;
        drop(...args: any[]): this;
        element(...args: any[]): this;
        elementMap(...args: any[]): this;
        emit(...args: any[]): this;
        fail(...args: any[]): this;
        filter(...args: any[]): this;
        flatMap(...args: any[]): this;
        fold(...args: any[]): this;
        from_(...args: any[]): this;
        group(...args: any[]): this;
        groupCount(...args: any[]): this;
        has(...args: any[]): this;
        hasId(...args: any[]): this;
        hasKey(...args: any[]): this;
        hasLabel(...args: any[]): this;
        hasNot(...args: any[]): this;
        hasValue(...args: any[]): this;
        id(...args: any[]): this;
        identity(...args: any[]): this;
        in_(...args: any[]): this;
        inE(...args: any[]): this;
        inV(...args: any[]): this;
        index(...args: any[]): this;
        inject(...args: any[]): this;
        is(...args: any[]): this;
        key(...args: any[]): this;
        label(...args: any[]): this;
        limit(...args: any[]): this;
        local(...args: any[]): this;
        loops(...args: any[]): this;
        map(...args: any[]): this;
        match(...args: any[]): this;
        math(...args: any[]): this;
        max(...args: any[]): this;
        mean(...args: any[]): this;
        mergeE(...args: any[]): this;
        mergeV(...args: any[]): this;
        min(...args: any[]): this;
        none(...args: any[]): this;
        not(...args: any[]): this;
        option(...args: any[]): this;
        optional(...args: any[]): this;
        or(...args: any[]): this;
        order(...args: any[]): this;
        otherV(...args: any[]): this;
        out(...args: any[]): this;
        outE(...args: any[]): this;
        outV(...args: any[]): this;
        pageRank(...args: any[]): this;
        path(...args: any[]): this;
        peerPressure(...args: any[]): this;
        profile(...args: any[]): this;
        program(...args: any[]): this;
        project(...args: any[]): this;
        properties(...args: any[]): this;
        property(...args: any[]): this;
        propertyMap(...args: any[]): this;
        range(...args: any[]): this;
        read(...args: any[]): this;
        repeat(...args: any[]): this;
        sack(...args: any[]): this;
        sample(...args: any[]): this;
        select(...args: any[]): this;
        shortestPath(...args: any[]): this;
        sideEffect(...args: any[]): this;
        simplePath(...args: any[]): this;
        skip(...args: any[]): this;
        store(...args: any[]): this;
        subgraph(...args: any[]): this;
        sum(...args: any[]): this;
        tail(...args: any[]): this;
        timeLimit(...args: any[]): this;
        times(...args: any[]): this;
        to(...args: any[]): this;
        toE(...args: any[]): this;
        toV(...args: any[]): this;
        tree(...args: any[]): this;
        unfold(...args: any[]): this;
        union(...args: any[]): this;
        until(...args: any[]): this;
        value(...args: any[]): this;
        valueMap(...args: any[]): this;
        values(...args: any[]): this;
        where(...args: any[]): this;
        with_(...args: any[]): this;
        write(...args: any[]): this;
    }

    class GraphTraversalSource<T extends GraphTraversal = GraphTraversal> {
        constructor(
            graph: Nullable<Graph>,
            traversalStrategies: Nullable<TraversalStrategies>,
            bytecode?: Bytecode,
            graphTraversalSourceClass?: Newable<GraphTraversalSource>,
            graphTraversalClass?: Newable<T>,
        );
        withRemote(remoteConnection: RemoteConnection): this;
        tx(): Transaction<this>;
        toString(): string;
        with_(...args: any[]): this;
        withBulk(...args: any[]): this;
        withPath(...args: any[]): this;
        withSack(...args: any[]): this;
        withSideEffect(...args: any[]): this;
        withStrategies(...args: any[]): this;
        withoutStrategies(...args: any[]): this;
        E(...args: any[]): T;
        V(...args: any[]): T;
        addE(...args: any[]): T;
        mergeE(...args: any[]): T;
        addV(...args: any[]): T;
        mergeV(...args: any[]): T;
        inject(...args: any[]): T;
        io(...args: any[]): T;
    }

    interface Statics<T extends GraphTraversal = GraphTraversal> {
        V: (...args: any[]) => T;
        addE: (...args: any[]) => T;
        addV: (...args: any[]) => T;
        aggregate: (...args: any[]) => T;
        and: (...args: any[]) => T;
        as: (...args: any[]) => T;
        barrier: (...args: any[]) => T;
        both: (...args: any[]) => T;
        bothE: (...args: any[]) => T;
        bothV: (...args: any[]) => T;
        branch: (...args: any[]) => T;
        call: (...args: any[]) => T;
        cap: (...args: any[]) => T;
        choose: (...args: any[]) => T;
        coalesce: (...args: any[]) => T;
        coin: (...args: any[]) => T;
        constant: (...args: any[]) => T;
        count: (...args: any[]) => T;
        cyclicPath: (...args: any[]) => T;
        dedup: (...args: any[]) => T;
        drop: (...args: any[]) => T;
        elementMap: (...args: any[]) => T;
        emit: (...args: any[]) => T;
        fail: (...args: any[]) => T;
        filter: (...args: any[]) => T;
        flatMap: (...args: any[]) => T;
        fold: (...args: any[]) => T;
        group: (...args: any[]) => T;
        groupCount: (...args: any[]) => T;
        has: (...args: any[]) => T;
        hasId: (...args: any[]) => T;
        hasKey: (...args: any[]) => T;
        hasLabel: (...args: any[]) => T;
        hasNot: (...args: any[]) => T;
        hasValue: (...args: any[]) => T;
        id: (...args: any[]) => T;
        identity: (...args: any[]) => T;
        in_: (...args: any[]) => T;
        inE: (...args: any[]) => T;
        inV: (...args: any[]) => T;
        index: (...args: any[]) => T;
        inject: (...args: any[]) => T;
        is: (...args: any[]) => T;
        key: (...args: any[]) => T;
        label: (...args: any[]) => T;
        limit: (...args: any[]) => T;
        local: (...args: any[]) => T;
        loops: (...args: any[]) => T;
        map: (...args: any[]) => T;
        match: (...args: any[]) => T;
        math: (...args: any[]) => T;
        max: (...args: any[]) => T;
        mean: (...args: any[]) => T;
        mergeE: (...args: any[]) => T;
        mergeV: (...args: any[]) => T;
        min: (...args: any[]) => T;
        not: (...args: any[]) => T;
        optional: (...args: any[]) => T;
        or: (...args: any[]) => T;
        order: (...args: any[]) => T;
        otherV: (...args: any[]) => T;
        out: (...args: any[]) => T;
        outE: (...args: any[]) => T;
        outV: (...args: any[]) => T;
        path: (...args: any[]) => T;
        project: (...args: any[]) => T;
        properties: (...args: any[]) => T;
        property: (...args: any[]) => T;
        propertyMap: (...args: any[]) => T;
        range: (...args: any[]) => T;
        repeat: (...args: any[]) => T;
        sack: (...args: any[]) => T;
        sample: (...args: any[]) => T;
        select: (...args: any[]) => T;
        sideEffect: (...args: any[]) => T;
        simplePath: (...args: any[]) => T;
        skip: (...args: any[]) => T;
        store: (...args: any[]) => T;
        subgraph: (...args: any[]) => T;
        sum: (...args: any[]) => T;
        tail: (...args: any[]) => T;
        timeLimit: (...args: any[]) => T;
        times: (...args: any[]) => T;
        to: (...args: any[]) => T;
        toE: (...args: any[]) => T;
        toV: (...args: any[]) => T;
        tree: (...args: any[]) => T;
        unfold: (...args: any[]) => T;
        union: (...args: any[]) => T;
        until: (...args: any[]) => T;
        value: (...args: any[]) => T;
        valueMap: (...args: any[]) => T;
        values: (...args: any[]) => T;
        where: (...args: any[]) => T;
    }

    const statics: Statics;

    class Translator {
        constructor(traversalSource: AnonymousTraversalSource | GraphTraversalSource);
        getTraversalSource(): Translator;
        of(traversalSource: AnonymousTraversalSource | GraphTraversalSource | string): void;
        translate(bytecode: Bytecode): string;
    }

    function traversal<S extends GraphTraversalSource = GraphTraversalSource>(
        traversalSourceClass?: Newable<S>,
    ): AnonymousTraversalSource<S>;

    class AnonymousTraversalSource<S extends GraphTraversalSource = GraphTraversalSource> {
        static traversal<S extends GraphTraversalSource>(
            traversalSourceClass?: Newable<S>,
        ): AnonymousTraversalSource<S>;
        withRemote(remoteConnection: RemoteConnection): S;
        withGraph(graph: Graph): S;
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

    class Transaction<S extends GraphTraversalSource = GraphTraversalSource> {
        constructor(_g: S);
        begin(): S;
        commit(): Promise<any>;
        rollback(): Promise<void>;
        isOpen: boolean;
        close(): Promise<void>;
    }
}

declare namespace structure {
    class Element {
        constructor(id: number, label: string);
        equals(other: Element): boolean;
    }

    namespace io {
        class GraphSONReader {
            constructor(options?: any);
            read(obj: any): any;
        }
        class GraphSONWriter {
            constructor(options?: any);
            adaptObject(value: any): any;
            write(obj: any): string;
        }
    }

    class Edge extends Element {
        constructor(id: number, outV: Vertex, label: string, inV: Vertex, properties?: Property[]);
        toString(): string;
    }

    class Graph {
        traversal(): GraphTraversalSource;
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
