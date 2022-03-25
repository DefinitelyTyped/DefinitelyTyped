import { QueryGraph, toposort } from '@lerna/query-graph';

new QueryGraph([]);
toposort([], { graphType: 'allDependencies' });
