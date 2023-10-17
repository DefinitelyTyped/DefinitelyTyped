export class Client {
    static Stanza: Stanza;

    constructor(options: XmppOptions);

    connect(): void;

    disconnect(): void;

    on(event: string, c: (e: any, d: any) => any): void;

    send(stanza: any): void;
}

export interface Stanza extends Element {
    // This has to be used for the static class initializer new Client.Stanza(..). If there is a better way feel free to
    // contribute.
    // tslint:disable-next-line:no-misused-new
    new(name: string, attr: any): Stanza;
    from: string;
    to: string;
    id: string;
    type: string;
}

export interface Element {
    is(name: string, xmlns: string): boolean;
    getName(): string;
    getNS(): string;
    findNS(prefix: string): string;
    getXmlns(): string;
    setAttrs(attrs: any): void;
    getAttrs(): any;

    up(): Element;
    c(name: string, attrs?: any): Element;
    cnode(child: Element): Element;
    t(text: string): Element;
    remove(el: Element, xmnls: string): Element;
    attr(attr: any, val: any): any;

    toString(): string;
    toJSON(): any;
}

export interface XmppOptions {
    jid: string;
    password: string;
    host?: string | undefined;
    port?: number | undefined;
    reconnect?: boolean | undefined;
    autostart?: boolean | undefined; // if we start connecting to a given port
    register?: boolean | undefined; // register account before authentication
    legacySSL?: boolean | undefined; // connect to the legacy SSL port, requires at least the host to be specified
    credentials?: any; // Dictionary (optional) - TLS or SSL key and certificate credentials
    actAs?: string | undefined; // if admin user act on behalf of another user (just user)
    disallowTLS?: boolean | undefined; // prevent upgrading the connection to a secure one via TLS
    preferred?: string | undefined; // Preferred SASL mechanism to use
    bosh?: Bosh | undefined;
}

export interface Bosh {
    url?: string | undefined;
    prebind?(error: any, data: any): void;
}
