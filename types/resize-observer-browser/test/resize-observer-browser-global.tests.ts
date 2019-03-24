function resizeObserverCreatesViaWindow(): void {
    const resizeObserver = new window.ResizeObserver((entries) => {
        const div = document.getElementById('display-div')!;
        const rect = entries[0].contentRect;
        div.textContent = `${rect.left} ${rect.right}`;
    });
    const div = document.getElementById('resized-div')!;
    resizeObserver.observe(div);
    resizeObserver.unobserve(div);
    resizeObserver.disconnect();
}
