import { generatePath } from 'react-router';

declare const unknownPath: string;

// inncorect usage, type errors
generatePath('/posts/:postId', {}); // $ExpectError
generatePath('/posts/:postId/comments/:commentId', { postId: '1' }); // $ExpectError
generatePath('/posts/:postId', { userId: '1', postId: '1' }); // $ExpectError
generatePath(unknownPath, { nullParam: null }); // $ExpectError

// correct
generatePath('/posts/:postId', { postId: '1' });
generatePath('/posts/:postId', { postId: 1 });
generatePath('/posts/:postId', { postId: true });
generatePath('/posts/:postId');
generatePath('/posts/:postId?', {});
generatePath('/posts/:postId?', { postId: '1' });
generatePath('/posts/:postId/comments/:commentId?', { postId: '1' });
generatePath('/posts/:postId/comments/:commentId?', { postId: '1', commentId: '1' });
generatePath(unknownPath, { stringParam: '', numParam: 3, boolParam: true, undefinedParam: undefined });
