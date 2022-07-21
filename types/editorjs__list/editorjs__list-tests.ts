import List from '@editorjs/list';

const list = new List({ api: undefined });

list.render();  // $ExpectType HTMLElement
list.save();  // $ExpectType ListData

List.isReadOnlySupported; // $ExpectType boolean
List.enableLineBreaks; // $ExpectType boolean
List.toolbox; // $ExpectType { icon: string; title: string; }
List.conversionConfig; // $ExpectType ConversionConfig
