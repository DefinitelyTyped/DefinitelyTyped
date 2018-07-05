

import donna = require("donna");
var metadata = donna.generateMetadata(['/path/to/my-module', '/path/to/another-module']);

metadata = {
    "files": {
        "spec/metadata_templates/classes/class_with_prototype_properties.coffee": {
            "objects": {
                "3": {
                    "0": {
                        "type": "class",
                        "name": "TextBuffer",
                        "bindingType": null,
                        "classProperties": [],
                        "prototypeProperties": [
                            [
                                4,
                                9
                            ],
                            [
                                11,
                                11
                            ]
                        ],
                        "doc": " Public: A mutable text container with undo/redo support and the ability to\nannotate logical regions in the text.\n\n ",
                        "range": [
                            [
                                3,
                                0
                            ],
                            [
                                11,
                                17
                            ]
                        ]
                    }
                },
                "4": {
                    "9": {
                        "name": "prop2",
                        "type": "primitive",
                        "range": [
                            [
                                4,
                                9
                            ],
                            [
                                4,
                                13
                            ]
                        ],
                        "bindingType": "prototypeProperty"
                    }
                },
                "11": {
                    "11": {
                        "name": "method2",
                        "bindingType": "prototypeProperty",
                        "type": "function",
                        "paramNames": [
                            "a"
                        ],
                        "range": [
                            [
                                11,
                                11
                            ],
                            [
                                11,
                                16
                            ]
                        ],
                        "doc": " Public: Takes an argument and does some stuff.\n\na - A {String}\n\nReturns {Boolean}. "
                    }
                }
            },
            "exports": {}
        }
    }
};
