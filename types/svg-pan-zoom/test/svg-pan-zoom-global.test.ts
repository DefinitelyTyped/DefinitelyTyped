const panZoom = svgPanZoom(document.querySelector<SVGSVGElement>("svg")!);
panZoom.pan({x: 5, y: 10});
panZoom.zoom(3);
panZoom.getPan();
panZoom.getZoom();
panZoom.disablePan();
panZoom.enablePan();
panZoom.setOnPan(newPan => {
    console.log(newPan.x, newPan.y);
});

svgPanZoom("svg", {
    panEnabled: false,
    zoomEnabled: true,
    minZoom: 1,
    maxZoom: 10,
    onZoom: newZoom => console.log(newZoom)
})
