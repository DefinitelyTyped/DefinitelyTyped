import Helper from '@ember/component/helper';
import UserAgentService from '../services/user-agent';

export default class UserAgentHelper extends Helper {
    userAgent: UserAgentService;

    compute<Key extends keyof UserAgentService>(positional: [prop: Key]): UserAgentService[Key];
}
