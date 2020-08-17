
import { Obj } from './Obj';
import { Binary } from './Binary';
import { CSSProperties, Component } from 'react';
import { Widget } from './Widget';


export interface InternalLinkAttributes {
    hash?: string,
    obj: Obj,
    query: string,
    rel?: string,
    target?: string,
    title?: string,
}

interface ExternalLinkAttributes {
    query?: string,
    rel?: string,
    target?: string,
    title?: string,
    url: string
}

//Less guarantees
export class Link extends __Link {
    constructor(attributes: InternalLinkAttributes | ExternalLinkAttributes);
    hash(): string | null;
    obj(): Obj | null;
    query(): string | null;
    url(): string | null;

}

class __Link {
    copy(attributes: InternalLinkAttributes): InternalLink;
    copy(attributes: ExternalLinkAttributes): ExternalLink;
    isExternal(): boolean;
    isInternal(): boolean;
    queryParamters(): any;
    rel(): string | null;
    target(): string | null;
    title(): string | null;
}

//experimental
export class InternalLink extends __Link {
    constructor(attributes: InternalLinkAttributes);
    hash(): string;
    obj(): Obj;
    query(): string;
}

export class ExternalLink extends __Link {
    constructor(attributes: ExternalLinkAttributes);
    url(): string;
}