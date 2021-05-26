import { User } from '@ckeditor/ckeditor5-collaboration-core';
import * as Comments from '@ckeditor/ckeditor5-comments';
import AnnotationView from '@ckeditor/ckeditor5-comments/src/annotations/view/annotationview';
import { CommentsConfig } from '@ckeditor/ckeditor5-comments/src/comments';
import CommentsRepository, {
    Comment,
    CommentThread,
} from '@ckeditor/ckeditor5-comments/src/comments/commentsrepository';
import BaseCommentThreadView from '@ckeditor/ckeditor5-comments/src/comments/ui/view/basecommentthreadview';
import BaseCommentView from '@ckeditor/ckeditor5-comments/src/comments/ui/view/basecommentview';
import { Editor } from '@ckeditor/ckeditor5-core';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { View } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';

class MyEditor extends Editor {}
const editor = new MyEditor();

new Comments.Comments(editor);
const config: CommentsConfig = {
    CommentThreadView: new BaseCommentThreadView(new Locale(), new CommentThread(new CommentsRepository()), new User()),
    CommentView: new BaseCommentView(new Locale(), new Comment(new CommentsRepository())),
    maxThreadTotalWeight: 0,
    maxCommentCharsWhenCollapsed: 0,
    whenCollapsed: 0,
};

ClassicEditor.create('', { comments: config });
ClassicEditor.create(document.querySelector('#editor')!, { comments: config });

const repo = new Comments.CommentsRepository();
repo.addCommentThread({
    threadId: 'foo',
    channelId: 'bar',
    comments: [{ commentId: 'c1', content: 'hello', authorId: 'jojo' }],
});
repo.switchReadOnly(false, '');
repo.switchReadOnly(false);
repo.getCommentThread('');
// $ExpectError
repo.addCommentThread(repo.getCommentThread(''));
repo.hasCommentThread('');
repo.switchReadOnly(repo.hasCommentThread(''), '');
repo.fetchCommentThread({ channelId: '', threadId: '' }).then(thread => thread.comments.length / 0);
repo.openNewCommentThread({ channelId: '', threadId: '', target: document.getElementById('')! });
repo.adapter.getCommentThread({ channelId: '', threadId: '' }).then(thread => thread.comments.length / 0);

new Comments.CommentsOnly(editor);

const annotations = new Comments.Annotations(editor);
let annotation = annotations.getByInnerView(new AnnotationView());
annotation = annotations.collection.getByInnerView(annotation.view);
annotations.activeAnnotations.add(annotation);
document.appendChild(annotation.target as Element);
const view: View = annotation.innerView;
annotation.isActive = false;

const ui = new Comments.AnnotationsUIs(editor);
repo.switchReadOnly(ui.isActive(''));
repo.switchReadOnly(ui.hasActive());
ui.activeUIs.add('');
ui.switchTo('');
ui.register('', { activeAnnotation: annotation, attach: () => {}, detach: () => {}, setActiveAnnotation: () => {} });
