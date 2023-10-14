import { dispatch, select } from "@wordpress/data";
import * as e from "@wordpress/editor";

declare const BLOCK_INSTANCE: import("@wordpress/blocks").BlockInstance;
declare const FILELIST: FileList;
declare const FILE_ARRAY: File[];

// $ExpectType EditorStoreDescriptor
e.store;

// $ExpectType "core/editor"
e.store.name;

//
// Components
// ============================================================================

//
// AutosaveMonitor
//
<e.AutosaveMonitor />;

//
// DocumentOutline
//
<e.DocumentOutline onSelect={() => console.log("selected")} />;
<e.DocumentOutline onSelect={() => console.log("selected")} hasOutlineItemsDisabled />;

//
// DocumentOutlineCheck
//
<e.DocumentOutlineCheck>Hello World</e.DocumentOutlineCheck>;

//
// EditorGlobalKeyboardShortcuts
//
<e.EditorGlobalKeyboardShortcuts />;

//
// EditorHistoryRedo
//
<e.EditorHistoryRedo />;

//
// EditorHistoryUndo
//
<e.EditorHistoryUndo />;

//
// EditorNotices
//
<e.EditorNotices />;

//
// ErrorBoundary
//
<e.ErrorBoundary onError={() => console.log("error!")}>Hello world</e.ErrorBoundary>;

//
// PageAttributesCheck
//
<e.PageAttributesCheck>Hello world</e.PageAttributesCheck>;

//
// PageAttributesOrder
//
<e.PageAttributesOrder />;

//
// PageAttributesParent
//
<e.PageAttributesParent />;

//
// PageTemplate
//
<e.PageTemplate />;

//
// PostAuthor
//
<e.PostAuthor />;

//
// PostAuthorCheck
//
<e.PostAuthorCheck>Hello world</e.PostAuthorCheck>;

//
// PostComments
//
<e.PostComments />;

//
// PostExcerpt
//
<e.PostExcerpt />;

//
// PostExcerptCheck
//
<e.PostExcerptCheck>Hello world</e.PostExcerptCheck>;
<e.PostExcerptCheck supportKeys="author">Hello world</e.PostExcerptCheck>;
<e.PostExcerptCheck supportKeys={["author", "thumbnail"]}>Hello world</e.PostExcerptCheck>;

//
// PostFeaturedImage
//
<e.PostFeaturedImage />;

//
// PostFeaturedImageCheck
//
<e.PostFeaturedImageCheck>Hello world</e.PostFeaturedImageCheck>;
<e.PostFeaturedImageCheck supportKeys="author">Hello world</e.PostFeaturedImageCheck>;
<e.PostFeaturedImageCheck supportKeys={["author", "thumbnail"]}>Hello world</e.PostFeaturedImageCheck>;

//
// PostFormat
//
<e.PostFormat />;

//
// PostFormatCheck
//
<e.PostFormatCheck>Hello world</e.PostFormatCheck>;
<e.PostFormatCheck supportKeys="author">Hello world</e.PostFormatCheck>;
<e.PostFormatCheck supportKeys={["author", "thumbnail"]}>Hello world</e.PostFormatCheck>;

//
// PostLastRevision
//
<e.PostLastRevision />;

//
// PostLastRevisionCheck
//
<e.PostLastRevisionCheck>Hello world</e.PostLastRevisionCheck>;

//
// PostLockedModal
//
<e.PostLockedModal />;

//
// PostPendingStatus
//
<e.PostPendingStatus />;

//
// PostPendingStatusCheck
//
<e.PostPendingStatusCheck>Hello world</e.PostPendingStatusCheck>;

//
// PostPingbacks
//
<e.PostPingbacks />;

//
// PostPreviewButton
//
<e.PostPreviewButton />;
<e.PostPreviewButton forceIsAutosaveable />;
<e.PostPreviewButton forcePreviewLink="https://foo.bar" />;
<e.PostPreviewButton forcePreviewLink="https://foo.bar" forceIsAutosaveable />;

//
// PostPublishButton
//
<e.PostPublishButton focusOnMount={true} onSubmit={() => console.log("submitted")} forceIsDirty forceIsSaving />;
<e.PostPublishButton forceIsDirty forceIsSaving={false} isOpen isToggle onToggle={() => console.log("toggled")} />;

//
// PostPublishButtonLabel
//
<e.PostPublishButtonLabel />;
<e.PostPublishButtonLabel forceIsSaving />;

//
// PostPublishPanel
//
<e.PostPublishPanel
    forceIsDirty
    forceIsSaving
    className="foo"
    aria-hidden={false}
    onClose={() => console.log("closed")}
    PrePublishExtension={() => <h1>hello world</h1>}
    PostPublishExtension={() => <h1>hello world</h1>}
/>;
<e.PostPublishPanel onClose={() => console.log("closed")} />;

//
// PostSavedState
//
<e.PostSavedState />;
<e.PostSavedState forceIsDirty forceIsSaving />;

//
// PostSchedule
//
<e.PostSchedule />;

//
// PostScheduleCheck
//
<e.PostScheduleCheck>Hello world</e.PostScheduleCheck>;

//
// PostScheduleLabel
//
<e.PostScheduleLabel />;

//
// PostSticky
//
<e.PostSticky />;

//
// PostStickyCheck
//
<e.PostStickyCheck>Hello world</e.PostStickyCheck>;

//
// PostSwitchToDraftButton
//
<e.PostSwitchToDraftButton />;

