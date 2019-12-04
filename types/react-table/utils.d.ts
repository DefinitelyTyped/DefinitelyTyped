import { ComponentType, DependencyList, EffectCallback, ReactElement } from 'react';
import {
    Column,
    ColumnInstance,
    HeaderGroup,
    IdType,
    PluginHook,
    Row,
    SortByFn,
    TableInstance,
    TableState,
} from './index';

// tslint:disable:no-unnecessary-generics
// no-unnecessary-generics is disabled because many of these definitions are either used in a generic
// context

export {};

interface ElementDimensions {
    left: number;
    width: number;
    outerWidth: number;
    marginLeft: number;
    marginRight: number;
    paddingLeft: number;
    paddingRight: number;
    scrollWidth: number;
}

export function safeUseLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;

export function findMaxDepth<D extends object = {}>(columns: Array<Column<D>>, depth?: number): any; // to check column.reduce() return value
export function decorateColumn<D extends object = {}>(
    columns: Column<D>,
    userDefaultColumn: Partial<Column<D>>,
    parent: Column<D>,
    depth: number,
    index: number,
): Column<D>;

export function decorateColumnTree<D extends object = {}>(
    columns: Column<D>,
    defaultColumn: Partial<Column<D>>,
    parent: Column<D>,
    depth: number,
): Array<Column<D>>;

export function makeHeaderGroups<D extends object = {}>(
    flatColumns: Array<ColumnInstance<D>>,
    defaultColumn: Partial<Column<D>>,
): Array<HeaderGroup<D>>;

export function determineHeaderVisibility<D extends object = {}>(instance: TableInstance<D>): void;

export function getBy(obj: any, path: string, def: string): string; // guess
export function defaultOrderByFn<D extends object = {}>(
    arr: Array<Row<D>>,
    funcs: Array<SortByFn<D>>,
    dirs: boolean[],
): Array<Row<D>>;

export function getFirstDefined(...props: any): any;

export function defaultGroupByFn<D extends object = {}>(rows: Array<Row<D>>, columnId: IdType<D>): Record<string, Row<D>>;

export function getElementDimensions(element: ReactElement): ElementDimensions;

export function flexRender(component: ComponentType, props: any): ReactElement;

export function mergeProps(props: any): any;

export function applyHooks(hooks: any, initial: any, props: any): any; // todo
export function applyPropHooks(hooks: any, args: any): any; // todo
export function warnUnknownProps(props: any): void;

export function sum(arr: any[]): number; // todo
export function isFunction(a: any): boolean;

export function flattenBy<D extends object = {}>(
    columns: Array<ColumnInstance<D>>,
    childKey: IdType<D>,
): Array<ColumnInstance<D>>;

export function ensurePluginOrder<D extends object = {}>(
    plugins: Array<PluginHook<D>>,
    befores: string[],
    pluginName: string,
    afters: string[],
): void;

export function expandRows<D extends object = {}>(
    rows: Array<Row<D>>,
    {
        manualExpandedKey,
        expanded,
        expandSubRows,
    }: { manualExpandedKey: string; expanded: string[]; expandSubRows?: boolean },
): string[];

export function functionalUpdate<D extends object = {}>(updater: any, old: Partial<TableState<D>>): Partial<TableState<D>>; // todo
