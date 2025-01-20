type Path = string | Path[];

declare function toPath(...paths: Path[]): string;

export = toPath;
