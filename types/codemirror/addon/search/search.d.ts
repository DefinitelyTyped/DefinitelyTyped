import '../../';
import './searchcursor';
import '../dialog/dialog';

declare module '../../' {
    interface CommandActions {
        find(cm: Editor): void;
        findPersistent(cm: Editor): void;
        findPersistentNext(cm: Editor): void;
        findPersistentPrev(cm: Editor): void;
        findNext(cm: Editor): void;
        findPrev(cm: Editor): void;
        clearSearch(cm: Editor): void;
        replace(cm: Editor): void;
        replaceAll(cm: Editor): void;
    }

    interface EditorConfiguration {
        search?: {
            bottom: boolean;
        };
    }
}
