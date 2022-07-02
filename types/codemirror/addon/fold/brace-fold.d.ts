import './foldcode';

declare module './foldcode' {
    interface FoldHelpers {
        brace: FoldRangeFinder;
        import: FoldRangeFinder;
        include: FoldRangeFinder;
    }
}
