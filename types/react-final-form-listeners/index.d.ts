// Type definitions for react-final-form-listeners 1.0
// Project: https://github.com/final-form/react-final-form-listeners
// Definitions by: Yuri Drabik <https://github.com/yurist38>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import * as React from 'react';

export interface ExternallyChangedProps {
  name: string;
  children: (externallyChanged: boolean) => React.ReactNode;
}

export interface OnBlurProps {
  name: string;
  children: () => void;
}

export interface OnChangeProps {
  name: string;
  children: (value: any, previous: any) => void;
}

export interface OnFocusProps {
  name: string;
  children: () => void;
}

export const OnBlur: React.FC<OnBlurProps>;

export const OnChange: React.FC<OnChangeProps>;

export const OnFocus: React.FC<OnFocusProps>;

export const ExternallyChanged: React.FC<ExternallyChangedProps>;
