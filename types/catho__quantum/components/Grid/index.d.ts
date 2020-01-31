import React = require('react');
import Breakpoints from '../Breakpoints';

export type BreakpointsType = keyof typeof Breakpoints;

export interface ColProps {
    'no-gutters'?: boolean;
    xsmall?: number;
    small?: number;
    medium?: number;
    large?: number;
    xlarge?: number;
    'xsmall-offset'?: number;
    'small-offset'?: number;
    'medium-offset'?: number;
    'large-offset'?: number;
    'xlarge-offset'?: number;
    hide?: BreakpointsType | BreakpointsType[];
}

export class Col extends React.Component<ColProps> {}

export interface ContainerProps {
    withBreakpoints?: boolean;
    fluid?: boolean;
    hide?: BreakpointsType | string[];
    theme?: {
        breakpoints?: object;
        components?: object;
    };
    'no-gutters'?: boolean;
}

export class Container extends React.Component<ContainerProps> {}

export interface HideProps {
    xlarge?: boolean;
    large?: boolean;
    medium?: boolean;
    small?: boolean;
    xsmall?: boolean;
    theme?: {
        breakpoints: object;
    };
}

export class Hide extends React.Component<HideProps> {}

export interface RowProps {
    'no-gutters'?: boolean;
    children: React.ReactNode[] | React.ReactNode;
    hide?: BreakpointsType | BreakpointsType[];
    theme?: {
        breakpoints?: object;
    };
}

export class Row extends React.Component<RowProps> {}
