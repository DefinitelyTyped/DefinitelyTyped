// We ignore tslint and eslint for this file, because we want to have the JSON blob verbatim in here.

import { CycloneDXBomV1_4 } from "cyclonedx";

// https://github.com/CycloneDX/bom-examples/blob/master/HBOM/PCIe-SATA-adapter-board/bom.json
export const sbom1_4: CycloneDXBomV1_4 = {
    "bomFormat": "CycloneDX",
    "specVersion": "1.4",
    "serialNumber": "urn:uuid:e8c355aa-2142-4084-a8c7-6d42c8610ba2",
    "version": 1,
    "metadata": {
        "timestamp": "2022-01-09T12:00:00Z",
        "component": {
            "type": "device",
            "bom-ref": "pcie-sata-adaptor-board",
            "group": "uk.ac.cam.cl",
            "name": "pcie-sata-adaptor-board",
            "version": "rev-1",
        },
    },
    "components": [
        {
            "type": "device",
            "bom-ref": "PCIE-098-02-F-D-EMS2",
            "supplier": {
                "name": "Samtec",
                "url": ["https://www.samtec.com/"],
            },
            "name": "PCIE-098-02-F-D-EMS2",
            "version": "2.9.10",
            "description": "Low Profile PCI Express® GEN 4 Connector",
            "externalReferences": [
                {
                    "type": "documentation",
                    "url": "https://www.samtec.com/products/pcie-098-02-f-d-ems2",
                },
            ],
            "properties": [
                {
                    "name": "cdx:device:quantity",
                    "value": "1",
                },
                {
                    "name": "cdx:device:function",
                    "value": "connector",
                },
                {
                    "name": "cdx:device:location",
                    "value": "mainboard",
                },
                {
                    "name": "cdx:device:deviceType",
                    "value": "thru-hole",
                },
            ],
        },
        {
            "type": "device",
            "bom-ref": "molex-47155-4001",
            "supplier": {
                "name": "Molex",
                "url": ["https://www.molex.com/"],
            },
            "name": "47155-4001",
            "description": "I/O Connectors HIGH SPEED CONN 1.27 VERT DIP SOLDERTAIL",
            "externalReferences": [
                {
                    "type": "documentation",
                    "url":
                        "https://www.mouser.com/ProductDetail/Molex/47155-4001?qs=%2F%252BEk3ugtboRcLyK5WJikBg%3D%3D",
                },
            ],
            "properties": [
                {
                    "name": "cdx:device:quantity",
                    "value": "8",
                },
                {
                    "name": "cdx:device:function",
                    "value": "connector",
                },
                {
                    "name": "cdx:device:location",
                    "value": "mainboard",
                },
                {
                    "name": "cdx:device:deviceType",
                    "value": "thru-hole",
                },
                {
                    "name": "cdx:device:gs1:gtin-12",
                    "value": "822348522712",
                },
            ],
        },
        {
            "type": "device",
            "bom-ref": "3M-5622-4100-ML",
            "supplier": {
                "name": "3M",
                "url": ["https://www.3m.com/"],
            },
            "name": "5622-4100-ML",
            "description": "22 Position SATA Plug Connector Solder Through Hole, Right Angle",
            "externalReferences": [
                {
                    "type": "documentation",
                    "url": "https://www.3m.com/3M/en_US/p/d/b00036230/",
                },
            ],
            "properties": [
                {
                    "name": "cdx:device:quantity",
                    "value": "1",
                },
                {
                    "name": "cdx:device:function",
                    "value": "connector",
                },
                {
                    "name": "cdx:device:location",
                    "value": "mainboard",
                },
                {
                    "name": "cdx:device:deviceType",
                    "value": "thru-hole",
                },
            ],
        },
        {
            "type": "device",
            "bom-ref": "MC9A22-1034",
            "supplier": {
                "name": "Multicomp",
                "url": ["https://www.multicomp-pro.com/"],
            },
            "name": "MC9A22-1034",
            "description": "Header, Tht, Right Angle, 2.54MM, 10WAY",
            "externalReferences": [
                {
                    "type": "documentation",
                    "url": "https://octopart.com/datasheet/mc9a22-1034-multicomp-5403541",
                },
            ],
            "properties": [
                {
                    "name": "cdx:device:quantity",
                    "value": "1",
                },
                {
                    "name": "cdx:device:function",
                    "value": "connector",
                },
                {
                    "name": "cdx:device:location",
                    "value": "mainboard",
                },
                {
                    "name": "cdx:device:deviceType",
                    "value": "thru-hole",
                },
            ],
        },
        {
            "type": "device",
            "bom-ref": "826632-3",
            "supplier": {
                "name": "TE Connectivity",
                "url": ["https://www.te.com/"],
            },
            "name": "826632-3",
            "description":
                "AMPMODU Headers, PCB Mount Header, Vertical, Board-to-Board, 6 Position, .1 in [2.54 mm] Centerline, Breakaway",
            "externalReferences": [
                {
                    "type": "documentation",
                    "url": "https://www.te.com/usa-en/product-826632-3.html",
                },
            ],
            "properties": [
                {
                    "name": "cdx:device:quantity",
                    "value": "2",
                },
                {
                    "name": "cdx:device:function",
                    "value": "connector",
                },
                {
                    "name": "cdx:device:location",
                    "value": "mainboard",
                },
                {
                    "name": "cdx:device:deviceType",
                    "value": "thru-hole",
                },
            ],
        },
        {
            "type": "device",
            "bom-ref": "MP000003",
            "supplier": {
                "name": "Multicomp",
                "url": ["https://www.multicomp-pro.com/"],
            },
            "name": "MP000003",
            "description": "Resistor jumper, 0R, 0805",
            "properties": [
                {
                    "name": "cdx:device:quantity",
                    "value": "2",
                },
                {
                    "name": "cdx:device:function",
                    "value": "jumper",
                },
                {
                    "name": "cdx:device:location",
                    "value": "mainboard",
                },
                {
                    "name": "cdx:device:deviceType",
                    "value": "smd",
                },
            ],
        },
    ],
};
