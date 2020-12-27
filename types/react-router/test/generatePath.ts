import { generatePath } from 'react-router';

// inncorect usage, type errors
generatePath('/posts/:postId', {}); // $ExpectError
generatePath('/posts/:postId/comments/:commentId', { postId: '1' }); // $ExpectError
generatePath('/posts/:postId', { userId: '1', postId: '1' }); // $ExpectError

// correct
generatePath('/posts/:postId', { postId: '1' });
generatePath('/posts/:postId');
