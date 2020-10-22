import * as React from "react";
import TreeView = require("react-treeview");

const label = <div>A label</div>;

const elem1: JSX.Element = <TreeView key='1' nodeLabel={label} collapsed={false} onClick={() => undefined}>
    <div>Entry</div>
    <TreeView nodeLabel={label} itemClassName='item' treeViewClassName='tree' childrenClassName='children'>
        <div>Nested Entry</div>
    </TreeView>
</TreeView>;
