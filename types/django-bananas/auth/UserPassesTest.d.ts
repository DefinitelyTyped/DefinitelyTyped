import * as React from "react";
import { UserInterface } from "../";

export interface UserPassesTestProps {
    testFunc: (user: UserInterface) => boolean;
}
declare const UserPassesTest: React.FC<UserPassesTestProps>;
export default UserPassesTest;
