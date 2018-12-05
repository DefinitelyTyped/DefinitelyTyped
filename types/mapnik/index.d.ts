// Type definitions for mapnik 3.x
// Project: http://mapnik.org
// Definitions by: Loli <https://github.com/ipv4sec>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
export const settings: any;
export function register_default_fonts(): void;
export function register_default_input_plugins(): void;
export function register_datasource(path: string): void;
export class VectorTile {
  constructor(z: number, x: number, y: number)
  addDataSync(vectorTile: any): void;
}
export class Datasource {
  constructor(datasource: any)
  featureset(): Featureset;
}

export class Featureset {
  constructor()
  next(): FeaturesetNext;
}
export class FeaturesetNext {
  constructor()
  toJSON(): string;
}

export class Image {
  constructor(x: number, y: number)
  encode(type: string, callback?: (err: Error, buffer: Buffer) => void): void;
  getData(): Buffer;
}

export interface Image {
  // constructor(x: number, y: number)
  new(x: number, y: number): () => void;
  encode(type: string, callback?: (err: Error, buffer: Buffer) => void): void;
  getData(): Buffer;
  save(fp: string): () => void;
  open(fp: string): () => void;
}

export class Map {
  constructor(x: number, y: number)
  load(xml: string, callback?: (err: Error, map: Map) => void): void;
  zoomAll(): void;
  render(images: Image | VectorTile , callback?: (err: Error, map: Image) => void): void;
}
