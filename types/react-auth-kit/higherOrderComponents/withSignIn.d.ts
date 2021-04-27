import * as React from 'react';
import { signInFunctionParams } from "../types";
interface withSignInProps {
    signIn(params: signInFunctionParams): boolean;
}
declare function withSignIn<P extends withSignInProps>(Component: React.ComponentType<P>): React.FC<P>;
export default withSignIn;
