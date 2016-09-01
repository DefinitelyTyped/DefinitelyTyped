/// <reference path="../react/react-dom.d.ts" />
/// <reference path="./react-sortable-hoc.d.ts" />

import React = require('react');
import ReactDOM = require('react-dom');
import ReactSortableHOC = require('react-sortable-hoc');

interface SortableItemOwnProps {
    value: string;
}

interface SortableListOwnProps {
    items: Array<string>;
}

type SortableComponentState = SortableListOwnProps;

type SortableListDecoratedProps = ReactSortableHOC.SortableContainerProps<SortableListOwnProps>;

const SortableItem = ReactSortableHOC.SortableElement((props: SortableItemOwnProps): JSX.Element => {
    return <li>{props.value}</li>;
});

const SortableListFunCall = ReactSortableHOC.SortableContainer<SortableListOwnProps>(
    class extends React.Component<SortableListOwnProps, void> {
        public constructor(props: SortableListOwnProps) {
            super(props);
        }

        public render(): JSX.Element {
            const items: Array<JSX.Element> = this.props.items.map((value: string, index: number): JSX.Element => {
                return <SortableItem key={`item-${index}`} index={index} value={value} />;
            });
            return <ul>{items}</ul>;
        }
    }
);

@ReactSortableHOC.SortableContainer
class SortableListDecorated extends React.Component<SortableListDecoratedProps, void> {
    public constructor(props: SortableListDecoratedProps) {
        super(props);
    }

    public render(): JSX.Element {
        const items: Array<JSX.Element> = this.props.items.map((value: string, index: number): JSX.Element => {
            return <SortableItem key={`item-${index}`} index={index} value={value} />;
        });
        return <ul>{items}</ul>;
    }
}


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
        return (
            <div>
                <SortableListFunCall items={this.state.items} onSortEnd={this._onSortEnd} />
                <SortableListDecorated items={this.state.items} onSortEnd={this._onSortEnd} />
            </div>
        );
    }
}

let bootstrapNode: HTMLDivElement = document.createElement('div');
ReactDOM.render(<SortableComponent />, bootstrapNode);
document.body.appendChild(bootstrapNode);
