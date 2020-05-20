import Color = require('../ojcolor');
import { editableValue, editableValueEventMap, editableValueSettableProperties } from '../ojeditablevalue';
import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojColorPalette extends editableValue<Color, ojColorPaletteSettableProperties> {
    labelDisplay: 'auto' | 'off';
    labelledBy: string | null;
    layout: 'grid' | 'list';
    palette: Array<{
        color: Color;
        label?: string;
    }>;
    swatchSize: 'xs' | 'sm' | 'lg';
    value: Color;
    translations: {
        labelNone?: string;
    };
    onLabelDisplayChanged: ((event: JetElementCustomEvent<ojColorPalette["labelDisplay"]>) => any) | null;
    onLabelledByChanged: ((event: JetElementCustomEvent<ojColorPalette["labelledBy"]>) => any) | null;
    onLayoutChanged: ((event: JetElementCustomEvent<ojColorPalette["layout"]>) => any) | null;
    onPaletteChanged: ((event: JetElementCustomEvent<ojColorPalette["palette"]>) => any) | null;
    onSwatchSizeChanged: ((event: JetElementCustomEvent<ojColorPalette["swatchSize"]>) => any) | null;
    onValueChanged: ((event: JetElementCustomEvent<ojColorPalette["value"]>) => any) | null;
    onOjAnimateEnd: ((event: ojColorPalette.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojColorPalette.ojAnimateStart) => any) | null;
    addEventListener<T extends keyof ojColorPaletteEventMap>(type: T, listener: (this: HTMLElement, ev: ojColorPaletteEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojColorPaletteSettableProperties>(property: T): ojColorPalette[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojColorPaletteSettableProperties>(property: T, value: ojColorPaletteSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojColorPaletteSettableProperties>): void;
    setProperties(properties: ojColorPaletteSettablePropertiesLenient): void;
}
export namespace ojColorPalette {
    interface ojAnimateEnd extends CustomEvent<{
        action: string;
        element: Element;
        [propName: string]: any;
    }> {
    }
    interface ojAnimateStart extends CustomEvent<{
        action: string;
        element: Element;
        endCallback: (() => void);
        [propName: string]: any;
    }> {
    }
}
export interface ojColorPaletteEventMap extends editableValueEventMap<Color, ojColorPaletteSettableProperties> {
    'ojAnimateEnd': ojColorPalette.ojAnimateEnd;
    'ojAnimateStart': ojColorPalette.ojAnimateStart;
    'labelDisplayChanged': JetElementCustomEvent<ojColorPalette["labelDisplay"]>;
    'labelledByChanged': JetElementCustomEvent<ojColorPalette["labelledBy"]>;
    'layoutChanged': JetElementCustomEvent<ojColorPalette["layout"]>;
    'paletteChanged': JetElementCustomEvent<ojColorPalette["palette"]>;
    'swatchSizeChanged': JetElementCustomEvent<ojColorPalette["swatchSize"]>;
    'valueChanged': JetElementCustomEvent<ojColorPalette["value"]>;
}
export interface ojColorPaletteSettableProperties extends editableValueSettableProperties<Color> {
    labelDisplay: 'auto' | 'off';
    labelledBy: string | null;
    layout: 'grid' | 'list';
    palette: Array<{
        color: Color;
        label?: string;
    }>;
    swatchSize: 'xs' | 'sm' | 'lg';
    value: Color;
    translations: {
        labelNone?: string;
    };
}
export interface ojColorPaletteSettablePropertiesLenient extends Partial<ojColorPaletteSettableProperties> {
    [key: string]: any;
}
