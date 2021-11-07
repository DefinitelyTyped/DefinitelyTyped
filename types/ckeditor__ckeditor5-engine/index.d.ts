// Type definitions for @ckeditor/ckeditor5-engine 28.0
// Project: https://github.com/ckeditor/ckeditor5/tree/master/packages/ckeditor5-engine
// Definitions by: Federico Panico <https://github.com/fedemp>
//                 denisname <https://github.com/denisname>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

export * from './src/view/placeholder';

export { default as EditingController } from './src/controller/editingcontroller';
export { default as DataController } from './src/controller/datacontroller';

export { default as Conversion } from './src/conversion/conversion';

export { default as HtmlDataProcessor } from './src/dataprocessor/htmldataprocessor';

export { default as InsertOperation } from './src/model/operation/insertoperation';
export { default as MarkerOperation } from './src/model/operation/markeroperation';
export { default as OperationFactory } from './src/model/operation/operationfactory';
export { transformSets } from './src/model/operation/transform';

export { default as DocumentSelection } from './src/model/documentselection';
export { default as Range } from './src/model/range';
export { default as LiveRange } from './src/model/liverange';
export { default as LivePosition } from './src/model/liveposition';
export { default as Model } from './src/model/model';
export { default as TreeWalker } from './src/model/treewalker';
export { default as Element } from './src/model/element';

export { default as DomConverter } from './src/view/domconverter';
export { default as ViewDocument } from './src/view/document';

export { getFillerOffset } from './src/view/containerelement';
export { default as Observer } from './src/view/observer/observer';
export { default as ClickObserver } from './src/view/observer/clickobserver';
export { default as DomEventObserver } from './src/view/observer/domeventobserver';
export { default as MouseObserver } from './src/view/observer/mouseobserver';
export { default as DowncastWriter } from './src/view/downcastwriter';
export { default as UpcastWriter } from './src/view/upcastwriter';
export { default as Matcher } from './src/view/matcher';

export { default as DomEventData } from './src/view/observer/domeventdata';

export { StylesProcessor } from './src/view/stylesmap';
export * from './src/view/styles/background';
export * from './src/view/styles/border';
export * from './src/view/styles/margin';
export * from './src/view/styles/padding';
export * from './src/view/styles/utils';
