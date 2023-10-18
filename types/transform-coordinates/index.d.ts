import { Converter } from "proj4";

declare function transformation(from: string, to: string): Converter;

export = transformation;
