import GLTF from 'gltf';

const animatedCube: GLTF.GLTF = {
    accessors : [
        {
            bufferView : 0,
            byteOffset : 0,
            componentType : 5126,
            count : 3,
            max : [
                2.000000
            ],
            min : [
                0.000000
            ],
            type : "SCALAR" as GLTF.AccessorType.SCALAR
        },
        {
            bufferView : 1,
            byteOffset : 0,
            componentType : 5126,
            count : 3,
            max : [
                0.000000,
                1.000000,
                0.000000,
                1.000000
            ],
            min : [
                0.000000,
                -8.742278e-008,
                0.000000,
                -1.000000
            ],
            type : "VEC4" as GLTF.AccessorType.VEC4
        },
        {
            bufferView : 2,
            byteOffset : 0,
            componentType : 5123,
            count : 36,
            max : [
                35
            ],
            min : [
                0
            ],
            type : "SCALAR" as GLTF.AccessorType.SCALAR
        },
        {
            bufferView : 3,
            byteOffset : 0,
            componentType : 5126,
            count : 36,
            max : [
                1.000000,
                1.000000,
                1.000001
            ],
            min : [
                -1.000000,
                -1.000000,
                -1.000000
            ],
            type : "VEC3" as GLTF.AccessorType.VEC3
        },
        {
            bufferView : 4,
            byteOffset : 0,
            componentType : 5126,
            count : 36,
            max : [
                1.000000,
                1.000000,
                1.000000
            ],
            min : [
                -1.000000,
                -1.000000,
                -1.000000
            ],
            type : "VEC3" as GLTF.AccessorType.VEC3
        },
        {
            bufferView : 5,
            byteOffset : 0,
            componentType : 5126,
            count : 36,
            max : [
                1.000000,
                -0.000000,
                -0.000000,
                1.000000
            ],
            min : [
                0.000000,
                -0.000000,
                -1.000000,
                -1.000000
            ],
            type : "VEC4" as GLTF.AccessorType.VEC4
        },
        {
            bufferView : 6,
            byteOffset : 0,
            componentType : 5126,
            count : 36,
            max : [
                1.000000,
                1.000000
            ],
            min : [
                -1.000000,
                -1.000000
            ],
            type : "VEC2" as GLTF.AccessorType.VEC2
        }
    ],
    animations : [
        {
            channels : [
                {
                    sampler : 0,
                    target : {
                        node : 0,
                        path : "rotation" as GLTF.AnimationChannelTargetPath.ROTATION
                    }
                }
            ],
            name : "animation_AnimatedCube",
            samplers : [
                {
                    input : 0,
                    interpolation : "LINEAR" as GLTF.AnimationSamplerInterpolation.LINEAR,
                    output : 1
                }
            ]
        }
    ],
    asset : {
        generator : "VKTS glTF 2.0 exporter",
        version : "2.0"
    },
    bufferViews : [
        {
            buffer : 0,
            byteLength : 12,
            byteOffset : 0
        },
        {
            buffer : 0,
            byteLength : 48,
            byteOffset : 12
        },
        {
            buffer : 0,
            byteLength : 72,
            byteOffset : 60,
            target : 34963
        },
        {
            buffer : 0,
            byteLength : 432,
            byteOffset : 132,
            target : 34962
        },
        {
            buffer : 0,
            byteLength : 432,
            byteOffset : 564,
            target : 34962
        },
        {
            buffer : 0,
            byteLength : 576,
            byteOffset : 996,
            target : 34962
        },
        {
            buffer : 0,
            byteLength : 288,
            byteOffset : 1572,
            target : 34962
        }
    ],
    buffers : [
        {
            byteLength : 1860,
            uri : "AnimatedCube.bin"
        }
    ],
    images : [
        {
            uri : "AnimatedCube_BaseColor.png"
        },
        {
            uri : "AnimatedCube_MetallicRoughness.png"
        }
    ],
    materials : [
        {
            name : "AnimatedCube",
            pbrMetallicRoughness : {
                baseColorTexture : {
                    index : 0
                },
                metallicRoughnessTexture : {
                    index : 1
                }
            }
        }
    ],
    meshes : [
        {
            name : "AnimatedCube",
            primitives : [
                {
                    attributes : {
                        NORMAL : 4,
                        POSITION : 3,
                        TANGENT : 5,
                        TEXCOORD_0 : 6
                    },
                    indices : 2,
                    material : 0,
                    mode : 4
                }
            ]
        }
    ],
    nodes : [
        {
            mesh : 0,
            name : "AnimatedCube",
            rotation : [
                0.000000,
                -1.000000,
                0.000000,
                0.000000
            ]
        }
    ],
    samplers : [
        {}
    ],
    scene : 0,
    scenes : [
        {
            nodes : [
                0
            ]
        }
    ],
    textures : [
        {
            sampler : 0,
            source : 0
        },
        {
            sampler : 0,
            source : 1
        }
    ]
};

