import * as React from 'react';
interface withAuthHeaderProps {
    isAuth: string;
}
declare function withIsAuth<P extends withAuthHeaderProps>(Component: React.ComponentType<P>): React.FC<P>;
export default withIsAuth;
