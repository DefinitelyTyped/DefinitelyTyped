/** @flow */
import * as React from 'react'
import { PropTypes, PureComponent } from 'react'
import { AutoSizer, Grid } from 'react-virtualized'

export default class GridExample extends PureComponent<any, any> {


    constructor(props, context) {
        super(props, context)

        this.state = {
            columnCount: 1000,
            height: 300,
            overscanColumnCount: 0,
            overscanRowCount: 10,
            rowHeight: 40,
            rowCount: 1000,
            scrollToColumn: undefined,
            scrollToRow: undefined,
            useDynamicRowHeight: false
        }

        this._cellRenderer = this._cellRenderer.bind(this)
        this._getColumnWidth = this._getColumnWidth.bind(this)
        this._getRowClassName = this._getRowClassName.bind(this)
        this._getRowHeight = this._getRowHeight.bind(this)
        this._noContentRenderer = this._noContentRenderer.bind(this)
        this._onColumnCountChange = this._onColumnCountChange.bind(this)
        this._onRowCountChange = this._onRowCountChange.bind(this)
        this._onScrollToColumnChange = this._onScrollToColumnChange.bind(this)
        this._onScrollToRowChange = this._onScrollToRowChange.bind(this)
        this._renderBodyCell = this._renderBodyCell.bind(this)
        this._renderLeftSideCell = this._renderLeftSideCell.bind(this)
    }

    render() {
        const {
      columnCount,
            height,
            overscanColumnCount,
            overscanRowCount,
            rowHeight,
            rowCount,
            scrollToColumn,
            scrollToRow,
            useDynamicRowHeight
    } = this.state

        return (

            <AutoSizer disableHeight>
                {({ width }) => (
                    <Grid
                        cellRenderer={this._cellRenderer}
                        className={'styles.BodyGrid'}
                        columnWidth={this._getColumnWidth}
                        columnCount={columnCount}
                        height={height}
                        noContentRenderer={this._noContentRenderer}
                        overscanColumnCount={overscanColumnCount}
                        overscanRowCount={overscanRowCount}
                        rowHeight={useDynamicRowHeight ? this._getRowHeight : rowHeight}
                        rowCount={rowCount}
                        scrollToColumn={scrollToColumn}
                        scrollToRow={scrollToRow}
                        width={width}
                    />
                )}
            </AutoSizer>
        )
    }

    _cellRenderer({ columnIndex, key, rowIndex, style }) {
        if (columnIndex === 0) {
            return this._renderLeftSideCell({ key, rowIndex, style })
        } else {
            return this._renderBodyCell({ columnIndex, key, rowIndex, style })
        }
    }

    _getColumnWidth({ index }) {
        switch (index) {
            case 0:
                return 50
            case 1:
                return 100
            case 2:
                return 300
            default:
                return 80
        }
    }

    _getDatum(index) {
        const { list } = this.context

        return list.get(index % list.size)
    }

    _getRowClassName(row) {
        return row % 2 === 0 ? 'styles.evenRow' : 'styles.oddRow'
    }

    _getRowHeight({ index }) {
        return this._getDatum(index).size
    }

    _noContentRenderer() {
        return (
            <div className={'styles.noCells'}>
                No cells
      </div>
        )
    }

    _renderBodyCell({ columnIndex, key, rowIndex, style }) {
        const rowClass = this._getRowClassName(rowIndex)
        const datum = this._getDatum(rowIndex)

        let content

        switch (columnIndex) {
            case 1:
                content = datum.name
                break
            case 2:
                content = datum.random
                break
            default:
                content = `r:${rowIndex}, c:${columnIndex}`
                break
        }

        return (
            <div
                className={'classNames'}
                key={key}
                style={style}
            >
                {content}
            </div>
        )
    }

    _renderLeftSideCell({ key, rowIndex, style }) {
        const datum = this._getDatum(rowIndex)

        // Don't modify styles.
        // These are frozen by React now (as of 16.0.0).
        // Since Grid caches and re-uses them, they aren't safe to modify.
        style = {
            ...style,
            backgroundColor: datum.color
        }

        return (
            <div
                className={'classNames'}
                key={key}
                style={style}
            >
                {datum.name.charAt(0)}
            </div>
        )
    }

    _updateUseDynamicRowHeights(value) {
        this.setState({
            useDynamicRowHeight: value
        })
    }

    _onColumnCountChange(event) {
        const columnCount = parseInt(event.target.value, 10) || 0

        this.setState({ columnCount })
    }

    _onRowCountChange(event) {
        const rowCount = parseInt(event.target.value, 10) || 0

        this.setState({ rowCount })
    }

    _onScrollToColumnChange(event) {
        const { columnCount } = this.state
        let scrollToColumn = Math.min(columnCount - 1, parseInt(event.target.value, 10))

        if (isNaN(scrollToColumn)) {
            scrollToColumn = undefined
        }

        this.setState({ scrollToColumn })
    }

    _onScrollToRowChange(event) {
        const { rowCount } = this.state
        let scrollToRow = Math.min(rowCount - 1, parseInt(event.target.value, 10))

        if (isNaN(scrollToRow)) {
            scrollToRow = undefined
        }

        this.setState({ scrollToRow })
    }
}
