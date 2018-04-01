import * as webpack from 'webpack';

export namespace ReactLoadablePlugin {
  interface Options {
    filename: string;
  }
}

export class ReactLoadablePlugin extends webpack.Plugin {
  constructor(opts?: ReactLoadablePlugin.Options);
}

export interface Bundle {
  id: number;
  name: string;
  file: string;
}

export interface Manifest {
  [moduleId: string]: Bundle[];
}

export function getBundles(manifest: Manifest, moduleIds: string[]): Bundle[];
