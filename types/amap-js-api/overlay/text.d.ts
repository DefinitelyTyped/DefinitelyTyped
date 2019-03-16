declare namespace AMap {
    namespace Text {
        type TextAlign = 'left' | 'right' | 'center';
        type VerticalAlign = 'top' | 'middle' | 'bottom';
        interface EventMap<I = Text> extends Marker.EventMap<I> { }
        interface Options extends Marker.Options {
            text?: string;
            textAlign?: TextAlign;
            verticalAlign?: VerticalAlign;
        }
    }

    class Text<ExtraData = any> extends Marker<ExtraData> {
        constructor(options?: Text.Options);
        getText(): string;
        setText(text: string): void;
        setStyle(style: object): void;
    }
}
