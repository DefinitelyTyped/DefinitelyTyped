// Type definitions for splashy 5.0
// Project: https://nicedoc.io/microlinkhq/splashy
// Definitions by: Valentin Dijkstra <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

type ImageSource = string | HTMLImageElement | Buffer;

declare function splashy(source: ImageSource): Promise<string[]>;

export = splashy;
