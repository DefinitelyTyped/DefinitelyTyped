import * as React from 'react'
import { PureComponent } from 'react'
import { AutoSizer, ColumnSizer, Grid } from 'react-virtualized'

export default class ColumnSizerExample extends PureComponent<any, any> {
    constructor(props) {
        super(props)

        this._noColumnMaxWidthChange = this._noColumnMaxWidthChange.bind(this)
        this._noColumnMinWidthChange = this._noColumnMinWidthChange.bind(this)
        this._onColumnCountChange = this._onColumnCountChange.bind(this)
        this._noContentRenderer = this._noContentRenderer.bind(this)
        this._cellRenderer = this._cellRenderer.bind(this)
    }

    render() {
        const {
      columnMaxWidth,
            columnMinWidth,
            columnCount
    } = this.state

        return (
            <div>
                <AutoSizer disableHeight>
                    {({ width }) => (
                        <ColumnSizer
                            columnMaxWidth={columnMaxWidth}
                            columnMinWidth={columnMinWidth}
                            columnCount={columnCount}
                            key='GridColumnSizer'
                            width={width}
                        >
                            {({ adjustedWidth, getColumnWidth, registerChild }) => (
                                <div
                                    className={'styles.GridContainer'}
                                    style={{
                                        height: 50,
                                        width: adjustedWidth
                                    }}
                                >
                                    <Grid
                                        ref={registerChild}
                                        columnWidth={getColumnWidth}
                                        columnCount={columnCount}
                                        height={50}
                                        noContentRenderer={this._noContentRenderer}
                                        cellRenderer={this._cellRenderer}
                                        rowHeight={50}
                                        rowCount={1}
                                        width={adjustedWidth}
                                    />
                                </div>
                            )}
                        </ColumnSizer>
                    )}
                </AutoSizer>
            </div>
        )
    }

    _noColumnMaxWidthChange(event) {
        let columnMaxWidth = parseInt(event.target.value, 10)

        if (isNaN(columnMaxWidth)) {
            columnMaxWidth = undefined
        } else {
            columnMaxWidth = Math.min(1000, columnMaxWidth)
        }

        this.setState({ columnMaxWidth })
    }

    _noColumnMinWidthChange(event) {
        let columnMinWidth = parseInt(event.target.value, 10)

        if (isNaN(columnMinWidth)) {
            columnMinWidth = undefined
        } else {
            columnMinWidth = Math.max(1, columnMinWidth)
        }

        this.setState({ columnMinWidth })
    }

    _onColumnCountChange(event) {
        this.setState({ columnCount: parseInt(event.target.value, 10) || 0 })
    }

    _noContentRenderer() {
        return (
            <div className={'styles.noCells'}>
                No cells
      </div>
        )
    }

    _cellRenderer({ columnIndex, key, rowIndex, style }) {
        const className = columnIndex === 0
            ? 'styles.firstCell'
            : 'styles.cell'

        return (
            <div
                className={className}
                key={key}
                style={style}
            >
                {`R:${rowIndex}, C:${columnIndex}`}
            </div>
        )
    }
}
