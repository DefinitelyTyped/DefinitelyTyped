/** @flow */
import * as React from 'react'
import { PropTypes, PureComponent } from 'react'
import { AutoSizer, MultiGrid } from 'react-virtualized'

const STYLE: React.CSSProperties = {
    border: '1px solid #ddd',
    overflow: 'hidden'
}
const STYLE_BOTTOM_LEFT_GRID: React.CSSProperties = {
    borderRight: '2px solid #aaa',
    backgroundColor: '#f7f7f7'
}
const STYLE_TOP_LEFT_GRID: React.CSSProperties = {
    borderBottom: '2px solid #aaa',
    borderRight: '2px solid #aaa',
    fontWeight: 'bold'
}
const STYLE_TOP_RIGHT_GRID: React.CSSProperties = {
    borderBottom: '2px solid #aaa',
    fontWeight: 'bold'
}

export default class MultiGridExample extends PureComponent<any, any> {
    state
    _onFixedColumnCountChange
    _onFixedRowCountChange
    _onScrollToColumnChange
    _onScrollToRowChange

    constructor(props, context) {
        super(props, context)

        this.state = {
            fixedColumnCount: 2,
            fixedRowCount: 1,
            scrollToColumn: 0,
            scrollToRow: 0
        }

        this._cellRenderer = this._cellRenderer.bind(this)
        this._onFixedColumnCountChange = this._createEventHandler('fixedColumnCount')
        this._onFixedRowCountChange = this._createEventHandler('fixedRowCount')
        this._onScrollToColumnChange = this._createEventHandler('scrollToColumn')
        this._onScrollToRowChange = this._createEventHandler('scrollToRow')
    }

    render() {
        return (
            <AutoSizer disableHeight>
                {({ width }) => (
                    <MultiGrid
                        {...this.state}
                        cellRenderer={this._cellRenderer}
                        columnWidth={75}
                        columnCount={50}
                        height={300}
                        rowHeight={40}
                        rowCount={100}
                        style={STYLE}
                        styleBottomLeftGrid={STYLE_BOTTOM_LEFT_GRID}
                        styleTopLeftGrid={STYLE_TOP_LEFT_GRID}
                        styleTopRightGrid={STYLE_TOP_RIGHT_GRID}
                        width={width}
                    />
                )}
            </AutoSizer>
        )
    }

    _cellRenderer({ columnIndex, key, rowIndex, style }) {
        return (
            <div
                className={'styles.Cell'}
                key={key}
                style={style}
            >
                {columnIndex}, {rowIndex}
            </div>
        )
    }

    _createEventHandler(property) {
        return (event) => {
            const value = parseInt(event.target.value, 10) || 0

            this.setState({
                [property]: value
            })
        }
    }

    _createLabeledInput(property, eventHandler) {
        const value = this.state[property]

        return (
            `<LabeledInput
                label={property}
                name={property}
                onChange={eventHandler}
                value={value}
            />`
        )
    }
}
