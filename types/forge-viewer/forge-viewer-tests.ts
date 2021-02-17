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

        globalTests();
        bubbleNodeTests();
        fragListTests(model);
        modelTests(model);
        await dataVizTests(viewer);
        await edit2DTests(viewer);
        await measureTests(viewer);
    }

    function onDocumentLoadFailure() {
        console.error('Failed fetching Forge manifest');
    }
});

function globalTests(): void {
    const urn = 'urn:adsk.wipdm:fs.file:vf.vSenZnaYQAOAZqzHB54kLQ?version=1';
    const urnBase64 = Autodesk.Viewing.toUrlSafeBase64(urn);

    const urn2 = Autodesk.Viewing.fromUrlSafeBase64(urnBase64);
}

function bubbleNodeTests(): void {
    // $ExpectType string
    const lineageUrn = Autodesk.Viewing.BubbleNode.parseLineageUrnFromEncodedUrn('dXJuOmFkc2sud2lwc3RnOmZzLmZpbGU6dmYuM3Q4QlBZQXJSSkNpZkFZUnhOSnM0QT92ZXJzaW9uPTI');
}

async function dataVizTests(viewer: Autodesk.Viewing.GuiViewer3D): Promise<void> {
    const ext = await viewer.loadExtension('Autodesk.DataVisualization') as Autodesk.Extensions.DataVisualization;
    const heatmapData = new Autodesk.DataVisualization.SurfaceShadingData();
    const level = new Autodesk.DataVisualization.SurfaceShadingGroup('level');
    const room1 = new Autodesk.DataVisualization.SurfaceShadingNode('room1', 2120);

    room1.addPoint(new Autodesk.DataVisualization.SurfaceShadingPoint('sensor1', { x: 10, y: 10, z: 0 }, [ 'temperature' ]));
    level.addChild(room1);
    const room2 = new Autodesk.DataVisualization.SurfaceShadingNode('room2', 2121);

    room2.addPoint(new Autodesk.DataVisualization.SurfaceShadingPoint('sensor2', { x: 20, y: 20, z: 0 }, [ 'temperature' ]));
    level.addChild(room2);
    heatmapData.addChild(level);
    heatmapData.initialize(viewer.model);
    ext.setupSurfaceShading(viewer.model, heatmapData);
    ext.registerSurfaceShadingColors('temperature', [ 0xff0000, 0x0000ff ]);

    const getSensorValue = (device: any, sensorType: any) => {
        const value = Math.random();

        return value;
    };

    ext.renderSurfaceShading('level', 'temperature', getSensorValue);
}

function modelTests(model: Autodesk.Viewing.Model): void {
    model.isConsolidated();
    model.isLeaflet();
    model.isOTG();
    model.isPageCoordinates();
    model.isPdf();
    model.isSceneBuilder();
    model.isSVF2();
}

async function edit2DTests(viewer: Autodesk.Viewing.GuiViewer3D): Promise<void> {
    const ext = await viewer.loadExtension('Autodesk.Edit2D') as Autodesk.Extensions.Edit2D;

    ext.registerDefaultTools();
    // activate polygon tool
    const polyTool = ext.defaultTools.polygonTool;

    viewer.toolController.activateTool(polyTool.getName());
    // boolean operations
    const rectOne = new Autodesk.Edit2D.Polygon();

    rectOne.addPoint(2, 1);
    rectOne.addPoint(-2, 1);
    rectOne.addPoint(-2, -1);
    rectOne.addPoint(2, -1);
    rectOne.addPoint(2, 1);
    const rectTwo = new Autodesk.Edit2D.Polygon();

    rectOne.addPoint(1, 2);
    rectOne.addPoint(-1, 2);
    rectOne.addPoint(-1, -2);
    rectOne.addPoint(1, -2);
    rectOne.addPoint(1, 2);
    // calculate results
    const resIntersect = Autodesk.Edit2D.BooleanOps.apply(rectOne, rectTwo, Autodesk.Edit2D.BooleanOps.Operator.Intersect);
    const resUnion = Autodesk.Edit2D.BooleanOps.apply(rectOne, rectTwo, Autodesk.Edit2D.BooleanOps.Operator.Union);
    const resDifference = Autodesk.Edit2D.BooleanOps.apply(rectOne, rectTwo, Autodesk.Edit2D.BooleanOps.Operator.Difference);
    const resXor = Autodesk.Edit2D.BooleanOps.apply(rectOne, rectTwo, Autodesk.Edit2D.BooleanOps.Operator.Xor);
}

function fragListTests(model: Autodesk.Viewing.Model): void {
    const fragId = 1; // hard coded value for testing
    const fragList = model.getFragmentList();

    fragList.updateAnimTransform(fragId, undefined, undefined, new THREE.Vector3(10, 10, 10));
    const s = new THREE.Vector3();
    const r = new THREE.Quaternion();
    const t = new THREE.Vector3();

    // $ExpectType boolean
    fragList.getAnimTransform(fragId, s, r, t);
}

async function measureTests(viewer: Autodesk.Viewing.GuiViewer3D): Promise<void> {
    const ext = await viewer.loadExtension('Autodesk.Measure') as Autodesk.Extensions.Measure.MeasureExtension;

    ext.sharedMeasureConfig.units = 'in';
    ext.calibrateByScale('in', 0.0254);
}
