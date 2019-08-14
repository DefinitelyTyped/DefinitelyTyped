import { EventEmitter } from 'events';
import DomElement from '../runtime/DomElement';

export default interface Component extends EventEmitter, DomElement {
  /** @deprecated */
  el: HTMLElement;
  /** @deprecated */
  els: HTMLElement[];
  id: string;
  input: any;
  state: any;
  destroy(): void;
  elId(key: string, index?: number): string;
  forceUpdate(): void;
  getComponent(key: string, index?: number): Component;
  getComponents(key: string): Component[];
  getEl(key?: string, index?: number): HTMLElement;
  getElId(key: string, index?: number): string;
  getEls(key?: string): HTMLElement[];
  isDestroyed(): boolean;
  replaceState(newState: any): void;
  setState(name: string, value: any): void;
  setState(name: any): void;
  setStateDirty(name: string, value?: any): void;
  shouldUpdate(newState: any, newProps: any): boolean;
  update(): void;
  (id: string): this;
}
