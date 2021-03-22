// Type definitions for @wordpress/plugins 2.3
// Project: https://github.com/WordPress/gutenberg/tree/master/packages/plugins/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import { Dashicon } from '@wordpress/components';
import { ComponentType } from 'react';

export interface PluginSettings {
    /**
     * An icon to be shown in the UI. It can be a slug of the Dashicon, or an
     * element (or function returning an element) if you choose to render your
     * own SVG.
     */
    icon: Dashicon.Icon | ComponentType;
    /**
     * A component containing the UI elements to be rendered.
     */
    render: ComponentType;
}

export interface Plugin extends PluginSettings {
    /**
     * A string identifying the plugin. Must be unique across all registered
     * plugins.
     */
    name: string;
}

export type PluginContext = Omit<Plugin, 'render'>;

/**
 * A component that renders all plugin fills in a hidden div.
 */
export const PluginArea: ComponentType;

/**
 * Returns a registered plugin settings.
 *
 * @param name - Plugin name.
 */
export function getPlugin(name: string): Plugin | undefined;

/**
 * Returns all registered plugins.
 */
export function getPlugins(): Plugin[];

/**
 * Registers a plugin to the editor.
 *
 * @param name - A string identifying the plugin. Must be unique across all registered plugins.
 * @param settings - The settings for this plugin.
 * @returns The final plugin settings object.
 */
export function registerPlugin(name: string, settings: PluginSettings): PluginSettings;

/**
 * Unregisters a plugin by name.
 *
 * @param name - Plugin name.
 * @returns The previous plugin settings object, if it has been successfully
 *     unregistered; otherwise `undefined`.
 */
export function unregisterPlugin(name: string): Plugin | undefined;

/**
 * A Higher Order Component used to inject Plugin context to the wrapped component.
 */
export function withPluginContext<CP = {}, OP = {}>(
    mapContextToProps: (context: PluginContext, props: OP) => CP
): (Component: ComponentType<CP & OP>) => ComponentType<OP>;
