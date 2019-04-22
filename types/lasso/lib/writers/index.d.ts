import { LassoConfig } from '../Lasso';
import _Writer from './Writer';

export interface Writer extends _Writer {}

export function fileWriter(fileWriterConfig: any, lassoConfig: LassoConfig): any;

export function createWriter(writerImpl: any): Writer;
