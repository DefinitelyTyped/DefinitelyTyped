import '../..';
import '../dialog/dialog';

declare module '../../' {
    interface CommandActions {
        jumpToLine(cm: Editor): void;
    }

    interface EditorConfiguration {
        search?: {
            bottom: boolean;
        };
    }
}
