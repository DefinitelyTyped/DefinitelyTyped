// Test presence in the global scope
window.BdApi; // $ExpectType BdApi
global.BdApi; // $ExpectType BdApi

// lodash is available globally in the discord app
_;
window._;

BdApi; // $ExpectType BdApi
BdApi.alert("foo", "bar"); // $ExpectType void
BdApi.showToast("hello", { timeout: 2000 }); // $ExpectType void

BdApi.ContextMenu; // $ExpectType ContextMenu
BdApi.ContextMenu.buildItem({ type: "toggle", label: "Item Toggle", checked: false }); // $ExpectType object

BdApi.DOM; // $ExpectType DOM
BdApi.DOM.screenHeight; // $ExpectType number
BdApi.DOM.screenWidth; // $ExpectType number
BdApi.DOM.addStyle("id", "css"); // $ExpectType void

BdApi.Data; // $ExpectType Data
BdApi.Data.delete("pluginName", "key"); // $ExpectType void
BdApi.Data.load("pluginName", "key"); // $ExpectType any
BdApi.Data.save("pluginName", "key", "data"); // $ExpectType void

BdApi.Patcher; // $ExpectType Patcher
BdApi.Patcher.after("caller", {}, "functionName", () => {}); // $ExpectType () => void
BdApi.Patcher.before("caller", {}, "functionName", () => {}); // $ExpectType () => void
BdApi.Patcher.getPatchesByCaller("caller"); // $ExpectType (() => void)[]
BdApi.Patcher.instead("caller", {}, "functionName", () => {}); // $ExpectType () => void
BdApi.Patcher.unpatchAll("caller"); // $ExpectType void

BdApi.Plugins; // $ExpectType AddonAPI
BdApi.Plugins.folder; // $ExpectType string
BdApi.Plugins.disable("irOrFile"); // $ExpectType void
BdApi.Plugins.enable("irOrFile"); // $ExpectType void
BdApi.Plugins.get("irOrFile"); // $ExpectType any
BdApi.Plugins.getAll(); // $ExpectType any[]
BdApi.Plugins.isEnabled("irOrFile"); // $ExpectType boolean
BdApi.Plugins.reload("irOrFile"); // $ExpectType void
BdApi.Plugins.toggle("irOrFile"); // $ExpectType void

BdApi.ReactUtils; // $ExpectType ReactUtils
BdApi.ReactUtils.getInternalInstance(new HTMLElement()); // $ExpectType ReactNode
BdApi.ReactUtils.getOwnerInstance(new HTMLElement(), {}); // $ExpectType ReactNode
BdApi.ReactUtils.wrapElement(new HTMLElement()); // $ExpectType ReactNode

BdApi.Themes; // $ExpectType AddonAPI
BdApi.Themes.folder; // $ExpectType string
BdApi.Themes.disable("irOrFile"); // $ExpectType void
BdApi.Themes.enable("irOrFile"); // $ExpectType void
BdApi.Themes.get("irOrFile"); // $ExpectType any
BdApi.Themes.getAll(); // $ExpectType any[]
BdApi.Themes.isEnabled("irOrFile"); // $ExpectType boolean
BdApi.Themes.reload("irOrFile"); // $ExpectType void
BdApi.Themes.toggle("irOrFile"); // $ExpectType void

BdApi.UI; // $ExpectType UI
BdApi.UI.alert("title", "content"); // $ExpectType void
BdApi.UI.createTooltip(new HTMLElement(), "content", {}); // $ExpectType Tooltip
BdApi.UI.openDialog({}); // $ExpectType Promise<DialogResult>
BdApi.UI.showConfirmationModal("title", [], {}); // $ExpectType string
BdApi.UI.showNotice("content", {}); // $ExpectType () => void
BdApi.UI.showToast("content", {}); // $ExpectType void

BdApi.Utils; // $ExpectType Utils
BdApi.Utils.className({}); // $ExpectType string

BdApi.Webpack; // $ExpectType Webpack
BdApi.Webpack.Filters; // $ExpectType Filters
BdApi.Webpack.Filters.byDisplayName("name"); // $ExpectType Filter
BdApi.Webpack.Filters.byProps(["prop"]); // $ExpectType Filter
BdApi.Webpack.Filters.byPrototypeFields(["prop"]); // $ExpectType Filter
BdApi.Webpack.Filters.byRegex(/name/, module => true); // $ExpectType Filter
BdApi.Webpack.Filters.byStrings(["string"]); // $ExpectType Filter
BdApi.Webpack.getModule(module => true); // $ExpectType object | null
