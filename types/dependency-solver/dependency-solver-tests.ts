import { addMissingKeys, getDependedBy, getDependencyLines, getEdges, getInDegree, solve } from 'dependency-solver';

const graph: { [key: string]: string[] } = addMissingKeys({ a: ['b', 'c'], c: ['b'] });
const dependedBy_1: { [key: string]: number } = getDependedBy({ a: ['b', 'c'], c: ['b'] });
const dependedBy_2: { [key: string]: number } = getEdges({ a: ['b', 'c'], c: ['b'] });
const dependencyLines_1: Array<[string, string]> = getDependencyLines({ a: ['b', 'c'], c: ['b'] });
const dependencyLines_2: Array<[string, string]> = getInDegree({ a: ['b', 'c'], c: ['b'] });
const solved: string[] = solve({ a: ['b', 'c'], c: ['b'] });
