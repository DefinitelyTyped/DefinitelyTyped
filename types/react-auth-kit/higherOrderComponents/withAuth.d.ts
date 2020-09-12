import * as React from 'react';
interface withAuthProps {
    authState: object | null;
}
declare function withAuth<P extends withAuthProps>(Component: React.ComponentType<P>): React.FC<P>;
export default withAuth;
