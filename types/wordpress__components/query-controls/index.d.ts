import { ComponentType } from 'react';

declare namespace QueryControls {
    type Order = 'asc' | 'desc';
    type OrderBy = 'date' | 'title';
    type CategoryProps =
        | {
              categoriesList: ReadonlyArray<{
                  id: number;
                  name: string;
                  parent: number;
              }>;
              selectedCategoryId: number;
              onCategoryChange(categoryId: number): void;
          }
        | {};
    type OrderProps =
        | {
              order: Order;
              orderBy: OrderBy;
              onOrderChange(order: Order): void;
              onOrderByChange(orderBy: OrderBy): void;
          }
        | {};
    type NumberProps =
        | {
              /**
               * Maximum number of items.
               * @defaultValue 100
               */
              maxItems?: number;
              /**
               * Minimum number of items.
               * @defaultValue 1
               */
              minItems?: number;
              numberOfItems: number;
              onNumberOfItemsChange(newNumber: number): void;
          }
        | {};
    type Props = CategoryProps & OrderProps & NumberProps;
}
declare const QueryControls: ComponentType<QueryControls.Props>;

export default QueryControls;
