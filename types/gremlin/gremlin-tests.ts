import {
  driver,
  process,
  structure,
} from "gremlin";

const {
    RemoteConnection,
    RemoteStrategy,
    RemoteTraversal,
    DriverRemoteConnection,
    Client,
    ResultSet,
    auth: { Authenticator, PlainTextSaslAuthenticator },
} = driver;

const {
  Bytecode,
  EnumValue,
  P,
  TextP,
  Traversal,
  TraversalStrategies,
  TraversalSideEffects,
  TraversalStrategy,
  Traverser,
  GraphTraversal,
  GraphTraversalSource,
  Translator,
  AnonymousTraversalSource,
  barrier,
  cardinality,
  column,
  direction,
  graphSONVersion,
  gryoVersion,
  operator,
  order,
  pick,
  pop,
  scope,
  t,
  traversal,
  statics,
} = process;

const {
  Graph,
  Element,
  GraphSONReader,
  GraphSONWriter,
  Edge,
  Vertex,
  VertexProperty,
  Path,
  Property,
  Long,
  toLong,
} = structure;

import Statics = process.Statics;

function constructorTests() {
  const remoteConnection = new RemoteConnection("test");
  const remoteStrategy = new RemoteStrategy(remoteConnection);
  const remoteTraversal = new RemoteTraversal();
  const driverRemoteConnection = new DriverRemoteConnection("test");
  const client = new Client("test");
  const resultSet = new ResultSet([ 1, 2, 3 ]);
  const authenticator = new Authenticator();
  const plainTextSaslAuthenticator = new PlainTextSaslAuthenticator("gremlin", "test");

  remoteConnection.open();
  remoteConnection.submit(new Bytecode());
  remoteConnection.close();

  remoteStrategy.apply(remoteTraversal);

  const eventHandler = (logline: string) => {};
  driverRemoteConnection.addListener('log', eventHandler);
  driverRemoteConnection.open();
  driverRemoteConnection.submit(new Bytecode());
  driverRemoteConnection.close();
  driverRemoteConnection.removeListener('log', eventHandler);

  client.open();
  client.submit(new Bytecode());
  client.close();

  resultSet.toArray();
  resultSet.first();

  authenticator.evaluateChallenge("test");
  plainTextSaslAuthenticator.evaluateChallenge("test");
}

function processTests() {
  const bytecode = new Bytecode();
  const enumValue = new EnumValue("Int", "Test");
  const p = new P(operator.addall, 1);
  const textP = new TextP("operator", "test");
  const traversalStrategies = new TraversalStrategies();
  const traversal = new Traversal(null, traversalStrategies, bytecode);
  const traversalSideEffects = new TraversalSideEffects();
  const traversalStrategy = new TraversalStrategy();
  const traverser = new Traverser({});
  const graphTraversal = new GraphTraversal(null, traversalStrategies, bytecode);
  const graphTraversalSource = new GraphTraversalSource(null, traversalStrategies, bytecode);
  const translator = new Translator(graphTraversalSource);
  const anonymousTraversalSource = new AnonymousTraversalSource();

  bytecode.addSource("test");
  bytecode.addStep("test");
  bytecode.toString();

  enumValue.toString();

  p.and();
  p.or();
  p.toString();
  P.between();
  P.eq();
  P.gt();
  P.gte();
  P.inside();
  P.lt();
  P.lte();
  P.neq();
  P.not();
  P.outside();
  P.test();
  P.within();
  P.without();

  textP.and();
  textP.or();
  textP.toString();
  TextP.containing();
  TextP.endingWith();
  TextP.notContaining();
  TextP.notEndingWith();
  TextP.notStartingWith();
  TextP.startingWith();

  traversal.getBytecode();
  traversal.hasNext();
  traversal.iterate();
  traversal.next();
  traversal.toList();
  traversal.toString();

  traversalStrategies.addStrategy(traversalStrategy);
  traversalStrategies.applyStrategies(traversal);

  traversalStrategy.apply(traversal);

  graphTraversal.V();
  graphTraversal.addE();
  graphTraversal.addV();
  graphTraversal.inE();
  graphTraversal.outE();
  graphTraversal.drop();

  graphTraversalSource.E();
  graphTraversalSource.V();
  graphTraversalSource.addE();
  graphTraversalSource.addV();

  translator.getTraversalSource();
  translator.of(graphTraversalSource);
  translator.translate(bytecode);

  anonymousTraversalSource.withGraph(new Graph());
  anonymousTraversalSource.withRemote(new RemoteConnection("test"));
}

