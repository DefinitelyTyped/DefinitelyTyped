import * as React from 'react';
import ReactGridLayout = require('react-grid-layout');
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveWidth = WidthProvider(Responsive);

class DefaultGridTest extends React.Component {
    render() {
        const layout = [
            { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
            { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
            { i: 'c', x: 4, y: 0, w: 1, h: 2 },
        ];

        return (
            <ReactGridLayout
                cols={12}
                rowHeight={30}
                width={1200}
                layout={layout}
                autoSize={true}
                verticalCompact={true}
                isBounded={true}
                allowOverlap={true}
                onDropDragOver={e => false}
                resizeHandles={['e']}
                resizeHandle={<div />}
            >
                <div key={'a'}>a</div>
                <div key={'b'}>b</div>
                <div key={'c'}>c</div>
            </ReactGridLayout>
        );
    }
}

class ResponsiveGridTest extends React.Component {
    render() {
        const layouts = {
            lg: [
                { i: '1', x: 0, y: 0, w: 1, h: 2, static: true },
                { i: '2', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
                { i: '3', x: 4, y: 0, w: 1, h: 2 },
            ],
        };

        return (
            <Responsive
                layouts={layouts}
                width={800}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            >
                <div key="1">a</div>
                <div key="2">b</div>
                <div key="3">c</div>
            </Responsive>
        );
    }
}

class ResponsiveGridTestWithCustomBreakpoints extends React.Component {
    render() {
        const layouts = {
            lg: [
                { i: '1', x: 0, y: 0, w: 1, h: 2, static: true },
                { i: '2', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
                { i: '3', x: 4, y: 0, w: 1, h: 2 },
            ],
        };

        return (
            <Responsive layouts={layouts} width={800} breakpoints={{ lg: 468, sm: 0 }} cols={{ lg: 12, sm: 6 }}>
                <div key="1">a</div>
                <div key="2">b</div>
                <div key="3">c</div>
            </Responsive>
        );
    }
}

class ResponsiveGridWidthProviderTest extends React.Component {
    render() {
        return (
            <ResponsiveWidth
                measureBeforeMount={true}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            >
                <div key="1">a</div>
                <div key="2">b</div>
                <div key="3">c</div>
            </ResponsiveWidth>
        );
    }
}

class InnerRefObjectTest extends React.Component {
    render() {
        return <ReactGridLayout innerRef={React.createRef<HTMLDivElement>()} />;
    }
}

class InnerRefCallbackTest extends React.Component {
    render() {
        return <ReactGridLayout innerRef={(_: HTMLDivElement | null) => {}} />;
    }
}
