// Type definitions for catalog 2.1
// Project: https://github.com/interactivethings/catalog/
// Definitions by: Peter Gassner <https://github.com/grossbart>, Tomas Carnecky <https://github.com/wereHamster>
// Definitions: https://github.com/interactivethings/catalog/
// TypeScript Version: 2.3

import * as React from "react";

// Configuration
export interface Page {
  path: string;
  title: string;

  content?: any;
  pages?: Page[];
}

export interface Config {
  title: string;
  pages: Page[];

  useBrowserHistory?: boolean;
  basePath?: string;
}

export function render(config: Config, element: HTMLElement): any;
export function configure(config: any): any;
export function configureRoutes(config: any): any;
export function configureJSXRoutes(config: any): any;

export function pageLoader(f: () => Promise<any>): any;
export function markdown(...x: any[]): JSX.Element;

// Components
export interface DefaultCatalogProps extends React.Props<{}> {
  span?: number;
  theme?: any;
}

export class Card extends React.Component<DefaultCatalogProps> {}
export class Page extends React.Component<DefaultCatalogProps> {}
export interface SpanProps extends DefaultCatalogProps {
  style?: any;
}
export class Span extends React.Component<SpanProps> {}

// Specimens
export class AudioSpecimen extends React.Component<DefaultCatalogProps> {}

export interface CodeSpecimenProps extends DefaultCatalogProps {
  rawBody: string;
  collapsed: boolean;
  lang: string;
  raw: boolean;
}
export class CodeSpecimen extends React.Component<CodeSpecimenProps> {}

export interface ColorSpecimenProps extends DefaultCatalogProps {
  value: string;
  name: string;
}
export class ColorSpecimen extends React.Component<ColorSpecimenProps> {}

export interface ColorPaletteSpecimenProps extends DefaultCatalogProps {
  colors: Array<{name?: string, value: string}>;
  horizontal?: boolean;
}
export class ColorPaletteSpecimen extends React.Component<ColorPaletteSpecimenProps> {}

export class HtmlSpecimen extends React.Component<DefaultCatalogProps> {}
export class HintSpecimen extends React.Component<DefaultCatalogProps> {}
export class ImageSpecimen extends React.Component<DefaultCatalogProps> {}

export interface TypeSpecimenProps extends DefaultCatalogProps {
  color?: string;
  font: string;
  headings: string[] | number[];
  style?: string;
  weight: string;
}
export class TypeSpecimen extends React.Component<TypeSpecimenProps> {}
export class DownloadSpecimen extends React.Component<DefaultCatalogProps> {}

export interface ReactSpecimenProps extends DefaultCatalogProps {
  noSource?: boolean;
  plain?: boolean;
  light?: boolean;
  dark?: boolean;
  frame?: boolean;
  state?: any;
}
export class ReactSpecimen extends React.Component<ReactSpecimenProps> {}

export class VideoSpecimen extends React.Component<DefaultCatalogProps> {}

export class Catalog extends React.Component<any> {}
