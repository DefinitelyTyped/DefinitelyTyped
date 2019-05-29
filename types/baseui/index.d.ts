// Type definitions for baseui 6.20
// Project: https://github.com/uber-web/baseui#readme
// Definitions by: Jhey Tompkins <https://github.com/jh3y>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1
/// <reference path="theme.d.ts"/>
/// <reference path="locale.d.ts"/>
/// <reference path="overrides.d.ts"/>

import * as React from 'react';
import { StyledFn, StyletronComponent } from 'styletron-react';

export function createTheme(primitives: ThemePrimitives, overrides?: object): Theme;
export function withProps(Component: React.ComponentType, customProps?: object): (props: object) => any;
export function mergeOverrides<T>(target?: Overrides<T>, source?: Overrides<T>): Overrides<T>;
export function styled(...args: any): StyledFn;

export const LightTheme: Theme;
export const LightThemeMove: Theme;
export const LightThemePrimitives: ThemePrimitives;
export const DarkTheme: Theme;
export const DarkThemeMove: Theme;

export interface BaseProviderProps {
  children: React.ReactNode;
  theme: Theme;
}
export const BaseProvider: React.FC<BaseProviderProps>;

export interface LocaleProviderProps {
  locale: Locale;
  children?: React.ReactNode;
}
export const LocaleProvider: React.FC<LocaleProviderProps>;

export interface ThemeProviderProps {
  theme: Theme;
  children?: React.ReactNode;
}
export const ThemeProvider: React.FC<ThemeProviderProps>;
