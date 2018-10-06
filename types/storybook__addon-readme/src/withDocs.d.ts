import * as React from "react";
import { Readme, HOCPattern, DecoratorPattern, RenderFunction } from "./common";

interface CustomComponents {
    PreviewComponent: (props: { children: JSX.Element }) => JSX.Element;
    FooterComponent: (props: { children: JSX.Element }) => JSX.Element;
}

interface AddFooterDocs {
    addFooterDocs: (footerDoc: string) => void;
}

interface WithDocsAsHOC {
    (custom: CustomComponents): (readme: Readme) => HOCPattern;
    (readme: Readme, story: RenderFunction): HOCPattern;
}

type WithDocsAsDecorator = (readme: Readme) => DecoratorPattern;

export type WithDocs = AddFooterDocs & WithDocsAsHOC & WithDocsAsDecorator;
