import { NamedNode } from 'rdf-js';
import { GraphPointer } from 'clownface';
import LoaderRegistry = require('rdf-loaders-registry');

const registry: LoaderRegistry = new LoaderRegistry();
const node: GraphPointer = <any> {};

type IntegerLoader = LoaderRegistry.Loader<number>;
interface Nebula {
  label: string;
  distance: number;
}
type NebulaLoader = LoaderRegistry.Loader<Nebula, { bar: string }>;

async function basicLoading() {
  const integer: NamedNode = <any> {};
  const nebula: NamedNode = <any> {};

  const integerLoader: IntegerLoader = (numberNode: GraphPointer): number => {
    return 0;
  };

  const nebulaLoader: NebulaLoader = async (term: GraphPointer, { loaderRegistry, bar }): Promise<Nebula> => {
    return {
      label: bar,
      distance: await loaderRegistry.load<number>(term) || 0
    };
  };

  registry.registerLiteralLoader(integer, integerLoader);
  registry.registerNodeLoader(nebula, nebulaLoader);

  const result: Nebula | undefined = await registry.load<Nebula>(node);
}

async function loadWithSpecificLoaderInferOptionType() {
  const result = registry.load<Nebula, NebulaLoader>(node, { bar: 'baz' });
  if (result) {
    const nebula: Nebula = await result;
  }

  // $ExpectError
  await registry.load<Nebula, NebulaLoader>(node, {});
  // $ExpectError
  await registry.load<Nebula, NebulaLoader>(node, { bar: 5 });
}

async function wrongLoaderForType() {
  // $ExpectError
  await registry.load<string, NebulaLoader>(node);
}

const nebulaLoader: NebulaLoader | null = registry.loader(node);
