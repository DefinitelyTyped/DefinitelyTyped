import { generatePath } from 'react-router';

declare const unknownPath: string;

// incorrect usage, type errors
generatePath('/posts/:postId', {}); // $ExpectError
generatePath('/posts/:postId/comments/:commentId', { postId: '1' }); // $ExpectError
generatePath('/posts/:postId', { userId: '1', postId: '1' }); // $ExpectError
generatePath('/posts/:postId/:commentId+', { postId: '1' }); // $ExpectError
generatePath(unknownPath, { nullParam: null }); // $ExpectError
generatePath('/page/:page(comments|latest_activity|latest-posts)', { page: 'show' }); // $ExpectError

// correct
generatePath('/posts/:postId', { postId: '1' });
generatePath('/posts/:postId', { postId: 1 });
generatePath('/posts/:postId', { postId: true });
generatePath('/posts/:postId(\d+)', { postId: 1 });
generatePath('/posts/:postId');
generatePath('/posts/:postId+', { postId: '1' });
generatePath('/posts/:postId?', {});
generatePath('/posts/:postId?', { postId: '1' });
generatePath('/posts/:postId*', {});
generatePath('/posts/:postId*', { postId: '1' });
generatePath('/posts/:postId/comments/:commentId?', { postId: '1' });
generatePath('/posts/:postId(\d+)/comments/:commentId(\d+)', { postId: 1, commentId: 1 });
generatePath('/posts/:postId/comments/:commentId?', { postId: '1', commentId: '1' });
generatePath(unknownPath, { stringParam: '', numParam: 3, boolParam: true, undefinedParam: undefined });
generatePath('/posts/:postId/:page(comments|latest_activity)', { postId: '1', page: 'latest_activity' });
generatePath('/posts/:postId/:page?(comments|latest_activity|latest-posts)', { postId: '1', page: 'comments' });
generatePath('/page/:page?(home)', {page: undefined});
generatePath('/page/:page(home|comments\d+)', { page: 'comments1'});
