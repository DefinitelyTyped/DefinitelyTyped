import '../../';

declare module '../../' {
    interface CommandActions {
        newlineAndIndentContinueMarkdownList(cm: Editor): void | typeof Pass;
    }
}
