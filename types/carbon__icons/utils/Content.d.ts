type Content = Array<Path | Circle | Rect>;

interface Path {
    elem: 'path';
    attrs: { d: string };
}

interface Circle {
    elem: 'circle';
    attrs: { cx: string; cy: string; r: string };
}

interface Rect {
    elem: 'rect';
    attrs: { width: string; height: string; x: string; y: string; rx: string };
}

export { Content };
