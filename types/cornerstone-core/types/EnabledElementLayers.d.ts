import { EnabledElementLayer, Image } from "./Objects";

/**
 * Rescale the target layer to the base layer based on the
 * relative size of each image and their pixel dimensions.
 *
 * This function will update the Viewport parameters of the
 * target layer to a new scale.
 *
 * @param baseLayer The base layer
 * @param targetLayer The target layer to rescale
 */
export function rescaleImage(baseLayer: EnabledElementLayer, targetLayer: EnabledElementLayer): void;
/**
 * Add a layer to a Cornerstone element
 *
 * @param element The DOM element enabled for Cornerstone
 * @param image A Cornerstone Image object to add as a new layer
 * @param options Options for the layer
 *
 * @returns layerId The new layer's unique identifier
 */
export function addLayer(element: HTMLElement, image: Image, options: EnabledElementLayer['options']): string;
/**
 * Remove a layer from a Cornerstone element given a layer ID
 *
 * @param element The DOM element enabled for Cornerstone
 * @param layerId The unique identifier for the layer
 */
export function removeLayer(element: HTMLElement, layerId: string): void;
/**
 * Retrieve a layer from a Cornerstone element given a layer ID
 *
 * @param element The DOM element enabled for Cornerstone
 * @param layerId The unique identifier for the layer
 * @return The layer
 */
export function getLayer(element: HTMLElement, layerId: string): EnabledElementLayer;
/**
 * Retrieve all layers for a Cornerstone element
 *
 * @param element The DOM element enabled for Cornerstone
 *
 * @return An array of layers
 */
export function getLayers(element: HTMLElement): EnabledElementLayer[];
/**
 * Retrieve all visible layers for a Cornerstone element
 *
 * @param element The DOM element enabled for Cornerstone
 *
 * @return An array of layers
 */
export function getVisibleLayers(element: HTMLElement): EnabledElementLayer[];
/**
 * Set the active layer for a Cornerstone element
 *
 * @param element The DOM element enabled for Cornerstone
 * @param layerId The unique identifier for the layer
 */
export function setActiveLayer(element: HTMLElement, layerId: string): void;
/**
 * Set a new image for a specific layerId
 *
 * @param element The DOM element enabled for Cornerstone
 * @param image The image to be displayed in this layer
 * @param [layerId] The unique identifier for the layer
 */
export function setLayerImage(element: HTMLElement, image: Image, layerId?: string): void;
/**
 * Retrieve the currently active layer for a Cornerstone element
 *
 * @param element The DOM element enabled for Cornerstone
 * @return The currently active layer
 */
export function getActiveLayer(element: HTMLElement): EnabledElementLayer;
/**
 * Purge the layers
 *
 * @param element The DOM element enabled for Cornerstone
 *
 */
export function purgeLayers(element: HTMLElement): void;
