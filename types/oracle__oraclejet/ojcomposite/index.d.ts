export function getComponentMetadata(name: string): Metadata | null;
export function register(name: string, descriptor: {
    metadata: Metadata;
    view: string;
    viewModel: (param0: ViewModelContext) => void | object;
    parseFunction: (value: string, name: string, meta: object, defaultParseFunction: (value: string) => any) => any;
}): void;
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type Metadata = {
    name: string;
    version: string;
    jetVersion: string;
    properties?: object | undefined;
    methods?: object | undefined;
    events?: object | undefined;
    slots?: object | undefined;
};
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type PropertyChangedContext = {
    property: string;
    value: any;
    previousValue: any;
    updatedFrom: "external" | "internal";
    subproperty?: {
        path: string;
        value: any;
        previousValue: any;
    } | undefined;
};
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type ViewModel = {
    activated: (param0: ViewModelContext) => Promise<any> | void;
    connected: (param0: ViewModelContext) => void;
    bindingsApplied: (param0: ViewModelContext) => void;
    propertyChanged: (param0: PropertyChangedContext) => void;
    disconnected: (param0: Element) => void;
};
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type ViewModelContext = {
    element: Element;
    properties: object;
    slotCounts: object;
    unique: string;
    uniqueId: string;
};
