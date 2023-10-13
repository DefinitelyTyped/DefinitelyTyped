import { Tree } from "@bbob/core";
import { Attrs, Node } from "@bbob/plugin-helper";
import { Core, createPreset, DefaultTags, PresetFactory, PresetOptions } from "@bbob/preset";

const defTags = <DefaultTags> <unknown> undefined;

// $ExpectType PresetFactory
createPreset(defTags);

function processor(tags: DefaultTags, tree: Tree, core: Core, options: PresetOptions) {
    return tags;
}
const options: PresetOptions = { foo: "bar" };
const tree = <Tree> <unknown> undefined;
// $ExpectType PresetFactory
const preset = createPreset(defTags, processor);

// $ExpectType void
preset(options)(tree);

const extendedTags = <DefaultTags> <unknown> undefined;
const preset2 = preset.extend(tags => ({ ...tags, ...extendedTags }));

// $ExpectType void
preset(options)(tree);

const preset3 = preset.extend((tags, options) => extendedTags);

// $ExpectType PresetExecutor
const instance = preset({ foo: "bar" });
// $ExpectType PresetExecutor
const instance2 = preset3({ some: true });

// $ExpectType object
instance.options;

// $ExpectType object
instance2.options;
