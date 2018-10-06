import * as React from "react";
import { Readme, HOCPattern, DecoratorPattern, RenderFunction } from "./common";

export interface CustomComponents {
    PreviewComponent: (props: { children: JSX.Element }) => JSX.Element;
    FooterComponent: (props: { children: JSX.Element }) => JSX.Element;
}

export interface AddFooterDocs {
    addFooterDocs: (footerDoc: string) => void;
}

export interface WithDocsAsHOC {
    (custom: CustomComponents): (readme: Readme) => HOCPattern;
    (readme: Readme, story: RenderFunction): HOCPattern;
}

export type WithDocsAsDecorator = (readme: Readme) => DecoratorPattern;

export type WithDocs = AddFooterDocs & WithDocsAsHOC & WithDocsAsDecorator;
