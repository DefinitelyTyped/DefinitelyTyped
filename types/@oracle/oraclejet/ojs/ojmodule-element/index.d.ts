declare namespace oj {  
  interface ModuleElementAnimation {
    animate(context: {node: Node, isInitial: boolean, oldViewModel: object, newViewModel: object, newViewParent: Node, oldViewParent: Node, removeOldView: Function, insertNewView: Function, oldDomNodes: Array<any>}): Promise<any>;
    canAnimate(context: {node: Node, isInitial: boolean, oldViewModel: object, newViewModel: object}): boolean;
    prepareAnimation(context: {node: Node, isInitial: boolean, oldViewModel: object, newViewModel: object}): object;
  }

}
declare namespace oj {  
  class ojModule {
    animation: object;
    config: {cleanupMode: 'onDisconnect'|'none', view: Array<Node>, viewModel: object};
    onAnimationChanged: (event: CustomEvent)=> any;
    onConfigChanged: (event: CustomEvent)=> any;
    onOjTransitionEnd: (event: oj.ojModule.ojTransitionEnd)=> any;
    onOjTransitionStart: (event: oj.ojModule.ojTransitionStart)=> any;
    onOjViewConnected: (event: oj.ojModule.ojViewConnected)=> any;
    onOjViewDisconnected: (event: oj.ojModule.ojViewDisconnected)=> any;

    addEventListener<T extends keyof ojModuleEventMap>(type: T, listener: (this: HTMLElement, ev: ojModuleEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  namespace ojModule {
    class ojTransitionEnd extends CustomEvent<{viewModel: object, [propName: string]: any}> {
      
    }
  
    class ojTransitionStart extends CustomEvent<{viewModel: object, [propName: string]: any}> {
      
    }
  
    class ojViewConnected extends CustomEvent<{viewModel: object, [propName: string]: any}> {
      
    }
  
    class ojViewDisconnected extends CustomEvent<{viewModel: object, view: Array<Node>, [propName: string]: any}> {
      
    }
  }
  interface ojModuleEventMap extends oj.JetElementEventMap {
    'ojTransitionEnd': oj.ojModule.ojTransitionEnd;
    'ojTransitionStart': oj.ojModule.ojTransitionStart;
    'ojViewConnected': oj.ojModule.ojViewConnected;
    'ojViewDisconnected': oj.ojModule.ojViewDisconnected;
    'animationChanged': CustomEvent;
    'configChanged': CustomEvent;
  }
  interface ojModuleSettableProperties extends JetSettableProperties {
    animation: object;
    config: {cleanupMode: 'onDisconnect'|'none', view: Array<Node>, viewModel: object}; 
  }

}
