import * as React from 'react';
import Tree, { TreeNode, SelectData, CheckData } from 'rc-tree';

interface Props {
    keys: string[];
}

interface State {
    defaultExpandedKeys: string[];
    defaultSelectedKeys: string[];
    defaultCheckedKeys: string[];
    switchIt: boolean;
}

export class Demo extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        const keys = this.props.keys;
        this.state = {
            defaultExpandedKeys: keys,
            defaultSelectedKeys: keys,
            defaultCheckedKeys: keys,
            switchIt: true,
        };
    }

    static defaultProps: Props = {
        keys: ['0-0-0-0'],
    };

    getInitialState() {
    }

    onExpand(expandedKeys: string[]) {
        console.log('onExpand', expandedKeys, arguments);
    }

    onSelect(selectedKeys: string[], info: SelectData) {
        console.log('selected', selectedKeys, info);
    }

    onCheck(checkedKeys: string[], info: CheckData) {
        console.log('onCheck', checkedKeys, info);
    }

    onDragStart(params: {event: Event, node: TreeNode}) {
        console.log('onDragStart', params.event, params.node);
    }

    OnDragEnterData(params: {event: Event, node: TreeNode, expandedKeys: string[]}) {
        console.log('OnDragEnterData', params.event, params.node, params.expandedKeys);
    }

    OnDropData(params: {event: Event, node: TreeNode, dragNode: TreeNode, dragNodesKeys: string[]}) {
        console.log('OnDropData', params.event, params.node, params.dragNode, params.dragNodesKeys);
    }

    onEdit() {
        setTimeout(() => {
            console.log('current key: ');
        }, 0);
    }

    onDel(e: React.MouseEvent<HTMLSpanElement>) {
        if (!window.confirm('sure to delete?')) {
            return;
        }
        e.stopPropagation();
    }

    render() {
        const customLabel = (<span className="cus-label">
            <span>operations: </span>
            <span style={{ color: 'blue' }} onClick={this.onEdit}>Edit</span>&nbsp;
      <label onClick={(e) => e.stopPropagation()}><input type="checkbox" /> checked</label> &nbsp;
      <span style={{ color: 'red' }} onClick={e => this.onDel(e)}>Delete</span>
        </span>);
        return (<div style={{ margin: '0 20px' }}>
            <h2>simple</h2>
            <Tree
                className="myCls" showLine checkable defaultExpandAll
                defaultExpandedKeys={this.state.defaultExpandedKeys}
                onExpand={this.onExpand}
                defaultSelectedKeys={this.state.defaultSelectedKeys}
                defaultCheckedKeys={this.state.defaultCheckedKeys}
                onSelect={this.onSelect} onCheck={this.onCheck}
                onDragStart={this.onDragStart} onDragEnter={this.OnDragEnterData}
                onDrop={this.OnDropData}
            >
                <TreeNode title="parent 1" key="0-0">
                    <TreeNode title={customLabel} key="0-0-0">
                        <TreeNode title="leaf" key="0-0-0-0" />
                        <TreeNode title="leaf" key="0-0-0-1" />
                    </TreeNode>
                    <TreeNode title="parent 1-1" key="0-0-1">
                        <TreeNode title="parent 1-1-0" key="0-0-1-0" disableCheckbox />
                        <TreeNode title="parent 1-1-1" key="0-0-1-1" />
                    </TreeNode>
                </TreeNode>
            </Tree>
        </div>);
    }
}
