// Type definitions for storybook-readme 4.0
// Project: https://github.com/tuchk4/storybook-readme
// Definitions by: Taeheon Kim  <https://github.com/lonyele>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

// Shared Types
type Renderable = React.ComponentType | JSX.Element;
type RenderFunction = () => Renderable | Renderable[];
type Readme = string | string[];

type DecoratorPattern = (
  story: RenderFunction,
  context: { kind: string; story: string }
) => Renderable | null;

type HOCPattern = (story: RenderFunction) => Renderable | null;

// WithReadme Types
type WithReadmeAsDecorator = (readme: Readme) => DecoratorPattern;
type WithReadmeAsHOC = (
  readme: Readme,
  story: RenderFunction
) => RenderFunction;

export const withReadme: WithReadmeAsDecorator & WithReadmeAsHOC;

// WithDocs Types
interface CustomComponents {
  PreviewComponent: (props: { children: JSX.Element }) => JSX.Element;
  FooterComponent: (props: { children: JSX.Element }) => JSX.Element;
}

interface AddFooterDocs {
  addFooterDocs: (footerDoc: string) => void;
}

interface WithDocsAsHOC {
  (custom: CustomComponents): (readme: Readme) => HOCPattern;
  (readme: Readme, story: RenderFunction): RenderFunction;
}

type WithDocsAsDecorator = (readme: Readme) => DecoratorPattern;

export const withDocs: AddFooterDocs & WithDocsAsHOC & WithDocsAsDecorator;

// Doc Types
export const doc: (readme: string) => any;
