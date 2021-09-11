import whoops = require('whoops');

const simpleUserError = whoops('UserError');
throw simpleUserError('User not found');

const basicError = whoops();
throw basicError();

const userError2 = whoops('userError');
throw userError2();

const extendedError = whoops('userError', { code: 'ENOVALID' });
extendedError().code;

const extendedUserError = whoops('userError', {
    code: 'ENOVALID',
    message: (props: any) => `User '${props.username}' not found`,
});

extendedUserError({ username: 'kiko' });
