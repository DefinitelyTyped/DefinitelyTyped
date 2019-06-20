/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface SortableHeadCellProps {
  children?: React.ReactNode;
  direction: 'ASC' | 'DESC' | null;
  disabled?: boolean;
  onSort?: () => any;
  overrides?: {
    HeadCell?: Override<any>;
    SortableLabel?: Override<any>;
  };
  title: string;
}
export const SortableHeadCell: React.FC<SortableHeadCellProps>;

export interface TableProps {
  columns: Array<string | React.ReactNode>;
  data: React.ReactNode[][];
  horizontalScrollWidth?: string;
  isLoading?: boolean;
}
export class Table extends React.Component<TableProps> {}

export interface FilterProps {
  active?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  onReset?: () => any;
  onSelectAll?: () => any;
  overrides?: {
    MenuButton?: Override<any>;
    Content?: Override<any>;
    Heading?: Override<any>;
    Footer?: Override<any>;
  };
}
export const Filter: React.FC<FilterProps>;

export const StyledTable: React.FC<any>;
export const StyledFilterButton: StyletronComponent<any>;
export const StyledFilterContent: StyletronComponent<any>;
export const StyledFilterHeading: StyletronComponent<any>;
export const StyledFilterFooter: StyletronComponent<any>;
export const StyledHead: StyletronComponent<any>;
export const StyledHeadCell: StyletronComponent<any>;
export const StyledBody: StyletronComponent<any>;
export const StyledRow: StyletronComponent<any>;
export const StyledCell: StyletronComponent<any>;
export const StyledAction: StyletronComponent<any>;
