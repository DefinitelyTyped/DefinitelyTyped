/// <reference path="yfiles.d.ts"/>

namespace yfilesTest {

    export class BasicTest {
        private graphControl:yfiles.canvas.GraphControl;

        constructor() {
            this.graphControl = new yfiles.canvas.GraphControl.ForId("graphControl");

            var graphEditorInputMode = new yfiles.input.GraphEditorInputMode();

            // Modify the MyHitTestable class to be usable with our class framework
            yfiles.lang.Class.injectInterfaces(MyHitTestable.prototype, [yfiles.drawing.IHitTestable]);
            var myHitTestable = new MyHitTestable();

            if (yfiles.drawing.IHitTestable.isInstance(myHitTestable)) {
                // If myHitTestable is recognized as instance of yfiles.drawing.IHitTestable by the yFiles class
                // framework, set it as hit testable to prevent clicking any item.
                // If you cannot click-select the nodes in the GraphControl, this worked correctly.
                graphEditorInputMode.clickInputMode.validClickHitTestable = myHitTestable;
            }

            this.graphControl.inputMode = graphEditorInputMode;

            this.graphControl.graph.nodeDefaults.style = new yfiles.drawing.ShinyPlateNodeStyle.WithBrush(yfiles.system.Brushes.ORANGE);

            this.graphControl.graph.createNodeWithBoundsAndStyle(new yfiles.geometry.RectD(0, 0, 10, 10), new MyNodeStyle());

            this.layout();
        }

        start() {
            for (var i = 0; i < 5; i++) {
                for (var j = 0; j < 5; j++) {
                    this.graphControl.graph.createNodeWithCenter(new yfiles.geometry.PointD(100 * i, 100 * j));
                }
            }
            this.graphControl.graph.nodes.forEach((node) => this.graphControl.graph.addLabel(node, "Label"));
            this.graphControl.fitGraphBounds();
        }


        /**
         * Runs a layout algorithm and animates the transition to the new layout.
         */
        layout() {
            var layouter = new yfiles.hierarchic.IncrementalHierarchicLayouter();
            var layoutExecutor = new yfiles.graph.LayoutExecutor.FromControlAndLayouter(this.graphControl,
                new yfiles.layout.MinNodeSizeStage(layouter));

            layoutExecutor.duration = yfiles.system.TimeSpan.fromSeconds(1);
            layoutExecutor.animateViewport = true;
            layoutExecutor.updateContentRect = true;
            layoutExecutor.finishHandler = function (s, args) {
                if (args instanceof yfiles.graph.LayoutExceptionEventArgs && typeof(window.console) !== "undefined") {
                    var exception = args.exception;
                    console.log(exception.message);
                }
            };
            layoutExecutor.start();
        }

        /**
         * Runs a shortest path analysis.
         */
        analyze() {
            var graph = this.graphControl.graph;

            // Create the graph model adapter to get a proper analysis graph structure.
            var graphAdapter = new yfiles.graph.YGraphAdapter(graph);

            // Create an array the size of the edge set with costs for each edge.
            var cost = new Array(graph.edges.count);
            for (var i = 0; i < graph.edges.count; i++) {
                cost[i] = Math.random();
            }

            var pred:yfiles.algorithms.Edge[] = null;

            // Suppose the first node from the graph is the node named "Start."
            var startNode = graphAdapter.getCopiedNode(graph.nodes.getFirstElement());
            // Suppose the last node from the graph is the node named "Destination."
            var destinationNode = graphAdapter.getCopiedNode(graph.nodes.getLastElement());

            // Run the single-source single-sink algorithm on the graph.
            var result = yfiles.algorithms.ShortestPaths.singleSourceSingleSinkToArray(graphAdapter.yGraph, startNode,
                destinationNode, true, cost, pred);
            // Transfer back the result.
            var predIGraph = new Array(pred.length);
            for (var i = 0; i < pred.length; i++) {
                predIGraph[i] = graphAdapter.getOriginalEdge(pred[i]);
            }
        }

        coreLib() {
            new yfiles.AttributeDefinition(() => { return {} });
            new yfiles.ClassDefinition(() => { return {} });
            new yfiles.EnumDefinition(() => { return {} });
            new yfiles.StructDefinition(() => { return {} });
        }

        namespacesExist() {
            new yfiles.algorithms.AbortHandler();
            new yfiles.binding.AdjacentEdgesGraphSource();
            new yfiles.canvas.CanvasContainer();
            new yfiles.circular.CircularLayouter();
            new yfiles.collections.HashSet();
            new yfiles.drawing.ArcEdgeStyle();
            new yfiles.genealogy.FamilyTreeLayouter();
            new yfiles.geometry.Matrix2D();
            new yfiles.graph.YGraphAdapter(this.graphControl.graph);
            var a:yfiles.graphml.ChildParseContext;
            new yfiles.hierarchic.AsIsLayerer();
            new yfiles.labeling.GreedyMISLabeling();
            var b:yfiles.lang.Abstract;
            new yfiles.layout.BendConverter();
            new yfiles.markup.ArrayExtension();
            new yfiles.model.BridgeManager();
            var c:yfiles.multipage.IEdgeInfo;
            var d:yfiles.objectcollections.ICollection;
            new yfiles.organic.GroupedShuffleLayouter();
            new yfiles.orthogonal.CompactOrthogonalLayouter();
            var e = yfiles.partial.ComponentAssignmentStrategy.CLUSTERING;
            var f = yfiles.radial.CenterNodesPolicy.CENTRALITY;
            new yfiles.random.RandomLayouter();
            var g:yfiles.router.BusDescriptor;
            new yfiles.seriesparallel.SeriesParallelLayouter();
            var h:yfiles.support.AbstractContextLookupChainLink;
            new yfiles.system.ApplicationException();
            new yfiles.tree.ARTreeLayouter();
        }
    }

    class MyHitTestable implements yfiles.drawing.IHitTestable {
        isHit(p:yfiles.geometry.PointD, ctx:yfiles.canvas.ICanvasContext):boolean {
            return false;
        }
    }

    class MyNodeStyle extends yfiles.drawing.SimpleAbstractNodeStyle<yfiles.drawing.RectVisual> {
        constructor() {
            super(null);
        }
        createVisual(node:yfiles.graph.INode, renderContext:yfiles.drawing.IRenderContext):yfiles.drawing.RectVisual {
            return new yfiles.drawing.RectVisual.FromRectangle(new yfiles.geometry.Rectangle(0, 0, 10, 10));
        }
    }
}
