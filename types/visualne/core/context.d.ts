import { Component } from "../engine";
import { Emitter } from "./emitter";
import { EventsTypes as DefaultEvents, Events } from "./events";
import { IPlugin, Plugin, PluginParams } from "./plugin";
/**
 * @brief - Context class
 * This class is the context between the editor and the plugins
 * This context class also keeps the components and the plugins
 */
export declare class Context<EventsTypes> extends Emitter<EventsTypes & DefaultEvents> {
    id: string;
    plugins: Map<string, IPlugin>;
    components: Map<string, Component>;
    constructor(id: string, events: Events);
    use<TSystem extends IPlugin = Plugin, KParams extends PluginParams = PluginParams>(Ctor: {
        new (ctx: Context<EventsTypes & DefaultEvents>, ...args: any[]): TSystem;
    }, attributes?: KParams): void;
    register(component: Component): void;
    destroy(): void;
}
