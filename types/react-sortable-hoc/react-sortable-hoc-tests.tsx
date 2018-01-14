import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactSortableHOC from 'react-sortable-hoc';

interface SortableItemProps {
    value: string;
}

interface SortableListProps {
    items: string[];
    axis: 'x' | 'y' | 'xy';
}

type SortableComponentState = SortableListProps;

class Item extends React.Component<SortableItemProps> {
    constructor(props: SortableItemProps) {
        super(props);
    }

    render(): JSX.Element {
        return <li>{this.props.value}</li>;
    }
}

const SortableItem = ReactSortableHOC.SortableElement(Item);

const SortableList = ReactSortableHOC.SortableContainer((props: SortableListProps): JSX.Element => {
    const items: JSX.Element[] = props.items.map((value: string, index: number): JSX.Element => {
        return <SortableItem key={`item-${index}`} index={index} value={value} />;
    });
    return <ul>{items}</ul>;
});

class SortableComponent extends React.Component<{}, SortableComponentState> {
    private readonly _onSortEnd: ReactSortableHOC.SortEndHandler;

    private _handleSortEnd(sort: ReactSortableHOC.SortEnd, event: ReactSortableHOC.SortEvent): void {
        this.setState({items: ReactSortableHOC.arrayMove(this.state.items, sort.oldIndex, sort.newIndex)});
    }

    private _getHelperDimensions(sort: ReactSortableHOC.SortStart): ReactSortableHOC.Dimensions {
        if (sort.node instanceof HTMLElement) {
            return ({
                width: sort.node.offsetWidth,
                height: sort.node.offsetHeight
            });
        }
        return {width: 0, height: 0};
    }

    constructor() {
        super({});
        this.state = {
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
            axis: 'x'
        };
        this._onSortEnd = this._handleSortEnd.bind(this);
    }

    render(): JSX.Element {
        return <SortableList
            items={this.state.items}
            axis={this.state.axis}
            pressThreshold={5}
            distance={100}
            onSortEnd={this._onSortEnd}
            getHelperDimensions={this._getHelperDimensions}
        />;
    }
}

const bootstrapNode: HTMLDivElement = document.createElement('div');
ReactDOM.render(<SortableComponent />, bootstrapNode);
document.body.appendChild(bootstrapNode);
