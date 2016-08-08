/// <reference path="draft-js-0.2.2.d.ts" />
/// <reference path="../react/react-global.d.ts" />
/// <reference path="../react/react-dom.d.ts"/>

import * as React from "react";

import {
    Editor,
    EditorState,
    Entity,
    CharacterMetadata,
    ContentBlock,
    Modifier,
    SelectionState,
    genKey
} from "draft-js";

export class Tag extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    remove = (): void => {
        this.props.blockProps.removeBlock(this.props.block.getKey());
    }

    render () {
        const {block} = this.props;
        if (block.getEntityAt(0)) {
            const data = Entity.get(block.getEntityAt(0)).getData();

            return (
                <div className="tag" contentEditable={false} >
                    {data.content.name}
                    <span className="remove" onClick={this.remove}>
                        <i className="material-icons">clear</i>
                    </span>
                </div>
            );
        }
    }
}

export class Hint extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render () {
        const {block} = this.props;
        if (block.getEntityAt(0)) {
            const data = Entity.get(block.getEntityAt(0)).getData();

            return (
                <div className="hint" contentEditable={false} >
                    <span className="autocomplete">{this.props.blockProps.autocomplete}</span>
                    {data.content.text}
                </div>
            );
        }
    }
}

export function removeBlock(editorState: EditorState, blockKey: string) {
    const content = editorState.getCurrentContent();

    const targetRange = new SelectionState({
        anchorKey: blockKey,
        anchorOffset: 0,
        focusKey: blockKey,
        focusOffset: 1
    });

    const withoutTag = Modifier.removeRange(content, targetRange, "backward");
    const resetBlock = Modifier.setBlockType(
        withoutTag,
        withoutTag.getSelectionAfter(),
        "unstyled"
    );

    const newState = EditorState.push(editorState, resetBlock, "remove-range");
    return EditorState.forceSelection(newState, resetBlock.getSelectionAfter());
}

export function applyEntity(editorState: EditorState, blockKey: string, entityKey: string) {
    const content = editorState.getCurrentContent();

    const targetRange = new SelectionState({
        anchorKey: blockKey,
        anchorOffset: 0,
        focusKey: blockKey,
        focusOffset: 1
    });

    const withNewEntity = Modifier.applyEntity(
        content,
        targetRange,
        entityKey
    )

    const newState = EditorState.push(editorState, withNewEntity, "change-entity");
    return EditorState.forceSelection(newState, withNewEntity.getSelectionAfter());
}

export function addTagBlock(content: any, editorState: EditorState): any {
    const contentState = editorState.getCurrentContent();

    const entityKey = Entity.create(
        "TOKEN",
        "IMMUTABLE",
        {content}
    );

    const charData = CharacterMetadata.create({entity: entityKey});
    const tag = new ContentBlock({
        key: genKey(),
        type: "tag",
        text: "",
        characterList: [],
    });

    const withTag = contentState.set("blockMap", contentState.getBlockMap().set(tag.key, tag));

    const withRemovedPreviousBlock = withTag.set("blockMap", withTag.getBlockMap().delete(contentState.getSelectionBefore().getAnchorKey()))

    const withTagBlock = EditorState.push(editorState, withRemovedPreviousBlock, "insert-fragment");

    return withTagBlock;
}

export function addHintBlock(content: any, editorState: EditorState): any {
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();

    const entityKey = Entity.create(
        "TOKEN",
        "IMMUTABLE",
        {content}
    );

    const charData = CharacterMetadata.create({entity: entityKey});
    const hint = new ContentBlock({
        key: genKey(),
        type: "hint",
        text: "",
        characterList: [],
    });
    const empty = new ContentBlock({
        key: genKey(),
        type: "unstyled",
        text: "",
        characterList: [],
    });

    const withEmpty = contentState.set("blockMap", contentState.getBlockMap().set(empty.key, empty));
    const withHint = withEmpty.set("blockMap", withEmpty.getBlockMap().set(hint.key, hint));
    return {
        editorState: EditorState.forceSelection(EditorState.push(editorState, withHint, "insert-fragment"), selectionState),
        blockKey: hint.key
    }

}

export class SearchField extends React.Component<any, any> {
    public onChange: any;

    constructor(props: any) {
        super(props);
        this.onChange = (editorState: EditorState) => {
          this.setState({editorState})
        };
    }

    render() {
        const {editorState} = this.state;
        return (
                <Editor suppressContentEditableWarning
                        editorState={editorState}
                        onChange={this.onChange}
                       />
        )
    }
}
