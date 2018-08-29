declare namespace oj {  
  class ojAvatar extends JetElement<ojAvatarSettableProperties> {
    initials: string;
    size: 'xxs'|'xs'|'sm'|'md'|'lg'|'xl'|'xxl';
    src: string;
    onInitialsChanged: (event: CustomEvent)=> any;
    onSizeChanged: (event: CustomEvent)=> any;
    onSrcChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojAvatarEventMap>(type: T, listener: (this: HTMLElement, ev: ojAvatarEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getProperty(property: string): any;
    setProperties(properties: object): void;
    setProperty(property: string, value: any): void;
  }
  interface ojAvatarEventMap extends oj.JetElementEventMap {
    'initialsChanged': CustomEvent;
    'sizeChanged': CustomEvent;
    'srcChanged': CustomEvent;
  }
  interface ojAvatarSettableProperties extends JetSettableProperties {
    initials: string;
    size: 'xxs'|'xs'|'sm'|'md'|'lg'|'xl'|'xxl';
    src: string; 
  }

}