const cameras: GLTF.GLTF = {
    scenes : [
        {
            nodes : [ 0, 1, 2 ]
        }
    ],
    nodes : [
        {
            rotation : [ -0.383, 0.0, 0.0, 0.92375 ],
            mesh : 0
        },
        {
            translation : [ 0.5, 0.5, 3.0 ],
            camera : 0
        },
        {
            translation : [ 0.5, 0.5, 3.0 ],
            camera : 1
        }
    ],

    cameras : [
        {
            type: "perspective" as GLTF.CameraType.PERSPECTIVE,
            perspective: {
                aspectRatio: 1.0,
                yfov: 0.7,
                zfar: 100,
                znear: 0.01
            }
        },
        {
            type: "orthographic" as GLTF.CameraType.ORTHOGRAPHIC,
            orthographic: {
                xmag: 1.0,
                ymag: 1.0,
                zfar: 100,
                znear: 0.01
            }
        }
    ],

    meshes : [
        {
            primitives : [ {
                attributes : {
                    POSITION : 1
                },
                indices : 0
            } ]
        }
    ],

    buffers : [
        {
            uri : "simpleSquare.bin",
            byteLength : 60
        }
    ],
    bufferViews : [
        {
            buffer : 0,
            byteOffset : 0,
            byteLength : 12,
            target : 34963
        },
        {
            buffer : 0,
            byteOffset : 12,
            byteLength : 48,
            target : 34962
        }
    ],
    accessors : [
        {
            bufferView : 0,
            byteOffset : 0,
            componentType : 5123,
            count : 6,
            type : "SCALAR" as GLTF.AccessorType.SCALAR,
            max : [ 3 ],
            min : [ 0 ]
        },
        {
            bufferView : 1,
            byteOffset : 0,
            componentType : 5126,
            count : 4,
            type : "VEC3" as GLTF.AccessorType.VEC3,
            max : [ 1.0, 1.0, 0.0 ],
            min : [ 0.0, 0.0, 0.0 ]
        }
    ],

    asset : {
        version : "2.0"
    }
};

const simpleMorph: GLTF.GLTF = {
    scenes: [
        {
            nodes: [
                0
            ]
        }
    ],
    nodes: [
        {
            mesh: 0
        }
    ],
    meshes: [
        {
            primitives: [
                {
                    attributes: {
                        POSITION: 1
                    },
                    targets: [
                        {
                            POSITION: 2
                        },
                        {
                            POSITION: 3
                        }
                    ],
                    indices: 0
                }
            ],
            weights: [
                0.5,
                0.5
            ]
        }
    ],
    animations: [
        {
            samplers: [
                {
                    input: 4,
                    interpolation: "LINEAR" as GLTF.AnimationSamplerInterpolation.LINEAR,
                    output: 5
                }
            ],
            channels: [
                {
                    sampler: 0,
                    target: {
                        node: 0,
                        path: "weights" as GLTF.AnimationChannelTargetPath.WEIGHTS
                    }
                }
            ]
        }
    ],
    buffers: [
        {
            uri : "simpleMorphGeometry.bin",
            byteLength: 116
        },
        {
            uri : "simpleMorphAnimation.bin",
            byteLength: 60
        }
    ],
    bufferViews: [
        {
            buffer: 0,
            byteOffset: 0,
            byteLength: 6,
            target: 34963
        },
        {
            buffer: 0,
            byteOffset: 8,
            byteLength: 108,
            byteStride: 12,
            target: 34962
        },
        {
            buffer: 1,
            byteOffset: 0,
            byteLength: 20
        },
        {
            buffer: 1,
            byteOffset: 20,
            byteLength: 40
        }
    ],
    accessors: [
        {
            bufferView: 0,
            byteOffset: 0,
            componentType: 5123,
            count: 3,
            type: "SCALAR" as GLTF.AccessorType.SCALAR,
            max: [
                2
            ],
            min: [
                0
            ]
        },
        {
            bufferView: 1,
            byteOffset: 0,
            componentType: 5126,
            count: 3,
            type: "VEC3" as GLTF.AccessorType.VEC3,
            max: [
                1.0,
                0.5,
                0.0
            ],
            min: [
                0.0,
                0.0,
                0.0
            ]
        },
        {
            bufferView: 1,
            byteOffset: 36,
            componentType: 5126,
            count: 3,
            type: "VEC3" as GLTF.AccessorType.VEC3,
            max: [
                0.0,
                1.0,
                0.0
            ],
            min: [
                -1.0,
                0.0,
                0.0
            ]
        },
        {
            bufferView: 1,
            byteOffset: 72,
            componentType: 5126,
            count: 3,
            type: "VEC3" as GLTF.AccessorType.VEC3,
            max: [
                1.0,
                1.0,
                0.0
            ],
            min: [
                0.0,
                0.0,
                0.0
            ]
        },
        {
            bufferView: 2,
            byteOffset: 0,
            componentType: 5126,
            count: 5,
            type: "SCALAR" as GLTF.AccessorType.SCALAR,
            max: [
                4.0
            ],
            min: [
                0.0
            ]
        },
        {
            bufferView: 3,
            byteOffset: 0,
            componentType: 5126,
            count: 10,
            type: "SCALAR" as GLTF.AccessorType.SCALAR,
            max: [
                1.0
            ],
            min: [
                0.0
            ]
        }
    ],
    asset: {
        version: "2.0"
    }
};
