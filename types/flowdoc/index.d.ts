// Type definitions for non-npm package flowdoc 1.1
// Project: https://github.com/overflowapp/Flow
// Definitions by: Stefan Mansson <https://github.com/animify>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare namespace Flow {
    interface File {
        document: Document;
        settings: Settings;
        schemaVersion: SchemaVersion;
    }

    interface Document {
        id: string;
        name: string;
        type: Types['DOCUMENT'];
        children: Page[];
    }

    interface Page extends Node {
        type: Types['PAGE'];
        children: Array<Screen | Image | Rectangle | Ellipse | Diamond>;
        backgroundColor: Color;
        startNodeID?: string;
    }

    interface Screen extends Graphic {
        type: Types['SCREEN'];
        children: Layer[];
        connections?: Connection[];
    }

    interface Image extends Graphic {
        type: Types['IMAGE'];
        connections?: Connection[];
    }

    interface Rectangle extends Shape {
        type: Types['RECTANGLE'];
    }

    interface Ellipse extends Shape {
        type: Types['ELLIPSE'];
    }

    interface Diamond extends Shape {
        type: Types['DIAMOND'];
    }

    interface Layer extends Node {
        type: Types['LAYER'] | Types['HOTSPOT'];
        position: Point;
        size: Size;
        connections?: Connection[];
    }

    interface Connection {
        nodeID: string;
    }

    interface Settings {
        grid?: [number, number];
    }

    interface Color {
        r: number;
        g: number;
        b: number;
        a: number;
    }

    interface FileAsset {
        fileName: string;
        dirPath: string;
    }

    type URLAsset = string;

    interface Point {
        x: number;
        y: number;
    }

    interface Size {
        h: number;
        w: number;
    }

    interface Types {
        DOCUMENT: 'DOCUMENT';
        PAGE: 'PAGE';
        SCREEN: 'SCREEN';
        IMAGE: 'IMAGE';
        RECTANGLE: 'RECT';
        ELLIPSE: 'ELLIPSE';
        DIAMOND: 'DIAMOND';
        HOTSPOT: 'HOTSPOT';
        LAYER: 'LAYER';
    }

    type SchemaVersion = 1;
}

type NodeType = 'DOCUMENT' | 'PAGE' | 'SCREEN' | 'IMAGE' | 'RECT' | 'ELLIPSE' | 'DIAMOND' | 'HOTSPOT' | 'LAYER';

interface Node {
    id: string;
    name: string;
    type: NodeType;
}

interface Shape extends Node {
    position: Flow.Point;
    size: Flow.Size;
    connections?: Flow.Connection[];
}

interface Graphic extends Node {
    position: Flow.Point;
    size: Flow.Size;
    source: Flow.FileAsset | Flow.URLAsset;
}
