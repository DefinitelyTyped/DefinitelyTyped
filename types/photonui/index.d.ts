declare namespace photonui {
    // Base
    namespace Helpers {
        function escapeHtml(string: string): void;
        function uuid4(): string;
        function cleanNode(node: HTMLElement): void;
        function getAbsolutePosition(element: HTMLElement | string): { x: number; y: number };
        function numberToCssSize(value: number, defaultValue?: number, nullValue?: string): string;
    }

    class Base {
        constructor(params?: { [key: string]: any });
        destroy(): void;
        registerCallback(id: string, wEvent: string, callback: Function, thisArg: any): void;
        removeCallback(id: string): void;
    }

    class Widget extends Base {
        absolutePosition: { x: number; y: number }; // readonly
        contextMenu: PopupWindow;
        contextMenuName: string;
        html: HTMLElement; // readonly
        layoutOptions: { [key: string]: any };
        name: string;
        offsetWidth: number; // readonly
        offsetHeight: number; // readonly
        parent: Widget;
        parentName: string;
        tooltip: string;
        visible: boolean;

        show(): void;
        hide(): void;
        unparent(): void;
        addClass(className: string): void;
        removeClass(className: string): void;

        static getWidget(name: string): Widget;
        static domInsert(widget: Widget, element?: HTMLElement | string): void;
    }

    // Methods
    function domInsert(widget: Widget, element?: HTMLElement | string): void;
    function getWidget(name: string): Widget;

    // Widgets
    class FileManager extends Base {
        acceptedExts: string[];
        acceptedMimes: string[];
        dropZone: HTMLElement;
        multiselect: boolean;

        open(): void;
    }

    class Translation extends Base {
        locale: string;

        addCatalogs(catalogs: { [key: string]: any }): void;
        guessUserLanguage(): string;
        gettext(string: string, replacements?: { [key: string]: string }): string;
        lazyGettext(string: string, replacements?: { [key: string]: string }): string;
        enableDomScan(enable: boolean): void;
        updateDomTranslation(): void;
    }

    class AccelManager extends Base {
        addAccel(id: string, keys: string, callback: Function, safe?: boolean): void;
        removeAccel(id: string): void;
    }

    class MouseManager extends Base {
        constructor(params?: { [key: string]: any });
        constructor(element?: Widget | HTMLElement, params?: { [key: string]: any });

        element: HTMLElement;
        threshold: number;

        action: string; // readonly
        btnLeft: boolean; // readonly
        btnMiddle: boolean; // readonly
        btnRight: boolean; // readonly
        button: string; // readonly
        pageX: number; // readonly
        pageY: number; // readonly
        x: number; // readonly
        y: number; // readonly
        deltaX: number; // readonly
        deltaY: number; // readonly
    }

    // -----------------------------------

    class BaseIcon extends Widget {}

    class FAIcon extends BaseIcon {
        constructor(params?: { [key: string]: any });
        constructor(name: string, params?: { [key: string]: any });

        color: string;
        iconName: string;
        size: string;
    }

    class SpriteIcon extends BaseIcon {
        constructor(params?: { [key: string]: any });
        constructor(name: string, params?: { [key: string]: any });

        icon: string;
        iconName: string;
        spriteSheetName: string;
    }

    // -----------------------------------

    class Image extends Widget {
        width: number;
        height: number;
        url: string;
    }

    class SpriteSheet extends Base {
        name: string;
        imageUrl: string;
        size: string;
        icons: { [iconName: string]: number[] };

        addIcon(iconName: string, x: number, y: number): void;
        removeIcon(iconName: string): void;
        getIconPosition(iconName: string): { x: number; y: number };
        getIconCSS(iconName: string): string;

        static getSpriteSheet(name: string): SpriteSheet;
    }

    class Canvas extends Widget {
        canvas: HTMLElement;
        interactiveMode: HTMLElement;
        width: number;
        height: number;
        getContext(contextId: string): any;
        setContext(contextId: string): void;
        supportsContext(contextId: string): boolean;
        toBlod(imageFormat: string): any; // returns Blob
        toBlodHD(imageFormat: string): any; // returns Blob
        toDataUrl(imageFormat: string): string;
        toDataUrlHD(imageFormat: string): string;
        transferControlToProxy(): void;
    }

    class Label extends Widget {
        constructor(params?: { [key: string]: any });
        constructor(name: string, params?: { [key: string]: any });

        forInput: Field | CheckBox;
        forInputName: string;
        text: string;
        textAlign: string;
    }

    class Text extends Widget {
        rawHtml: string;
        text: string;
    }

    class ProgressBar extends Widget {
        orientation: string;
        pulsate: boolean;
        textVisible: boolean;
        value: number;
    }

    class Separator extends Widget {
        orientation: string;
    }

    class Button extends Widget {
        appearance: string; //  normal | flat
        buttonColor: string;

        leftIconName: string;
        leftIcon: BaseIcon;
        leftIconVisible: boolean;

        rightIconName: string;
        rightIcon: BaseIcon;
        rightIconVisible: boolean;

        text: string;
        textVisible: boolean;
    }

    class ColorButton extends Widget {
        color: Color;
        dialogOnly: boolean;
        value: string;
    }

    class CheckBox extends Widget {
        value: boolean;
    }
    class Switch extends CheckBox {}
    class ToggleButton extends CheckBox {}

    // -----------------------------------

    class Color extends Base {
        constructor(color: string);
        constructor(params?: { [key: string]: any });

        hexString: string;
        rgbString: string; // readonly
        rgbaString: string; // readonly

        red: number;
        green: number;
        blue: number;
        alpha: number;

        hue: number;
        saturation: number;
        brightness: number;

        setRGB(red: number, green: number, blue: number): void;
        getRGB(): number[];
        setRGBA(red: number, green: number, blue: number, alpha: number): void;
        getRGBA(): number[];
        setHSB(hue: number, saturation: number, brightness: number): void;
    }

    class ColorPalette extends Widget {
        color: Color;
        palette: Array<string[]>;
        value: string;

        static palette: Array<string[]>;
    }

    class ColorPicker extends Widget {
        color: Color;
        value: string;
    }

    // -----------------------------------

    class Field extends Widget {
        placeholder: string;
        value: boolean;
    }

    class NumericField extends Field {
        min: number;
        max: number;
        step: number;
        decimalDigits: number;
        decimalSymbol: string;
    }

    class Slider extends NumericField {
        fieldVisible: boolean;
    }

    class TextAreaField extends Field {
        cols: number;
        rows: number;
    }

    class TextField extends Field {
        type: string; // text, password, email, search, tel, url
    }

    // -----------------------------------

    class Select extends Widget {
        children: Widget[];
        childrenNames: string[];
        iconVisible: boolean;
        placeholder: string;
        popupWidth: number;
        popupHeight: number;
        popupMaxWidth: number;
        popupMinWidth: number;
        popupMaxHeight: number;
        popupMinHeight: number;
        popupOffsetWidth: number; // readonly
        popupOffsetHeight: number; // readonly
        popupPadding: number;
        value: any; // string (maybe)

        addChild(widget: Widget, layoutOptions?: any): void;
    }

    class FontSelect extends Select {
        fonts: string[];

        addFont(fontName: string): void;
    }

    // -----------------------------------

    class Container extends Widget {
        child: Widget;
        childName: string;
        containerNode: HTMLElement; // readonly
        horizontalChildExpansion: boolean;
        verticalChildExpansion: boolean;

        removeChild(widget: Widget): void;
    }

    class Layout extends Container {
        children: Widget[];
        childrenNames: string[];

        addChild(widget: Widget, layoutOptions?: { [key: string]: any }): void;
        empty(): void;
    }

    class BoxLayout extends Layout {
        horizontalPadding: number;
        verticalPadding: number;
        orientation: string;
        spacing: number;
    }

    class FluidLayout extends Layout {
        horizontalPadding: number;
        verticalPadding: number;
    }

    class GridLayout extends Layout {
        horizontalPadding: number;
        verticalPadding: number;
        horizontalSpacing: number;
        verticalSpacing: number;
    }

    class Menu extends Layout {
        iconVisible: boolean;
    }

    class MenuItem extends Menu {
        active: boolean;
        icon: BaseIcon;
        iconName: string;
        text: string;
        value: any; // string (maybe)
    }

    class SubMenuItem extends MenuItem {
        menu: Menu;
        menuName: string;
    }

    // -----------------------------------

    class Viewport extends Container {
        width: number;
        minWidth: number;
        maxWidth: number;
        height: number;
        minHeight: number;
        maxHeight: number;
        padding: number;
        horizontalScrollbar: boolean;
        verticalScrollbar: boolean;
    }

    // -----------------------------------

    class BaseWindow extends Container {
        width: number;
        minWidth: number;
        maxWidth: number;
        height: number;
        minHeight: number;
        maxHeight: number;
        padding: number;
        position: { x: number; y: number };
        x: number;
        y: number;

        center(): void;
    }

    class PopupWindow extends BaseWindow {
        popupXY(x: number, y: number): void;
        popupWidget(widget: Widget): void;
    }

    class PopupMenu extends PopupWindow {}

    class Window extends BaseWindow {
        closeButtonVisible: boolean;
        modal: boolean;
        movable: boolean;
        title: string;

        moveToFront(): void;
        moveToBack(): void;
    }

    class Dialog extends Window {
        buttons: Widget[];
        buttonNames: string[];

        addButton(widget: Widget, layoutOptions: any): void;
        removeButton(widget: Widget): void;
    }

    class ColorPickerDialog extends Dialog {
        color: Color;
    }

    // -----------------------------------

    class TabItem extends Container {
        tabHtml: HTMLElement; // readonly
        title: string;
    }

    class TabLayout extends Layout {
        activeTab: Widget;
        activeTabName: string;
        padding: number;
        tabsPosition: string; // top, bottom, left, right
    }
}

declare function _(string: string, replacements?: { [key: string]: string }): string; // alias of Translation.lazyGettext()
