import * as React from 'react'
import { PropTypes, PureComponent } from 'react'
import {
    CellMeasurer,
    CellMeasurerCache,
    AutoSizer,
    WindowScroller,
    createMasonryCellPositioner as createCellPositioner,
    Positioner,
    Masonry,
    MasonryCellProps
} from 'react-virtualized'

export default class GridExample extends PureComponent<any, any> {
    _columnCount: number;
    _cache: CellMeasurerCache;
    _columnHeights: any;
    _width: number;
    _height: number;
    _scrollTop: number;
    _cellPositioner?: Positioner;
    _masonry: Masonry;

    constructor(props, context) {
        super(props, context)

        this._columnCount = 0

        this._cache = new CellMeasurerCache({
            defaultHeight: 250,
            defaultWidth: 200,
            fixedWidth: true
        })

        this._columnHeights = {}

        this.state = {
            columnWidth: 200,
            height: 300,
            gutterSize: 10,
            windowScrollerEnabled: false
        }

        this._cellRenderer = this._cellRenderer.bind(this)
        this._onResize = this._onResize.bind(this)
        this._renderAutoSizer = this._renderAutoSizer.bind(this)
        this._renderMasonry = this._renderMasonry.bind(this)
        this._setMasonryRef = this._setMasonryRef.bind(this)
    }

    render() {
        const {
      columnWidth,
            height,
            gutterSize,
            windowScrollerEnabled
    } = this.state

        let child

        if (windowScrollerEnabled) {
            child = (
                <WindowScroller>
                    {this._renderAutoSizer}
                </WindowScroller>
            )
        } else {
            child = this._renderAutoSizer({ height })
        }

        return (
            <div>
                {child}
            </div>
        )
    }

    _calculateColumnCount() {
        const {
      columnWidth,
            gutterSize
    } = this.state

        this._columnCount = Math.floor(this._width / (columnWidth + gutterSize))
    }

    _cellRenderer({ index, key, parent, style }: MasonryCellProps) {
        const { list } = this.context
        const { columnWidth } = this.state

        const datum = list.get(index % list.size)

        return (
            <CellMeasurer
                cache={this._cache}
                index={index}
                key={key}
                parent={parent}
            >
                <div
                    className={'styles.Cell'}
                    style={{
                        ...style,
                        width: columnWidth
                    }}
                >
                    <div
                        style={{
                            backgroundColor: datum.color,
                            borderRadius: '0.5rem',
                            height: datum.size * 3,
                            marginBottom: '0.5rem',
                            width: '100%'
                        }}
                    />
                    {datum.random}
                </div>
            </CellMeasurer>
        )
    }

    _initCellPositioner() {
        if (typeof this._cellPositioner === 'undefined') {
            const {
        columnWidth,
                gutterSize
      } = this.state

            this._cellPositioner = createCellPositioner({
                cellMeasurerCache: this._cache,
                columnCount: this._columnCount,
                columnWidth,
                spacer: gutterSize
            })
        }
    }

    _onResize({ height, width }) {
        this._width = width

        this._columnHeights = {}
        this._calculateColumnCount()
        this._resetCellPositioner()
        this._masonry.recomputeCellPositions()
    }

    _renderAutoSizer({ height, scrollTop }: { height: number, scrollTop?: number }) {
        this._height = height
        this._scrollTop = scrollTop

        return (
            <AutoSizer
                disableHeight
                onResize={this._onResize}
            >
                {this._renderMasonry}
            </AutoSizer>
        )
    }

    _renderMasonry({ width }) {
        this._width = width

        this._calculateColumnCount()
        this._initCellPositioner()

        const { height, windowScrollerEnabled } = this.state

        return (
            <Masonry
                autoHeight={windowScrollerEnabled}
                cellCount={1000}
                cellMeasurerCache={this._cache}
                cellPositioner={this._cellPositioner}
                cellRenderer={this._cellRenderer}
                height={windowScrollerEnabled ? this._height : height}
                ref={this._setMasonryRef}
                scrollTop={this._scrollTop}
                width={width}
            />
        )
    }

    _resetCellPositioner() {
        const {
      columnWidth,
            gutterSize
    } = this.state

        this._cellPositioner.reset({
            columnCount: this._columnCount,
            columnWidth,
            spacer: gutterSize
        })
    }

    _setMasonryRef(ref) {
        this._masonry = ref
    }
}
