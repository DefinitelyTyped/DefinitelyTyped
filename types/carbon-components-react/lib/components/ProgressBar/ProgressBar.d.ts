import * as React from 'react';

export interface ProgressBarProps {
    className?: string | null | undefined;
    helperText?: React.ReactNode | undefined;
    hideLabel?: boolean | null | undefined;
    label: string;
    max?: number | null | undefined;
    size?: 'small' | 'big' | undefined;
    value?: number | null | undefined;
}

declare const ProgressBar: React.FC<ProgressBarProps>;

export default ProgressBar;
