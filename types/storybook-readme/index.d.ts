// Type definitions for storybook-readme 5.0
// Project: https://github.com/tuchk4/storybook-readme
// Definitions by: Taeheon Kim  <https://github.com/lonyele>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { ComponentType, ReactNode } from 'react';

// Shared Types
export type Renderable = ComponentType | JSX.Element;
export type RenderFunction = () => Renderable | Renderable[];
export type Readme = string | string[];

export type DecoratorPattern = (
  story: RenderFunction,
  context: { kind: string; story: string }
) => Renderable | null;

export type HOCPattern = (story: RenderFunction) => Renderable | null;

export type MakeDecoratorResult = (...args: any[]) => any;

// Types added for v5
export const addReadme: MakeDecoratorResult;
export function addFooter(md: string): void;
export function addHeader(md: string): void;
export interface ConfigureReadmeConfig {
  header?: string;
  footer?: string;
  StoryPreview?: (props: { children: ReactNode }) => ReactNode;
  DocPreview?: (props: { children: ReactNode }) => ReactNode;
  HeaderPreview?: (props: { children: ReactNode }) => ReactNode;
  FooterPreview?: (props: { children: ReactNode }) => ReactNode;
}

export function configureReadme(config: ConfigureReadmeConfig): void;

// !~~~~~ Belows are for backwardCompatibility with v4 ~~~~~!
// WithReadme Types
export function withReadme(readme: Readme): DecoratorPattern;
export function withReadme(
  readme: Readme,
  story: RenderFunction
): RenderFunction;

// WithDocs Types
export interface CustomComponents {
  PreviewComponent?: (props: { children: JSX.Element }) => JSX.Element;
  FooterComponent?: (props: { children: JSX.Element }) => JSX.Element;
}

export function withDocs(
  custom: CustomComponents
): (readme: Readme) => HOCPattern;
export function withDocs(readme: Readme, story: RenderFunction): RenderFunction;
export function withDocs(readme: Readme): DecoratorPattern;
export namespace withDocs {
  function addFooterDocs(footerDoc: string): void;
}

// Doc Types
export function doc(readme: string): RenderFunction;
