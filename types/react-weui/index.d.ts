// Type definitions for react-weui 1.0
// Project: https://github.com/weui/react-weui
// Definitions by: Tairan Wang <https://github.com/tairan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
export class ActionSheet {
    constructor(props: any);
    handleMaskClick(e: any): void;
    render(): any;
    renderActions(): any;
    renderMenuItem(): any;
    static defaultProps: {
        actions: any[];
        autoDectect: boolean;
        menus: any[];
        show: boolean;
        type: string;
    };
}

export class Article {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
    };
    static propTypes: {
    };
}

export class Badge {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
        dot: boolean;
        preset: string;
    };
}

export class Button {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
        disabled: boolean;
        size: string;
        type: string;
    };
}

export class ButtonArea {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
        direction: string;
    };
}

export class CityPicker {
    constructor(props: any);
    handleChange(): void;
    parseData(data: any, subKey: any, ...args: any[]): any;
    render(): any;
    updateGroup(item: any, i: any, groupIndex: any, selected: any, picker: any): void;
    static defaultProps: {
        data: any[];
        dataMap: {
            id: string;
            items: string;
        };
        selected: any[];
        show: boolean;
    };
}

export class Dialog {
    constructor(props: any);
    render(): any;
    renderButtons(): any;
    static defaultProps: {
        autoDectect: boolean;
        buttons: any[];
        show: boolean;
        title: string;
        type: string;
    };
}

export class Form {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
        checkbox: boolean;
        radio: boolean;
    };
}

export class FormCell {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
        checkbox: boolean;
        radio: boolean;
        select: boolean;
        selectPos: any;
        switch: boolean;
        vcode: boolean;
        warn: boolean;
    };
}

export class Grid {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
        icon: boolean;
        label: string;
    };
}

export class GridIcon {
    constructor(...args: any[]);
    render(): any;
}

export class GridLabel {
    constructor(...args: any[]);
    render(): any;
}

export class Grids {
    constructor(...args: any[]);
    render(): any;
    renderData(data: any): any;
    static defaultProps: {
        data: any[];
    };
}

export class Icon {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
        size: string;
        value: string;
    };
}

export class Mask {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
        transparent: boolean;
    };
}

export class MediaBox {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
        type: string;
    };
}

export class MediaBoxBody {
    constructor(...args: any[]);
    render(): any;
}

export class MediaBoxDescription {
    constructor(...args: any[]);
    render(): any;
}

export class MediaBoxHeader {
    constructor(...args: any[]);
    render(): any;
}

export class MediaBoxInfo {
    constructor(...args: any[]);
    render(): any;
    renderData(metas: any): any;
    static defaultProps: {
        data: any[];
    };
}

export class MediaBoxInfoMeta {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
        extra: boolean;
    };
}

export class MediaBoxTitle {
    constructor(...args: any[]);
    render(): any;
}

export class Msg {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
        buttons: any[];
        type: string;
    };
}

export class NavBar {
    constructor(...args: any[]);
    render(): any;
}

export class NavBarItem {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
        active: boolean;
    };
}

export class Panel {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
        access: boolean;
    };
}

export class PanelBody {
    constructor(...args: any[]);
    render(): any;
}

export class PanelFooter {
    constructor(...args: any[]);
    render(): any;
}

export class PanelHeader {
    constructor(...args: any[]);
    render(): any;
}

export class Picker {
    constructor(props: any);
    handleChange(item: any, i: any, groupIndex: any): void;
    handleChanges(): void;
    handleClose(cb: any): any;
    render(): any;
    renderActions(): any;
    renderGroups(): any;
    static defaultProps: {
        actions: any[];
        groups: any[];
        lang: {
            leftBtn: string;
            rightBtn: string;
        };
        show: boolean;
    };
}

export class PickerGroup {
    constructor(props: any);
    adjustPosition(props: any): any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    handleTouchEnd(e: any): any;
    handleTouchMove(e: any): void;
    handleTouchStart(e: any): void;
    render(): any;
    updateSelected(...args: any[]): void;
    static defaultProps: {
        aniamtion: boolean;
        defaultIndex: number;
        groupIndex: number;
        height: number;
        indicatorHeight: number;
        indicatorTop: number;
        itemHeight: number;
        mapKeys: {
            label: string;
        };
    };
}

export class Popup {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
        enableMask: boolean;
        show: boolean;
    };
}

export class SearchBar {
    constructor(...args: any[]);
    blurHandle(e: any): void;
    cancelHandle(e: any): void;
    changeHandle(e: any): void;
    clearHandle(e: any): void;
    render(): any;
    submitHandle(e: any): void;
    static defaultProps: {
        autocomplete: string;
        lang: {
            cancel: string;
        };
        onCancel: any;
        onChange: any;
        onClear: any;
        onSubmit: any;
        placeholder: string;
        searchName: string;
    };
}

