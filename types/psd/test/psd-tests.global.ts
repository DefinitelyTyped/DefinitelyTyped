import "psd/browser";

// Load from URL
PSD.fromURL("/path/to/file.psd").then(psd => {
    document.getElementById("ImageContainer")!.appendChild(psd.image!.toPng());
});

// Load from event, e.g. drag & drop
function onDrop(evt: DragEvent | InputEvent) {
    PSD.fromEvent(evt).then(psd => {
        console.log(psd.tree().export());
    });
}
