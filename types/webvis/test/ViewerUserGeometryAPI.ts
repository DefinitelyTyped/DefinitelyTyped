function test(testContext: webvis.ContextAPI, testViewer: webvis.ViewerAPI): void {
    const userGeoData: webvis.UserGeometryData = {
        identifier: "test geometry",
        matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        volume: [0, 0, 0, 1, 1, 1],
        appearance: {
            diffuse: [1, 0, 0],
            emissive: [0, 0, 0],
            specular: [0.2, 0.2, 0.2],
        },
        selector: "test selector",
        enabled: true,
        occluder: false,
        geometry: {
            buffers: {
                position: {
                    buffer: {
                        data: [0, 0, 0, 1, 1, 1, 2, 2, 2],
                        resourceType: 5126,
                    },
                    attributes: {
                        position: {
                            resourceType: 5126,
                            componentCount: 3,
                            normalize: false,
                            stride: 0,
                            offset: 0,
                        },
                    },
                },
            },
            primitiveType: 4,
            numElements: 1,
        },
        pointSize: 4,
    };

    const userGeoId: number = testViewer.createGeometry(userGeoData);

    testViewer.updateGeometry(userGeoId, userGeoData);

    testViewer.removeGeometry(2);
}
