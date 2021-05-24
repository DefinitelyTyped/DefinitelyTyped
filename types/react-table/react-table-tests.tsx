import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    Cell,
    CellProps,
    Column,
    DefaultSortTypes,
    FilterProps,
    FilterValue,
    HeaderGroup,
    HeaderProps,
    Hooks,
    IdType,
    Row,
    UseColumnOrderInstanceProps,
    UseColumnOrderState,
    useExpanded,
    UseExpandedInstanceProps,
    UseExpandedOptions,
    UseExpandedRowProps,
    UseExpandedState,
    useFilters,
    UseFiltersColumnOptions,
    UseFiltersColumnProps,
    UseFiltersInstanceProps,
    UseFiltersOptions,
    UseFiltersState,
    useGlobalFilter,
    UseGlobalFiltersColumnOptions,
    UseGlobalFiltersInstanceProps,
    UseGlobalFiltersOptions,
    UseGlobalFiltersState,
    useGroupBy,
    UseGroupByCellProps,
    UseGroupByColumnOptions,
    UseGroupByColumnProps,
    UseGroupByInstanceProps,
    UseGroupByOptions,
    UseGroupByRowProps,
    UseGroupByState,
    usePagination,
    UsePaginationInstanceProps,
    UsePaginationOptions,
    UsePaginationState,
    UseResizeColumnsColumnOptions,
    UseResizeColumnsColumnProps,
    UseResizeColumnsOptions,
    UseResizeColumnsState,
    useRowSelect,
    UseRowSelectInstanceProps,
    UseRowSelectOptions,
    UseRowSelectRowProps,
    UseRowSelectState,
    UseRowStateCellProps,
    UseRowStateInstanceProps,
    UseRowStateOptions,
    UseRowStateRowProps,
    UseRowStateState,
    useSortBy,
    UseSortByColumnOptions,
    UseSortByColumnProps,
    UseSortByInstanceProps,
    UseSortByOptions,
    UseSortByState,
    useTable,
} from 'react-table';

// test heavily based up https://github.com/tannerlinsley/react-table/blob/master/examples/kitchen-sink-controlled/src/App.js

declare module 'react-table' {
    // take this file as-is, or comment out the sections that don't apply to your plugin configuration

    interface TableOptions<D extends object>
        extends UseExpandedOptions<D>,
            UseFiltersOptions<D>,
            UseGlobalFiltersOptions<D>,
            UseGroupByOptions<D>,
            UsePaginationOptions<D>,
            UseResizeColumnsOptions<D>,
            UseRowSelectOptions<D>,
            UseRowStateOptions<D>,
            UseSortByOptions<D> {
        updateMyData: (rowIndex: number, columnId: string, value: any) => void;
    }

    interface TableInstance<D extends object = {}>
        extends UseColumnOrderInstanceProps<D>,
            UseExpandedInstanceProps<D>,
            UseFiltersInstanceProps<D>,
            UseGlobalFiltersInstanceProps<D>,
            UseGroupByInstanceProps<D>,
            UsePaginationInstanceProps<D>,
            UseRowSelectInstanceProps<D>,
            UseRowStateInstanceProps<D>,
            UseSortByInstanceProps<D> {
        editable: boolean;
    }

    interface TableState<D extends object = {}>
        extends UseColumnOrderState<D>,
            UseExpandedState<D>,
            UseFiltersState<D>,
            UseGlobalFiltersState<D>,
            UseGroupByState<D>,
            UsePaginationState<D>,
            UseResizeColumnsState<D>,
            UseRowSelectState<D>,
            UseRowStateState<D>,
            UseSortByState<D> {}

    interface ColumnInterface<D extends object = {}>
        extends UseFiltersColumnOptions<D>,
            UseGlobalFiltersColumnOptions<D>,
            UseGroupByColumnOptions<D>,
            UseResizeColumnsColumnOptions<D>,
            UseSortByColumnOptions<D> {}

    interface ColumnInstance<D extends object = {}>
        extends UseFiltersColumnProps<D>,
            UseGroupByColumnProps<D>,
            UseResizeColumnsColumnProps<D>,
            UseSortByColumnProps<D> {}

    interface Cell<D extends object = {}> extends UseGroupByCellProps<D>, UseRowStateCellProps<D> {}

