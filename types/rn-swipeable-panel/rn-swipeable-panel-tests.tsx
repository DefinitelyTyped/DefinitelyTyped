import * as React from 'react';
import { SwipeablePanel } from 'rn-swipeable-panel';

export const App: React.FC = () => {
    const [isActive, setIsActive] = React.useState<boolean>(false);

    const onClosePanel = () => setIsActive(false);

    return <SwipeablePanel isActive={isActive} onClose={onClosePanel}></SwipeablePanel>;
};
