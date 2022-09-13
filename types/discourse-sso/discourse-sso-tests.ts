import * as discourseSSO from 'discourse-sso';
const sso = new discourseSSO('sso secret string');

if (sso.validate('payload', 'sig')) {
    const nonce = sso.getNonce('payload');

    const userParams: discourseSSO.UserParams = {
        nonce,
        external_id: '1',
        email: 'omg@mail.com',
        username: 'myuser',
        name: 'This Guy'
    };

    const loginString: string = sso.buildLoginString(userParams);
}
