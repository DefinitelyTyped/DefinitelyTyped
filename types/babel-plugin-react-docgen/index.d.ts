type BabelPluginObj = any;

// from react-docgen parse.ts
export type Importer = (path: any, name: string) => any;
export type Handler = (documentation: any, path: any, importer: Importer) => void;
export type Resolver = (node: any, parser: any, importer: Importer) => any;

export interface Options {
    resolver?:
        | "findAllComponentDefinitions"
        | "findAllExportedComponentDefinitions"
        | "findExportedComponentDefinition"
        | Resolver;
    handlers?: Array<string | Handler>;
    removeMethods?: boolean;
    DOC_GEN_COLLECTION_NAME?: string;
}

declare function babelPluginReactDocgen(babelApi: any): BabelPluginObj;
export default babelPluginReactDocgen;

export interface ComponentType {
    // DocumentationObject
    __docgenInfo: any;
}
