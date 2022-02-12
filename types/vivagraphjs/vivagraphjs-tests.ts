import * as Viva from './index.d';

export const createRenderer = (options: { container: HTMLElement; }) => {
    const { container } = options;

    const graphGenerator = Viva.Graph.generator();
    const graph = graphGenerator.grid(10, 10);

    const layout = Viva.Graph.Layout.forceDirected(graph, {
        springLength: 10,
        springCoeff: 0.0005,
        dragCoeff: 0.02,
        gravity: -1.2
    });

    const graphics = Viva.Graph.View.svgGraphics();

    return {
        renderer: Viva.Graph.View.renderer(graph, {
            layout,
            container,
            graphics
        }),
        graphics
    };
};


export const createGraph = () => {

    // Step 1. We create a graph object.
    const graph = Viva.Graph.graph();

    // Step 2. We add nodes and edges to the graph:
    graph.addLink(1, 2);

    /* Note: graph.addLink() creates new nodes if they are not yet
       present in the graph. Thus calling this method is equivalent to:
       graph.addNode(1);
       graph.addNode(2);
       graph.addLink(1, 2);
    */

    // Step 3. Render the graph.
    const renderer = Viva.Graph.View.renderer(graph);
    renderer.run();
};


export const createCustomNode = () => {
    // Step 1. Create a graph:
    const graph = Viva.Graph.graph();

    // Step 2. Add graph content.
    //  graph.addNode(nodeId, yourCustomData) method lets you add new
    //  nodes to the graph and associate them with custom data. In this
    //  case we are associating GitHub user profiles with their Gravatar's images:
    graph.addNode('anvaka', '91bad8ceeec43ae303790f8fe238164b');
    graph.addNode('indexzero', 'd43e8ea63b61e7669ded5b9d3c2e980f');

    graph.addLink('anvaka', 'indexzero');

    // Step 3. Customize node appearance.
    //  Vivagraph can present graph in multiple ways. svgGraphics() - is
    //  the way to render graph in SVG format:
    const graphics = Viva.Graph.View.svgGraphics();

    // This function let us override default node appearance and create
    // something better than blue dots:
    graphics.node((node: { data: any; }) => {
        // node.data holds custom object passed to graph.addNode():
        const url = `https://secure.gravatar.com/avatar/${node.data}`;

        return Viva.Graph.svg('image')
            .attr('width', 24)
            .attr('height', 24)
            .link(url);
    });

    // Usually when you have custom look for nodes, you might want to
    // set their position in a new way too. placeNode() method serves
    // this goal:
    graphics.placeNode((nodeUI: { attr: (arg0: string, arg1: number) => { (): any; new(): any; attr: { (arg0: string, arg1: number): void; new(): any; }; }; }, pos: { x: number; y: number; }) => {
        // nodeUI - is exactly the same object that we returned from
        //   node() callback above.
        // pos - is calculated position for this node.
        nodeUI.attr('x', pos.x - 12).attr('y', pos.y - 12);
    });

    // Step 4. Render the graph with our customized graphics object:
    const renderer = Viva.Graph.View.renderer(graph, {
        graphics
    });
    renderer.run();
};


export const createCustomLink = () => {
    // Step 1. Create a graph:
    const graph = Viva.Graph.graph();

    // Step 2. Add graph content.
    graph.addNode('anvaka', '91bad8ceeec43ae303790f8fe238164b');
    graph.addNode('indexzero', 'd43e8ea63b61e7669ded5b9d3c2e980f');

    graph.addLink('anvaka', 'indexzero');

    // Step 3. Customize node appearance.
    const graphics = Viva.Graph.View.svgGraphics();

    // Nothing changed in these lines. They are the same as in Step 2
    // of this tutorial. Except maybe chaining support:
    graphics.node((node: { data: any; }) => {
        return Viva.Graph.svg('image')
            .attr('width', 24)
            .attr('height', 24)
            .link(`https://secure.gravatar.com/avatar/${node.data}`);
    }).placeNode((nodeUI: { attr: (arg0: string, arg1: number) => { (): any; new(): any; attr: { (arg0: string, arg1: number): void; new(): any; }; }; }, pos: { x: number; y: number; }) => {
        nodeUI.attr('x', pos.x - 12).attr('y', pos.y - 12);
    });

    // Step 4. Customize link appearance:
    //   As you might have guessed already the link()/placeLink()
    //   functions complement the node()/placeNode() functions
    //   and let us override default presentation of edges:
    graphics.link((_link: any) => {
        return Viva.Graph.svg('path')
            .attr('stroke', 'red')
            .attr('stroke-dasharray', '5, 5');
    }).placeLink((linkUI: { attr: (arg0: string, arg1: string) => void; }, fromPos: { x: any; y: any; }, toPos: { x: any; y: any; }) => {
        // linkUI - is the object returend from link() callback above.
        const data = `M${fromPos.x},${fromPos.y
            }L${toPos.x},${toPos.y}`;

        // 'Path data' (http://www.w3.org/TR/SVG/paths.html#DAttribute )
        // is a common way of rendering paths in SVG:
        linkUI.attr('d', data);
    });

    // Step 5. Render the graph with our customized graphics object:
    const renderer = Viva.Graph.View.renderer(graph, {
        graphics
    });
    renderer.run();
};


