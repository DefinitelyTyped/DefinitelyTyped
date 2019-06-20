/// <reference types="baseui"/>
import * as React from 'react';
import { BlockProps, Responsive, Scale } from '../block';

export interface FlexGridProps extends BlockProps {
  flexGridColumnCount?: Responsive<number>;
  flexGridColumnGap?: Responsive<Scale>;
  flexGridRowGap?: Responsive<Scale>;
}

export const FlexGrid: React.FC<FlexGridProps>;

export type FlexGridItemProps = FlexGridProps;

export const FlexGridItem: React.FC<FlexGridItemProps>;
