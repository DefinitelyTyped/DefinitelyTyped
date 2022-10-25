import * as React from 'react';
import EmailEditor, {
  ConditionalMergeTag,
  Design,
  DisplayCondition,
  DisplayConditionDoneCallback,
  EmptyDisplayCondition,
  FileInfo,
  FileUploadDoneCallback,
  GroupedMergeTag,
  GroupedSpecialLink,
  HtmlExport,
  SimpleMergeTag,
  SimpleSpecialLink
} from 'react-email-editor';

const TOOLS_CONFIG = {
  image: {
    enabled: true,
    position: 1,
    properties: {
      altText: {
        value: "Image"
      }
    }
  },
  heading: {
    properties: {
      text: {
        value: 'This is a different heading'
      }
    }
  }
};

const simpleMergeTag: SimpleMergeTag = { value: '{{simple_merge_tag}}', name: 'Simple Merge Tag' };
const groupedMergeTag: GroupedMergeTag = {
  name: 'Grouped Merge Tag',
  mergeTags: [
    { name: 'Tag 1', value: '{tag_1}' },
    {
      name: 'Tag 2',
      mergeTags: [{ name: 'Tag 4', value: '{tag_4}' }]
    },
    { name: 'Tag 3', value: '{tag_3}', sample: 'sample value' },
  ],
};
const conditionalMergeTag: ConditionalMergeTag = {
  name: 'Conditional',
  rules: [{
    name: 'Rule 1',
    before: '{{#if}}',
    after: '{{/if}}'
  }],
  mergeTags: [{ name: 'Tag 1', value: '{tag_1}' }]
};

const simpleSpecialLink: SimpleSpecialLink = {
  name: 'Simple Special Link',
  href: '[simpleSpecialLink]',
  target: '_self',
};
const groupedSpecialLink: GroupedSpecialLink = {
  name: 'Grouped Special Links',
  specialLinks: [
    {
      name: 'Simple Special Link in Group',
      href: '[groupSpecialLink]',
      target: '_self',
    },
    {
      name: 'Simple Special Link in Group 1',
      href: '[groupSpecialLink1]',
      target: '_blank',
    },
  ],
};

class App extends React.Component {
  private readonly editorRef = React.createRef<EmailEditor>();

  private readonly handleLoad = () => {
    if (this.editorRef.current) {
      this.editorRef.current.loadDesign({ body: { rows: [] } });
      this.editorRef.current.addEventListener('design:updated', () =>
        console.log('design has been updated'),
      );
      this.editorRef.current.registerCallback(
        'image',
        (file: FileInfo, done: FileUploadDoneCallback) =>
          done({
            progress: 100,
            url: `http://example.com/${file.attachments[0].name}`,
          }),
      );
      this.editorRef.current.registerCallback(
        'displayCondition',
        (data: DisplayCondition | EmptyDisplayCondition, done: DisplayConditionDoneCallback) => done(null),
      );
      this.editorRef.current.registerCallback(
        'displayCondition',
        (data: DisplayCondition | EmptyDisplayCondition, done: DisplayConditionDoneCallback) => done({
          type: 'type',
          label: 'label',
          description: 'description',
          before: 'before',
          after: 'after',
        }),
      );
      this.editorRef.current.setMergeTags([
        simpleMergeTag,
        groupedMergeTag,
        conditionalMergeTag
      ]);
    }
  }

  private readonly handleClick = () => {
    if (this.editorRef.current) {
      this.editorRef.current.saveDesign((data: Design) =>
        console.log('saved design', data),
      );
      this.editorRef.current.exportHtml(({ design, html }: HtmlExport) => {
        console.log('exported design', design);
        console.log('exported HTML: ', html);
      });
    }
  }

  render(): React.ReactNode {
    return (
      <>
        <EmailEditor
          ref={this.editorRef}
          style={{ margin: 20 }}
          minHeight={640}
          options={{
            displayMode: 'web',
            projectId: 1,
            locale: 'ru-RU',
            appearance: {
              theme: 'dark',
              panels: {
                tools: {
                  dock: 'right',
                },
              },
            },
            user: {
              id: 1,
              name: 'John Doe',
              email: 'john.doe@acme.com',
            },
            mergeTags: [simpleMergeTag, groupedMergeTag, conditionalMergeTag],
            specialLinks: [simpleSpecialLink, groupedSpecialLink],
            designTags: {
              current_user_name: 'John Doe',
            },
            designTagsConfig: {
              delimiter: ['[[', ']]'],
            },
            tools: TOOLS_CONFIG,
            blocks: [],
            editor: {
              minRows: 1,
              maxRows: 10,
            },
            safeHtml: true,
            customJS: [],
            customCSS: [],
            features: {
              preview: true,
              imageEditor: false,
              undoRedo: true,
              stockImages: false,
              textEditor: {
                spellChecker: true,
                tables: false,
                cleanPaste: true,
                emojis: true,
              },
            },
            translations: {
              en: {
                'custom.key': 'Custom translation',
              },
            },
            displayConditions: [{
              type: 'type',
              label: 'label',
              description: 'description',
              before: 'before',
              after: 'after',
            }]
          }}
          tools={TOOLS_CONFIG}
          appearance={{
            theme: 'dark',
            panels: {
              tools: {
                dock: 'right',
              },
            },
          }}
          projectId={1}
          editorId="editor"
          scriptUrl="https://example.com/embed.js"
          onReady={this.handleLoad}
        />
        <button onClick={this.handleClick}>save all</button>
      </>
    );
  }
}

export default App;
