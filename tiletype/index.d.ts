// Type definitions for tiletype 0.3.0
// Project: https://github.com/mapbox/tiletype
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface Header {
  'Content-Type'?: string
  'Content-Encoding'?: string
}

export type extensions = 'png' | 'pbf' | 'jpg' | 'webp'

/**
 * Given a buffer of unknown data, return either a format as an extension
 * string or false if the type cannot be determined.
 *
 * Potential options are:
 *
 * - png
 * - pbf
 * - jpg
 * - webp
 *
 * @param {Buffer} buffer input
 * @returns {String|boolean} identifier
 */
export function type(buffer: Buffer): extensions | boolean

/**
 * Return headers - Content-Type and Content-Encoding -
 * for a response containing this kind of image.
 *
 * @param {Buffer} buffer input
 * @returns {Object} headers
 */
export function headers(buffer: Buffer): Header

/**
 * Determine the width and height of an image contained in a buffer,
 * returned as a [x, y] array.
 *
 * @param {Buffer} buffer input
 * @returns {Array<number>|boolean} dimensions
 */
export function dimensions(buffer: Buffer): [number, number] | boolean