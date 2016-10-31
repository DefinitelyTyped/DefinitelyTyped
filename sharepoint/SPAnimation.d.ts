// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace SPAnimation {
    export enum Attribute {
        PositionX,
        PositionY,
        Height,
        Width,
        Opacity
    }

    export enum ID {
        Basic_Show,
        Basic_SlowShow,
        Basic_Fade,
        Basic_Move,
        Basic_Size,
        Content_SlideInFadeInRight,
        Content_SlideInFadeInRightInc,
        Content_SlideOutFadeOutRight,
        Content_SlideInFadeInLeft,
        Content_SlideInFadeInLeftInc,
        SmallObject_SlideInFadeInTop,
        SmallObject_SlideInFadeInLeft,
        Test_Instant,
        Test_Hold,
        Basic_Opacity,
        Basic_QuickShow,
        Basic_QuickFade,
        Content_SlideInFadeInGeneric,
        Basic_StrikeThrough,
        SmallObject_SlideInFadeInBottom,
        SmallObject_SlideOutFadeOutBottom,
        Basic_QuickSize
    }

    export class Settings {
        static DisableAnimation(): void;
        static DisableSessionAnimation(): void;
        static IsAnimationEnabled(): boolean;
    }


    export class State {
        SetAttribute(attributeId: Attribute, value: number): void;
        GetAttribute(attributeId: Attribute): number;
        GetDataIndex(attributeId: Attribute): number
    }

    export class Object {
        constructor(animationID: ID, delay: number, element: HTMLElement, finalState: State, finishFunc?: (data: any) => void, data?: any);
        constructor(animationID: ID, delay: number, element: HTMLElement[], finalState: State, finishFunc?: (data: any) => void, data?: any);
        RunAnimation(): void;
    }
}

declare namespace SPAnimationUtility {
    export class BasicAnimator {
        static FadeIn(element: HTMLElement, finishFunc?: (data: any) => void, data?: any): void;
        static FadeOut(element: HTMLElement, finishFunc?: (data: any) => void, data?: any): void;
        static Move(element: HTMLElement, posX: number, posY: number, finishFunc?: (data: any) => void, data?: any): void;
        static StrikeThrough(element: HTMLElement, strikeThroughWidth: number, finishFunc?: (data: any) => void, data?: any): void;
        static Resize(element: HTMLElement, newHeight: number, newWidth: number, finishFunc?: (data: any) => void, data?: any): void;
        static CommonResize(element: HTMLElement, newHeight: number, newWidth: number, finishFunc: (data: any) => void, data: any, animationId: SPAnimation.ID): void;
        static QuickResize(element: HTMLElement, newHeight: number, newWidth: number, finishFunc?: (data: any) => void, data?: any): void;
        static ResizeContainerAndFillContent(element: HTMLElement, newHeight: number, newWidth: number, finishFunc: () => void, fAddToEnd: boolean): void;
        static GetWindowScrollPosition(): { x: number; y: number; };
        static GetLeftOffset(element: HTMLElement): number;
        static GetTopOffset(element: HTMLElement): number;
        static GetRightOffset(element: HTMLElement): number;
        static PositionElement(element: HTMLElement, topValue: number, leftValue: number, heightValue: number, widthValue: number): void;
        static PositionAbsolute(element: HTMLElement): void;
        static PositionRelative(element: HTMLElement): void;
        static PositionRelativeExact(element: HTMLElement, topValue: number, leftValue: number, heightValue: number, widthValue: number): void;
        static PositionAbsoluteExact(element: HTMLElement, topValue: number, leftValue: number, heightValue: number, widthValue: number): void;
        static IsPositioned(element: HTMLElement): boolean;
    }
}