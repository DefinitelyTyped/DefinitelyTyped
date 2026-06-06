type Handle = string;
type InternalId = string;

type RemoteValue =
    | PrimitiveProtocolValue
    | SymbolRemoteValue
    | ArrayRemoteValue
    | ObjectRemoteValue
    | FunctionRemoteValue
    | RegExpRemoteValue
    | DateRemoteValue
    | MapRemoteValue
    | SetRemoteValue
    | WeakMapRemoteValue
    | WeakSetRemoteValue
    | GeneratorRemoteValue
    | ErrorRemoteValue
    | ProxyRemoteValue
    | PromiseRemoteValue
    | TypedArrayRemoteValue
    | ArrayBufferRemoteValue
    | NodeListRemoteValue
    | HTMLCollectionRemoteValue
    | NodeRemoteValue
    | WindowProxyRemoteValue;

interface PrimitiveProtocolValue {
    type: "undefined" | "null" | "string" | "number" | "boolean" | "bigint";
    value: any;
}

interface SymbolRemoteValue {
    type: "symbol";
    handle?: Handle;
    internalId?: InternalId;
}

interface ArrayRemoteValue {
    type: "array";
    handle?: Handle;
    internalId?: InternalId;
    value?: ListRemoteValue;
}

type ListRemoteValue = RemoteValue[];

interface ObjectRemoteValue {
    type: "object";
    handle?: Handle;
    internalId?: InternalId;
    value?: MappingRemoteValue;
}

type MappingRemoteValue = [key: RemoteValue | string, value: RemoteValue][];

interface FunctionRemoteValue {
    type: "function";
    handle?: Handle;
    internalId?: InternalId;
}

interface RegExpRemoteValue {
    type: "regexp";
    handle?: Handle;
    internalId?: InternalId;
    pattern: string;
    flags: string;
}

interface DateRemoteValue {
    type: "date";
    handle?: Handle;
    internalId?: InternalId;
    value: string;
}

interface MapRemoteValue {
    type: "map";
    handle?: Handle;
    internalId?: InternalId;
    value?: MappingRemoteValue;
}

interface SetRemoteValue {
    type: "set";
    handle?: Handle;
    internalId?: InternalId;
    value?: ListRemoteValue;
}

interface WeakMapRemoteValue {
    type: "weakmap";
    handle?: Handle;
    internalId?: InternalId;
}

interface WeakSetRemoteValue {
    type: "weakset";
    handle?: Handle;
    internalId?: InternalId;
}

interface GeneratorRemoteValue {
    type: "generator";
    handle?: Handle;
    internalId?: InternalId;
}

interface ErrorRemoteValue {
    type: "error";
    handle?: Handle;
    internalId?: InternalId;
    name: string;
    message: string;
    stack?: string;
}

interface ProxyRemoteValue {
    type: "proxy";
    handle?: Handle;
    internalId?: InternalId;
}

interface PromiseRemoteValue {
    type: "promise";
    handle?: Handle;
    internalId?: InternalId;
}

interface TypedArrayRemoteValue {
    type: "typedarray";
    handle?: Handle;
    internalId?: InternalId;
    typedArrayKind: string;
    byteLength: number;
}

interface ArrayBufferRemoteValue {
    type: "arraybuffer";
    handle?: Handle;
    internalId?: InternalId;
    byteLength: number;
}

interface NodeListRemoteValue {
    type: "nodelist";
    handle?: Handle;
    internalId?: InternalId;
    value?: ListRemoteValue;
}

interface HTMLCollectionRemoteValue {
    type: "htmlcollection";
    handle?: Handle;
    internalId?: InternalId;
    value?: ListRemoteValue;
}

interface NodeRemoteValue {
    type: "node";
    handle?: Handle;
    internalId?: InternalId;
    sharedId?: string;
    value?: NodeProperties;
}

interface NodeProperties {
    nodeType: number;
    childNodeCount: number;
    attributes?: { [key: string]: string };
    children?: NodeRemoteValue[];
    localName?: string;
    mode?: "open" | "closed";
    namespaceURI?: string;
    nodeValue?: string;
    shadowRoot?: NodeRemoteValue | null;
}

interface WindowProxyRemoteValue {
    type: "window";
    value: WindowProxyProperties;
    handle?: Handle;
    internalId?: InternalId;
}

interface WindowProxyProperties {
    context: BrowsingContext;
}

interface BrowsingContext {
    id: string;
    url: string;
}

export {
    ArrayBufferRemoteValue,
    ArrayRemoteValue,
    BrowsingContext,
    DateRemoteValue,
    ErrorRemoteValue,
    FunctionRemoteValue,
    GeneratorRemoteValue,
    HTMLCollectionRemoteValue,
    ListRemoteValue,
    MappingRemoteValue,
    MapRemoteValue,
    NodeListRemoteValue,
    NodeProperties,
    NodeRemoteValue,
    ObjectRemoteValue,
    PromiseRemoteValue,
    ProxyRemoteValue,
    RegExpRemoteValue,
    RemoteValue,
    SetRemoteValue,
    SymbolRemoteValue,
    TypedArrayRemoteValue,
    WeakMapRemoteValue,
    WeakSetRemoteValue,
    WindowProxyProperties,
    WindowProxyRemoteValue,
};
