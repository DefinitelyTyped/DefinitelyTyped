const TYPES = {
    DOCUMENT: 'DOCUMENT',
    PAGE: 'PAGE',
    SCREEN: 'SCREEN',
    IMAGE: 'IMAGE',
    RECTANGLE: 'RECT',
    ELLIPSE: 'ELLIPSE',
    DIAMOND: 'DIAMOND',
    HOTSPOT: 'HOTSPOT',
    LAYER: 'LAYER',
} as Flow.Types;

const flowFile: Flow.File = {
    document: {
        id: 'cjo45613k00002a5p9gj6nr3b',
        name: 'Basic Document',
        type: TYPES.DOCUMENT,
        children: [
            {
                id: 'cjo456d2700002a5p80zudiut',
                name: 'Page 1',
                type: TYPES.PAGE,
                backgroundColor: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1,
                },
                children: [
                    {
                        id: 'cjo45mq7500002a5p8n8u1bfz',
                        name: 'Sign in',
                        type: TYPES.SCREEN,
                        source: {
                            fileName: 'sign-in.png',
                            dirPath: './assets',
                        },
                        children: [],
                        size: {
                            h: 700,
                            w: 1152,
                        },
                        position: {
                            x: 200,
                            y: 128,
                        },
                    },
                    {
                        id: 'cjo45oi8700002a5pmpnxhfny',
                        name: 'Sign up',
                        type: TYPES.SCREEN,
                        source: {
                            fileName: 'sign-up.png',
                            dirPath: './assets',
                        },
                        children: [],
                        size: {
                            h: 700,
                            w: 1152,
                        },
                        position: {
                            x: 1452,
                            y: 128,
                        },
                    },
                ],
            },
        ],
    },
    settings: {
        grid: [40, 40],
    },
    schemaVersion: 1,
};

flowFile.settings = {};
flowFile.schemaVersion = 1;

const document: Flow.Document = flowFile.document;
document.type = TYPES.DOCUMENT;

const page: Flow.Page = document.children[0];
page.type = TYPES.PAGE;
page.backgroundColor = {
    r: 255,
    g: 255,
    b: 255,
    a: 1
};

const hotspot: Flow.Layer = {
    id: 'cjo5mezgg00003g5winhxc8o0',
    name: 'Layer',
    type: TYPES.HOTSPOT,
    position: {
        x: 390,
        y: 390,
    },
    size: {
        h: 42,
        w: 370,
    },
    connections: [{
        nodeID: 'cjo45mq7500002a5p8n8u1bfz',
    }],
};
hotspot.type = TYPES.HOTSPOT;

const screen = page.children[0] as Flow.Screen;
screen.type = TYPES.SCREEN;
screen.children.push(hotspot);
screen.position = {
    x: 0,
    y: 0
};
