import { UserInterface } from '../';
import * as React from 'react';

export interface UserPassesTestProps {
    testFunc: (user: UserInterface) => boolean;
}
declare const UserPassesTest: React.FC<UserPassesTestProps>;
export default UserPassesTest;
