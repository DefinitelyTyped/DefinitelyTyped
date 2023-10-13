// Type definitions for @bbob/preset 3.0
// Project: https://github.com/JiLiZART/bbob
// Definitions by: shme-e <https://github.com/shme-e>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Attrs, Node } from "@bbob/plugin-helper"

export type PresetFactory = ((options?: PresetOptions) => PresetExecutor) & { 
    options?: PresetOptions,
    extend: (callback: (defTags: DefTags, options: PresetOptions) => DefTags) => PresetFactory
};
export type PresetOptions = object
export type PresetExecutor = ((tree: Node[], core?: Core) => DefTags) & { options: PresetOptions };
export type PresetProcessor = (tags: DefTags, tree: Node[], core: Core, options: PresetOptions) => DefTags;
export type DefTags = Attrs
export type Core = any

/**
 * Creates preset for @bbob/core
 */
export function createPreset(defTags: DefTags, processor?: PresetProcessor): PresetFactory;
