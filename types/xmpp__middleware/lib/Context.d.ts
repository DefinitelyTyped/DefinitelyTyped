import { JID } from '@xmpp/jid';
import { Element } from '@xmpp/xml';
import { Entity } from '../index';

export = Context;

declare class Context<TEntity extends Entity> {
    stanza: Element;
    entity: TEntity;
    name: string;
    id: string;
    type: string;
    from: JID | null;
    to: JID | null;
    local: string;
    domain: string;
    resource: string;

    constructor(entity: TEntity, stanza: Element);
}
