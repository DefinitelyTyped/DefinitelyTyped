interface DarkRoom {
    new (element: string | HTMLImageElement, options?: Options);
    plugins: {
      crop:any;
      save:any;
    }
}
interface Options {
    minWidth?: number,
    minHeight?: number,
    maxWidth?: number,
    maxHeight?: number,
    plugins?: Plugins,
    initialize?: () => void,
    backgroundColor?: string;
    ratio?: number;
}
interface Plugins {
    crop?: CropPluginOptions | boolean
    save?: SavePluginOptions | boolean
}
interface CropPluginOptions {
    minHeight?: number,
    minWidth?: number,
    ratio?: number,
    quickCropKey?: number;
}
interface SavePluginOptions {

}
declare var Darkroom: DarkRoom;
declare module 'darkroom'{
  var darkRoom: DarkRoom;
  export = darkRoom;
}
