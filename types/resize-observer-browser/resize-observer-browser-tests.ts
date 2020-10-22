function resizeObserverCreates(): void {
    const resizeObserver: ResizeObserver = new ResizeObserver((entries) => {
        const div = document.getElementById('display-div')!;
        const rect = entries[0].contentRect;
        div.textContent = `${rect.left} ${rect.right}`;
    });
    const div = document.getElementById('resized-div')!;
    resizeObserver.observe(div);
    resizeObserver.unobserve(div);
    resizeObserver.disconnect();
}

function resizeObserverCallback(entries: ReadonlyArray<ResizeObserverEntry>): void {
    for (const entry of entries) {
        const rect = entry.contentRect;
        console.log(`Content Rect is ${rect.width}, ${rect.height}`);
        console.log(`Target element ID is ${entry.target.id}`);
        if (entry.borderBoxSize && entry.borderBoxSize.length > 0) {
            const boxSize = entry.borderBoxSize[0];
            console.log(`Border Box Size is ${boxSize.blockSize}, ${boxSize.inlineSize}`);
        }
        if (entry.contentBoxSize && entry.contentBoxSize.length > 0) {
            const boxSize = entry.contentBoxSize[0];
            console.log(`Content Box Size is ${boxSize.blockSize}, ${boxSize.inlineSize}`);
        }
        if (entry.devicePixelContentBoxSize && entry.devicePixelContentBoxSize.length > 0) {
            const boxSize = entry.devicePixelContentBoxSize[0];
            console.log(`Device Pixel Content Box Size is ${boxSize.blockSize}, ${boxSize.inlineSize}`);
        }
    }
}

function resizeObserverOnWindow(): void {
    const resizeObserver: ResizeObserver = new window.ResizeObserver(resizeObserverCallback);
}
