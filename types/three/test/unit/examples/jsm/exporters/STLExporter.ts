import * as THREE from "three";

import { STLExporter } from "three/addons/exporters/STLExporter.js";

const exporter = new STLExporter();
declare const mesh: THREE.Mesh;

function exportASCII() {
    const result = exporter.parse(mesh);
    saveString(result, "box.stl");
}

function exportBinary() {
    const result = exporter.parse(mesh, { binary: true }); // $ExpectType DataView || DataView<ArrayBufferLike>
    saveArrayBuffer(result as BufferSource, "box.stl");
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