export const listenToMouseEfvents = () => {
    // As in previous steps, we create a basic structure of a graph:
    const graph = Viva.Graph.graph();

    graph.addNode('anvaka', '91bad8ceeec43ae303790f8fe238164b');
    graph.addNode('indexzero', 'd43e8ea63b61e7669ded5b9d3c2e980f');
    graph.addLink('anvaka', 'indexzero');

    const graphics = Viva.Graph.View.svgGraphics();
    const nodeSize = 24;
    // we use this method to highlight all realted links
    // when user hovers mouse over a node:
    const highlightRelatedNodes = function (nodeId: any, isOn: boolean) {
        // just enumerate all realted nodes and update link color:
        graph.forEachLinkedNode(nodeId, (_node: any, link: { id: any; }) => {
            const linkUI = graphics.getLinkUI(link.id);
            if (linkUI) {
                // linkUI is a UI object created by graphics below
                linkUI.attr('stroke', isOn ? 'red' : 'gray');
            }
        });
    };

    // Since we are using SVG we can easily subscribe to any supported
    // events (http://www.w3.org/TR/SVG/interact.html#SVGEvents ),
    // including mouse events:
    graphics.node((node: { data: any; id: any; }) => {
        const ui = Viva.Graph.svg('image')
            .attr('width', nodeSize)
            .attr('height', nodeSize)
            .link(`https://secure.gravatar.com/avatar/${node.data}`);

        document.querySelector(ui).hover(() => { // mouse over
            highlightRelatedNodes(node.id, true);
        }, () => { // mouse out
            highlightRelatedNodes(node.id, false);
        });
        return ui;
    }).placeNode((nodeUI: { attr: (arg0: string, arg1: number) => { (): any; new(): any; attr: { (arg0: string, arg1: number): void; new(): any; }; }; }, pos: { x: number; y: number; }) => {
        nodeUI.attr('x', pos.x - nodeSize / 2).attr('y', pos.y - nodeSize / 2);
    });

    graphics.link((_link: any) => {
        return Viva.Graph.svg('path')
            .attr('stroke', 'gray');
    }).placeLink((linkUI: { attr: (arg0: string, arg1: string) => void; }, fromPos: { x: any; y: any; }, toPos: { x: any; y: any; }) => {
        const data = `M${fromPos.x},${fromPos.y
            }L${toPos.x},${toPos.y}`;

        linkUI.attr('d', data);
    });

    // Finally render the graph with our customized graphics object:
    const renderer = Viva.Graph.View.renderer(graph, {
        graphics
    });
    renderer.run();
};


export const edgesWithArrow = () => {
    // This demo shows how to create a directional arrow in SVG renderer.
    // Though it might seem wordy it's due to SVG specific operations.
    // The library has minimal SVG manipulation support.
    // Maybe in future some of the following technniques will become part
    // of the library itself...
    const graph = Viva.Graph.graph();

    const graphics = Viva.Graph.View.svgGraphics();
    const nodeSize = 24;


    graphics.node((node: { data: any; }) => {
        return Viva.Graph.svg('image')
            .attr('width', nodeSize)
            .attr('height', nodeSize)
            .link(`https://secure.gravatar.com/avatar/${node.data}`);
    }).placeNode((nodeUI: { attr: (arg0: string, arg1: number) => { (): any; new(): any; attr: { (arg0: string, arg1: number): void; new(): any; }; }; }, pos: { x: number; y: number; }) => {
        nodeUI.attr('x', pos.x - nodeSize / 2).attr('y', pos.y - nodeSize / 2);
    });


    // To render an arrow we have to address two problems:
    //  1. Links should start/stop at node's bounding box, not at the node center.
    //  2. Render an arrow shape at the end of the link.

    // Rendering arrow shape is achieved by using SVG markers, part of the SVG
    // standard: http://www.w3.org/TR/SVG/painting.html#Markers
    const createMarker = function (id: string) {
        return Viva.Graph.svg('marker')
            .attr('id', id)
            .attr('viewBox', '0 0 10 10')
            .attr('refX', '10')
            .attr('refY', '5')
            .attr('markerUnits', 'strokeWidth')
            .attr('markerWidth', '10')
            .attr('markerHeight', '5')
            .attr('orient', 'auto');
    };

    const marker = createMarker('Triangle');
    marker.append('path').attr('d', 'M 0 0 L 10 5 L 0 10 z');

    // Marker should be defined only once in <defs> child element of root <svg> element:
    const defs = graphics.getSvgRoot().append('defs');
    defs.append(marker);

    const geom = Viva.Graph.geom();

    graphics.link((_link: any) => {
        // Notice the Triangle marker-end attribe:
        return Viva.Graph.svg('path')
            .attr('stroke', 'gray')
            .attr('marker-end', 'url(#Triangle)');
    }).placeLink((linkUI: { attr: (arg0: string, arg1: string) => void; }, fromPos: { x: number; y: number; }, toPos: { x: number; y: number; }) => {
        // Here we should take care about
        //  "Links should start/stop at node's bounding box, not at the node center."

        // For rectangular nodes Viva.Graph.geom() provides efficient way to find
        // an intersection point between segment and rectangle
        const toNodeSize = nodeSize;
        const fromNodeSize = nodeSize;

        const from = geom.intersectRect(
            // rectangle:
            fromPos.x - fromNodeSize / 2, // left
            fromPos.y - fromNodeSize / 2, // top
            fromPos.x + fromNodeSize / 2, // right
            fromPos.y + fromNodeSize / 2, // bottom
            // segment:
            fromPos.x, fromPos.y, toPos.x, toPos.y)
            || fromPos; // if no intersection found - return center of the node

        const to = geom.intersectRect(
            // rectangle:
            toPos.x - toNodeSize / 2, // left
            toPos.y - toNodeSize / 2, // top
            toPos.x + toNodeSize / 2, // right
            toPos.y + toNodeSize / 2, // bottom
            // segment:
            toPos.x, toPos.y, fromPos.x, fromPos.y)
            || toPos; // if no intersection found - return center of the node

        const data = `M${from.x},${from.y
            }L${to.x},${to.y}`;

        linkUI.attr('d', data);
    });

    // Finally we add something to the graph:
    graph.addNode('anvaka', '91bad8ceeec43ae303790f8fe238164b');
    graph.addNode('indexzero', 'd43e8ea63b61e7669ded5b9d3c2e980f');
    graph.addLink('anvaka', 'indexzero');

    // All is ready. Render the graph:
    const renderer = Viva.Graph.View.renderer(graph, {
        graphics
    });
    renderer.run();
};