    interface Row<D extends object = {}>
        extends UseExpandedRowProps<D>,
            UseGroupByRowProps<D>,
            UseRowSelectRowProps<D>,
            UseRowStateRowProps<D> {}
}

interface Data {
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    progress: number;
    status: string;
    subRows?: Data[];
}

// Create an editable cell renderer
const EditableCell = ({
    cell: { value: initialValue },
    row: { index },
    column: { id },
    updateMyData, // This is a custom function that we supplied to our table instance
    editable,
}: CellProps<Data>) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = React.useState(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    // We'll only update the external data when the input is blurred
    const onBlur = () => {
        updateMyData(index, id, value);
    };

    // If the initialValue is changed externall, sync it up with our state
    React.useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    if (!editable) {
        return `${initialValue}`;
    }

    return <input value={value} onChange={onChange} onBlur={onBlur} />;
};

// Define a default UI for filtering
function DefaultColumnFilter({ column: { filterValue, preFilteredRows, setFilter, parent } }: FilterProps<Data>) {
    const count = preFilteredRows.length;

    const foo = parent;  // $ExpectType ColumnInstance<Data> | undefined

    return (
        <input
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
            }}
            placeholder={`Search ${count} records...`}
        />
    );
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({ column: { filterValue, setFilter, preFilteredRows, id } }: FilterProps<Data>) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
        const options = new Set<any>();
        preFilteredRows.forEach(row => {
            options.add(row.values[id]);
        });
        return [...Array.from(options.values())];
    }, [id, preFilteredRows]);

    // Render a multi-select box
    return (
        <select
            value={filterValue}
            onChange={e => {
                setFilter(e.target.value || undefined);
            }}
        >
            <option value="">All</option>
            {options.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
function SliderColumnFilter({ column: { filterValue, setFilter, preFilteredRows, id } }: FilterProps<Data>) {
    // Calculate the min and max
    // using the preFilteredRows

    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        preFilteredRows.forEach(row => {
            min = Math.min(row.values[id], min);
            max = Math.max(row.values[id], max);
        });
        return [min, max];
    }, [id, preFilteredRows]);

    return (
        <>
            <input
                type="range"
                min={min}
                max={max}
                value={filterValue || min}
                onChange={e => {
                    setFilter(parseInt(e.target.value, 10));
                }}
            />
            <button onClick={() => setFilter(undefined)}>Off</button>
        </>
    );
}

// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
function NumberRangeColumnFilter({ column: { filterValue = [], preFilteredRows, setFilter, id } }: FilterProps<Data>) {
    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        preFilteredRows.forEach(row => {
            min = Math.min(row.values[id], min);
            max = Math.max(row.values[id], max);
        });
        return [min, max];
    }, [id, preFilteredRows]);

    return (
        <div
            style={{
                display: 'flex',
            }}
        >
            <input
                value={filterValue[0] || ''}
                type="number"
                onChange={e => {
                    const val = e.target.value;
                    setFilter((old: any[] = []) => [val ? parseInt(val, 10) : undefined, old[1]]);
                }}
                placeholder={`Min (${min})`}
                style={{
                    width: '70px',
                    marginRight: '0.5rem',
                }}
            />
            to
            <input
                value={filterValue[1] || ''}
                type="number"
                onChange={e => {
                    const val = e.target.value;
                    setFilter((old: any[] = []) => [old[0], val ? parseInt(val, 10) : undefined]);
                }}
                placeholder={`Max (${max})`}
                style={{
                    width: '70px',
                    marginLeft: '0.5rem',
                }}
            />
        </div>
    );
}

function fuzzyTextFilterFn<T extends object>(rows: Array<Row<T>>, id: IdType<T>, filterValue: FilterValue) {
    // return matchSorter(rows, filterValue, {
    //     keys: [(row: Row<any>) => row.values[id]],
    // });
    return rows;
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val: any) => !val;

interface Table<T extends object> {
    columns: Array<Column<T>>;
    data: T[];
    updateMyData?: any;
    skipPageReset?: boolean;
}

