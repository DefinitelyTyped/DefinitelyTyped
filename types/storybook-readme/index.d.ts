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

// Types added for v5
export type addReadme = (decorator: DecoratorPattern) => React.ReactNode;
export type addFooter = (md: string) => void;
export type addHeader = (md: string) => void;
export interface ICommonConfig {
  header: string;
  footer: string;
  StoryPreview: (props: { children: React.ReactNode }) => React.ReactNode;
  DocPreview: (props: { children: React.ReactNode }) => React.ReactNode;
  HeaderPreview: (props: { children: React.ReactNode }) => React.ReactNode;
  FooterPreview: (props: { children: React.ReactNode }) => React.ReactNode;
}

export type ConfigureReadme = (config: ICommonConfig) => void;

// !~~~~~ Belows are for backwardCompatibility with v4 ~~~~~!
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
