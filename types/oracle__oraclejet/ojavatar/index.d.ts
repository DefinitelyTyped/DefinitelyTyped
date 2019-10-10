import { JetElement, JetSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojAvatar extends JetElement<ojAvatarSettableProperties> {
    initials: string;
    size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    src: string;
    onInitialsChanged: ((event: JetElementCustomEvent<ojAvatar["initials"]>) => any) | null;
    onSizeChanged: ((event: JetElementCustomEvent<ojAvatar["size"]>) => any) | null;
    onSrcChanged: ((event: JetElementCustomEvent<ojAvatar["src"]>) => any) | null;
    addEventListener<T extends keyof ojAvatarEventMap>(type: T, listener: (this: HTMLElement, ev: ojAvatarEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojAvatarSettableProperties>(property: T): ojAvatar[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojAvatarSettableProperties>(property: T, value: ojAvatarSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojAvatarSettableProperties>): void;
    setProperties(properties: ojAvatarSettablePropertiesLenient): void;
}
export interface ojAvatarEventMap extends HTMLElementEventMap {
    'initialsChanged': JetElementCustomEvent<ojAvatar["initials"]>;
    'sizeChanged': JetElementCustomEvent<ojAvatar["size"]>;
    'srcChanged': JetElementCustomEvent<ojAvatar["src"]>;
}
export interface ojAvatarSettableProperties extends JetSettableProperties {
    initials: string;
    size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    src: string;
}
export interface ojAvatarSettablePropertiesLenient extends Partial<ojAvatarSettableProperties> {
    [key: string]: any;
}
