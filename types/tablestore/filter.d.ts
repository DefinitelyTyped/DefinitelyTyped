declare namespace TableStore {
    enum LogicalOperator {
        NOT,
        AND,
        OR,
    }

    enum ColumnConditionType {
        COMPOSITE_COLUMN_CONDITION,
        SINGLE_COLUMN_CONDITION,
    }

    enum ComparatorType {
        EQUAL,
        NOT_EQUAL,
        GREATER_THAN,
        GREATER_EQUAL,
        LESS_THAN,
        LESS_EQUAL,
    }

    enum RowExistenceExpectation {
        IGNORE,
        EXPECT_EXIST,
        EXPECT_NOT_EXIST,
    }

    class ColumnCondition {}
    class CompositeCondition extends ColumnCondition {
        constructor(combinator: LogicalOperator);
        addSubCondition: (condition: ColumnCondition) => void;
        sub_conditions: ColumnCondition[];
    }
    class SingleColumnCondition extends ColumnCondition {
        constructor(
            columnName: string,
            columnValue: CellValue,
            comparator: ComparatorType,
            passIfMissing?: boolean,
            latestVersionOnly?: boolean,
        );
        columnName: string;
        columnValue: CellValue;
        comparator: ComparatorType;
        passIfMissing?: boolean;
        latestVersionOnly?: boolean;
    }
    class Condition {
        constructor(rowExistenceExpectation: RowExistenceExpectation, columnCondition: ColumnCondition | null);
        columnCondition: ColumnCondition;
    }
    class ColumnPaginationFilter {
        constructor(limit: number, offset: number);
    }
}
