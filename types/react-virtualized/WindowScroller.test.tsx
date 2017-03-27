import * as React from 'react'
import { PropTypes, PureComponent } from 'react'
import { WindowScroller, List, AutoSizer } from 'react-virtualized'

export default class WindowScrollerExample extends PureComponent<any, any> {
    state;
    context;
    _windowScroller: WindowScroller;

    constructor(props) {
        super(props)

        this.state = {
            showHeaderText: true
        }

        this._hideHeader = this._hideHeader.bind(this)
        this._rowRenderer = this._rowRenderer.bind(this)
        this._onCheckboxChange = this._onCheckboxChange.bind(this)
        this._setRef = this._setRef.bind(this)
    }

    render() {
        const { list, isScrollingCustomElement, customElement } = this.context
        const { showHeaderText } = this.state

        return (

            <div className={'styles.WindowScrollerWrapper'}>
                <WindowScroller
                    ref={this._setRef}
                    scrollElement={isScrollingCustomElement ? customElement : null}
                >
                    {({ height, isScrolling, scrollTop }) => (
                        <AutoSizer disableHeight>
                            {({ width }) => (
                                <List
                                    autoHeight
                                    className={'styles.List'}
                                    height={height}
                                    overscanRowCount={2}
                                    rowCount={list.size}
                                    rowHeight={30}
                                    rowRenderer={({ index, isVisible, key, style }) => this._rowRenderer({ index, isScrolling, isVisible, key, style })}
                                    scrollTop={scrollTop}
                                    width={width}
                                />
                            )}
                        </AutoSizer>
                    )}
                </WindowScroller>
            </div>
        )
    }

    _hideHeader() {
        const { showHeaderText } = this.state

        this.setState({
            showHeaderText: !showHeaderText
        }, () => {
            this._windowScroller.updatePosition()
        })
    }

    _rowRenderer({ index, isScrolling, isVisible, key, style }) {
        const { list } = this.context
        const row = list.get(index)

        return (
            <div
                key={key}
                className={'className'}
                style={style}
            >
                {row.name}
            </div>
        )
    }

    _setRef(windowScroller) {
        this._windowScroller = windowScroller
    }

    _onCheckboxChange(event) {
        this.context.setScrollingCustomElement(event.target.checked)
    }
}
