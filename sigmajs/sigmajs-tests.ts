/// <reference path="sigmajs.d.ts"/>
module SigmaJsTests {
    var container = document.createElement("sigma");
    var settings = new sigma.classes.configurable({
        autoResize: true,
        autoRescale: true
    })
    var s = new sigma({
        settings: settings
    });

    s.addRenderer({
        type: 'canvas',
        container: container
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
}
