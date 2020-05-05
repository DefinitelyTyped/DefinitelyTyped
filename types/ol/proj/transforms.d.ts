import { TransformFunction } from '../proj';
import Projection from './Projection';

export function add(source: Projection, destination: Projection, transformFn: TransformFunction): void;
export function clear(): void;
export function get(sourceCode: string, destinationCode: string): TransformFunction;
export function remove(source: Projection, destination: Projection): TransformFunction;