export class Select {
    constructor(...args: any[]);
    render(): any;
    renderData(data: any): any;
    static defaultProps: {
        data: any[];
    };
}

export class Slider {
    constructor(props: any);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    handleTouchEnd(e: any): void;
    handleTouchMove(e: any): any;
    handleTouchStart(e: any): void;
    render(): any;
    updateValue(...args: any[]): any;
    static defaultProps: {
        defaultValue: number;
        disabled: boolean;
        max: number;
        min: number;
        showValue: boolean;
        snapToValue: boolean;
        step: number;
    };
}

export class Tab {
    constructor(...args: any[]);
    handleHeaderClick(idx: any): void;
    parseChild(children: any): any;
    render(): any;
    renderBar(type: any, children: any, cls: any): any;
    static defaultProps: {
        defaultIndex: number;
        type: string;
    };
}

export class TabBar {
    constructor(...args: any[]);
    render(): any;
}

export class TabBarIcon {
    constructor(...args: any[]);
    render(): any;
}

export class TabBarItem {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
        active: boolean;
        icon: boolean;
        label: string;
    };
}

export class TabBarLabel {
    constructor(...args: any[]);
    render(): any;
}

export class TabBody {
    constructor(...args: any[]);
    render(): any;
}

export class TabBodyItem {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
        active: boolean;
    };
}

export class TextArea {
    constructor(...args: any[]);
    handleChange(e: any): void;
    render(): any;
    static defaultProps: {
        defaultValue: any;
        showCounter: boolean;
    };
}

export class Toast {
    constructor(...args: any[]);
    render(): any;
    static defaultProps: {
        icon: string;
        show: boolean;
    };
}

export class Uploader {
    constructor(...args: any[]);
    detectVerticalSquash(img: any): any;
    handleChange(e: any): void;
    handleFile(file: any, cb: any, ...args: any[]): void;
    render(): any;
    renderFiles(): any;
    static defaultProps: {
        files: any[];
        lang: {
            maxError: any;
        };
        maxCount: number;
        maxWidth: number;
        onChange: any;
        onError: any;
        title: string;
    };
}

