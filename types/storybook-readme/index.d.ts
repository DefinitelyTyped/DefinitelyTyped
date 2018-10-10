// Type definitions for storybook-readme 4.0
// Project: https://github.com/tuchk4/storybook-readme
// Definitions by: Taeheon Kim  <https://github.com/lonyele>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

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
export type WithReadmeAsDecorator = (readme: Readme) => DecoratorPattern;
export type WithReadmeAsHOC = (
  readme: Readme,
  story: RenderFunction
) => RenderFunction;

export const withReadme: WithReadmeAsDecorator & WithReadmeAsHOC;

// WithDocs Types
export interface CustomComponents {
  PreviewComponent: (props: { children: JSX.Element }) => JSX.Element;
  FooterComponent: (props: { children: JSX.Element }) => JSX.Element;
}

export interface AddFooterDocs {
  addFooterDocs: (footerDoc: string) => void;
}

export interface WithDocsAsHOC {
  (custom: CustomComponents): (readme: Readme) => HOCPattern;
  (readme: Readme, story: RenderFunction): RenderFunction;
}

export type WithDocsAsDecorator = (readme: Readme) => DecoratorPattern;

export const withDocs: AddFooterDocs & WithDocsAsHOC & WithDocsAsDecorator;

// Doc Types
export function doc(readme: string): RenderFunction;
