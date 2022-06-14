import { Color } from '../types/color';
import { ExportMixin, BaseNodeMixin, ChildrenMixin } from './mixin';

type FlowStartingPoint = {
  nodeId: string;
  name: string;
};

export interface CanvasNode extends BaseNodeMixin, ChildrenMixin, ExportMixin {
  type: 'CANVAS';
  backgroundColor: Color;
  prototypeStartNodeID: string | null; // 已弃用
  flowStartingPoints: FlowStartingPoint[]; // 在原型设置面板中按位置排序的流程起点。
}
