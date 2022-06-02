declare namespace TableStore {
    enum QueryType {
        MATCH_QUERY,
        MATCH_PHRASE_QUERY,
        TERM_QUERY,
        RANGE_QUERY,
        PREFIX_QUERY,
        BOOL_QUERY,
        CONST_SCORE_QUERY,
        FUNCTION_SCORE_QUERY,
        NESTED_QUERY,
        WILDCARD_QUERY,
        MATCH_ALL_QUERY,
        GEO_BOUNDING_BOX_QUERY,
        GEO_DISTANCE_QUERY,
        GEO_POLYGON_QUERY,
        TERMS_QUERY,
        EXISTS_QUERY,
    }

    enum ScoreMode {
        SCORE_MODE_NONE,
        SCORE_MODE_AVG,
        SCORE_MODE_MAX,
        SCORE_MODE_TOTAL,
        SCORE_MODE_MIN,
    }

    enum SortOrder {
        SORT_ORDER_ASC,
        SORT_ORDER_DESC,
    }

    enum SortMode {
        SORT_MODE_MIN,
        SORT_MODE_MAX,
        SORT_MODE_AVG,
    }

    enum FieldType {
        LONG,
        DOUBLE,
        BOOLEAN,
        KEYWORD,
        TEXT,
        NESTED,
        GEO_POINT,
        DATE,
    }

    enum ColumnReturnType {
        RETURN_ALL,
        RETURN_SPECIFIED,
        RETURN_NONE,
    }

    enum GeoDistanceType {
        GEO_DISTANCE_ARC,
        GEO_DISTANCE_PLANE,
    }

    enum IndexOptions {
        DOCS,
        FREQS,
        POSITIONS,
        OFFSETS,
    }

    enum QueryOperator {
        OR,
        AND,
    }
}
