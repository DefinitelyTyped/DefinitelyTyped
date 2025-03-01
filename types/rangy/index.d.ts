import { RangyStatic } from "./rangy-core";

export * from "./rangy-classapplier";
export * from "./rangy-core";
export * from "./rangy-highlighter";
export * from "./rangy-selectionsaverestore";
export * from "./rangy-serializer";
export * from "./rangy-textrange";

// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
declare var rangy: RangyStatic;

declare module "rangy" {
    const rangy: RangyStatic;
    export = rangy;
}