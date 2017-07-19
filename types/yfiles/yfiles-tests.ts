class BasicTest {
    private graphComponent:yfiles.view.GraphComponent;

    constructor() {
        this.graphComponent = new yfiles.view.GraphComponent("graphControl");

        let graphEditorInputMode = new yfiles.input.GraphEditorInputMode();

        // Modify the MyHitTestable class to be usable with our class framework
        yfiles.lang.Class.injectInterfaces(MyHitTestable.prototype, [yfiles.input.IHitTestable]);
        let myHitTestable = new MyHitTestable();

        if (yfiles.input.IHitTestable.isInstance(myHitTestable)) {
            // If myHitTestable is recognized as instance of yfiles.drawing.IHitTestable by the yFiles class
            // framework, set it as hit testable to prevent clicking any item.
            // If you cannot click-select the nodes in the GraphControl, this worked correctly.
            graphEditorInputMode.clickInputMode.validClickHitTestable = myHitTestable;
        }

        this.graphComponent.inputMode = graphEditorInputMode;

        this.graphComponent.graph.nodeDefaults.style = new yfiles.styles.ShinyPlateNodeStyle({ fill: yfiles.view.Fill.ORANGE });

        this.graphComponent.graph.createNode(new yfiles.geometry.Rect(0, 0, 10, 10), new MyNodeStyle());

        this.layout();
    }

    start() {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                this.graphComponent.graph.createNodeAt(new yfiles.geometry.Point(100 * i, 100 * j));
            }
        }
        this.graphComponent.graph.nodes.forEach((node) => this.graphComponent.graph.addLabel(node, "Label"));
        this.graphComponent.fitGraphBounds();
    }

    /**
     * Runs a layout algorithm and animates the transition to the new layout.
     */
    layout() {
        let layouter = new yfiles.hierarchic.HierarchicLayout();
        let layoutExecutor = new yfiles.layout.LayoutExecutor(this.graphComponent,
            new yfiles.layout.MinimumNodeSizeStage(layouter));

        layoutExecutor.duration = yfiles.lang.TimeSpan.fromSeconds(1);
        layoutExecutor.animateViewport = true;
        layoutExecutor.updateContentRect = true;
        layoutExecutor.start().then(() => {
            return null;
        })
        .catch(error => {
            throw error;
        });
    }

    /**
     * Runs a shortest path analysis.
     */
    analyze() {
        let graph = this.graphComponent.graph;

        // Create the graph model adapter to get a proper analysis graph structure.
        let graphAdapter = new yfiles.layout.YGraphAdapter(graph);

        // Create an array the size of the edge set with costs for each edge.
        let cost = new Array(graph.edges.size);
        for (let i = 0; i < graph.edges.size; i++) {
            cost[i] = Math.random();
        }

        let pred:yfiles.algorithms.Edge[] = null;

        // Suppose the first node from the graph is the node named "Start."
        let startNode = graphAdapter.getCopiedNode(graph.nodes.first());
        // Suppose the last node from the graph is the node named "Destination."
        let destinationNode = graphAdapter.getCopiedNode(graph.nodes.last());

        // Run the single-source single-sink algorithm on the graph.
        let result = yfiles.algorithms.ShortestPaths.singleSourceSingleSink(graphAdapter.yGraph, startNode,
            destinationNode, true, cost, pred);
        // Transfer back the result.
        let predIGraph = new Array(pred.length);
        for (let i = 0; i < pred.length; i++) {
            predIGraph[i] = graphAdapter.getOriginalEdge(pred[i]);
        }
    }

    coreLib() {
        new yfiles.lang.AttributeDefinition(() => { return {} });
        new yfiles.lang.ClassDefinition(() => { return {} });
        new yfiles.lang.EnumDefinition(() => { return {} });
        new yfiles.lang.StructDefinition(() => { return {} });
    }

    namespacesExist() {
        let a01 = new yfiles.algorithms.AbortHandler();
        let a02 = new yfiles.binding.AdjacentNodesGraphBuilder(this.graphComponent.graph);
        let a03 = new yfiles.circular.CircularLayout();
        let a04 = new yfiles.collections.List();
        let a05 = new yfiles.genealogy.FamilyTreeLayout();
        let a06 = new yfiles.geometry.Matrix();
        let a07 = new yfiles.graph.GraphClipboard();
        let a08:yfiles.graphml.ChildParseContext;
        let a09 = new yfiles.hierarchic.AsIsLayerer();
        let a10 = new yfiles.input.GraphEditorInputMode();
        let a11 = new yfiles.labeling.GenericLabeling();
        let a12 = new yfiles.lang.Attribute();
        let a13 = new yfiles.layout.BendConverter();
        let a14 = new yfiles.multipage.DefaultElementFactory();
        let a15 = new yfiles.organic.OrganicLayout();
        let a16 = new yfiles.orthogonal.CompactOrthogonalLayout();
        let a17 = new yfiles.partial.PartialLayout();
        let a18 = new yfiles.radial.RadialLayout();
        let a19 = new yfiles.router.BusRouter();
        let a20 = new yfiles.seriesparallel.SeriesParallelLayout();
        let a21 = new yfiles.styles.ArcEdgeStyle();
        let a22 = new yfiles.tree.AspectRatioTreeLayout();
        let a23 = new yfiles.view.GraphComponent();
        let yfilesNamespace : yfiles_namespace;
    }

    testsForVersion2001() {
        var element:SVGElement;
        yfiles.view.SvgVisual.setScale(element, 4, 2);
        yfiles.view.SvgVisual.setTranslate(element, 4, 2);

        var args = new yfiles.lang.EventArgs();
        yfiles.input.KeyEventRecognizers.META_PRESSED(null, args);
    }
}

class MyHitTestable extends yfiles.lang.BaseClass<Object>(yfiles.input.IHitTestable) implements yfiles.input.IHitTestable {
    isHit(ctx:yfiles.input.IInputModeContext, p:yfiles.geometry.Point):boolean {
        return false;
    }
}

class MyNodeStyle extends yfiles.styles.NodeStyleBase {
    createVisual(renderContext:yfiles.view.IRenderContext, node:yfiles.graph.INode):yfiles.view.SvgVisual {
        let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        return new yfiles.view.SvgVisual(g);
    }
}
