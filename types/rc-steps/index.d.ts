// Type definitions for rc-steps 3.5
// Project: http://github.com/react-component/steps
// Definitions by: Josh Holmer <https://github.com/shssoichiro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface StepsProps {
    type?: 'default' | 'navigation';
    direction?: 'horizontal' | 'vertical';
    current?: number;
    initial?: number;
    size?: 'small';
    labelPlacement?: 'vertical';
    status?: 'error' | 'process' | 'finish' | 'wait';
    icons?: { finish?: React.ReactNode; error?: React.ReactNode };
    onChange?: (current: number) => void;
    // The following are undocumented upstream, but listed in PropTypes
    prefixCls?: string;
    className?: string;
    iconPrefix?: string;
    children?: React.ReactNode;
    progressDot?: boolean;
    style?: React.CSSProperties;
}

export interface StepProps {
    title?: React.ReactNode;
    subTitle?: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    status?: 'error' | 'process' | 'finish' | 'wait';
    tailContent?: React.ReactNode;
    disabled?: boolean;
    // The following are undocumented upstream, but listed in PropTypes
    prefixCls?: string;
    style?: React.CSSProperties;
    iconPrefix?: string;
    progressDot?: boolean;
    icons?: { finish?: React.ReactNode; error?: React.ReactNode };
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onStepClick?: (stepIndex: number) => void;
}

export default class Steps extends React.Component<StepsProps> {}
export class Step extends React.Component<StepProps> {}
