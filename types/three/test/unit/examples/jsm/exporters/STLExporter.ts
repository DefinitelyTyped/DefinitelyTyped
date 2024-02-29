import * as THREE from "three";

import { STLExporter } from "three/examples/jsm/exporters/STLExporter";

const exporter = new STLExporter();
declare const mesh: THREE.Mesh;

function exportASCII() {
    const result = exporter.parse(mesh);
    saveString(result, "box.stl");
}

function exportBinary() {
    const result = exporter.parse(mesh, { binary: true });
    saveArrayBuffer(result, "box.stl");
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
