import { QueryComplexityOptions } from './QueryComplexity';
export default function createQueryComplexityValidator(options: QueryComplexityOptions): () => void;
export type ComplexityResolver = (args: any, complexity: number) => number;
export type Complexity = number | ComplexityResolver;
