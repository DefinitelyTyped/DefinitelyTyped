/**
 * Typescript definition tests for d3/d3-hierarchy module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Hierarchy from 'd3-hierarchy';


// -----------------------------------------------------------------------
// Preparatory Steps
// -----------------------------------------------------------------------

let num: number;
let size: [number, number];
let idString: string;

// -----------------------------------------------------------------------
// Hierarchy
// -----------------------------------------------------------------------

interface HierarchyDatum {
    name: string;
    val: number;
    children?: Array<HierarchyDatum>;
}



let hierarchyRootDatum: HierarchyDatum = {
    name: 'n0',
    val: 10,
    children: [
        {
            name: 'n11',
            val: 5
        },
        {
            name: 'n12',
            val: 4,
            children: [
                {
                    name: 'n121',
                    val: 30
                }
            ]
        }
    ]
};

let hierarchyNodeArray: Array<d3Hierarchy.HierarchyNode<HierarchyDatum>>;
let hierarchyNode: d3Hierarchy.HierarchyNode<HierarchyDatum>;

let hierarchyPointNodeArray: Array<d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>>;
let hierarchyPointNode: d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>;

let hierarchyRectangularNodeArray: Array<d3Hierarchy.HierarchyRectangularNode<HierarchyDatumWithParentId>>;
let hierarchyRectangularNode: d3Hierarchy.HierarchyRectangularNode<HierarchyDatumWithParentId>;

let hierarchyCircularNodeArray: Array<d3Hierarchy.HierarchyCircularNode<HierarchyDatumWithParentId>>;
let hierarchyCircularNode: d3Hierarchy.HierarchyCircularNode<HierarchyDatumWithParentId>;

// Create Hierarchy Layout Root Node =====================================

let hierarchyRootNode: d3Hierarchy.HierarchyNode<HierarchyDatum>;

hierarchyRootNode = d3Hierarchy.hierarchy(hierarchyRootDatum);

hierarchyRootNode = d3Hierarchy.hierarchy(hierarchyRootDatum, function (d) {
    return d.children || null;
});

// Use Hierarchy Node ====================================================

// data, depth, height ---------------------------------------------------

hierarchyRootDatum = hierarchyRootNode.data;
num = hierarchyRootNode.depth;
num = hierarchyRootNode.height;

// children, parent ------------------------------------------------------


hierarchyNodeArray = hierarchyRootNode.children;

let parentNode: d3Hierarchy.HierarchyNode<HierarchyDatum>;
parentNode = hierarchyNodeArray.length ? hierarchyNodeArray[0].parent : null;

// id --------------------------------------------------------------------

idString = hierarchyRootNode.id;

// ancestors(), descendants() --------------------------------------------

let ancestors: Array<d3Hierarchy.HierarchyNode<HierarchyDatum>> = hierarchyRootNode.ancestors();
let descendants: Array<d3Hierarchy.HierarchyNode<HierarchyDatum>> = hierarchyRootNode.descendants();

// leaves() ---------------------------------------------------------------

hierarchyNodeArray = hierarchyRootNode.leaves();

// path() -------------------------------------------------------------------

hierarchyNode = descendants[descendants.length - 1];

let path: Array<d3Hierarchy.HierarchyNode<HierarchyDatum>> = hierarchyRootNode.path(hierarchyNode);

// links() and HierarchyLink<...> ------------------------------------------

let links: Array<d3Hierarchy.HierarchyLink<HierarchyDatum>>;

links = hierarchyRootNode.links();

let link: d3Hierarchy.HierarchyLink<HierarchyDatum>;
link = links[0];

hierarchyNode = link.source;
hierarchyNode = link.target;

// sum() and value ----------------------------------------------------------

hierarchyRootNode = hierarchyRootNode.sum(function (d) { return d.val; });

num = hierarchyRootNode.value;

// count() and value ----------------------------------------------------------

hierarchyRootNode = hierarchyRootNode.count();

num = hierarchyRootNode.value;


// sort ---------------------------------------------------------------------

hierarchyRootNode = hierarchyRootNode.sort(function (a, b) {
    console.log(' Raw values in data of a and b:', a.data.val, ' and ', b.data.val); // a and b are of type HierarchyNode<HierarchyDatum>
    return b.height - a.height || b.value - a.value;
});

// each(), eachAfter(), eachBefore() ----------------------------------------

hierarchyRootNode = hierarchyRootNode.each(function (node) {
    console.log(' Raw value of node:', node.data.val); // node type is HierarchyNode<HierarchyDatum>
    console.log(' Aggregated value of node:', node.value); // node type is HierarchyNode<HierarchyDatum>
});

hierarchyRootNode = hierarchyRootNode.eachAfter(function (node) {
    console.log(' Raw value of node:', node.data.val); // node type is HierarchyNode<HierarchyDatum>
    console.log(' Aggregated value of node:', node.value); // node type is HierarchyNode<HierarchyDatum>
});

hierarchyRootNode = hierarchyRootNode.eachBefore(function (node) {
    console.log(' Raw value of node:', node.data.val); // node type is HierarchyNode<HierarchyDatum>
    console.log(' Aggregated value of node:', node.value); // node type is HierarchyNode<HierarchyDatum>
});

// copy() --------------------------------------------------------------------

let copiedHierarchyNode: d3Hierarchy.HierarchyNode<HierarchyDatum>;
copiedHierarchyNode = hierarchyRootNode.copy();

// -----------------------------------------------------------------------
// Stratify
// -----------------------------------------------------------------------

interface HierarchyDatumWithParentId extends HierarchyDatum {
    parentId: string;
}

interface TabularHierarchyDatum {
    name: string;
    parentId: string;
    val: number;
}

let tabularData: Array<TabularHierarchyDatum>;
tabularData = [
    { name: 'n0', parentId: null, val: 10 },
    { name: 'n11', parentId: 'n0', val: 5 },
    { name: 'n12', parentId: 'n0', val: 4 },
    { name: 'n121', parentId: 'n12', val: 30 }
];

let idStringAccessor: (d: TabularHierarchyDatum, i?: number, data?: Array<TabularHierarchyDatum>) => (string | null | '' | undefined);

// Create Stratify Operator  ---------------------------------------------

let stratificatorizer: d3Hierarchy.StratifyOperator<TabularHierarchyDatum>;
stratificatorizer = d3Hierarchy.stratify<TabularHierarchyDatum>();

// Configure Stratify Operator  ------------------------------------------

// id(...)

stratificatorizer = stratificatorizer.id(function (d, i, data) {
    console.log('Length of tabular array: ', data.length);
    console.log('Name of first entry in tabular array: ', data[0].name); // data of type Array<TabularHierarchyDatum>
    return d.name; // d is of type TabularHierarchyDatum
});

idStringAccessor = stratificatorizer.id();

// parentId(...)

stratificatorizer = stratificatorizer.parentId(function (d, i, data) {
    console.log('Length of tabular array: ', data.length);
    console.log('Name of first entry in tabular array: ', data[0].name); // data of type Array<TabularHierarchyDatum>
    return d.parentId; // d is of type TabularHierarchyDatum
});

idStringAccessor = stratificatorizer.parentId();

// Use Stratify Operator  ------------------------------------------------

let stratifiedRootNode: d3Hierarchy.HierarchyNode<HierarchyDatumWithParentId> = stratificatorizer(tabularData);

// -----------------------------------------------------------------------
// Cluster
// -----------------------------------------------------------------------

// Create cluster layout generator =======================================

let clusterLayout: d3Hierarchy.ClusterLayout<HierarchyDatumWithParentId>;

clusterLayout = d3Hierarchy.cluster<HierarchyDatumWithParentId>();

// Configure cluster layout generator ====================================

// size() ----------------------------------------------------------------

clusterLayout = clusterLayout.size(null);
clusterLayout = clusterLayout.size([200, 200]);

size = clusterLayout.size();

// nodeSize() ------------------------------------------------------------

clusterLayout = clusterLayout.nodeSize(null);
clusterLayout = clusterLayout.nodeSize([10, 10]);
size = clusterLayout.nodeSize();

// separation() ----------------------------------------------------------

clusterLayout = clusterLayout.separation(function separation(a, b) {
    return a.data.parentId === b.data.parentId ? 1 : 2; // a and b are nodes of type HierarchyPointNode<HierarchyDatumWithParentId>
});

let separationAccessor: (a: d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>, b: d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>) => number;
separationAccessor = clusterLayout.separation();

// Use cluster layout generator ==========================================

let clusterRootNode: d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>;

clusterRootNode = clusterLayout(stratifiedRootNode);

// Use HierarchyPointNode ================================================

// x and y coordinates ---------------------------------------------------

num = clusterRootNode.x;
num = clusterRootNode.y;

// data, depth, height ---------------------------------------------------

let clusterDatum: HierarchyDatumWithParentId = clusterRootNode.data;
num = clusterRootNode.depth;
num = clusterRootNode.height;

// children, parent ------------------------------------------------------


hierarchyPointNodeArray = clusterRootNode.children;

let parentPointNode: d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>;
parentPointNode = hierarchyPointNodeArray.length ? hierarchyPointNodeArray[0].parent : null;

// id --------------------------------------------------------------------

idString = clusterRootNode.id;

// ancestors(), descendants() --------------------------------------------

let pointNodeAncestors: Array<d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>> = clusterRootNode.ancestors();
let pointNodeDescendants: Array<d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>> = clusterRootNode.descendants();

// leaves() ---------------------------------------------------------------

hierarchyPointNodeArray = clusterRootNode.leaves();

// path() -------------------------------------------------------------------

hierarchyPointNode = pointNodeDescendants[pointNodeDescendants.length - 1];

let clusterPath: Array<d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>> = clusterRootNode.path(hierarchyPointNode);

// links() and HierarchyPointLink<...> ------------------------------------------

let pointLinks: Array<d3Hierarchy.HierarchyPointLink<HierarchyDatumWithParentId>>;

pointLinks = clusterRootNode.links();

let pointLink: d3Hierarchy.HierarchyPointLink<HierarchyDatumWithParentId>;
pointLink = pointLinks[0];

hierarchyPointNode = pointLink.source;
hierarchyPointNode = pointLink.target;

// sum() and value ----------------------------------------------------------

clusterRootNode = clusterRootNode.sum(function (d) { return d.val; });

num = clusterRootNode.value;

// count() and value ----------------------------------------------------------

clusterRootNode = clusterRootNode.count();

num = clusterRootNode.value;

// sort ---------------------------------------------------------------------

clusterRootNode = clusterRootNode.sort(function (a, b) {
    console.log(' x-coordinates of a:', a.x, ' and b:', b.x); // a and b are of type HierarchyPointNode<HierarchyDatumWithParentId>
    console.log(' Raw values in data of a and b:', a.data.val, ' and ', b.data.val); // a and b are of type HierarchyPointNode<HierarchyDatumWithParentId>
    return b.height - a.height || b.value - a.value;
});

// each(), eachAfter(), eachBefore() ----------------------------------------

clusterRootNode = clusterRootNode.each(function (node) {
    console.log('ParentId:', node.data.parentId); // node type is HierarchyPointNode<HierarchyDatumWithParentId>
    console.log('X-coordinate of node:', node.x); // node type is HierarchyPointNode<HierarchyDatumWithParentId>
});

clusterRootNode = clusterRootNode.eachAfter(function (node) {
    console.log('ParentId:', node.data.parentId); // node type is HierarchyPointNode<HierarchyDatumWithParentId>
    console.log('X-coordinate of node:', node.x); // node type is HierarchyPointNode<HierarchyDatumWithParentId>
});

clusterRootNode = clusterRootNode.eachBefore(function (node) {
    console.log('ParentId:', node.data.parentId); // node type is HierarchyPointNode<HierarchyDatumWithParentId>
    console.log('X-coordinate of node:', node.x); // node type is HierarchyPointNode<HierarchyDatumWithParentId>
});

// copy() --------------------------------------------------------------------

let copiedClusterNode: d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>;
copiedClusterNode = clusterRootNode.copy();

// -----------------------------------------------------------------------
// Tree
// -----------------------------------------------------------------------

// Create tree layout generator =======================================

let treeLayout: d3Hierarchy.TreeLayout<HierarchyDatumWithParentId>;

treeLayout = d3Hierarchy.tree<HierarchyDatumWithParentId>();

// Configure tree layout generator ====================================

// size() ----------------------------------------------------------------

treeLayout = treeLayout.size(null);
treeLayout = treeLayout.size([200, 200]);

size = treeLayout.size();

// nodeSize() ------------------------------------------------------------

treeLayout = treeLayout.nodeSize(null);
treeLayout = treeLayout.nodeSize([10, 10]);
size = treeLayout.nodeSize();

// separation() ----------------------------------------------------------

treeLayout = treeLayout.separation(function separation(a, b) {
    return a.data.parentId === b.data.parentId ? 1 : 2; // a and b are nodes of type HierarchyPointNode<HierarchyDatumWithParentId>
});

separationAccessor = treeLayout.separation();

// Use cluster layout generator ==========================================

let treeRootNode: d3Hierarchy.HierarchyPointNode<HierarchyDatumWithParentId>;

treeRootNode = treeLayout(stratifiedRootNode);

// -----------------------------------------------------------------------
// Treemap
// -----------------------------------------------------------------------

let numberRectangularNodeAccessor: (node: d3Hierarchy.HierarchyRectangularNode<HierarchyDatumWithParentId>) => number;

// Create treemap layout generator =======================================

let treemapLayout: d3Hierarchy.TreemapLayout<HierarchyDatumWithParentId>;

treemapLayout = d3Hierarchy.treemap<HierarchyDatumWithParentId>();

// Configure treemap layout generator ====================================

// tile() ----------------------------------------------------------------

treemapLayout = treemapLayout.tile(function (node, x0, y0, x1, y1) {
    let n: number;
    console.log('x0 coordinate of node: ', node.x0);
    console.log('Node parent id: ', node.data.parentId); // type of node is HierarchyRectangularNode<HierarchyDatumWithParentId>
    num = x0; // number
    num = y0; // number
    num = x1; // number
    num = y1; // number
    // tile away
});

treemapLayout = treemapLayout.tile(d3Hierarchy.treemapDice);

let tilingFn: (node: d3Hierarchy.HierarchyRectangularNode<HierarchyDatumWithParentId>, x0: number, y0: number, x1: number, y1: number) => void;
tilingFn = treemapLayout.tile();

// size() ----------------------------------------------------------------

treemapLayout = treemapLayout.size(null);
treemapLayout = treemapLayout.size([400, 200]);

size = treemapLayout.size();

// round() ------------------------------------------------------------

treemapLayout = treemapLayout.round(true);

let roundFlag: boolean = treemapLayout.round();

// padding() ----------------------------------------------------------------

treemapLayout = treemapLayout.padding(1);
treemapLayout = treemapLayout.padding(function (node) {
    console.log('Node parent id: ', node.data.parentId); // type of node is HierarchyRectangularNode<HierarchyDatumWithParentId>
    return node.x0 > 10 ? 2 : 1;
});

numberRectangularNodeAccessor = treemapLayout.padding();

// paddingInner() ----------------------------------------------------------------

treemapLayout = treemapLayout.paddingInner(1);
treemapLayout = treemapLayout.paddingInner(function (node) {
    console.log('Node parent id: ', node.data.parentId); // type of node is HierarchyRectangularNode<HierarchyDatumWithParentId>
    return node.x0 > 10 ? 2 : 1;
});

numberRectangularNodeAccessor = treemapLayout.paddingInner();

// paddingOuter() ----------------------------------------------------------------

treemapLayout = treemapLayout.paddingOuter(1);
treemapLayout = treemapLayout.paddingOuter(function (node) {
    console.log('Node parent id: ', node.data.parentId); // type of node is HierarchyRectangularNode<HierarchyDatumWithParentId>
    return node.x0 > 10 ? 2 : 1;
});

numberRectangularNodeAccessor = treemapLayout.paddingOuter();

// paddingTop() ----------------------------------------------------------------

treemapLayout = treemapLayout.paddingTop(1);
treemapLayout = treemapLayout.paddingTop(function (node) {
    console.log('Node parent id: ', node.data.parentId); // type of node is HierarchyRectangularNode<HierarchyDatumWithParentId>
    return node.x0 > 10 ? 2 : 1;
});

numberRectangularNodeAccessor = treemapLayout.paddingTop();

// paddingRight() ----------------------------------------------------------------

treemapLayout = treemapLayout.paddingRight(1);
treemapLayout = treemapLayout.paddingRight(function (node) {
    console.log('Node parent id: ', node.data.parentId); // type of node is HierarchyRectangularNode<HierarchyDatumWithParentId>
    return node.x0 > 10 ? 2 : 1;
});

numberRectangularNodeAccessor = treemapLayout.paddingRight();

// paddingBottom() ----------------------------------------------------------------

treemapLayout = treemapLayout.paddingBottom(1);
treemapLayout = treemapLayout.paddingBottom(function (node) {
    console.log('Node parent id: ', node.data.parentId); // type of node is HierarchyRectangularNode<HierarchyDatumWithParentId>
    return node.x0 > 10 ? 2 : 1;
});

numberRectangularNodeAccessor = treemapLayout.paddingBottom();

// paddingLeft() ----------------------------------------------------------------

treemapLayout = treemapLayout.paddingLeft(1);
treemapLayout = treemapLayout.paddingLeft(function (node) {
    console.log('Node parent id: ', node.data.parentId); // type of node is HierarchyRectangularNode<HierarchyDatumWithParentId>
    return node.x0 > 10 ? 2 : 1;
});

numberRectangularNodeAccessor = treemapLayout.paddingLeft();


// Use treemap layout generator ==========================================

let treemapRootNode: d3Hierarchy.HierarchyRectangularNode<HierarchyDatumWithParentId>;

treemapRootNode = treemapLayout(stratifiedRootNode);


// Tiling functions ======================================================

tilingFn = d3Hierarchy.treemapBinary;

tilingFn = d3Hierarchy.treemapDice;

tilingFn = d3Hierarchy.treemapSlice;

tilingFn = d3Hierarchy.treemapSliceDice;

// Tiling Factory functions treemapSquarify() and treemapResquarify() ====

let tilingFactoryFn: d3Hierarchy.RatioSquarifyTilingFactory;

tilingFactoryFn = d3Hierarchy.treemapSquarify;
tilingFactoryFn = d3Hierarchy.treemapSquarify.ratio(2);

treemapLayout.tile(d3Hierarchy.treemapSquarify.ratio(2));

tilingFactoryFn = d3Hierarchy.treemapResquarify;
tilingFactoryFn = d3Hierarchy.treemapResquarify.ratio(2);

treemapLayout.tile(d3Hierarchy.treemapResquarify.ratio(2));


// Use HierarchyRectangularNode ================================================

// x and y coordinates ---------------------------------------------------

num = treemapRootNode.x0;
num = treemapRootNode.y0;
num = treemapRootNode.x1;
num = treemapRootNode.y1;

// data, depth, height ---------------------------------------------------

let treemapDatum: HierarchyDatumWithParentId = treemapRootNode.data;
num = treemapRootNode.depth;
num = treemapRootNode.height;

// children, parent ------------------------------------------------------


hierarchyRectangularNodeArray = treemapRootNode.children;

let parentRectangularNode: d3Hierarchy.HierarchyRectangularNode<HierarchyDatumWithParentId>;
parentRectangularNode = hierarchyRectangularNodeArray.length ? hierarchyRectangularNodeArray[0].parent : null;

// id --------------------------------------------------------------------

idString = treemapRootNode.id;

// ancestors(), descendants() --------------------------------------------

let rectangularNodeAncestors: Array<d3Hierarchy.HierarchyRectangularNode<HierarchyDatumWithParentId>> = treemapRootNode.ancestors();
let rectangularNodeDescendants: Array<d3Hierarchy.HierarchyRectangularNode<HierarchyDatumWithParentId>> = treemapRootNode.descendants();

// leaves() ---------------------------------------------------------------

hierarchyRectangularNodeArray = treemapRootNode.leaves();

// path() -------------------------------------------------------------------

hierarchyRectangularNode = rectangularNodeDescendants[rectangularNodeDescendants.length - 1];

let treemapPath: Array<d3Hierarchy.HierarchyRectangularNode<HierarchyDatumWithParentId>> = treemapRootNode.path(hierarchyRectangularNode);

// links() and HierarchyRectangulerLink<...> ------------------------------------------

let rectangularLinks: Array<d3Hierarchy.HierarchyRectangularLink<HierarchyDatumWithParentId>>;

rectangularLinks = treemapRootNode.links();

let rectangularLink: d3Hierarchy.HierarchyRectangularLink<HierarchyDatumWithParentId>;
rectangularLink = rectangularLinks[0];

hierarchyRectangularNode = rectangularLink.source;
hierarchyRectangularNode = rectangularLink.target;

// sum() and value ----------------------------------------------------------

treemapRootNode = treemapRootNode.sum(function (d) { return d.val; });

num = treemapRootNode.value;

// count() and value ----------------------------------------------------------

treemapRootNode = treemapRootNode.count();

num = treemapRootNode.value;
// sort ---------------------------------------------------------------------

treemapRootNode = treemapRootNode.sort(function (a, b) {
    console.log(' x0-coordinates of a:', a.x0, ' and b:', b.x0); // a and b are of type HierarchyRectangularNode<HierarchyDatumWithParentId>
    console.log(' Raw values in data of a and b:', a.data.val, ' and ', b.data.val); // a and b are of type HierarchyRectangularNode<HierarchyDatumWithParentId>
    return b.height - a.height || b.value - a.value;
});

// each(), eachAfter(), eachBefore() ----------------------------------------

treemapRootNode = treemapRootNode.each(function (node) {
    console.log('ParentId:', node.data.parentId); // node type is HierarchyRectangularNode<HierarchyDatumWithParentId>
    console.log('X0-coordinate of node:', node.x0); // node type is HierarchyRectangularNode<HierarchyDatumWithParentId>
});

treemapRootNode = treemapRootNode.eachAfter(function (node) {
    console.log('ParentId:', node.data.parentId); // node type is HierarchyRectangularNode<HierarchyDatumWithParentId>
    console.log('X0-coordinate of node:', node.x0); // node type is HierarchyRectangularNode<HierarchyDatumWithParentId>
});

treemapRootNode = treemapRootNode.eachBefore(function (node) {
    console.log('ParentId:', node.data.parentId); // node type is HierarchyRectangularNode<HierarchyDatumWithParentId>
    console.log('X0-coordinate of node:', node.x0); // node type is HierarchyRectangularNode<HierarchyDatumWithParentId>
});

// copy() --------------------------------------------------------------------

let copiedTreemapNode: d3Hierarchy.HierarchyRectangularNode<HierarchyDatumWithParentId>;
copiedTreemapNode = treemapRootNode.copy();



// -----------------------------------------------------------------------
// Partition
// -----------------------------------------------------------------------

// Create partition layout generator =======================================

let partitionLayout: d3Hierarchy.PartitionLayout<HierarchyDatumWithParentId>;

partitionLayout = d3Hierarchy.partition<HierarchyDatumWithParentId>();

// Configure partition layout generator ====================================


// size() ----------------------------------------------------------------

partitionLayout = partitionLayout.size(null);
partitionLayout = partitionLayout.size([400, 200]);

size = partitionLayout.size();

// round() ------------------------------------------------------------

partitionLayout = partitionLayout.round(true);

roundFlag = partitionLayout.round();

// padding() ----------------------------------------------------------------

partitionLayout = partitionLayout.padding(1);

num = partitionLayout.padding();


// Use partition layout generator ==========================================

let partitionRootNode: d3Hierarchy.HierarchyRectangularNode<HierarchyDatumWithParentId>;

partitionRootNode = partitionLayout(stratifiedRootNode);

// -----------------------------------------------------------------------
// Pack
// -----------------------------------------------------------------------

let numberCircularNodeAccessor: (node: d3Hierarchy.HierarchyCircularNode<HierarchyDatumWithParentId>) => number;

// Create pack layout generator =======================================

let packLayout: d3Hierarchy.PackLayout<HierarchyDatumWithParentId>;

packLayout = d3Hierarchy.pack<HierarchyDatumWithParentId>();

// Configure pack layout generator ====================================


// size() ----------------------------------------------------------------

packLayout = packLayout.size(null);
packLayout = packLayout.size([400, 400]);

size = packLayout.size();

// radius() ------------------------------------------------------------

packLayout = packLayout.radius(function (node) {
    console.log('Radius property of node before completing accessor: ', node.r); // node is of type HierarchyCircularNode<HierarchyDatumWithParentId>
    console.log('Parent id of node: ', node.data.parentId); // node is of type HierarchyCircularNode<HierarchyDatumWithParentId>
    return node.value;
});

numberCircularNodeAccessor = packLayout.radius();

// padding() ----------------------------------------------------------------

packLayout = packLayout.padding(1);

packLayout = packLayout.padding(function (node) {
    console.log('Radius property of node: ', node.r); // node is of type HierarchyCircularNode<HierarchyDatumWithParentId>
    console.log('Parent id of node: ', node.data.parentId); // node is of type HierarchyCircularNode<HierarchyDatumWithParentId>
    return node.value > 10 ? 2 : 1;
});

numberCircularNodeAccessor = packLayout.padding();


// Use partition layout generator ==========================================

let packRootNode: d3Hierarchy.HierarchyCircularNode<HierarchyDatumWithParentId>;

packRootNode = packLayout(stratifiedRootNode);


// Use HierarchyCircularNode ================================================

// x and y coordinates and radius r ------------------------------------------

num = packRootNode.x;
num = packRootNode.y;
num = packRootNode.r;

// data, depth, height ---------------------------------------------------

let packDatum: HierarchyDatumWithParentId = packRootNode.data;
num = packRootNode.depth;
num = packRootNode.height;

// children, parent ------------------------------------------------------


hierarchyCircularNodeArray = packRootNode.children;

let parentCircularNode: d3Hierarchy.HierarchyCircularNode<HierarchyDatumWithParentId>;
parentCircularNode = hierarchyCircularNodeArray.length ? hierarchyCircularNodeArray[0].parent : null;

// id --------------------------------------------------------------------

idString = packRootNode.id;

// ancestors(), descendants() --------------------------------------------

let circularNodeAncestors: Array<d3Hierarchy.HierarchyCircularNode<HierarchyDatumWithParentId>> = packRootNode.ancestors();
let circularNodeDescendants: Array<d3Hierarchy.HierarchyCircularNode<HierarchyDatumWithParentId>> = packRootNode.descendants();

// leaves() ---------------------------------------------------------------

hierarchyCircularNodeArray = packRootNode.leaves();

// path() -------------------------------------------------------------------

hierarchyCircularNode = circularNodeDescendants[circularNodeDescendants.length - 1];

let packPath: Array<d3Hierarchy.HierarchyCircularNode<HierarchyDatumWithParentId>> = packRootNode.path(hierarchyCircularNode);

// links() and HierarchyRectangulerLink<...> ------------------------------------------

let circularLinks: Array<d3Hierarchy.HierarchyCircularLink<HierarchyDatumWithParentId>>;

circularLinks = packRootNode.links();

let circularLink: d3Hierarchy.HierarchyCircularLink<HierarchyDatumWithParentId>;
circularLink = circularLinks[0];

hierarchyCircularNode = circularLink.source;
hierarchyCircularNode = circularLink.target;

// sum() and value ----------------------------------------------------------

packRootNode = packRootNode.sum(function (d) { return d.val; });

num = packRootNode.value;

// count() and value ----------------------------------------------------------

packRootNode = packRootNode.count();

num = packRootNode.value;
// sort ---------------------------------------------------------------------

packRootNode = packRootNode.sort(function (a, b) {
    console.log('radius of a:', a.r, ' and b:', b.r); // a and b are of type HierarchyCircularNode<HierarchyDatumWithParentId>
    console.log(' Raw values in data of a and b:', a.data.val, ' and ', b.data.val); // a and b are of type HierarchyCircularNode<HierarchyDatumWithParentId>
    return b.height - a.height || b.value - a.value;
});

// each(), eachAfter(), eachBefore() ----------------------------------------

packRootNode = packRootNode.each(function (node) {
    console.log('ParentId:', node.data.parentId); // node type is HierarchyCircularNode<HierarchyDatumWithParentId>
    console.log('Radius of node:', node.r); // node type is HierarchyCircularNode<HierarchyDatumWithParentId>
});

packRootNode = packRootNode.eachAfter(function (node) {
    console.log('ParentId:', node.data.parentId); // node type is HierarchyCircularNode<HierarchyDatumWithParentId>
    console.log('Radius of node:', node.r); // node type is HierarchyCircularNode<HierarchyDatumWithParentId>
});

packRootNode = packRootNode.eachBefore(function (node) {
    console.log('ParentId:', node.data.parentId); // node type is HierarchyCircularNode<HierarchyDatumWithParentId>
    console.log('Radius of node:', node.r); // node type is HierarchyCircularNode<HierarchyDatumWithParentId>
});

// copy() --------------------------------------------------------------------

let copiedPackNode: d3Hierarchy.HierarchyCircularNode<HierarchyDatumWithParentId>;
copiedPackNode = packRootNode.copy();


// -----------------------------------------------------------------------
// Pack Siblings and Enclosure
// -----------------------------------------------------------------------

interface CircleData extends d3Hierarchy.PackCircle {
    v: string;
}

let circles: Array<CircleData> = [
    { r: 10, v: 'a' },
    { r: 1, v: 'b' },
    { r: 20, v: 'c' }
];

// packSiblings

circles = d3Hierarchy.packSiblings(circles);

// packEnclose

let enclosure: { r: number, x: number, y: number };

enclosure = d3Hierarchy.packEnclose(circles);
