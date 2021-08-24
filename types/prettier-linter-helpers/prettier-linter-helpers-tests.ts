import { generateDifferences, showInvisibles } from 'prettier-linter-helpers';

declare function log(...args: Array<string | number>): void;

showInvisibles(' some string ');

generateDifferences('abc', 'def').forEach(difference => {
    const { operation, offset, deleteText = '', insertText = '' } = difference;

    switch (operation) {
        case 'delete':
            log('delete', offset, deleteText);
            break;
        case 'insert':
            log('insert', offset, insertText);
            break;
        case 'replace':
            log('replace', offset, insertText, deleteText);
            break;
        default:
            throw new Error(`Unexpected operation: '${operation}'`);
    }
});

generateDifferences.INSERT;
generateDifferences.DELETE;
generateDifferences.REPLACE;
