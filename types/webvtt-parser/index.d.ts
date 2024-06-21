export type Entity = `&${string}`;

export class WebVTTParser {
    constructor(entities?: Record<Entity, string> | null);

    parse(input: string, mode?: TextTrackKind): VTTData;

    entities: Record<Entity, string>;
}

export interface VTTData {
    cues: Cue[];
    errors: Error[];
    time: number;
    styles: string[];
}

export interface Cue {
    id: string;
    startTime: number;
    endTime: number;
    pauseOnExit: boolean;
    direction: Direction;
    snapToLines: boolean;
    linePosition: "auto" | number;
    lineAlign: LineAlign;
    textPosition: "auto" | number;
    positionAlign: PositionAlign;
    size: number;
    alignment: "start" | "center" | "end" | "left" | "right";
    text: string;
    tree: Tree;
}

export type Direction = "horizontal" | "lr" | "rl";
export type LineAlign = "start" | "center" | "end";
export type PositionAlign = "auto" | "line-left" | "center" | "line-right";

export interface Error {
    message: string;
    line: number;
    col: number;
}

export class WebVTTCueTimingsAndSettingsParser {
    constructor(line: string, errorHandler: ErrorHandler);

    parse(cue: Cue, previousCueStart: number): undefined | true;
    parseTimestamp(): undefined | number;
}

export type ErrorHandler = (message: string, position: number) => void;

export class WebVTTCueTextParser {
    constructor(
        line: string,
        errorHandler: ErrorHandler,
        mode: TextTrackKind | undefined,
        entities: Record<Entity, string>,
    );

    parse(cueStart: number, cueEnd: number): Tree;

    entities: Record<Entity, string>;
}

export interface TreeNodeObjectBase {
    type: "object";
    classes: string[];
    value: string;
}

export type TreeNodeObjectTagName = "v" | "lang" | "c" | "i" | "b" | "u" | "ruby";
export type TreeNodeObjectTagNameWithRt = TreeNodeObjectTagName | "rt";

export interface TreeNodeObjectRuby extends TreeNodeObjectBase {
    name: "ruby";
    children: Array<TreeNode<TreeNodeObjectTagNameWithRt>>;
}

export interface TreeNodeObjectCommon<TagName extends TreeNodeObjectTagNameWithRt> extends TreeNodeObjectBase {
    name: Exclude<TagName, "ruby">;
    children: Array<TreeNode<TreeNodeObjectTagName>>;
}

export type TreeNodeObject<TagName extends TreeNodeObjectTagNameWithRt> =
    | TreeNodeObjectRuby
    | TreeNodeObjectCommon<TagName>;

export interface TreeNodeText {
    type: "text";
    value: string;
}

export interface TreeNodeTimestamp {
    type: "timestamp";
    value: number;
}

export type TreeNode<TagName extends TreeNodeObjectTagNameWithRt = TreeNodeObjectTagName> =
    | TreeNodeObject<TagName>
    | TreeNodeText
    | TreeNodeTimestamp;

export interface Tree {
    children: TreeNode[];
}

export class WebVTTSerializer {
    serialize(cues: readonly Cue[], styles?: readonly string[]): string;
}
