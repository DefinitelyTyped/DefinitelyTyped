import * as itowns from "itowns";
import * as THREE from "three";

const viewerDiv = document.getElementById("viewerDiv") as HTMLDivElement;
viewerDiv.style.display = "block";
const view = new itowns.View("EPSG:3946", viewerDiv);
view.mainLoop.gfxEngine.renderer.setClearColor(0xcccccc);

const controls = new itowns.FirstPersonControls(view, { focusOnClick: true });

let eptLayer: itowns.EntwinePointTileLayer;
let eptSource: itowns.EntwinePointTileSource;

function onLayerReady() {
    const camera = view.camera.camera3D as THREE.PerspectiveCamera;

    const lookAt = new THREE.Vector3();
    const size = new THREE.Vector3();
    eptLayer.root.bbox.getSize(size);
    eptLayer.root.bbox.getCenter(lookAt);

    camera.far = 2.0 * size.length();

    const position = eptLayer.root.bbox.min.clone()
        .add(size.multiply(new THREE.Vector3(0, 0, size.x / size.z)));

    camera.position.copy(position);
    camera.lookAt(lookAt);

    controls.options.moveSpeed = size.length();

    view.notifyChange(camera);
    controls.reset();
}

function readEPTURL() {
    const url = (document.getElementById("ept_url") as HTMLInputElement).value
        || new URL(location.href).searchParams.get("ept");

    if (url) {
        loadEPT(url);

        // tslint:disable-next-line:prefer-template
        (document.getElementById("share") as HTMLDivElement).innerHTML = "<a href=\""
            + location.href.replace(location.search, "")
            + "?ept=" + url
            + "\" target=\"_blank\">Link to share this view</a>";
        (document.getElementById("ept_url") as HTMLInputElement).value = url;
    }
}

function loadEPT(url: string) {
    eptSource = new itowns.EntwinePointTileSource({ url });

    if (eptLayer) {
        view.removeLayer("Entwine Point Tile");
        view.notifyChange();
    }

    eptLayer = new itowns.EntwinePointTileLayer("Entwine Point Tile", {
        source: eptSource,
        crs: view.referenceCrs,
    });

    view.addLayer(eptLayer).then(onLayerReady);

    function dblClickHandler(event: MouseEvent) {
        const pick = view.pickObjectsAt(event, 5, eptLayer);

        for (const p of pick) {
            console.info(
                // tslint:disable-next-line:prefer-template
                "Selected point #" + p.index + " in position ("
                    + p.object.position.x + ", "
                    + p.object.position.y + ", "
                    + p.object.position.z
                    + ") - node " + p.object.userData.node.id,
            );
        }
    }
    view.domElement.addEventListener("dblclick", dblClickHandler);
}

function loadGrandLyon() {
    (document.getElementById("ept_url") as HTMLInputElement).value =
        "https://download.data.grandlyon.com/files/grandlyon/imagerie/mnt2018/lidar/ept/";
    readEPTURL();
}

readEPTURL();
