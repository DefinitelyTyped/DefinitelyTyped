// Type definitions for flowdoc 1.0
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
        type: Type.Document;
        children: Page[];
    }

    interface Page extends Node {
        type: Type.Page;
        children: Array<(Screen | Image | Rectangle | Ellipse | Diamond)>;
        backgroundColor: Color;
        startNodeID?: string;
    }

    interface Screen extends Graphic {
        type: Type.Screen;
        children: Layer[];
        connections?: Connection[];
    }

    interface Image extends Graphic {
        type: Type.Image;
        connections?: Connection[];
    }

    interface Rectangle extends Shape {
        type: Type.Rectangle;
    }

    interface Ellipse extends Shape {
        type: Type.Ellipse;
    }

    interface Diamond extends Shape {
        type: Type.Diamond;
    }

    interface Layer extends Node {
        type: Type.Layer | Type.Hotspot;
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

    const enum Type {
        Document = 'DOCUMENT',
        Page = 'PAGE',
        Screen = 'SCREEN',
        Image = 'IMAGE',
        Rectangle = 'RECT',
        Ellipse = 'ELLIPSE',
        Diamond = 'DIAMOND',
        Hotspot = 'HOTSPOT',
        Layer = 'LAYER',
    }

    type SchemaVersion = 1;
}

interface Node {
    id: string;
    name: string;
    type: Flow.Type;
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