export const compositeNodes = () => {
    // This demo shows how to create an SVG node which is a bit more complex
    // than single image. Do accomplish this we use 'g' element and
    // compose group of elements to represent a node.
    const graph = Viva.Graph.graph();

    const graphics = Viva.Graph.View.svgGraphics();
    const nodeSize = 24;

    graph.addNode('anvaka', '91bad8ceeec43ae303790f8fe238164b');
    graph.addNode('indexzero', 'd43e8ea63b61e7669ded5b9d3c2e980f');
    graph.addLink('anvaka', 'indexzero');

    graphics.node((node: { id: any; data: any; }) => {
        // This time it's a group of elements: http://www.w3.org/TR/SVG/struct.html#Groups
        const ui = Viva.Graph.svg('g');
        // Create SVG text element with user id as content
        const svgText = Viva.Graph.svg('text').attr('y', '-4px').text(node.id);
        const img = Viva.Graph.svg('image')
            .attr('width', nodeSize)
            .attr('height', nodeSize)
            .link(`https://secure.gravatar.com/avatar/${node.data}`);

        ui.append(svgText);
        ui.append(img);
        return ui;
    }).placeNode((nodeUI: { attr: (arg0: string, arg1: string) => void; }, pos: { x: number; y: number; }) => {
        // 'g' element doesn't have convenient (x,y) attributes, instead
        // we have to deal with transforms: http://www.w3.org/TR/SVG/coords.html#SVGGlobalTransformAttribute
        nodeUI.attr('transform',
            `translate(${pos.x - nodeSize / 2},${pos.y - nodeSize / 2
            })`);
    });

    // Render the graph
    const renderer = Viva.Graph.View.renderer(graph, {
        graphics
    });
    renderer.run();
};


export const showDualLinks = () => {
    const graph = Viva.Graph.graph();
    const graphics = Viva.Graph.View.svgGraphics();
    const renderer = Viva.Graph.View.renderer(graph, {
        graphics
    });

    graph.addLink(1, 2, 'Buy');
    graph.addLink(1, 2, 'Sell');

    graphics.link((link: { data: string; }) => {
        const isBuy = (link.data === 'Buy');
        const ui = Viva.Graph.svg('path')
            .attr('stroke', isBuy ? 'red' : 'blue')
            .attr('fill', 'none');

        ui.isBuy = isBuy; // remember for future.

        return ui;
    }).placeLink((linkUI: { isBuy: any; attr: (arg0: string, arg1: string) => void; }, fromPos: { x: any; y: any; }, toPos: { x: any; y: any; }) => {
        // linkUI - is the object returend from link() callback above.
        const ry = linkUI.isBuy ? 10 : 0;
        // using arc command: http://www.w3.org/TR/SVG/paths.html#PathDataEllipticalArcCommands
        const data = `M${fromPos.x},${fromPos.y
            } A 10,${ry},-30,0,1,${toPos.x},${toPos.y}`;

        // 'Path data' (http://www.w3.org/TR/SVG/paths.html#DAttribute )
        // is a common way of rendering paths in SVG:
        linkUI.attr('d', data);
    });

    renderer.run();
};
