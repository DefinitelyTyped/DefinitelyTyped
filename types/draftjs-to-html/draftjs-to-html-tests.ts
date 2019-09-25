import draftToHtml from 'draftjs-to-html';

const editorContent = {
  blocks: [
    {
      key: '355iu',
      text: 'test',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {
        'text-align': 'center',
      },
    },
  ],
  entityMap: {},
};

// $ExpectType string
draftToHtml(editorContent);
