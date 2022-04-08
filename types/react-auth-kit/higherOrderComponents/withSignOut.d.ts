import * as React from 'react';
interface withSignOutProps {
    signOut(): boolean;
}
declare function withSignOut<P extends withSignOutProps>(Component: React.ComponentType<P>): React.FC<P>;
export default withSignOut;
