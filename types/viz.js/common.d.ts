interface Options {
  format?: string;
  engine?: string;
  files?: string[];
  images?: string[];
  yInvert?: boolean;
}

/**
 * This interface defines the shape of an object that is held by the caller.
 * This `Module` was created by emscripten, and is therefore largely arcane.
 * This currently just lists a subset of what is defined in `Module`.
 */
interface Module {
  run(): void;
}

type RenderFunction = (instance: Module, src: string, options: Options) => string;

declare class Viz {
  constructor(arg: { Module: Module; render: RenderFunction });
  renderString(src: string, options?: Options): Promise<string>;
}
