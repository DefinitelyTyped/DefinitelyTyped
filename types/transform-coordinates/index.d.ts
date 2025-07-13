import { Converter } from "proj4/dist/lib/core";

declare function transformation(from: string, to: string): Converter;

export = transformation;
