import { DecoratorPattern, HOCPattern, Readme, RenderFunction } from "./common";

export type WithReadmeAsDecorator = (readme: Readme) => DecoratorPattern;
export type WithReadmeAsHOC = (
    readme: Readme,
    story: RenderFunction
) => HOCPattern;

export type WithReadme = WithReadmeAsDecorator & WithReadmeAsHOC;
