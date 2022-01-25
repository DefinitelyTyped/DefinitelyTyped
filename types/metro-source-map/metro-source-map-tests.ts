import {
    BasicSourceMap,
    IndexMap,
    IndexMapSection,
    GeneratedCodeMapping,
    SourceMapping,
    SourceMappingWithName,
    FBSourceFunctionMap
} from 'metro-source-map';

export const basicSourceMap: BasicSourceMap = {
    file: "file",
    mappings: "message",
    names: ["name"],
    sourceRoot: "root",
    sources: ["src"],
    sourcesContent: ["test", undefined],
    version: 2
};

export const indexMap: IndexMap = {
    file: "file",
    sections: [],
    version: 3
};

export const indexMapSection: IndexMapSection = {
    map: indexMap,
    offset: {
        line: 55,
        column: 2
    }
};

export const generatedCodeMapping: GeneratedCodeMapping = [1, 2];

export const sourceMapping: SourceMapping = [5, 6, 7, 8];

export const sourceMappingWithName: SourceMappingWithName = [15, 16, 17, 18, "name"];

export const fbSourceFunctionMap: FBSourceFunctionMap = {
    names: ["name"],
    mappings: "mappings"
};
