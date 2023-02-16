/*
 * Copyright (c) 2020-21 Shinya Ishikawa
 *
 *   This file is part of the Moddable SDK Tools.
 *
 *   The Moddable SDK Tools is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   The Moddable SDK Tools is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with the Moddable SDK Tools.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

declare module "piu/MC" {
    /* type aliases */
    interface Coordinates {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }

    interface Position {
        x?: number;
        y?: number;
    }

    interface Size {
        width?: number;
        height?: number;
    }

    type Bounds = Position & Size;
    type Color = string;

    interface ContentState {
        state?: number;
        variant?: number;
    }

    interface TimeProperty {
        time?: number;
        duration?: number;
        fraction?: number;
        interval?: number;
        loop?: boolean;
    }

    interface TouchProperty {
        active?: boolean;
        backgroundTouch?: boolean;
        exclusiveTouch?: boolean;
        multipleTouch?: boolean;
    }

    // TODO: more accurate constructor parameters
    interface TemplateStyle<P, C extends new (...args: any) => any> {
        new(dictionary?: P): InstanceType<C>;
        template: TemplateStyleFactory<C>;
    }

    type TemplateStyleFactory<T extends new (...args: any) => any> = (
        param: ConstructorParameters<T>[0]
    ) => TemplateStyle<Partial<ConstructorParameters<T>[1]>, T>;

    interface TemplateComponent<P, C extends new (...args: any) => any> {
        new(dictionary: P): InstanceType<C>;
        template: TemplateComponentFactory<C>;
    }

    type TemplateComponentFactory<T extends new (...args: any) => any> = (
        func: (param: any) => ConstructorParameters<T>[1]
    ) => TemplateComponent<Parameters<typeof func>[0], T>;

    class Behavior { }

    interface Content {
        // TODO: consider type parameter to avoid any
        adjust(x: number, y: number): void;
        bubble(id: string, ...extras: any[]): void;
        captureTouch(id: string, x: number, y: number, ticks: number): void;
        defer(id: string, ...extras: any[]): void;
        delegate(id: string, ...extras: any[]): void;
        distribute(id: string, ...extras: any[]): void;
        focus(): void;
        hit(x: number, y: number): Content | undefined;
        measure(): Size;
        moveBy(x: number, y: number): void;
        render(): void;
        sizeBy(width: number, height: number): void;
        start(): void;
        stop(): void;
        onCreate(content: Content, data: object, context: object): void;
        onDisplaying(content: Content): void;
        onFinished(content: Content): void;
        onTimeChanged(content: Content): void;
        onTouchBegan(
            content: Content,
            id: string,
            x: number,
            y: number,
            ticks: number
        ): void;
        onTouchCancelled(content: Content, id: string): void;
        onTouchended(
            content: Content,
            id: string,
            x: number,
            y: number,
            ticks: number
        ): void;
        onTouchMoved(
            content: Content,
            id: string,
            x: number,
            y: number,
            ticks: number
        ): void;
        // TODO: Avoid any
        readonly previous: Content | null;
        readonly next: Content | null;
        readonly container: Container | null;
        readonly index: number;
        name: string;
        active: boolean;
        anchor: string;
        behavior: object;
        coordinates: Coordinates;
        bounds: Bounds;
        backgroundTouch: boolean;
        exclusiveTouch: boolean;
        multipleTouch: boolean;

        time: number;
        duration: number;
        fraction: number;
        interval: number;
        loop: boolean;
        running: boolean;
        offset: undefined | Position;
        position: undefined | Position;
        size: Size;
        state: number;
        variant: number;
        skin: Skin | null;
        style: Style | null;
        visible: boolean;
        x: number;
        y: number;
        width: number;
        height: number;
    }
    interface ContentDictionary
        extends Coordinates,
        Size,
        ContentState,
        TimeProperty,
        TouchProperty {
        name?: string;
        anchor?: string;
        Behavior?: Behavior;
        skin?: Skin | SkinDictionary;
        Skin?: SkinConstructor;
        style?: Style;
        Style?: StyleConstructor;
        visible?: boolean;
    }
    interface ContentConstructor {
        new(behaviorData: any, dictionary: ContentDictionary): Content;
        (behaviorData: any, dictionary: ContentDictionary): Content;
        readonly prototype: Content;

        template: TemplateComponentFactory<typeof Content>;
        getAll<T>(this: { new(): T }): T[];
    }

    interface Style {
        measure(string: string): Size;
    }
    interface StyleDictionaryBase {
        color?: Color | Color[];
        font?: string;
        horizontal?: string;
        top?: number;
    }
    interface StyleConstructor {
        new(dictionary: StyleDictionary): Style;

        template<T>(this: T, ...args: any[]): T;
    }

    interface TextStyleDictionary extends StyleDictionaryBase {
        leading?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }
    interface LabelStyleDictionary extends StyleDictionaryBase {
        vertical?: string;
    }
    type StyleDictionary = LabelStyleDictionary | TextStyleDictionary;

    interface Texture {
        readonly height: number;
        readonly width: number;
    }
    interface TextureDictionary {
        path: string;
    }
    interface TextureConstructor {
        new(path: string): Texture;
        new(dictionary: TextureDictionary): Texture;
        readonly prototype: Texture;

        template: TemplateStyleFactory<typeof Texture>;
    }

    interface Skin {
        borders: Coordinates;
        fill: Color | Color[];
        stroke: Color | Color[];
        texture: Texture;
        color: Color;
        bounds: Bounds;
        height: number;
        width: number;
        states?: number;
        variants?: number;
        tiles?: Coordinates;
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }
    interface SkinConstructor {
        new(dictionary: SkinDictionary): Skin;
        readonly prototype: Skin;

        template: TemplateStyleFactory<typeof Skin>;
    }

    interface TextureSkinDictionary extends Coordinates, Bounds {
        texture?: Texture;
        Texture?: TextureConstructor;
        color?: Color | Color[];
        states?: number;
        variants?: number;
        tiles?: Coordinates;
    }
    interface ColorSkinDictionary {
        borders?: Coordinates;
        fill?: Color | Color[];
        stroke?: Color | Color[];
    }
    type SkinDictionary = ColorSkinDictionary | TextureSkinDictionary;

    interface Transition {
        onBegin(container: Container, ...extras: any[]): void;
        onEnd(container: Container, ...extras: any[]): void;
        onStep(fraction: number): void;
        duration?: number;
    }
    interface TransitionConstructor {
        new(duration: number, interpolator?: (value: number) => number, first?: any, last?: any): Transition;
    }

    interface Container extends Content {
        clip: boolean;
        readonly first: Content | null;
        readonly last: Content | null;
        readonly length: number;
        readonly transitioning: boolean;
        add(content: Content): void;
        content(at: number | string): Content | undefined;
        empty(start?: number, stop?: number): void;
        firstThat(id: string, ...extras: any[]): void;
        insert(content: Content, before: Content): void;
        lastThat(id: string, ...extras: any[]): void;
        remove(content: Content): void;
        replace(content: Content, by: Content): void;
        run(transition: Transition, ...extras: any[]): void;
        swap(content0: Content, content1: Content): void;
        onTransitionBeginning(container: Container): void;
        onTransitionEnded(container: Container): void;
    }
    interface ContainerDictionary extends ContentDictionary {
        clip?: boolean;
        contents?: Content[];
    }
    interface ContainerConstructor {
        new(behaviorData: any, dictionary?: ContainerDictionary): Container;

        template<T>(this: T, ...args: any[]): T;
    }

    interface Label extends Content {
        string: string;
    }
    interface LabelDictionary extends ContentDictionary {
        string?: string;
    }
    interface LabelConstructor {
        new(behaviorData: any, dictionary: LabelDictionary): Label;

        template<T>(this: T, ...args: any[]): T;
    }

    interface Port extends Content {
        drawContent(
            x: number,
            y: number,
            width: number,
            height: number
        ): void;
        drawLabel(
            string: string,
            x: number,
            y: number,
            width: number,
            height: number
        ): void;
        drawSkin(
            skin: Skin,
            x: number,
            y: number,
            width: number,
            height: number,
            variant?: number,
            state?: number
        ): void;
        drawString(
            string: string,
            style: Style,
            color: Color,
            x: number,
            y: number,
            width: number,
            height: number
        ): void;
        drawStyle(
            string: string,
            style: Style,
            x: number,
            y: number,
            width: number,
            height: number,
            ellipsis?: boolean,
            state?: number
        ): void;
        drawTexture(
            texture: Texture,
            color: Color,
            x: number,
            y: number,
            sx: number,
            sy: number,
            sw: number,
            sh: number
        ): void;
        fillColor(
            color: Color,
            x: number,
            y: number,
            width: number,
            height: number
        ): void;
        fillTexture(
            texture: Texture,
            color: Color,
            x: number,
            y: number,
            width: number,
            height: number,
            sx?: number,
            sy?: number,
            sw?: number,
            sh?: number
        ): void;
        invalidate(
            x?: number,
            y?: number,
            width?: number,
            height?: number
        ): void;
        measureString(string: string, style: Style): Size;
        popClip(): void;
        pushClip(
            x?: number,
            y?: number,
            width?: number,
            height?: number
        ): void;
        onDraw(
            port: Port,
            x: number,
            y: number,
            width: number,
            height: number
        ): void;
    }

    type PortConstructor = ContentConstructor;

    interface Text extends Content {
        blocks: Array<{
            behavior: object | null;
            style: Style | null;
            spans: string | string[];
        }>;
        string: string;
        begin(): void;
        beginBlock(style?: Style, behavior?: object): void;
        beginSpan(style: Style, behavior?: object): void;
        concat(string: string): void;
        end(): void;
        endBlock(): void;
        endSpan(): void;
    }
    interface TextDictionary extends ContentDictionary {
        blocks?: Array<{
            behavior?: Behavior;
            style?: Style;
            spans: string | string[];
        }>;
        string: string;
    }
    interface TextConstructor extends ContentConstructor {
        new(behaviorData: any, dictionary: TextDictionary): Text;

        template<T>(this: T, ...args: any[]): T;
    }

    interface Application extends Container {
        displayListLength: number;
        commandListLength: number;
        touchCount: number;
    }
    interface ApplicationDictionary extends ContainerDictionary {
        displayListLength?: number;
        commandListLength?: number;
        touchCount?: number;
        pixels?: number;
    }
    interface ApplicationConstructor {
        new(behaviorData: any, dictionary: ApplicationDictionary): Application;

        template<T>(this: T, ...args: any[]): T;
    }

    type ColumnConstructor = ContainerConstructor;

    interface Layout extends Container {
        onFitHorizontally(layout: Layout, width: number): void;
        onFitVertically(layout: Layout, height: number): void;
        onMeasureHorizontally(layout: Layout, width: number): void;
        onMeasureVertically(layout: Layout, height: number): void;
    }

    type LayoutConstructor = ContainerConstructor;

    interface Image extends Content {
        readonly frameCount: never;
        frameIndex: number;
    }
    interface ImageDictionary extends ContentDictionary {
        path: string;
    }
    interface ImageConstructor extends ContentConstructor {
        new(behaviorData: any, dictionary: ImageDictionary): Image;

        template<T>(this: T, ...args: any[]): T;
    }

    interface Die extends Layout {
        set(x: number, y: number, width: number, height: number): Die;
        sub(x: number, y: number, width: number, height: number): Die;
        and(x: number, y: number, width: number, height: number): Die;
        or(x: number, y: number, width: number, height: number): Die;
        xor(x: number, y: number, width: number, height: number): Die;
        fill(): Die;
        empty(): Die;
        cut(): void;
        attach(content: Content): void;
        detach(): void;
    }

    type DieConstructor = LayoutConstructor;

    type RowConstructor = ContainerConstructor;

    interface Scroller extends Container {
        readonly constraint: Position;
        loop: boolean;
        scroll: Position;
        tracking: boolean;
        reveal(bounds: Bounds): void;
        scrollBy(dx: number, dy: number): void;
        scrollTo(x: number, y: number): void;
        onScrolled(scroller: Scroller): void;
    }
    interface ScrollerDictionary extends ContainerDictionary {
        loop?: boolean;
    }
    interface ScrollerConstructor extends ContainerConstructor {
        new(behaviorData: any, dictionary: ScrollerDictionary): Scroller;
    }

    interface rgb {
        (r: number, g: number, b: number): Color;
    }
    interface rgba {
        (r: number, g: number, b: number, a: number): Color;
    }

    global {
        const Skin: SkinConstructor;
        const Texture: TextureConstructor;
        const Style: StyleConstructor;
        const Behavior: Behavior;
        const Content: ContentConstructor;
        const Container: ContainerConstructor;
        const Application: ApplicationConstructor;
        const Scroller: ScrollerConstructor;
        const Row: RowConstructor;
        const Column: ColumnConstructor;
        const Layout: LayoutConstructor;
        const Die: DieConstructor;
        const Port: PortConstructor;
        const Label: LabelConstructor;
        const Transition: TransitionConstructor;
        const Text: TextConstructor;
        const rgb: rgb;
        const rgba: rgba;
    }
}

