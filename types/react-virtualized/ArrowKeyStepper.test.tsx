/** @flow */
import * as React from 'react';
import { PureComponent } from 'react'
import { ArrowKeyStepper, AutoSizer, Grid } from 'react-virtualized'

export default class ArrowKeyStepperExample extends PureComponent<any, any> {
    constructor(props) {
        super(props)

        this._getColumnWidth = this._getColumnWidth.bind(this)
        this._getRowHeight = this._getRowHeight.bind(this)
        this._cellRenderer = this._cellRenderer.bind(this)
    }

    render() {
        const { mode } = this.state

        return (

            <ArrowKeyStepper
                columnCount={100}
                mode={mode as 'edges'}
                rowCount={100}
            >
                {({ onSectionRendered, scrollToColumn, scrollToRow }) => (
                    <div>

                        <AutoSizer disableHeight>
                            {({ width }) => (
                                <Grid
                                    className={'styles.Grid'}
                                    columnWidth={this._getColumnWidth}
                                    columnCount={100}
                                    height={200}
                                    onSectionRendered={onSectionRendered}
                                    cellRenderer={({ columnIndex, key, rowIndex, style }) => this._cellRenderer({ columnIndex, key, rowIndex, scrollToColumn, scrollToRow, style })}
                                    rowHeight={this._getRowHeight}
                                    rowCount={100}
                                    scrollToColumn={scrollToColumn}
                                    scrollToRow={scrollToRow}
                                    width={width}
                                />
                            )}
                        </AutoSizer>
                    </div>
                )}
            </ArrowKeyStepper>
        )
    }

    _getColumnWidth({ index }) {
        return (1 + (index % 3)) * 60
    }

    _getRowHeight({ index }) {
        return (1 + (index % 3)) * 30
    }

    _cellRenderer({ columnIndex, key, rowIndex, scrollToColumn, scrollToRow, style }) {

        return (
            <div
                className={'className'}
                key={key}
                style={style}
            >
                {`r:${rowIndex}, c:${columnIndex}`}
            </div>
        )
    }
}
