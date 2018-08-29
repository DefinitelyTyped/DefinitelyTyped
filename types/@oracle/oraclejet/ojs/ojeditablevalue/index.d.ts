/// <reference types='ojs/ojcomponentcore'/>
/// <reference types='ojs/ojmessaging'/>
declare namespace oj {  
  abstract class editableValue<V, SP extends editableValueSettableProperties<V, SV, RV>, SV= V, RV= V> extends baseComponent<SP> {
    describedBy: string|null;
    disabled: boolean;
    displayOptions: {converterHint: Array<'placeholder'|'notewindow'|'none'>|'placeholder'|'notewindow'|'none', helpInstruction: Array<'notewindow'|'none'>|'notewindow'|'none', messages: Array<'inline'|'notewindow'|'none'>|'inline'|'notewindow'|'none', validatorHint: Array<'notewindow'|'none'>|'notewindow'|'none'};
    help: {instruction?: string};
    helpHints: {definition?: string, source?: string};
    labelHint: string;
    messagesCustom: Array<oj.Message>;
    readonly valid: 'valid'|'pending'|'invalidHidden'|'invalidShown';
    value: V;
    onDescribedByChanged: (event: CustomEvent)=> any;
    onDisabledChanged: (event: CustomEvent)=> any;
    onDisplayOptionsChanged: (event: CustomEvent)=> any;
    onHelpChanged: (event: CustomEvent)=> any;
    onHelpHintsChanged: (event: CustomEvent)=> any;
    onLabelHintChanged: (event: CustomEvent)=> any;
    onMessagesCustomChanged: (event: CustomEvent)=> any;
    onValidChanged: (event: CustomEvent)=> any;
    onValueChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.editableValue.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.editableValue.ojAnimateStart)=> any;

    addEventListener<T extends keyof editableValueEventMap>(type: T, listener: (this: HTMLElement, ev: editableValueEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    refresh(): void;
    reset(): void;
    showMessages(): void;
  }
  namespace editableValue {
    class ojAnimateEnd extends CustomEvent<{action: string, element: Element, [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{action: string, element: Element, endCallback: (()=> void), [propName: string]: any}> {
      
    }
  }
  interface editableValueEventMap extends oj.baseComponentEventMap {
    'ojAnimateEnd': oj.editableValue.ojAnimateEnd;
    'ojAnimateStart': oj.editableValue.ojAnimateStart;
    'describedByChanged': CustomEvent;
    'disabledChanged': CustomEvent;
    'displayOptionsChanged': CustomEvent;
    'helpChanged': CustomEvent;
    'helpHintsChanged': CustomEvent;
    'labelHintChanged': CustomEvent;
    'messagesCustomChanged': CustomEvent;
    'validChanged': CustomEvent;
    'valueChanged': CustomEvent;
  }
  interface editableValueSettableProperties<V, SV=V, RV=V> extends baseComponentSettableProperties {
    describedBy: string|null;
    disabled: boolean;
    displayOptions: {converterHint: Array<'placeholder'|'notewindow'|'none'>|'placeholder'|'notewindow'|'none', helpInstruction: Array<'notewindow'|'none'>|'notewindow'|'none', messages: Array<'inline'|'notewindow'|'none'>|'inline'|'notewindow'|'none', validatorHint: Array<'notewindow'|'none'>|'notewindow'|'none'};
    help: {instruction?: string};
    helpHints: {definition?: string, source?: string};
    labelHint: string;
    messagesCustom: Array<oj.Message>;
    readonly valid: 'valid'|'pending'|'invalidHidden'|'invalidShown';
    value: SV; 
  }

}
