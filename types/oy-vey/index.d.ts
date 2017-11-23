// Type definitions for oy-vey 0.9.0
// Project: https://github.com/revivek/oy/.git
// Definitions by: Sampson Oliver <https://github.com/sampsonjoliver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.5

/// <reference types="react" />

declare module 'oy-vey' {
  export const Table: React.DetailedHTMLFactory<Oy.OyTableElements, HTMLTableElement>;
  export const TBody: React.DetailedHTMLFactory<Oy.OyTBodyElements, HTMLTableSectionElement>;
  export const TR: React.DetailedHTMLFactory<Oy.OyTRElements, HTMLTableRowElement>;
  export const TD: React.DetailedHTMLFactory<Oy.OyTDElements, HTMLTableDataCellElement>;
  export const Img: React.DetailedHTMLFactory<Oy.OyImgElements, HTMLImageElement>;
  export const A: React.DetailedHTMLFactory<Oy.OyAElements, HTMLAnchorElement>;
  export const renderTemplate: (jsx: JSX.Element, opts: Oy.RenderOptions) => string;

  const oy: {
    Table: typeof Table;
    TBody: typeof TBody;
    TR: typeof TR;
    TD: typeof TD;
    Img: typeof Img;
    A: typeof A;
    renderTemplate: typeof renderTemplate;
  };
  export default oy;
}

declare namespace Oy {
  interface OyElement {
    width?: number | string;
    height?: number | string;
    align?: string;
    background?: string;
    bgColor?: string;
    border?: number | string;
    vAlign?: string;
  }

  interface OyTBodyElements extends React.HTMLAttributes<HTMLTableSectionElement>, OyElement {}
  interface OyTableElements extends React.TableHTMLAttributes<HTMLTableElement>, OyElement {}
  interface OyTRElements extends React.HTMLAttributes<HTMLTableRowElement>, OyElement {}
  interface OyTDElements extends React.TdHTMLAttributes<HTMLTableDataCellElement>, OyElement {}
  interface OyImgElements extends React.ImgHTMLAttributes<HTMLImageElement>, OyElement {}
  interface OyAElements extends React.AnchorHTMLAttributes<HTMLAnchorElement>, OyElement {}

  export type RenderOptions = {
    title: string;
    previewText: string;
    headCSS?: string;
    bgColor?: string;
    lang?: string;
    dir?: string;
  };
}
