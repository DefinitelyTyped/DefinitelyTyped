import Document from '../document';
import Operation from './operation';

export default abstract class OperationFactory {
    _(): void;
    static fromJSON(json: Record<string, unknown>, document: Document): Operation;
}
