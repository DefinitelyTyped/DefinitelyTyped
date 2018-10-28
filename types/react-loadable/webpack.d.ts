import webpack = require("webpack");

declare namespace LoadableExport {
  interface Options {
    filename: string;
  }

  class ReactLoadablePlugin extends webpack.Plugin {
    constructor(opts?: Options);
  }

  interface Bundle {
    id: number;
    name: string;
    file: string;
  }

  interface Manifest {
    [moduleId: string]: Bundle[];
  }

  function getBundles(manifest: Manifest, moduleIds: string[]): Bundle[];
}

declare const exports: {
  getBundles: typeof LoadableExport.getBundles;
  ReactLoadablePlugin: typeof LoadableExport.ReactLoadablePlugin;
};

export = exports;
