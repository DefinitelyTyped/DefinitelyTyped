function test(testContext: webvis.ContextAPI, testViewer: webvis.ViewerAPI): void {
    const pointCloudId: number = testViewer.createPointCloud([
        { color: [1, 0, 0, 1], position: [0, 0, 0] },
        { color: [0, 1, 0, 1], position: [0, 2, 0] },
        { color: [0, 0, 1, 1], position: [2, 0, 0] },
        { color: [1, 1, 0, 1], position: [2, 2, 0] },
    ], {
        enabled: true,
        scale: 1,
    });

    testViewer.changePointCloud(1, {
        enabled: false,
        scale: 2,
    });

    testViewer.removePointCloud(1);

    const props: webvis.PointCloudProperties = testViewer.getPointCloudData(1);

    const pointClouds: number[] = testViewer.getPointClouds();
}
