import * as React from "react";

import ActionHeader from "terra-action-header";

const callback: (event: React.MouseEvent<HTMLButtonElement>) => void = () => {};

const AllProps = (
    <ActionHeader
        level={1}
        onClose={callback}
        onBack={callback}
        onMaximize={callback}
        onMinimize={callback}
        onNext={callback}
        onPrevious={callback}
        title="Title"
    />
);

const NoProps = <ActionHeader />;
