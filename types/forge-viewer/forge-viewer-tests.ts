let viewer: Autodesk.Viewing.GuiViewer3D;
const options = {
    env: 'AutodeskProduction',
    api: 'derivativeV2',  // for models uploaded to EMEA change this option to 'derivativeV2_EU'
    accessToken: ''
};

Autodesk.Viewing.Initializer(options, () => {
    const htmlDiv = document.getElementById('forgeViewer');
    if (!htmlDiv)
        return;

    viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv);
    const startedCode = viewer.start();
    if (startedCode > 0) {
        console.error('Failed to create a Viewer: WebGL not supported.');
        return;
    }

    const documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bXktYnVja2V0L215LWF3ZXNvbWUtZm9yZ2UtZmlsZS5ydnQ';
    Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);

    async function onDocumentLoadSuccess(doc: Autodesk.Viewing.Document) {
        await doc.downloadAecModelData();

        const docRoot: Autodesk.Viewing.BubbleNode = doc.getRoot();
        const aecModelData = await Autodesk.Viewing.Document.getAecModelData(docRoot);
        const defaultModel = docRoot.getDefaultGeometry();

        const model = await viewer.loadDocumentNode(doc, defaultModel);

        modelTests(model);
    }

    function onDocumentLoadFailure() {
        console.error('Failed fetching Forge manifest');
    }
});

function modelTests(model: Autodesk.Viewing.Model): void {
    model.isConsolidated();
    model.isLeaflet();
    model.isOTG();
    model.isPageCoordinates();
    model.isPdf();
    model.isSceneBuilder();
    model.isSVF2();
}