function structureTests() {
  const element = new Element(1, "test");
  const graphSonReader = new GraphSONReader();
  const graphSonWriter = new GraphSONWriter();
  const vertexProperty = new VertexProperty(1, "test", "test");
  const vertex = new Vertex(1, "test", [ vertexProperty ]);
  const edge = new Edge(1, vertex, "test", vertex);
  const graph = new Graph();
  const path = new Path([ "test" ], [ {} ]);
  const property = new Property("test", 1);
  const long = new Long("11111111111");

  element.equals(new Element(2, "test"));

  graphSonReader.read({});

  graphSonWriter.adaptObject({});
  graphSonWriter.write({});

  edge.equals(new Edge(2, vertex, "test", vertex));
  edge.toString();

  graph.toString();
  graph.traversal();

  path.equals(new Path([ "test" ], []));
  path.toString();

  property.equals(new Property("test", 1));
  property.toString();

  vertex.equals(new Vertex(2, "test"));
  vertex.toString();

  vertexProperty.equals(new VertexProperty(2, "test", 1));
  vertexProperty.toString();
}

function functionTests() {
  const traversal = AnonymousTraversalSource.traversal();
  const long = toLong("11111111111");
}

function predefinedEnumTests() {
  barrier.normsack.toString() === "normSack";
  cardinality.list.toString() === "list";
  cardinality.set.toString() === "set";
  cardinality.single.toString() === "single";
  column.keys.toString() === "keys";
  column.values.toString() === "values";
  direction.both.toString() === "BOTH";
  direction.in.toString() === "IN";
  direction.out.toString() === "OUT";
  graphSONVersion["v1_0"].toString() === "V1_0";
  graphSONVersion["v2_0"].toString() === "V2_0";
  graphSONVersion["v3_0"].toString() === "V3_0";
  gryoVersion["v1_0"].toString() === "V1_0";
  gryoVersion["v3_0"].toString() === "V3_0";
  operator.addall.toString() === "addAll";
  operator.and.toString() === "and";
  operator.assign.toString() === "assign";
  operator.div.toString() === "div";
  operator.max.toString() === "max";
  operator.min.toString() === "min";
  operator.minus.toString() === "minus";
  operator.mult.toString() === "mult";
  operator.or.toString() === "or";
  operator.sum.toString() === "sum";
  operator.sumlong.toString() === "sumLong";
  order.asc.toString() === "asc";
  order.decr.toString() === "decr";
  order.desc.toString() === "desc";
  order.incr.toString() === "incr";
  order.shuffle.toString() === "shuffle";
  pick.any.toString() === "any";
  pick.none.toString() === "none";
  pop.all.toString() === "all";
  pop.first.toString() === "first";
  pop.last.toString() === "last";
  pop.mixed.toString() === "mixed";
  scope.global.toString() === "global";
  scope.local.toString() === "local";
  t.id.toString() === "id";
  t.key.toString() === "key";
  t.label.toString() === "label";
  t.value.toString() === "value";
}

function dslTests() {
  // DSL definition

  interface TestDSLStatics extends Statics<TestDSLTraversal> {
      aged: (age: number) => TestDSLTraversal;
      hasNotLabel: (...args: string[]) => TestDSLTraversal;
  }

  let __: TestDSLStatics;

  class TestDSLTraversal extends GraphTraversal {
    private static _statics: TestDSLStatics;

    static get statics(): TestDSLStatics {
      if (!TestDSLTraversal._statics) {
        // Should construct a proper statics object here that fits the return type
        // ie. merge the newly defined DSL steps with the base Tinkerpop statics
        TestDSLTraversal._statics = <TestDSLStatics> statics;
      }

      return TestDSLTraversal._statics;
    }

    aged(age: number): TestDSLTraversal {
      return this.has('person', 'age', age);
    }

    hasNotLabel(...args: string[]): TestDSLTraversal {
      return this.not(__.hasLabel(...args));
    }
  }

  class TestDSLTraversalSource extends GraphTraversalSource<TestDSLTraversal> {
    person(name: string): TestDSLTraversal {
      return this.V().has('person', 'name', name);
    }
  }

  // DSL usage

  __ = TestDSLTraversal.statics;

  const connection = new DriverRemoteConnection('test');
  const g = traversal(TestDSLTraversalSource).withRemote(connection);

  g.person('test').aged(33);
  g.person('test').where(__.hasNotLabel('test')).aged(33);
  g.V().where(__.hasNotLabel('test'));
  g.V().aged(33);
}

async function asyncIteratorTest() {
  const t = new process.Traversal(null, null, new Bytecode());

  // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
  for await (const v of t) {
    v;
  }
}
