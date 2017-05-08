window.onload = () => {
    const canvas: HTMLCanvasElement = document.createElement("canvas") as HTMLCanvasElement;
    const gl: WebGL2RenderingContext | null = canvas.getContext("webgl2", { antialias: false} );

    if (gl === null) {
        console.log("WebGL2 not available");
        return;
    }

    const maxsize = gl.getParameter(gl.MAX_3D_TEXTURE_SIZE);
    console.log(`Attempting to create super useful, empty, NPOT 3D texture of size ${maxsize} x 13 x 5...`);

    const texture = gl.createTexture();

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_3D, texture);
    gl.texImage3D(gl.TEXTURE_3D, 0, gl.R32F, maxsize, 13, 5, 0, gl.RED, gl.FLOAT, null);

    if (gl.getError() !== gl.NO_ERROR) {
        console.log("Oh noes!");
    } else {
        console.log("Success!");
    }

    gl.deleteTexture(texture);
};
