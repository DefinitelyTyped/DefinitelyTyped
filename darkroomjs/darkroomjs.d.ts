+// Type definitions for darkroomjs
+// Project: https://github.com/MattKetmo/darkroomjs
+// Definitions by: Stepan Mikhaylyuk <https://github.com/stepancar>
+// Definitions: https://github.com/borisyankov/DefinitelyTyped
+declare class DarkRoom {
+    new (element: string | HTMLImageElement, options?: Options);
+    plugins: {
+      crop:any;
+      save:any;
+    }
+}
+interface Options {
+    minWidth?: number,
+    minHeight?: number,
+    maxWidth?: number,
+    maxHeight?: number,
+    plugins?: Plugins,
+    initialize?: () => void,
+    backgroundColor?: string;
+    ratio?: number;
+}
+interface Plugins {
+    /**
+    * Crop plugin options. if passed 'false' - disable plugin
+    */
+    crop?: CropPluginOptions | boolean;
+    /**
+    * Save plugin options. if passed 'false' - disable plugin
+    */
+    save?: SavePluginOptions | boolean
+}
+interface CropPluginOptions {
+    minHeight?: number,
+    minWidth?: number,
+    ratio?: number,
+    quickCropKey?: number;
+}
+interface SavePluginOptions {
+
+}
+declare var Darkroom: DarkRoom;
+/*declare module 'darkroom'{
+  var darkRoom: DarkRoom;
+  export = darkRoom;
+}*/
