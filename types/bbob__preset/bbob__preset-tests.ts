import { Attrs, Node } from "@bbob/plugin-helper";
import { Core, DefTags, PresetFactory, PresetOptions, createPreset } from "@bbob/preset";

function processor(tags: Attrs, tree: Node[], core: Core, options: PresetOptions) {
    return tags
}

const defTags: DefTags = { test: true }
const options: PresetOptions = { foo: 'bar' }
const tree: Node[] = []
// $ExpectType PresetFactory
const preset = createPreset(defTags, processor)

// $ExpectType Attrs
preset(options)(tree);

const extendedTags = { bar: true };
const preset2 = preset.extend(tags => ({ ...tags, ...extendedTags }));

// $ExpectType Attrs
preset(options)(tree);

const preset3 = preset.extend((tags, options) => ({ bar: true }));

// $ExpectType PresetExecutor
const instance = preset({ foo: 'bar' });
// $ExpectType PresetExecutor
const instance2 = preset3({ some: true });

// $ExpectType object
instance.options

// $ExpectType object
instance2.options