// Be sure to pass our updateMyData and the skipPageReset option
function Table({ columns, data, updateMyData, skipPageReset = false }: Table<Data>) {
    const filterTypes = React.useMemo(
        () => ({
            // Add a new fuzzyTextFilterFn filter type.
            fuzzyText: fuzzyTextFilterFn,
            // Or, override the default text filter to use
            // "startWith"
            text: (rows: Array<Row<Data>>, id: IdType<Data>, filterValue: FilterValue) => {
                return rows.filter(row => {
                    const rowValue = row.values[id];
                    return rowValue !== undefined
                        ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase())
                        : true;
                });
            },
        }),
        [],
    );

    const defaultColumn = React.useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: DefaultColumnFilter,
            // And also our default editable cell
            Cell: EditableCell,
        }),
        [],
    );

    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize, groupBy, expanded, filters, selectedRowIds },
    } = useTable<Data>(
        {
            columns,
            data,
            defaultColumn,
            filterTypes,
            // nestExpandedRows: true,
            initialState: { pageIndex: 2 },
            // updateMyData isn't part of the API, but
            // anything we put into these options will
            // automatically be available on the instance.
            // That way we can call this function from our
            // cell renderer!
            updateMyData,
            // We also need to pass this so the page doesn't change
            // when we edit the data, undefined means using the default
            autoResetPage: !skipPageReset,
            // Do not reset hidden columns when columns change. Allows
            // for creating columns during render.
            autoResetHiddenColumns: false,
        },
        useGroupBy,
        useFilters,
        useGlobalFilter,
        useSortBy,
        useExpanded,
        usePagination,
        useRowSelect,
        (hooks: Hooks<Data>) => {
            hooks.allColumns.push(columns => [
                {
                    id: 'selection',
                    // The header can use the table's getToggleAllRowsSelectedProps method
                    // to render a checkbox
                    Header: ({ getToggleAllRowsSelectedProps }: HeaderProps<Data>) => (
                        <div>
                            <input type="checkbox" {...getToggleAllRowsSelectedProps()} />
                        </div>
                    ),
                    // The cell can use the individual row's getToggleRowSelectedProps method
                    // to the render a checkbox
                    Cell: ({ row }: CellProps<Data>) => (
                        <div>
                            <input type="checkbox" {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
                ...columns,
            ]);
        },
    );

    // Render the UI for your table
    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup: HeaderGroup<Data>) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    <div>
                                        {column.canGroupBy ? (
                                            // If the column can be grouped, let's add a toggle
                                            <span {...column.getGroupByToggleProps()}>
                                                {column.isGrouped ? '🛑 ' : '👊 '}
                                            </span>
                                        ) : null}
                                        <span {...column.getSortByToggleProps()}>
                                            {column.render('Header')}
                                            {/* Add a sort direction indicator */}
                                            {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                        </span>
                                    </div>
                                    {/* Render the columns filter UI */}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row: Row<Data>) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell: Cell<Data>) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.isGrouped ? (
                                                <>
                                                    <span {...row.getToggleRowExpandedProps()}>
                                                        {row.isExpanded ? '👇' : '👉'}
                                                    </span>{' '}
                                                    {cell.render('Cell', { editable: false })} ({row.subRows.length})
                                                </>
                                            ) : cell.isAggregated ? (
                                                // If the cell is aggregated, use the Aggregated
                                                // renderer for cell
                                                cell.render('Aggregated')
                                            ) : cell.isPlaceholder ? null : (
                                                // For cells with repeated values, render null
                                                // Otherwise, just render the regular cell
                                                cell.render('Cell', { editable: true })
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/*
        Pagination can be built however you'd like.
        This is just a very basic UI implementation:
      */}
            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button onClick={previousPage} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <button onClick={nextPage} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Go to page:{' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
                            gotoPage(page);
                        }}
                        style={{ width: '100px' }}
                    />
                </span>{' '}
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
            <pre>
                <code>
                    {JSON.stringify(
                        {
                            pageIndex,
                            pageSize,
                            pageCount,
                            canNextPage,
                            canPreviousPage,
                            groupBy,
                            expanded,
                            filters,
                            selectedRowIds,
                        },
                        null,
                        2,
                    )}
                </code>
            </pre>
        </>
    );
}

