/// <reference types='ojs/ojeditablevalue'/>
declare namespace oj {  
  abstract class ojCombobox<V, SP extends ojComboboxSettableProperties<V, SV, RV>, SV=V, RV=V> extends editableValue<V, SP, SV, RV> {
    onOjAnimateEnd: (event: oj.ojCombobox.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojCombobox.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojComboboxEventMap>(type: T, listener: (this: HTMLElement, ev: ojComboboxEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    refresh(): void;
    validate(): Promise<any>;
  }
  namespace ojCombobox {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojComboboxEventMap extends oj.editableValueEventMap {
    'ojAnimateEnd': oj.ojCombobox.ojAnimateEnd;
    'ojAnimateStart': oj.ojCombobox.ojAnimateStart;
  }
  interface ojComboboxSettableProperties<V, SV= V, RV= V> extends editableValueSettableProperties<V, SV, RV> { 
  }
  namespace ojCombobox {
    type Optgroup =
    {
      disabled?: boolean, label: string, children: Array<(oj.ojCombobox.Option|oj.ojCombobox.Optgroup)>
    }
  }
  namespace ojCombobox {
    type Option =
    {
      disabled?: boolean, label?: string, value: any
    }
  }
  namespace ojCombobox {
    type OptionContext =
    {
      component: Element, parent: Element, index: number, depth: number, leaf: boolean, data: object, parentElement: Element
    }
  }
  namespace ojCombobox {
    type OptionsKeys =
    {
      label?: string, value?: string, children?: string, childKeys?: oj.ojCombobox.OptionsKeys
    }
  }

}
declare namespace oj {  
  class ojComboboxMany<K, D> extends ojCombobox<Array<any>, ojComboboxManySettableProperties<K, D>, Array<any>, string> {
    asyncValidators: Array<oj.AsyncValidator<Array<any>>>;
    converter: oj.Converter<any>|oj.Validation.RegisteredConverter|null;
    minLength: number;
    optionRenderer?: ((param0: oj.ojCombobox.OptionContext) => {insert: Element}|undefined)|null;
    options: Array<oj.ojCombobox.Option|oj.ojCombobox.Optgroup>|oj.DataProvider<K, D>|null;
    optionsKeys: {childKeys: {label?: string, value?: string, children?: string, childKeys?: oj.ojCombobox.OptionsKeys}, children?: string, label?: string, value?: string};
    pickerAttributes: {style?: string, class?: string};
    placeholder: string|null;
    readonly rawValue: string|null;
    required: boolean;
    validators: Array<oj.Validator<Array<any>>|oj.Validation.RegisteredValidator>|null;
    value: Array<any>|null;
    valueOptions: Array<{value: any, label?: string}> | null;
    translations: {filterFurther?: string, noMatchesFound?: string, required?: {hint?: string, messageDetail?: string, messageSummary?: string}};
    onAsyncValidatorsChanged: (event: CustomEvent)=> any;
    onConverterChanged: (event: CustomEvent)=> any;
    onMinLengthChanged: (event: CustomEvent)=> any;
    onOptionRendererChanged: (event: CustomEvent)=> any;
    onOptionsChanged: (event: CustomEvent)=> any;
    onOptionsKeysChanged: (event: CustomEvent)=> any;
    onPickerAttributesChanged: (event: CustomEvent)=> any;
    onPlaceholderChanged: (event: CustomEvent)=> any;
    onRawValueChanged: (event: CustomEvent)=> any;
    onRequiredChanged: (event: CustomEvent)=> any;
    onValidatorsChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onValueOptionsChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojComboboxMany.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojComboboxMany.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojComboboxManyEventMap>(type: T, listener: (this: HTMLElement, ev: ojComboboxManyEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  namespace ojComboboxMany {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojComboboxManyEventMap extends oj.ojComboboxEventMap {
    'ojAnimateEnd': oj.ojComboboxMany.ojAnimateEnd;
    'ojAnimateStart': oj.ojComboboxMany.ojAnimateStart;
    'asyncValidatorsChanged': CustomEvent;
    'converterChanged': CustomEvent;
    'minLengthChanged': CustomEvent;
    'optionRendererChanged': CustomEvent;
    'optionsChanged': CustomEvent;
    'optionsKeysChanged': CustomEvent;
    'pickerAttributesChanged': CustomEvent;
    'placeholderChanged': CustomEvent;
    'rawValueChanged': CustomEvent;
    'requiredChanged': CustomEvent;
    'validatorsChanged': CustomEvent;
    'valueChanged': CustomEvent;
    'valueOptionsChanged': CustomEvent;
  }
  interface ojComboboxManySettableProperties<K, D> extends ojComboboxSettableProperties<Array<any>, Array<any>, string> {
    asyncValidators: Array<oj.AsyncValidator<Array<any>>>;
    converter: oj.Converter<any>|oj.Validation.RegisteredConverter|null;
    minLength: number;
    optionRenderer?: ((param0: oj.ojCombobox.OptionContext) => {insert: Element}|undefined)|null;
    options: Array<oj.ojCombobox.Option|oj.ojCombobox.Optgroup>|oj.DataProvider<K, D>|null;
    optionsKeys: {childKeys: {label?: string, value?: string, children?: string, childKeys?: oj.ojCombobox.OptionsKeys}, children?: string, label?: string, value?: string};
    pickerAttributes: {style?: string, class?: string};
    placeholder: string|null;
    readonly rawValue: string|null;
    required: boolean;
    validators: Array<oj.Validator<Array<any>>|oj.Validation.RegisteredValidator>|null;
    value: Array<any>|null;
    valueOptions: Array<{value: any, label?: string}> | null;
    translations: {filterFurther?: string, noMatchesFound?: string, required?: {hint?: string, messageDetail?: string, messageSummary?: string}}; 
  }

}
declare namespace oj {  
  class ojComboboxOne<K, D> extends ojCombobox<any, ojComboboxOneSettableProperties<K, D>, any, string> {
    asyncValidators: Array<oj.AsyncValidator<any>>;
    converter: oj.Converter<any>|oj.Validation.RegisteredConverter|null;
    filterOnOpen: 'none'|'rawValue';
    minLength: number;
    optionRenderer?: ((param0: oj.ojCombobox.OptionContext) => {insert: Element}|undefined)|null;
    options: Array<oj.ojCombobox.Option|oj.ojCombobox.Optgroup>|oj.DataProvider<K, D>|null;
    optionsKeys: {childKeys: {label?: string, value?: string, children?: string, childKeys?: oj.ojCombobox.OptionsKeys}, children?: string, label?: string, value?: string};
    pickerAttributes: {style?: string, class?: string};
    placeholder: string|null;
    readonly rawValue: string|null;
    required: boolean;
    validators: Array<oj.Validator<any>|oj.Validation.RegisteredValidator>|null;
    value: any;
    valueOption: {value: any, label?: string};
    translations: {filterFurther?: string, noMatchesFound?: string, required?: {hint?: string, messageDetail?: string, messageSummary?: string}};
    onAsyncValidatorsChanged: (event: CustomEvent)=> any;
    onConverterChanged: (event: CustomEvent)=> any;
    onFilterOnOpenChanged: (event: CustomEvent)=> any;
    onMinLengthChanged: (event: CustomEvent)=> any;
    onOptionRendererChanged: (event: CustomEvent)=> any;
    onOptionsChanged: (event: CustomEvent)=> any;
    onOptionsKeysChanged: (event: CustomEvent)=> any;
    onPickerAttributesChanged: (event: CustomEvent)=> any;
    onPlaceholderChanged: (event: CustomEvent)=> any;
    onRawValueChanged: (event: CustomEvent)=> any;
    onRequiredChanged: (event: CustomEvent)=> any;
    onValidatorsChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onValueOptionChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojComboboxOne.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojComboboxOne.ojAnimateStart)=> any;
    onOjValueUpdated: (event: oj.ojComboboxOne.ojValueUpdated)=> any;

    addEventListener<T extends keyof ojComboboxOneEventMap>(type: T, listener: (this: HTMLElement, ev: ojComboboxOneEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  namespace ojComboboxOne {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  
    class ojValueUpdated extends CustomEvent<{value: any, previousValue: any, [propName: string]: any}> {
      
    }
  }
  interface ojComboboxOneEventMap extends oj.ojComboboxEventMap {
    'ojAnimateEnd': oj.ojComboboxOne.ojAnimateEnd;
    'ojAnimateStart': oj.ojComboboxOne.ojAnimateStart;
    'ojValueUpdated': oj.ojComboboxOne.ojValueUpdated;
    'asyncValidatorsChanged': CustomEvent;
    'converterChanged': CustomEvent;
    'filterOnOpenChanged': CustomEvent;
    'minLengthChanged': CustomEvent;
    'optionRendererChanged': CustomEvent;
    'optionsChanged': CustomEvent;
    'optionsKeysChanged': CustomEvent;
    'pickerAttributesChanged': CustomEvent;
    'placeholderChanged': CustomEvent;
    'rawValueChanged': CustomEvent;
    'requiredChanged': CustomEvent;
    'validatorsChanged': CustomEvent;
    'valueChanged': CustomEvent;
    'valueOptionChanged': CustomEvent;
  }
  interface ojComboboxOneSettableProperties<K, D> extends ojComboboxSettableProperties<any, any, string> {
    asyncValidators: Array<oj.AsyncValidator<any>>;
    converter: oj.Converter<any>|oj.Validation.RegisteredConverter|null;
    filterOnOpen: 'none'|'rawValue';
    minLength: number;
    optionRenderer?: ((param0: oj.ojCombobox.OptionContext) => {insert: Element}|undefined)|null;
    options: Array<oj.ojCombobox.Option|oj.ojCombobox.Optgroup>|oj.DataProvider<K, D>|null;
    optionsKeys: {childKeys: {label?: string, value?: string, children?: string, childKeys?: oj.ojCombobox.OptionsKeys}, children?: string, label?: string, value?: string};
    pickerAttributes: {style?: string, class?: string};
    placeholder: string|null;
    readonly rawValue: string|null;
    required: boolean;
    validators: Array<oj.Validator<any>|oj.Validation.RegisteredValidator>|null;
    value: any;
    valueOption: {value: any, label?: string};
    translations: {filterFurther?: string, noMatchesFound?: string, required?: {hint?: string, messageDetail?: string, messageSummary?: string}}; 
  }

}
declare namespace oj {  
  abstract class ojSelect<V, SP extends ojSelectSettableProperties<V, SV>, SV=V> extends editableValue<V, SP, SV> {
    onOjAnimateEnd: (event: oj.ojSelect.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojSelect.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojSelectEventMap>(type: T, listener: (this: HTMLElement, ev: ojSelectEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    refresh(): void;
    validate(): Promise<any>;
  }
  namespace ojSelect {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojSelectEventMap extends oj.editableValueEventMap {
    'ojAnimateEnd': oj.ojSelect.ojAnimateEnd;
    'ojAnimateStart': oj.ojSelect.ojAnimateStart;
  }
  interface ojSelectSettableProperties<V, SV=V> extends editableValueSettableProperties<V, SV> { 
  }
  namespace ojSelect {
    type Optgroup =
    {
      disabled?: boolean, label: string, children: Array<(oj.ojSelect.Option|oj.ojSelect.Optgroup)>
    }
  }
  namespace ojSelect {
    type Option =
    {
      disabled?: boolean, label?: string, value: any
    }
  }
  namespace ojSelect {
    type OptionContext =
    {
      component: Element, parent: Element, index: number, depth: number, leaf: boolean, data: object, parentElement: Element
    }
  }
  namespace ojSelect {
    type OptionsKeys =
    {
      label?: string, value?: string, children?: string, childKeys?: oj.ojSelect.OptionsKeys
    }
  }

}
declare namespace oj {  
  class ojSelectMany<K, D> extends ojSelect<Array<any>, ojSelectManySettableProperties<K, D>> {
    minimumResultsForSearch: number;
    optionRenderer?: ((param0: oj.ojSelect.OptionContext) => {insert: Element}|undefined)|null;
    options: Array<oj.ojSelect.Option|oj.ojSelect.Optgroup>|oj.DataProvider<K, D>|null;
    optionsKeys: {childKeys?: {label?: string, value?: string, children?: string, childKeys?: oj.ojSelect.OptionsKeys}, children?: string, label?: string, value?: string};
    pickerAttributes: {style?: string, class?: string};
    placeholder: string|null;
    renderMode: 'jet'|'native';
    required: boolean;
    value: Array<any>|null;
    valueOptions: Array<{value: any, label?: string}> | null;
    translations: {filterFurther?: string, moreMatchesFound?: string, noMatchesFound?: string, oneMatchesFound?: string, required?: {hint?: string, messageDetail?: string, messageSummary?: string}, searchField?: string};
    onMinimumResultsForSearchChanged: (event: CustomEvent)=> any;
    onOptionRendererChanged: (event: CustomEvent)=> any;
    onOptionsChanged: (event: CustomEvent)=> any;
    onOptionsKeysChanged: (event: CustomEvent)=> any;
    onPickerAttributesChanged: (event: CustomEvent)=> any;
    onPlaceholderChanged: (event: CustomEvent)=> any;
    onRenderModeChanged: (event: CustomEvent)=> any;
    onRequiredChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onValueOptionsChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojSelectMany.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojSelectMany.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojSelectManyEventMap>(type: T, listener: (this: HTMLElement, ev: ojSelectManyEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  namespace ojSelectMany {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojSelectManyEventMap extends oj.ojSelectEventMap {
    'ojAnimateEnd': oj.ojSelectMany.ojAnimateEnd;
    'ojAnimateStart': oj.ojSelectMany.ojAnimateStart;
    'minimumResultsForSearchChanged': CustomEvent;
    'optionRendererChanged': CustomEvent;
    'optionsChanged': CustomEvent;
    'optionsKeysChanged': CustomEvent;
    'pickerAttributesChanged': CustomEvent;
    'placeholderChanged': CustomEvent;
    'renderModeChanged': CustomEvent;
    'requiredChanged': CustomEvent;
    'valueChanged': CustomEvent;
    'valueOptionsChanged': CustomEvent;
  }
  interface ojSelectManySettableProperties<K, D> extends ojSelectSettableProperties<Array<any>> {
    minimumResultsForSearch: number;
    optionRenderer?: ((param0: oj.ojSelect.OptionContext) => {insert: Element}|undefined)|null;
    options: Array<oj.ojSelect.Option|oj.ojSelect.Optgroup>|oj.DataProvider<K, D>|null;
    optionsKeys: {childKeys?: {label?: string, value?: string, children?: string, childKeys?: oj.ojSelect.OptionsKeys}, children?: string, label?: string, value?: string};
    pickerAttributes: {style?: string, class?: string};
    placeholder: string|null;
    renderMode: 'jet'|'native';
    required: boolean;
    value: Array<any>|null;
    valueOptions: Array<{value: any, label?: string}> | null;
    translations: {filterFurther?: string, moreMatchesFound?: string, noMatchesFound?: string, oneMatchesFound?: string, required?: {hint?: string, messageDetail?: string, messageSummary?: string}, searchField?: string}; 
  }

}
declare namespace oj {  
  class ojSelectOne<K, D> extends ojSelect<any, ojSelectOneSettableProperties<K, D>> {
    minimumResultsForSearch: number;
    optionRenderer?: ((param0: oj.ojSelect.OptionContext) => {insert: Element}|undefined)|null;
    options: Array<oj.ojSelect.Option|oj.ojSelect.Optgroup>|oj.DataProvider<K, D>|null;
    optionsKeys: {childKeys?: {label?: string, value?: string, children?: string, childKeys?: oj.ojSelect.OptionsKeys}, children?: string, label?: string, value?: string};
    pickerAttributes: {style?: string, class?: string};
    placeholder: string|null;
    renderMode: 'jet'|'native';
    required: boolean;
    value: any;
    valueOption: {value: any, label?: string};
    translations: {filterFurther?: string, moreMatchesFound?: string, noMatchesFound?: string, oneMatchesFound?: string, required?: {hint?: string, messageDetail?: string, messageSummary?: string}, searchField?: string};
    onMinimumResultsForSearchChanged: (event: CustomEvent)=> any;
    onOptionRendererChanged: (event: CustomEvent)=> any;
    onOptionsChanged: (event: CustomEvent)=> any;
    onOptionsKeysChanged: (event: CustomEvent)=> any;
    onPickerAttributesChanged: (event: CustomEvent)=> any;
    onPlaceholderChanged: (event: CustomEvent)=> any;
    onRenderModeChanged: (event: CustomEvent)=> any;
    onRequiredChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onValueOptionChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojSelectOne.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojSelectOne.ojAnimateStart)=> any;

    addEventListener<T extends keyof ojSelectOneEventMap>(type: T, listener: (this: HTMLElement, ev: ojSelectOneEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  namespace ojSelectOne {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface ojSelectOneEventMap extends oj.ojSelectEventMap {
    'ojAnimateEnd': oj.ojSelectOne.ojAnimateEnd;
    'ojAnimateStart': oj.ojSelectOne.ojAnimateStart;
    'minimumResultsForSearchChanged': CustomEvent;
    'optionRendererChanged': CustomEvent;
    'optionsChanged': CustomEvent;
    'optionsKeysChanged': CustomEvent;
    'pickerAttributesChanged': CustomEvent;
    'placeholderChanged': CustomEvent;
    'renderModeChanged': CustomEvent;
    'requiredChanged': CustomEvent;
    'valueChanged': CustomEvent;
    'valueOptionChanged': CustomEvent;
  }
  interface ojSelectOneSettableProperties<K, D> extends ojSelectSettableProperties<any> {
    minimumResultsForSearch: number;
    optionRenderer?: ((param0: oj.ojSelect.OptionContext) => {insert: Element}|undefined)|null;
    options: Array<oj.ojSelect.Option|oj.ojSelect.Optgroup>|oj.DataProvider<K, D>|null;
    optionsKeys: {childKeys?: {label?: string, value?: string, children?: string, childKeys?: oj.ojSelect.OptionsKeys}, children?: string, label?: string, value?: string};
    pickerAttributes: {style?: string, class?: string};
    placeholder: string|null;
    renderMode: 'jet'|'native';
    required: boolean;
    value: any;
    valueOption: {value: any, label?: string};
    translations: {filterFurther?: string, moreMatchesFound?: string, noMatchesFound?: string, oneMatchesFound?: string, required?: {hint?: string, messageDetail?: string, messageSummary?: string}, searchField?: string}; 
  }

}
declare namespace oj {  
  interface Optgroup {
    children: Array<(oj.Option|oj.Optgroup)>;
    disabled?: boolean;
    label: string;
  }

}
declare namespace oj {  
  interface Option {
    disabled?: boolean;
    label?: string;
    value: object;
  }

}