type PiuInterpolator = (value: number) => number;

interface Math {
    backEaseIn: PiuInterpolator;
    backEaseInOut: PiuInterpolator;
    backEaseOut: PiuInterpolator;
    bounceEaseIn: PiuInterpolator;
    bounceEaseInOut: PiuInterpolator;
    bounceEaseOut: PiuInterpolator;
    circularEaseIn: PiuInterpolator;
    circularEaseInOut: PiuInterpolator;
    circularEaseOut: PiuInterpolator;
    cubicEaseIn: PiuInterpolator;
    cubicEaseInOut: PiuInterpolator;
    cubicEaseOut: PiuInterpolator;
    elasticEaseIn: PiuInterpolator;
    elasticEaseInOut: PiuInterpolator;
    elasticEaseOut: PiuInterpolator;
    exponentialEaseIn: PiuInterpolator;
    exponentialEaseInOut: PiuInterpolator;
    exponentialEaseOut: PiuInterpolator;
    quadEaseIn: PiuInterpolator;
    quadEaseInOut: PiuInterpolator;
    quadEaseOut: PiuInterpolator;
    quartEaseIn: PiuInterpolator;
    quartEaseInOut: PiuInterpolator;
    quartEaseOut: PiuInterpolator;
    quintEaseIn: PiuInterpolator;
    quintEaseInOut: PiuInterpolator;
    quintEaseOut: PiuInterpolator;
    sineEaseIn: PiuInterpolator;
    sineEaseInOut: PiuInterpolator;
    sineEaseOut: PiuInterpolator;
}
