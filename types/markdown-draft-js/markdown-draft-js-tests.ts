import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';

const rawContent = convertToRaw(EditorState.createEmpty().getCurrentContent());
draftToMarkdown(rawContent);

const rawDraft = markdownToDraft('# Test');
convertFromRaw(rawDraft);
