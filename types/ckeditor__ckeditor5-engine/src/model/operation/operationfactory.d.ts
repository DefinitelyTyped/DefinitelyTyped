import Document from '../document';
import AttributeOperation from './attributeoperation';
import InsertOperation from './insertoperation';
import MarkerOperation from './markeroperation';
import MergeOperation from './mergeoperation';
import MoveOperation from './moveoperation';
import NoOperation from './nooperation';
import Operation from './operation';
import RenameOperation from './renameoperation';
import RootAttributeOperation from './rootattributeoperation';
import SplitOperation from './splitoperation';

export default abstract class OperationFactory {
    _(): void;
    static fromJSON(
        json: { __className: typeof AttributeOperation['className'] },
        document: Document,
    ): AttributeOperation;
    static fromJSON(json: { __className: typeof InsertOperation['className'] }, document: Document): InsertOperation;
    static fromJSON(json: { __className: typeof MarkerOperation['className'] }, document: Document): MarkerOperation;
    static fromJSON(json: { __className: typeof MoveOperation['className'] }, document: Document): MoveOperation;
    static fromJSON(json: { __className: typeof NoOperation['className'] }, document: Document): NoOperation;
    static fromJSON(json: { __className: typeof RenameOperation['className'] }, document: Document): RenameOperation;
    static fromJSON(
        json: { __className: typeof RootAttributeOperation['className'] },
        document: Document,
    ): RootAttributeOperation;
    static fromJSON(json: { __className: typeof SplitOperation['className'] }, document: Document): SplitOperation;
    static fromJSON(json: { __className: typeof MergeOperation['className'] }, document: Document): MergeOperation;
    static fromJSON(json: { __className: typeof Operation['className'] | string }, document: Document): Operation;
}
