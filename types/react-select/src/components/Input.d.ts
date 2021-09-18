import { ComponentType, ReactElement, Ref as ElementRef } from 'react';
import { CSSObject } from '@emotion/serialize';

import { colors, spacing } from '../theme';

import { ClassNamesState, Theme } from '../types';

export interface InputProps {
    cx: (a: string | null, b: ClassNamesState, c: string) => string | void;
    getStyles: (name: string, props: any) => {};
    theme: Theme;
    /** Reference to the internal element */
    innerRef: (element: ElementRef<any>) => void;
    /** Set whether the input should be visible. Does not affect input size. */
    isHidden: boolean;
    /** Whether the input is disabled */
    isDisabled?: boolean | undefined;
    className?: string | undefined;
    /** Autocomplete value for the Select Input */
    autoComplete?: string | undefined;
}

export function inputCSS(props: InputProps): CSSObject;
export function inputStyle(isHidden: boolean): React.CSSProperties;

declare function Input(props: InputProps): ReactElement;

export default Input;
