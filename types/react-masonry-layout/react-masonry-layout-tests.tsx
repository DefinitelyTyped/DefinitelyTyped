import * as React from 'react';
import MasonryLayout from 'react-masonry-layout';

class Masonry extends React.Component {
    state = {
        perPage: 10,
        items: Array(20).fill(''),
    };

    loadItems = () => {
        this.setState({
            items: this.state.items.concat(Array(this.state.perPage).fill('')),
        });
    }

    render() {
        return (
            <div className="App">
                <MasonryLayout
                    id="masonry-layout"
                    packed="data-packed"
                    sizes={[
                        { columns: 2, gutter: 10 },
                        { mq: '768px', columns: 3, gutter: 25 },
                        { mq: '1024px', columns: 4, gutter: 50 },
                    ]}
                    position={false}
                    className=""
                    style={{}}
                    infiniteScroll={this.loadItems}
                    infiniteScrollContainer="window"
                    infiniteScrollDisabled={false}
                    infiniteScrollLoading={false}
                    infiniteScrollEnd={false}
                    infiniteScrollDistance={200}
                    infiniteScrollSpinner={<div>this is a loader</div>}
                    infiniteScrollEndIndicator={<div>no more data</div>}
                >
                    {this.state.items.map((v, i) => {
                        const height = i % 2 === 0 ? 200 : 100;
                        return (
                            <div
                                key={i}
                                style={{
                                    width: '100px',
                                    height: `${height}px`,
                                    lineHeight: `${height}px`,
                                    color: 'white',
                                    fontSize: '32px',
                                    display: 'block',
                                    background: 'rgba(0,0,0,0.7)',
                                }}
                            >
                                {i}
                            </div>
                        );
                    })}
                </MasonryLayout>
            </div>
        );
    }
}