//
// PostTaxonomies
//
<e.PostTaxonomies />;
<e.PostTaxonomies
    taxonomyWrapper={(content, taxonomy) => (
        <div>
            <h1>{taxonomy.name}</h1>
            <code>{taxonomy.slug}</code>
            {content}
        </div>
    )}
/>;

//
// PostTaxonomiesCheck
//
<e.PostTaxonomiesCheck>Hello world</e.PostTaxonomiesCheck>;

//
// PostTaxonomiesFlatTermSelector
//
<e.PostTaxonomiesFlatTermSelector>Hello world</e.PostTaxonomiesFlatTermSelector>;

//
// PostTaxonomiesHierarchicalTermSelector
//
<e.PostTaxonomiesHierarchicalTermSelector>Hello world</e.PostTaxonomiesHierarchicalTermSelector>;

//
// PostTextEditor
//
<e.PostTextEditor />;

//
// PostTitle
//
<e.PostTitle />;

//
// PostTrash
//
<e.PostTrash />;

//
// PostTrashCheck
//
<e.PostTrashCheck>Hello world</e.PostTrashCheck>;

//
// PostTypeSupportCheck
//
<e.PostTypeSupportCheck supportKeys="author">Hello world</e.PostTypeSupportCheck>;
<e.PostTypeSupportCheck supportKeys={["author", "thumbnail"]}>Hello world</e.PostTypeSupportCheck>;

//
// PostVisibility
//
<e.PostVisibility />;

//
// PostVisibilityCheck
//
<e.PostVisibilityCheck
    render={({ canEdit }) => (
        <div>
            <h1>{`You ${canEdit ? "can" : "can't"} edit`}</h1>
        </div>
    )}
/>;

//
// PostVisibilityLabel
//
<e.PostVisibilityLabel />;

//
// TableOfContents
//
<e.TableOfContents />;
<e.TableOfContents hasOutlineItemsDisabled />;

//
// TextEditorGlobalKeyboardShortcuts
//
<e.TextEditorGlobalKeyboardShortcuts />;

//
// UnsavedChangesWarning
//
<e.UnsavedChangesWarning />;

//
// VisualEditorGlobalKeyboardShortcuts
//
<e.VisualEditorGlobalKeyboardShortcuts />;

//
// WordCount
//
<e.WordCount />;

//
// EditorProvider
//
<e.EditorProvider useSubRegistry={false} post={{}}>
    Hello World
</e.EditorProvider>;

<e.AlignmentToolbar value="adf" onChange={t => t && console.log(t)} />;

//
// Store
// ============================================================================

// $ExpectType IterableIterator<void>
dispatch("core/editor").autosave();
// $ExpectType IterableIterator<void>
dispatch("core/editor").autosave({ foo: true, bar: false });

// $ExpectType void
dispatch("core/editor").editPost({ content: "foo" });

// $ExpectType IterableIterator<void>
dispatch("core/editor").resetEditorBlocks([BLOCK_INSTANCE]);
// $ExpectType IterableIterator<void>
dispatch("core/editor").resetEditorBlocks([BLOCK_INSTANCE], { foo: "bar" });

// $ExpectType void
dispatch("core/editor").resetPost({ content: "foo" });

// $ExpectType IterableIterator<void>
dispatch("core/editor").savePost();
// $ExpectType IterableIterator<void>
dispatch("core/editor").savePost({ content: "foo" });

// $ExpectType IterableIterator<void>
dispatch("core/editor").setupEditor({ content: "foo" });
// $ExpectType IterableIterator<void>
dispatch("core/editor").setupEditor({ content: "foo" }, { content: "bar" });
// $ExpectType IterableIterator<void>
dispatch("core/editor").setupEditor({ content: "foo" }, { content: "bar" }, [
    ["core/paragraph", {}, [["core/paragraph"]]],
]);

// $ExpectType void
dispatch("core/editor").updateEditorSettings({ codeEditingEnabled: false });

// $ExpectType void
dispatch("core/editor").updatePostLock({ isLocked: false, user: null });

// $ExpectType string | undefined
select("core/editor").getActivePostLock();

// $ExpectType {}
select("core/editor").getAutosaveAttribute("author");

// $ExpectType Page | Post
select("core/editor").getCurrentPost();

// $ExpectType (RenderedText<"edit"> & { is_protected: boolean; block_version: string; }) | (RenderedText<"edit"> & { is_protected: boolean; block_version: string; }) | undefined
select("core/editor").getCurrentPostAttribute("content");
// $ExpectType number | undefined
select("core/editor").getCurrentPostAttribute("author");
// $ExpectType OmitNevers<Record<string, string>, { [x: string]: string; }> | undefined
select("core/editor").getCurrentPostAttribute("meta");

// $ExpectType EditorSettings
select("core/editor").getEditorSettings();

// $ExpectType any
select("core/editor").getPostEdits().content;
// $ExpectType any
select("core/editor").getPostEdits().author;
// $ExpectType any
select("core/editor").getPostEdits().foo;

// $ExpectType boolean
select("core/editor").inSomeHistory(state => state.foo === true);

//
// Utils
// ============================================================================

// $ExpectType void
e.mediaUpload({
    filesList: FILELIST,
    onFileChange(files) {
        console.log(files[0].alt, files[0].media_type);
    },
});

// $ExpectType void
e.mediaUpload({
    additionalData: {
        foo: "foo",
        bar: ["bar", "baz"],
    },
    allowedTypes: ["image/jpeg"],
    filesList: FILE_ARRAY,
    maxUploadFileSize: 5000,
    onError(message) {
        console.log(message);
    },
    onFileChange(files) {
        console.log(files[0].alt, files[0].media_type);
    },
});
