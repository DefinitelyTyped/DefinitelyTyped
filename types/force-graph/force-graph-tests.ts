import ForceGraph from 'force-graph';

const graph = ForceGraph();
graph(new HTMLElement());

const node1: ForceGraph.GraphNode = {id: '1', name: 'node1', val: 123};
const node2: ForceGraph.GraphNode = {id: '2', name: 'node2', val: 321};
const link: ForceGraph.GraphLinkObject = {source: node1, target: node2, type: 'test', id: '3'};

graph
    .graphData({nodes: [], links: []})
    .nodeId('testNode')
    .linkSource('source')
    .linkTarget('target')
    .width(100)
    .height(100)
    .backgroundColor('#FFF')
    .nodeRelSize(4)
    .nodeVal(1)
    .nodeVal('val')
    .nodeVal((node) => node.val)
    .nodeLabel('name')
    .nodeLabel((node) => node.name)
    .nodeColor('color')
    .nodeColor((node) => node.val)
    .nodeAutoColorBy('color')
    .nodeAutoColorBy((node) => node.val)
    .nodeCanvasObject((node, ctx, scale) => {})
    .linkLabel('name')
    .linkLabel((link) => link.type)
    .linkVisibility(true)
    .linkVisibility((link) => true)
    .linkColor('color')
    .linkColor((link) => link.type)
    .emitParticle(link)
    .d3ReheatSimulation()
    .linkAutoColorBy('type')
    .linkAutoColorBy((link) => link.type)
    .linkWidth(1)
    .linkWidth((link) => 1)
    .linkCurvature('curvature')
    .linkCurvature((link) => 0.5)
    .linkCanvasObject((link, ctx, scale) => {})
    .linkDirectionalArrowLength(0)
    .linkDirectionalArrowLength('length')
    .linkDirectionalArrowLength((link) => 0)
    .linkDirectionalArrowColor('color')
    .linkDirectionalArrowColor((link) => link.type)
    .linkDirectionalArrowRelPos(0.5)
    .linkDirectionalArrowRelPos('pos')
    .linkDirectionalArrowRelPos((link) => 0.5)
    .linkDirectionalParticles(0)
    .linkDirectionalParticles('particles')
    .linkDirectionalParticles((link) => 0)
    .linkDirectionalParticleSpeed(0.01)
    .linkDirectionalParticleSpeed('speed')
    .linkDirectionalParticleSpeed((link) => 0.01)
    .linkDirectionalParticleWidth(4)
    .linkDirectionalParticleWidth('width')
    .linkDirectionalParticleWidth((link) => 4)
    .linkDirectionalParticleColor('color')
    .linkDirectionalParticleColor((link) => link.type);

graph.pauseAnimation();
graph.resumeAnimation();
graph.centerAt(0, 0, 0);
graph.zoom(1.0, 0);

graph
    .dagMode('td')
    .dagLevelDistance(1)
    .d3AlphaDecay(0.0228)
    .d3VelocityDecay(0.4)
    .d3Force('link')
    .d3Force('custom', (node) => 1)
    .warmupTicks(0)
    .cooldownTicks(Infinity)
    .cooldownTime(15000)
    .onEngineTick(() => {})
    .onEngineStop(() => {})
    .refresh();

graph
    .onNodeClick(() => {})
    .onNodeRightClick(() => {})
    .onNodeHover(() => {})
    .onNodeDrag(() => {})
    .onNodeDragEnd(() => {})
    .onLinkClick(() => {})
    .onLinkRightClick(() => {})
    .onLinkHover(() => {})
    .linkHoverPrecision(4)
    .enableNodeDrag(true)
    .enableZoomPanInteraction(true)
    .enablePointerInteraction(true);

// Test a property getter
const nodeDraggingEnabled: boolean = graph.enableNodeDrag();
