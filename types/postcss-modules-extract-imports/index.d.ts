import { PluginCreator } from "postcss";

declare namespace extractImports {
    interface Options {
        failOnWrongOrder?: boolean | undefined;
        createImportedName?: ((importName: string, importPath: string) => string) | undefined;
    }
}

declare const extractImports: PluginCreator<extractImports.Options>;
export = extractImports;
