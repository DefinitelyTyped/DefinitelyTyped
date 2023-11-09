import { PluginOptions, Tree } from "@bbob/core";
import { Attrs, Content, TagNode } from "@bbob/plugin-helper";

export type PresetFactory = ((options?: PresetOptions) => PresetExecutor) & {
    options?: PresetOptions;
    extend: (callback: (defTags: DefaultTags, options: PresetOptions) => DefaultTags) => PresetFactory;
};
export type PresetOptions = object;
export type PresetExecutor = ((tree: Tree, core?: Core) => void) & { options: PresetOptions };
export type PresetProcessor = (tags: DefaultTags, tree: Tree, core: Core, options: PresetOptions) => DefaultTags;
export interface DefaultTags {
    [tag: string]: TagFunction;
}
export type TagFunction = (node: TagNode, pluginOptions?: PluginOptions, options?: PresetOptions) => TagNode;
export type Core = PluginOptions;

/**
 * Creates preset for @bbob/core
 */
export function createPreset(defTags: DefaultTags, processor?: PresetProcessor): PresetFactory;
export default createPreset;
