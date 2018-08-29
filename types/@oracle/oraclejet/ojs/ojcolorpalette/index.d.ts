/// <reference types='ojs/ojeditablevalue'/>
declare namespace oj {  
  class ojColorPalette extends editableValue<oj.Color, ojColorPaletteSettableProperties> {
    labelDisplay: 'auto'|'off';
    labelledBy: string|null;
    layout: 'grid'|'list';
    palette: Array<{color: oj.Color, label?: string}>;
    swatchSize: 'xs'|'sm'|'lg';
    value: oj.Color;
    translations: {labelNone?: string};
    onLabelDisplayChanged: (event: CustomEvent)=> any;
    onLabelledByChanged: (event: CustomEvent)=> any;
    onLayoutChanged: (event: CustomEvent)=> any;
    onPaletteChanged: (event: CustomEvent)=> any;
    onSwatchSizeChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojColorPalette.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojColorPalette.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojColorPaletteEventMap>(type: T, listener: (this: HTMLElement, ev: ojColorPaletteEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getProperty(property: string): any;
    setProperties(properties: object): any;
    setProperty(property: string, value: any): any;
  }
  namespace ojColorPalette {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojColorPaletteEventMap extends oj.editableValueEventMap {
    'ojAnimateEnd': oj.ojColorPalette.ojAnimateEnd;
    'ojAnimateStart': oj.ojColorPalette.ojAnimateStart;
    'labelDisplayChanged': CustomEvent;
    'labelledByChanged': CustomEvent;
    'layoutChanged': CustomEvent;
    'paletteChanged': CustomEvent;
    'swatchSizeChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface ojColorPaletteSettableProperties extends editableValueSettableProperties<oj.Color> {
    labelDisplay: 'auto'|'off';
    labelledBy: string|null;
    layout: 'grid'|'list';
    palette: Array<{color: oj.Color, label?: string}>;
    swatchSize: 'xs'|'sm'|'lg';
    value: oj.Color;
    translations: {labelNone?: string}; 
  }

}
