import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';

const rawContent = convertToRaw(EditorState.createEmpty().getCurrentContent());
draftToMarkdown(rawContent);

// Handle options.styleItems
draftToMarkdown(rawContent, {
    styleItems: {
        RED: {
            open() {
                return '<span style="color: red">';
            },

            close() {
                return '</span>';
            },
        },
    },
});

// Handle options.entityItems
draftToMarkdown(rawContent, {
    entityItems: {
        mention: {
            open: () => {
                return '<span class="mention-item">';
            },

            close: () => {
                return '</span>';
            },
        },
    },
});

// Handle preserveNewlines
draftToMarkdown(rawContent, {
    preserveNewlines: true
});
markdownToDraft('# Test', {
    preserveNewlines: true
});

// Handle markdown param
const rawDraft = markdownToDraft('# Test');
convertFromRaw(rawDraft);

// Handle options.blockEntities without arguments and options.remarkablePlugins
const rawDraftWithBlockEntities = markdownToDraft('# Test', {
    blockEntities: {
        link_open: () => {
            return {
                type: 'LINK',
                mutability: 'MUTABLE',
            };
        },
    },
    remarkablePlugins: [{}],
});
convertFromRaw(rawDraftWithBlockEntities);

// Handle options.blockEntities with argument
const rawDraftWithBlockEntitiesArguments = markdownToDraft('# Test', {
    blockEntities: {
        link_open: item => {
            const data = item && {
                url: item.href,
                href: item.href,
            };
            return {
                type: 'LINK',
                mutability: 'MUTABLE',
                data,
            };
        },
    },
});
convertFromRaw(rawDraftWithBlockEntitiesArguments);

// Handle options.blockStyles
const rawDraftWithBlockStyles = markdownToDraft('# Test', {
    blockStyles: {
        code: 'CODE',
    },
});
convertFromRaw(rawDraftWithBlockStyles);

// Handle options.blockTypes without arguments
const rawDraftWithBlockTypes = markdownToDraft('# Test', {
    blockTypes: {
        paragraph_open: () => {
            return {
                type: 'unstyled',
                text: '',
                entityRanges: [],
                inlineStyleRanges: [],
            };
        },
    },
});
convertFromRaw(rawDraftWithBlockTypes);

// Handle options.blockTypes with argument
const rawDraftWithBlockTypesArguments = markdownToDraft('# Test', {
    blockTypes: {
        paragraph_open: item => {
            const text = item ? item.text : '';
            return {
                type: 'unstyled',
                text,
                entityRanges: [],
                inlineStyleRanges: [],
            };
        },
    },
});
convertFromRaw(rawDraftWithBlockTypesArguments);

// Handle options.remarkablePreset and options.remarkableOptions
const rawDraftWithRemarkablePreset = markdownToDraft('# Test', {
    remarkablePreset: 'commonmark',
    remarkableOptions: {
        html: true,
    },
});
convertFromRaw(rawDraftWithRemarkablePreset);