export const version: string;
export function Agreement(props: any): any;
export function Cell(props: any): any;
export function CellBody(props: any): any;
export function CellFooter(props: any): any;
export function CellHeader(props: any): any;
export function Cells(props: any): any;
export function CellsTips(props: any): any;
export function CellsTitle(props: any): any;
export function Checkbox(props: any): any;
export function Flex(props: any): any;
export function FlexItem(props: any): any;
export function Footer(props: any): any;
export function FooterLink(props: any): any;
export function FooterLinks(props: any): any;
export function FooterText(props: any): any;
export function Gallery(props: any): any;
export function GalleryDelete(props: any): any;
export function Input(props: any): any;
export function Label(props: any): any;
export function LoadMore(props: any): any;
export function PopupHeader(props: any): any;
export function Preview(props: any): any;
export function PreviewBody(props: any): any;
export function PreviewButton(props: any): any;
export function PreviewFooter(props: any): any;
export function PreviewHeader(props: any): any;
export function PreviewItem(props: any): any;
export function Progress(props: any): any;
export function Radio(props: any): any;
export function Switch(props: any): any;
export function Toptips(props: any): any;
export function VCode(props: any): any;
export namespace ActionSheet {
    namespace propTypes {
        function actions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function autoDectect(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function menus(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function onRequestClose(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function show(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function type(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace actions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace autoDectect {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace menus {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace onRequestClose {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace show {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace type {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Badge {
    namespace propTypes {
        function dot(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function preset(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace dot {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace preset {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Button {
    namespace propTypes {
        function disabled(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function size(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function type(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace disabled {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace size {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace type {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace ButtonArea {
    namespace propTypes {
        function direction(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace direction {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Cell {
    const defaultProps: {
        access: boolean;
        link: boolean;
    };
    namespace propTypes {
        function access(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function component(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function link(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace access {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace component {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace link {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace CellBody {
    const defaultProps: {
        primary: boolean;
    };
    namespace propTypes {
        function primary(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace primary {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace CellFooter {
    const defaultProps: {
        primary: boolean;
    };
    namespace propTypes {
        function primary(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace primary {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace CellHeader {
    const defaultProps: {
        primary: boolean;
    };
    namespace propTypes {
        function primary(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace primary {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Cells {
    const defaultProps: {
    };
    const propTypes: {
    };
}

export namespace CityPicker {
    namespace propTypes {
        function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function dataMap(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function selected(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function show(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace dataMap {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace selected {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace show {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Dialog {
    namespace propTypes {
        function autoDectect(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function buttons(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function show(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function type(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace autoDectect {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace buttons {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace show {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace title {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace type {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace FlexItem {
    const defaultProps: {
        component: string;
    };
    namespace propTypes {
        function component(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace component {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Form {
    namespace propTypes {
        function checkbox(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function radio(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace checkbox {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace radio {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace FormCell {
    namespace propTypes {
        function checkbox(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function radio(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function select(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function selectPos(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function vcode(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function warn(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace checkbox {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace radio {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace select {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace selectPos {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace vcode {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace warn {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Gallery {
    const defaultProps: {
        show: any;
        src: string;
    };
    namespace propTypes {
        function show(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function src(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace show {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace src {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Grid {
    namespace propTypes {
        function icon(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace icon {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace label {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Grids {
    namespace propTypes {
        function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace data {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Icon {
    namespace propTypes {
        function size(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function value(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace size {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace value {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Input {
    const defaultProps: {
        defaultValue: any;
    };
    namespace propTypes {
        function defaultValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace defaultValue {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace LoadMore {
    const defaultProps: {
        loading: boolean;
        showDot: boolean;
        showLine: boolean;
    };
    namespace propTypes {
        function loading(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function showDot(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function showLine(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace loading {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace showDot {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace showLine {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Mask {
    namespace propTypes {
        function transparent(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace transparent {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace MediaBox {
    namespace propTypes {
        function type(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace type {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace MediaBoxInfo {
    namespace propTypes {
        function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace data {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace MediaBoxInfoMeta {
    namespace propTypes {
        function extra(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace extra {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Msg {
    namespace propTypes {
        function buttons(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function description(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function extraHref(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function extraText(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function footer(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function type(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace buttons {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace description {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace extraHref {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace extraText {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace footer {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace title {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace type {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace NavBarItem {
    namespace propTypes {
        function active(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace active {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace label {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Panel {
    namespace propTypes {
        function access(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace access {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Picker {
    namespace propTypes {
        function actions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function defaultSelect(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function groups(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function lang(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function onCancel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function onChange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function onGroupChange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function show(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace actions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace defaultSelect {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace groups {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace lang {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace onCancel {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace onChange {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace onGroupChange {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace show {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace PickerGroup {
    namespace propTypes {
        function aniamtion(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function defaultIndex(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function groupIndex(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function height(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function indicatorHeight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function indicatorTop(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function itemHeight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function onChange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace aniamtion {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace defaultIndex {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace groupIndex {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace height {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace indicatorHeight {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace indicatorTop {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace itemHeight {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace onChange {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Popup {
    namespace propTypes {
        function enableMask(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function show(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace enableMask {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace show {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace PopupHeader {
    const defaultProps: {
        left: string;
        right: string;
    };
    namespace propTypes {
        function left(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function leftOnClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function right(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function rightOnClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace left {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace leftOnClick {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace right {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace rightOnClick {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace PreviewButton {
    const defaultProps: {
        primary: boolean;
    };
    namespace propTypes {
        function primary(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace primary {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace PreviewItem {
    const defaultProps: {
        label: boolean;
        value: boolean;
    };
    namespace propTypes {
        function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function value(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace label {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace value {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Progress {
    const defaultProps: {
        showCancel: boolean;
        value: number;
    };
    namespace propTypes {
        function showCancel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function value(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace showCancel {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace value {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace SearchBar {
    namespace propTypes {
        function lang(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function onCancel(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function onChange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function onClear(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function onSubmit(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function placeholder(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function searchName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace lang {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace onCancel {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace onChange {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace onClear {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace onSubmit {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace placeholder {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace searchName {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Select {
    namespace propTypes {
        function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace data {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Slider {
    namespace propTypes {
        function defaultValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function disabled(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function max(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function min(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function onChange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function showValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function snapToValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function step(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function value(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace defaultValue {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace disabled {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace max {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace min {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace onChange {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace showValue {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace snapToValue {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace step {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace value {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Tab {
    namespace propTypes {
        function defaultIndex(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function onChange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function type(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace defaultIndex {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace onChange {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace type {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace TabBarItem {
    namespace propTypes {
        function active(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function icon(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace active {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace icon {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace label {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace TabBodyItem {
    namespace propTypes {
        function active(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace active {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace TextArea {
    namespace propTypes {
        function defaultValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function maxLength(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function showCounter(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace defaultValue {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace maxLength {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace showCounter {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Toast {
    namespace propTypes {
        function icon(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function iconSize(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function show(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace icon {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace iconSize {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace show {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Toptips {
    const defaultProps: {
        show: boolean;
        type: string;
    };
    namespace propTypes {
        function show(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function type(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace show {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace type {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}

export namespace Uploader {
    namespace propTypes {
        function files(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function lang(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function maxCount(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function maxWidth(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function onChange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function onError(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function title(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace files {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace lang {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace maxCount {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace maxWidth {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace onChange {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace onError {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        namespace title {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
