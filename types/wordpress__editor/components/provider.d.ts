import { EditorSettings } from '@wordpress/block-editor';
import { BlockInstance } from '@wordpress/blocks';
import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace EditorProvider {
    interface Props {
        children: ReactNode;
        blocks?: BlockInstance[];
        initialEdits?: object;
        useSubRegistry?: boolean;
        settings?: Partial<EditorSettings>;
        post: Record<string, any>; // FIXME: fix this later on if needed
    }
}
declare const EditorProvider: ComponentType<EditorProvider.Props>;

export default EditorProvider;
