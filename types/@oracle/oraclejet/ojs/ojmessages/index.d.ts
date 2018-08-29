/// <reference types='ojs/ojmessage'/>
/// <reference types='ojs/ojdataprovider'/>
declare namespace oj {  
  class ojMessages extends JetElement<ojMessagesSettableProperties> {
    display: 'general'|'notification';
    messages: Array<oj.ojMessage.Message> | null | oj.DataProvider<any, oj.ojMessage.Message>;
    position: oj.ojMessages.Position|null;
    translations: {ariaLiveRegion?: {navigationFromKeyboard?: string, navigationToKeyboard?: string, navigationToTouch?: string, newMessage?: string}, labelLandmark?: string};
    onDisplayChanged: (event: CustomEvent)=> any;
    onMessagesChanged: (event: CustomEvent)=> any;
    onPositionChanged: (event: CustomEvent)=> any;
            
    onTranslationsChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojMessagesEventMap>(type: T, listener: (this: HTMLElement, ev: ojMessagesEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    close(associated: object): void;
    closeAll(closeFilter?: (message: oj.ojMessage.Message) => boolean): void;
    getProperty(property: string): any;
    setProperties(properties: object): void;
    setProperty(property: string, value: any): void;
  }
  interface ojMessagesEventMap extends oj.JetElementEventMap {
    'displayChanged': CustomEvent;
    'messagesChanged': CustomEvent;
    'positionChanged': CustomEvent;
    'translationsChanged': CustomEvent;
  }
  interface ojMessagesSettableProperties extends JetSettableProperties {
    display: 'general'|'notification';
    messages: Array<oj.ojMessage.Message> | null | oj.DataProvider<any, oj.ojMessage.Message>;
    position: oj.ojMessages.Position|null;
    translations: {ariaLiveRegion?: {navigationFromKeyboard?: string, navigationToKeyboard?: string, navigationToTouch?: string, newMessage?: string}, labelLandmark?: string}; 
  }
  namespace ojMessages {
    type Position =
    {
      my?: oj.ojMessages.PositionAlign, at?: oj.ojMessages.PositionAlign, offset?: oj.ojMessages.PositionPoint, of?: string|oj.ojMessages.PositionPoint, collision?: 'flip'|'fit'|'flipfit'|'none'
    }
  }
  namespace ojMessages {
    type PositionAlign =
    {
      vertical?: 'top'|'bottom'|'center', horizontal?: 'start'|'end'|'left'|'center'|'bottom'
    }
  }
  namespace ojMessages {
    type PositionPoint =
    {
      x?: number, y?: number
    }
  }

}
