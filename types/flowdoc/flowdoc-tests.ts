const flowFile: Flow.File = {
    document: {
        id: 'cjo45613k00002a5p9gj6nr3b',
        name: 'Basic Document',
        type: Flow.Type.Document,
        children: [
            {
                id: 'cjo456d2700002a5p80zudiut',
                name: 'Page 1',
                type: Flow.Type.Page,
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
                        type: Flow.Type.Screen,
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
                        type: Flow.Type.Screen,
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
document.type = Flow.Type.Document;

const page: Flow.Page = document.children[0];
page.type = Flow.Type.Page;
page.backgroundColor = {
    r: 255,
    g: 255,
    b: 255,
    a: 1
};

const hotspot: Flow.Layer = {
    id: 'cjo5mezgg00003g5winhxc8o0',
    name: 'Layer',
    type: Flow.Type.Hotspot,
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
hotspot.type = Flow.Type.Hotspot;

const screen = page.children[0] as Flow.Screen;
screen.type = Flow.Type.Screen;
screen.children.push(hotspot);
screen.position = {
    x: 0,
    y: 0
};
