import { Entity, IncomingContext } from '@xmpp/middleware';
import * as Koa from 'koa';

export = route;

declare function route(): (context: IncomingContext<Entity>, next: Koa.Next) => Promise<any>;
