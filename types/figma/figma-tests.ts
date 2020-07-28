const frame = figma.createFrame();
frame.appendChild(figma.createRectangle());

figma.on('selectionchange', () => {
    figma.currentPage.selection;
});

figma.clientStorage.setAsync('happy', true);
figma.clientStorage.setAsync('happy', { a: 123 });

async () => {
    const { a } = await figma.clientStorage.getAsync('happy');
};

if (frame.cornerRadius !== figma.mixed) {
    frame.topLeftRadius = frame.cornerRadius;
}

figma.closePlugin();
