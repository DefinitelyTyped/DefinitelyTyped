import { Entity, IncomingContext, Middleware } from '@xmpp/middleware';
import * as koaCompose from 'koa-compose';

export = iqCallee;

declare function iqCallee<TEntity extends Entity>({
    middleware,
    entity,
}: {
    middleware: Middleware<TEntity>;
    entity: TEntity;
}): iqCallee.IQCallee<TEntity>;

declare namespace iqCallee {
    /**
     * Implements the callee side of iq semantics.
     *
     * You can think of this as http routing except there are only 2 methods; `get` and `set`
     * and you would pass a namespace and a tag name instead of an url. The return value of
     * the handler will be the child element of the response sent to the caller.
     */
    // tslint:disable-next-line:interface-name
    interface IQCallee<TEntity extends Entity> {
        /**
         * Add a `get` handler.
         *
         * @example
         * iqCallee.get('foo:bar', 'foo', (ctx) => {
         *   return xml('foo', { xmlns: 'foo:bar' });
         * });
         */
        get(ns: string, name: string, handler: koaCompose.Middleware<IncomingContext<TEntity>>): void;
        /**
         * Add a `set` handler.
         *
         * @example
         * iqCallee.set('foo:bar', 'foo', (ctx) => {
         *   return xml('foo', { xmlns: 'foo:bar' });
         * });
         */
        set(ns: string, name: string, handler: koaCompose.Middleware<IncomingContext<TEntity>>): void;
    }
}