// Define a custom filter filter function!
function filterGreaterThan(rows: Array<Row<any>>, id: Array<IdType<any>>, filterValue: FilterValue) {
    return rows.filter(row => {
        const rowValue = row.values[id[0]];
        return rowValue >= filterValue;
    });
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = (val: any) => typeof val !== 'number';

// This is a custom aggregator that
// takes in an array of values and
// returns the rounded median
function roundedMedian(values: any[]) {
    let min = values[0] || '';
    let max = values[0] || '';

    values.forEach(value => {
        min = Math.min(min, value);
        max = Math.max(max, value);
    });

    return Math.round((min + max) / 2);
}

const Component = (props: {}) => {
    const startingData: Data[] = [
        { firstName: 'plastic', lastName: 'leather', age: 1, visits: 87, progress: 53, status: 'relationship' },
        { firstName: 'eggs', lastName: 'quartz', age: 13, visits: 78, progress: 82, status: 'complicated' },
        { firstName: 'wash', lastName: 'wrench', age: 29, visits: 75, progress: 49, status: 'single' },
        { firstName: 'introduction', lastName: 'impression', age: 2, visits: 35, progress: 51, status: 'relationship' },
        { firstName: 'steel', lastName: 'difference', age: 9, visits: 64, progress: 94, status: 'complicated' },
        { firstName: 'snakes', lastName: 'corn', age: 17, visits: 55, progress: 47, status: 'relationship' },
        { firstName: 'ocean', lastName: 'definition', age: 26, visits: 17, progress: 22, status: 'single' },
        { firstName: 'drawing', lastName: 'fifth', age: 15, visits: 84, progress: 12, status: 'complicated' },
        { firstName: 'silver', lastName: 'riddle', age: 15, visits: 59, progress: 24, status: 'relationship' },
        { firstName: 'surprise', lastName: 'zinc', age: 23, visits: 7, progress: 48, status: 'single' },
        { firstName: 'riddle', lastName: 'information', age: 2, visits: 63, progress: 3, status: 'complicated' },
    ];
    const columns: Array<Column<Data>> = [
        {
            id: 'selection',
            // The header can use the table's getToggleAllRowsSelectedProps method
            // to render a checkbox
            Header: ({ getToggleAllRowsSelectedProps }: HeaderProps<Data>) => (
                <div>
                    <input type="checkbox" {...getToggleAllRowsSelectedProps()} />
                </div>
            ),
            // The cell can use the individual row's getToggleRowSelectedProps method
            // to the render a checkbox
            Cell: ({ row }: CellProps<Data>) => (
                <div>
                    <input type="checkbox" {...row.getToggleRowSelectedProps()} />
                </div>
            ),
        },
        {
            Header: 'Name',
            columns: [
                {
                    Header: 'First Name',
                    accessor: 'firstName',
                    // Use a two-stage aggregator here to first
                    // count the total rows being aggregated,
                    // then sum any of those counts if they are
                    // aggregated further
                    aggregate: 'count',
                    Aggregated: ({ cell: { value } }: CellProps<Data>) => `${value} Names`,
                    Cell: ({ value }) => {
                        const v = value; // $ExpectType string
                        return value;
                    },
                },
                {
                    Header: 'Last Name',
                    accessor: 'lastName',
                    // Use our custom `fuzzyText` filter on this column
                    filter: 'fuzzyText',
                    // Use another two-stage aggregator here to
                    // first count the UNIQUE values from the rows
                    // being aggregated, then sum those counts if
                    // they are aggregated further
                    aggregate: 'uniqueCount',
                    Aggregated: ({ cell: { value } }: CellProps<Data>) => `${value} Unique Names`,
                },
            ],
        },
        {
            Header: 'Info',
            columns: [
                {
                    Header: 'Age',
                    accessor: 'age',
                    Filter: SliderColumnFilter,
                    filter: 'equals',
                    // Aggregate the average age of visitors
                    aggregate: 'average',
                    Aggregated: ({ cell: { value } }: CellProps<Data>) => `${value} (avg)`,
                    disableGlobalFilter: true,
                    Cell: ({ value }) => {
                        const v = value; // $ExpectType number
                        return value;
                    },
                },
                {
                    Header: 'Visits',
                    accessor: 'visits',
                    Filter: NumberRangeColumnFilter,
                    filter: 'between',
                    // Aggregate the sum of all visits
                    aggregate: 'sum',
                    Aggregated: ({ cell: { value } }: CellProps<Data>) => `${value} (total)`,
                },
                {
                    Header: 'Status',
                    accessor: 'status',
                    Filter: SelectColumnFilter,
                    filter: 'includes',
                },
                {
                    Header: 'Profile Progress',
                    accessor: 'progress',
                    Filter: SliderColumnFilter,
                    filter: filterGreaterThan,
                    // Use our custom roundedMedian aggregator
                    aggregate: roundedMedian,
                    Aggregated: ({ cell: { value } }: CellProps<Data>) => `${value} (med)`,
                },
            ],
        },
    ];

    // mostly the same as above but minus the grouping
    const columns2: Array<Column<Data>> = [
        {
            Header: 'First Name',
            accessor: 'firstName',
            // Use a two-stage aggregator here to first
            // count the total rows being aggregated,
            // then sum any of those counts if they are
            // aggregated further
            aggregate: 'count',
            Aggregated: ({ cell: { value } }: CellProps<Data>) => `${value} Names`,
            Cell: ({ value }) => {
                const v = value; // $ExpectType string
                return value;
            },
        },
        {
            Header: 'Age',
            accessor: 'age',
            Filter: SliderColumnFilter,
            filter: 'equals',
            // Aggregate the average age of visitors
            aggregate: 'average',
            Aggregated: ({ cell: { value } }: CellProps<Data>) => `${value} (avg)`,
            disableGlobalFilter: true,
            Cell: ({ value }) => {
                const v = value; // $ExpectType number
                return value;
            },
        },
        {
            Header: 'Visits',
            accessor: 'visits',
            Filter: NumberRangeColumnFilter,
            filter: 'between',
            // Aggregate the sum of all visits
            aggregate: 'sum',
            Aggregated: ({ cell: { value } }: CellProps<Data>) => `${value} (total)`,
        },
        {
            Header: 'Sub Rows',
            accessor: 'subRows',
            Cell: ({ value }) => {
                const v = value; // $ExpectType Data[] | undefined
                const l = value!.length; // $ExpectType number
                return l;
            },
        },
    ];

    const [data, setData] = React.useState<Data[]>(() => startingData);
    const [originalData] = React.useState(data);

    // We need to keep the table from resetting the pageIndex when we
    // Update data. So we can keep track of that flag with a ref.
    const skipPageResetRef = React.useRef(false);

    // When our cell renderer calls updateMyData, we'll use
    // the rowIndex, columnId and new value to update the
    // original data
    const updateMyData = (rowIndex: number, columnId: string, value: any) => {
        // We also turn on the flag to not reset the page
        skipPageResetRef.current = true;
        setData(old =>
            old.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...row,
                        [columnId]: value,
                    };
                }
                return row;
            }),
        );
    };

    // After data changes, we turn the flag back off
    // so that if data actually changes when we're not
    // editing it, the page is reset
    React.useEffect(() => {
        skipPageResetRef.current = false;
    }, [data]);

    // Let's add a data resetter/randomizer to help
    // illustrate that flow...
    const resetData = () => {
        // Don't reset the page when we do this
        skipPageResetRef.current = true;
        setData(originalData);
    };

    const tmp = (
        <Table
            data={data}
            columns={[
                {
                    Header: 'First Name',
                    accessor: 'firstName',
                    Cell: ({ value }) => {
                        const v = value; // $ExpectType string
                        return value;
                    },
                },
            ]}
        />
    );

    const tmp2 = (
        <Table
            data={data}
            columns={[
                {
                    Header: 'First Name',
                    accessor: (i: Data) => i.firstName,
                    Cell: ({ value }: CellProps<Data>) => {
                        const v = value; // $ExpectType any
                        return value;
                    },
                },
            ]}
        />
    );

    return (
        <>
            <button onClick={resetData}>Reset Data</button>
            <Table columns={columns} data={data} updateMyData={updateMyData} skipPageReset={skipPageResetRef.current} />
        </>
    );
};

ReactDOM.render(<Component />, document.getElementById('root'));

declare function checkDefaultSortType(sortType: DefaultSortTypes): void;

checkDefaultSortType('alphanumeric');
checkDefaultSortType('datetime');
checkDefaultSortType('basic');
checkDefaultSortType('string');
checkDefaultSortType('number');
