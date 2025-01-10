import { dispatch, select } from "@wordpress/data";
import * as ep from "@wordpress/edit-post";

// $ExpectType EditPostStoreDescriptor
ep.store;

// $ExpectType "core/edit-post"
ep.store.name;

// $ExpectType void
ep.initializeEditor("abc", "post", "123");

// $ExpectType void
ep.initializeEditor("abc", "post", 123, {});

// $ExpectType void
ep.initializeEditor("abc", "post", "123", { alignWide: true, disableCustomColors: true }, { foo: "bar" });

// $ExpectType void
ep.reinitializeEditor("post", "123", document.createElement("div"));

// $ExpectType void
ep.reinitializeEditor("post", 123, document.createElement("div"), {});

// $ExpectType void
ep.reinitializeEditor("post", 123, document.createElement("div"), { codeEditingEnabled: true });

//
// PluginBlockSettingsMenuItem
//
<ep.PluginBlockSettingsMenuItem
    allowedBlocks={["core/paragraph"]}
    icon="carrot"
    label="Menu item text"
    onClick={() => console.log("clicked")}
/>;

<ep.PluginBlockSettingsMenuItem label="Menu item text" onClick={() => console.log("clicked")} />;

//
// store
//

// $ExpectType void
dispatch("core/edit-post").hideBlockTypes("foo");

// $ExpectType void
dispatch("core/edit-post").hideBlockTypes(["foo", "bar"]);

// $ExpectType void
dispatch("core/edit-post").switchEditorMode("visual");

// $ExpectType void
dispatch("core/edit-post").toggleFeature("foo");

// $ExpectType string | null
select("core/edit-post").getActiveGeneralSidebarName();

// $ExpectType MetaboxLocation[]
select("core/edit-post").getActiveMetaBoxLocations();

// $ExpectType unknown
select("core/edit-post").getPreference("foo");

// $ExpectType string | undefined
select("core/edit-post").getPreference<string>("foo");

// $ExpectType number
select("core/edit-post").getPreference("foo", 123);

// $ExpectType boolean
select("core/edit-post").isMetaBoxLocationActive("advanced");

// $ExpectType MetaboxDescriptor[]
select("core/edit-post").getAllMetaBoxes();
