declare namespace oj {  
  class ojMessage extends JetElement<ojMessageSettableProperties> {
    message: oj.ojMessage.Message;
    translations: {categories?: {confirmation?: string, error?: string, info?: string, warning?: string}, labelCloseIcon?: string};
    onMessageChanged: (event: CustomEvent)=> any;
            
    onTranslationsChanged: (event: CustomEvent)=> any;
    onOjAnimateEnd: (event: oj.ojMessage.ojAnimateEnd)=> any;
    onOjAnimateStart: (event: oj.ojMessage.ojAnimateStart)=> any;
    onOjClose: (event: oj.ojMessage.ojClose)=> any;

    addEventListener<T extends keyof ojMessageEventMap>(type: T, listener: (this: HTMLElement, ev: ojMessageEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    close(): void;
    getProperty(property: string): any;
    setProperties(properties: object): void;
    setProperty(property: string, value: any): void;
  }
  namespace ojMessage {
    class ojAnimateEnd extends CustomEvent<{element: Element, action: 'open'|'close', [propName: string]: any}> {
      
    }
  
    class ojAnimateStart extends CustomEvent<{element: Element, action: 'open'|'close', endCallback: (()=> void), [propName: string]: any}> {
      
    }
  
    class ojClose extends CustomEvent<{message: object, [propName: string]: any}> {
      
    }
  }
  interface ojMessageEventMap extends oj.JetElementEventMap {
    'ojAnimateEnd': oj.ojMessage.ojAnimateEnd;
    'ojAnimateStart': oj.ojMessage.ojAnimateStart;
    'ojClose': oj.ojMessage.ojClose;
    'messageChanged': CustomEvent;
    'translationsChanged': CustomEvent;
  }
  interface ojMessageSettableProperties extends JetSettableProperties {
    message: oj.ojMessage.Message;
    translations: {categories?: {confirmation?: string, error?: string, info?: string, warning?: string}, labelCloseIcon?: string}; 
  }
  namespace ojMessage {
    type Message =
    {
      icon?: string, category?: string, severity?: 'error'|'warning'|'confirmation'|'info'|'none', timestamp?: string, summary?: string, detail?: string, autoTimeout?: number, closeAffordance?: 'none'|'defaults', sound?: string
    }
  }

}
