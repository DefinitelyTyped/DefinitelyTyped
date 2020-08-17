import { Obj } from './Obj';
import { Binary } from './Binary';
import { CSSProperties, Component, FC } from 'react';
import { Widget } from './Widget';
import { Link } from './Link';
import { History } from "history";

import { ObjClass, ObjClassOptions, AbstractObjClass } from './ObjClass';
import { WidgetClass, WidgetClassOptions, AbstractWidgetClass } from './WidgetClass';
import { ConfigOptions } from './Config';

import { EditingConfig } from './EditingConfig';

export type WidgetComponent = FC<{ widget: Widget, [key: string]: any }>;
export type ObjComponent = FC<{ page: Obj, params: {}, [key: string]: any }>;

export function canWrite(): boolean;
export function configure(options: ConfigOptions): void;
export function configureContentBrowser(options: any): void;
export function connect(component: React.ComponentClass | React.FunctionComponent): void;
export function currentPage(): Obj;
export function currentPageParams(): any;
export function extendMenu(menuCallback: any): void;
export function extractText(obj: Obj, options: { length: number }): string;
export function finishLoading(): Promise<{}>;
export function getClass(name: string): ObjClass | WidgetClass | null;
export function isEditorLoggedIn(): boolean;
export function isInPlaceEditingActive(): boolean;
export function load<T>(functionToLoad: () => T): Promise<T>;
export function navigateTo(target: (() => Obj | Link) | Obj | Link, options?: { hash?: string, params?: any }): void;
export function openDialog(name: string): void;
export function preload(preloadDump: any): Promise<{ dumpLoaded: boolean }>;
export function provideComponent(className: string, component: WidgetComponent | ObjComponent): void;
export function provideEditingConfig(name: string, editingConfig: EditingConfig): void;

export function createObjClass(options: ObjClassOptions): AbstractObjClass;
export function createWidgetClass(options: WidgetClassOptions): AbstractWidgetClass;
export function provideObjClass(name: string, contentClassOrOptions: ObjClassOptions | AbstractObjClass): ObjClass;
export function provideWidgetClass(name: string, contentClassOrOptions: WidgetClassOptions | AbstractWidgetClass): WidgetClass;

export function registerComponent(name: string, component: WidgetComponent | ObjComponent): void;
export function renderPage(page: any, renderFunction: () => void): Promise<{ result: Obj, preloadDump: any }>;
export function setVisitorIdToken(idToken: string): void;
export function updateContent(): void;
export function updateMenuExtensions(): void;
export function urlFor(target: Obj | Binary | Link, options?: { query?: string; hash?: string }): void;
export function useHistory(history: History): void;
export function validationResults(model: Obj | Widget, attribute: string): object[];
