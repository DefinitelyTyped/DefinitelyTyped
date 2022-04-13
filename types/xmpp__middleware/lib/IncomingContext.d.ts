import { Entity } from '../index';
import Context = require('./Context');

export = IncomingContext;

declare class IncomingContext<TEntity extends Entity> extends Context<TEntity> {}
