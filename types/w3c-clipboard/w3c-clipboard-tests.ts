async function readClipboardItems() {
    const items = await navigator.clipboard.read();
    for (const item of items) {
        console.log(
            `clipboard item:
         delayed: ${item.delayed}
         lastModified: ${item.lastModified}
         presentationStyle: ${item.presentationStyle}
         has types: ${item.types.join(',')}
         data with size: ${(await item.getType(item.types[0])).size}
      `);
    }
}

async function writeClipboardItems() {
    const stringItem = new ClipboardItem(
        { 'text/plain': 'hello', 'text/html': '<p>hello' },
        { presentationStyle: 'inline' },
    );
    const delayedStringItem = ClipboardItem.createDelayed({ 'text/plain': () => 'goodbye' });
    const blobItem = new ClipboardItem({ 'application/json': new Blob(['blobbity']) });
    await navigator.clipboard.write([stringItem, delayedStringItem, blobItem]);
}
