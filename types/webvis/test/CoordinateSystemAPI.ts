function test(testContext: webvis.ContextAPI): void {
    const coordFwdVec: [number, number, number] | Float32Array = testContext.getCoordinateSystemForwardVector();

    const coordUpVec: [number, number, number] | Float32Array = testContext.getCoordinateSystemUpVector();

    const coordRightVec: [number, number, number] | Float32Array = testContext.getCoordinateSystemRightVector();

    const coordMat: [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
    ] | Float32Array = testContext.getCoordinateSystemMatrix();
}
