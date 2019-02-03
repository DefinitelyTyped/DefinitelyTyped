import * as ForceGraph from 'force-graph';

const graph = ForceGraph(new HTMLElement());

graph
    .graphData([])
    .nodeId('testNode')
    .linkSource('source')
    .linkTarget('target')
    .width(100)
    .height(100)
    .backgroundColor('#FFF')
    .nodeRelSize(4)
    .nodeVal('val')
    .nodeLabel((node) => node.name)
    .nodeColor('color')
    .nodeAutoColorBy('color')
    .nodeCanvasObject((node, ctx, scale) => {})
    .linkLabel('name')
    .linkVisibility(true)
    .linkColor('color')
    .linkAutoColorBy('type')
    .linkWidth(1)
    .linkCurvature(ForceGraph.LinkCurvatureType.Straight)
    .linkCanvasObject((link, ctx, scale) => {})
    .linkDirectionalArrowLength(0)
    .linkDirectionalArrowColor('color')
    .linkDirectionalArrowRelPos(0.5)
    .linkDirectionalParticles(0)
    .linkDirectionalParticleSpeed(0.01)
    .linkDirectionalParticleWidth(4)
    .linkDirectionalParticleColor('color');

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
    .onEngineStop(() => {});

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
if (typeof nodeDraggingEnabled !== "boolean")
    throw new Error('ForceGraph.enableNodeDrag() did not return a result of type boolean as expected');
