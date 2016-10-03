/// <reference path="../react/react-dom.d.ts" />
/// <reference path="./react-sortable-hoc.d.ts" />

import React = require('react');
import ReactDOM = require('react-dom');
import ReactSortableHOC = require('react-sortable-hoc');

interface SortableItemProps {
    value: string;
}

interface SortableListProps {
    items: Array<string>;
}

type SortableComponentState = SortableListProps;

class Item extends React.Component<SortableItemProps, void> {
    public constructor(props: SortableItemProps) {
        super(props);
    }

    public render(): JSX.Element {
        return <li>{this.props.value}</li>;
    }
}

const SortableItem = ReactSortableHOC.SortableElement(Item);

const SortableList = ReactSortableHOC.SortableContainer((props: SortableListProps): JSX.Element => {
    const items: Array<JSX.Element> = props.items.map((value: string, index: number): JSX.Element => {
        return <SortableItem key={`item-${index}`} index={index} value={value} />;
    });
    return <ul>{items}</ul>;
});

class SortableComponent extends React.Component<void, SortableComponentState> {
    private _onSortEnd: ReactSortableHOC.SortEndHandler;

    private _handleSotEnd(sort: ReactSortableHOC.SortEnd, event: ReactSortableHOC.SortEvent): void {
        this.setState({items: ReactSortableHOC.arrayMove(this.state.items, sort.oldIndex, sort.newIndex)});
    }

    public constructor() {
        super();
        this.state = { items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'] };
        this._onSortEnd = this._handleSotEnd.bind(this);
    }

    public render(): JSX.Element {
        return <SortableList items={this.state.items} onSortEnd={this._onSortEnd} />;
    }
}

let bootstrapNode: HTMLDivElement = document.createElement('div');
ReactDOM.render(<SortableComponent />, bootstrapNode);
document.body.appendChild(bootstrapNode);
