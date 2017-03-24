let _octree = new THREE.Octree({
    underferred: false,
    depthMax: Infinity,
    objectsThreshold: 8,
    overlapPct: 0.15,
});

console.log(_octree.getDepthEnd());

