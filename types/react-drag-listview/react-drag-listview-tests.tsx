import * as React from 'react';
import ReactDragListView from 'react-drag-listview';

const { DragColumn } = ReactDragListView;

const data: Array<{ title: string }> = [];
for (let i = 1, len = 7; i < len; i++) {
    data.push({
        title: `rows${i}`,
    });
}

class TestReactDragListView extends React.Component {
    state = {
        data,
    };

    onDragEnd = (fromIndex: number, toIndex: number) => {
        const data = [...this.state.data];
        const item = data.splice(fromIndex, 1)[0];
        data.splice(toIndex, 0, item);
        this.setState({ data });
    }

    render() {
        return (
            <ReactDragListView
                onDragEnd={this.onDragEnd}
                nodeSelector="li"
                handleSelector="a"
                ignoreSelector="span"
                enableScroll
                scrollSpeed={10}
                lineClassName="drag-line"
            >
                <ol>
                    {data.map((item) => (
                        <li key={item.title}>
                            {item.title}
                            <a href="#">Drag <span>test</span></a>
                        </li>
                    ))}
                </ol>
            </ReactDragListView>
        );
    }
}

class TestReactDragColumnView extends React.Component {
    state = {
        data,
    };

    onDragEnd = (fromIndex: number, toIndex: number) => {
        const data = [...this.state.data];
        const item = data.splice(fromIndex, 1)[0];
        data.splice(toIndex, 0, item);
        this.setState({ data });
    }

    render() {
        return (
            <DragColumn
                onDragEnd={this.onDragEnd}
                nodeSelector="li"
                handleSelector="a"
                ignoreSelector="span"
                enableScroll
                scrollSpeed={10}
                lineClassName="drag-line"
            >
                <ol>
                    {data.map((item) => (
                        <li key={item.title}>
                            {item.title}
                            <a href="#">Drag <span>test</span></a>
                        </li>
                    ))}
                </ol>
            </DragColumn>
        );
    }
}
