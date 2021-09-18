// Type definitions for @ckeditor/ckeditor5-core 28.0
// Project: https://github.com/ckeditor/ckeditor5/tree/master/packages/ckeditor5-core
// Definitions by: Federico Panico <https://github.com/fedemp>
//                 denisname <https://github.com/denisname>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

export { default as Plugin } from './src/plugin';
export { default as Command } from './src/command';
export { default as MultiCommand } from './src/multicommand';
export { default as Context } from './src/context';
export { default as ContextPlugin } from './src/contextplugin';
export { default as Editor } from './src/editor/editor';
export { default as EditorUI } from './src/editor/editorui';
export { default as attachToForm } from './src/editor/utils/attachtoform';
export { default as DataApiMixin } from './src/editor/utils/dataapimixin';
export { default as ElementApiMixin } from './src/editor/utils/elementapimixin';
export { default as secureSourceElement } from './src/editor/utils/securesourceelement';
export { default as PendingActions } from './src/pendingactions';

export const icons: {
    cancel: string;
    caption: string;
    check: string;
    eraser: string;
    lowVision: string;
    image: string;
    alignBottom: string;
    alignMiddle: string;
    alignTop: string;
    alignLeft: string;
    alignCenter: string;
    alignRight: string;
    alignJustify: string;
    objectLeft: string;
    objectCenter: string;
    objectRight: string;
    objectFullWidth: string;
    objectSizeFull: string;
    objectSizeLarge: string;
    objectSizeSmall: string;
    objectSizeMedium: string;
    pencil: string;
    pilcrow: string;
    quote: string;
    threeVerticalDots: string;
};
