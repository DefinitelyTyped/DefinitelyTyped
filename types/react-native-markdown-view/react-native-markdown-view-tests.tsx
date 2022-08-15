import * as React from 'react';
import { MarkdownView, MarkdownViewProps } from 'react-native-markdown-view';

export default function Test(props: MarkdownViewProps): JSX.Element {
    return <MarkdownView {...props} />;
}
