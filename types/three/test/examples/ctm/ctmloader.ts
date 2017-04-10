let _ctmloader = new THREE.CTMLoader();
_ctmloader.load('https://github.com/mrdoob/three.js/blob/master/examples/models/ctm/ben.ctm', (geo: any) => {
    console.log(geo.position);
});

