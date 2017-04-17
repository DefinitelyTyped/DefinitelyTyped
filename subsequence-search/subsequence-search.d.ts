// Type definitions for subsequence-search
// Project: https://github.com/zeusdeux/subsequence-search
// Definitions by: jtamayo <https://github.com/jtamayo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module subsequenceSearch {
    type DataList = string[] | {data: any[], searchInProps: string[]};

    interface Transform {
        <P extends DataList>(dataList: P): P;
    }

    interface Wrapper {
        (): string;
    }

    var transforms: {
        rank: (rankByKey: number | string) => Transform;
        highlight: (className: string) => Transform;
        noHighlight: () => Transform;
        noResults: () => Transform;
    }

    function search<P extends DataList>(transforms: { [name: string]: Transform },
        dataList: P, searchString: string): P;
}

