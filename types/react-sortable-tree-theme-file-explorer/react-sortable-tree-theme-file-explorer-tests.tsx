import * as React from 'react';

import SortableTree from "react-sortable-tree";
import FileExplorerTheme from "react-sortable-tree-theme-file-explorer";

const sortableTree = (
    <SortableTree
        treeData={[]}
        onChange={() => null}
        theme={FileExplorerTheme}
    />
);
