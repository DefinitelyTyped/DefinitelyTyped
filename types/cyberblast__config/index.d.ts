export class Config {
    constructor(filePath: string);
    load(): Promise<{ [key: string]: any }>;
    settings: { [key: string]: any };
}
