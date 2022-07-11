import { WaveSurferParams } from '../types/params';
import { PluginDefinition, WaveSurferPlugin } from '../types/plugin';
import WaveSurfer from './wavesurfer';

export default class Init {
    constructor(waveSurfer: WaveSurfer, params?: InitParams);

    /** Initialize all container elements. */
    initAllEls(): void;
    /** Initialize a single container element and add to `this.instances`. */
    initEl(el: HTMLElement, plugins: PluginDefinition[]): WaveSurfer;

    /** The nodes that should have instances attached to them. */
    readonly containers: NodeList;
    /** An array of wavesurfer instances. */
    readonly instances: WaveSurfer[];
}

export interface InitParams {
    /** The default wavesurfer initialisation parameters (default: { backend: 'MediaElement', mediaControls: true }). */
    defaults?: WaveSurferParams | undefined;
    /** Selector or NodeList of elements to attach instances to. */
    containers?: string | NodeList | undefined;
    /** URL template for the dynamic loading of plugins (default: '//localhost:8080/dist/plugin/wavesurfer.[name].js'). */
    pluginCdnTemplate?: string | undefined;
    /** If set overwrites the default request function, can be used to inject plugins differently. */
    loadPlugin?: ((pluginName: string, callback: (plugin: WaveSurferPlugin) => void) => void) | undefined;
}
