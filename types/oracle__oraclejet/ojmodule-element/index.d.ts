import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ModuleElementAnimation {
    animate(context: {
        node: Node;
        isInitial: boolean;
        oldViewModel: object;
        newViewModel: object;
        newViewParent: Node;
        oldViewParent: Node;
        removeOldView: () => undefined;
        insertNewView: () => undefined;
        oldDomNodes: any[];
    }): Promise<any>;
    canAnimate(context: {
        node: Node;
        isInitial: boolean;
        oldViewModel: object;
        newViewModel: object;
    }): boolean;
    prepareAnimation(context: {
        node: Node;
        isInitial: boolean;
        oldViewModel: object;
        newViewModel: object;
    }): object;
}
export interface ojModule extends JetElement<ojModuleSettableProperties> {
    animation: object;
    config: {
        cleanupMode?: 'onDisconnect' | 'none';
        view: Node[];
        viewModel: object | null;
    };
    onAnimationChanged: ((event: JetElementCustomEvent<ojModule["animation"]>) => any) | null;
    onConfigChanged: ((event: JetElementCustomEvent<ojModule["config"]>) => any) | null;
    onOjTransitionEnd: ((event: ojModule.ojTransitionEnd) => any) | null;
    onOjTransitionStart: ((event: ojModule.ojTransitionStart) => any) | null;
    onOjViewConnected: ((event: ojModule.ojViewConnected) => any) | null;
    onOjViewDisconnected: ((event: ojModule.ojViewDisconnected) => any) | null;
    addEventListener<T extends keyof ojModuleEventMap>(type: T, listener: (this: HTMLElement, ev: ojModuleEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojModuleSettableProperties>(property: T): ojModule[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojModuleSettableProperties>(property: T, value: ojModuleSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojModuleSettableProperties>): void;
    setProperties(properties: ojModuleSettablePropertiesLenient): void;
}
export namespace ojModule {
    interface ojTransitionEnd extends CustomEvent<{
        viewModel: object;
        [propName: string]: any;
    }> {
    }
    interface ojTransitionStart extends CustomEvent<{
        viewModel: object;
        [propName: string]: any;
    }> {
    }
    interface ojViewConnected extends CustomEvent<{
        viewModel: object;
        [propName: string]: any;
    }> {
    }
    interface ojViewDisconnected extends CustomEvent<{
        viewModel: object;
        view: Node[];
        [propName: string]: any;
    }> {
    }
}
export interface ojModuleEventMap extends HTMLElementEventMap {
    'ojTransitionEnd': ojModule.ojTransitionEnd;
    'ojTransitionStart': ojModule.ojTransitionStart;
    'ojViewConnected': ojModule.ojViewConnected;
    'ojViewDisconnected': ojModule.ojViewDisconnected;
    'animationChanged': JetElementCustomEvent<ojModule["animation"]>;
    'configChanged': JetElementCustomEvent<ojModule["config"]>;
}
export interface ojModuleSettableProperties extends JetSettableProperties {
    animation: object;
    config: {
        cleanupMode?: 'onDisconnect' | 'none';
        view: Node[];
        viewModel: object | null;
    };
}
export interface ojModuleSettablePropertiesLenient extends Partial<ojModuleSettableProperties> {
    [key: string]: any;
}
