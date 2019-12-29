// Type definitions for pixelmatch 5.0
// Project: https://github.com/mapbox/pixelmatch#readme
// Definitions by: Oleg Repin <https://github.com/iamolegga>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function Pixelmatch(
  /** Image data of the first image to compare. Note: image dimensions must be equal. */
  img1: Buffer | Uint8Array,
  /** Image data of the second image to compare. Note: image dimensions must be equal. */
  img2: Buffer | Uint8Array,
  /** Image data to write the diff to, or null if don't need a diff image. */
  output: Buffer | Uint8Array | null,
  /** Width of the images. Note that all three images need to have the same dimensions. */
  width: number,
  /** Height of the images. Note that all three images need to have the same dimensions. */
  height: number,
  /** Options. */
  options?: Options,
): number;

type RGBTuple = [number, number, number];

interface Options {
  /** Matching threshold, ranges from 0 to 1. Smaller values make the comparison more sensitive. 0.1 by default. */
  readonly threshold?: number;
  /** If true, disables detecting and ignoring anti-aliased pixels. false by default. */
  readonly includeAA?: boolean;
  /* Blending factor of unchanged pixels in the diff output. Ranges from 0 for pure white to 1 for original brightness. 0.1 by default. */
  alpha?: number;
  /* The color of anti-aliased pixels in the diff output. [255, 255, 0] by default. */
  aaColor?: RGBTuple;
  /* The color of differing pixels in the diff output. [255, 0, 0] by default. */
  diffColor?: RGBTuple;
}

export = Pixelmatch;
