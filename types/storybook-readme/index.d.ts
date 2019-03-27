// Type definitions for storybook-readme 4.0
// Project: https://github.com/tuchk4/storybook-readme
// Definitions by: Taeheon Kim  <https://github.com/lonyele>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// Shared Types
export type Renderable = React.ComponentType | JSX.Element;
export type RenderFunction = () => Renderable | Renderable[];
export type Readme = string | string[];

export type DecoratorPattern = (
  story: RenderFunction,
  context: { kind: string; story: string }
) => Renderable | null;

export type HOCPattern = (story: RenderFunction) => Renderable | null;

// WithReadme Types
export function withReadme(readme: Readme): DecoratorPattern;
export function withReadme(
  readme: Readme,
  story: RenderFunction
): RenderFunction;

// WithDocs Types
export interface CustomComponents {
  PreviewComponent: (props: { children: JSX.Element }) => JSX.Element;
  FooterComponent: (props: { children: JSX.Element }) => JSX.Element;
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
