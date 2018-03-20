import * as React from "react";
import SortableTree,
    {
        SortableTreeWithoutDndContext,
        defaultGetNodeKey,
        NodeRenderer,
        TreeItem,
        defaultSearchMethod,
        SearchData,
        NodeData,
        ExtendedNodeData,
        FullTree,
        OnVisibilityToggleData,
        PreviousAnNextLocation,
        PlaceholderRendererProps
    } from "react-sortable-tree";
import { ListProps, ListRowRenderer } from "react-virtualized";

class PlaceholderRenderer extends React.Component<PlaceholderRendererProps> {
    render() {
        const backgroundColor = this.props.isOver ? 'green' : 'red';
        return <div style={{backgroundColor}}>Custom Placeholder class</div>;
    }
}

class Test extends React.Component {
    render() {
        const treeData = [
            {
                title: "Title", subtitle: "Subtitle", children: [
                    {title: "Child 1", subtitle: "Subtitle", children: []},
                    {title: "Child 2", subtitle: "Subtitle"}
                ]
            }
        ];
        const reactVirtualizedListProps: ListProps = {
            width: 100, height: 44, rowCount: 3, rowHeight: 44, rowRenderer: "test" as any as ListRowRenderer
        };
        const nodeRenderer: NodeRenderer = "test" as any as NodeRenderer;
        return (
            <div>
                <SortableTree
                    treeData={treeData}
                    onChange={(data: TreeItem[]) => {}}
                    style={{width: "100%"}}
                    className="test-class"
                    innerStyle={{backgroundColor: "#3A3A3A"}}
                    maxDepth={3}
                    searchMethod={defaultSearchMethod}
                    searchQuery={"Child 1"}
                    searchFocusOffset={1}
                    searchFinishCallback={(matches: NodeData[]) => { const firstTitle = matches[0].node.title; }}
                    generateNodeProps={(data: ExtendedNodeData) => ({buttons: [data.node.title]}) }
                    getNodeKey={defaultGetNodeKey}
                    onMoveNode={(data: NodeData & FullTree) => {}}
                    onVisibilityToggle={(data: OnVisibilityToggleData) => {}}
                    canDrag={true}
                    canDrop={(data: PreviousAnNextLocation & NodeData) => true}
                    reactVirtualizedListProps={reactVirtualizedListProps}
                    rowHeight={62}
                    slideRegionSize={100}
                    scaffoldBlockPxWidth={44}
                    isVirtualized={true}
                    nodeContentRenderer={nodeRenderer}
                    dndType="testNodeType"
                    placeholderRenderer={PlaceholderRenderer}
                />
                <SortableTreeWithoutDndContext
                    treeData={[{title: "Title", subtitle: "Subtitle", children: []}]}
                    onChange={(treeData: TreeItem[]) => {}}
                    style={{width: "100px"}}
                />
            </div>
        );
    }
}
