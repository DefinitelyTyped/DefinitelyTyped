/// <reference types="node" />
import { EventEmitter } from 'events';
import Lasso from './Lasso';
import { DependencyRegistry } from './dependencies';
import { writers } from '../index';

export default class LassoContext extends EventEmitter {
  constructor();

  LassoContext: boolean;
  basePath?: string;
  contentType?: string;
  data?: any;
  dependencyRegistry: DependencyRegistry;
  flags: any[];
  config: any;
  writer: writers.Writer;
  lasso: Lasso;
  cache: any;
  options: any;
}
