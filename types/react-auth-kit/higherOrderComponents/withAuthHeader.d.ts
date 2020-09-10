import * as React from 'react';
interface withAuthHeaderProps {
    authHeader: string;
}
declare function withAuthHeader<P extends withAuthHeaderProps>(Component: React.ComponentType<P>): React.FC<P>;
export default withAuthHeader;
