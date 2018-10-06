import { DecoratorPattern, HOCPattern, Readme, RenderFunction } from "./common";

type WithReadmeAsDecorator = (readme: Readme) => DecoratorPattern;
type WithReadmeAsHOC = (readme: Readme, story: RenderFunction) => HOCPattern;

export type WithReadme = WithReadmeAsDecorator & WithReadmeAsHOC;
