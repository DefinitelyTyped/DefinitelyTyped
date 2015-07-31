// Type definitions for 1.0.1
// Project: https://github.com/zeusdeux/subsequence-search

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

