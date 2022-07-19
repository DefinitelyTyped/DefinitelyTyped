import { generatePath } from 'react-router';

declare const unknownPath: string;

// incorrect usage, type errors
// @ts-expect-error
generatePath('/posts/:postId', {});
// @ts-expect-error
generatePath('/posts/:postId/comments/:commentId', { postId: '1' });
// @ts-expect-error
generatePath('/posts/:postId', { userId: '1', postId: '1' });
// @ts-expect-error
generatePath('/posts/:postId/:commentId+', { postId: '1' });
// @ts-expect-error
generatePath(unknownPath, { nullParam: null });

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
