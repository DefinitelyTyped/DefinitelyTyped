import * as isUUID from 'is-uuid';

isUUID.v1('857b3f0a-a777-11e5-bf7f-feff819cdc9f');
isUUID.v2('9a7b330a-a736-21e5-af7f-feaf819cdc9f');
isUUID.v3('0a7b330a-a736-35ea-8f7f-feaf019cdc00');
isUUID.v4('c51c80c2-66a1-442a-91e2-4f55b4256a72');
isUUID.v5('5a2de30a-a736-5aea-8f7f-ad0f019cdc00');

isUUID.anyNonNil('c51c80c2-66a1-442a-91e2-4f55b4256a72');
isUUID.nil('00000000-0000-0000-0000-000000000000');
