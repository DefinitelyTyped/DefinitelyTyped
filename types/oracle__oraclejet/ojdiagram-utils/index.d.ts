import { DvtDiagramLayoutContext, DvtDiagramLayoutContextNode, DvtDiagramLayoutContextLink } from '../ojdiagram';
export function getLayout(obj: {
    nodes: {
        id: any;
        x: number;
        y: number;
        labelLayout: LabelLayout;
    };
    links: {
        id: any;
        path: string;
        coordinateSpace: any;
        labelLayout: LabelLayout;
    };
    nodeDefaults: {
        labelLayout: LabelLayout | ((context: DvtDiagramLayoutContext, node: DvtDiagramLayoutContextNode) => LabelLayout);
    };
    linkDefaults: {
        path: (context: DvtDiagramLayoutContext, link: DvtDiagramLayoutContextLink) => string;
        labelLayout: (context: DvtDiagramLayoutContext, link: DvtDiagramLayoutContextLink) => LabelLayout;
    };
    viewport: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
}): (context: DvtDiagramLayoutContext) => void;
// tslint:disable-next-line interface-over-type-literal
export type LabelLayout = {
    x: number;
    y: number;
    rotationPointX: number;
    rotationPointY: number;
    angle: number;
    halign: string;
    valign: string;
};
