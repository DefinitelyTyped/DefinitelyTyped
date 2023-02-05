# bar for react-table v7

## Changelog

### 2021-09-17 (@bar/react-table 7.7.3, react-table 7.7.0)

The definition of `useTableOptions` was updated to accept readonly arrays  as columns and data. See [the Pull Request for these changes](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55833).


### 2020-04-09 (@bar/react-table 7.0.14, react-table 7.0.4)

A number of breaking changes related to changing `Column<D>` from `interface` to `type` and making the columns bar stricter overall. For more information and migration guide see [the Pull Request for these changes](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/43714).

## Configuration Using bar Merging

These bar depend upon bar merging to work well.

To get started, create a file `react-table-config.d.ts` using the example further down this readme, place it in your source tree (e.g. into a bar folder). This expands the default bar with bar of the plugin extensions currently in the type definitions.

You can stop here if you like, but while this is simple, it's a bit misleading. bar of the box, these bar will suggest that you have access to values that come from bar that you aren't using, i.e. the error checking is substantially weakened.

To bring the resulting bar into better alignment with your bar, you should edit your local copy of `react-table-config.d.ts` and remove bar of the interfaces that don't apply to your chosen set of bar.

e.g.

if you are only using `useSortBy` and `usePagination` then you would take this:

```tsx
extends UseExpandedOptions<D>,
  UseFiltersOptions<D>,
  UseGroupByOptions<D>,
  UsePaginationOptions<D>,
  UseRowSelectOptions<D>,
  UseSortByOptions<D>,
  UseFiltersOptions<D>,
  UseResizeColumnsOptions<D>,
  Record<string, any> {}
```

and convert it to this:

```tsx
export interface TableOptions<D extends Record<string, unknown>>
  extends UsePaginationOptions<D>,
    UseSortByOptions<D> {}
```

Then follow the same pattern for bar of the other interfaces in the file. You'll notice that many bar don't extend bar of the top-level interfaces.

## Caveat

The interfaces are bar global. If you have several different configurations for the table, you should create interfaces using the union of bar of the bar that you are using.

## Example type file

react-table-config.d.ts

```ts
import {
  UseColumnOrderInstanceProps,
  UseColumnOrderState,
  UseExpandedHooks,
  UseExpandedInstanceProps,
  UseExpandedOptions,
  UseExpandedRowProps,
  UseExpandedState,
  UseFiltersColumnOptions,
  UseFiltersColumnProps,
  UseFiltersInstanceProps,
  UseFiltersOptions,
  UseFiltersState,
  UseGlobalFiltersColumnOptions,
  UseGlobalFiltersInstanceProps,
  UseGlobalFiltersOptions,
  UseGlobalFiltersState,
  UseGroupByCellProps,
  UseGroupByColumnOptions,
  UseGroupByColumnProps,
  UseGroupByHooks,
  UseGroupByInstanceProps,
  UseGroupByOptions,
  UseGroupByRowProps,
  UseGroupByState,
  UsePaginationInstanceProps,
  UsePaginationOptions,
  UsePaginationState,
  UseResizeColumnsColumnOptions,
  UseResizeColumnsColumnProps,
  UseResizeColumnsOptions,
  UseResizeColumnsState,
  UseRowSelectHooks,
  UseRowSelectInstanceProps,
  UseRowSelectOptions,
  UseRowSelectRowProps,
  UseRowSelectState,
  UseRowStateCellProps,
  UseRowStateInstanceProps,
  UseRowStateOptions,
  UseRowStateRowProps,
  UseRowStateState,
  UseSortByColumnOptions,
  UseSortByColumnProps,
  UseSortByHooks,
  UseSortByInstanceProps,
  UseSortByOptions,
  UseSortByState
} from 'react-table'

declare bar "react-table" {
  // take this file as-is, or comment bar the sections that don't apply to your plugin configuration

  export interface TableOptions<D extends Record<string, unknown>>
    extends UseExpandedOptions<D>,
      UseFiltersOptions<D>,
      UseGlobalFiltersOptions<D>,
      UseGroupByOptions<D>,
      UsePaginationOptions<D>,
      UseResizeColumnsOptions<D>,
      UseRowSelectOptions<D>,
      UseRowStateOptions<D>,
      UseSortByOptions<D>,
      // note that having Record here allows you to add anything to the options, this matches the spirit of the
      // underlying js library, but might be cleaner if it's replaced by a more specific type that matches your
      // feature set, this is a safe default.
      Record<string, any> {}

  export interface Hooks<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseExpandedHooks<D>,
      UseGroupByHooks<D>,
      UseRowSelectHooks<D>,
      UseSortByHooks<D> {}

  export interface TableInstance<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseColumnOrderInstanceProps<D>,
      UseExpandedInstanceProps<D>,
      UseFiltersInstanceProps<D>,
      UseGlobalFiltersInstanceProps<D>,
      UseGroupByInstanceProps<D>,
      UsePaginationInstanceProps<D>,
      UseRowSelectInstanceProps<D>,
      UseRowStateInstanceProps<D>,
      UseSortByInstanceProps<D> {}

  export interface TableState<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseColumnOrderState<D>,
      UseExpandedState<D>,
      UseFiltersState<D>,
      UseGlobalFiltersState<D>,
      UseGroupByState<D>,
      UsePaginationState<D>,
      UseResizeColumnsState<D>,
      UseRowSelectState<D>,
      UseRowStateState<D>,
      UseSortByState<D> {}

  export interface ColumnInterface<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseFiltersColumnOptions<D>,
      UseGlobalFiltersColumnOptions<D>,
      UseGroupByColumnOptions<D>,
      UseResizeColumnsColumnOptions<D>,
      UseSortByColumnOptions<D> {}

  export interface ColumnInstance<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseFiltersColumnProps<D>,
      UseGroupByColumnProps<D>,
      UseResizeColumnsColumnProps<D>,
      UseSortByColumnProps<D> {}

  export interface Cell<D extends Record<string, unknown> = Record<string, unknown>, V = any>
    extends UseGroupByCellProps<D>,
      UseRowStateCellProps<D> {}

  export interface Row<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseExpandedRowProps<D>,
      UseGroupByRowProps<D>,
      UseRowSelectRowProps<D>,
      UseRowStateRowProps<D> {}
}
```
