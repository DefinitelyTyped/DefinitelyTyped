/// <reference path="sigmajs.d.ts"/>
module SigmaJsTests {
    var container = document.createElement("sigma");
    var s = new sigma({
        settings: {
            autoResize: true,
            autoRescale: true
        }
    });

    s.settings({
      maxNodeSize: 10
    });

    s.settings("maxNodeSize");

    s.addRenderer({
        type: 'canvas',
        container: container
    });

    s.bind('clickNode', (e) => {
        s.refresh();
    });

    var N = 100;
    var E = 500;
    // Generate a random graph:
    for (var i = 0; i < N; i++) {
      s.graph.addNode({
        id: 'n' + i,
        label: 'Node ' + i,
        x: Math.random(),
        y: Math.random(),
        size: Math.random(),
        color: '#666'
      });
    }

    for (var j = 0; j < E; j++) {
      s.graph.addEdge({
        id: 'e' + j,
        source: 'n' + Math.floor(Math.random() * N),
        target: 'n' + Math.floor(Math.random() * N),
        size: Math.random(),
        color: '#ccc'
      });
    }

    sigma.plugins.dragNodes(s, s.renderers[0]);
    s.renderers[0].resize();
    s.refresh();

    sigma.parsers.json('myGraph.json', s, () => {
        s.refresh();
    });

    sigma.parsers.gexf('myGraph.gexf', s, () => {
        s.refresh();
    });

    s.configForceAtlas2({
        worker: true
    });

    s.isForceAtlas2Running();
    s.killForceAtlas2();
    s.startForceAtlas2();
    s.stopForceAtlas2();

    s.cameras[0].goTo({
        angle: 0,
        x: 100,
        y: 100,
        ratio: 1
    });
}
