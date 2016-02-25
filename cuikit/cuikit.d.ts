// Type definitions for CUIKit v0.0.1
// Project: https://github.com/spywhere/cuikit
// Definitions by: Sirisak Lueangsaksri <https://github.com/spywhere/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module cuikit {
    export class CGPoint {
        x: number;
        y: number;
    }

    export class CGSize {
        width: number;
        height: number;
    }

    export class CGRect {
        origin: CGPoint;
        size: CGSize;
    }

    export function CGPointMake(
        x: number, y: number
    ): CGPoint;
    export function CGSizeMake(
        width: number, height: number
    ): CGSize;
    export function CGRectMake(
        x: number, y: number, width: number, height: number
    ): CGRect;
    export var CGPointZero: CGPoint;
    export var CGSizeZero: CGSize;
    export var CGRectZero: CGRect;

    export class NSObject {
        description(): string;
        respondsToSelector(selector: string): boolean;
        performSelector(selector: string, args: any[]): any;
    }

    export class UIApplication extends NSObject {
        delegate: NSObject;
        window: UIWindow;

        static init(): UIApplication;
        static initWithDelegate(delegate: NSObject): UIApplication;
        static sharedApplication(): UIApplication;

        setDelegate(delegate: NSObject): UIApplication;
        launch(): UIApplication;
    }

    export class UIColor extends NSObject {
        red: number;
        green: number;
        blue: number;
        clear: boolean;

        static init(): UIColor;
        static initWithWhite(white: number): UIColor;
        static initWithRedGreenBlue(red: number, green: number, blue: number): UIColor;
        static blackColor(): UIColor;
        static darkGrayColor(): UIColor;
        static lightGrayColor(): UIColor;
        static whiteColor(): UIColor;
        static redColor(): UIColor;
        static greenColor(): UIColor;
        static blueColor(): UIColor;
        static cyanColor(): UIColor;
        static yellowColor(): UIColor;
        static magentaColor(): UIColor;
        static orangeColor(): UIColor;
        static purpleColor(): UIColor;
        static brownColor(): UIColor;
        static clearColor(): UIColor;
    }

    export class UILabel extends UIView {
        static init(): UILabel;
    }

    export class UIScreen extends NSObject {
        bounds: CGRect;

        static init(): UIScreen;
        static mainScreen(): UIScreen;
    }

    export class UIView extends NSObject {
        foregroundColor: UIColor;
        backgroundColor: UIColor;
        superview: UIView;
        subviews: UIView[];
        frame: CGRect;

        static init(): UIView;
        static initWithFrame(frame: CGRect): UIView;
        static animateWithDurationAnimations(
            duration: number,
            animations: (percentage: number) => void
        ): void;
        static animateWithDurationAnimationsCompletion(
            duration: number,
            animations: (percentage: number) => void,
            completion: () => void
        ): void;

        addSubview(view: UIView): void;
        layoutSubviews(): void;
        layoutIfNeeded(): void;
        setFrame(frame: CGRect):void;
    }

    export class UIWindow extends UIView {
        screen: UIScreen;
    }
}

declare module "cuikit" {
    export = cuikit;
}
