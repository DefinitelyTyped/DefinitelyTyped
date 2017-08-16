import * as utils from 'eslint-plugin-prettier';

declare function log(...args: Array<string | number>): void;

utils.showInvisibles(' some string ');

utils.generateDifferences('abc', 'def').forEach(difference => {
    const {
        operation,
        offset,
        deleteText = '',
        insertText = '',
    } = difference;

    switch (operation) {
        case utils.DifferenceOperation.Delete:
            log('delete', offset, deleteText);
            break;
        case utils.DifferenceOperation.Insert:
            log('insert', offset, insertText);
            break;
        case utils.DifferenceOperation.Replace:
            log('replace', offset, insertText, deleteText);
            break;
        default:
            throw new Error(`Unexpected operation: '${operation}'`);
    }
});
