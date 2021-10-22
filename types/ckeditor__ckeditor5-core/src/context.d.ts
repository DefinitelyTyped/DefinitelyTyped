import Config from "@ckeditor/ckeditor5-utils/src/config";
import Collection from "@ckeditor/ckeditor5-utils/src/collection";
import PluginCollection from "./plugincollection";
import Locale from "@ckeditor/ckeditor5-utils/src/locale";
import Plugin, { LoadedPlugins } from "./plugin";
import Editor from "./editor/editor";

export default class Context {
    readonly config: Config;
    readonly editors: Collection<Editor>;
    readonly locale: Locale;
    readonly plugins: PluginCollection;

    static builtinPlugins: Array<typeof Plugin>;
    static defaultConfig: Record<string, unknown>;
    static create(config: Record<string, unknown>): Promise<Context>;

    constructor(config?: Record<string, unknown>);
    destroy(): Promise<void>;
    initPlugins(): Promise<LoadedPlugins>;
    t: Locale["t"];
}
