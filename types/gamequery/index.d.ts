/// <reference types="jquery" />

interface PlaygroundOptions {
    height?: number | undefined;
    width?: number | undefined;
    refreshRate?: number | undefined;
    keyTracker?: boolean | undefined;
    mouseTracker?: boolean | undefined;
    position?: string | undefined;
    disableCollision?: boolean | undefined;
}

interface Coordinate3D {
    x: number;
    y: number;
    z: number;
}

interface Size {
    w: number;
    h: number;
}

interface SpriteOptions {
    animation?: any;
    height?: number | undefined;
    width?: number | undefined;
    posx?: number | undefined;
    posy?: number | undefined;
    callback?: (() => any) | undefined;
}

interface GroupOptions {
    overflow?: string | undefined;
    height?: number | undefined;
    width?: number | undefined;
    posx?: number | undefined;
    posy?: number | undefined;
}

interface TileMapOptions {
    sizex?: number | undefined;
    sizey?: number | undefined;
    height?: number | undefined;
    width?: number | undefined;
    posx?: number | undefined;
    posy?: number | undefined;
    buffer?: number | undefined;
}

interface AnimationOptions {
    imageURL: string;
    numberOfFrame?: number | undefined;
    delta?: number | undefined;
    rate?: number | undefined;
    type?: number | undefined;
    distance?: number | undefined;
    offsetx?: number | undefined;
    offsety?: number | undefined;
}

interface Animation {
    imageURL: string;
    numberOfFrame: number;
    delta: number;
    rate: number;
    type: number;
    distance: number;
    offsetx: number;
    offsety: number;

    new(options: AnimationOptions): Animation;
}

interface GameQuery {
    ANIMATION_VERTICAL: number;
    ANIMATION_HORIZONTAL: number;
    ANIMATION_ONCE: number;
    ANIMATION_CALLBACK: number;
    ANIMATION_MULTI: number;
    ANIMATION_PINGPONG: number;

    Animation: Animation;

    keyTracker: boolean[];

    spriteCssClass: string;
    groupCssClass: string;
    tilemapCssClass: string;
    tileCssClass: string;
    tileTypePrefix: string;
    tileIdPrefix: string;
}

interface JQuery {
    playground(options?: PlaygroundOptions): JQuery;

    collision(query?: any): JQuery;

    startGame(callback?: () => void): JQuery;
    pauseGame(): JQuery;
    resumeGame(callback?: () => void): JQuery;

    registerCallback(callback: () => void, rate: number): JQuery;
    registerCallback(callback: () => number, rate: number): JQuery;
    registerCallback(callback: () => boolean, rate: number): JQuery;

    clearScenegraph(): JQuery;
    clearAll(clearCallbacks?: boolean): JQuery;

    loadCallback(callback: (percent: number) => void): JQuery;

    rotate(angle: number, relative?: boolean): JQuery;
    scale(ratio: number, relative?: boolean): JQuery;
    flipv(flip?: boolean): JQuery;
    fliph(flip?: boolean): JQuery;

    xyz(x: number, y: number, z: number, relative?: boolean): JQuery;
    xyz(): Coordinate3D;

    xy(x: number, y: number, relative?: boolean): JQuery;
    xy(): Coordinate3D;

    x(value: number, relative?: boolean): JQuery;
    x(): number;

    y(value: number, relative?: boolean): JQuery;
    y(): number;

    z(value: number, relative?: boolean): JQuery;
    z(): number;

    wh(width: number, height: number, relative?: boolean): JQuery;
    wh(): Size;

    w(value: number, relative?: boolean): JQuery;
    w(): number;

    h(value: number, relative?: boolean): JQuery;
    h(): number;

    addSprite(name: string, options: SpriteOptions): JQuery;
    addGroup(name: string, options: GroupOptions): JQuery;

    addTilemap(name: string, tileDescription: number[][], animationList: Animation[], options: TileMapOptions): JQuery;
    addTilemap(name: string, tileDescription: number[][], animation: Animation, options: TileMapOptions): JQuery;
    addTilemap(
        name: string,
        tileDescription: (i: number, j: number) => number,
        animationList: Animation[],
        options: TileMapOptions,
    ): JQuery;
    addTilemap(
        name: string,
        tileDescription: (i: number, j: number) => number,
        animation: Animation,
        options: TileMapOptions,
    ): JQuery;

    gQ: GameQuery;

    setAnimation(animation: Animation, callback?: () => any): JQuery;
    setAnimation(animation: number, callback?: () => any): JQuery;
    setAnimation(): JQuery;

    pauseAnimation(): JQuery;
    resumeAnimation(): JQuery;
}

interface JQueryStatic {
    playground(): JQuery;

    gQ: GameQuery;
    gameQuery: GameQuery;
}
