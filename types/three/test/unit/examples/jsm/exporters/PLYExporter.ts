import * as THREE from "three";

import { PLYExporter } from "three/examples/jsm/exporters/PLYExporter";

const exporter = new PLYExporter();
declare const mesh: THREE.Mesh;

function exportASCII() {
    exporter.parse(mesh, result => {
        saveString(result, "box.ply");
    });
}

function exportBinaryBigEndian() {
    exporter.parse(
        mesh,
        result => {
            saveArrayBuffer(result, "box.ply");
        },
        { binary: true },
    );
}

function exportBinaryLittleEndian() {
    exporter.parse(
        mesh,
        result => {
            saveArrayBuffer(result, "box.ply");
        },
        { binary: true, littleEndian: true },
    );
}

const link = document.createElement("a");
link.style.display = "none";
document.body.appendChild(link);

function save(blob: Blob, filename: string) {
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

function saveString(text: string, filename: string) {
    save(new Blob([text], { type: "text/plain" }), filename);
}

function saveArrayBuffer(buffer: BufferSource, filename: string) {
    save(new Blob([buffer], { type: "application/octet-stream" }), filename);
}
