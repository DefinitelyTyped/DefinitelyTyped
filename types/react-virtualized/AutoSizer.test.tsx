/** @flow */
import * as React from 'react';
import { PureComponent } from 'react'
import { AutoSizer, List } from 'react-virtualized'

export default class AutoSizerExample extends PureComponent<any, any> {
    constructor(props) {
        super(props)

        this._rowRenderer = this._rowRenderer.bind(this)
    }

    render() {
        const { list } = this.context
        const { hideDescription } = this.state

        return (
            <AutoSizer>
                {({ width, height }) => (
                    <List
                        className={'styles.List'}
                        height={height}
                        rowCount={list.size}
                        rowHeight={30}
                        rowRenderer={this._rowRenderer}
                        width={width}
                    />
                )}
            </AutoSizer>
        )
    }

    _rowRenderer({ index, key, style }) {
        const { list } = this.context
        const row = list.get(index)

        return (
            <div
                key={key}
                className={'styles.row'}
                style={style}
            >
                {row.name}
            </div>
        )
    }
}
