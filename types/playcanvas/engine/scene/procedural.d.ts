declare namespace pc {

    /**
     * @function
     * @name pc.calculateNormals
     * @description Generates normal information from the specified positions and triangle indices. See {@link pc.createMesh}.
     * @param {Number[]} positions An array of 3-dimensional vertex positions.
     * @param {Number[]} indices An array of triangle indices.
     * @returns {Number[]} An array of 3-dimensional vertex normals.
     * @example
     * var normals = pc.calculateNormals(positions, indices);
     * var tangents = pc.calculateTangents(positions, normals, uvs, indices);
     * var mesh = pc.createMesh(positions, normals, tangents, uvs, indices);
     * @author Will Eas
     * tcott
     */
    function calculateNormals(positions: number[], indices: number[]): number[];

    /**
     * @function
     * @name pc.calculateTangents
     * @description Generates tangent information from the specified positions, normals, texture coordinates
     * and triangle indices. See {@link pc.createMesh}.
     * @param {Number[]} positions An array of 3-dimensional vertex positions.
     * @param {Number[]} normals An array of 3-dimensional vertex normals.
     * @param {Number[]} uvs An array of 2-dimensional vertex texture coordinates.
     * @param {Number[]} indices An array of triangle indices.
     * @returns {Number[]} An array of 3-dimensional vertex tangents.
     * @example
     * var tangents = pc.calculateTangents(positions, normals, uvs, indices);
     * var mesh = pc.createMesh(positions, normals, tangents, uvs, indices);
     * @author Will Eastcott
     */
    function calculateTangents(positions: number[], normals: number[], uvs: number[], indices: number[]): number[];

    /**
     * @function
     * @name pc.createMesh
     * @description Creates a new mesh object from the supplied vertex information and topology.
     * @param {pc.GraphicsDevice} device The graphics device used to manage the mesh.
     * @param {Number[]} positions An array of 3-dimensional vertex positions.
     * @param {Object} opts An object that specifies optional inputs for the function as follows:
     * @param {Number[]} opts.normals An array of 3-dimensional vertex normals.
     * @param {Number[]} opts.tangents An array of 3-dimensional vertex tangents.
     * @param {Number[]} opts.colors An array of 4-dimensional vertex colors.
     * @param {Number[]} opts.uvs An array of 2-dimensional vertex texture coordinates.
     * @param {Number[]} opts.uvs1 Same as opts.uvs, but for additional UV set
     * @param {Number[]} opts.indices An array of triangle indices.
     * @returns {pc.Mesh} A new Geometry constructed from the supplied vertex and triangle data.
     * @example
     * // Create a new mesh supplying optional parameters using object literal notation
     * var mesh = pc.createMesh(
     *     graphicsDevice,
     *     positions,
     *     {
     *         normals: treeNormals,
     *         uvs: treeUvs,
     *         indices: treeIndices
     *     });
     * @author Will Eastcott
     */
    function createMesh(device: pc.GraphicsDevice, positions: number[], opts: {
        normals: number[],
        tangents: number[],
        colors: number[],
        uvs: number[],
        uvs1: number[],
        indices: number[],
    }): pc.Mesh;

    /**
     * @function
     * @name pc.createTorus
     * @description Creates a procedural torus-shaped mesh.
     * The size, shape and tesselation properties of the torus can be controlled via function parameters.
     * By default, the function will create a torus in the XZ-plane with a tube radius of 0.2, a ring radius
     * of 0.3, 20 segments and 30 sides.<br />
     * Note that the torus is created with UVs in the range of 0 to 1. Additionally, tangent information
     * is generated into the vertex buffer of the torus's mesh.<br />
     * @param {pc.GraphicsDevice} device The graphics device used to manage the mesh.
     * @param {Object} opts An object that specifies optional inputs for the function as follows:
     * @param {Number} opts.tubeRadius The radius of the tube forming the body of the torus (defaults to 0.2).
     * @param {Number} opts.ringRadius The radius from the centre of the torus to the centre of the tube (defaults to 0.3).
     * @param {Number} opts.segments The number of radial divisions forming cross-sections of the torus ring (defaults to 20).
     * @param {Number} opts.sides The number of divisions around the tubular body of the torus ring (defaults to 30).
     * @returns {pc.Mesh} A new torus-shaped mesh.
     * @author Will Eastcott
     */
    function createTorus(device: pc.GraphicsDevice, opts: {
        tubeRadius: number,
        ringRadius: number,
        segments: number,
        sides: number
    }): pc.Mesh;

    /**
     * @function
     * @name pc.createCylinder
     * @description Creates a procedural cylinder-shaped mesh.
     * The size, shape and tesselation properties of the cylinder can be controlled via function parameters.
     * By default, the function will create a cylinder standing vertically centred on the XZ-plane with a radius
     * of 0.5, a height of 1.0, 1 height segment and 20 cap segments.<br />
     * Note that the cylinder is created with UVs in the range of 0 to 1. Additionally, tangent information
     * is generated into the vertex buffer of the cylinder's mesh.<br />
     * @param {pc.GraphicsDevice} device The graphics device used to manage the mesh.
     * @param {Object} opts An object that specifies optional inputs for the function as follows:
     * @param {Number} opts.radius The radius of the tube forming the body of the cylinder (defaults to 0.5).
     * @param {Number} opts.height The length of the body of the cylinder (defaults to 1.0).
     * @param {Number} opts.heightSegments The number of divisions along the length of the cylinder (defaults to 5).
     * @param {Number} opts.capSegments The number of divisions around the tubular body of the cylinder (defaults to 20).
     * @returns {pc.Mesh} A new cylinder-shaped mesh.
     * @author Will Eastcott
     */
    function createCylinder(device: pc.GraphicsDevice, opts: {
        radius: number,
        height: number,
        heightSegments: number,
        capSegments: number,
    }): pc.Mesh;

    /**
     * @function
     * @name pc.createCapsule
     * @description Creates a procedural capsule-shaped mesh.
     * The size, shape and tesselation properties of the capsule can be controlled via function parameters.
     * By default, the function will create a capsule standing vertically centred on the XZ-plane with a radius
     * of 0.25, a height of 1.0, 1 height segment and 10 cap segments.<br />
     * Note that the capsule is created with UVs in the range of 0 to 1. Additionally, tangent information
     * is generated into the vertex buffer of the capsule's mesh.<br />
     * @param {pc.GraphicsDevice} device The graphics device used to manage the mesh.
     * @param {Object} opts An object that specifies optional inputs for the function as follows:
     * @param {Number} opts.radius The radius of the tube forming the body of the capsule (defaults to 0.3).
     * @param {Number} opts.height The length of the body of the capsule from tip to tip (defaults to 1.0).
     * @param {Number} opts.heightSegments The number of divisions along the tubular length of the capsule (defaults to 1).
     * @param {Number} opts.sides The number of divisions around the tubular body of the capsule (defaults to 20).
     * @returns {pc.Mesh} A new cylinder-shaped mesh.
     * @author Will Eastcott
     */
    function createCapsule(device: pc.GraphicsDevice, opts: {
        radius: number,
        height: number,
        heightSegments: number,
        sides: number
    }): pc.Mesh;

    /**
     * @function
     * @name pc.createCone
     * @description Creates a procedural cone-shaped mesh.</p>
     * The size, shape and tesselation properties of the cone can be controlled via function parameters.
     * By default, the function will create a cone standing vertically centred on the XZ-plane with a base radius
     * of 0.5, a height of 1.0, 5 height segments and 20 cap segments.<br />
     * Note that the cone is created with UVs in the range of 0 to 1. Additionally, tangent information
     * is generated into the vertex buffer of the cone's mesh.<br />
     * @param {pc.GraphicsDevice} device The graphics device used to manage the mesh.
     * @param {Object} opts An object that specifies optional inputs for the function as follows:
     * @param {Number} opts.baseRadius The base radius of the cone (defaults to 0.5).
     * @param {Number} opts.peakRadius The peak radius of the cone (defaults to 0.0).
     * @param {Number} opts.height The length of the body of the cone (defaults to 1.0).
     * @param {Number} opts.heightSegments The number of divisions along the length of the cone (defaults to 5).
     * @param {Number} opts.capSegments The number of divisions around the tubular body of the cone (defaults to 18).
     * @returns {pc.Mesh} A new cone-shaped mesh.
     * @author Will Eastcott
     */
    function createCone(device: pc.GraphicsDevice, opts: {
        baseRadius: number,
        peakRadius: number,
        height: number,
        heightSegments: number,
        capSegments: number
    }): pc.Mesh;

    /**
     * @function
     * @name pc.createSphere
     * @description Creates a procedural sphere-shaped mesh.
     * The size and tesselation properties of the sphere can be controlled via function parameters. By
     * default, the function will create a sphere centred on the object space origin with a radius of 0.5
     * and 16 segments in both longitude and latitude.<br />
     * Note that the sphere is created with UVs in the range of 0 to 1. Additionally, tangent information
     * is generated into the vertex buffer of the sphere's mesh.<br />
     * @param {pc.GraphicsDevice} device The graphics device used to manage the mesh.
     * @param {Object} opts An object that specifies optional inputs for the function as follows:
     * @param {Number} opts.radius The radius of the sphere (defaults to 0.5).
     * @param {Number} opts.segments The number of divisions along the longitudinal and latitudinal axes of the sphere (defaults to 16).
     * @returns {pc.Mesh} A new sphere-shaped mesh.
     * @author Will Eastcott
     */
    function createSphere(device: pc.GraphicsDevice, opts: {
        radius: number,
        segments: number
    }): pc.Mesh;

    /**
     * @function
     * @name pc.createPlane
     * @description Creates a procedural plane-shaped mesh.
     * The size and tesselation properties of the plane can be controlled via function parameters. By
     * default, the function will create a plane centred on the object space origin with a width and
     * length of 1.0 and 5 segments in either axis (50 triangles). The normal vector of the plane is aligned
     * along the positive Y axis.<br />
     * Note that the plane is created with UVs in the range of 0 to 1. Additionally, tangent information
     * is generated into the vertex buffer of the plane's mesh.<br />
     * @param {pc.GraphicsDevice} device The graphics device used to manage the mesh.
     * @param {Object} opts An object that specifies optional inputs for the function as follows:
     * @param {pc.Vec2} opts.halfExtents The half dimensions of the plane in the X and Z axes (defaults to [0.5, 0.5]).
     * @param {Number} opts.widthSegments The number of divisions along the X axis of the plane (defaults to 5).
     * @param {Number} opts.lengthSegments The number of divisions along the Z axis of the plane (defaults to 5).
     * @returns {pc.Mesh} A new plane-shaped mesh.
     * @author Will Eastcott
     */
    function createPlane(device: pc.GraphicsDevice, opts: {
        halfExtents: pc.Vec2,
        widthSegments: number,
        lenghtSegments: number
    }): pc.Mesh;

    /**
     * @function
     * @name pc.createBox
     * @description Creates a procedural box-shaped mesh.
     * The size, shape and tesselation properties of the box can be controlled via function parameters. By
     * default, the function will create a box centred on the object space origin with a width, length and
     * height of 1.0 unit and 10 segments in either axis (50 triangles per face).<br />
     * Note that the box is created with UVs in the range of 0 to 1 on each face. Additionally, tangent
     * information is generated into the vertex buffer of the box's mesh.<br />
     * @param {pc.GraphicsDevice} device The graphics device used to manage the mesh.
     * @param {Object} opts An object that specifies optional inputs for the function as follows:
     * @param {pc.Vec3} opts.halfExtents The half dimensions of the box in each axis (defaults to [0.5, 0.5, 0.5]).
     * @param {Number} opts.widthSegments The number of divisions along the X axis of the box (defaults to 1).
     * @param {Number} opts.lengthSegments The number of divisions along the Z axis of the box (defaults to 1).
     * @param {Number} opts.heightSegments The number of divisions along the Y axis of the box (defaults to 1).
     * @return {pc.Mesh} A new box-shaped mesh.
     * @author Will Eastcott
     */
    function createBox(device: pc.GraphicsDevice, opts: {
        halfExtents: pc.Vec3,
        widthSegments: number,
        lengthSegments: number,
        heightSegments: number
    }): pc.Mesh;
}
