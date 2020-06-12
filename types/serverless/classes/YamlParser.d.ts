import Serverless = require('../index');

declare class YamlParser {
    constructor(serverless: Serverless);
    parse(yamlFilePath: string): Promise<any>;
}

export = YamlParser;
