import { Entity } from '../index';
import Context = require('./Context');

export = OutgoingContext;

declare class OutgoingContext<TEntity extends Entity> extends Context<TEntity> {}
