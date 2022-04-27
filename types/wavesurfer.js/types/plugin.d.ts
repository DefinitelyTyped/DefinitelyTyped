import WaveSurfer from '../src/wavesurfer';

export abstract class WaveSurferPlugin {
    constructor(params: Record<string, unknown>, ws: WaveSurfer);
    static create(params: Record<string, unknown>): PluginDefinition;
    init(): void;
    destroy(): void;
}

export interface PluginDefinition {
    /** The name of the plugin, the plugin instance will be added as a property to the wavesurfer instance under this name. */
    name: string;
    /** The properties that should be added to the wavesurfer instance as static properties. */
    staticProps?: { [staticPropName: string]: unknown } | undefined;
    /** Don't initialise plugin automatically. */
    deferInit?: boolean | undefined;
    /** The plugin parameters, they are the first parameter passed to the plugin class constructor function. */
    params: PluginParams;
    /** The plugin instance factory, is called with the dependency specified in extends. Returns the plugin class. */
    instance: { new (params: PluginDefinition['params'], ws: WaveSurfer): WaveSurferPlugin };
}

export interface PluginParams {
    [paramName: string]: unknown;
    /** Set to true to manually call (default: false). */
    deferInit?: boolean | undefined;
}
