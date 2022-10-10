import HashCode from '../misc/HashCode';
import LexerActionType from '../atn/LexerActionType';

export default abstract class LexerAction {
    readonly actionType: LexerActionType;
    readonly isPositionDependent: boolean;

    constructor(action: LexerActionType);

    hashCode(): number;

    updateHashCode(hash: HashCode): void;

    equals(other: LexerAction): boolean;
}
